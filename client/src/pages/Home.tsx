import { useState } from "react";
import { 
  Shield, 
  CreditCard, 
  Coins, 
  Briefcase, 
  FileText, 
  Globe, 
  Users, 
  Heart, 
  TrendingUp, 
  Menu, 
  X, 
  ChevronDown, 
  ChevronRight, 
  ChevronUp, 
  Check, 
  ArrowRight, 
  MapPin, 
  Phone, 
  Mail, 
  Star 
} from "lucide-react";
import { translations } from "@/lib/translations";

export default function Home() {
  const [lang, setLang] = useState<"zh" | "en">("zh");
  const [mobileMenuOpen, setOpenMenu] = useState(false);
  const [activeService, setActiveService] = useState(0);
  const [activeCaseIdx, setActiveCaseIdx] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const t = (key: string) => {
    return translations[key]?.[lang] || key;
  };

  // 1. 核心服務定義 (對齊宣傳摺頁)
  const services = [
    {
      id: "custody",
      icon: Shield,
      title: t("services.asset.title"),
      tagline: t("services.asset.tagline"),
      desc: t("services.asset.desc"),
      features: [
        t("services.asset.feature1"),
        t("services.asset.feature2"),
        t("services.asset.feature3")
      ]
    },
    {
      id: "tax",
      icon: TrendingUp,
      title: t("services.trust.title"),
      tagline: t("services.trust.tagline"),
      desc: t("services.trust.desc"),
      features: [
        t("services.trust.feature1"),
        t("services.trust.feature2"),
        t("services.trust.feature3")
      ]
    },
    {
      id: "offshore",
      icon: Globe,
      title: t("services.deposit.title"),
      tagline: t("services.deposit.tagline"),
      desc: t("services.deposit.desc"),
      features: [
        t("services.deposit.feature1"),
        t("services.deposit.feature2"),
        t("services.deposit.feature3")
      ]
    },
    {
      id: "card",
      icon: CreditCard,
      title: t("services.finance.title"),
      tagline: t("services.finance.tagline"),
      desc: t("services.finance.desc"),
      features: [
        t("services.finance.feature1"),
        t("services.finance.feature2"),
        t("services.finance.feature3")
      ]
    },
    {
      id: "bill",
      icon: Coins,
      title: t("services.card.title"),
      tagline: t("services.card.tagline"),
      desc: t("services.card.desc"),
      features: [
        t("services.card.feature1"),
        t("services.card.feature2"),
        t("services.card.feature3")
      ]
    }
  ];

  // 2. 真實案例定義 (對齊宣傳摺頁)
  const cases = [
    {
      badge: t("cases.c1.badge"),
      title: t("cases.c1.title"),
      desc: t("cases.c1.desc"),
      solutions: [
        t("cases.c1.sol1"),
        t("cases.c1.sol2"),
        t("cases.c1.sol3")
      ],
      result: t("cases.c1.res"),
      icon: Briefcase
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
      icon: Heart
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
      icon: Users
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
      icon: Globe
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
      icon: Shield
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
      icon: FileText
    }
  ];

  // 3. 會員計劃定義 (對齊宣傳摺頁)
  const membershipTiers = [
    {
      name: t("membership.t1.name"),
      threshold: t("membership.t1.threshold"),
      duration: t("membership.t1.duration"),
      offshore: t("membership.t1.offshore"),
      billpay: t("membership.t1.billpay"),
      service: t("membership.t1.service"),
      cardStyle: "bg-metal-steel text-slate-800",
      highlight: false
    },
    {
      name: t("membership.t2.name"),
      threshold: t("membership.t2.threshold"),
      duration: t("membership.t2.duration"),
      offshore: t("membership.t2.offshore"),
      billpay: t("membership.t2.billpay"),
      service: t("membership.t2.service"),
      cardStyle: "bg-metal-silver text-slate-900",
      highlight: false
    },
    {
      name: t("membership.t3.name"),
      threshold: t("membership.t3.threshold"),
      duration: t("membership.t3.duration"),
      offshore: t("membership.t3.offshore"),
      billpay: t("membership.t3.billpay"),
      service: t("membership.t3.service"),
      cardStyle: "bg-metal-gold text-amber-950",
      highlight: true
    },
    {
      name: t("membership.t4.name"),
      threshold: t("membership.t4.threshold"),
      duration: t("membership.t4.duration"),
      offshore: t("membership.t4.offshore"),
      billpay: t("membership.t4.billpay"),
      service: t("membership.t4.service"),
      cardStyle: "bg-metal-blackgold text-[var(--gold)] border border-[#D4AF37]/30",
      highlight: false
    }
  ];

  // 4. 常見問題定義
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
    <div className="min-h-screen bg-[#FDFBF7] text-slate-800 font-sans selection:bg-[#D4AF37]/30 selection:text-[#0B1E36]">
      
      {/* 頂部導航欄 (Navbar - 皇家深藍背景) */}
      <header className="sticky top-0 z-50 bg-[#071426] border-b border-white/5 backdrop-blur-md shadow-md">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          
          {/* Logo 區域 */}
          <a href="#" className="flex items-center gap-3 shrink-0">
            <img 
              src="/manus-storage/dilliz_logo_transparent.png" 
              alt="DilliZ CAPITAL TRUST" 
              className="h-12 w-auto object-contain"
            />
          </a>

          {/* 桌面端導航選單 */}
          <nav className="hidden lg:flex items-center gap-8">
            <a href="#about" className="text-sm font-semibold text-slate-300 hover:text-[var(--gold)] transition-colors tracking-wider">
              {t("nav.about")}
            </a>
            <a href="#services" className="text-sm font-semibold text-slate-300 hover:text-[var(--gold)] transition-colors tracking-wider">
              {t("nav.services")}
            </a>
            <a href="#cases" className="text-sm font-semibold text-slate-300 hover:text-[var(--gold)] transition-colors tracking-wider">
              {t("nav.cases")}
            </a>
            <a href="#membership" className="text-sm font-semibold text-slate-300 hover:text-[var(--gold)] transition-colors tracking-wider">
              {t("nav.membership")}
            </a>
            <a href="#faq" className="text-sm font-semibold text-slate-300 hover:text-[var(--gold)] transition-colors tracking-wider">
              {t("nav.faq")}
            </a>
            <a href="#contact" className="text-sm font-semibold text-slate-300 hover:text-[var(--gold)] transition-colors tracking-wider">
              {t("nav.contact")}
            </a>
          </nav>

          {/* 右側語言切換與諮詢按鈕 */}
          <div className="hidden lg:flex items-center gap-6">
            
            {/* 雙語切換 */}
            <div className="flex items-center bg-white/5 border border-white/10 rounded-full p-1">
              <button 
                onClick={() => setLang("zh")}
                className={`text-xs font-bold px-3 py-1.5 rounded-full transition-all duration-200 ${
                  lang === "zh" 
                    ? "bg-[#D4AF37] text-[#071426] shadow-sm" 
                    : "text-slate-400 hover:text-white"
                }`}
              >
                繁
              </button>
              <button 
                onClick={() => setLang("en")}
                className={`text-xs font-bold px-3 py-1.5 rounded-full transition-all duration-200 ${
                  lang === "en" 
                    ? "bg-[#D4AF37] text-[#071426] shadow-sm" 
                    : "text-slate-400 hover:text-white"
                }`}
              >
                EN
              </button>
            </div>

            {/* 預約按鈕 */}
            <a 
              href="#contact" 
              className="btn-gold font-bold text-xs tracking-wider inline-flex items-center gap-2 shadow-gold-glow"
            >
              {t("nav.book")} <ArrowRight size={14} />
            </a>
          </div>

          {/* 行動端選單按鈕 */}
          <button 
            onClick={() => setOpenMenu(!mobileMenuOpen)}
            className="lg:hidden text-slate-300 hover:text-white p-2"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

        </div>

        {/* 行動端下拉選單 (深色背景) */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#071426] border-b border-white/10 px-6 py-6 space-y-6 transition-all duration-300">
            <nav className="flex flex-col gap-4">
              <a 
                href="#about" 
                onClick={() => setOpenMenu(false)}
                className="text-base font-semibold text-slate-300 hover:text-[var(--gold)]"
              >
                {t("nav.about")}
              </a>
              <a 
                href="#services" 
                onClick={() => setOpenMenu(false)}
                className="text-base font-semibold text-slate-300 hover:text-[var(--gold)]"
              >
                {t("nav.services")}
              </a>
              <a 
                href="#cases" 
                onClick={() => setOpenMenu(false)}
                className="text-base font-semibold text-slate-300 hover:text-[var(--gold)]"
              >
                {t("nav.cases")}
              </a>
              <a 
                href="#membership" 
                onClick={() => setOpenMenu(false)}
                className="text-base font-semibold text-slate-300 hover:text-[var(--gold)]"
              >
                {t("nav.membership")}
              </a>
              <a 
                href="#faq" 
                onClick={() => setOpenMenu(false)}
                className="text-base font-semibold text-slate-300 hover:text-[var(--gold)]"
              >
                {t("nav.faq")}
              </a>
              <a 
                href="#contact" 
                onClick={() => setOpenMenu(false)}
                className="text-base font-semibold text-slate-300 hover:text-[var(--gold)]"
              >
                {t("nav.contact")}
              </a>
            </nav>

            <hr className="border-white/10" />

            {/* 行動端語言與諮詢 */}
            <div className="flex items-center justify-between">
              <div className="flex items-center bg-white/5 border border-white/10 rounded-full p-1">
                <button 
                  onClick={() => { setLang("zh"); setOpenMenu(false); }}
                  className={`text-xs font-bold px-3 py-1.5 rounded-full ${
                    lang === "zh" ? "bg-[#D4AF37] text-[#071426]" : "text-slate-400"
                  }`}
                >
                  繁體
                </button>
                <button 
                  onClick={() => { setLang("en"); setOpenMenu(false); }}
                  className={`text-xs font-bold px-3 py-1.5 rounded-full ${
                    lang === "en" ? "bg-[#D4AF37] text-[#071426]" : "text-slate-400"
                  }`}
                >
                  English
                </button>
              </div>

              <a 
                href="#contact"
                onClick={() => setOpenMenu(false)}
                className="btn-gold text-xs font-bold tracking-wider py-2.5 px-5 shadow-gold-glow"
              >
                {t("nav.book")}
              </a>
            </div>

          </div>
        )}
      </header>

      {/* Hero 視覺橫幅區 */}
      <section className="relative min-h-[85vh] flex items-center bg-[#071426] overflow-hidden">
        
        {/* 背景大圖 (帶半透明遮罩) */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/manus-storage/hero_banner.png" 
            alt="Hong Kong Skyline" 
            className="w-full h-full object-cover opacity-35"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#071426] via-[#071426]/90 to-transparent" />
        </div>

        <div className="container relative z-10 py-20">
          <div className="max-w-3xl space-y-8">
            
            {/* 牌照徽章 */}
            <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5">
              <span className="w-2 h-2 rounded-full bg-[#D4AF37] animate-pulse" />
              <span className="text-xs font-bold tracking-wider text-slate-300 uppercase">
                {lang === "zh" ? "香港持牌信託服務公司 · 牌照 TC010540" : "HK Licensed Trust Company · License TC010540"}
              </span>
            </div>

            {/* 主副標題 (全新標語) */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white font-serif leading-tight">
                Build A Trust with <span className="text-metal-gold">DILLIZ</span>
              </h1>
              <p className="text-2xl sm:text-3xl font-light text-metal-gold font-serif italic tracking-wide">
                Shape The Future YOU Deserve
              </p>
            </div>

            {/* 關於我們簡介 (對齊宣傳摺頁) */}
            <p className="text-slate-300 text-base md:text-lg font-light leading-relaxed max-w-2xl">
              {t("hero.desc")}
            </p>

            {/* 核心行動按鈕 */}
            <div className="flex flex-wrap gap-4 pt-4">
              <a href="#services" className="btn-gold font-bold text-xs tracking-wider inline-flex items-center gap-2 shadow-gold-glow">
                {lang === "zh" ? "探索信託方案" : "Explore Services"} <ArrowRight size={14} />
              </a>
              <a href="#about" className="btn-white-outline font-bold text-xs tracking-wider">
                {lang === "zh" ? "關於帝力斯信託" : "About DILLIZ"}
              </a>
            </div>

          </div>
        </div>

      </section>

      {/* 關於我們：使命、理念、定位 (重構對齊宣傳摺頁) */}
      <section id="about" className="py-24 bg-white border-b border-metal-gold">
        <div className="max-w-7xl mx-auto px-6">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            
            {/* 左側：精緻品牌形象與 Logo */}
            <div className="lg:col-span-5 space-y-6 text-center lg:text-left">
              <div className="inline-block p-8 bg-[#0B1E36]/5 rounded-2xl border border-slate-100 shadow-sm relative">
                <img 
                  src="/manus-storage/dilliz_logo_transparent.png" 
                  alt="DILLIZ Shield Logo" 
                  className="max-h-[220px] mx-auto object-contain"
                />
              </div>
              <div className="space-y-2">
                <h3 className="text-2xl font-bold text-[#0B1E36] font-serif">DILLIZ CAPITAL TRUST</h3>
                <p className="text-sm text-[var(--gold)] font-bold tracking-[0.2em] uppercase">Trust · Integrity · Security</p>
              </div>
            </div>

            {/* 右側：使命、理念、定位 */}
            <div className="lg:col-span-7 space-y-10">
              
              <div className="space-y-3">
                <span className="text-xs font-bold tracking-[0.25em] text-[var(--gold)] uppercase block">About DILLIZ</span>
                <h2 className="text-3xl md:text-4xl font-bold text-metal-gold font-serif leading-tight">
                  {lang === "zh" ? "帝力斯資本信託有限公司" : "Dilliz Capital Trust Limited"}
                </h2>
                <p className="text-slate-600 font-light text-sm md:text-base leading-relaxed">
                  {lang === "zh" 
                    ? "總部設於香港，是一家香港持牌信託服務公司（牌照號碼：TC010540）。我們專注為客戶提供定制化信託解決方案，旨在成為您最值得信賴的信託公司。"
                    : "Headquartered in Hong Kong, Dilliz Capital Trust Limited is a licensed trust company in Hong Kong (License No. TC010540). We specialize in customized trust solutions to be your most trusted partner."}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
                
                {/* 使命 */}
                <div className="bg-[#FDFBF7] p-6 border border-slate-100 rounded-xl space-y-3 shadow-sm hover:shadow-md transition-all">
                  <div className="w-10 h-10 rounded-lg bg-[#D4AF37]/10 flex items-center justify-center text-[var(--gold)]">
                    <Shield size={20} />
                  </div>
                  <h4 className="text-lg font-bold text-[#0B1E36] font-serif">{t("stats.mission")}</h4>
                  <p className="text-xs text-slate-600 font-light leading-relaxed">
                    {t("stats.mission.desc")}
                  </p>
                </div>

                {/* 理念 */}
                <div className="bg-[#FDFBF7] p-6 border border-slate-100 rounded-xl space-y-3 shadow-sm hover:shadow-md transition-all">
                  <div className="w-10 h-10 rounded-lg bg-[#D4AF37]/10 flex items-center justify-center text-[var(--gold)]">
                    <Users size={20} />
                  </div>
                  <h4 className="text-lg font-bold text-[#0B1E36] font-serif">{t("stats.philosophy")}</h4>
                  <p className="text-xs text-slate-600 font-light leading-relaxed">
                    {t("stats.philosophy.desc")}
                  </p>
                </div>

                {/* 定位 */}
                <div className="bg-[#FDFBF7] p-6 border border-slate-100 rounded-xl space-y-3 shadow-sm hover:shadow-md transition-all">
                  <div className="w-10 h-10 rounded-lg bg-[#D4AF37]/10 flex items-center justify-center text-[var(--gold)]">
                    <Briefcase size={20} />
                  </div>
                  <h4 className="text-lg font-bold text-[#0B1E36] font-serif">{t("stats.positioning")}</h4>
                  <p className="text-xs text-slate-600 font-light leading-relaxed">
                    {t("stats.positioning.desc")}
                  </p>
                </div>

              </div>

            </div>

          </div>

        </div>
      </section>

      {/* 核心服務板塊 (對齊宣傳摺頁五大服務) */}
      <section id="services" className="py-24 bg-[#FDFBF7]">
        <div className="max-w-7xl mx-auto px-6">
          
          {/* 標題 */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold tracking-[0.25em] text-[var(--gold)] uppercase block mb-3">Our Services</span>
            <h2 className="text-3xl md:text-4xl font-bold text-metal-gold mb-4 font-serif">{t("services.title")}</h2>
            <p className="text-slate-600 font-light">
              {t("services.subtitle")}
            </p>
          </div>

          {/* 橫向雙欄佈局 (左側切換 Tab，右側展示詳情) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* 左側 Tab 切換 (佔 4 格) */}
            <div className="lg:col-span-4 flex flex-col gap-3">
              {services.map((srv, idx) => {
                const IconComponent = srv.icon;
                const isSelected = activeService === idx;
                return (
                  <button
                    key={srv.id}
                    onClick={() => setActiveService(idx)}
                    className={`flex items-center gap-4 p-5 rounded-xl border text-left transition-all duration-300 ${
                      isSelected 
                        ? "bg-[#0B1E36] text-white border-metal-gold shadow-gold-glow translate-x-2" 
                        : "bg-white text-slate-700 border-slate-100 hover:border-slate-300 hover:bg-slate-50"
                    }`}
                  >
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 ${
                      isSelected ? "bg-[#D4AF37] text-[#071426]" : "bg-[#0B1E36]/5 text-[#0B1E36]"
                    }`}>
                      <IconComponent size={20} />
                    </div>
                    <div className="min-w-0">
                      <h3 className={`font-bold text-sm md:text-base ${isSelected ? "text-[var(--gold)]" : "text-[#0B1E36]"}`}>
                        {srv.title}
                      </h3>
                      <p className={`text-xs truncate mt-0.5 ${isSelected ? "text-slate-300 font-light" : "text-slate-400"}`}>
                        {srv.tagline}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* 右側詳情面板 (佔 8 格) */}
            <div className="lg:col-span-8">
              <div className="bg-white border border-slate-100 rounded-2xl p-8 md:p-10 shadow-lg h-full flex flex-col justify-between min-h-[420px] transition-all duration-500 relative overflow-hidden">
                
                {/* 裝飾背景圖案 */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#D4AF37]/5 rounded-full blur-2xl -mr-10 -mt-10" />

                <div className="space-y-6 relative z-10">
                  
                  {/* 服務標題與 Tagline */}
                  <div className="space-y-2">
                    <span className="text-xs font-bold tracking-widest text-[var(--gold)] uppercase">
                      {services[activeService].tagline}
                    </span>
                    <h3 className="text-2xl md:text-3xl font-bold text-[#0B1E36] font-serif">
                      {services[activeService].title}
                    </h3>
                  </div>

                  <p className="text-slate-600 text-sm md:text-base leading-relaxed font-light">
                    {services[activeService].desc}
                  </p>

                  <hr className="border-metal-gold" />

                  {/* 特色亮點列表 */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {services[activeService].features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full bg-[#D4AF37]/10 flex items-center justify-center text-[var(--gold)] mt-0.5 shrink-0">
                          <Check size={12} />
                        </div>
                        <span className="text-slate-700 text-sm font-medium">{feat}</span>
                      </div>
                    ))}
                  </div>

                </div>

                {/* 底部諮詢行動按鈕 */}
                <div className="pt-8 border-t border-slate-100 mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 relative z-10">
                  <span className="text-xs text-slate-400 font-light">
                    {lang === "zh" ? "*所有信託服務均在香港信託法框架下安全合規運行" : "*All trust services comply strictly with HK Trust Law"}
                  </span>
                  <a href="#contact" className="btn-gold py-2.5 px-6 font-bold text-xs tracking-wider inline-flex items-center gap-2">
                    {t("nav.book")} <ArrowRight size={14} />
                  </a>
                </div>

              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 真實案例分析 (360度環狀生命週期互動版面) */}
      <section id="cases" className="py-24 bg-white border-y border-metal-gold">
        <div className="max-w-7xl mx-auto px-6">
          
          {/* 標題 */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold tracking-[0.25em] text-[var(--gold)] uppercase block mb-3">Real Scenarios</span>
            <h2 className="text-3xl md:text-4xl font-bold text-metal-gold mb-4 font-serif">{t("cases.title")}</h2>
            <p className="text-slate-600 font-light">
              {t("cases.subtitle")}
            </p>
          </div>

          {/* 360度環狀互動版面網格 */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            
            {/* 左側：360度環狀互動圓盤 (佔 5 格) */}
            <div className="lg:col-span-5 flex justify-center relative min-h-[380px] md:min-h-[450px]">
              
              {/* 中心圓圈 (代表高淨值客戶/家族) */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-28 h-28 md:w-32 md:h-32 rounded-full bg-[#0B1E36] border-4 border-metal-gold shadow-gold-glow flex flex-col items-center justify-center z-30">
                <div className="w-12 h-12 rounded-full bg-metal-gold/10 flex items-center justify-center text-metal-gold mb-1">
                  <Users size={24} className="text-metal-gold" />
                </div>
                <span className="text-[10px] md:text-xs font-bold text-metal-gold tracking-widest uppercase font-serif">
                  {lang === "zh" ? "客戶家族" : "CLIENT"}
                </span>
                <span className="text-[8px] text-metal-gold font-bold">DILLIZ</span>
              </div>

              {/* 背景虛線裝飾圓環 */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[72%] h-[72%] rounded-full border-2 border-dashed border-[#D4AF37]/40 z-0" />
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[48%] h-[48%] rounded-full border border-dashed border-[#D4AF37]/20 z-0" />

              {/* 連接線 (SVG) */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none z-10">
                {cases.map((_, idx) => {
                  const angle = (idx * 60 * Math.PI) / 180 - Math.PI / 2;
                  const cos = Math.cos(angle);
                  const sin = Math.sin(angle);
                  const isActive = activeCaseIdx === idx;
                  
                  // 連接中心 (50%, 50%) 到按鈕位置
                  return (
                    <line
                      key={idx}
                      x1="50%"
                      y1="50%"
                      x2={`calc(50% + ${cos * 42}%)`}
                      y2={`calc(50% + ${sin * 42}%)`}
                      stroke={isActive ? "#D4AF37" : "#cbd5e1"}
                      strokeWidth={isActive ? "2" : "1"}
                      strokeDasharray={isActive ? "none" : "3,3"}
                      className="transition-all duration-300"
                    />
                  );
                })}
              </svg>

              {/* 6 個環繞情境圓圈按鈕 */}
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
                        ? "bg-[#0B1E36] text-metal-gold border-metal-gold scale-110 shadow-gold-glow" 
                        : "bg-white text-[#071426] border-slate-300 hover:border-[#0B1E36] hover:scale-105"
                    }`}
                    title={c.badge}
                  >
                    <IconComponent size={18} className={isActive ? "text-metal-gold" : "text-[#071426]"} />
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
                <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-metal-gold" />
                <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-metal-gold" />

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
                  <div className="bg-[#0B1E36]/5 border-l-4 border-metal-gold p-4 rounded-r-lg space-y-1">
                    <h4 className="text-xs font-bold tracking-wider text-metal-gold uppercase">
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

      {/* 會員計劃 (Membership Section - Fancy 3D 金屬懸浮卡片對照矩陣) */}
      <section id="membership" className="py-24 bg-[#FDFBF7]">
        <div className="max-w-7xl mx-auto px-6">
          
          {/* 標題 */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold tracking-[0.25em] text-[var(--gold)] uppercase block mb-3">Membership Plan</span>
            <h2 className="text-3xl md:text-4xl font-bold text-metal-gold mb-4 font-serif">{t("membership.title")}</h2>
            <p className="text-slate-600 font-light">
              {t("membership.subtitle")}
            </p>
          </div>

          {/* Fancy 3D 懸浮金屬卡片矩陣 */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pt-6">
            {membershipTiers.map((tier, idx) => (
              <div 
                key={idx}
                className={`relative rounded-2xl bg-white border border-slate-100 overflow-hidden flex flex-col justify-between transition-all duration-300 ${
                  tier.highlight 
                    ? "shadow-gold-glow border-[#D4AF37]/50 lg:-translate-y-4 scale-[1.02] z-10" 
                    : "shadow-luxury shadow-luxury-hover z-0"
                }`}
              >
                {/* 尊享版「官方推薦」緞帶 */}
                {tier.highlight && (
                  <div className="absolute top-0 right-0 bg-[#D4AF37] text-[#071426] text-[9px] font-extrabold tracking-widest uppercase px-3 py-1 rounded-bl-xl z-20 flex items-center gap-1">
                    <Star size={8} fill="#071426" /> {lang === "zh" ? "推薦" : "RECOMMENDED"}
                  </div>
                )}

                {/* 頂部：金屬質感 Header */}
                <div className={`p-6 text-center relative overflow-hidden shrink-0 ${tier.cardStyle}`}>
                  <h3 className="text-xl font-extrabold tracking-widest font-serif uppercase relative z-10">
                    {tier.name}
                  </h3>
                  <p className="text-[10px] tracking-[0.15em] font-semibold opacity-75 mt-1 uppercase relative z-10">
                    {lang === "zh" ? "信託專屬會員" : "TRUST MEMBERSHIP"}
                  </p>
                </div>

                {/* 中部：詳細權益列表 */}
                <div className="p-6 space-y-6 grow">
                  
                  {/* 定存門檻 (大字突出) */}
                  <div className="text-center pb-5 border-b border-slate-100">
                    <span className="text-[10px] font-bold tracking-wider text-slate-400 uppercase block mb-1">
                      {t("membership.threshold")}
                    </span>
                    <span className="text-lg font-extrabold text-[#0B1E36]">
                      {tier.threshold}
                    </span>
                  </div>

                  {/* 細項列表 */}
                  <div className="space-y-4 text-xs">
                    
                    {/* 1. 資產聯動信用卡 */}
                    <div className="flex justify-between items-center py-1 border-b border-slate-50">
                      <span className="text-slate-400 font-medium">{t("membership.linkedcard")}</span>
                      <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600">
                        <Check size={12} />
                      </div>
                    </div>

                    {/* 2. 定存期限 */}
                    <div className="flex justify-between items-center py-1 border-b border-slate-50">
                      <span className="text-slate-400 font-medium">{t("membership.duration")}</span>
                      <span className="font-bold text-[#0B1E36]">{tier.duration}</span>
                    </div>

                    {/* 3. 離岸賬戶配置 */}
                    <div className="flex justify-between items-center py-1 border-b border-slate-50">
                      <span className="text-slate-400 font-medium">{t("membership.offshore")}</span>
                      <span className={`font-bold ${tier.highlight ? "text-[var(--gold)]" : "text-[#0B1E36]"}`}>
                        {tier.offshore}
                      </span>
                    </div>

                    {/* 4. 全球賬單支付 */}
                    <div className="flex justify-between items-center py-1 border-b border-slate-50">
                      <span className="text-slate-400 font-medium">{t("membership.billpay")}</span>
                      <span className={`font-bold ${tier.highlight ? "text-[var(--gold)]" : "text-[#0B1E36]"}`}>
                        {tier.billpay}
                      </span>
                    </div>

                    {/* 5. 客戶服務 */}
                    <div className="flex justify-between items-center py-1">
                      <span className="text-slate-400 font-medium">{t("membership.customerservice")}</span>
                      <span className="font-bold text-slate-700">{tier.service}</span>
                    </div>

                  </div>

                </div>

                {/* 底部：行動按鈕 */}
                <div className="p-6 pt-0 shrink-0">
                  <a 
                    href="#contact" 
                    className={`w-full text-center py-3 rounded-xl text-xs font-bold tracking-wider block transition-all duration-300 ${
                      tier.highlight 
                        ? "bg-[#D4AF37] text-[#071426] hover:bg-[#C29E2F] shadow-md hover:shadow-lg" 
                        : "bg-[#0B1E36]/5 text-[#0B1E36] hover:bg-[#0B1E36] hover:text-white"
                    }`}
                  >
                    {lang === "zh" ? "立即申請諮詢" : "Apply Consultation"}
                  </a>
                </div>

              </div>
            ))}
          </div>

          {/* 表格底部說明 */}
          <div className="mt-12 text-center">
            <p className="text-xs text-slate-400 font-light italic">
              * {t("membership.brochure.note")}
            </p>
          </div>

        </div>
      </section>

      {/* 常見問題 (FAQ Section) */}
      <section id="faq" className="py-24 bg-white border-y border-metal-gold">
        <div className="max-w-4xl mx-auto px-6">
          
          {/* 標題 */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold tracking-[0.25em] text-[var(--gold)] uppercase block mb-3">FAQ</span>
            <h2 className="text-3xl md:text-4xl font-bold text-metal-gold mb-4 font-serif">{t("faq.title")}</h2>
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
                    className="w-full py-5 px-6 flex items-center justify-between text-left gap-4 hover:bg-slate-50/50 transition-colors"
                  >
                    <span className="font-bold text-sm md:text-base text-[#0B1E36] font-serif">
                      {faq.q}
                    </span>
                    <div className={`shrink-0 w-6 h-6 rounded-full bg-[#0B1E36]/5 flex items-center justify-center text-[#0B1E36] transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}>
                      <ChevronDown size={14} />
                    </div>
                  </button>

                  <div className={`transition-all duration-300 overflow-hidden ${
                    isOpen ? "max-h-[300px] border-t border-slate-100" : "max-h-0"
                  }`}>
                    <div className="p-6 text-xs md:text-sm text-slate-600 leading-relaxed font-light">
                      {faq.a}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 線上預約諮詢與聯絡資訊 */}
      <section id="contact" className="py-24 bg-[#071426] text-white relative overflow-hidden">
        
        {/* 背景大圖 (半透明遮罩) */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/manus-storage/trust_concept.png" 
            alt="Consultation Concept" 
            className="w-full h-full object-cover opacity-10"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#071426] via-[#071426]/95 to-[#020914]" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            
            {/* 左側：聯絡資訊與新品牌標語 (佔 5 格) */}
            <div className="lg:col-span-5 space-y-10">
              
              <div className="space-y-4">
                <span className="text-xs font-bold tracking-[0.25em] text-[var(--gold)] uppercase block">Contact Us</span>
                <h2 className="text-3xl md:text-4xl font-bold text-metal-gold font-serif leading-tight">
                  {lang === "zh" ? "預約專屬信託顧問" : "Book Your Consultant"}
                </h2>
                
                {/* 新品牌標語：因為您，才值得擁有 */}
                <div className="pt-2 border-l-2 border-[var(--gold)] pl-4">
                  <p className="text-lg font-serif italic text-slate-200">
                    {lang === "zh" ? "因為您，才值得擁有" : "Because YOU Deserve The Best"}
                  </p>
                </div>
              </div>

              <p className="text-slate-400 text-sm font-light leading-relaxed">
                {lang === "zh" 
                  ? "不論是家族財富傳承、跨國稅務優化、還是資產聯動信用卡配置，我們的持牌信託專家將為您量身打造最安全、簡易的解決方案。"
                  : "Whether it is wealth inheritance, tax optimization, or credit card configurations, our trust experts are ready to design the safest solutions for you."}
              </p>

              {/* 聯絡細項 */}
              <div className="space-y-6 text-sm">
                
                {/* 地址 */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-[var(--gold)] shrink-0">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-300">{lang === "zh" ? "總部地址" : "Headquarters"}</h4>
                    <p className="text-xs text-slate-400 mt-1 font-light leading-relaxed">
                      {lang === "zh" 
                        ? "香港觀塘海濱道133號 萬兆豐中心17樓I室" 
                        : "Room I, 17/F, Billion Plaza, 133 Hoi Bun Road, Kwun Tong, Hong Kong"}
                    </p>
                  </div>
                </div>

                {/* 電話 */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-[var(--gold)] shrink-0">
                    <Phone size={18} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-300">{lang === "zh" ? "專屬客服熱線" : "Consultation Hotline"}</h4>
                    <p className="text-xs text-slate-400 mt-1 font-semibold">
                      +852 6528 6838
                    </p>
                  </div>
                </div>

                {/* 電郵 */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-[var(--gold)] shrink-0">
                    <Mail size={18} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-300">{lang === "zh" ? "官方電子郵件" : "Official Email"}</h4>
                    <p className="text-xs text-slate-400 mt-1 font-semibold">
                      info@dilliz.com
                    </p>
                  </div>
                </div>

              </div>

            </div>

            {/* 右側：線上預約表單 (佔 7 格) */}
            <div className="lg:col-span-7">
              <div className="bg-white/5 border border-white/10 p-8 md:p-10 rounded-2xl backdrop-blur-md shadow-2xl space-y-6">
                
                <h3 className="text-xl font-bold font-serif text-[var(--gold)]">
                  {lang === "zh" ? "提交諮詢申請" : "Submit Consultation Request"}
                </h3>

                <form className="space-y-4 text-slate-300" onSubmit={(e) => { e.preventDefault(); alert(lang === "zh" ? "感謝您的預約！我們的資深客戶專員將於 24 小時內聯絡您。" : "Thank you! Our senior relationship manager will contact you within 24 hours."); }}>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    
                    {/* 姓名 */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold tracking-wider uppercase text-slate-400">{lang === "zh" ? "客戶姓名" : "Your Name"}</label>
                      <input 
                        type="text" 
                        required
                        placeholder={lang === "zh" ? "例：王先生 / 陳女士" : "e.g., Mr. Wang"}
                        className="w-full bg-white/5 border border-white/15 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[var(--gold)] transition-colors"
                      />
                    </div>

                    {/* 電話 */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold tracking-wider uppercase text-slate-400">{lang === "zh" ? "聯絡電話" : "Phone Number"}</label>
                      <input 
                        type="tel" 
                        required
                        placeholder={lang === "zh" ? "例：+852 6528 XXXX" : "e.g., +852 6528 XXXX"}
                        className="w-full bg-white/5 border border-white/15 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[var(--gold)] transition-colors"
                      />
                    </div>

                  </div>

                  {/* 電郵 */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold tracking-wider uppercase text-slate-400">{lang === "zh" ? "電子郵件" : "Email Address"}</label>
                    <input 
                      type="email" 
                      required
                      placeholder="e.g., client@example.com"
                      className="w-full bg-white/5 border border-white/15 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[var(--gold)] transition-colors"
                    />
                  </div>

                  {/* 諮詢服務主題 */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold tracking-wider uppercase text-slate-400">{lang === "zh" ? "感興趣的信託服務" : "Service of Interest"}</label>
                    <select 
                      className="w-full bg-[#071426] border border-white/15 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[var(--gold)] transition-colors text-slate-300"
                    >
                      <option value="custody">{t("services.asset.title")}</option>
                      <option value="tax">{t("services.trust.title")}</option>
                      <option value="offshore">{t("services.deposit.title")}</option>
                      <option value="card">{t("services.finance.title")}</option>
                      <option value="bill">{t("services.card.title")}</option>
                    </select>
                  </div>

                  {/* 備註留言 */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold tracking-wider uppercase text-slate-400">{lang === "zh" ? "諮詢詳情 / 備註" : "Message / Remarks"}</label>
                    <textarea 
                      rows={4}
                      placeholder={lang === "zh" ? "請簡單描述您的資產託管或配置需求..." : "Please briefly describe your asset custody or configuration needs..."}
                      className="w-full bg-white/5 border border-white/15 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[var(--gold)] transition-colors resize-none"
                    />
                  </div>

                  {/* 提交按鈕 */}
                  <button 
                    type="submit"
                    className="w-full btn-gold font-bold text-xs tracking-wider py-3.5 mt-2 shadow-gold-glow"
                  >
                    {lang === "zh" ? "提交預約諮詢" : "Submit Consultation Request"}
                  </button>

                </form>

              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 官方頁尾 (Footer) */}
      <footer className="bg-[#020914] text-slate-500 py-12 border-t border-white/5 text-xs">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* 左側：版權與聲明 */}
          <div className="space-y-2 text-center md:text-left">
            <p className="font-semibold text-slate-400">
              &copy; 2026 DILLIZ CAPITAL TRUST LIMITED. All Rights Reserved.
            </p>
            <p className="max-w-2xl font-light text-slate-600 leading-relaxed">
              {lang === "zh" 
                ? "免責聲明：本網站所載資料僅供參考，不構成任何法律、稅務、投資或專業建議。信託服務由香港持牌信託服務公司帝力斯資本信託有限公司（牌照號碼：TC010540）依法提供。"
                : "Disclaimer: The information contained in this website is for reference only and does not constitute any legal, tax, investment, or professional advice. Trust services are provided by Dilliz Capital Trust Limited (License No. TC010540)."}
            </p>
          </div>

          {/* 右側：Logo */}
          <div className="shrink-0">
            <img 
              src="/manus-storage/dilliz_logo_transparent.png" 
              alt="DILLIZ Footer Logo" 
              className="h-10 w-auto opacity-45 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-300"
            />
          </div>

        </div>
      </footer>

    </div>
  );
}
