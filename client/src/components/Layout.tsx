import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Globe, Menu, X, ArrowRight, Shield } from "lucide-react";
import { t } from "@/lib/translations";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [location, setLocation] = useLocation();
  const [lang, setLang] = useState<"zh" | "en">("zh");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // 初始化時讀取 localStorage 中的語言設定，確保跨頁面一致
  useEffect(() => {
    const savedLang = localStorage.getItem("dilliz_lang");
    if (savedLang === "zh" || savedLang === "en") {
      setLang(savedLang);
    }
  }, []);

  const handleLangChange = (newLang: "zh" | "en") => {
    setLang(newLang);
    localStorage.setItem("dilliz_lang", newLang);
    // 觸發自定義事件，通知其他可能正在監聽語言變更的組件
    window.dispatchEvent(new Event("dilliz_lang_changed"));
  };

  const toggleLang = () => {
    const target = lang === "zh" ? "en" : "zh";
    handleLangChange(target);
  };

  // 監聽來自其他頁面的語言變更事件
  useEffect(() => {
    const handleEvent = () => {
      const savedLang = localStorage.getItem("dilliz_lang");
      if (savedLang === "zh" || savedLang === "en") {
        setLang(savedLang);
      }
    };
    window.addEventListener("dilliz_lang_changed", handleEvent);
    return () => window.removeEventListener("dilliz_lang_changed", handleEvent);
  }, []);

  // 每次切換路由時，自動滾動到頁面頂部
  useEffect(() => {
    window.scrollTo(0, 0);
    setMobileMenuOpen(false);
  }, [location]);

  const navItems = [
    { name: t("nav.about", lang), path: "/about" },
    { name: t("nav.services", lang), path: "/services" },
    { name: t("nav.cases", lang), path: "/cases" },
    { name: t("nav.membership", lang), path: "/membership" },
    { name: t("nav.faq", lang), path: "/faq" },
    { name: t("nav.contact", lang), path: "/contact" }
  ];

  return (
    <div className="min-h-screen bg-[#030914] text-slate-100 font-sans selection:bg-metal-gold selection:text-[#071426] flex flex-col justify-between">
      
      {/* 頂部導航欄 (Navbar - 皇家深藍背景) */}
      <header className="sticky top-0 z-50 bg-[#071426] border-b border-white/5 backdrop-blur-md shadow-md">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          
          {/* Logo 區域 */}
          <Link href="/" className="flex items-center gap-3 group shrink-0">
            <img 
              src="/manus-storage/dilliz_logo_transparent_60d7bb69.png" 
              alt="DILLIZ Logo" 
              className="h-11 w-auto transition-transform duration-500 group-hover:scale-105"
            />
            <div className="flex flex-col">
              <span className="text-lg font-extrabold tracking-[0.15em] text-metal-gold font-serif leading-none">DILLIZ</span>
              <span className="text-[7px] text-slate-400 font-bold tracking-[0.1em] mt-1 uppercase">CAPITAL TRUST LIMITED</span>
            </div>
          </Link>

          {/* 桌面端導航選單 (導向獨立路由) */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item, idx) => {
              const isActive = location === item.path;
              return (
                <Link 
                  key={idx} 
                  href={item.path}
                  className={`text-xs font-bold tracking-[0.15em] uppercase transition-all duration-300 relative py-2 ${
                    isActive 
                      ? "text-metal-gold" 
                      : "text-slate-300 hover:text-metal-gold"
                  }`}
                >
                  {item.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-[2px] bg-metal-gold shadow-gold-glow animate-fadeIn" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* 右側：語言切換與預約按鈕 */}
          <div className="hidden lg:flex items-center gap-6">
            
            {/* 語言切換按鈕 */}
            <div className="flex items-center bg-[#030914] border border-white/10 rounded-full p-1">
              <button 
                onClick={() => handleLangChange("zh")}
                className={`px-3 py-1.5 rounded-full text-[10px] font-bold tracking-wider transition-all ${
                  lang === "zh" 
                    ? "bg-metal-gold text-[#071426] shadow-gold-glow" 
                    : "text-slate-400 hover:text-slate-200"
                }`}
              >
                繁
              </button>
              <button 
                onClick={() => handleLangChange("en")}
                className={`px-3 py-1.5 rounded-full text-[10px] font-bold tracking-wider transition-all ${
                  lang === "en" 
                    ? "bg-metal-gold text-[#071426] shadow-gold-glow" 
                    : "text-slate-400 hover:text-slate-200"
                }`}
              >
                EN
              </button>
            </div>

            {/* 預約專屬諮詢 (btn-gold 流光與光暈) */}
            <Link 
              href="/contact" 
              className="btn-gold shadow-gold-glow py-3 px-6 font-bold text-xs tracking-widest uppercase inline-flex items-center gap-2"
            >
              {t("nav.book", lang)} <ArrowRight size={14} />
            </Link>

          </div>

          {/* 行動端選單開關 */}
          <div className="flex items-center gap-4 lg:hidden">
            {/* 語言切換 */}
            <button 
              onClick={toggleLang}
              className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-slate-300 text-xs font-bold"
            >
              {lang === "zh" ? "繁" : "EN"}
            </button>

            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-slate-200"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

        </div>

        {/* 行動端選單面板 */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#071426] border-b border-white/5 px-6 py-8 space-y-6 animate-fadeIn">
            <nav className="flex flex-col gap-4">
              {navItems.map((item, idx) => {
                const isActive = location === item.path;
                return (
                  <Link 
                    key={idx} 
                    href={item.path}
                    className={`text-sm font-bold tracking-wider py-2 border-b border-white/5 ${
                      isActive ? "text-metal-gold" : "text-slate-300"
                    }`}
                  >
                    {item.name}
                  </Link>
                );
              })}
            </nav>

            <Link 
              href="/contact" 
              className="btn-gold shadow-gold-glow w-full text-center py-4 font-bold text-xs tracking-widest uppercase block"
            >
              {t("nav.book", lang)}
            </Link>
          </div>
        )}
      </header>

      {/* 頁面主體內容 */}
      <div className="grow">
        {children}
      </div>

      {/* 官方頁尾 (Footer) */}
      <footer className="bg-[#020914] text-slate-500 py-12 border-t border-white/5 text-xs shrink-0">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* 左側：版權與聲明 */}
          <div className="space-y-3 text-center md:text-left">
            <p className="font-semibold text-slate-400">
              &copy; 2026 DILLIZ CAPITAL TRUST LIMITED. All Rights Reserved.
            </p>
            
            {/* T&C 與 Privacy Policy 連結 */}
            <div className="flex flex-wrap justify-center md:justify-start gap-x-6 gap-y-2 text-xs font-medium text-metal-gold/80">
              <Link href="/terms" className="hover:text-metal-gold transition-colors underline underline-offset-4 decoration-metal-gold/30">
                {lang === "zh" ? "使用條款 (Terms & Conditions)" : "Terms & Conditions"}
              </Link>
              <span className="text-slate-700 hidden sm:inline">|</span>
              <Link href="/privacy" className="hover:text-metal-gold transition-colors underline underline-offset-4 decoration-metal-gold/30">
                {lang === "zh" ? "隱私政策 (Privacy Policy)" : "Privacy Policy"}
              </Link>
            </div>

            <p className="max-w-2xl font-light text-slate-600 leading-relaxed">
              {lang === "zh" 
                ? "免責聲明：本網站所載資料僅供參考，不構成任何法律、稅務、投資或專業建議。信託服務由香港持牌信託服務公司帝力斯資本信託有限公司（牌照號碼：TC010540）依法提供。"
                : "Disclaimer: The information contained in this website is for reference only and does not constitute any legal, tax, investment, or professional advice. Trust services are provided by Dilliz Capital Trust Limited (License No. TC010540)."}
            </p>
          </div>

          {/* 右側：Logo */}
          <div className="shrink-0">
            <Link href="/">
              <img 
                src="/manus-storage/dilliz_logo_transparent_60d7bb69.png" 
                alt="DILLIZ Footer Logo" 
                className="h-10 w-auto opacity-45 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-300 cursor-pointer"
              />
            </Link>
          </div>

        </div>
      </footer>

    </div>
  );
}
