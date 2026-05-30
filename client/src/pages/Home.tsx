import React, { useState } from "react";
import { 
  Shield, 
  Briefcase, 
  Globe, 
  CreditCard, 
  FileText, 
  ChevronDown, 
  ChevronRight,
  ChevronUp,
  Phone, 
  Mail, 
  MapPin, 
  Award, 
  Check, 
  ArrowRight, 
  Menu, 
  X,
  ExternalLink,
  Users,
  Lock,
  HeartPulse,
  TrendingUp,
  Coins,
  Settings
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { toast } from "sonner";
import { translations } from "../lib/translations";

export default function Home() {
  // 語言狀態管理："zh" 為繁體中文，"en" 為英文
  const [lang, setLang] = useState<"zh" | "en">("zh");

  // 翻譯輔助函數
  const t = (key: string) => {
    if (translations[key]) {
      return translations[key][lang];
    }
    return key;
  };

  const [mobileMenuOpen, setMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<"asset" | "trust" | "deposit" | "finance" | "card">("asset");
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [formSubmitted, setFormSubmitted] = useState(false);
  
  // 當前選中的案例索引 (0-5)
  const [activeCaseIdx, setActiveCaseIdx] = useState<number>(0);

  // 表單數據狀態
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    interest: "",
    amount: "",
    message: ""
  });

  const handlePlaceholderClick = (featureName: string) => {
    toast.info(lang === "zh" ? `${featureName}功能即將推出，敬請期待！` : `${featureName} feature is coming soon, stay tuned!`, {
      description: lang === "zh" ? "我們的專屬客戶經理將竭誠為您服務。" : "Our dedicated relationship manager will be at your service.",
    });
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.email) {
      toast.error(lang === "zh" ? "請填寫所有必填欄位" : "Please fill in all required fields");
      return;
    }
    setFormSubmitted(true);
    toast.success(t("contact.form.success"));
  };

  // 核心服務數據結構 (對齊宣傳單張)
  const services = {
    asset: {
      title: t("services.asset.title"),
      description: t("services.asset.desc"),
      features: [
        t("services.asset.feature1"),
        t("services.asset.feature2"),
        t("services.asset.feature3")
      ],
      icon: Shield,
      image: "/manus-storage/trust_concept_19a00831.png"
    },
    trust: {
      title: t("services.trust.title"),
      description: t("services.trust.desc"),
      features: [
        t("services.trust.feature1"),
        t("services.trust.feature2"),
        t("services.trust.feature3")
      ],
      icon: Award,
      image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=800"
    },
    deposit: {
      title: t("services.deposit.title"),
      description: t("services.deposit.desc"),
      features: [
        t("services.deposit.feature1"),
        t("services.deposit.feature2"),
        t("services.deposit.feature3")
      ],
      icon: Globe,
      image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&q=80&w=800"
    },
    finance: {
      title: t("services.finance.title"),
      description: t("services.finance.desc"),
      features: [
        t("services.finance.feature1"),
        t("services.finance.feature2"),
        t("services.finance.feature3")
      ],
      icon: CreditCard,
      image: "/manus-storage/credit_card_226f376a.png"
    },
    card: {
      title: t("services.card.title"),
      description: t("services.card.desc"),
      features: [
        t("services.card.feature1"),
        t("services.card.feature2"),
        t("services.card.feature3")
      ],
      icon: FileText,
      image: "https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&q=80&w=800"
    }
  };

  // 案例分析數據
  const cases = [
    {
      badge: t("cases.c1.badge"),
      title: t("cases.c1.title"),
      desc: t("cases.c1.desc"),
      icon: Briefcase,
      color: "from-blue-500 to-[#0B1E36]"
    },
    {
      badge: t("cases.c2.badge"),
      title: t("cases.c2.title"),
      desc: t("cases.c2.desc"),
      icon: Users,
      color: "from-amber-500 to-yellow-600"
    },
    {
      badge: t("cases.c3.badge"),
      title: t("cases.c3.title"),
      desc: t("cases.c3.desc"),
      icon: HeartPulse,
      color: "from-emerald-500 to-teal-600"
    },
    {
      badge: t("cases.c4.badge"),
      title: t("cases.c4.title"),
      desc: t("cases.c4.desc"),
      icon: Globe,
      color: "from-indigo-500 to-purple-600"
    },
    {
      badge: t("cases.c5.badge"),
      title: t("cases.c5.title"),
      desc: t("cases.c5.desc"),
      icon: Lock,
      color: "from-red-500 to-rose-600"
    },
    {
      badge: t("cases.c6.badge"),
      title: t("cases.c6.title"),
      desc: t("cases.c6.desc"),
      icon: Award,
      color: "from-cyan-500 to-blue-600"
    }
  ];

  // 會員計劃數據結構 (對齊宣傳單張對照表)
  const membershipTiers = [
    {
      name: t("membership.t1.name"),
      threshold: t("membership.t1.threshold"),
      duration: t("membership.t1.duration"),
      offshore: t("membership.t1.offshore"),
      billpay: t("membership.t1.billpay"),
      service: t("membership.t1.service"),
      linkedcard: true,
      highlight: false,
      bg: "bg-white",
      border: "border-slate-100"
    },
    {
      name: t("membership.t2.name"),
      threshold: t("membership.t2.threshold"),
      duration: t("membership.t2.duration"),
      offshore: t("membership.t2.offshore"),
      billpay: t("membership.t2.billpay"),
      service: t("membership.t2.service"),
      linkedcard: true,
      highlight: false,
      bg: "bg-white",
      border: "border-slate-100"
    },
    {
      name: t("membership.t3.name"),
      threshold: t("membership.t3.threshold"),
      duration: t("membership.t3.duration"),
      offshore: t("membership.t3.offshore"),
      billpay: t("membership.t3.billpay"),
      service: t("membership.t3.service"),
      linkedcard: true,
      highlight: true,
      bg: "bg-amber-50/10",
      border: "border-amber-200/50"
    },
    {
      name: t("membership.t4.name"),
      threshold: t("membership.t4.threshold"),
      duration: t("membership.t4.duration"),
      offshore: t("membership.t4.offshore"),
      billpay: t("membership.t4.billpay"),
      service: t("membership.t4.service"),
      linkedcard: true,
      highlight: false,
      bg: "bg-[#071426] text-white",
      border: "border-slate-800"
    }
  ];

  // FAQ 數據
  const faqs = [
    {
      q: t("faq.q1"),
      a: t("faq.a1")
    },
    {
      q: t("faq.q2"),
      a: t("faq.a2")
    },
    {
      q: t("faq.q3"),
      a: t("faq.a3")
    },
    {
      q: t("faq.q4"),
      a: t("faq.a4")
    },
    {
      q: t("faq.q5"),
      a: t("faq.a5")
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#FDFBF7] text-slate-800 selection:bg-[#D4AF37] selection:text-[#0B1E36]">
      
      {/* 頂部導航欄 (Navbar) - 皇家深藍背景 */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#071426]/95 backdrop-blur-md border-b border-slate-800/50 shadow-lg transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">
          
          {/* Logo 區域 */}
          <a href="#" className="flex items-center gap-3 group">
            <img 
              src="/manus-storage/dilliz_logo_transparent_b12204c3.png" 
              alt="DILLIZ Logo" 
              className="h-16 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />
          </a>

          {/* 桌面端選單 */}
          <nav className="hidden lg:flex items-center gap-8">
            <a href="#about" className="text-sm font-medium tracking-wider text-slate-300 hover:text-[var(--gold)] transition-colors">
              {t("nav.about")}
            </a>
            <a href="#services" className="text-sm font-medium tracking-wider text-slate-300 hover:text-[var(--gold)] transition-colors">
              {t("nav.services")}
            </a>
            <a href="#cases" className="text-sm font-medium tracking-wider text-slate-300 hover:text-[var(--gold)] transition-colors">
              {t("nav.cases")}
            </a>
            <a href="#membership" className="text-sm font-medium tracking-wider text-slate-300 hover:text-[var(--gold)] transition-colors">
              {t("nav.membership")}
            </a>
            <a href="#faq" className="text-sm font-medium tracking-wider text-slate-300 hover:text-[var(--gold)] transition-colors">
              {t("nav.faq")}
            </a>
            <a href="#contact" className="text-sm font-medium tracking-wider text-slate-300 hover:text-[var(--gold)] transition-colors">
              {t("nav.contact")}
            </a>
          </nav>

          {/* 右側操作按鈕 (雙語切換 + 預約) */}
          <div className="hidden lg:flex items-center gap-6">
            {/* 雙語切換 */}
            <div className="flex items-center border border-slate-700 rounded-sm overflow-hidden text-xs">
              <button 
                onClick={() => setLang("zh")} 
                className={`px-3 py-1.5 font-bold tracking-wider transition-all ${
                  lang === "zh" ? "bg-[var(--gold)] text-[#0B1E36]" : "text-slate-400 hover:text-white bg-transparent"
                }`}
              >
                繁
              </button>
              <button 
                onClick={() => setLang("en")} 
                className={`px-3 py-1.5 font-bold tracking-wider transition-all ${
                  lang === "en" ? "bg-[var(--gold)] text-[#0B1E36]" : "text-slate-400 hover:text-white bg-transparent"
                }`}
              >
                EN
              </button>
            </div>

            <a 
              href="#contact" 
              className="btn-gold font-semibold text-xs tracking-wider py-2.5 px-5 flex items-center gap-2"
            >
              {t("nav.book")} <ArrowRight size={14} />
            </a>
          </div>

          {/* 行動端選單按鈕 */}
          <button 
            onClick={() => setMenuOpen(!mobileMenuOpen)}
            className="lg:hidden text-slate-300 hover:text-[var(--gold)] transition-colors"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

        </div>

        {/* 行動端下拉選單 - 皇家深藍背景 */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#071426] border-t border-slate-800/80 px-6 py-8 space-y-6 shadow-xl animate-fadeIn">
            <div className="flex flex-col gap-4">
              <a 
                href="#about" 
                onClick={() => setMenuOpen(false)}
                className="text-base font-medium text-slate-300 hover:text-[var(--gold)] border-b border-slate-800 pb-2"
              >
                {t("nav.about")}
              </a>
              <a 
                href="#services" 
                onClick={() => setMenuOpen(false)}
                className="text-base font-medium text-slate-300 hover:text-[var(--gold)] border-b border-slate-800 pb-2"
              >
                {t("nav.services")}
              </a>
              <a 
                href="#cases" 
                onClick={() => setMenuOpen(false)}
                className="text-base font-medium text-slate-300 hover:text-[var(--gold)] border-b border-slate-800 pb-2"
              >
                {t("nav.cases")}
              </a>
              <a 
                href="#membership" 
                onClick={() => setMenuOpen(false)}
                className="text-base font-medium text-slate-300 hover:text-[var(--gold)] border-b border-slate-800 pb-2"
              >
                {t("nav.membership")}
              </a>
              <a 
                href="#faq" 
                onClick={() => setMenuOpen(false)}
                className="text-base font-medium text-slate-300 hover:text-[var(--gold)] border-b border-slate-800 pb-2"
              >
                {t("nav.faq")}
              </a>
              <a 
                href="#contact" 
                onClick={() => setMenuOpen(false)}
                className="text-base font-medium text-slate-300 hover:text-[var(--gold)] border-b border-slate-800 pb-2"
              >
                {t("nav.contact")}
              </a>
            </div>

            {/* 語言與行動按鈕 */}
            <div className="flex flex-col gap-4 pt-4">
              <div className="flex items-center border border-slate-700 rounded-sm overflow-hidden text-xs self-start">
                <button 
                  onClick={() => { setLang("zh"); setMenuOpen(false); }} 
                  className={`px-4 py-2 font-bold tracking-wider transition-all ${
                    lang === "zh" ? "bg-[var(--gold)] text-[#0B1E36]" : "text-slate-400 bg-transparent"
                  }`}
                >
                  繁體中文
                </button>
                <button 
                  onClick={() => { setLang("en"); setMenuOpen(false); }} 
                  className={`px-4 py-2 font-bold tracking-wider transition-all ${
                    lang === "en" ? "bg-[var(--gold)] text-[#0B1E36]" : "text-slate-400 bg-transparent"
                  }`}
                >
                  English
                </button>
              </div>

              <a 
                href="#contact" 
                onClick={() => setMenuOpen(false)}
                className="btn-gold font-semibold text-xs tracking-wider py-3 text-center flex items-center justify-center gap-2"
              >
                {t("nav.book")} <ArrowRight size={14} />
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section - 奢華背景與大氣標題 */}
      <section className="relative min-h-screen pt-24 flex items-center bg-[#071426] overflow-hidden">
        {/* 背景圖片疊加半透明皇家藍暗色層 */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/manus-storage/hero_banner_b9f6b5a1.png" 
            alt="DILLIZ Office View" 
            className="w-full h-full object-cover opacity-35 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#071426] via-[#071426]/90 to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto px-6 py-20 relative z-10 w-full">
          <div className="max-w-3xl">
            
            {/* 信託牌照徽章 */}
            <div className="inline-flex items-center gap-2.5 bg-[#D4AF37]/10 border border-[#D4AF37]/30 px-4 py-2 mb-8 animate-fadeIn">
              <span className="w-1.5 h-1.5 bg-[var(--gold)] rounded-full animate-pulse" />
              <span className="text-xs md:text-sm font-bold tracking-widest text-[var(--gold)] uppercase">
                {t("hero.badge")}
              </span>
            </div>

            {/* 主副標題 */}
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-4 tracking-tight leading-[1.1] font-serif">
              <span className="block text-[var(--gold)] mb-2 font-serif">{t("hero.title")}</span>
              <span className="block font-serif text-3xl sm:text-4xl md:text-5xl font-light tracking-wide text-slate-100">{t("hero.subtitle")}</span>
            </h1>

            <p className="text-base md:text-lg text-slate-300 mb-10 leading-relaxed font-light max-w-2xl">
              {t("hero.desc")}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#services" className="btn-gold text-center font-semibold tracking-wider flex items-center justify-center gap-2">
                {t("hero.btn.explore")} <ArrowRight size={16} />
              </a>
              <a href="#about" className="btn-white-outline text-center font-semibold tracking-wider">
                {t("hero.btn.about")}
              </a>
            </div>
          </div>
        </div>

        {/* 底部滾動指示 */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-center z-10 hidden md:block">
          <span className="text-xs tracking-[0.25em] text-slate-400 block mb-2 uppercase">Scroll Down</span>
          <ChevronDown className="mx-auto text-[var(--gold)] animate-bounce" size={18} />
        </div>
      </section>

      {/* 關於我們：使命、理念、定位 (Brochure Aligned) */}
      <section id="about" className="py-24 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          
          {/* 標題 */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold tracking-[0.25em] text-[var(--gold)] uppercase block mb-3">About DILLIZ</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B1E36] mb-4 font-serif">
              {lang === "zh" ? "關於我們" : "About Us"}
            </h2>
            <div className="w-16 h-[2px] bg-[var(--gold)] mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            
            {/* 使命 */}
            <div className="flex flex-col items-center text-center gap-5 p-8 border border-slate-50 bg-[#FDFBF7] rounded-sm transition-all duration-300 hover:shadow-md">
              <div className="w-14 h-14 bg-blue-50 flex items-center justify-center rounded-sm text-[#0B1E36]">
                <Shield size={28} className="text-[var(--gold)]" />
              </div>
              <h3 className="text-xl font-bold text-[#0B1E36] font-serif">{t("stats.mission")}</h3>
              <p className="text-slate-600 text-sm leading-relaxed font-light">
                {t("stats.mission.desc")}
              </p>
            </div>

            {/* 理念 */}
            <div className="flex flex-col items-center text-center gap-5 p-8 border border-slate-50 bg-[#FDFBF7] rounded-sm transition-all duration-300 hover:shadow-md">
              <div className="w-14 h-14 bg-blue-50 flex items-center justify-center rounded-sm text-[#0B1E36]">
                <Award size={28} className="text-[var(--gold)]" />
              </div>
              <h3 className="text-xl font-bold text-[#0B1E36] font-serif">{t("stats.philosophy")}</h3>
              <p className="text-slate-600 text-sm leading-relaxed font-light">
                {t("stats.philosophy.desc")}
              </p>
            </div>

            {/* 定位 */}
            <div className="flex flex-col items-center text-center gap-5 p-8 border border-slate-50 bg-[#FDFBF7] rounded-sm transition-all duration-300 hover:shadow-md">
              <div className="w-14 h-14 bg-blue-50 flex items-center justify-center rounded-sm text-[#0B1E36]">
                <Users size={28} className="text-[var(--gold)]" />
              </div>
              <h3 className="text-xl font-bold text-[#0B1E36] font-serif">{t("stats.positioning")}</h3>
              <p className="text-slate-600 text-sm leading-relaxed font-light">
                {t("stats.positioning.desc")}
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 核心服務板塊 (Services Section - Aligned with Brochure) */}
      <section id="services" className="py-24 bg-[#FDFBF7]">
        <div className="max-w-7xl mx-auto px-6">
          
          {/* 標題 */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold tracking-[0.25em] text-[var(--gold)] uppercase block mb-3">Core Solutions</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B1E36] mb-4 font-serif">{t("services.title")}</h2>
            <p className="text-slate-600 font-light">
              {t("services.subtitle")}
            </p>
          </div>

          {/* Tab 切換按鈕 (5大服務對齊摺頁) */}
          <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12">
            <button 
              onClick={() => setActiveTab("asset")}
              className={`px-5 py-3 text-xs md:text-sm font-semibold tracking-wider transition-all duration-300 border ${
                activeTab === "asset" 
                  ? "bg-[#0B1E36] text-white border-[#0B1E36] shadow-md" 
                  : "bg-white text-slate-600 border-slate-200 hover:border-[#0B1E36] hover:text-[#0B1E36]"
              }`}
            >
              {t("services.tab.asset")}
            </button>
            <button 
              onClick={() => setActiveTab("trust")}
              className={`px-5 py-3 text-xs md:text-sm font-semibold tracking-wider transition-all duration-300 border ${
                activeTab === "trust" 
                  ? "bg-[#0B1E36] text-white border-[#0B1E36] shadow-md" 
                  : "bg-white text-slate-600 border-slate-200 hover:border-[#0B1E36] hover:text-[#0B1E36]"
              }`}
            >
              {t("services.tab.trust")}
            </button>
            <button 
              onClick={() => setActiveTab("deposit")}
              className={`px-5 py-3 text-xs md:text-sm font-semibold tracking-wider transition-all duration-300 border ${
                activeTab === "deposit" 
                  ? "bg-[#0B1E36] text-white border-[#0B1E36] shadow-md" 
                  : "bg-white text-slate-600 border-slate-200 hover:border-[#0B1E36] hover:text-[#0B1E36]"
              }`}
            >
              {t("services.tab.deposit")}
            </button>
            <button 
              onClick={() => setActiveTab("finance")}
              className={`px-5 py-3 text-xs md:text-sm font-semibold tracking-wider transition-all duration-300 border ${
                activeTab === "finance" 
                  ? "bg-[#0B1E36] text-white border-[#0B1E36] shadow-md" 
                  : "bg-white text-slate-600 border-slate-200 hover:border-[#0B1E36] hover:text-[#0B1E36]"
              }`}
            >
              {t("services.tab.finance")}
            </button>
            <button 
              onClick={() => setActiveTab("card")}
              className={`px-5 py-3 text-xs md:text-sm font-semibold tracking-wider transition-all duration-300 border ${
                activeTab === "card" 
                  ? "bg-[#0B1E36] text-white border-[#0B1E36] shadow-md" 
                  : "bg-white text-slate-600 border-slate-200 hover:border-[#0B1E36] hover:text-[#0B1E36]"
              }`}
            >
              {t("services.tab.card")}
            </button>
          </div>

          {/* Tab 內容展示 */}
          <div className="bg-white border border-slate-100 shadow-md overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12">
              
              {/* 左側文字描述 (佔 7 格) */}
              <div className="p-8 md:p-12 lg:col-span-7 flex flex-col justify-between">
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-blue-50 flex items-center justify-center text-[#0B1E36] rounded-sm">
                      {React.createElement(services[activeTab].icon, { size: 24 })}
                    </div>
                    <h3 className="text-2xl font-bold text-[#0B1E36] font-serif">
                      {services[activeTab].title}
                    </h3>
                  </div>

                  <p className="text-slate-600 text-sm md:text-base leading-relaxed font-light">
                    {services[activeTab].description}
                  </p>

                  <div className="space-y-3 pt-4">
                    {services[activeTab].features.map((feat, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <div className="w-5 h-5 rounded-full bg-blue-50 flex items-center justify-center text-[var(--gold)]">
                          <Check size={12} className="text-[var(--gold)]" />
                        </div>
                        <span className="text-sm font-medium text-slate-700">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-8 border-t border-slate-100 mt-8 flex flex-col sm:flex-row gap-4">
                  <a href="#contact" className="btn-gold text-center font-semibold text-xs tracking-wider py-3 px-6">
                    {t("nav.book")}
                  </a>
                  <button 
                    onClick={() => handlePlaceholderClick(services[activeTab].title)}
                    className="btn-gold-outline font-semibold text-xs tracking-wider py-3 px-6"
                  >
                    {lang === "zh" ? "下載服務小冊子" : "Download Brochure"}
                  </button>
                </div>
              </div>

              {/* 右側示意圖片 (佔 5 格) */}
              <div className="lg:col-span-5 h-64 lg:h-auto relative min-h-[350px]">
                <img 
                  src={services[activeTab].image} 
                  alt={services[activeTab].title} 
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* 真實案例分析 (360 度環狀互動版面) */}
      <section id="cases" className="py-24 bg-white border-y border-slate-100 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          
          {/* 標題 */}
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-xs font-bold tracking-[0.25em] text-[var(--gold)] uppercase block mb-3">Case Studies</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B1E36] mb-4 font-serif">{t("cases.title")}</h2>
            <p className="text-slate-600 font-light">
              {t("cases.subtitle")}
            </p>
          </div>

          {/* 360 度環狀與詳情對照版面 */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            
            {/* 左側 360 度圓環 (佔 5 格) */}
            <div className="lg:col-span-5 flex justify-center relative min-h-[400px] md:min-h-[450px]">
              
              {/* 圓環背景線 (SVG) */}
              <svg className="absolute w-[340px] h-[340px] md:w-[400px] md:h-[400px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
                <circle 
                  cx="50%" 
                  cy="50%" 
                  r="42%" 
                  fill="none" 
                  stroke="var(--gold)" 
                  strokeWidth="1" 
                  strokeDasharray="6, 6" 
                  opacity="0.4"
                />
              </svg>

              {/* 中心核心：客戶家族盾徽 */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-28 h-28 md:w-32 md:h-32 rounded-full bg-gradient-to-br from-[#0B1E36] to-[#071426] p-1.5 shadow-2xl z-10 flex items-center justify-center border-2 border-[var(--gold)]">
                <div className="w-full h-full rounded-full bg-[#071426] flex flex-col items-center justify-center text-center p-2 border border-[#D4AF37]/30">
                  <Shield className="text-[var(--gold)] mb-1" size={24} />
                  <span className="text-[10px] md:text-xs font-bold text-white tracking-widest uppercase">DILLIZ</span>
                  <span className="text-[8px] text-slate-400 scale-90">{lang === "zh" ? "以客為尊" : "Client First"}</span>
                </div>
              </div>

              {/* 環繞 6 個情境按鈕 (基於三角函數精準定位) */}
              {cases.map((c, idx) => {
                const angle = (idx * 60 * Math.PI) / 180 - Math.PI / 2; // 從正上方開始 (減去 90 度)
                const radius = 42; // 圓環半徑百分比
                const x = `calc(50% + ${Math.cos(angle) * radius}%)`;
                const y = `calc(50% + ${Math.sin(angle) * radius}%)`;

                const IconComponent = c.icon;
                const isActive = activeCaseIdx === idx;

                return (
                  <button
                    key={idx}
                    onClick={() => setActiveCaseIdx(idx)}
                    style={{ left: x, top: y }}
                    className={`absolute -translate-x-1/2 -translate-y-1/2 w-14 h-14 md:w-16 md:h-16 rounded-full flex flex-col items-center justify-center transition-all duration-300 shadow-md group z-20 border ${
                      isActive 
                        ? "bg-[#0B1E36] text-[var(--gold)] border-[var(--gold)] scale-110 ring-4 ring-[#D4AF37]/20" 
                        : "bg-white text-[#071426] border-slate-300 hover:border-[#0B1E36] hover:scale-105"
                    }`}
                    title={c.badge}
                  >
                    <IconComponent size={18} className={isActive ? "text-[var(--gold)]" : "text-[#071426]"} />
                    <span className={`text-[8px] md:text-[9px] font-bold tracking-tight block mt-1 max-w-[50px] truncate ${
                      isActive ? "text-white" : "text-slate-500 group-hover:text-[#0B1E36]"
                    }`}>
                      {c.badge.split("")[0]}{c.badge.split("")[1]}..
                    </span>
                  </button>
                );
              })}

            </div>

            {/* 右側詳情面板 (佔 7 格) */}
            <div className="lg:col-span-7">
              <div className="bg-[#FDFBF7] border border-slate-100 p-8 md:p-12 shadow-md relative min-h-[380px] flex flex-col justify-between transition-all duration-500 animate-fadeIn">
                
                {/* 頂部裝飾角 */}
                <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-[var(--gold)]" />
                <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-[var(--gold)]" />

                <div className="space-y-6">
                  {/* 標題與標籤 */}
                  <div className="space-y-3">
                    <span className="inline-block bg-[#0B1E36] text-[var(--gold)] text-xs font-bold tracking-widest uppercase px-3 py-1">
                      {cases[activeCaseIdx].badge}
                    </span>
                    <h3 className="text-2xl md:text-3xl font-bold text-[#0B1E36] font-serif leading-tight">
                      {cases[activeCaseIdx].title}
                    </h3>
                  </div>

                  <hr className="border-slate-200" />

                  {/* 描述 */}
                  <p className="text-slate-600 text-sm md:text-base leading-relaxed font-light">
                    {cases[activeCaseIdx].desc}
                  </p>
                </div>

                {/* 底部行動按鈕 */}
                <div className="pt-8 border-t border-slate-200/60 mt-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <span className="text-xs text-slate-400 font-light">
                    {lang === "zh" ? "*以上案例均為真實情境化改編，已隱去客戶私密資訊" : "*Cases adapted from real scenarios, private info redacted"}
                  </span>
                  <a href="#contact" className="btn-gold text-center py-2.5 px-6 font-semibold text-xs tracking-wider inline-flex items-center justify-center gap-2">
                    {t("nav.book")} <ArrowRight size={14} />
                  </a>
                </div>

              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 會員計劃 (Membership Section - Aligned with Brochure Table) */}
      <section id="membership" className="py-24 bg-[#FDFBF7]">
        <div className="max-w-7xl mx-auto px-6">
          
          {/* 標題 */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold tracking-[0.25em] text-[var(--gold)] uppercase block mb-3">Membership Plan</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B1E36] mb-4 font-serif">{t("membership.title")}</h2>
            <p className="text-slate-600 font-light">
              {t("membership.subtitle")}
            </p>
          </div>

          {/* 會員計劃對照表 (Wix/Brochure Style Table) */}
          <div className="bg-white border border-slate-100 shadow-lg overflow-x-auto">
            <table className="w-full min-w-[800px] text-left border-collapse">
              <thead>
                <tr className="bg-[#071426] text-white">
                  <th className="p-6 text-sm font-bold tracking-wider font-serif w-1/5">{lang === "zh" ? "服務項目" : "Services"}</th>
                  {membershipTiers.map((tier, idx) => (
                    <th 
                      key={idx} 
                      className={`p-6 text-center w-1/5 relative ${
                        tier.highlight ? "border-x-2 border-t-2 border-[var(--gold)] bg-[#0B1E36]" : ""
                      }`}
                    >
                      {tier.highlight && (
                        <span className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[var(--gold)] text-[#0B1E36] text-[9px] font-bold tracking-widest uppercase px-2.5 py-0.5 whitespace-nowrap">
                          {lang === "zh" ? "尊享推薦" : "PREMIUM"}
                        </span>
                      )}
                      <span className="block text-lg font-bold font-serif text-[var(--gold)]">{tier.name}</span>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-xs md:text-sm">
                
                {/* 定存門檻 */}
                <tr className="hover:bg-slate-50/50 transition-colors">
                  <td className="p-6 font-bold text-[#0B1E36]">{t("membership.threshold")}</td>
                  {membershipTiers.map((tier, idx) => (
                    <td 
                      key={idx} 
                      className={`p-6 text-center font-semibold text-[#0B1E36] ${
                        tier.highlight ? "border-x-2 border-[var(--gold)] bg-amber-50/5" : ""
                      }`}
                    >
                      {tier.threshold}
                    </td>
                  ))}
                </tr>

                {/* 定存期限 */}
                <tr className="hover:bg-slate-50/50 transition-colors">
                  <td className="p-6 font-bold text-[#0B1E36]">{t("membership.duration")}</td>
                  {membershipTiers.map((tier, idx) => (
                    <td 
                      key={idx} 
                      className={`p-6 text-center text-slate-600 font-light ${
                        tier.highlight ? "border-x-2 border-[var(--gold)] bg-amber-50/5" : ""
                      }`}
                    >
                      {tier.duration}
                    </td>
                  ))}
                </tr>

                {/* 離岸賬戶配置 */}
                <tr className="hover:bg-slate-50/50 transition-colors">
                  <td className="p-6 font-bold text-[#0B1E36]">{t("membership.offshore")}</td>
                  {membershipTiers.map((tier, idx) => (
                    <td 
                      key={idx} 
                      className={`p-6 text-center text-slate-600 font-light ${
                        tier.highlight ? "border-x-2 border-[var(--gold)] bg-amber-50/5" : ""
                      }`}
                    >
                      {tier.offshore}
                    </td>
                  ))}
                </tr>

                {/* 全球賬單支付 */}
                <tr className="hover:bg-slate-50/50 transition-colors">
                  <td className="p-6 font-bold text-[#0B1E36]">{t("membership.billpay")}</td>
                  {membershipTiers.map((tier, idx) => (
                    <td 
                      key={idx} 
                      className={`p-6 text-center text-slate-600 font-light ${
                        tier.highlight ? "border-x-2 border-[var(--gold)] bg-amber-50/5" : ""
                      }`}
                    >
                      {tier.billpay}
                    </td>
                  ))}
                </tr>

                {/* 客戶服務 */}
                <tr className="hover:bg-slate-50/50 transition-colors">
                  <td className="p-6 font-bold text-[#0B1E36]">{t("membership.customerservice")}</td>
                  {membershipTiers.map((tier, idx) => (
                    <td 
                      key={idx} 
                      className={`p-6 text-center text-slate-600 font-light ${
                        tier.highlight ? "border-x-2 border-[var(--gold)] bg-amber-50/5" : ""
                      }`}
                    >
                      {tier.service}
                    </td>
                  ))}
                </tr>

                {/* 資產聯動信用卡 */}
                <tr className="hover:bg-slate-50/50 transition-colors">
                  <td className="p-6 font-bold text-[#0B1E36]">{t("membership.linkedcard")}</td>
                  {membershipTiers.map((tier, idx) => (
                    <td 
                      key={idx} 
                      className={`p-6 text-center ${
                        tier.highlight ? "border-x-2 border-[var(--gold)] bg-amber-50/5" : ""
                      }`}
                    >
                      <Check size={18} className="text-[var(--gold)] mx-auto" />
                    </td>
                  ))}
                </tr>

                {/* 預約按鈕列 */}
                <tr className="bg-slate-50/30">
                  <td className="p-6 font-medium text-slate-400 italic text-xs">
                    {t("membership.brochure.note")}
                  </td>
                  {membershipTiers.map((tier, idx) => (
                    <td 
                      key={idx} 
                      className={`p-6 text-center ${
                        tier.highlight ? "border-x-2 border-b-2 border-[var(--gold)] bg-amber-50/10" : ""
                      }`}
                    >
                      <a 
                        href="#contact" 
                        className={`inline-block w-full py-2.5 text-xs font-bold tracking-wider uppercase transition-all duration-300 ${
                          tier.highlight 
                            ? "bg-[#D4AF37] text-[#0B1E36] hover:bg-[#C29E2F]" 
                            : tier.name.includes("Royal") || tier.name.includes("典藏")
                              ? "bg-[#071426] text-white hover:bg-[#0B1E36]"
                              : "border border-slate-300 text-slate-700 hover:border-[#0B1E36] hover:text-[#0B1E36]"
                        }`}
                      >
                        {t("membership.btn.select")}
                      </a>
                    </td>
                  ))}
                </tr>

              </tbody>
            </table>
          </div>

        </div>
      </section>

      {/* 常見問題 (FAQ Section) */}
      <section id="faq" className="py-24 bg-white border-y border-slate-100">
        <div className="max-w-4xl mx-auto px-6">
          
          {/* 標題 */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold tracking-[0.25em] text-[var(--gold)] uppercase block mb-3">Trust Academy</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B1E36] mb-4 font-serif">{t("faq.title")}</h2>
            <p className="text-slate-600 font-light">
              {t("faq.subtitle")}
            </p>
          </div>

          {/* 手風琴 Q&A */}
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="border border-slate-100 bg-[#FDFBF7] p-6 transition-all duration-300">
                <button 
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="flex justify-between items-center w-full text-left font-bold text-[#0B1E36] font-serif text-sm md:text-base gap-4"
                >
                  <span>{faq.q}</span>
                  <span className="text-[var(--gold)] shrink-0">
                    {openFaq === idx ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                  </span>
                </button>
                
                {openFaq === idx && (
                  <div className="mt-4 pt-4 border-t border-slate-200/60 text-xs md:text-sm text-slate-600 leading-relaxed font-light whitespace-pre-line">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 聯絡我們 (Contact Section - Aligned with Brochure) */}
      <section id="contact" className="py-24 bg-[#FDFBF7]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            
            {/* 左側聯絡資訊 (佔 5 格) */}
            <div className="lg:col-span-5 space-y-8">
              <div>
                <span className="text-xs font-bold tracking-[0.25em] text-[var(--gold)] uppercase block mb-3">{t("nav.contact")}</span>
                <h2 className="text-3xl md:text-4xl font-bold text-[#0B1E36] mb-4 font-serif">{t("contact.title")}</h2>
                <p className="text-slate-600 font-light text-sm leading-relaxed">
                  {t("contact.subtitle")}
                </p>
              </div>

              {/* 官方標語卡片 (因為您，才值得擁有) */}
              <div className="border-l-4 border-[var(--gold)] bg-white p-6 shadow-sm">
                <p className="text-lg md:text-xl font-bold text-[#0B1E36] font-serif italic tracking-wide">
                  「 {t("contact.info.slogan")} 」
                </p>
              </div>

              <div className="space-y-6 pt-4">
                <h3 className="text-lg font-bold text-[#0B1E36] font-serif">{t("contact.info.title")}</h3>
                
                {/* Phone */}
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 bg-white border border-slate-100 flex items-center justify-center text-[var(--gold)] shrink-0">
                    <Phone size={18} />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 block font-medium uppercase">{t("contact.info.phone")}</span>
                    <span className="text-base font-bold text-[#0B1E36]">{t("contact.info.phone.value")}</span>
                  </div>
                </div>

                {/* Email */}
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 bg-white border border-slate-100 flex items-center justify-center text-[var(--gold)] shrink-0">
                    <Mail size={18} />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 block font-medium uppercase">{t("contact.info.email")}</span>
                    <span className="text-base font-bold text-[#0B1E36]">info@dilliz.com</span>
                  </div>
                </div>

                {/* Address */}
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 bg-white border border-slate-100 flex items-center justify-center text-[var(--gold)] shrink-0">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 block font-medium uppercase">{t("contact.info.address")}</span>
                    <span className="text-sm font-semibold text-slate-700 leading-relaxed">
                      {t("contact.info.address.value")}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* 右側表單 (佔 7 格) */}
            <div className="lg:col-span-7 bg-white border border-slate-100 p-8 md:p-12 shadow-md">
              <h3 className="text-xl font-bold text-[#0B1E36] font-serif mb-6 border-b border-slate-100 pb-4">
                {t("contact.form.title")}
              </h3>

              {formSubmitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 bg-emerald-50 text-emerald-500 rounded-full flex items-center justify-center mx-auto">
                    <Check size={32} />
                  </div>
                  <h4 className="text-lg font-bold text-slate-800">{lang === "zh" ? "提交成功" : "Submission Successful"}</h4>
                  <p className="text-slate-600 text-sm max-w-md mx-auto font-light">
                    {t("contact.form.success")}
                  </p>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* 姓名 */}
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-slate-600 uppercase">{t("contact.form.name")} <span className="text-red-500">*</span></label>
                      <input 
                        type="text" 
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        className="w-full bg-slate-50 border border-slate-200 px-4 py-3 text-sm focus:outline-none focus:border-[#D4AF37] transition-colors"
                      />
                    </div>
                    {/* 電話 */}
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-slate-600 uppercase">{t("contact.form.phone")} <span className="text-red-500">*</span></label>
                      <input 
                        type="tel" 
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        className="w-full bg-slate-50 border border-slate-200 px-4 py-3 text-sm focus:outline-none focus:border-[#D4AF37] transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* 電郵 */}
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-slate-600 uppercase">{t("contact.form.email")} <span className="text-red-500">*</span></label>
                      <input 
                        type="email" 
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        className="w-full bg-slate-50 border border-slate-200 px-4 py-3 text-sm focus:outline-none focus:border-[#D4AF37] transition-colors"
                      />
                    </div>
                    {/* 感興趣的服務 */}
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-slate-600 uppercase">{t("contact.form.interest")}</label>
                      <select 
                        value={formData.interest}
                        onChange={(e) => setFormData({...formData, interest: e.target.value})}
                        className="w-full bg-slate-50 border border-slate-200 px-4 py-3 text-sm focus:outline-none focus:border-[#D4AF37] transition-colors"
                      >
                        <option value="">{t("contact.form.interest.placeholder")}</option>
                        <option value="custody">{t("contact.form.interest.asset")}</option>
                        <option value="tax">{t("contact.form.interest.trust")}</option>
                        <option value="offshore">{t("contact.form.interest.deposit")}</option>
                        <option value="card">{t("contact.form.interest.finance")}</option>
                        <option value="billpay">{t("contact.form.interest.card")}</option>
                      </select>
                    </div>
                  </div>

                  {/* 預計信託規模 */}
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-600 uppercase">{t("contact.form.amount")}</label>
                    <select 
                      value={formData.amount}
                      onChange={(e) => setFormData({...formData, amount: e.target.value})}
                      className="w-full bg-slate-50 border border-slate-200 px-4 py-3 text-sm focus:outline-none focus:border-[#D4AF37] transition-colors"
                    >
                      <option value="">{t("contact.form.amount.placeholder")}</option>
                      <option value="t1">{t("contact.form.amount.t1")}</option>
                      <option value="t2">{t("contact.form.amount.t2")}</option>
                      <option value="t3">{t("contact.form.amount.t3")}</option>
                      <option value="t4">{t("contact.form.amount.t4")}</option>
                    </select>
                  </div>

                  {/* 備註 */}
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-600 uppercase">{t("contact.form.message")}</label>
                    <textarea 
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      placeholder={t("contact.form.message.placeholder")}
                      className="w-full bg-slate-50 border border-slate-200 px-4 py-3 text-sm focus:outline-none focus:border-[#D4AF37] transition-colors resize-none"
                    />
                  </div>

                  <button 
                    type="submit" 
                    className="btn-gold w-full py-4 font-bold tracking-widest uppercase text-xs transition-colors"
                  >
                    {t("contact.form.btn.submit")}
                  </button>
                </form>
              )}
            </div>

          </div>
        </div>
      </section>

      {/* 頁尾與免責聲明 (Footer) - 皇家深藍背景 */}
      <footer className="bg-[#071426] text-slate-400 py-16 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-12">
            
            {/* 品牌與簡介 (佔 5 格) */}
            <div className="lg:col-span-5 space-y-6">
              <img 
                src="/manus-storage/dilliz_logo_transparent_b12204c3.png" 
                alt="DILLIZ Logo" 
                className="h-14 w-auto object-contain"
              />
              <p className="text-xs md:text-sm text-slate-400 leading-relaxed font-light">
                {t("footer.desc")}
              </p>
              <div className="text-xs font-medium text-slate-400">
                <span className="text-[var(--gold)] font-bold">{t("footer.license")}：TC010540</span>
              </div>
            </div>

            {/* 快速連結 (佔 3 格) */}
            <div className="lg:col-span-3 space-y-4">
              <h4 className="text-sm font-bold text-white tracking-wider uppercase font-serif">{t("footer.links.title")}</h4>
              <div className="grid grid-cols-2 gap-2 text-xs md:text-sm">
                <a href="#about" className="hover:text-[var(--gold)] transition-colors font-light">{t("nav.about")}</a>
                <a href="#services" className="hover:text-[var(--gold)] transition-colors font-light">{t("nav.services")}</a>
                <a href="#cases" className="hover:text-[var(--gold)] transition-colors font-light">{t("nav.cases")}</a>
                <a href="#membership" className="hover:text-[var(--gold)] transition-colors font-light">{t("nav.membership")}</a>
                <a href="#faq" className="hover:text-[var(--gold)] transition-colors font-light">{t("nav.faq")}</a>
                <a href="#contact" className="hover:text-[var(--gold)] transition-colors font-light">{t("nav.contact")}</a>
              </div>
            </div>

            {/* 免責聲明 (佔 4 格) */}
            <div className="lg:col-span-4 space-y-4">
              <h4 className="text-sm font-bold text-white tracking-wider uppercase font-serif">{t("footer.disclaimer.title")}</h4>
              <p className="text-[10px] md:text-xs text-slate-500 leading-relaxed font-light">
                {t("footer.disclaimer.text")}
              </p>
            </div>

          </div>

          <hr className="border-slate-800 my-8" />

          {/* 版權所有 */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-center">
            <span className="text-[10px] md:text-xs text-slate-500 font-light">
              {t("footer.copyright")}
            </span>
            <div className="flex gap-6 text-[10px] md:text-xs text-slate-500 font-light">
              <a href="#" className="hover:text-[var(--gold)] transition-colors">{lang === "zh" ? "隱私權政策" : "Privacy Policy"}</a>
              <a href="#" className="hover:text-[var(--gold)] transition-colors">{lang === "zh" ? "服務條款" : "Terms of Service"}</a>
            </div>
          </div>

        </div>
      </footer>

    </div>
  );
}
