import { useState, useEffect } from "react";
import { User, Shield, Briefcase, Landmark, Heart, Compass, Check, ArrowRight, Star } from "lucide-react";
import Layout from "@/components/Layout";
import { t } from "@/lib/translations";

export default function Cases() {
  const [lang, setLang] = useState<"zh" | "en" | "cn">("zh");
  const [activeCaseIdx, setActiveCaseIdx] = useState(0);
  const [rotationAngle, setRotationAngle] = useState(0);

  // 統一的切換函數，確保指針永遠「順走」或以最短路徑優雅旋轉
  const handleCaseChange = (targetIdx: number) => {
    setActiveCaseIdx(targetIdx);
    
    // 計算當前角度與目標角度的差值，確保指針以順滑、前進的方式旋轉
    const currentNormalized = ((rotationAngle % 360) + 360) % 360;
    const targetAngle = targetIdx * 60;
    
    let diff = targetAngle - currentNormalized;
    // 調整 diff，使其在 [-180, 180] 區間內，保證旋轉路徑最短
    if (diff > 180) {
      diff -= 360;
    } else if (diff < -180) {
      diff += 360;
    }
    
    // 如果是自動輪播的下一個 (例如從 5 到 0)，我們強制讓它繼續順時針前進 (+60度)
    if (targetIdx === 0 && activeCaseIdx === 5) {
      setRotationAngle(rotationAngle + 60);
    } else {
      setRotationAngle(rotationAngle + diff);
    }
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

  // 實裝 8 秒高奢自動輪播計時器 (當用戶手動點擊時，計時器會自動重置重新計時)
  useEffect(() => {
    const intervalId = setInterval(() => {
      const nextIdx = (activeCaseIdx + 1) % 6;
      handleCaseChange(nextIdx);
    }, 8000);

    return () => clearInterval(intervalId);
  }, [activeCaseIdx, rotationAngle]);

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
              {t("inline.cases.0", lang)}
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
                {t("inline.cases.1", lang)}
              </span>
              <span className="inline-block w-2 h-2 rounded-full bg-metal-gold animate-ping" />
            </div>
          </div>

          {/* 360度環狀互動版面網格 */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center pt-8">
            
            {/* 左側：360度環狀互動圓盤 (佔 5 格) */}
            <div className="lg:col-span-5 flex justify-center items-center relative w-full max-w-[340px] md:max-w-[420px] aspect-square mx-auto">
              
              {/* 移除頂部創業小箭頭，保持乾淨大氣 */}

              {/* 中心圓圈 (代表高淨值客戶個人 - 尊貴客戶 / YOU) */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-28 h-28 md:w-32 md:h-32 rounded-full bg-[#1a1a1a] border-4 border-metal-gold shadow-gold-glow flex flex-col items-center justify-center z-30">
                <div className="w-12 h-12 rounded-full bg-metal-gold/10 flex items-center justify-center text-metal-gold mb-1">
                  <User size={24} className="text-metal-gold" />
                </div>
                <span className="text-[10px] md:text-xs font-bold text-metal-gold tracking-widest uppercase font-serif">
                  {t("inline.cases.2", lang)}
                </span>
                <span className="text-[8px] text-metal-gold font-bold">DILLIZ</span>
              </div>

              {/* 背景虛線裝飾圓環 */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[84%] h-[84%] rounded-full border-2 border-dashed border-metal-gold/30 z-0" />
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[56%] h-[56%] rounded-full border border-dashed border-metal-gold/20 z-0" />

              {/* 高奢雷達指針 (升級為順時針「順走」的精緻 SVG 金屬 Arrow 箭頭) */}
              <div 
                className="absolute inset-0 pointer-events-none z-10 transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]"
                style={{ transform: `rotate(${rotationAngle}deg)` }}
              >
                <svg className="w-full h-full" viewBox="0 0 400 400">
                  <defs>
                    {/* 金屬拉絲金漸變 */}
                    <linearGradient id="gold-arrow-grad" x1="0%" y1="100%" x2="0%" y2="0%">
                      <stop offset="0%" stopColor="#bfae95" />
                      <stop offset="50%" stopColor="#D4AF37" />
                      <stop offset="100%" stopColor="#FFF" />
                    </linearGradient>
                    {/* 柔和發光濾鏡 */}
                    <filter id="gold-glow" x="-20%" y="-20%" width="140%" height="140%">
                      <feGaussianBlur stdDeviation="6" result="blur" />
                      <feComposite in="SourceGraphic" in2="blur" operator="over" />
                    </filter>
                  </defs>

                  {/* 1. 金色指針主線條 */}
                  <line
                    x1="200"
                    y1="200"
                    x2="200"
                    y2="55"
                    stroke="url(#gold-arrow-grad)"
                    strokeWidth="3"
                    strokeLinecap="round"
                    filter="url(#gold-glow)"
                  />

                  {/* 2. 精緻的 Arrow 金屬箭頭 (指向節點) */}
                  <path
                    d="M190 62 L200 32 L210 62 L200 52 Z"
                    fill="url(#gold-arrow-grad)"
                    filter="url(#gold-glow)"
                    className="animate-pulse"
                  />

                  {/* 3. 箭頭頂部的微型脈衝亮點 */}
                  <circle
                    cx="200"
                    cy="32"
                    r="3.5"
                    fill="#FFF"
                    className="animate-ping"
                    style={{ animationDuration: '2s' }}
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
                    onClick={() => handleCaseChange(idx)}
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
                    {t("inline.cases.3", lang)}
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
