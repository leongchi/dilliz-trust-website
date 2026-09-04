import { useState, useEffect } from "react";
import { Mail, Phone, MapPin, Shield, CheckCircle2, ArrowRight, MessageSquare, Check, Loader2 } from "lucide-react";
import Layout from "@/components/Layout";
import { t } from "@/lib/translations";
import { MapView } from "@/components/Map";
import {
  contactContinuationCopy,
  storeContactAssessmentPrefill,
  type ContactAssessmentPrefill
} from "@/lib/contactAssessmentHandoff";
import emailjs from "@emailjs/browser";
import { toast } from "sonner";
import { useLocation } from "wouter";

// ==========================================
// EmailJS 服務配置說明 (方案一)
// ==========================================
// 為了使此表單能夠真正發送郵件，您需要註冊並配置 EmailJS (https://www.emailjs.com/)
// 註冊後，請在下方填入您的 Service ID、Template ID 和 Public Key。
//
// 1. SERVICE_ID: 您的郵件服務 ID (例如: "service_xxx")
// 2. TEMPLATE_ID: 您的郵件模板 ID (例如: "template_xxx")
// 3. PUBLIC_KEY: 您的帳戶公鑰 (例如: "user_xxx" 或 "xxx-xxxxxxxxxxxx")
//
// 建議的郵件模板 (Email Template) 變數配置：
// - 客戶姓名: {{from_name}}
// - 聯絡電話: {{phone}}
// - 電子郵件: {{reply_to}}
// - 諮詢留言: {{message}}
// - 收件人: info@dilliz.com
// ==========================================
const EMAILJS_SERVICE_ID: string = "service_p02igzf";     // 填入您的 EmailJS Service ID
const EMAILJS_TEMPLATE_ID: string = "template_qunjjdo";   // 填入您的 EmailJS Template ID
const EMAILJS_PUBLIC_KEY: string = "jV6VJZBOtjeaELQb2";     // 填入您的 Public Key (在 Account -> API Keys 頁面)

