import { useState, useEffect } from "react";
import { User, Shield, Briefcase, Landmark, Heart, Compass, Check, ArrowRight, Star } from "lucide-react";
import Layout from "@/components/Layout";
import { t } from "@/lib/translations";

export default function Cases() {
  const [lang, setLang] = useState<"zh" | "en" | "cn">("zh");
  const [activeCaseIdx, setActiveCaseIdx] = useState(0);

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

  const cases = [
    {
      badge: t("cases.c1.badge", lang),
      title: t("cases.c1.title", lang),
      desc: t("cases.c1.desc", lang),
      icon: Briefcase,
      solutions: [
        t("cases.c1.sol1", lang),
        t("cases.c1.sol2", lang)
      ],
      result: t("cases.c1.res", lang)
    },
    {
      badge: t("cases.c2.badge", lang),
      title: t("cases.c2.title", lang),
      desc: t("cases.c2.desc", lang),
      icon: Shield,
      solutions: [
        t("cases.c2.sol1", lang),
        t("cases.c2.sol2", lang)
      ],
      result: t("cases.c2.res", lang)
    },
    {
      badge: t("cases.c3.badge", lang),
      title: t("cases.c3.title", lang),
      desc: t("cases.c3.desc", lang),
      icon: Landmark,
      solutions: [
        t("cases.c3.sol1", lang),
        t("cases.c3.sol2", lang)
      ],
      result: t("cases.c3.res", lang)
    },
    {
      badge: t("cases.c4.badge", lang),
      title: t("cases.c4.title", lang),
      desc: t("cases.c4.desc", lang),
      icon: Compass,
      solutions: [
        t("cases.c4.sol1", lang),
        t("cases.c4.sol2", lang),
        t("cases.c4.sol3", lang)
      ],
      result: t("cases.c4.res", lang)
    },
    {
      badge: t("cases.c5.badge", lang),
      title: t("cases.c5.title", lang),
      desc: t("cases.c5.desc", lang),
      icon: Heart,
      solutions: [
        t("cases.c5.sol1", lang),
        t("cases.c5.sol2", lang),
        t("cases.c5.sol3", lang)
      ],
      result: t("cases.c5.res", lang)
    },
    {
      badge: t("cases.c6.badge", lang),
      title: t("cases.c6.title", lang),
      desc: t("cases.c6.desc", lang),
      icon: Star,
      solutions: [
        t("cases.c6.sol1", lang),
        t("cases.c6.sol2", lang),
        t("cases.c6.sol3", lang)
      ],
      result: t("cases.c6.res", lang)
    }
  ];

  return (
    <Layout>
      <div className="py-20 bg-[#1a1a1a] relative overflow-hidden">
        
        {/* 背景裝飾 */}
        <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-metal-gold/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 space-y-20">
          
          {/* 頁面標題 */}
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="text-xs font-bold tracking-[0.25em] text-metal-gold uppercase block">Case Studies</span>
            <h1 className="text-4xl md:text-5xl font-bold text-metal-gold font-serif leading-tight">
              {lang === "zh" ? "真實情境個案分析" : lang === "cn" ? "真实情境个案分析" : "Real Case Studies"}
            </h1>
            <p className="text-slate-300 font-light leading-relaxed">
              {t("cases.subtitle", lang)}
            </p>
          </div>

          {/* 全局高奢指引橫幅 (位於標題與圓盤之間，極其醒目且永不重疊) */}
          <div className="flex justify-center pt-2">
            <div className="bg-metal-gold/10 border border-metal-gold/30 px-6 py-2.5 rounded-full shadow-[0_0_20px_rgba(212,175,55,0.15)] flex items-center gap-3 animate-pulse">
              <span className="inline-block w-2 h-2 rounded-full bg-metal-gold animate-ping" />
              <span className="text-[13px] md:text-base font-bold text-metal-gold tracking-[0.18em]">
                {lang === "zh" ? "👈 點擊左側 360° 環狀節點即可切換真實信託案例 👉" : lang === "cn" ? "👈 点击左侧 360° 环状节点即可切换真实信托案例 👉" : "👈 CLICK THE 360° NODES ON THE LEFT TO EXPLORE REAL CASES 👉"}
              </span>
              <span className="inline-block w-2 h-2 rounded-full bg-metal-gold animate-ping" />
            </div>
          </div>

          {/* 360度環狀互動版面網格 */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center pt-8">
            
            {/* 左側：360度環狀互動圓盤 (佔 5 格) */}
            <div className="lg:col-span-5 flex justify-center items-center relative w-full max-w-[340px] md:max-w-[420px] aspect-square mx-auto">
              
              {/* 頂部動態指引小箭頭 (僅作視覺呼應，精緻而不重疊) */}
              <div className="absolute top-[-25px] left-1/2 -translate-x-1/2 z-40 flex flex-col items-center">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#D4AF37" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="animate-bounce">
                  <path d="M12 5v14M19 12l-7 7-7-7" />
                </svg>
              </div>

              {/* 中心圓圈 (代表高淨值客戶個人 - 尊貴客戶 / YOU) */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-28 h-28 md:w-32 md:h-32 rounded-full bg-[#1a1a1a] border-4 border-metal-gold shadow-gold-glow flex flex-col items-center justify-center z-30">
                <div className="w-12 h-12 rounded-full bg-metal-gold/10 flex items-center justify-center text-metal-gold mb-1">
                  <User size={24} className="text-metal-gold" />
                </div>
                <span className="text-[10px] md:text-xs font-bold text-metal-gold tracking-widest uppercase font-serif">
                  {lang === "zh" ? "尊貴客戶" : lang === "cn" ? "尊贵客户" : "YOU"}
                </span>
                <span className="text-[8px] text-metal-gold font-bold">DILLIZ</span>
              </div>

              {/* 背景虛線裝飾圓環 */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[84%] h-[84%] rounded-full border-2 border-dashed border-metal-gold/30 z-0" />
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[56%] h-[56%] rounded-full border border-dashed border-metal-gold/20 z-0" />

              {/* 高奢雷達指針 (單線旋轉，平滑過渡) */}
              <div 
                className="absolute inset-0 pointer-events-none z-10 transition-transform duration-500 ease-out"
                style={{ transform: `rotate(${activeCaseIdx * 60}deg)` }}
              >
                <svg className="w-full h-full">
                  <line
                    x1="50%"
                    y1="50%"
                    x2="50%"
                    y2="8%"
                    stroke="#D4AF37"
                    strokeWidth="2.5"
                    className="shadow-gold-glow"
                  />
                  <circle
                    cx="50%"
                    cy="8%"
                    r="4"
                    fill="#D4AF37"
                    className="animate-pulse"
                  />
                </svg>
              </div>

              {/* 6 個環繞情境圓圈按鈕 */}
              {cases.map((c, idx) => {
                const angle = (idx * 60 * Math.PI) / 180 - Math.PI / 2;
                const radius = 42;
                const x = `calc(50% + ${Math.cos(angle) * radius}%)`;
                const y = `calc(50% + ${Math.sin(angle) * radius}%)`;

                const IconComponent = c.icon;
                const isActive = activeCaseIdx === idx;

                return (
                  <button
                    key={idx}
                    onClick={() => setActiveCaseIdx(idx)}
                    style={{ left: x, top: y }}
                    className={`absolute -translate-x-1/2 -translate-y-1/2 w-14 h-14 md:w-16 md:h-16 rounded-full flex flex-col items-center justify-center transition-all duration-300 shadow-md group z-20 border cursor-pointer ${
                      isActive 
                        ? "bg-[#2b2b2b] text-metal-gold border-metal-gold scale-125 shadow-gold-glow ring-4 ring-metal-gold/20" 
                        : "bg-[#2b2b2b] text-slate-200 border-metal-gold/40 hover:border-metal-gold hover:scale-110 hover:shadow-gold-glow hover:bg-[#333] shadow-[0_0_15px_rgba(212,175,55,0.15)]"
                    }`}
                    title={c.badge}
                  >
                    {/* 呼吸光暈底層 (僅非 active 時顯示，吸引點擊) */}
                    {!isActive && (
                      <div className="absolute inset-0 rounded-full border border-metal-gold/50 animate-ping opacity-30 pointer-events-none" />
                    )}
                    
                    <IconComponent size={20} className={isActive ? "text-metal-gold" : "text-metal-gold/80 group-hover:text-metal-gold"} />
                    
                    {/* 智能定位的獨立文字層，放置在圓形按鈕外部，根據角度動態計算 top 偏移量以避免重疊 */}
                    <div 
                      className="absolute left-1/2 -translate-x-1/2 w-36 text-center pointer-events-none"
                      style={{ 
                        // idx 為 0 (最頂部) 時往下移一點；idx 為 3 (最底部) 時往更下方移以防重疊；其他側邊節點維持標準偏移
                        top: idx === 0 ? "120%" : idx === 3 ? "125%" : "118%" 
                      }}
                    >
                      <span className={`text-[12px] md:text-[14px] font-bold tracking-widest block leading-snug whitespace-pre-line drop-shadow-md transition-colors ${
                        isActive 
                          ? "text-metal-gold drop-shadow-[0_0_10px_rgba(212,175,55,0.8)] scale-105" 
                          : "text-slate-200 group-hover:text-metal-gold"
                      }`}>
                        {c.badge}
                      </span>
                    </div>
                  </button>
                );
              })}

            </div>

            {/* 右側詳情面板 */}
            <div className="lg:col-span-7">
              <div className="bg-white/5 backdrop-blur border border-white/10 p-8 md:p-10 shadow-gold-glow relative min-h-[450px] flex flex-col justify-between transition-all duration-500 animate-fadeIn rounded-2xl">
                
                <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-metal-gold" />
                <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-metal-gold" />

                <div className="space-y-6">
                  
                  {/* 頂部徽章與標題 */}
                  <div className="space-y-3">
                    <span className="inline-block bg-[#2b2b2b] text-metal-gold border border-metal-gold/30 text-xs font-bold tracking-widest uppercase px-3 py-1">
                      {cases[activeCaseIdx].badge}
                    </span>
                    <h3 className="text-2xl font-bold text-slate-200 font-serif leading-tight">
                      {cases[activeCaseIdx].title}
                    </h3>
                  </div>



                  {/* 1. 面臨挑戰 */}
                  <div className="space-y-2">
                    <h4 className="text-xs font-bold tracking-wider text-slate-400 uppercase flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
                      {t("cases.label.challenge", lang)}
                    </h4>
                    <p className="text-slate-300 text-sm leading-relaxed font-light">
                      {cases[activeCaseIdx].desc}
                    </p>
                  </div>

                  {/* 2. 建議方案 */}
                  <div className="space-y-3">
                    <h4 className="text-xs font-bold tracking-wider text-slate-400 uppercase flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-metal-gold" />
                      {t("cases.label.solution", lang)}
                    </h4>
                    <div className="grid grid-cols-1 gap-2.5">
                      {cases[activeCaseIdx].solutions.map((sol, sIdx) => (
                        <div key={sIdx} className="flex items-start gap-2.5">
                          <div className="w-4 h-4 rounded-full bg-metal-gold/10 flex items-center justify-center text-metal-gold mt-0.5 shrink-0">
                            <Check size={10} className="text-metal-gold" />
                          </div>
                          <span className="text-slate-300 text-sm font-medium">{sol}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* 3. 規劃結果 */}
                  <div className="bg-white/5 border-l-4 border-metal-gold p-4 rounded-r-lg space-y-1">
                    <h4 className="text-xs font-bold tracking-wider text-metal-gold uppercase">
                      {t("cases.label.result", lang)}
                    </h4>
                    <p className="text-slate-200 text-sm font-semibold leading-relaxed">
                      {cases[activeCaseIdx].result}
                    </p>
                  </div>

                </div>

                {/* 底部行動按鈕 */}
                <div className="pt-6 border-t border-white/10 mt-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <span className="text-[10px] text-slate-400 font-light">
                    {lang === "zh" ? "*以上案例均為真實情境化改編，已隱去客戶私密資訊" : lang === "cn" ? "*以上案例均为真实情境化改编，已隐去客户私密信息" : "*Cases adapted from real scenarios, private info redacted"}
                  </span>
                  <a href="/contact" className="btn-gold text-center py-2.5 px-6 font-semibold text-xs tracking-wider inline-flex items-center justify-center gap-2">
                    {t("nav.book", lang)} <ArrowRight size={14} />
                  </a>
                </div>

              </div>
            </div>

          </div>

        </div>

      </div>
    </Layout>
  );
}
