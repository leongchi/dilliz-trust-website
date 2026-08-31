import { useState, useEffect } from "react";
import { Star, Shield, Award, Sparkles, Check, ArrowRight } from "lucide-react";
import Layout from "@/components/Layout";
import { t } from "@/lib/translations";

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
      <div className="py-20 bg-[#1a1a1a] relative overflow-hidden">
        
        {/* 背景裝飾 */}
        <div className="absolute top-0 left-1/3 w-[500px] h-[500px] bg-metal-gold/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 space-y-20">
          
          {/* 頁面標題 */}
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="text-xs font-bold tracking-[0.25em] text-metal-gold uppercase block">Membership Plans</span>
            <h1 className="text-4xl md:text-5xl font-bold text-metal-gold font-serif leading-tight">
              {t("membership.title", lang)}
            </h1>
            <p className="text-slate-300 font-light leading-relaxed whitespace-pre-line">
              {t("membership.subtitle", lang)}
            </p>
          </div>

          {/* 四大級別卡片對照 */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 items-stretch">
            {tiers.map((tier, idx) => {
              const IconComponent = tier.icon;
              return (
                <div
                  key={idx}
                  className={`bg-white/5 backdrop-blur border rounded-3xl p-8 flex flex-col justify-between shadow-md transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] transform relative ${
                    tier.isPopular 
                      ? "border-metal-gold/60 shadow-gold-glow scale-[1.03] z-10 hover:scale-[1.06] hover:-translate-y-2.5 hover:border-metal-gold hover:shadow-[0_25px_60px_-10px_rgba(149,133,110,0.45),0_0_30px_6px_rgba(149,133,110,0.35)]" 
                      : "border-white/10 hover:scale-[1.03] hover:-translate-y-2 hover:border-metal-gold/50 hover:shadow-gold-glow hover:z-10"
                  }`}
                >
                  {/* 熱門徽章 */}
                  {tier.isPopular && (
                    <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-metal-gold text-[#2b2b2b] text-[10px] font-extrabold tracking-widest uppercase px-4 py-1 rounded-full shadow-md">
                      {t("inline.membership.17", lang)}
                    </span>
                  )}

                  <div className="space-y-6">
                    
                    {/* 級別頭部 */}
                    <div className="flex items-center justify-between">
                      <h3 className="text-xl font-bold text-slate-200 font-serif">{tier.name}</h3>
                      <div className={`w-10 h-10 rounded-lg flex items-center justify-center border ${
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
                        <span className={`${tier.id === "t4" ? "text-base" : "text-xl"} font-bold text-metal-gold font-serif leading-snug block`}>
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
                    <div className="space-y-4 text-xs font-medium">

                      <div className="flex justify-between items-center gap-3 py-1 border-b border-white/5">
                        <span className="text-slate-500 leading-snug">{t("membership.linkedcard", lang)}</span>
                        <span className="text-slate-200 text-right leading-snug max-w-[52%]">{tier.linkedcard}</span>
                      </div>
                      
                      <div className="flex justify-between items-center gap-3 py-1 border-b border-white/5">
                        <span className="text-slate-500 leading-snug">{t("membership.offshore", lang)}</span>
                        <span className="text-slate-200 text-right leading-snug max-w-[52%]">{tier.offshore}</span>
                      </div>

                      <div className="flex justify-between items-center gap-3 py-1 border-b border-white/5">
                        <span className="text-slate-500 leading-snug">{t("membership.billpay", lang)}</span>
                        <span className="text-slate-200 text-right leading-snug max-w-[52%]">{tier.billpay}</span>
                      </div>

                      <div className="flex justify-between items-center gap-3 py-1 border-b border-white/5">
                        <span className="text-slate-500 leading-snug">{t("membership.customerservice", lang)}</span>
                        <span className="text-slate-200 text-right leading-snug max-w-[52%]">{tier.service}</span>
                      </div>

                    </div>

                    <hr className="border-white/10" />

                    {/* 特色亮點 */}
                    <div className="space-y-3 min-h-[222px]">
                      <span className="text-[10px] text-slate-500 font-bold tracking-wider uppercase block">
                        {t("inline.membership.18", lang)}
                      </span>
                      <div className="space-y-2.5">
                        {tier.features.map((feat, fIdx) => (
                          <div key={fIdx} className="flex items-start gap-2 text-[11px] md:text-xs">
                            <Check size={14} className="text-metal-gold mt-0.5 shrink-0" />
                            <span className="text-slate-300 font-light leading-relaxed break-words">{feat}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                  </div>

                  {/* 立即申請按鈕 */}
                  <div className="pt-8 mt-8 border-t border-white/10">
                    <a
                      href="/contact"
                      className={`w-full py-3 text-center font-bold text-xs tracking-widest uppercase block border transition-all duration-300 ${
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
              * {t("membership.brochure.note", lang)}
            </p>
            <p className="text-xs text-slate-500 font-light italic">
              * {t("membership.brochure.term", lang)}
            </p>
          </div>

        </div>

      </div>
    </Layout>
  );
}
