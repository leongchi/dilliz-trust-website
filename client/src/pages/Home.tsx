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

  // 案例分析數據 (對齊宣傳單張 - 挑戰、方案、結果)
  const cases = [
    {
      badge: t("cases.c1.badge"),
      title: t("cases.c1.title"),
      desc: t("cases.c1.desc"),
      solutions: [
        t("cases.c1.sol1"),
        t("cases.c1.sol2")
      ],
      result: t("cases.c1.res"),
      icon: Briefcase,
      color: "from-blue-500 to-[#0B1E36]"
    },
    {
      badge: t("cases.c2.badge"),
      title: t("cases.c2.title"),
      desc: t("cases.c2.desc"),
      solutions: [
        t("cases.c2.sol1"),
        t("cases.c2.sol2"),
        t("cases.c2.sol3")
      ],
      result: t("cases.c2.res"),
      icon: Users,
      color: "from-pink-500 to-rose-600"
    },
    {
      badge: t("cases.c3.badge"),
      title: t("cases.c3.title"),
      desc: t("cases.c3.desc"),
      solutions: [
        t("cases.c3.sol1"),
        t("cases.c3.sol2")
      ],
      result: t("cases.c3.res"),
      icon: HeartPulse,
      color: "from-emerald-500 to-teal-600"
    },
    {
      badge: t("cases.c4.badge"),
      title: t("cases.c4.title"),
      desc: t("cases.c4.desc"),
      solutions: [
        t("cases.c4.sol1"),
        t("cases.c4.sol2"),
        t("cases.c4.sol3")
      ],
      result: t("cases.c4.res"),
      icon: Globe,
      color: "from-indigo-500 to-purple-600"
    },
    {
      badge: t("cases.c5.badge"),
      title: t("cases.c5.title"),
      desc: t("cases.c5.desc"),
      solutions: [
        t("cases.c5.sol1"),
        t("cases.c5.sol2"),
        t("cases.c5.sol3")
      ],
      result: t("cases.c5.res"),
      icon: Lock,
      color: "from-red-500 to-rose-600"
    },
    {
      badge: t("cases.c6.badge"),
      title: t("cases.c6.title"),
      desc: t("cases.c6.desc"),
      solutions: [
        t("cases.c6.sol1"),
        t("cases.c6.sol2"),
        t("cases.c6.sol3")
      ],
      result: t("cases.c6.res"),
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
      bg: "bg-[#0B1E36]/5",
      border: "border-[var(--gold)]/30"
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
      bg: "bg-white",
      border: "border-slate-100"
    }
  ];

  // 常見問題數據
  const faqs = [
    { q: t("faq.q1"), a: t("faq.a1") },
    { q: t("faq.q2"), a: t("faq.a2") },
    { q: t("faq.q3"), a: t("faq.a3") },
    { q: t("faq.q4"), a: t("faq.a4") },
    { q: t("faq.q5"), a: t("faq.a5") }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#FDFBF7] font-sans antialiased selection:bg-[#D4AF37]/20 selection:text-[#0B1E36]">
      
      {/* 頂部極致奢華導航欄 (皇家深藍背景，金色 Logo 完美浮現) */}
      <header className="sticky top-0 z-50 bg-[#071426]/95 backdrop-blur-md border-b border-white/5 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          
          {/* Logo 區塊 */}
          <a href="#" className="flex items-center gap-3 group">
            <img 
              src="/manus-storage/dilliz_logo_transparent_95535920.png" 
              alt="DILLIZ CAPITAL TRUST LIMITED" 
              className="h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />
          </a>

          {/* 桌面端導航選單 */}
          <nav className="hidden lg:flex items-center gap-8">
            <a href="#about" className="text-sm font-medium text-slate-300 hover:text-[var(--gold)] transition-colors duration-200">{t("nav.about")}</a>
            <a href="#services" className="text-sm font-medium text-slate-300 hover:text-[var(--gold)] transition-colors duration-200">{t("nav.services")}</a>
            <a href="#cases" className="text-sm font-medium text-slate-300 hover:text-[var(--gold)] transition-colors duration-200">{t("nav.cases")}</a>
            <a href="#membership" className="text-sm font-medium text-slate-300 hover:text-[var(--gold)] transition-colors duration-200">{t("nav.membership")}</a>
            <a href="#faq" className="text-sm font-medium text-slate-300 hover:text-[var(--gold)] transition-colors duration-200">{t("nav.faq")}</a>
            <a href="#contact" className="text-sm font-medium text-slate-300 hover:text-[var(--gold)] transition-colors duration-200">{t("nav.contact")}</a>
          </nav>

          {/* 桌面端右側按鈕（語言切換 + 預約） */}
          <div className="hidden lg:flex items-center gap-6">
            
            {/* 語言切換 */}
            <div className="flex items-center bg-white/5 border border-white/10 rounded-full p-1">
              <button 
                onClick={() => setLang("zh")} 
                className={`px-3 py-1 text-xs font-bold rounded-full transition-all duration-200 ${
                  lang === "zh" 
                    ? "bg-[var(--gold)] text-[#071426] shadow-sm" 
                    : "text-slate-400 hover:text-white"
                }`}
              >
                繁
              </button>
              <button 
                onClick={() => setLang("en")} 
                className={`px-3 py-1 text-xs font-bold rounded-full transition-all duration-200 ${
                  lang === "en" 
                    ? "bg-[var(--gold)] text-[#071426] shadow-sm" 
                    : "text-slate-400 hover:text-white"
                }`}
              >
                EN
              </button>
            </div>

            <a href="#contact" className="btn-gold text-xs tracking-wider py-2.5 px-5 font-semibold inline-flex items-center gap-2">
              {t("nav.book")} <ArrowRight size={14} />
            </a>
          </div>

          {/* 行動端選單按鈕 */}
          <button 
            onClick={() => setMenuOpen(!mobileMenuOpen)} 
            className="lg:hidden text-white hover:text-[var(--gold)] transition-colors"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

        </div>

        {/* 行動端下拉選單 (皇家深藍背景) */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#071426] border-b border-white/10 px-6 py-8 space-y-6 animate-fadeIn">
            <nav className="flex flex-col gap-5">
              <a 
                href="#about" 
                onClick={() => setMenuOpen(false)}
                className="text-base font-medium text-slate-300 hover:text-[var(--gold)] transition-colors"
              >
                {t("nav.about")}
              </a>
              <a 
                href="#services" 
                onClick={() => setMenuOpen(false)}
                className="text-base font-medium text-slate-300 hover:text-[var(--gold)] transition-colors"
              >
                {t("nav.services")}
              </a>
              <a 
                href="#cases" 
                onClick={() => setMenuOpen(false)}
                className="text-base font-medium text-slate-300 hover:text-[var(--gold)] transition-colors"
              >
                {t("nav.cases")}
              </a>
              <a 
                href="#membership" 
                onClick={() => setMenuOpen(false)}
                className="text-base font-medium text-slate-300 hover:text-[var(--gold)] transition-colors"
              >
                {t("nav.membership")}
              </a>
              <a 
                href="#faq" 
                onClick={() => setMenuOpen(false)}
                className="text-base font-medium text-slate-300 hover:text-[var(--gold)] transition-colors"
              >
                {t("nav.faq")}
              </a>
              <a 
                href="#contact" 
                onClick={() => setMenuOpen(false)}
                className="text-base font-medium text-slate-300 hover:text-[var(--gold)] transition-colors"
              >
                {t("nav.contact")}
              </a>
            </nav>

            <hr className="border-white/10" />

            {/* 行動端語言切換與按鈕 */}
            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <span className="text-xs text-slate-400 font-medium">{lang === "zh" ? "選擇語言" : "Select Language"}</span>
                <div className="flex items-center bg-white/5 border border-white/10 rounded-full p-1">
                  <button 
                    onClick={() => { setLang("zh"); setMenuOpen(false); }} 
                    className={`px-3 py-1 text-xs font-bold rounded-full transition-all ${
                      lang === "zh" ? "bg-[var(--gold)] text-[#071426]" : "text-slate-400"
                    }`}
                  >
                    繁體中文
                  </button>
                  <button 
                    onClick={() => { setLang("en"); setMenuOpen(false); }} 
                    className={`px-3 py-1 text-xs font-bold rounded-full transition-all ${
                      lang === "en" ? "bg-[var(--gold)] text-[#071426]" : "text-slate-400"
                    }`}
                  >
                    English
                  </button>
                </div>
              </div>

              <a 
                href="#contact" 
                onClick={() => setMenuOpen(false)}
                className="btn-gold w-full text-center py-3 text-sm font-semibold tracking-wider block"
              >
                {t("nav.book")}
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section - 品牌門面區 (高對比度皇家藍背景 + 維港奢華辦公室 Banner 融合) */}
      <section className="relative bg-[#071426] text-white overflow-hidden py-24 md:py-32 lg:py-40">
        
        {/* 背景圖片：俯瞰維港的高端奢華辦公室 (加載 AI 生成的 hero_banner.png) */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/manus-storage/hero_banner_b376c374.png" 
            alt="DILLIZ HK Office" 
            className="w-full h-full object-cover opacity-35 object-center"
          />
          {/* 皇家深藍色漸變遮罩，確保文字 100% 可讀與清晰 */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#071426] via-[#071426]/90 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#071426] via-transparent to-[#071426]/50" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="max-w-3xl space-y-8">
            
            {/* 持牌徽章 */}
            <div className="inline-flex items-center gap-2.5 bg-white/5 border border-white/10 px-4 py-2 rounded-full backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-[var(--gold)] animate-pulse" />
              <span className="text-xs font-bold text-[var(--gold)] tracking-wider uppercase">
                {t("hero.badge")}
              </span>
            </div>

            {/* 主標題 (襯線字體，極具張力與底蘊) */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight font-serif leading-none">
                <span className="text-[var(--gold)] block mb-2">{t("hero.title")}</span>
                <span className="text-white block font-light italic text-3xl sm:text-4xl md:text-5xl mt-3">{t("hero.subtitle")}</span>
              </h1>
            </div>

            {/* 描述文字 */}
            <p className="text-slate-300 text-base md:text-lg font-light leading-relaxed max-w-2xl">
              {t("hero.desc")}
            </p>

            {/* 行動按鈕 */}
            <div className="pt-4 flex flex-col sm:flex-row items-center gap-4">
              <a href="#services" className="btn-gold w-full sm:w-auto text-center py-3.5 px-8 font-semibold text-sm tracking-wider inline-flex items-center justify-center gap-2">
                {t("hero.btn.explore")} <ArrowRight size={16} />
              </a>
              <a href="#about" className="btn-gold-outline w-full sm:w-auto text-center py-3.5 px-8 font-semibold text-sm tracking-wider inline-flex items-center justify-center">
                {t("hero.btn.about")}
              </a>
            </div>

          </div>
        </div>

        {/* 底部裝飾線 */}
        <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </section>

      {/* 關於我們 (使命、理念、定位 - Aligned with Brochure) */}
      <section id="about" className="py-24 bg-white border-b border-slate-100 relative">
        <div className="max-w-7xl mx-auto px-6">
          
          {/* 三欄式使命理念定位卡片 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
            
            {/* 使命 */}
            <div className="bg-[#FDFBF7] border border-slate-100 p-8 md:p-10 shadow-sm relative hover:shadow-md transition-all duration-300 group">
              <div className="absolute top-0 left-0 w-full h-[3px] bg-[var(--gold)] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              <div className="w-12 h-12 rounded-full bg-[#0B1E36]/5 flex items-center justify-center mb-6 text-[var(--gold)]">
                <Shield size={22} />
              </div>
              <h3 className="text-xl font-bold text-[#0B1E36] mb-4 font-serif">{t("stats.mission")}</h3>
              <p className="text-slate-600 text-sm font-light leading-relaxed">
                {t("stats.mission.desc")}
              </p>
            </div>

            {/* 理念 */}
            <div className="bg-[#FDFBF7] border border-slate-100 p-8 md:p-10 shadow-sm relative hover:shadow-md transition-all duration-300 group">
              <div className="absolute top-0 left-0 w-full h-[3px] bg-[var(--gold)] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              <div className="w-12 h-12 rounded-full bg-[#0B1E36]/5 flex items-center justify-center mb-6 text-[var(--gold)]">
                <Users size={22} />
              </div>
              <h3 className="text-xl font-bold text-[#0B1E36] mb-4 font-serif">{t("stats.philosophy")}</h3>
              <p className="text-slate-600 text-sm font-light leading-relaxed">
                {t("stats.philosophy.desc")}
              </p>
            </div>

            {/* 定位 */}
            <div className="bg-[#FDFBF7] border border-slate-100 p-8 md:p-10 shadow-sm relative hover:shadow-md transition-all duration-300 group">
              <div className="absolute top-0 left-0 w-full h-[3px] bg-[var(--gold)] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              <div className="w-12 h-12 rounded-full bg-[#0B1E36]/5 flex items-center justify-center mb-6 text-[var(--gold)]">
                <TrendingUp size={22} />
              </div>
              <h3 className="text-xl font-bold text-[#0B1E36] mb-4 font-serif">{t("stats.positioning")}</h3>
              <p className="text-slate-600 text-sm font-light leading-relaxed">
                {t("stats.positioning.desc")}
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* 我們的服務 (Tab 切換，極致對齊宣傳摺頁) */}
      <section id="services" className="py-24 bg-[#FDFBF7] relative">
        <div className="max-w-7xl mx-auto px-6">
          
          {/* 標題 */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold tracking-[0.25em] text-[var(--gold)] uppercase block mb-3">Our Services</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B1E36] mb-4 font-serif">{t("services.title")}</h2>
            <p className="text-slate-600 font-light">
              {t("services.subtitle")}
            </p>
          </div>

          {/* 橫向 Tab 選項卡 (桌面端) */}
          <div className="hidden md:flex justify-center mb-12">
            <div className="inline-flex bg-white border border-slate-100 p-1.5 shadow-sm rounded-full max-w-full overflow-x-auto">
              {(Object.keys(services) as Array<keyof typeof services>).map((key) => {
                const s = services[key];
                const Icon = s.icon;
                const isActive = activeTab === key;
                return (
                  <button
                    key={key}
                    onClick={() => setActiveTab(key)}
                    className={`flex items-center gap-2.5 px-6 py-3 rounded-full text-xs font-bold tracking-wider transition-all duration-300 ${
                      isActive 
                        ? "bg-[#0B1E36] text-[var(--gold)] shadow-md" 
                        : "text-slate-500 hover:text-[#0B1E36] hover:bg-slate-50"
                    }`}
                  >
                    <Icon size={14} />
                    {s.title}
                  </button>
                );
              })}
            </div>
          </div>

          {/* 縱向 Tab 選項卡 (行動端) */}
          <div className="flex flex-col gap-2 md:hidden mb-8">
            {(Object.keys(services) as Array<keyof typeof services>).map((key) => {
              const s = services[key];
              const Icon = s.icon;
              const isActive = activeTab === key;
              return (
                <button
                  key={key}
                  onClick={() => setActiveTab(key)}
                  className={`flex items-center justify-between px-5 py-4 border rounded-xl text-sm font-bold transition-all ${
                    isActive 
                      ? "bg-[#0B1E36] text-[var(--gold)] border-[var(--gold)]" 
                      : "bg-white text-slate-600 border-slate-200"
                  }`}
                >
                  <span className="flex items-center gap-3">
                    <Icon size={16} />
                    {s.title}
                  </span>
                  <ChevronRight size={16} />
                </button>
              );
            })}
          </div>

          {/* Tab 內容面板 (雙欄非對稱精緻佈局) */}
          <div className="bg-white border border-slate-100 shadow-xl overflow-hidden min-h-[480px] flex flex-col justify-center">
            <div className="grid grid-cols-1 lg:grid-cols-12">
              
              {/* 左側詳細介紹 (佔 7 格) */}
              <div className="lg:col-span-7 p-8 md:p-12 lg:p-16 flex flex-col justify-between space-y-8">
                <div className="space-y-6">
                  <div className="inline-flex items-center gap-2 text-[var(--gold)] font-bold text-xs tracking-[0.2em] uppercase">
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--gold)]" />
                    DILLIZ TRUST SOLUTION
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-[#0B1E36] font-serif leading-tight">
                    {services[activeTab].title}
                  </h3>
                  <p className="text-slate-600 text-sm md:text-base leading-relaxed font-light">
                    {services[activeTab].description}
                  </p>
                </div>

                {/* 核心優勢列表 */}
                <div className="space-y-4 pt-6 border-t border-slate-100">
                  {services[activeTab].features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-[#D4AF37]/10 flex items-center justify-center text-[var(--gold)] mt-0.5 shrink-0">
                        <Check size={12} />
                      </div>
                      <span className="text-slate-700 text-sm font-medium">{feature}</span>
                    </div>
                  ))}
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

      {/* 真實案例分析 (360 度環狀互動版面，對齊宣傳單張詳細內容) */}
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
                      isActive ? "text-white" : "text-[#071426] group-hover:text-[#0B1E36]"
                    }`}>
                      {c.badge}
                    </span>
                  </button>
                );
              })}

            </div>

            {/* 右側詳情面板 (佔 7 格，重構為 Challenge, Solution, Result 官方摺頁結構) */}
            <div className="lg:col-span-7">
              <div className="bg-[#FDFBF7] border border-slate-100 p-8 md:p-10 shadow-md relative min-h-[450px] flex flex-col justify-between transition-all duration-500 animate-fadeIn">
                
                {/* 頂部裝飾角 */}
                <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-[var(--gold)]" />
                <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-[var(--gold)]" />

                <div className="space-y-6">
                  
                  {/* 頂部徽章與標題 */}
                  <div className="space-y-3">
                    <span className="inline-block bg-[#0B1E36] text-[var(--gold)] text-xs font-bold tracking-widest uppercase px-3 py-1">
                      {cases[activeCaseIdx].badge}
                    </span>
                    <h3 className="text-2xl font-bold text-[#0B1E36] font-serif leading-tight">
                      {cases[activeCaseIdx].title}
                    </h3>
                  </div>

                  <hr className="border-slate-200" />

                  {/* 1. 面臨挑戰 */}
                  <div className="space-y-2">
                    <h4 className="text-xs font-bold tracking-wider text-slate-400 uppercase flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
                      {t("cases.label.challenge")}
                    </h4>
                    <p className="text-slate-600 text-sm leading-relaxed font-light">
                      {cases[activeCaseIdx].desc}
                    </p>
                  </div>

                  {/* 2. 建議方案 */}
                  <div className="space-y-3">
                    <h4 className="text-xs font-bold tracking-wider text-slate-400 uppercase flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[var(--gold)]" />
                      {t("cases.label.solution")}
                    </h4>
                    <div className="grid grid-cols-1 gap-2.5">
                      {cases[activeCaseIdx].solutions.map((sol, sIdx) => (
                        <div key={sIdx} className="flex items-start gap-2.5">
                          <div className="w-4 h-4 rounded-full bg-[#D4AF37]/10 flex items-center justify-center text-[var(--gold)] mt-0.5 shrink-0">
                            <Check size={10} />
                          </div>
                          <span className="text-slate-700 text-sm font-medium">{sol}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* 3. 規劃結果 */}
                  <div className="bg-[#0B1E36]/5 border-l-4 border-[var(--gold)] p-4 rounded-r-lg space-y-1">
                    <h4 className="text-xs font-bold tracking-wider text-[var(--gold)] uppercase">
                      {t("cases.label.result")}
                    </h4>
                    <p className="text-slate-800 text-sm font-semibold leading-relaxed">
                      {cases[activeCaseIdx].result}
                    </p>
                  </div>

                </div>

                {/* 底部行動按鈕 */}
                <div className="pt-6 border-t border-slate-200/60 mt-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <span className="text-[10px] text-slate-400 font-light">
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

          {/* Wix 風格精緻對照表格 */}
          <div className="bg-white border border-slate-100 shadow-xl overflow-hidden rounded-lg">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[800px] border-collapse">
                
                {/* 表頭 */}
                <thead>
                  <tr className="bg-[#0B1E36] text-white">
                    <th className="py-6 px-6 text-left text-sm font-bold tracking-wider w-[20%] border-r border-white/5">{t("membership.threshold") === "定存門檻" ? "服務項目" : "Services"}</th>
                    {membershipTiers.map((tier, idx) => (
                      <th 
                        key={idx} 
                        className={`py-6 px-6 text-center text-base font-bold tracking-wider border-r border-white/5 last:border-r-0 ${
                          tier.highlight ? "bg-[#071426] text-[var(--gold)]" : ""
                        }`}
                      >
                        {tier.name}
                      </th>
                    ))}
                  </tr>
                </thead>

                {/* 表身 */}
                <tbody className="divide-y divide-slate-100">
                  
                  {/* 1. 資產聯動信用卡 */}
                  <tr className="hover:bg-slate-50/50 transition-colors">
                    <td className="py-5 px-6 text-sm font-semibold text-slate-800 bg-slate-50/30 border-r border-slate-100">{t("membership.linkedcard")}</td>
                    {membershipTiers.map((tier, idx) => (
                      <td key={idx} className={`py-5 px-6 text-center border-r border-slate-100 last:border-r-0 ${tier.highlight ? "bg-[#0B1E36]/5" : ""}`}>
                        <div className="flex justify-center">
                          <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600">
                            <Check size={14} />
                          </div>
                        </div>
                      </td>
                    ))}
                  </tr>

                  {/* 2. 定存門檻 */}
                  <tr className="hover:bg-slate-50/50 transition-colors">
                    <td className="py-5 px-6 text-sm font-semibold text-slate-800 bg-slate-50/30 border-r border-slate-100">{t("membership.threshold")}</td>
                    {membershipTiers.map((tier, idx) => (
                      <td key={idx} className={`py-5 px-6 text-center text-sm font-bold text-[#0B1E36] border-r border-slate-100 last:border-r-0 ${tier.highlight ? "bg-[#0B1E36]/5" : ""}`}>
                        {tier.threshold}
                      </td>
                    ))}
                  </tr>

                  {/* 3. 定存期限 */}
                  <tr className="hover:bg-slate-50/50 transition-colors">
                    <td className="py-5 px-6 text-sm font-semibold text-slate-800 bg-slate-50/30 border-r border-slate-100">{t("membership.duration")}</td>
                    {membershipTiers.map((tier, idx) => (
                      <td key={idx} className={`py-5 px-6 text-center text-sm text-slate-600 border-r border-slate-100 last:border-r-0 ${tier.highlight ? "bg-[#0B1E36]/5" : ""}`}>
                        {tier.duration}
                      </td>
                    ))}
                  </tr>

                  {/* 4. 離岸賬戶配置 */}
                  <tr className="hover:bg-slate-50/50 transition-colors">
                    <td className="py-5 px-6 text-sm font-semibold text-slate-800 bg-slate-50/30 border-r border-slate-100">{t("membership.offshore")}</td>
                    {membershipTiers.map((tier, idx) => (
                      <td key={idx} className={`py-5 px-6 text-center text-sm border-r border-slate-100 last:border-r-0 ${
                        tier.highlight ? "bg-[#0B1E36]/5 font-bold text-[var(--gold)]" : "text-slate-600"
                      }`}>
                        {tier.offshore}
                      </td>
                    ))}
                  </tr>

                  {/* 5. 全球賬單支付 */}
                  <tr className="hover:bg-slate-50/50 transition-colors">
                    <td className="py-5 px-6 text-sm font-semibold text-slate-800 bg-slate-50/30 border-r border-slate-100">{t("membership.billpay")}</td>
                    {membershipTiers.map((tier, idx) => (
                      <td key={idx} className={`py-5 px-6 text-center text-sm border-r border-slate-100 last:border-r-0 ${
                        tier.highlight ? "bg-[#0B1E36]/5 font-bold text-[var(--gold)]" : "text-slate-600"
                      }`}>
                        {tier.billpay}
                      </td>
                    ))}
                  </tr>

                  {/* 6. 客戶服務 */}
                  <tr className="hover:bg-slate-50/50 transition-colors">
                    <td className="py-5 px-6 text-sm font-semibold text-slate-800 bg-slate-50/30 border-r border-slate-100">{t("membership.customerservice")}</td>
                    {membershipTiers.map((tier, idx) => (
                      <td key={idx} className={`py-5 px-6 text-center text-sm border-r border-slate-100 last:border-r-0 ${
                        tier.highlight ? "bg-[#0B1E36]/5 font-bold text-[#0B1E36]" : "text-slate-600"
                      }`}>
                        {tier.service}
                      </td>
                    ))}
                  </tr>

                </tbody>
              </table>
            </div>
          </div>

          {/* 表格底部說明與行動按鈕 */}
          <div className="mt-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <p className="text-sm text-slate-500 font-light italic">
              * {t("membership.brochure.note")}
            </p>
            <a href="#contact" className="btn-gold py-3 px-8 font-semibold text-xs tracking-wider inline-flex items-center gap-2">
              {t("membership.btn.select")} <ArrowRight size={14} />
            </a>
          </div>

        </div>
      </section>

      {/* 常見問題 (FAQ Section) */}
      <section id="faq" className="py-24 bg-white border-y border-slate-100">
        <div className="max-w-4xl mx-auto px-6">
          
          {/* 標題 */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold tracking-[0.25em] text-[var(--gold)] uppercase block mb-3">FAQ</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B1E36] mb-4 font-serif">{t("faq.title")}</h2>
            <p className="text-slate-600 font-light">
              {t("faq.subtitle")}
            </p>
          </div>

          {/* 手風琴摺疊列表 */}
          <div className="space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div 
                  key={idx} 
                  className="border border-slate-100 rounded-lg overflow-hidden bg-[#FDFBF7] shadow-sm transition-all duration-300"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full py-5 px-6 flex items-center justify-between text-left gap-4 hover:bg-slate-50 transition-colors"
                  >
                    <span className="text-sm md:text-base font-bold text-[#0B1E36] font-serif">
                      {faq.q}
                    </span>
                    <div className="shrink-0 text-[var(--gold)]">
                      {isOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-6 pt-2 border-t border-slate-100 bg-white animate-fadeIn">
                      <p className="text-slate-600 text-sm md:text-base leading-relaxed font-light">
                        {faq.a}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 聯絡我們 & 預約諮詢 (Contact Section - Aligned with Brochure) */}
      <section id="contact" className="py-24 bg-[#FDFBF7]">
        <div className="max-w-7xl mx-auto px-6">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            
            {/* 左側：聯絡資訊與新標語 (佔 5 格) */}
            <div className="lg:col-span-5 space-y-8 flex flex-col justify-between">
              
              <div className="space-y-6">
                <span className="text-xs font-bold tracking-[0.25em] text-[var(--gold)] uppercase block">Contact Us</span>
                <h2 className="text-3xl md:text-4xl font-bold text-[#0B1E36] font-serif leading-tight">
                  {t("contact.title")}
                </h2>
                <p className="text-slate-600 font-light leading-relaxed">
                  {t("contact.subtitle")}
                </p>
              </div>

              {/* 聯絡清單 */}
              <div className="space-y-6 py-8 border-y border-slate-200/60">
                
                {/* 電話 */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#0B1E36] flex items-center justify-center text-[var(--gold)] shrink-0 shadow-sm">
                    <Phone size={16} />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">{t("contact.info.phone")}</h4>
                    <a href="tel:+85265286838" className="text-lg font-bold text-[#0B1E36] hover:text-[var(--gold)] transition-colors">
                      {t("contact.info.phone.value")}
                    </a>
                  </div>
                </div>

                {/* 電郵 */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#0B1E36] flex items-center justify-center text-[var(--gold)] shrink-0 shadow-sm">
                    <Mail size={16} />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">{t("contact.info.email")}</h4>
                    <a href="mailto:info@dilliz.com" className="text-lg font-bold text-[#0B1E36] hover:text-[var(--gold)] transition-colors">
                      info@dilliz.com
                    </a>
                  </div>
                </div>

                {/* 地址 */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#0B1E36] flex items-center justify-center text-[var(--gold)] shrink-0 shadow-sm">
                    <MapPin size={16} />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">{t("contact.info.address")}</h4>
                    <p className="text-sm font-semibold text-[#0B1E36] leading-relaxed">
                      {t("contact.info.address.value")}
                    </p>
                  </div>
                </div>

              </div>

              {/* 摺頁全新標語：「因為您，才值得擁有」 */}
              <div className="bg-[#0B1E36] p-8 text-center relative overflow-hidden group border border-[var(--gold)]/20 shadow-xl">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                <p className="text-[var(--gold)] font-serif text-2xl font-bold tracking-widest leading-none mb-1">
                  「 {t("contact.info.slogan")} 」
                </p>
                <p className="text-white/40 text-[9px] uppercase tracking-[0.35em] mt-2">
                  DilliZ Capital Trust Limited
                </p>
              </div>

            </div>

            {/* 右側：線上預約表單 (佔 7 格) */}
            <div className="lg:col-span-7">
              <div className="bg-white border border-slate-100 p-8 md:p-10 shadow-xl relative">
                
                {/* 裝飾金線 */}
                <div className="absolute top-0 left-0 w-full h-[4px] bg-[var(--gold)]" />

                <h3 className="text-xl font-bold text-[#0B1E36] font-serif mb-6">{t("contact.form.title")}</h3>

                {formSubmitted ? (
                  <div className="py-12 text-center space-y-4 animate-fadeIn">
                    <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-sm">
                      <Check size={32} />
                    </div>
                    <h4 className="text-xl font-bold text-[#0B1E36] font-serif">{lang === "zh" ? "提交成功" : "Submission Successful"}</h4>
                    <p className="text-slate-600 text-sm max-w-md mx-auto leading-relaxed">
                      {t("contact.form.success")}
                    </p>
                    <Button 
                      variant="outline" 
                      onClick={() => {
                        setFormSubmitted(false);
                        setFormData({ name: "", phone: "", email: "", interest: "", amount: "", message: "" });
                      }}
                      className="mt-4 border-slate-200 text-slate-600 hover:bg-slate-50"
                    >
                      {lang === "zh" ? "再次提交" : "Submit Another"}
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleFormSubmit} className="space-y-5">
                    
                    {/* 姓名 */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-700 tracking-wider uppercase block">{t("contact.form.name")} <span className="text-red-500">*</span></label>
                      <input 
                        type="text" 
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/50 focus:border-[var(--gold)] text-sm bg-slate-50/50"
                        placeholder={lang === "zh" ? "請輸入您的姓名" : "Enter your name"}
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      {/* 電話 */}
                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-slate-700 tracking-wider uppercase block">{t("contact.form.phone")} <span className="text-red-500">*</span></label>
                        <input 
                          type="tel" 
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/50 focus:border-[var(--gold)] text-sm bg-slate-50/50"
                          placeholder={lang === "zh" ? "例如：+852 9123 4567" : "e.g., +852 9123 4567"}
                        />
                      </div>

                      {/* 電郵 */}
                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-slate-700 tracking-wider uppercase block">{t("contact.form.email")} <span className="text-red-500">*</span></label>
                        <input 
                          type="email" 
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/50 focus:border-[var(--gold)] text-sm bg-slate-50/50"
                          placeholder={lang === "zh" ? "例如：client@example.com" : "e.g., client@example.com"}
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      {/* 感興趣的服務 */}
                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-slate-700 tracking-wider uppercase block">{t("contact.form.interest")}</label>
                        <select 
                          value={formData.interest}
                          onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                          className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/50 focus:border-[var(--gold)] text-sm bg-slate-50/50 appearance-none"
                        >
                          <option value="">{t("contact.form.interest.placeholder")}</option>
                          <option value="asset">{t("contact.form.interest.asset")}</option>
                          <option value="trust">{t("contact.form.interest.trust")}</option>
                          <option value="deposit">{t("contact.form.interest.deposit")}</option>
                          <option value="finance">{t("contact.form.interest.finance")}</option>
                          <option value="card">{t("contact.form.interest.card")}</option>
                        </select>
                      </div>

                      {/* 預計資產規模 */}
                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-slate-700 tracking-wider uppercase block">{t("contact.form.amount")}</label>
                        <select 
                          value={formData.amount}
                          onChange={(e) => setFormData({ ...formData, amount: e.target.value })}
                          className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/50 focus:border-[var(--gold)] text-sm bg-slate-50/50 appearance-none"
                        >
                          <option value="">{t("contact.form.amount.placeholder")}</option>
                          <option value="t1">{t("contact.form.amount.t1")}</option>
                          <option value="t2">{t("contact.form.amount.t2")}</option>
                          <option value="t3">{t("contact.form.amount.t3")}</option>
                          <option value="t4">{t("contact.form.amount.t4")}</option>
                        </select>
                      </div>
                    </div>

                    {/* 備註需求 */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-700 tracking-wider uppercase block">{t("contact.form.message")}</label>
                      <textarea 
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/50 focus:border-[var(--gold)] text-sm bg-slate-50/50"
                        placeholder={t("contact.form.message.placeholder")}
                      />
                    </div>

                    {/* 提交按鈕 */}
                    <button 
                      type="submit" 
                      className="btn-gold w-full text-center py-4 font-bold text-sm tracking-wider block shadow-md hover:shadow-lg transition-shadow"
                    >
                      {t("contact.form.btn.submit")}
                    </button>

                  </form>
                )}

              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 頁尾 (Footer - 皇家深藍背景) */}
      <footer className="bg-[#071426] text-white pt-20 pb-8 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 space-y-16">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* 品牌介紹 (佔 5 格) */}
            <div className="lg:col-span-5 space-y-6">
              <img 
                src="/manus-storage/dilliz_logo_transparent_95535920.png" 
                alt="DILLIZ" 
                className="h-12 w-auto object-contain"
              />
              <p className="text-slate-400 text-sm font-light leading-relaxed max-w-md">
                {t("footer.desc")}
              </p>
              <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-3.5 py-1.5 rounded-full text-xs font-bold text-[var(--gold)]">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--gold)]" />
                {t("footer.license")}：TC010540
              </div>
            </div>

            {/* 快速導航 (佔 3 格) */}
            <div className="lg:col-span-3 space-y-6">
              <h4 className="text-sm font-bold text-white uppercase tracking-widest font-serif">{t("footer.links.title")}</h4>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col gap-3 text-sm font-light text-slate-400">
                  <a href="#about" className="hover:text-[var(--gold)] transition-colors">{t("nav.about")}</a>
                  <a href="#services" className="hover:text-[var(--gold)] transition-colors">{t("nav.services")}</a>
                  <a href="#cases" className="hover:text-[var(--gold)] transition-colors">{t("nav.cases")}</a>
                </div>
                <div className="flex flex-col gap-3 text-sm font-light text-slate-400">
                  <a href="#membership" className="hover:text-[var(--gold)] transition-colors">{t("nav.membership")}</a>
                  <a href="#faq" className="hover:text-[var(--gold)] transition-colors">{t("nav.faq")}</a>
                  <a href="#contact" className="hover:text-[var(--gold)] transition-colors">{t("nav.contact")}</a>
                </div>
              </div>
            </div>

            {/* 免責聲明 (佔 4 格) */}
            <div className="lg:col-span-4 space-y-4">
              <h4 className="text-sm font-bold text-white uppercase tracking-widest font-serif">{t("footer.disclaimer.title")}</h4>
              <p className="text-slate-500 text-[11px] font-light leading-relaxed">
                {t("footer.disclaimer.text")}
              </p>
            </div>

          </div>

          <hr className="border-white/5" />

          {/* 底部版權 */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-light">
            <p>{t("footer.copyright")}</p>
            <div className="flex items-center gap-6">
              <span className="hover:text-white cursor-pointer transition-colors">Privacy Policy</span>
              <span className="hover:text-white cursor-pointer transition-colors">Terms of Service</span>
            </div>
          </div>

        </div>
      </footer>

    </div>
  );
}
