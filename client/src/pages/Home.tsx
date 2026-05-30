import { useState } from "react";
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
  Coins
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

  // 核心服務數據結構
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
      icon: Users,
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
      icon: TrendingUp,
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
      icon: Globe,
      image: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&q=80&w=800"
    },
    card: {
      title: t("services.card.title"),
      description: t("services.card.desc"),
      features: [
        t("services.card.feature1"),
        t("services.card.feature2"),
        t("services.card.feature3")
      ],
      icon: CreditCard,
      image: "/manus-storage/credit_card_226f376a.png"
    }
  };

  // 案例分析數據
  const cases = [
    {
      badge: t("cases.c1.badge"),
      title: t("cases.c1.title"),
      desc: t("cases.c1.desc"),
      icon: Briefcase
    },
    {
      badge: t("cases.c2.badge"),
      title: t("cases.c2.title"),
      desc: t("cases.c2.desc"),
      icon: Users
    },
    {
      badge: t("cases.c3.badge"),
      title: t("cases.c3.title"),
      desc: t("cases.c3.desc"),
      icon: HeartPulse
    },
    {
      badge: t("cases.c4.badge"),
      title: t("cases.c4.title"),
      desc: t("cases.c4.desc"),
      icon: Globe
    },
    {
      badge: t("cases.c5.badge"),
      title: t("cases.c5.title"),
      desc: t("cases.c5.desc"),
      icon: Lock
    },
    {
      badge: t("cases.c6.badge"),
      title: t("cases.c6.title"),
      desc: t("cases.c6.desc"),
      icon: Award
    }
  ];

  // 會員等級數據
  const membershipTiers = [
    {
      name: t("membership.t1.name"),
      threshold: t("membership.t1.threshold"),
      services: [
        t("membership.t1.s1"),
        t("membership.t1.s2")
      ],
      privileges: [
        t("membership.t1.p1"),
        t("membership.t1.p2")
      ],
      bg: "bg-slate-50",
      border: "border-border",
      text: "text-slate-900"
    },
    {
      name: t("membership.t2.name"),
      threshold: t("membership.t2.threshold"),
      services: [
        t("membership.t2.s1"),
        t("membership.t2.s2")
      ],
      privileges: [
        t("membership.t2.p1"),
        t("membership.t2.p2")
      ],
      bg: "bg-blue-50/30",
      border: "border-blue-100",
      text: "text-slate-900"
    },
    {
      name: t("membership.t3.name"),
      threshold: t("membership.t3.threshold"),
      services: [
        t("membership.t3.s1"),
        t("membership.t3.s2")
      ],
      privileges: [
        t("membership.t3.p1"),
        t("membership.t3.p2")
      ],
      bg: "bg-amber-50/20",
      border: "border-amber-200/50",
      text: "text-slate-900",
      highlight: true
    },
    {
      name: t("membership.t4.name"),
      threshold: t("membership.t4.threshold"),
      services: [
        t("membership.t4.s1"),
        t("membership.t4.s2")
      ],
      privileges: [
        t("membership.t4.p1"),
        t("membership.t4.p2")
      ],
      bg: "bg-[#071426] text-white",
      border: "border-slate-800",
      text: "text-white"
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
    <div className="min-h-screen bg-[#FDFBF7] text-slate-800 font-sans selection:bg-[#D4AF37] selection:text-[#0B1E36]">
      
      {/* 頂部通知欄 */}
      <div className="bg-[#071426] text-slate-300 text-xs py-2 px-6 border-b border-white/10 flex justify-between items-center">
        <div className="flex items-center gap-4">
          <span>{t("hero.badge")}</span>
        </div>
        <div className="hidden md:flex items-center gap-6">
          <a href="#contact" className="hover:text-white transition-colors">{t("nav.contact")}</a>
          <button 
            onClick={() => handlePlaceholderClick(t("nav.portal"))} 
            className="flex items-center gap-1 hover:text-white transition-colors"
          >
            <Lock size={12} />
            {t("nav.portal")}
          </button>
        </div>
      </div>

      {/* 導航欄 */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3">
            <img 
              src="/manus-storage/dilliz_logo_transparent_db9e135f.png" 
              alt="DILLIZ CAPITAL TRUST Logo" 
              className="h-14 w-auto object-contain"
            />
          </a>

          {/* 桌面端導航連結 */}
          <nav className="hidden lg:flex items-center gap-8">
            <a href="#about" className="text-sm font-medium text-slate-600 hover:text-[#0B1E36] transition-colors">{t("nav.about")}</a>
            <a href="#services" className="text-sm font-medium text-slate-600 hover:text-[#0B1E36] transition-colors">{t("nav.services")}</a>
            <a href="#cases" className="text-sm font-medium text-slate-600 hover:text-[#0B1E36] transition-colors">{t("nav.cases")}</a>
            <a href="#membership" className="text-sm font-medium text-slate-600 hover:text-[#0B1E36] transition-colors">{t("nav.membership")}</a>
            <a href="#faq" className="text-sm font-medium text-slate-600 hover:text-[#0B1E36] transition-colors">{t("nav.faq")}</a>
          </nav>

          {/* 語言切換與按鈕 */}
          <div className="hidden lg:flex items-center gap-6">
            {/* 雙語切換按鈕 */}
            <div className="flex items-center border border-slate-200 rounded-full p-0.5 bg-slate-50">
              <button 
                onClick={() => setLang("zh")} 
                className={`px-3 py-1 text-xs font-semibold rounded-full transition-all ${lang === "zh" ? "bg-[#0B1E36] text-white" : "text-slate-500 hover:text-slate-800"}`}
              >
                繁
              </button>
              <button 
                onClick={() => setLang("en")} 
                className={`px-3 py-1 text-xs font-semibold rounded-full transition-all ${lang === "en" ? "bg-[#0B1E36] text-white" : "text-slate-500 hover:text-slate-800"}`}
              >
                EN
              </button>
            </div>

            <a href="#contact" className="btn-gold-outline text-sm py-2 px-5 font-semibold">
              {t("nav.book")}
            </a>
          </div>

          {/* 行動端選單按鈕 */}
          <div className="flex lg:hidden items-center gap-4">
            {/* 行動端語言切換 */}
            <div className="flex items-center border border-slate-200 rounded-full p-0.5 bg-slate-50">
              <button 
                onClick={() => setLang("zh")} 
                className={`px-2 py-0.5 text-xs font-semibold rounded-full transition-all ${lang === "zh" ? "bg-[#0B1E36] text-white" : "text-slate-500"}`}
              >
                繁
              </button>
              <button 
                onClick={() => setLang("en")} 
                className={`px-2 py-0.5 text-xs font-semibold rounded-full transition-all ${lang === "en" ? "bg-[#0B1E36] text-white" : "text-slate-500"}`}
              >
                EN
              </button>
            </div>

            <button 
              onClick={() => setMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-700 hover:text-[#0B1E36] focus:outline-none"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* 行動端下拉選單 */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-slate-100 px-6 py-6 space-y-4 flex flex-col shadow-inner">
            <a href="#about" onClick={() => setMenuOpen(false)} className="text-base font-medium text-slate-700 py-2 border-b border-slate-50">{t("nav.about")}</a>
            <a href="#services" onClick={() => setMenuOpen(false)} className="text-base font-medium text-slate-700 py-2 border-b border-slate-50">{t("nav.services")}</a>
            <a href="#cases" onClick={() => setMenuOpen(false)} className="text-base font-medium text-slate-700 py-2 border-b border-slate-50">{t("nav.cases")}</a>
            <a href="#membership" onClick={() => setMenuOpen(false)} className="text-base font-medium text-slate-700 py-2 border-b border-slate-50">{t("nav.membership")}</a>
            <a href="#faq" onClick={() => setMenuOpen(false)} className="text-base font-medium text-slate-700 py-2 border-b border-slate-50">{t("nav.faq")}</a>
            <button 
              onClick={() => { setMenuOpen(false); handlePlaceholderClick(t("nav.portal")); }} 
              className="text-left text-base font-medium text-slate-700 py-2 border-b border-slate-50 flex items-center gap-2"
            >
              <Lock size={16} />
              {t("nav.portal")}
            </button>
            <a href="#contact" onClick={() => setMenuOpen(false)} className="btn-gold text-center block w-full mt-4 py-3 font-semibold">
              {t("nav.book")}
            </a>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center bg-[#071426] text-white overflow-hidden">
        {/* 背景圖片及漸變遮罩 */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/manus-storage/hero_banner_60b86b20.png" 
            alt="DILLIZ CAPITAL TRUST Office" 
            className="w-full h-full object-cover opacity-35"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#071426] via-[#071426]/95 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#071426] via-transparent to-transparent"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 py-20 relative z-10 w-full">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-3 py-1.5 rounded-sm mb-6">
              <Shield size={14} className="text-[var(--gold)]" />
              <span className="text-xs font-semibold tracking-widest text-slate-200 uppercase">
                {t("hero.badge")}
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 leading-tight font-serif text-white">
              {t("hero.title")}
              <span className="block text-2xl md:text-3xl font-light text-[var(--gold)] font-serif tracking-wide mt-3">
                {t("hero.subtitle")}
              </span>
            </h1>

            <p className="text-lg text-slate-300 mb-10 leading-relaxed font-light max-w-2xl">
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

      {/* 品牌核心特點 (Stats/Value Section) */}
      <section id="about" className="py-24 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            
            {/* 特點 1 */}
            <div className="flex flex-col items-start gap-4">
              <div className="w-12 h-12 bg-blue-50 flex items-center justify-center rounded-sm text-[#0B1E36]">
                <Shield size={24} />
              </div>
              <h3 className="text-xl font-bold text-[#0B1E36] font-serif">{t("stats.protection")}</h3>
              <p className="text-slate-600 text-sm leading-relaxed font-light">
                {t("stats.protection.desc")}
              </p>
            </div>

            {/* 特點 2 */}
            <div className="flex flex-col items-start gap-4">
              <div className="w-12 h-12 bg-blue-50 flex items-center justify-center rounded-sm text-[#0B1E36]">
                <Award size={24} />
              </div>
              <h3 className="text-xl font-bold text-[#0B1E36] font-serif">{t("stats.compliance")}</h3>
              <p className="text-slate-600 text-sm leading-relaxed font-light">
                {t("stats.compliance.desc")}
              </p>
            </div>

            {/* 特點 3 */}
            <div className="flex flex-col items-start gap-4">
              <div className="w-12 h-12 bg-blue-50 flex items-center justify-center rounded-sm text-[#0B1E36]">
                <Users size={24} />
              </div>
              <h3 className="text-xl font-bold text-[#0B1E36] font-serif">{t("stats.bespoke")}</h3>
              <p className="text-slate-600 text-sm leading-relaxed font-light">
                {t("stats.bespoke.desc")}
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 核心服務板塊 (Services Section) */}
      <section id="services" className="py-24 bg-[#FDFBF7]">
        <div className="max-w-7xl mx-auto px-6">
          
          {/* 標題 */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold tracking-[0.25em] text-[var(--gold)] uppercase block mb-3">Our Services</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B1E36] mb-4 font-serif">{t("services.title")}</h2>
            <p className="text-slate-600 font-light">
              {t("services.subtitle")}
            </p>
          </div>

          {/* 服務 Tab 切換按鈕 */}
          <div className="flex flex-wrap justify-center gap-2 mb-12 border-b border-slate-200/60 pb-4">
            {(Object.keys(services) as Array<keyof typeof services>).map((key) => {
              const ServiceIcon = services[key].icon;
              return (
                <button
                  key={key}
                  onClick={() => setActiveTab(key)}
                  className={`flex items-center gap-2 px-5 py-3 text-sm font-semibold border-b-2 transition-all duration-300 ${
                    activeTab === key 
                      ? "border-[#D4AF37] text-[#0B1E36] bg-white/50" 
                      : "border-transparent text-slate-500 hover:text-[#0B1E36]"
                  }`}
                >
                  <ServiceIcon size={16} />
                  {t(`services.tab.${key}`)}
                </button>
              );
            })}
          </div>

          {/* 服務詳細內容展示區 */}
          <div className="bg-white border border-slate-100 p-8 md:p-12 shadow-md">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              {/* 文字描述 (佔 7 格) */}
              <div className="lg:col-span-7 space-y-6">
                <h3 className="text-2xl md:text-3xl font-bold text-[#0B1E36] font-serif leading-tight">
                  {services[activeTab].title}
                </h3>
                <p className="text-slate-600 leading-relaxed font-light text-sm md:text-base">
                  {services[activeTab].description}
                </p>
                
                {/* 服務特點列表 */}
                <div className="pt-4 space-y-3">
                  {services[activeTab].features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-3 text-sm text-slate-700">
                      <div className="w-5 h-5 rounded-full bg-amber-50 flex items-center justify-center text-[var(--gold)]">
                        <Check size={12} />
                      </div>
                      <span className="font-medium">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-6">
                  <a href="#contact" className="btn-gold py-3 px-8 font-semibold tracking-wider inline-flex items-center gap-2">
                    {t("nav.book")} <ArrowRight size={16} />
                  </a>
                </div>
              </div>

              {/* 右側大圖 (佔 5 格) */}
              <div className="lg:col-span-5 h-[300px] md:h-[400px] relative overflow-hidden">
                <img 
                  src={services[activeTab].image} 
                  alt={services[activeTab].title} 
                  className="w-full h-full object-cover shadow-inner"
                />
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* 真實情境案例分析 (Case Studies Section) */}
      <section id="cases" className="py-24 bg-white border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          
          {/* 標題 */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold tracking-[0.25em] text-[var(--gold)] uppercase block mb-3">Case Studies</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B1E36] mb-4 font-serif">{t("cases.title")}</h2>
            <p className="text-slate-600 font-light">
              {t("cases.subtitle")}
            </p>
          </div>

          {/* 案例卡片網格 */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cases.map((c, idx) => {
              const CaseIcon = c.icon;
              return (
                <div key={idx} className="bg-[#FDFBF7] border border-slate-100 p-8 flex flex-col justify-between hover:shadow-lg transition-all duration-300">
                  <div className="space-y-4">
                    <div className="flex justify-between items-start">
                      <span className="text-xs font-bold tracking-wider text-[var(--gold)] uppercase bg-amber-50 px-2.5 py-1">
                        {c.badge}
                      </span>
                      <div className="text-slate-400">
                        <CaseIcon size={20} />
                      </div>
                    </div>
                    <h3 className="text-lg font-bold text-[#0B1E36] font-serif pt-2">
                      {c.title}
                    </h3>
                    <p className="text-slate-600 text-xs leading-relaxed font-light">
                      {c.desc}
                    </p>
                  </div>
                  <div className="pt-6 border-t border-slate-100/60 mt-6">
                    <a href="#contact" className="text-xs font-semibold text-[#0B1E36] hover:text-[var(--gold)] flex items-center gap-1 transition-colors">
                      {t("nav.book")} <ChevronRight size={14} />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 會員等級 (Membership Section) */}
      <section id="membership" className="py-24 bg-[#FDFBF7]">
        <div className="max-w-7xl mx-auto px-6">
          
          {/* 標題 */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold tracking-[0.25em] text-[var(--gold)] uppercase block mb-3">Membership Tiers</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B1E36] mb-4 font-serif">{t("membership.title")}</h2>
            <p className="text-slate-600 font-light">
              {t("membership.subtitle")}
            </p>
          </div>

          {/* 會員等級卡片 */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {membershipTiers.map((tier, idx) => (
              <div 
                key={idx} 
                className={`border p-8 flex flex-col justify-between transition-all duration-300 relative ${tier.bg} ${tier.border} ${
                  tier.highlight ? "ring-2 ring-[#D4AF37] shadow-xl md:-translate-y-2" : "hover:shadow-md"
                }`}
              >
                {tier.highlight && (
                  <span className="absolute top-0 right-6 -translate-y-1/2 bg-[#D4AF37] text-[#0B1E36] text-[10px] font-bold tracking-widest uppercase px-3 py-1">
                    {lang === "zh" ? "最受尊崇" : "Most Popular"}
                  </span>
                )}
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-bold font-serif">{tier.name}</h3>
                    <div className="mt-4 flex items-baseline">
                      <span className="text-2xl md:text-3xl font-bold tracking-tight text-[var(--gold)] font-serif">{tier.threshold}</span>
                    </div>
                    <span className="text-[10px] uppercase tracking-wider text-slate-400 block mt-1">{t("membership.threshold")}</span>
                  </div>

                  <hr className="border-slate-200/60" />

                  {/* 包含服務 */}
                  <div className="space-y-3">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 block">{t("membership.services")}</span>
                    {tier.services.map((service, sIdx) => (
                      <div key={sIdx} className="flex items-start gap-2 text-xs">
                        <Check size={14} className="text-[var(--gold)] mt-0.5 shrink-0" />
                        <span className="font-light leading-relaxed">{service}</span>
                      </div>
                    ))}
                  </div>

                  {/* 專屬特權 */}
                  <div className="space-y-3 pt-2">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 block">{t("membership.privileges")}</span>
                    {tier.privileges.map((privilege, pIdx) => (
                      <div key={pIdx} className="flex items-start gap-2 text-xs">
                        <Check size={14} className="text-[var(--gold)] mt-0.5 shrink-0" />
                        <span className="font-light leading-relaxed">{privilege}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-8">
                  <a 
                    href="#contact" 
                    className={`text-center block w-full py-2.5 text-xs font-bold tracking-wider uppercase transition-all duration-300 ${
                      tier.highlight 
                        ? "bg-[#D4AF37] text-[#0B1E36] hover:bg-[#C29E2F]" 
                        : tier.name.includes("Royal") || tier.name.includes("私享")
                          ? "bg-[#D4AF37] text-[#0B1E36] hover:bg-[#C29E2F]"
                          : "border border-slate-300 text-slate-700 hover:border-[#0B1E36] hover:text-[#0B1E36]"
                    }`}
                  >
                    {t("membership.btn.select")}
                  </a>
                </div>
              </div>
            ))}
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

      {/* 聯絡我們 (Contact Section) */}
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

              <div className="space-y-6 pt-4">
                <h3 className="text-lg font-bold text-[#0B1E36] font-serif">{t("contact.info.title")}</h3>
                
                {/* WhatsApp */}
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 bg-white border border-slate-100 flex items-center justify-center text-[var(--gold)] shrink-0">
                    <Phone size={18} />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 block font-medium uppercase">{t("contact.info.whatsapp")}</span>
                    <span className="text-base font-bold text-[#0B1E36]">+852 6528 6838</span>
                  </div>
                </div>

                {/* Email */}
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 bg-white border border-slate-100 flex items-center justify-center text-[var(--gold)] shrink-0">
                    <Mail size={18} />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 block font-medium uppercase">{t("contact.info.email")}</span>
                    <span className="text-base font-bold text-[#0B1E36]">info@dilliztrust.com</span>
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
                    {/* 郵件 */}
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
                        <option value="asset">{t("contact.form.interest.asset")}</option>
                        <option value="trust">{t("contact.form.interest.trust")}</option>
                        <option value="deposit">{t("contact.form.interest.deposit")}</option>
                        <option value="finance">{t("contact.form.interest.finance")}</option>
                        <option value="card">{t("contact.form.interest.card")}</option>
                      </select>
                    </div>
                  </div>

                  {/* 託管規模 */}
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

                  {/* 其他備註 */}
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

                  <button type="submit" className="btn-gold w-full py-4 font-bold tracking-widest uppercase">
                    {t("contact.form.btn.submit")}
                  </button>
                </form>
              )}
            </div>

          </div>
        </div>
      </section>

      {/* 頁尾 (Footer Section) */}
      <footer className="bg-[#071426] text-slate-300 pt-20 pb-12 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-white/10">
            
            {/* 品牌資訊 (佔 5 格) */}
            <div className="lg:col-span-5 space-y-6">
              <a href="#" className="flex items-center">
                <img 
                  src="/manus-storage/dilliz_logo_transparent_db9e135f.png" 
                  alt="DILLIZ CAPITAL TRUST Logo" 
                  className="h-16 w-auto object-contain brightness-110"
                />
              </a>
              <p className="text-xs text-slate-400 font-light leading-relaxed max-w-sm">
                {t("footer.desc")}
              </p>
              <div className="text-xs text-slate-500">
                {t("footer.license")}: <strong className="text-slate-300">TC010540</strong>
              </div>
            </div>

            {/* 快速連結 (佔 3 格) */}
            <div className="lg:col-span-3 space-y-6">
              <h4 className="text-sm font-bold text-white uppercase tracking-wider">{t("footer.links.title")}</h4>
              <ul className="space-y-3 text-xs font-light text-slate-400">
                <li><a href="#about" className="hover:text-[var(--gold)] transition-colors">{t("nav.about")}</a></li>
                <li><a href="#services" className="hover:text-[var(--gold)] transition-colors">{t("nav.services")}</a></li>
                <li><a href="#cases" className="hover:text-[var(--gold)] transition-colors">{t("nav.cases")}</a></li>
                <li><a href="#membership" className="hover:text-[var(--gold)] transition-colors">{t("nav.membership")}</a></li>
                <li><a href="#faq" className="hover:text-[var(--gold)] transition-colors">{t("nav.faq")}</a></li>
              </ul>
            </div>

            {/* 免責聲明 (佔 4 格) */}
            <div className="lg:col-span-4 space-y-6">
              <h4 className="text-sm font-bold text-white uppercase tracking-wider">{t("footer.disclaimer.title")}</h4>
              <p className="text-[10px] text-slate-500 leading-relaxed font-light">
                {t("footer.disclaimer.text")}
              </p>
            </div>

          </div>

          {/* 版權所有 */}
          <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500 font-light">
            <span>{t("footer.copyright")}</span>
            <div className="flex gap-6">
              <a href="#" className="hover:text-slate-300 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-slate-300 transition-colors">Terms of Service</a>
            </div>
          </div>

        </div>
      </footer>

    </div>
  );
}