export default function Contact() {
  const [, setLocation] = useLocation();
  const isSandboxContactTest = import.meta.env.DEV && new URLSearchParams(window.location.search).has("shortFormTest");
  const [lang, setLang] = useState<"zh" | "en" | "cn">("zh");
  const [submitted, setSubmitted] = useState(false);
  const [submittedContact, setSubmittedContact] = useState<ContactAssessmentPrefill | null>(null);
  const [continuationSkipped, setContinuationSkipped] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: ""
  });

  // 實時格式校驗狀態
  const [errors, setErrors] = useState({
    phone: "",
    email: "",
    contact: ""
  });

  // 正規表示式定義
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  // 支援國際格式（如 +852 6528 6838, 0912-345-678, 13800138000 等，長度在 8 到 15 位之間）
  const phoneRegex = /^\+?[0-9\s\-()]{8,15}$/;

  // 實時校驗電郵
  const validateEmail = (value: string) => {
    if (!value) {
      return "";
    }
    if (!emailRegex.test(value)) {
      return t("inline.contact.0", lang);
    }
    return "";
  };

  // 實時校驗電話
  const validatePhone = (value: string) => {
    if (!value) {
      return "";
    }
    if (!phoneRegex.test(value)) {
      return t("inline.contact.1", lang);
    }
    return "";
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setFormData(prev => ({ ...prev, email: val }));
    setErrors(prev => ({ ...prev, email: validateEmail(val), contact: val || formData.phone ? "" : prev.contact }));
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setFormData(prev => ({ ...prev, phone: val }));
    setErrors(prev => ({ ...prev, phone: validatePhone(val), contact: val || formData.email ? "" : prev.contact }));
  };

  useEffect(() => {
    const savedLang = localStorage.getItem("dilliz_lang");
    if (savedLang === "zh" || savedLang === "en" || savedLang === "cn") {
      setLang(savedLang as "zh" | "en" | "cn");
    }

    const handleLangChange = () => {
      const updatedLang = localStorage.getItem("dilliz_lang");
      if (updatedLang === "zh" || updatedLang === "en" || updatedLang === "cn") {
        setLang(updatedLang as "zh" | "en" | "cn");
      }
    };

    window.addEventListener("dilliz_lang_changed", handleLangChange);
    return () => window.removeEventListener("dilliz_lang_changed", handleLangChange);
  }, []);

  useEffect(() => {
    if (!import.meta.env.DEV || !new URLSearchParams(window.location.search).has("continuationPreview")) return;
    const fictionalContact = {
      name: "陳測試",
      phone: "+852 5555 0101",
      email: "test.applicant@example.com"
    };
    setSubmittedContact(fictionalContact);
    setSubmitted(true);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // 提交前進行最終格式校驗
    const emailErr = validateEmail(formData.email);
    const phoneErr = validatePhone(formData.phone);
    const contactErr = !formData.email.trim() && !formData.phone.trim()
      ? contactContinuationCopy.contactRequired[lang]
      : "";

    if (emailErr || phoneErr || contactErr) {
      setErrors({ email: emailErr, phone: phoneErr, contact: contactErr });
      toast.error(
        t("inline.contact.2", lang)
      );
      return;
    }

    if (isSandboxContactTest) {
      setSubmittedContact({ name: formData.name, phone: formData.phone, email: formData.email });
      setContinuationSkipped(false);
      setSubmitted(true);
      setFormData({ name: "", phone: "", email: "", message: "" });
      return;
    }
    
    // 如果未配置 EmailJS，提示用戶配置，但仍然允許前端模擬成功以防體驗中斷
    if (
      EMAILJS_SERVICE_ID === "YOUR_SERVICE_ID" ||
      EMAILJS_TEMPLATE_ID === "YOUR_TEMPLATE_ID" ||
      EMAILJS_PUBLIC_KEY === "YOUR_PUBLIC_KEY"
    ) {
      toast.warning(
        t("inline.contact.3", lang)
      );

      setSubmittedContact({ name: formData.name, phone: formData.phone, email: formData.email });
      setContinuationSkipped(false);
      setSubmitted(true);
      setFormData({
        name: "",
        phone: "",
        email: "",
        message: ""
      });
      return;
    }

    setIsSending(true);

    try {
      const templateParams = {
        from_name: formData.name,
        phone: formData.phone || contactContinuationCopy.notProvided[lang],
        reply_to: formData.email || "info@dilliz.com",
        message: formData.message || "（無留言 / No Message）"
      };

      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      );

      toast.success(
        t("inline.contact.4", lang)
      );

      setSubmittedContact({ name: formData.name, phone: formData.phone, email: formData.email });
      setContinuationSkipped(false);
      setSubmitted(true);
      setFormData({
        name: "",
        phone: "",
        email: "",
        message: ""
      });
    } catch (error: any) {
      console.error("EmailJS Error:", error);
      
      // 提取 EmailJS 的錯誤資訊進行精準診斷
      const errStatus = error?.status;
      const errText = error?.text || "";
      
      let errorMsgZh = "發送失敗，請稍後再試，或直接發送郵件至 info@dilliz.com";
      let errorMsgEn = "Failed to send inquiry. Please try again later or email us at info@dilliz.com";
      
      if (errStatus === 400 && errText.includes("service ID not found")) {
        errorMsgZh = "發送失敗：EmailJS Service ID 錯誤，請檢查您的配置。";
        errorMsgEn = "Failed: EmailJS Service ID not found. Please check your configuration.";
      } else if (errStatus === 400 && errText.includes("template ID not found")) {
        errorMsgZh = "發送失敗：EmailJS Template ID 錯誤，請檢查您的配置。";
        errorMsgEn = "Failed: EmailJS Template ID not found. Please check your configuration.";
      } else if (errStatus === 401 || errText.includes("public key") || errText.includes("API key")) {
        errorMsgZh = "發送失敗：EmailJS Public Key 錯誤，請檢查您的配置。";
        errorMsgEn = "Failed: EmailJS Public Key is invalid. Please check your configuration.";
      }
      
      toast.error(lang === "zh" ? errorMsgZh : errorMsgEn);
    } finally {
      setIsSending(false);
    }
  };

  const continueToAssessment = () => {
    if (!submittedContact) return;
    storeContactAssessmentPrefill(submittedContact);
    setLocation("/account-opening-assessment");
  };

  const resetContactForm = () => {
    setSubmittedContact(null);
    setContinuationSkipped(false);
    setSubmitted(false);
  };

  return (
    <Layout>
      <div className="py-20 bg-[#1a1a1a] relative overflow-hidden">
        
        {/* 背景裝飾 */}
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-metal-gold/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 space-y-20">
          
          {/* 頁面標題 */}
          <div className={`text-center mx-auto space-y-4 ${lang === "en" ? "max-w-5xl" : "max-w-3xl"}`}>
            <span className="text-xs font-bold tracking-[0.25em] text-metal-gold uppercase block">Contact Us</span>
            <h1 className={`${lang === "en" ? "text-3xl sm:text-4xl md:text-[42px] lg:text-5xl md:whitespace-nowrap" : "text-4xl md:text-5xl"} font-bold text-metal-gold font-serif leading-tight`}>
              {t("contact.title", lang)}
            </h1>
            <p className="text-slate-300 font-light leading-relaxed whitespace-pre-line">
              {t("contact.subtitle", lang)}
            </p>
          </div>

          {/* 聯絡雙欄佈局 */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-stretch">
            
            {/* 左側：聯絡資訊與地圖 (佔 5 格) */}
            <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
              
              {/* 聯絡細項 */}
              <div className="bg-white/5 border border-white/10 p-8 rounded-3xl space-y-6 shadow-md relative overflow-hidden animate-fadeIn">
                <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-metal-gold" />
                <h3 className="text-xl font-bold text-slate-200 font-serif mb-4">
                  {t("contact.info.title", lang)}
                </h3>

                <div className="space-y-4">
                  
                  {/* WhatsApp */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-metal-gold/10 border border-metal-gold/20 flex items-center justify-center text-metal-gold shrink-0">
                      <MessageSquare size={18} />
                    </div>
                    <div>
                      <span className="text-[10px] text-slate-500 font-bold tracking-wider uppercase block">
                        {t("contact.info.phone", lang)}
                      </span>
                      <a href="https://wa.me/85265286838" target="_blank" rel="noopener noreferrer" className="text-slate-200 font-bold hover:text-metal-gold transition-colors text-sm flex items-center gap-1.5">
                        {t("contact.info.phone.value", lang)}
                        <span className="text-[9px] bg-green-500/20 text-green-400 border border-green-500/30 px-1.5 py-0.5 rounded-full font-sans">WhatsApp</span>
                      </a>
                    </div>
                  </div>

                  {/* 電郵 */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-metal-gold/10 border border-metal-gold/20 flex items-center justify-center text-metal-gold shrink-0">
                      <Mail size={18} />
                    </div>
                    <div>
                      <span className="text-[10px] text-slate-500 font-bold tracking-wider uppercase block">
                        {t("contact.info.email", lang)}
                      </span>
                      <a href="mailto:info@dilliz.com" className="text-slate-200 font-bold hover:text-metal-gold transition-colors text-sm">
                        info@dilliz.com
                      </a>
                    </div>
                  </div>

                  {/* 地址 */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-metal-gold/10 border border-metal-gold/20 flex items-center justify-center text-metal-gold shrink-0">
                      <MapPin size={18} />
                    </div>
                    <div>
                      <span className="text-[10px] text-slate-500 font-bold tracking-wider uppercase block">
                        {t("contact.info.address", lang)}
                      </span>
                      <span className="text-slate-200 font-medium text-xs leading-relaxed block whitespace-pre-line">
                        {t("contact.info.address.value", lang)}
                      </span>
                    </div>
                  </div>

                </div>

                <div className="pt-6 border-t border-white/5 flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-metal-gold/10 flex items-center justify-center text-metal-gold">
                    <Shield size={12} />
                  </div>
                  <span className="text-[10px] text-metal-gold font-bold tracking-wider uppercase whitespace-pre-line leading-relaxed">
                    {t("contact.info.slogan", lang)}
                  </span>
                </div>

              </div>

              {/* 總部地圖 (使用 MapView 組件，Google 地圖) */}
              <div className="rounded-3xl overflow-hidden border border-white/10 shadow-luxury h-[280px] relative animate-fadeIn animation-delay-200">
                <MapView 
                  onMapReady={(map: any) => {
                    const maps = (window as any).google.maps;
                    const geocoder = new maps.Geocoder();
                    const address = "Unit I, 17/F, MG Tower, 133 Hoi Bun Road, Kwun Tong, Hong Kong";
                    
                    geocoder.geocode({ address }, (results: any, status: any) => {
                      if (status === "OK" && results && results[0]) {
                        const location = results[0].geometry.location;
                        map.setCenter(location);
                        map.setZoom(16);
                        
                        // 自定義精美金色標記
                        new maps.Marker({
                          position: location,
                          map,
                          title: "DILLIZ CAPITAL TRUST LIMITED",
                          animation: maps.Animation.DROP
                        });
                      }
                    });
                  }}
                />
              </div>

            </div>

            {/* 右側：諮詢預約表單 (佔 7 格) */}
            <div className="lg:col-span-7 bg-white/5 border border-white/10 p-8 md:p-12 rounded-3xl shadow-gold-glow relative flex flex-col justify-between animate-fadeIn animation-delay-300">
              
              <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-metal-gold" />
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-metal-gold" />

              {submitted ? (
                <div className="py-10 text-center space-y-6 max-w-lg mx-auto my-auto animate-fadeIn">
                  <div className="w-16 h-16 rounded-full bg-metal-gold/10 border border-metal-gold/30 flex items-center justify-center text-metal-gold mx-auto shadow-gold-glow">
                    <Check size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-200 font-serif">
                    {t("inline.contact.5", lang)}
                  </h3>
                  <p className="text-slate-300 text-sm leading-relaxed font-light">
                    {t("contact.form.success", lang)}
                  </p>
                  {submittedContact && !continuationSkipped && (
                    <div className="border-y border-metal-gold/25 bg-[#171b20]/80 px-5 py-7 text-left sm:px-7">
                      <span className="text-[9px] font-bold tracking-[0.2em] text-metal-gold uppercase">
                        {contactContinuationCopy.eyebrow[lang]}
                      </span>
                      <h4 className="mt-3 font-serif text-xl font-bold leading-tight text-slate-100">
                        {contactContinuationCopy.title[lang]}
                      </h4>
                      <p className="mt-3 text-sm font-light leading-7 text-slate-400">
                        {contactContinuationCopy.body[lang]}
                      </p>
                      <button
                        type="button"
                        onClick={continueToAssessment}
                        className="btn-gold mt-6 inline-flex min-h-12 w-full items-center justify-center gap-2 px-6 text-xs font-bold tracking-[0.12em] uppercase"
                      >
                        {contactContinuationCopy.continue[lang]} <ArrowRight size={14} />
                      </button>
                      <button
                        type="button"
                        onClick={() => setContinuationSkipped(true)}
                        className="mt-3 inline-flex min-h-11 w-full items-center justify-center px-4 text-[10px] font-bold tracking-[0.12em] text-slate-500 uppercase transition-colors hover:text-slate-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-metal-gold"
                      >
                        {contactContinuationCopy.skip[lang]}
                      </button>
                      <p className="mt-4 text-[10px] leading-5 text-slate-600">
                        {contactContinuationCopy.privacy[lang]}
                      </p>
                    </div>
                  )}
                  {continuationSkipped && (
                    <p role="status" className="border-y border-white/10 px-5 py-5 text-sm leading-6 text-slate-400">
                      {contactContinuationCopy.skipConfirmed[lang]}
                    </p>
                  )}
                  <button
                    type="button"
                    onClick={resetContactForm}
                    className="inline-flex min-h-11 items-center justify-center gap-2 border border-white/10 px-6 text-[10px] font-bold tracking-[0.12em] text-slate-400 uppercase transition-colors hover:border-metal-gold/50 hover:text-metal-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-metal-gold"
                  >
                    {t("inline.contact.6", lang)} <ArrowRight size={14} />
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <h3 className="text-2xl font-bold text-slate-200 font-serif mb-6">
                    {t("contact.form.title", lang)}
                  </h3>
                  <p className="-mt-3 text-xs leading-6 text-slate-500">
                    {contactContinuationCopy.minimumHint[lang]}
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    
                    {/* 姓名 */}
                    <div className="space-y-2">
                      <label className="text-[10px] text-slate-400 font-bold tracking-wider uppercase block">
                        {t("contact.form.name", lang)} <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        placeholder={t("inline.contact.7", lang)}
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-[#1a1a1a] border border-white/10 rounded-xl px-4 py-3 text-sm text-slate-200 focus:outline-none focus:border-metal-gold focus:ring-1 focus:ring-metal-gold/30 transition-all duration-300"
                      />
                    </div>

                    {/* 電話 */}
                    <div className="space-y-2">
                      <label className="text-[10px] text-slate-400 font-bold tracking-wider uppercase block">
                        {t("contact.form.phone", lang)} <span className="text-slate-600">{contactContinuationCopy.optional[lang]}</span>
                      </label>
                      <input
                        type="tel"
                        placeholder={lang === "zh" ? "請輸入聯絡電話" : "Enter phone number"}
                        value={formData.phone}
                        onChange={handlePhoneChange}
                        className={`w-full bg-[#1a1a1a] border rounded-xl px-4 py-3 text-sm text-slate-200 focus:outline-none transition-all duration-300 ${
                          errors.phone 
                            ? "border-red-500/50 focus:border-red-500 focus:ring-1 focus:ring-red-500/30" 
                            : "border-white/10 focus:border-metal-gold focus:ring-1 focus:ring-metal-gold/30"
                        }`}
                      />
                      {errors.phone && (
                        <p className="text-[10px] text-red-400/90 font-medium tracking-wide animate-fadeIn">
                          {errors.phone}
                        </p>
                      )}
                    </div>

                  </div>

                  <div className="grid grid-cols-1 gap-6">
                    
                    {/* 電郵 */}
                    <div className="space-y-2">
                      <label className="text-[10px] text-slate-400 font-bold tracking-wider uppercase block">
                        {t("contact.form.email", lang)} <span className="text-slate-600">{contactContinuationCopy.optional[lang]}</span>
                      </label>
                      <input
                        type="email"
                        placeholder={t("inline.contact.8", lang)}
                        value={formData.email}
                        onChange={handleEmailChange}
                        className={`w-full bg-[#1a1a1a] border rounded-xl px-4 py-3 text-sm text-slate-200 focus:outline-none transition-all duration-300 ${
                          errors.email 
                            ? "border-red-500/50 focus:border-red-500 focus:ring-1 focus:ring-red-500/30" 
                            : "border-white/10 focus:border-metal-gold focus:ring-1 focus:ring-metal-gold/30"
                        }`}
                      />
                      {errors.email && (
                        <p className="text-[10px] text-red-400/90 font-medium tracking-wide animate-fadeIn">
                          {errors.email}
                        </p>
                      )}
                    </div>

                  </div>

                  {errors.contact && (
                    <p role="alert" className="-mt-3 text-[10px] font-medium tracking-wide text-red-400/90 animate-fadeIn">
                      {errors.contact}
                    </p>
                  )}

                  {/* 備註 */}
                  <div className="space-y-2">
                    <label className="text-[10px] text-slate-400 font-bold tracking-wider uppercase block">
                      {t("contact.form.message", lang)}
                    </label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-[#1a1a1a] border border-white/10 rounded-xl px-4 py-3 text-sm text-slate-200 focus:outline-none focus:border-metal-gold focus:ring-1 focus:ring-metal-gold/30 transition-all duration-300 resize-none"
                    />
                  </div>

                  {/* 提交 */}
                  <button
                    type="submit"
                    disabled={isSending}
                    className="w-full btn-gold shadow-gold-glow py-4 font-bold text-xs tracking-widest uppercase flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSending ? (
                      <>
                        <Loader2 className="animate-spin" size={14} />
                        {t("inline.contact.9", lang)}
                      </>
                    ) : (
                      <>
                        {t("contact.form.btn.submit", lang)} <ArrowRight size={14} />
                      </>
                    )}
                  </button>

                </form>
              )}

            </div>

          </div>

        </div>

      </div>
    </Layout>
  );
}
