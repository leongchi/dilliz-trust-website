import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Globe, Menu, X, ArrowRight, Shield, Bell, Trash2, CheckCircle2, User } from "lucide-react";
import { t, useTranslationsReady } from "@/lib/translations";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [location, setLocation] = useLocation();
  const [lang, setLang] = useState<"zh" | "en" | "cn">("zh");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  // Force re-render of ALL children when content.json finishes loading
  const translationsReady = useTranslationsReady();
  const [, forceUpdate] = useState(0);
  useEffect(() => {
    if (translationsReady) {
      forceUpdate(n => n + 1);
    }
  }, [translationsReady]);

  // 初始化時讀取 localStorage 中的語言設定，確保跨頁面一致
  useEffect(() => {
    const savedLang = localStorage.getItem("dilliz_lang");
    if (savedLang === "zh" || savedLang === "en" || savedLang === "cn") {
      setLang(savedLang as "zh" | "en" | "cn");
    }
  }, []);

  const handleLangChange = (newLang: "zh" | "en" | "cn") => {
    setLang(newLang);
    localStorage.setItem("dilliz_lang", newLang);
    // 觸發自定義事件，通知其他可能正在監聽語言變更的組件
    window.dispatchEvent(new Event("dilliz_lang_changed"));
  };

  const toggleLang = () => {
    const target = t("inline.layout.0", lang) as "zh" | "en" | "cn";
    handleLangChange(target);
  };

  // 監聽來自其他頁面的語言變更事件
  useEffect(() => {
    const handleEvent = () => {
      const savedLang = localStorage.getItem("dilliz_lang");
      if (savedLang === "zh" || savedLang === "en" || savedLang === "cn") {
        setLang(savedLang as "zh" | "en" | "cn");
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
    <div className="min-h-screen bg-[#1a1a1a] text-slate-100 font-sans selection:bg-metal-gold selection:text-[#1f1f1f] flex flex-col justify-between">
      
      {/* 頂部導航欄 (Navbar - 宣傳冊岩石深灰背景) */}
      <header className="sticky top-0 z-50 bg-[#2b2b2b] border-b border-white/5 backdrop-blur-md shadow-md">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          
          {/* Logo 區域 */}
          <Link href="/" className="flex items-center group shrink-0">
            <img 
              src="/images/dilliz_horizontal_logo_transparent_1c4515c8.png" 
              alt="DilliZ Capital Trust Limited" 
              className="h-9 md:h-10 w-auto transition-transform duration-500 group-hover:scale-105 object-contain"
            />
          </Link>

          {/* 桌面端導航選單 (導向獨立路由) */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item, idx) => {
              const isActive = location === item.path;
              return (
                <Link 
                  key={idx} 
                  href={item.path}
                  className={`text-xs font-bold tracking-[0.15em] uppercase relative py-2 ${
                    isActive 
                      ? "text-metal-gold" 
                      : "text-slate-300 nav-link-luxury"
                  }`}
                >
                  {item.name}
                  {isActive && (
                    <span className="absolute bottom-[-4px] left-0 w-full h-[1.5px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent shadow-gold-glow animate-fadeIn" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* 右側：語言切換與預約按鈕 */}
          <div className="hidden lg:flex items-center gap-6">
            
            {/* 語言切換按鈕 */}
            <div className="flex items-center bg-[#1a1a1a] border border-white/10 rounded-full p-1">
              <button 
                onClick={() => handleLangChange("zh")}
                className={`px-2.5 py-1.5 rounded-full text-[10px] font-bold tracking-wider transition-all ${
                  lang === "zh" 
                    ? "bg-metal-gold text-[#1a1a1a] shadow-gold-glow" 
                    : "text-slate-400 hover:text-slate-200"
                }`}
              >
                繁
              </button>
              <button 
                onClick={() => handleLangChange("cn")}
                className={`px-2.5 py-1.5 rounded-full text-[10px] font-bold tracking-wider transition-all ${
                  lang === "cn" 
                    ? "bg-metal-gold text-[#1a1a1a] shadow-gold-glow" 
                    : "text-slate-400 hover:text-slate-200"
                }`}
              >
                简
              </button>
              <button 
                onClick={() => handleLangChange("en")}
                className={`px-2.5 py-1.5 rounded-full text-[10px] font-bold tracking-wider transition-all ${
                  lang === "en" 
                    ? "bg-metal-gold text-[#1a1a1a] shadow-gold-glow" 
                    : "text-slate-400 hover:text-slate-200"
                }`}
              >
                EN
              </button>
            </div>

            {/* 暫時不需要通知中心 (Notification Center temporarily disabled for clean design) */}
            {/* <NotificationCenter lang={lang} /> */}

            {/* 預約專屬諮詢 (btn-gold 流光與光暈) */}
            <Link 
              href="/contact" 
              className="btn-gold shadow-gold-glow py-3 px-6 font-bold text-xs tracking-widest uppercase inline-flex items-center gap-2"
            >
              {t("nav.book", lang)} <ArrowRight size={14} />
            </Link>

            {/* 登入按鈕 (Login Icon Link) */}
            <a 
              href="https://www.dilliz.io/login" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:text-metal-gold hover:border-metal-gold/40 hover:bg-metal-gold/5 transition-all duration-300 group"
              title={t("inline.layout.1", lang)}
            >
              <User size={18} className="group-hover:scale-110 transition-transform" />
            </a>

          </div>

          {/* 行動端選單開關 */}
          <div className="flex items-center gap-4 lg:hidden">
            {/* 語言切換 */}
            <button 
              onClick={toggleLang}
              className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-slate-300 text-xs font-bold"
            >
              {t("inline.layout.2", lang)}
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
          <div className="lg:hidden bg-[#2b2b2b] border-b border-white/5 px-6 py-8 space-y-6 animate-fadeIn">
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

            {/* 行動端登入按鈕 */}
            <a 
              href="https://www.dilliz.io/login" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full border border-white/10 bg-white/5 text-slate-300 hover:text-metal-gold hover:border-metal-gold/40 text-center py-4 font-bold text-xs tracking-widest uppercase flex items-center justify-center gap-2 rounded-xl transition-all"
            >
              <User size={16} />
              {t("inline.layout.3", lang)}
            </a>
          </div>
        )}
      </header>

      {/* 頁面主體內容 - key forces full re-render when content.json loads */}
      <div className="grow" key={translationsReady ? "loaded" : "loading"}>
        {children}
      </div>

      {/* 官方頁尾 (Footer) */}
      <footer className="bg-[#141414] text-slate-500 py-12 border-t border-white/5 text-xs shrink-0">
        {/* Risk Disclosure Banner */}
        <div className="max-w-7xl mx-auto px-6 mb-8">
          <div className="border border-amber-700/30 bg-amber-950/20 rounded-lg px-5 py-3">
            <p className="text-[11px] md:text-xs text-amber-200/80 font-light leading-relaxed">
              {t("inline.layout.risk_disclosure", lang)}
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* 左側：版權與聲明 */}
          <div className="space-y-3 text-center md:text-left">
            <p className="font-semibold text-slate-400">
              &copy; 2026 DILLIZ CAPITAL TRUST LIMITED. All Rights Reserved.
            </p>
            
            {/* T&C 與 Privacy Policy 連結 */}
            <div className="flex flex-wrap justify-center md:justify-start gap-x-4 gap-y-2 text-xs font-medium text-metal-gold/80">
              <Link href="/terms" className="hover:text-metal-gold transition-colors underline underline-offset-4 decoration-metal-gold/30">
                {t("inline.layout.4", lang)}
              </Link>
              <span className="text-slate-700 hidden sm:inline">|</span>
              <Link href="/privacy" className="hover:text-metal-gold transition-colors underline underline-offset-4 decoration-metal-gold/30">
                {t("inline.layout.5", lang)}
              </Link>
              <span className="text-slate-700 hidden sm:inline">|</span>
              <Link href="/legislation" className="hover:text-metal-gold transition-colors underline underline-offset-4 decoration-metal-gold/30">
                {lang === "en" ? "Legislation" : lang === "cn" ? "法规" : "法規"}
              </Link>
              <span className="text-slate-700 hidden sm:inline">|</span>
              <Link href="/disclaimer" className="hover:text-metal-gold transition-colors underline underline-offset-4 decoration-metal-gold/30">
                {lang === "en" ? "Disclaimer & Risk" : lang === "cn" ? "免责声明" : "免責聲明"}
              </Link>
            </div>

            <p className="max-w-2xl font-light text-slate-600 leading-relaxed text-justify-custom break-words text-[11px] md:text-xs">
              {t("inline.layout.6", lang)}
            </p>
          </div>

          {/* 右側：Logo */}
          <div className="shrink-0">
            <Link href="/">
              <img 
                src="/images/dilliz_new_logo_transparent_a0c86cf6.png" 
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


// 尊貴通知中心組件
interface NotificationItem {
  id: string;
  titleZh: string;
  titleEn: string;
  descZh: string;
  descEn: string;
  timeZh: string;
  timeEn: string;
  read: boolean;
}

function NotificationCenter({ lang }: { lang: "zh" | "en" | "cn" }) {
  const [isOpen, setIsOpen] = useState(false);
  const [notifications, setNotifications] = useState<NotificationItem[]>([
    {
      id: "n1",
      titleZh: "🔔 歡迎蒞臨帝力斯資本信託",
      titleEn: "🔔 Welcome to DILLIZ Capital Trust",
      descZh: "您的專屬瑞士私人銀行級別財富託管管家已上線。我們將竭誠為您的家族財富與跨代傳承保駕護航。",
      descEn: "Your private banking-grade wealth custodian is now active. We are dedicated to safeguarding your legacy.",
      timeZh: "剛剛",
      timeEn: "Just now",
      read: false
    },
    {
      id: "n2",
      titleZh: "📈 限時尊享：美金固定收益年化 5.2%",
      titleEn: "📈 Limited Offer: 5.2% USD Fixed Income Trust",
      descZh: "即日起至本季度末，帝力斯會員尊享限時固定收益特惠年化收益率。請即聯絡您的專屬客戶經理預約設立。",
      descEn: "Exclusive yield for DILLIZ members until end of quarter. Contact your dedicated manager to subscribe.",
      timeZh: "2小時前",
      timeEn: "2 hours ago",
      read: false
    },
    {
      id: "n3",
      titleZh: "⚖️ 合規公告：打擊洗錢 (AML) 條例對接完成",
      titleEn: "⚖️ Compliance: AML Cap. 615 Alignment",
      descZh: "合規升級：本公司已全面完成香港打擊洗錢及恐怖分子資金籌集條例（第 615 章）最新合規系統升級，確保資產絕對合法隱密。",
      descEn: "Dilliz Trust has successfully aligned with HK Cap. 615 AML Ordinance, ensuring maximum security and legality.",
      timeZh: "1天前",
      timeEn: "1 day ago",
      read: false
    }
  ]);

  const unreadCount = notifications.filter(n => !n.read).length;

  const markAllAsRead = () => {
    setNotifications(notifications.map(n => ({ ...n, read: true })));
  };

  const markAsRead = (id: string) => {
    setNotifications(notifications.map(n => n.id === id ? { ...n, read: true } : n));
  };

  const deleteNotification = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setNotifications(notifications.filter(n => n.id !== id));
  };

  // 點擊外部自動關閉下拉選單
  useEffect(() => {
    if (!isOpen) return;
    const handleOutsideClick = () => setIsOpen(false);
    document.addEventListener("click", handleOutsideClick);
    return () => document.removeEventListener("click", handleOutsideClick);
  }, [isOpen]);

  return (
    <div className="relative" onClick={(e) => e.stopPropagation()}>
      
      {/* 鈴鐺按鈕 */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:text-metal-gold hover:border-metal-gold/40 transition-all duration-300 relative"
      >
        <Bell size={18} className={unreadCount > 0 ? "animate-swing" : ""} />
        {unreadCount > 0 && (
          <span className="absolute top-2 right-2 w-2.5 h-2.5 bg-red-500 rounded-full border border-[#2b2b2b] shadow-gold-glow animate-pulse" />
        )}
      </button>

      {/* 下拉選單 (玻璃態) */}
      {isOpen && (
        <div className="absolute right-0 mt-3 w-80 md:w-96 bg-[#2b2b2b]/95 backdrop-blur-xl border border-metal-gold/30 rounded-2xl shadow-gold-glow overflow-hidden z-50 animate-fadeIn">
          
          {/* 頭部 */}
          <div className="px-5 py-4 border-b border-white/10 flex items-center justify-between bg-[#1a1a1a]/80">
            <span className="text-xs font-bold tracking-wider text-slate-200 font-serif">
              {t("inline.layout.7", lang)} ({unreadCount})
            </span>
            {unreadCount > 0 && (
              <button
                onClick={markAllAsRead}
                className="text-[10px] font-bold tracking-wider text-metal-gold hover:underline uppercase"
              >
                {t("inline.layout.8", lang)}
              </button>
            )}
          </div>

          {/* 通知列表 */}
          <div className="max-h-[350px] overflow-y-auto divide-y divide-white/5">
            {notifications.length === 0 ? (
              <div className="py-12 text-center space-y-3">
                <CheckCircle2 size={32} className="text-metal-gold/30 mx-auto" />
                <p className="text-xs text-slate-500 font-light">
                  {t("inline.layout.9", lang)}
                </p>
              </div>
            ) : (
              notifications.map((n) => (
                <div
                  key={n.id}
                  onClick={() => markAsRead(n.id)}
                  className={`p-5 transition-all duration-300 hover:bg-white/5 cursor-pointer relative ${
                    !n.read ? "bg-metal-gold/5" : ""
                  }`}
                >
                  {/* 未讀藍點 */}
                  {!n.read && (
                    <span className="absolute top-6 left-2 w-1.5 h-1.5 bg-metal-gold rounded-full" />
                  )}

                  <div className="space-y-2 pl-2">
                    <div className="flex items-start justify-between gap-4">
                      <h4 className={`text-xs font-bold font-serif ${!n.read ? "text-metal-gold" : "text-slate-300"}`}>
                        {lang === "zh" ? n.titleZh : lang === "cn" ? n.titleZh.replace(/託/g, '托').replace(/劃/g, '划').replace(/開/g, '开').replace(/戶/g, '户').replace(/資/g, '资').replace(/產/g, '产').replace(/權/g, '权').replace(/益/g, '益').replace(/實/g, '实').replace(/時/g, '时').replace(/監/g, '监').replace(/控/g, '控').replace(/審/g, '审').replace(/核/g, '核').replace(/認/g, '认').replace(/證/g, '证').replace(/會/g, '会').replace(/員/g, '员').replace(/專/g, '专').replace(/屬/g, '属').replace(/諮/g, '咨').replace(/詢/g, '询').replace(/發/g, '发').replace(/送/g, '送').replace(/成/g, '成').replace(/功/g, '功') : n.titleEn}
                      </h4>
                      <button
                        onClick={(e) => deleteNotification(n.id, e)}
                        className="text-slate-600 hover:text-red-400 transition-colors shrink-0"
                      >
                        <Trash2 size={12} />
                      </button>
                    </div>
                    <p className="text-[11px] text-slate-400 font-light leading-relaxed">
                      {lang === "zh" ? n.descZh : lang === "cn" ? n.descZh.replace(/託/g, '托').replace(/劃/g, '划').replace(/開/g, '开').replace(/戶/g, '户').replace(/資/g, '资').replace(/產/g, '产').replace(/權/g, '权').replace(/益/g, '益').replace(/實/g, '实').replace(/時/g, '时').replace(/監/g, '监').replace(/控/g, '控').replace(/審/g, '审').replace(/核/g, '核').replace(/認/g, '认').replace(/證/g, '证').replace(/會/g, '会').replace(/員/g, '员').replace(/專/g, '专').replace(/屬/g, '属').replace(/諮/g, '咨').replace(/詢/g, '询').replace(/發/g, '发').replace(/送/g, '送').replace(/成/g, '成').replace(/功/g, '功') : n.descEn}
                    </p>
                    <span className="text-[9px] text-slate-500 block font-semibold">
                      {lang === "zh" ? n.timeZh : lang === "cn" ? n.timeZh.replace(/分/g, '分').replace(/鐘/g, '钟').replace(/前/g, '前').replace(/天/g, '天').replace(/小/g, '小').replace(/時/g, '时') : n.timeEn}
                    </span>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* 腳部 */}
          <div className="px-5 py-3 border-t border-white/5 bg-[#1a1a1a]/50 text-center">
            <span className="text-[9px] text-slate-500 font-semibold tracking-wider uppercase">
              {t("inline.layout.10", lang)}
            </span>
          </div>

        </div>
      )}
    </div>
  );
}
