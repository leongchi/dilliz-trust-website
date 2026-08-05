import { useState, useEffect } from "react";
import { Link } from "wouter";
import { 
  Shield, 
  CreditCard, 
  Coins, 
  Briefcase, 
  FileText, 
  User,
  Heart, 
  TrendingUp, 
  Check, 
  ArrowRight, 
  Award,
  Sparkles,
  Star,
  Landmark,
  Compass,
  Receipt
} from "lucide-react";
import Layout from "@/components/Layout";
import { ProgressiveImage } from "@/components/ProgressiveImage";
import ScrollReveal from "@/components/ScrollReveal";
import { t } from "@/lib/translations";

export default function Home() {
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

  return (
    <Layout>
      
      {/* Hero 視覺核心板塊 (皇家深藍與香港天際線背景) */}
      <section className="relative min-h-[calc(100vh-80px)] flex items-center justify-center py-20 overflow-hidden">
        
        {/* 高清真實香港天際線背景圖片 (帶有極致奢華的深藍色漸層遮罩) */}
        <div className="absolute inset-0 z-0">
          <ProgressiveImage 
            src="/images/hero_banner.jpg?v=2" 
            alt="DILLIZ Hong Kong Skyline" 
            aspectRatio="aspect-none"
            containerClassName="w-full h-full"
            className="w-full h-full object-cover opacity-35"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1a1a1a] via-[#1a1a1a]/90 to-[#2b2b2b]/75 z-10" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] via-transparent to-transparent" />
        </div>

        {/* 奢華金屬光暈與拉絲紋理裝飾 */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-metal-gold/5 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-metal-gold/5 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* 左側：核心文案 */}
          <div className="lg:col-span-7 text-left">
            <ScrollReveal className="space-y-8">
              {/* 大標題 */}
              <div className="space-y-4">
                {lang === "zh" || lang === "cn" ? (
                  <div className="space-y-2 py-2">
                    <h1 className="text-4xl md:text-6xl font-medium tracking-widest text-metal-gold font-kaiti leading-tight">
                      因為您，才值得擁有
                    </h1>
                  </div>
                ) : (
                  <>
                    <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold tracking-wide text-metal-gold font-serif leading-tight break-words">
                      Build A Trust with DILLIZ
                    </h1>
                    <p className="text-base sm:text-lg md:text-2xl font-bold tracking-[0.15em] text-slate-300 uppercase font-serif leading-relaxed break-words">
                      Shape The Future YOU Deserve
                    </p>
                  </>
                )}
              </div>

              {/* 描述 */}
              <p className="text-slate-300 font-light text-sm md:text-base leading-relaxed max-w-2xl">
                {t("hero.desc", lang)}
              </p>

              {/* 行動按鈕 (btn-gold 與光暈) */}
              <div className="flex flex-wrap gap-4 pt-4">
                <Link 
                  href="/services" 
                  className="btn-gold shadow-gold-glow py-4 px-8 font-bold text-xs tracking-widest uppercase inline-flex items-center gap-2"
                >
                  {t("hero.btn.explore", lang)} <ArrowRight size={14} />
                </Link>
                <Link 
                  href="/about" 
                  className="bg-white/5 border border-white/10 text-slate-300 hover:text-white py-4 px-8 font-bold text-xs tracking-widest uppercase transition-all duration-300 hover:bg-white/10 hover:border-white/20 hover:-translate-y-[1px] hover:scale-[1.015] active:scale-[0.98] will-change-transform"
                >
                  {t("hero.btn.about", lang)}
                </Link>
              </div>
            </ScrollReveal>
          </div>

          {/* 右側：品牌立體徽章與視覺點綴 */}
          <div className="lg:col-span-5 hidden lg:flex justify-center relative">
            {/* 3D 空間背景高光 */}
            <div className="absolute -inset-4 bg-metal-gold/5 rounded-full blur-3xl" />
            
            <ScrollReveal delay={200} className="relative w-80 h-80 flex items-center justify-center">
              
              {/* 1. 金色漣漪擴散層 (Expanding Aura Waves) - 獨立於本體之外，無限向外溫和擴散，不影響本體穩定性 */}
              <div className="absolute inset-0 rounded-full border border-metal-gold/30 animate-gold-ripple pointer-events-none" />
              <div className="absolute inset-4 rounded-full border border-metal-gold/10 animate-gold-ripple pointer-events-none [animation-delay:2s]" />

              {/* 2. 徽章本體容器 (3D Ambient Floating Badge) */}
              <div className="relative w-80 h-80 rounded-full border border-metal-gold/25 flex items-center justify-center p-8 bg-[#2b2b2b]/40 backdrop-blur-md shadow-gold-glow animate-ambient-float overflow-hidden">
                
                {/* 3. 金屬拉絲流光掠影層 (Sweep Shimmer Effect) - 在徽章本體表面定時橫掃，極具立體拉絲金屬質感 */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent w-[50%] h-full -skew-x-[25deg] animate-gold-sheen pointer-events-none" />
                
                <img 
                  src="/images/dilliz_new_logo_transparent_a0c86cf6.png" 
                  alt="DILLIZ Badge" 
                  className="w-48 h-auto object-contain opacity-85 relative z-10 filter drop-shadow-[0_4px_12px_rgba(149,133,110,0.3)]"
                />
              </div>

            </ScrollReveal>
          </div>

        </div>

      </section>

      {/* 「關於我們」精簡導覽 */}
      <section className="py-24 bg-[#1a1a1a] border-t border-white/5 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* 左側：真實高清圖片 + 奢華 Logo 疊加 */}
          <div className="lg:col-span-5 relative group cursor-pointer">
            {/* 金色光暈漸變底層 */}
            <div className="absolute inset-0 bg-gradient-to-tr from-metal-gold/20 to-transparent rounded-3xl opacity-50 z-10 transition-opacity duration-700 group-hover:opacity-70" />
            <div className="absolute -inset-1 bg-gradient-to-r from-metal-gold/30 to-white/5 rounded-[26px] blur-md opacity-75 transition-all duration-700 group-hover:from-metal-gold/40 group-hover:blur-lg" />
            
            {/* 內層浮起主體容器 - 500ms 貝氏曲線緩動 */}
            <div className="relative rounded-3xl overflow-hidden border border-white/10 aspect-[4/3] md:aspect-[16/10] lg:aspect-[4/5] shadow-gold-glow transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] transform group-hover:-translate-y-1.5 group-hover:scale-[1.01] group-hover:shadow-[0_30px_60px_-15px_rgba(149,133,110,0.4),0_0_25px_4px_rgba(149,133,110,0.25)]">
              
              {/* 背景辦公室大圖 */}
              <ProgressiveImage 
                src="/images/luxury_office_2c65c509.jpg?v=2" 
                alt="DILLIZ Luxury Office" 
                aspectRatio="aspect-none"
                containerClassName="w-full h-full"
                className="w-full h-full object-cover transition-transform duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.02]"
              />
              
              {/* 疊加的 Shield Logo 容器 - 帶有 3D 視差聯動 (比背景多浮起 1px，微幅放大，觸發更強陰影) */}
              <div className="absolute inset-0 flex items-center justify-center z-20 bg-[#1a1a1a]/40 backdrop-blur-[2px] transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] transform group-hover:-translate-y-1 group-hover:scale-[1.03]">
                <img 
                  src="/images/dilliz_new_logo_transparent_a0c86cf6.png" 
                  alt="DILLIZ Shield" 
                  className="w-28 md:w-36 h-auto object-contain drop-shadow-2xl filter transition-all duration-700 group-hover:drop-shadow-[0_15px_25px_rgba(149,133,110,0.5)]"
                />
              </div>
            </div>
          </div>

          {/* 右側：品牌故事導覽 */}
          <div className="lg:col-span-7 space-y-6">
            <ScrollReveal className="space-y-6">
              <span className="text-xs font-bold tracking-[0.2em] text-metal-gold uppercase block">Brand Story</span>
              <h2 className="text-3xl md:text-4xl font-bold text-metal-gold font-serif">
                {t("inline.home.0", lang)}
              </h2>
              <p className="text-slate-300 font-light leading-relaxed">
                {t("inline.home.1", lang)}
              </p>
            </ScrollReveal>

            {/* 使命、理念、定位三大指標 (Staggered 漸顯) */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
              <ScrollReveal delay={100} className="bg-white/5 border border-white/10 p-5 rounded-xl space-y-2 text-center flex flex-col items-center justify-center min-h-[140px]">
                <h4 className="text-xs font-bold text-slate-200 font-serif" style={{fontSize: '16px'}}>{t("stats.mission", lang)}</h4>
                <p className="text-[11px] text-slate-400 font-light leading-relaxed whitespace-pre-line" style={{fontSize: '15px'}}>{t("stats.mission.desc", lang)}</p>
              </ScrollReveal>
              <ScrollReveal delay={200} className="bg-white/5 border border-white/10 p-5 rounded-xl space-y-2 text-center flex flex-col items-center justify-center min-h-[140px]">
                <h4 className="text-xs font-bold text-slate-200 font-serif" style={{fontSize: '16px'}}>{t("stats.philosophy", lang)}</h4>
                <p className="text-[11px] text-slate-400 font-light leading-relaxed whitespace-pre-line" style={{fontSize: '15px'}}>{t("stats.philosophy.desc", lang)}</p>
              </ScrollReveal>
              <ScrollReveal delay={300} className="bg-white/5 border border-white/10 p-5 rounded-xl space-y-2 text-center flex flex-col items-center justify-center min-h-[140px]">
                <h4 className="text-xs font-bold text-slate-200 font-serif" style={{fontSize: '16px'}}>{t("stats.positioning", lang)}</h4>
                <p className="text-[11px] text-slate-400 font-light leading-relaxed whitespace-pre-line" style={{fontSize: '15px'}}>{t("stats.positioning.desc", lang)}</p>
              </ScrollReveal>
            </div>

            <ScrollReveal delay={200} className="pt-6">
              <Link href="/about" className="btn-gold shadow-gold-glow py-3.5 px-8 font-bold text-xs tracking-widest uppercase inline-flex items-center gap-2">
                {t("inline.home.2", lang)} <ArrowRight size={14} />
              </Link>
            </ScrollReveal>
          </div>

        </div>
      </section>

      {/* 「核心服務」精簡導覽 */}
      <section className="py-24 bg-[#2b2b2b] border-t border-b border-white/5 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 space-y-16">
          
          {/* 標題 */}
          <ScrollReveal className="text-center max-w-3xl mx-auto space-y-4">
            <span className="text-xs font-bold tracking-[0.2em] text-metal-gold uppercase block">Core Solutions</span>
            <h2 className="text-3xl md:text-4xl font-bold text-metal-gold font-serif">
              {t("services.title", lang)}
            </h2>
            <p className="text-slate-300 font-light leading-relaxed text-sm">
              {t("services.subtitle", lang)}
            </p>
          </ScrollReveal>

          {/* 5 大服務卡片網格 (Staggered 漸顯) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            
            {[
              { id: "asset", name: t("services.tab.asset", lang), icon: Shield, desc: t("inline.home.3", lang) },
              { id: "trust", name: t("services.tab.trust", lang), icon: Compass, desc: t("inline.home.4", lang) },
              { id: "deposit", name: t("services.tab.deposit", lang), icon: Landmark, desc: t("inline.home.5", lang) },
              { id: "finance", name: t("services.tab.finance", lang), icon: CreditCard, desc: t("inline.home.6", lang) },
              { id: "card", name: t("services.tab.card", lang), icon: Receipt, desc: t("inline.home.7", lang) }
            ].map((srv, idx) => {
              const IconComp = srv.icon;
              // 計算 stagger 延遲
              const delayVal = ((idx + 1) * 100) as 100 | 200 | 300 | 400 | 500;
              return (
                <ScrollReveal 
                  key={idx}
                  delay={delayVal}
                  className="flex group/card" // 外層固定觸發區
                >
                  <Link 
                    href={`/services#${srv.id}`}
                    onClick={() => {
                      if (window.location.pathname === "/services") {
                        window.location.hash = srv.id;
                        window.dispatchEvent(new HashChangeEvent("hashchange"));
                      }
                    }}
                    className="bg-white/5 border border-white/10 p-6 rounded-2xl flex flex-col justify-between hover:border-metal-gold/40 hover:shadow-gold-glow transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] transform group-hover/card:-translate-y-2 group cursor-pointer text-center w-full" // 改為 text-center 實現文字置中
                  >
                    <div className="space-y-4 flex flex-col items-center"> {/* 加上 items-center 確保子元素置中 */}
                      <div className="w-10 h-10 rounded-lg bg-metal-gold/10 border border-metal-gold/20 flex items-center justify-center text-metal-gold group-hover:bg-metal-gold group-hover:text-[#1a1a1a] transition-all mx-auto"> {/* 加上 mx-auto 確保 Icon 置中 */}
                        <IconComp size={20} />
                      </div>
                      <h4 className="text-sm font-bold text-slate-200 font-serif group-hover:text-metal-gold transition-colors w-full" style={{fontSize: '16px'}}>
                        {srv.name}
                      </h4>
                      <p className="text-[11px] text-slate-400 font-light leading-relaxed w-full" style={{fontSize: '15px'}}>
                        {srv.desc}
                      </p>
                    </div>
                    <div className="pt-4 flex items-center justify-center gap-1.5 text-xs text-metal-gold/70 group-hover:text-metal-gold font-semibold transition-colors mt-auto"> {/* 加上 justify-center 確保按鈕置中 */}
                      {t("inline.home.8", lang)} <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                    </div>
                  </Link>
                </ScrollReveal>
              );
            })}

          </div>

          <ScrollReveal className="text-center pt-4">
            <Link href="/services" className="btn-gold shadow-gold-glow py-3.5 px-8 font-bold text-xs tracking-widest uppercase inline-flex items-center gap-2">
              {t("inline.home.9", lang)} <ArrowRight size={14} />
            </Link>
          </ScrollReveal>

        </div>
      </section>

      {/* 「真實案例」與「會員計劃」聯合導覽 */}
      <section className="py-24 bg-[#1a1a1a] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
          
          {/* 左側：真實案例導覽卡片 */}
          <ScrollReveal delay={100} className="flex group/card">
            <div className="bg-white/5 border border-white/10 p-8 md:p-10 rounded-3xl flex flex-col justify-between hover:border-metal-gold/30 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] transform group-hover/card:-translate-y-2 relative overflow-hidden w-full">
              <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-metal-gold" />
              
              <div className="space-y-6">
                <span className="text-xs font-bold tracking-[0.2em] text-metal-gold uppercase block">Interactive Case Studies</span>
                <h3 className="text-2xl md:text-3xl font-bold text-slate-200 font-serif leading-tight">
                  {t("inline.home.10", lang)}
                </h3>
                <p className="text-slate-300 font-light text-sm leading-relaxed">
                  {t("inline.home.11", lang)}
                </p>


              </div>

              <div className="pt-8 mt-8 border-t border-white/5">
                <Link href="/cases" className="btn-gold shadow-gold-glow py-3 px-6 font-bold text-xs tracking-widest uppercase inline-flex items-center gap-2 w-full justify-center">
                  {t("inline.home.12", lang)} <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </ScrollReveal>

          {/* 右側：會員計劃導覽卡片 */}
          <ScrollReveal delay={200} className="flex group/card">
            <div className="bg-white/5 border border-white/10 p-8 md:p-10 rounded-3xl flex flex-col justify-between hover:border-metal-gold/30 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] transform group-hover/card:-translate-y-2 relative overflow-hidden w-full">
              <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-metal-gold" />
              
              <div className="space-y-6">
                <span className="text-xs font-bold tracking-[0.2em] text-metal-gold uppercase block">Exclusive Tiers</span>
                <h3 className="text-2xl md:text-3xl font-bold text-slate-200 font-serif leading-tight">
                  {t("inline.home.13", lang)}
                </h3>
                <p className="text-slate-300 font-light text-sm leading-relaxed">
                  {t("inline.home.14", lang)}
                </p>

                {/* 會員權益對照簡介 */}
                <div className="grid grid-cols-2 gap-4 text-xs font-medium pt-2">
                  <div className="flex items-center gap-2 text-slate-300">
                    <Check size={14} className="text-metal-gold" />
                    <span>{t("inline.home.15", lang)}</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-300">
                    <Check size={14} className="text-metal-gold" />
                    <span>{t("inline.home.16", lang)}</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-300">
                    <Check size={14} className="text-metal-gold" />
                    <span>{t("inline.home.17", lang)}</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-300">
                    <Check size={14} className="text-metal-gold" />
                    <span>{t("inline.home.18", lang)}</span>
                  </div>
                </div>
              </div>

              <div className="pt-8 mt-8 border-t border-white/5">
                <Link href="/membership" className="btn-gold shadow-gold-glow py-3 px-6 font-bold text-xs tracking-widest uppercase inline-flex items-center gap-2 w-full justify-center">
                  {t("inline.home.19", lang)} <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </ScrollReveal>

        </div>
      </section>

      {/* 聯絡諮詢與知識庫 CTA 板塊 */}
      <section className="py-20 bg-[#2b2b2b] border-t border-white/5 text-center relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-metal-gold/5 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="max-w-3xl mx-auto px-6 relative z-10">
          <ScrollReveal className="space-y-8">
            <span className="text-xs font-bold tracking-[0.25em] text-metal-gold uppercase block">Start Your Legacy</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white font-serif leading-tight">
              {t("inline.home.20", lang)}
            </h2>
            <p className="text-slate-300 font-light text-sm md:text-base leading-relaxed max-w-2xl mx-auto whitespace-pre-line">
              {t("inline.home.21", lang)}
            </p>

            <div className="flex flex-wrap justify-center gap-4 pt-4">
              <Link 
                href="/contact" 
                className="btn-gold shadow-gold-glow py-4 px-10 font-bold text-xs tracking-widest uppercase inline-flex items-center gap-2"
              >
                {t("inline.home.22", lang)} <ArrowRight size={14} />
              </Link>
              <Link 
                href="/faq" 
                className="bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-white py-4 px-10 font-bold text-xs tracking-widest uppercase rounded-lg transition-all"
              >
                {t("inline.home.23", lang)}
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

    </Layout>
  );
}
