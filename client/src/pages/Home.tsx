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

    window.addEventListener("storage", handleLangChange);
    // 自訂事件以利同頁面即時切換
    window.addEventListener("dilliz_lang_changed", handleLangChange);

    return () => {
      window.removeEventListener("storage", handleLangChange);
      window.removeEventListener("dilliz_lang_changed", handleLangChange);
    };
  }, []);

  return (
    <Layout>
      {/* Hero Banner 視覺核心區塊 */}
      <section className="relative min-h-[90vh] flex items-center bg-[#2b2b2b] text-slate-100 overflow-hidden py-20">
        
        {/* 高清奢華無人像大圖背景 (帶有細緻的暗金漸層遮罩) */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/hero_banner.jpg" 
            alt="Dilliz Trust Luxury Background" 
            className="w-full h-full object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#2b2b2b] via-[#2b2b2b]/90 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#2b2b2b] via-transparent to-[#2b2b2b]/50" />
        </div>

        {/* 奢華金屬光暈與拉絲紋理裝飾 */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-metal-gold/5 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-metal-gold/5 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* 左側：核心文案 */}
          <div className="lg:col-span-7 text-left">
            <div className="space-y-8">
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
                    <h1 className="text-4xl md:text-6xl font-extrabold tracking-wide text-metal-gold font-serif leading-tight">
                      Build A Trust with DILLIZ
                    </h1>
                    <p className="text-lg md:text-2xl font-bold tracking-[0.15em] text-slate-300 uppercase font-serif">
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
                  className="bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-white py-4 px-8 font-bold text-xs tracking-widest uppercase rounded-lg transition-all"
                >
                  {t("hero.btn.about", lang)}
                </Link>
              </div>
            </div>
          </div>

          {/* 右側：品牌立體徽章與視覺點綴 */}
          <div className="lg:col-span-5 hidden lg:flex justify-center relative">
            <div className="absolute -inset-4 bg-metal-gold/5 rounded-full blur-3xl" />
            <div className="relative w-80 h-80 rounded-full border border-metal-gold/20 flex items-center justify-center p-8 bg-[#2b2b2b]/30 backdrop-blur-md shadow-gold-glow">
              <img 
                src="/images/dilliz_new_logo_transparent_a0c86cf6.png" 
                alt="DILLIZ Badge" 
                className="w-48 h-auto object-contain opacity-80"
              />
            </div>
          </div>

        </div>

      </section>

      {/* 「關於我們」精簡導覽 */}
      <section className="py-24 bg-[#2b2b2b] text-slate-100 relative">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* 左側：品牌立體徽章與高奢辦公室大圖 */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl aspect-[4/3] w-full group">
              <img 
                src="/images/luxury_office_2c65c509.jpg" 
                alt="DILLIZ Executive Office" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-[#2b2b2b]/80 via-transparent to-transparent" />
              
              {/* 品牌核心金色盾徽 (圓形磨砂疊加，呼應 6701392a 的奢華感) */}
              <div className="absolute -inset-1 bg-gradient-to-tr from-metal-gold/20 to-transparent rounded-3xl blur opacity-30 pointer-events-none" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-24 h-24 rounded-full border border-metal-gold/30 bg-[#2b2b2b]/40 backdrop-blur-[2px] flex items-center justify-center p-4 shadow-gold-glow">
                  <img 
                    src="/images/dilliz_new_logo_transparent_a0c86cf6.png" 
                    alt="DILLIZ Emblem" 
                    className="w-12 h-auto object-contain opacity-90"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* 右側：品牌故事與核心數據 */}
          <div className="lg:col-span-7 space-y-10 text-left">
            <div className="space-y-6">
              <span className="text-xs font-bold tracking-[0.25em] text-metal-gold uppercase block">Corporate Essence</span>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-200 font-serif leading-tight">
                {lang === "zh" ? "帝力斯資本信託有限公司" : lang === "cn" ? "帝力斯资本信托有限公司" : "Dilliz Capital Trust Limited"}
              </h2>
              <p className="text-slate-300 font-light text-sm md:text-base leading-relaxed">
                {lang === "zh" || lang === "cn"
                  ? "總部設於香港，是一家香港持牌信託服務公司。我們專注為客戶提供定制化信託解決方案，旨在成為您最值得信賴的信託公司。作為您財富傳承與資產保護的堅實後盾，我們始終秉持誠信、專業與私密的核心價值。"
                  : "Headquartered in Hong Kong, Dilliz Capital Trust Limited is a licensed trust company in Hong Kong. We focus on providing customized trust solutions, aiming to become your most trusted trust partner. As a solid backer of your wealth inheritance and asset protection, we always uphold the core values of integrity, professionalism, and confidentiality."}
              </p>
            </div>

            {/* 三大核心優勢指標 */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
              <div className="bg-white/5 border border-white/10 p-6 rounded-2xl relative overflow-hidden group hover:border-metal-gold/20 transition-all duration-300">
                <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-metal-gold opacity-50" />
                <h4 className="text-metal-gold font-serif text-lg font-bold mb-2">
                  {lang === "zh" ? "信託使命" : lang === "cn" ? "信托使命" : "Our Mission"}
                </h4>
                <p className="text-xs text-slate-400 font-light leading-relaxed">
                  {lang === "zh" || lang === "cn" ? "為您定制財富保障與家族傳承方案" : "Tailoring wealth protection and family legacy."}
                </p>
              </div>

              <div className="bg-white/5 border border-white/10 p-6 rounded-2xl relative overflow-hidden group hover:border-metal-gold/20 transition-all duration-300">
                <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-metal-gold opacity-50" />
                <h4 className="text-metal-gold font-serif text-lg font-bold mb-2">
                  {lang === "zh" ? "經營理念" : lang === "cn" ? "经营理念" : "Philosophy"}
                </h4>
                <p className="text-xs text-slate-400 font-light leading-relaxed">
                  {lang === "zh" || lang === "cn" ? "以誠信、專業、私密為核心價值" : "Upholding integrity, expertise, and privacy."}
                </p>
              </div>

              <div className="bg-white/5 border border-white/10 p-6 rounded-2xl relative overflow-hidden group hover:border-metal-gold/20 transition-all duration-300">
                <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-metal-gold opacity-50" />
                <h4 className="text-metal-gold font-serif text-lg font-bold mb-2">
                  {lang === "zh" ? "信託定位" : lang === "cn" ? "信托定位" : "Positioning"}
                </h4>
                <p className="text-xs text-slate-400 font-light leading-relaxed">
                  {lang === "zh" || lang === "cn" ? "旨在成為您最值得信賴的信託夥伴" : "Striving to be your most reliable trust partner."}
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 「我們的核心服務」精簡導覽 */}
      <section className="py-24 bg-[#232323] text-slate-100 relative">
        <div className="max-w-7xl mx-auto px-6 text-center space-y-16">
          
          <div className="space-y-4 max-w-3xl mx-auto">
            <span className="text-xs font-bold tracking-[0.25em] text-metal-gold uppercase block">Bespoke Solutions</span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-200 font-serif">
              {lang === "zh" ? "全方位客製化信託服務" : lang === "cn" ? "全方位客制化信托服务" : "Bespoke Trust Services"}
            </h2>
            <p className="text-slate-400 font-light text-sm md:text-base leading-relaxed">
              {lang === "zh" || lang === "cn"
                ? "我們為個人、家族及企業提供量身定制的信託架構，確保您的資產安全、稅務優化與世代傳承。"
                : "We provide tailored trust structures for individuals, families, and corporations to secure assets and optimize tax legacies."}
            </p>
          </div>

          {/* 5大服務卡片 */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 text-left">
            
            <div className="bg-white/5 border border-white/10 p-6 rounded-2xl hover:border-metal-gold/30 transition-all duration-300 flex flex-col justify-between h-64">
              <div className="space-y-4">
                <div className="w-10 h-10 rounded-xl bg-metal-gold/10 flex items-center justify-center text-metal-gold">
                  <Shield size={20} />
                </div>
                <h3 className="text-base font-bold text-slate-200 font-serif">
                  {lang === "zh" ? "資產保護信託" : lang === "cn" ? "资产保护信托" : "Asset Protection"}
                </h3>
                <p className="text-xs text-slate-400 font-light leading-relaxed">
                  {lang === "zh" || lang === "cn" ? "防範法律訴訟、債務追索等風險，實現資產隔離與安全。" : "Shielding wealth from litigation and creditor claims."}
                </p>
              </div>
              <Link href="/services" className="text-xs text-metal-gold hover:text-metal-gold/80 font-bold inline-flex items-center gap-1 mt-4">
                {lang === "zh" ? "瞭解更多" : lang === "cn" ? "了解更多" : "Learn More"} <ArrowRight size={12} />
              </Link>
            </div>

            <div className="bg-white/5 border border-white/10 p-6 rounded-2xl hover:border-metal-gold/30 transition-all duration-300 flex flex-col justify-between h-64">
              <div className="space-y-4">
                <div className="w-10 h-10 rounded-xl bg-metal-gold/10 flex items-center justify-center text-metal-gold">
                  <User size={20} />
                </div>
                <h3 className="text-base font-bold text-slate-200 font-serif">
                  {lang === "zh" ? "家族信託" : lang === "cn" ? "家族信托" : "Family Trust"}
                </h3>
                <p className="text-xs text-slate-400 font-light leading-relaxed">
                  {lang === "zh" || lang === "cn" ? "為家族資產進行長期規劃，實現平穩的跨代財富傳承。" : "Securing smooth wealth transfer across generations."}
                </p>
              </div>
              <Link href="/services" className="text-xs text-metal-gold hover:text-metal-gold/80 font-bold inline-flex items-center gap-1 mt-4">
                {lang === "zh" ? "瞭解更多" : lang === "cn" ? "了解更多" : "Learn More"} <ArrowRight size={12} />
              </Link>
            </div>

            <div className="bg-white/5 border border-white/10 p-6 rounded-2xl hover:border-metal-gold/30 transition-all duration-300 flex flex-col justify-between h-64">
              <div className="space-y-4">
                <div className="w-10 h-10 rounded-xl bg-metal-gold/10 flex items-center justify-center text-metal-gold">
                  <Briefcase size={20} />
                </div>
                <h3 className="text-base font-bold text-slate-200 font-serif">
                  {lang === "zh" ? "企業信託" : lang === "cn" ? "企业信托" : "Corporate Trust"}
                </h3>
                <p className="text-xs text-slate-400 font-light leading-relaxed">
                  {lang === "zh" || lang === "cn" ? "協助企業優化資產負債表，或設計員工激勵股權信託。" : "Optimizing corporate balance sheets and ESOP structures."}
                </p>
              </div>
              <Link href="/services" className="text-xs text-metal-gold hover:text-metal-gold/80 font-bold inline-flex items-center gap-1 mt-4">
                {lang === "zh" ? "瞭解更多" : lang === "cn" ? "了解更多" : "Learn More"} <ArrowRight size={12} />
              </Link>
            </div>

            <div className="bg-white/5 border border-white/10 p-6 rounded-2xl hover:border-metal-gold/30 transition-all duration-300 flex flex-col justify-between h-64">
              <div className="space-y-4">
                <div className="w-10 h-10 rounded-xl bg-metal-gold/10 flex items-center justify-center text-metal-gold">
                  <Coins size={20} />
                </div>
                <h3 className="text-base font-bold text-slate-200 font-serif">
                  {lang === "zh" ? "資產託管與代管" : lang === "cn" ? "资产托管与代管" : "Asset Custody"}
                </h3>
                <p className="text-xs text-slate-400 font-light leading-relaxed">
                  {lang === "zh" || lang === "cn" ? "提供安全、獨立、保密的第三方資產代管與交割服務。" : "Providing secure, independent third-party asset custody."}
                </p>
              </div>
              <Link href="/services" className="text-xs text-metal-gold hover:text-metal-gold/80 font-bold inline-flex items-center gap-1 mt-4">
                {lang === "zh" ? "瞭解更多" : lang === "cn" ? "了解更多" : "Learn More"} <ArrowRight size={12} />
              </Link>
            </div>

            <div className="bg-white/5 border border-white/10 p-6 rounded-2xl hover:border-metal-gold/30 transition-all duration-300 flex flex-col justify-between h-64">
              <div className="space-y-4">
                <div className="w-10 h-10 rounded-xl bg-metal-gold/10 flex items-center justify-center text-metal-gold">
                  <FileText size={20} />
                </div>
                <h3 className="text-base font-bold text-slate-200 font-serif">
                  {lang === "zh" ? "慈善信託" : lang === "cn" ? "慈善信托" : "Charitable Trust"}
                </h3>
                <p className="text-xs text-slate-400 font-light leading-relaxed">
                  {lang === "zh" || lang === "cn" ? "協助高淨值客戶成立慈善基金，傳遞家族社會責任。" : "Enabling high-net-worth clients to give back socially."}
                </p>
              </div>
              <Link href="/services" className="text-xs text-metal-gold hover:text-metal-gold/80 font-bold inline-flex items-center gap-1 mt-4">
                {lang === "zh" ? "瞭解更多" : lang === "cn" ? "了解更多" : "Learn More"} <ArrowRight size={12} />
              </Link>
            </div>

          </div>

        </div>
      </section>

      {/* 「真實案例」與「會員計劃」聯合導覽區塊 */}
      <section className="py-24 bg-[#2b2b2b] text-slate-100 relative">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* 左側：真實案例導覽卡片 */}
          <div className="flex">
            <div className="bg-white/5 border border-white/10 p-8 md:p-10 rounded-3xl flex flex-col justify-between hover:border-metal-gold/30 transition-all duration-300 relative overflow-hidden w-full">
              <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-metal-gold" />
              
              <div className="space-y-6">
                <span className="text-xs font-bold tracking-[0.2em] text-metal-gold uppercase block">Proven Legacy</span>
                <h3 className="text-2xl md:text-3xl font-bold text-slate-200 font-serif leading-tight">
                  {lang === "zh" ? "真實信託與保障案例" : lang === "cn" ? "真实信托与保障案例" : "Real Trust Case Studies"}
                </h3>
                <p className="text-slate-300 font-light text-sm leading-relaxed">
                  {lang === "zh" || lang === "cn"
                    ? "每一筆委託都是一份沈甸甸的責任。我們精選了涵蓋家族跨代傳承、跨境資產隔離、以及高風險債務防範的真實案例，展示我們如何以無懈可擊的法律架構保護您的心血。"
                    : "Every trust is a sacred responsibility. We select real-world case studies covering multi-generational inheritance, cross-border isolation, and debt protection to show our robust legal structures."}
                </p>

                {/* 真實案例精簡對照 */}
                <div className="space-y-3 pt-2">
                  <div className="flex items-start gap-3 bg-white/5 p-4 rounded-xl border border-white/5">
                    <Award size={18} className="text-metal-gold shrink-0 mt-0.5" />
                    <div>
                      <h5 className="text-xs font-bold text-slate-200">{lang === "zh" ? "某高科技企業家：資產完全隔離案例" : lang === "cn" ? "某高科技企业家：资产完全隔离案例" : "Tech Entrepreneur: Asset Isolation"}</h5>
                      <p className="text-[11px] text-slate-400 font-light mt-1">{lang === "zh" ? "信託金額 $5,000,000 USD，成功防範了跨境商業訴訟帶來的個人資產波及風險。" : lang === "cn" ? "信托金额 $5,000,000 USD，成功防范了跨境商业诉讼带来的个人资产波及风险。" : "Trust amount $5,000,000 USD, successfully isolated personal wealth from cross-border business lawsuits."}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 bg-white/5 p-4 rounded-xl border border-white/5">
                    <Star size={18} className="text-metal-gold shrink-0 mt-0.5" />
                    <div>
                      <h5 className="text-xs font-bold text-slate-200">{lang === "zh" ? "香港某傳統製造業家族：三代傳承案例" : lang === "cn" ? "香港某传统制造业家族：三代传承案例" : "Manufacturing Family: Multi-Gen Legacy"}</h5>
                      <p className="text-[11px] text-slate-400 font-light mt-1">{lang === "zh" ? "信託金額 $12,000,000 USD，設計了嚴格的家族憲章，實現了資產不分家、子孫按月支取生活費的平穩傳承。" : lang === "cn" ? "信托金额 $12,000,000 USD，设计了严格的家族宪章，实现了资产不分家、子孙按月支取生活费的平稳传承。" : "Trust amount $12,000,000 USD, structured a family charter to prevent split-ups while providing monthly payouts."}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-8">
                <Link href="/cases" className="btn-gold-outline py-3 px-6 text-xs font-bold tracking-widest uppercase inline-flex items-center gap-2">
                  {lang === "zh" ? "瀏覽所有案例" : lang === "cn" ? "浏览所有案例" : "View All Case Studies"} <ArrowRight size={12} />
                </Link>
              </div>
            </div>
          </div>

          {/* 右側：會員計劃導覽卡片 */}
          <div className="flex">
            <div className="bg-white/5 border border-white/10 p-8 md:p-10 rounded-3xl flex flex-col justify-between hover:border-metal-gold/30 transition-all duration-300 relative overflow-hidden w-full">
              <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-metal-gold" />
              
              <div className="space-y-6">
                <span className="text-xs font-bold tracking-[0.2em] text-metal-gold uppercase block">Exclusive Tiers</span>
                <h3 className="text-2xl md:text-3xl font-bold text-slate-200 font-serif leading-tight">
                  {lang === "zh" ? "專屬定存與信託會員計劃" : lang === "cn" ? "专属定存与信托会员计划" : "Exclusive Trust & Deposit Plans"}
                </h3>
                <p className="text-slate-300 font-light text-sm leading-relaxed">
                  {lang === "zh"
                    ? "因為您，才值得擁有。我們獨家推出基礎、標準、尊享、典藏四大定存與信託會員計劃，為不同資產規模的委託人提供極具競爭力的特惠收益與尊榮黑金卡權益。"
                    : lang === "cn"
                    ? "因為您，才值得擁有。我們獨家推出基礎、標準、尊享、典藏四大定存與信託會員計劃，為不同資產規模的委託人提供極具競爭力的特惠收益與尊榮黑金卡權益。"
                    : "Because of you, it's worth having. We launch four tiers of membership: Basic, Standard, Premium, and Royal, providing highly competitive yields and black card privileges."}
                </p>

                {/* 會員權益對照簡介 */}
                <div className="grid grid-cols-2 gap-4 text-xs font-medium pt-2">
                  <div className="flex items-center gap-2 text-slate-300">
                    <Check size={14} className="text-metal-gold" />
                    <span>{lang === "zh" ? "定存美金10,000起" : lang === "cn" ? "定存美金10,000起" : "$10,000+ USD Fixed Deposit"}</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-300">
                    <Check size={14} className="text-metal-gold" />
                    <span>{lang === "zh" ? "特惠收益高達 1.5% - 2.8%" : lang === "cn" ? "特惠收益高达 1.5% - 2.8%" : "Yields Up To 1.5% - 2.8%"}</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-300">
                    <Check size={14} className="text-metal-gold" />
                    <span>{lang === "zh" ? "尊享實體黑金會員卡" : lang === "cn" ? "尊享实体黑金会员卡" : "Physical Black Card"}</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-300">
                    <Check size={14} className="text-metal-gold" />
                    <span>{lang === "zh" ? "一對一私人信託經理" : lang === "cn" ? "一对一私人信托经理" : "1-on-1 Dedicated Manager"}</span>
                  </div>
                </div>
              </div>

              <div className="pt-8">
                <Link href="/membership" className="btn-gold py-3 px-6 text-xs font-bold tracking-widest uppercase inline-flex items-center gap-2">
                  {lang === "zh" ? "立即查看會員計劃" : lang === "cn" ? "立即查看会员计划" : "Explore Membership"} <ArrowRight size={12} />
                </Link>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 聯絡諮詢與知識庫 CTA 板塊 */}
      <section className="py-24 bg-[#232323] text-slate-100 relative overflow-hidden">
        
        {/* 背景金屬光暈 */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-metal-gold/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-4xl mx-auto px-6 text-center space-y-10 relative z-10">
          
          <div className="space-y-4">
            <span className="text-xs font-bold tracking-[0.25em] text-metal-gold uppercase block">Initiate Your Legacy</span>
            <h2 className="text-3xl md:text-5xl font-bold text-slate-200 font-serif leading-tight">
              {lang === "zh" ? "開啟您的專屬財富傳承之旅" : lang === "cn" ? "开启您的专属财富传承之旅" : "Begin Your Bespoke Legacy"}
            </h2>
            <p className="text-slate-400 font-light text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
              {lang === "zh" || lang === "cn"
                ? "無論是家族財富的跨代保護，還是企業資產的全球化隔離規劃，我們的持牌信託專家都將為您提供最嚴謹、最私密的專業諮詢。"
                : "Whether safeguarding family assets or structuring corporate entities, our trust officers stand ready to deliver rigorous, confidential guidance."}
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-6 pt-4">
            <Link 
              href="/contact" 
              className="btn-gold shadow-gold-glow py-4 px-8 font-bold text-xs tracking-widest uppercase inline-flex items-center gap-2"
            >
              {lang === "zh" ? "預約專屬諮詢" : lang === "cn" ? "预约专属咨询" : "Schedule Consultation"} <ArrowRight size={14} />
            </Link>
            <Link 
              href="/faq" 
              className="btn-white-outline py-4 px-8 font-bold text-xs tracking-widest uppercase"
            >
              {lang === "zh" ? "常見問題解答" : lang === "cn" ? "常见问题解答" : "Read Our FAQs"}
            </Link>
          </div>

        </div>
      </section>
    </Layout>
  );
}
