import { useState, useEffect } from "react";
import { Shield, Target, Eye, Compass, Award, Building, Sparkles, FileText, Download } from "lucide-react";
import Layout from "@/components/Layout";
import { Link } from "wouter";
import { ProgressiveImage } from "@/components/ProgressiveImage";
import { t } from "@/lib/translations";
import { brochures, brochureSectionCopy } from "@/lib/brochureContent";

// Design philosophy: Swiss private-banking restraint — the brochure area reads as an editorial document index, using precise rules and restrained champagne-gold accents rather than generic download cards.

export default function About() {
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

  const orderedBrochures = lang === "en"
    ? [brochures[1], brochures[0]]
    : [brochures[0], brochures[1]];

  return (
    <Layout>
      <div className="py-20 bg-[#1a1a1a] relative overflow-hidden">
        
        {/* 背景裝飾 */}
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-metal-gold/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 space-y-24">
          
          {/* 頁面標題 */}
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="text-xs font-bold tracking-[0.25em] text-metal-gold uppercase block">About DILLIZ</span>
            <h1 className="text-4xl md:text-5xl font-bold text-metal-gold font-serif leading-tight">
              {t("inline.about.0", lang)}
            </h1>
            <p className="text-slate-300 font-light leading-relaxed">
              {t("inline.about.1", lang)}
            </p>
          </div>

          {/* 品牌核心介紹：圖文雙欄 */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            
            {/* 左側：真實高清圖片 + 奢華 Logo 疊加 */}
            <div className="lg:col-span-5 relative group">
              <div className="absolute inset-0 bg-gradient-to-tr from-metal-gold/20 to-transparent rounded-3xl opacity-50 group-hover:opacity-75 transition-opacity duration-500 z-10" />
              <div className="absolute -inset-1 bg-gradient-to-r from-metal-gold/30 to-white/5 rounded-[26px] blur-md opacity-75 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative rounded-3xl overflow-hidden border border-white/10 aspect-[4/5] shadow-gold-glow group">
                <ProgressiveImage 
                  src="/images/luxury_office_2c65c509.jpg?v=2" 
                  alt="DILLIZ Luxury Office" 
                  aspectRatio="aspect-[4/5]"
                  containerClassName="w-full h-full"
                  className="transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* 浮動徽章 */}
                <div className="absolute bottom-8 left-8 right-8 bg-[#2b2b2b]/90 backdrop-blur-md border border-metal-gold/30 p-6 rounded-2xl flex items-center gap-4 z-20 shadow-lg">
                  <div className="w-12 h-12 rounded-full bg-metal-gold/10 border border-metal-gold/30 flex items-center justify-center text-metal-gold shrink-0">
                    <Award size={24} />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-100 font-serif">
                      {t("inline.about.2", lang)}
                    </h4>
                    <p className="text-[10px] text-metal-gold font-bold tracking-wider mt-0.5">
                      LICENSE NO. TC010540
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* 右側：品牌理念與使命 */}
            <div className="lg:col-span-7 space-y-8">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-slate-200 font-serif">
                  {t("inline.about.3", lang)}
                </h3>
                <p className="text-slate-300 font-light leading-relaxed">
                  {t("inline.about.4", lang)}
                </p>
                <p className="text-slate-300 font-light leading-relaxed">
                  {t("inline.about.5", lang)}
                </p>
              </div>

              {/* 三大支柱卡片 */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                
                {/* 使命 */}
                <div className="bg-white/5 border border-white/10 p-6 rounded-2xl space-y-3 shadow-sm hover:border-metal-gold/30 transition-all duration-300 text-center flex flex-col items-center justify-center min-h-[180px]">
                  <div className="w-10 h-10 rounded-lg bg-metal-gold/10 border border-metal-gold/20 flex items-center justify-center text-metal-gold">
                    <Target size={20} />
                  </div>
                  <h4 className="text-sm font-bold text-slate-200 font-serif">{t("stats.mission", lang)}</h4>
                  <p className="text-xs text-slate-400 font-light leading-relaxed whitespace-pre-line">
                    {t("stats.mission.desc", lang)}
                  </p>
                </div>

                {/* 理念 */}
                <div className="bg-white/5 border border-white/10 p-6 rounded-2xl space-y-3 shadow-sm hover:border-metal-gold/30 transition-all duration-300 text-center flex flex-col items-center justify-center min-h-[180px]">
                  <div className="w-10 h-10 rounded-lg bg-metal-gold/10 border border-metal-gold/20 flex items-center justify-center text-metal-gold">
                    <Compass size={20} />
                  </div>
                  <h4 className="text-sm font-bold text-slate-200 font-serif">{t("stats.philosophy", lang)}</h4>
                  <p className="text-xs text-slate-400 font-light leading-relaxed whitespace-pre-line">
                    {t("stats.philosophy.desc", lang)}
                  </p>
                </div>

                {/* 定位 */}
                <div className="bg-white/5 border border-white/10 p-6 rounded-2xl space-y-3 shadow-sm hover:border-metal-gold/30 transition-all duration-300 text-center flex flex-col items-center justify-center min-h-[180px]">
                  <div className="w-10 h-10 rounded-lg bg-metal-gold/10 border border-metal-gold/20 flex items-center justify-center text-metal-gold">
                    <Eye size={20} />
                  </div>
                  <h4 className="text-sm font-bold text-slate-200 font-serif">{t("stats.positioning", lang)}</h4>
                  <p className="text-xs text-slate-400 font-light leading-relaxed whitespace-pre-line">
                    {t("stats.positioning.desc", lang)}
                  </p>
                </div>

              </div>
            </div>

          </div>

          {/* 公司小冊子下載：公司介紹後的編輯式文件索引 */}
          <section aria-labelledby="brochure-download-title" className="border-y border-metal-gold/20 bg-[#171a1e]/80">
            <div className="grid grid-cols-1 lg:grid-cols-12">
              <div className="border-b border-metal-gold/15 px-7 py-10 sm:px-10 lg:col-span-4 lg:border-b-0 lg:border-r lg:py-12">
                <span className="text-[10px] font-bold tracking-[0.24em] text-metal-gold uppercase">
                  {brochureSectionCopy.eyebrow[lang]}
                </span>
                <h2 id="brochure-download-title" className="mt-4 font-serif text-2xl font-bold leading-tight text-slate-100 md:text-3xl">
                  {brochureSectionCopy.title[lang]}
                </h2>
                <p className="mt-4 text-sm font-light leading-7 text-slate-400">
                  {brochureSectionCopy.description[lang]}
                </p>
                <p className="mt-6 text-[10px] tracking-[0.12em] text-slate-600 uppercase">
                  {brochureSectionCopy.opensNewTab[lang]}
                </p>
              </div>

              <div className="lg:col-span-8">
                {orderedBrochures.map((brochure, index) => (
                  <article
                    key={brochure.id}
                    className={`grid grid-cols-[56px_1fr] gap-x-4 px-7 py-8 sm:grid-cols-[72px_1fr_auto] sm:items-center sm:px-10 ${index > 0 ? "border-t border-white/10" : ""}`}
                  >
                    <div className="row-span-2 flex h-14 w-14 items-center justify-center border border-metal-gold/35 font-serif text-base font-bold text-metal-gold sm:h-16 sm:w-16">
                      {brochure.marker}
                    </div>
                    <div className="min-w-0">
                      <p className="text-[9px] font-bold tracking-[0.18em] text-metal-gold uppercase">
                        {brochure.language[lang]}
                      </p>
                      <h3 className="mt-2 font-serif text-lg font-bold leading-snug text-slate-100 sm:text-xl">
                        {brochure.title[lang]}
                      </h3>
                      <p className="mt-2 text-[10px] tracking-[0.08em] text-slate-500 uppercase">
                        {brochure.meta[lang]}
                      </p>
                    </div>
                    <a
                      href={brochure.href}
                      download={brochure.downloadName}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${brochureSectionCopy.download[lang]} — ${brochure.title[lang]}`}
                      className="col-span-2 mt-6 inline-flex min-h-12 items-center justify-center gap-3 border border-metal-gold/45 px-6 text-[10px] font-bold tracking-[0.16em] text-metal-gold uppercase transition-colors hover:bg-metal-gold hover:text-[#17191c] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-metal-gold sm:col-span-1 sm:mt-0"
                    >
                      <FileText size={15} aria-hidden="true" />
                      {brochureSectionCopy.download[lang]}
                      <Download size={14} aria-hidden="true" />
                    </a>
                  </article>
                ))}
              </div>
            </div>
          </section>

          {/* 核心競爭優勢板塊 */}
          <div className="bg-[#2b2b2b] border border-metal-gold/20 rounded-3xl p-10 md:p-12 shadow-gold-glow space-y-10">
            <div className="text-center max-w-2xl mx-auto space-y-3">
            <h3 className="text-2xl md:text-3xl font-bold text-metal-gold font-serif">
              {t("inline.about.6", lang)}
            </h3>
            <p className="text-xs md:text-sm text-slate-300 font-light">
              {t("inline.about.7", lang)}
            </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
              
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-full bg-metal-gold/10 border border-metal-gold/30 flex items-center justify-center text-metal-gold mx-auto md:mx-0">
                  <Shield size={22} />
                </div>
                <h4 className="text-lg font-bold text-slate-200 font-serif">
                  {t("inline.about.8", lang)}
                </h4>
                <p className="text-xs text-slate-400 font-light leading-relaxed">
                  {t("inline.about.9", lang)}
                </p>
              </div>

              <div className="space-y-3">
                <div className="w-12 h-12 rounded-full bg-metal-gold/10 border border-metal-gold/30 flex items-center justify-center text-metal-gold mx-auto md:mx-0">
                  <Building size={22} />
                </div>
                <h4 className="text-lg font-bold text-slate-200 font-serif">
                  {t("inline.about.10", lang)}
                </h4>
                <p className="text-xs text-slate-400 font-light leading-relaxed">
                  {t("inline.about.11", lang)}
                </p>
              </div>

              <div className="space-y-3">
                <div className="w-12 h-12 rounded-full bg-metal-gold/10 border border-metal-gold/30 flex items-center justify-center text-metal-gold mx-auto md:mx-0">
                  <Sparkles size={22} />
                </div>
                <h4 className="text-lg font-bold text-slate-200 font-serif">
                  {t("inline.about.12", lang)}
                </h4>
                <p className="text-xs text-slate-400 font-light leading-relaxed">
                  {t("inline.about.13", lang)}
                </p>
              </div>

            </div>
          </div>

        </div>

      </div>
    </Layout>
  );
}
