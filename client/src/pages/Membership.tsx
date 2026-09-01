import { useState, useEffect } from "react";
import { Star, Shield, Award, Sparkles, Check, ArrowRight } from "lucide-react";
import Layout from "@/components/Layout";
import { t } from "@/lib/translations";

// Design philosophy: restrained private-banking luxury—micro-motion is subtle,
// champagne-gold emphasis is selective, and content stability takes priority.
export default function Membership() {
  const [lang, setLang] = useState<"zh" | "en" | "cn">("zh");

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

  const tiers = [
    {
      id: "t1",
      name: t("membership.t1.name", lang),
      icon: Star,
      threshold: t("membership.t1.threshold", lang),
      duration: t("membership.t1.duration", lang),
      linkedcard: t("membership.t1.linkedcard", lang),
      offshore: t("membership.t1.offshore", lang),
      billpay: t("membership.t1.billpay", lang),
      service: t("membership.t1.service", lang),
      features: [
        t("inline.membership.0", lang),
        t("inline.membership.1", lang),
        t("inline.membership.2", lang)
      ],
      isPopular: false
    },
    {
      id: "t2",
      name: t("membership.t2.name", lang),
      icon: Shield,
      threshold: t("membership.t2.threshold", lang),
      duration: t("membership.t2.duration", lang),
      linkedcard: t("membership.t2.linkedcard", lang),
      offshore: t("membership.t2.offshore", lang),
      billpay: t("membership.t2.billpay", lang),
      service: t("membership.t2.service", lang),
      features: [
        t("inline.membership.3", lang),
        t("inline.membership.4", lang),
        t("inline.membership.5", lang),
        t("inline.membership.6", lang)
      ],
      isPopular: false
    },
    {
      id: "t3",
      name: t("membership.t3.name", lang),
      icon: Award,
      threshold: t("membership.t3.threshold", lang),
      duration: t("membership.t3.duration", lang),
      linkedcard: t("membership.t3.linkedcard", lang),
      offshore: t("membership.t3.offshore", lang),
      billpay: t("membership.t3.billpay", lang),
      service: t("membership.t3.service", lang),
      features: [
        t("inline.membership.7", lang),
        t("inline.membership.8", lang),
        t("inline.membership.9", lang),
        t("inline.membership.10", lang),
        t("inline.membership.11", lang)
      ],
      isPopular: true
    },
    {
      id: "t4",
      name: t("membership.t4.name", lang),
      icon: Sparkles,
      threshold: t("membership.t4.threshold", lang),
      duration: t("membership.t4.duration", lang),
      linkedcard: t("membership.t4.linkedcard", lang),
      offshore: t("membership.t4.offshore", lang),
      billpay: t("membership.t4.billpay", lang),
      service: t("membership.t4.service", lang),
      features: [
        t("inline.membership.12", lang),
        t("inline.membership.13", lang),
        t("inline.membership.14", lang),
        t("inline.membership.15", lang),
        t("inline.membership.16", lang)
      ],
      isPopular: false
    }
  ];

  return (
    <Layout>
      <div className="py-12 md:py-20 bg-[#1a1a1a] relative overflow-hidden">
        
        {/* 背景裝飾 */}
        <div className="absolute top-0 left-1/3 w-[500px] h-[500px] bg-metal-gold/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-12 md:space-y-20">
          
          {/* 頁面標題 */}
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="text-xs font-bold tracking-[0.25em] text-metal-gold uppercase block">Membership Plans</span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-metal-gold font-serif leading-tight">
              {t("membership.title", lang)}
            </h1>
            <p className="text-slate-300 font-light leading-relaxed whitespace-pre-line">
              {t("membership.subtitle", lang)}
            </p>
          </div>

          {/* 四大級別卡片對照 */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 lg:gap-8 items-stretch">
            {tiers.map((tier, idx) => {
              const IconComponent = tier.icon;
              return (
                <div
                  key={idx}
                  className={`group bg-white/5 backdrop-blur border rounded-2xl sm:rounded-3xl p-5 sm:p-7 lg:p-8 flex flex-col justify-between shadow-md relative transform-gpu transition-[transform,border-color,box-shadow,background-color] duration-250 ease-[cubic-bezier(0.23,1,0.32,1)] motion-reduce:transform-none motion-reduce:transition-none focus-within:border-metal-gold/60 focus-within:shadow-gold-glow ${
                    tier.isPopular 
                      ? "border-metal-gold/60 shadow-gold-glow lg:scale-[1.03] z-10 lg:motion-safe:hover:scale-[1.04] lg:motion-safe:hover:-translate-y-2 hover:border-metal-gold/90 hover:bg-white/[0.065] hover:shadow-[0_24px_54px_-18px_rgba(149,133,110,0.58),0_0_26px_rgba(149,133,110,0.22)]" 
                      : "border-white/10 motion-safe:hover:scale-[1.012] motion-safe:hover:-translate-y-2 hover:border-metal-gold/45 hover:bg-white/[0.065] hover:shadow-[0_22px_48px_-20px_rgba(149,133,110,0.48),0_0_22px_rgba(149,133,110,0.14)] hover:z-10"
                  }`}
                >
                  <div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-metal-gold/80 to-transparent opacity-0 transition-opacity duration-250 group-hover:opacity-100 group-focus-within:opacity-100 motion-reduce:transition-none" />

                  {/* 熱門徽章 */}
                  {tier.isPopular && (
                    <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-metal-gold text-[#2b2b2b] text-[10px] font-extrabold tracking-widest uppercase px-4 py-1 rounded-full shadow-md">
                      {t("inline.membership.17", lang)}
                    </span>
                  )}

                  <div className="space-y-5 lg:space-y-6">
                    
                    {/* 級別頭部 */}
                    <div className="flex items-center justify-between">
                      <h3 className="text-xl font-bold text-slate-200 font-serif">{tier.name}</h3>
                      <div className={`w-10 h-10 rounded-lg flex items-center justify-center border transform-gpu transition-[transform,color,border-color,background-color,box-shadow] duration-250 ease-[cubic-bezier(0.23,1,0.32,1)] motion-safe:group-hover:-translate-y-0.5 motion-safe:group-hover:scale-105 group-hover:text-metal-gold group-hover:border-metal-gold/45 group-hover:bg-metal-gold/10 group-hover:shadow-[0_0_18px_rgba(149,133,110,0.16)] group-focus-within:text-metal-gold group-focus-within:border-metal-gold/45 group-focus-within:bg-metal-gold/10 motion-reduce:transform-none motion-reduce:transition-none ${
                        tier.isPopular 
                          ? "bg-metal-gold/10 border-metal-gold/30 text-metal-gold" 
                          : "bg-white/5 border-white/10 text-slate-400"
                      }`}>
                        <IconComponent size={20} />
                      </div>
                    </div>

                    <hr className="border-white/10" />

                    {/* 門檻與期限 */}
                    <div className="space-y-3">
                      <div>
                        <span className="text-[10px] text-slate-500 font-bold tracking-wider uppercase block">
                          {t("membership.threshold", lang)}
                        </span>
                        <span className={`${tier.id === "t4" ? "text-sm sm:text-base" : "text-lg sm:text-xl"} font-bold text-metal-gold font-serif leading-snug block text-pretty`}>
                          {tier.threshold}
                        </span>
                      </div>
                      <div>
                        <span className="text-[10px] text-slate-500 font-bold tracking-wider uppercase block">
                          {t("membership.duration", lang)}
                        </span>
                        <span className="text-sm font-semibold text-slate-300">
                          {tier.duration}
                        </span>
                      </div>
                    </div>

                    <hr className="border-white/10" />

                    {/* 細項特徵對照 */}
                    <div className="space-y-3.5 lg:space-y-4 text-[13px] lg:text-xs font-medium">

                      <div className="grid grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] items-start gap-4 py-1.5 border-b border-white/5">
                        <span className={`min-w-0 text-slate-400 lg:text-slate-500 leading-snug ${lang === "en" ? "uppercase tracking-wide" : ""}`}>{t("membership.linkedcard", lang)}</span>
                        <span className="min-w-0 text-slate-100 lg:text-slate-200 text-right leading-snug break-words">{tier.linkedcard}</span>
                      </div>
                      
                      <div className="grid grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] items-start gap-4 py-1.5 border-b border-white/5">
                        <span className={`min-w-0 text-slate-400 lg:text-slate-500 leading-snug ${lang === "en" ? "uppercase tracking-wide" : ""}`}>{t("membership.offshore", lang)}</span>
                        <span className="min-w-0 text-slate-100 lg:text-slate-200 text-right leading-snug break-words">{tier.offshore}</span>
                      </div>

                      <div className="grid grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] items-start gap-4 py-1.5 border-b border-white/5">
                        <span className={`min-w-0 text-slate-400 lg:text-slate-500 leading-snug ${lang === "en" ? "uppercase tracking-wide" : ""}`}>{t("membership.billpay", lang)}</span>
                        <span className="min-w-0 text-slate-100 lg:text-slate-200 text-right leading-snug break-words">{tier.billpay}</span>
                      </div>

                      <div className="grid grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] items-start gap-4 py-1.5 border-b border-white/5">
                        <span className={`min-w-0 text-slate-400 lg:text-slate-500 leading-snug ${lang === "en" ? "uppercase tracking-wide" : ""}`}>{t("membership.customerservice", lang)}</span>
                        <span className="min-w-0 text-slate-100 lg:text-slate-200 text-right leading-snug break-words">{tier.service}</span>
                      </div>

                    </div>

                    <hr className="border-white/10" />

                    {/* 特色亮點 */}
                    <div className="space-y-3 min-h-0 lg:min-h-[222px]">
                      <span className="text-[10px] text-slate-500 font-bold tracking-wider uppercase block">
                        {t("inline.membership.18", lang)}
                      </span>
                      <div className="space-y-2.5">
                        {tier.features.map((feat, fIdx) => (
                          <div key={fIdx} className="flex items-start gap-2.5 text-[13px] lg:text-xs">
                            <Check size={15} className="text-metal-gold mt-0.5 shrink-0" />
                            <span className="min-w-0 text-slate-200 lg:text-slate-300 font-light leading-relaxed break-words">{feat}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                  </div>

                  {/* 立即申請按鈕 */}
                  <div className="pt-5 mt-6 lg:pt-8 lg:mt-8 border-t border-white/10">
                    <a
                      href="/contact"
                      className={`w-full min-h-12 px-3 py-3 text-center font-bold text-xs tracking-widest uppercase flex items-center justify-center border transition-all duration-300 ${
                        tier.isPopular
                          ? "btn-gold shadow-gold-glow"
                          : "bg-white/5 border-white/10 text-slate-300 hover:border-metal-gold/50"
                      }`}
                    >
                      {t("membership.btn.select", lang)}
                    </a>
                  </div>

                </div>
              );
            })}
          </div>

          {/* 底部說明 */}
          <div className="text-center space-y-1">
            <p className="text-xs text-slate-500 font-light italic">
              * {t("membership.brochure.term", lang)}
            </p>
          </div>

        </div>

      </div>
    </Layout>
  );
}
