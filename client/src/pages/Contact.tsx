import { useState, useEffect } from "react";
import { Phone, Mail, MapPin, Shield, Check, ArrowRight } from "lucide-react";
import Layout from "@/components/Layout";
import { t } from "@/lib/translations";
import { MapView } from "@/components/Map";

export default function Contact() {
  const [lang, setLang] = useState<"zh" | "en">("zh");
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    interest: "",
    amount: "",
    message: ""
  });

  useEffect(() => {
    const savedLang = localStorage.getItem("dilliz_lang");
    if (savedLang === "zh" || savedLang === "en") {
      setLang(savedLang);
    }

    const handleLangChange = () => {
      const updatedLang = localStorage.getItem("dilliz_lang");
      if (updatedLang === "zh" || updatedLang === "en") {
        setLang(updatedLang);
      }
    };

    window.addEventListener("dilliz_lang_changed", handleLangChange);
    return () => window.removeEventListener("dilliz_lang_changed", handleLangChange);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // 模擬表單提交
    setSubmitted(true);
    setFormData({
      name: "",
      phone: "",
      email: "",
      interest: "",
      amount: "",
      message: ""
    });
  };

  return (
    <Layout>
      <div className="py-20 bg-[#030914] relative overflow-hidden">
        
        {/* 背景裝飾 */}
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-metal-gold/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 space-y-20">
          
          {/* 頁面標題 */}
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="text-xs font-bold tracking-[0.25em] text-metal-gold uppercase block">Contact Us</span>
            <h1 className="text-4xl md:text-5xl font-bold text-metal-gold font-serif leading-tight">
              {t("contact.title", lang)}
            </h1>
            <p className="text-slate-300 font-light leading-relaxed">
              {t("contact.subtitle", lang)}
            </p>
          </div>

          {/* 聯絡雙欄佈局 */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-stretch">
            
            {/* 左側：聯絡資訊與地圖 (佔 5 格) */}
            <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
              
              {/* 聯絡細項 */}
              <div className="bg-white/5 border border-white/10 p-8 rounded-3xl space-y-6 shadow-md relative overflow-hidden">
                <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-metal-gold" />
                <h3 className="text-xl font-bold text-slate-200 font-serif mb-4">
                  {t("contact.info.title", lang)}
                </h3>

                <div className="space-y-4">
                  
                  {/* 電話 */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-metal-gold/10 border border-metal-gold/20 flex items-center justify-center text-metal-gold shrink-0">
                      <Phone size={18} />
                    </div>
                    <div>
                      <span className="text-[10px] text-slate-500 font-bold tracking-wider uppercase block">
                        {t("contact.info.phone", lang)}
                      </span>
                      <a href="tel:+85265286838" className="text-slate-200 font-bold hover:text-metal-gold transition-colors text-sm">
                        {t("contact.info.phone.value", lang)}
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
                      <a href="mailto:info@dilliztrust.com" className="text-slate-200 font-bold hover:text-metal-gold transition-colors text-sm">
                        info@dilliztrust.com
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
                      <span className="text-slate-200 font-medium text-xs leading-relaxed block">
                        {t("contact.info.address.value", lang)}
                      </span>
                    </div>
                  </div>

                </div>

                <div className="pt-6 border-t border-white/5 flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-metal-gold/10 flex items-center justify-center text-metal-gold">
                    <Shield size={12} />
                  </div>
                  <span className="text-[10px] text-metal-gold font-bold tracking-wider uppercase">
                    {t("contact.info.slogan", lang)}
                  </span>
                </div>

              </div>

              {/* 總部地圖 (使用 MapView 組件，Google 地圖) */}
              <div className="rounded-3xl overflow-hidden border border-white/10 shadow-luxury h-[280px] relative">
                <MapView 
                  onMapReady={(map: any) => {
                    const maps = (window as any).google.maps;
                    const geocoder = new maps.Geocoder();
                    const address = "Unit I, 17/F, Billion Plaza, 133 Hoi Bun Road, Kwun Tong, Hong Kong";
                    
                    geocoder.geocode({ address }, (results: any[], status: string) => {
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
            <div className="lg:col-span-7 bg-white/5 border border-white/10 p-8 md:p-12 rounded-3xl shadow-gold-glow relative flex flex-col justify-between">
              
              <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-metal-gold" />
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-metal-gold" />

              {submitted ? (
                <div className="py-16 text-center space-y-6 max-w-md mx-auto my-auto animate-fadeIn">
                  <div className="w-16 h-16 rounded-full bg-metal-gold/10 border border-metal-gold/30 flex items-center justify-center text-metal-gold mx-auto shadow-gold-glow">
                    <Check size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-200 font-serif">
                    {lang === "zh" ? "提交成功" : "Inquiry Submitted"}
                  </h3>
                  <p className="text-slate-300 text-sm leading-relaxed font-light">
                    {t("contact.form.success", lang)}
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="btn-gold px-8 py-3 font-bold text-xs tracking-widest uppercase inline-flex items-center gap-2"
                  >
                    {lang === "zh" ? "再次諮詢" : "Submit Another"} <ArrowRight size={14} />
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <h3 className="text-2xl font-bold text-slate-200 font-serif mb-6">
                    {t("contact.form.title", lang)}
                  </h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    
                    {/* 姓名 */}
                    <div className="space-y-2">
                      <label className="text-[10px] text-slate-400 font-bold tracking-wider uppercase block">
                        {t("contact.form.name", lang)} <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        placeholder={lang === "zh" ? "請輸入您的姓名" : "Enter your name"}
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-[#030914] border border-white/10 rounded-xl px-4 py-3 text-sm text-slate-200 focus:outline-none focus:border-metal-gold transition-colors"
                      />
                    </div>

                    {/* 電話 */}
                    <div className="space-y-2">
                      <label className="text-[10px] text-slate-400 font-bold tracking-wider uppercase block">
                        {t("contact.form.phone", lang)} <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder={lang === "zh" ? "請輸入聯絡電話" : "Enter phone number"}
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-[#030914] border border-white/10 rounded-xl px-4 py-3 text-sm text-slate-200 focus:outline-none focus:border-metal-gold transition-colors"
                      />
                    </div>

                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    
                    {/* 電郵 */}
                    <div className="space-y-2">
                      <label className="text-[10px] text-slate-400 font-bold tracking-wider uppercase block">
                        {t("contact.form.email", lang)} <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        placeholder={lang === "zh" ? "請輸入電子郵件" : "Enter email address"}
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-[#030914] border border-white/10 rounded-xl px-4 py-3 text-sm text-slate-200 focus:outline-none focus:border-metal-gold transition-colors"
                      />
                    </div>

                    {/* 服務選擇 */}
                    <div className="space-y-2">
                      <label className="text-[10px] text-slate-400 font-bold tracking-wider uppercase block">
                        {t("contact.form.interest", lang)} <span className="text-red-500">*</span>
                      </label>
                      <select
                        required
                        value={formData.interest}
                        onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                        className="w-full bg-[#030914] border border-white/10 rounded-xl px-4 py-3 text-sm text-slate-200 focus:outline-none focus:border-metal-gold transition-colors appearance-none cursor-pointer"
                      >
                        <option value="" disabled>{t("contact.form.interest.placeholder", lang)}</option>
                        <option value="asset">{t("contact.form.interest.asset", lang)}</option>
                        <option value="trust">{t("contact.form.interest.trust", lang)}</option>
                        <option value="deposit">{t("contact.form.interest.deposit", lang)}</option>
                        <option value="finance">{t("contact.form.interest.finance", lang)}</option>
                        <option value="card">{t("contact.form.interest.card", lang)}</option>
                      </select>
                    </div>

                  </div>

                  {/* 資產規模 */}
                  <div className="space-y-2">
                    <label className="text-[10px] text-slate-400 font-bold tracking-wider uppercase block">
                      {t("contact.form.amount", lang)} <span className="text-red-500">*</span>
                    </label>
                    <select
                      required
                      value={formData.amount}
                      onChange={(e) => setFormData({ ...formData, amount: e.target.value })}
                      className="w-full bg-[#030914] border border-white/10 rounded-xl px-4 py-3 text-sm text-slate-200 focus:outline-none focus:border-metal-gold transition-colors appearance-none cursor-pointer"
                    >
                      <option value="" disabled>{t("contact.form.amount.placeholder", lang)}</option>
                      <option value="t1">{t("contact.form.amount.t1", lang)}</option>
                      <option value="t2">{t("contact.form.amount.t2", lang)}</option>
                      <option value="t3">{t("contact.form.amount.t3", lang)}</option>
                      <option value="t4">{t("contact.form.amount.t4", lang)}</option>
                    </select>
                  </div>

                  {/* 備註 */}
                  <div className="space-y-2">
                    <label className="text-[10px] text-slate-400 font-bold tracking-wider uppercase block">
                      {t("contact.form.message", lang)}
                    </label>
                    <textarea
                      rows={4}
                      placeholder={t("contact.form.message.placeholder", lang)}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-[#030914] border border-white/10 rounded-xl px-4 py-3 text-sm text-slate-200 focus:outline-none focus:border-metal-gold transition-colors resize-none"
                    />
                  </div>

                  {/* 提交 */}
                  <button
                    type="submit"
                    className="w-full btn-gold shadow-gold-glow py-4 font-bold text-xs tracking-widest uppercase flex items-center justify-center gap-2"
                  >
                    {t("contact.form.btn.submit", lang)} <ArrowRight size={14} />
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
