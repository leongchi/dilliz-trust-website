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

    window.addEventListener("dilliz_lang_changed", handleLangChange);
    return () => window.removeEventListener("dilliz_lang_changed", handleLangChange);
  }, []);

  return (
    <Layout>
      
      {/* Hero 視覺核心板塊 (皇家深藍與香港天際線背景) */}
      <section className="relative min-h-[calc(100vh-80px)] flex items-center justify-center py-20 overflow-hidden">
        
        {/* 高清真實香港天際線背景圖片 (帶有極致奢華的深藍色漸層遮罩) */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/manus-storage/hero_banner_b798c937.png" 
            alt="DILLIZ Hong Kong Skyline" 
            className="w-full h-full object-cover opacity-35"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1a1a1a] via-[#1a1a1a]/90 to-[#2b2b2b]/75" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] via-transparent to-transparent" />
        </div>

        {/* 奢華金屬光暈與拉絲紋理裝飾 */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-metal-gold/5 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-metal-gold/5 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* 左側：核心文案 */}
          <div className="lg:col-span-7 space-y-8 text-left">
            


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

          {/* 右側：品牌立體徽章與視覺點綴 */}
          <div className="lg:col-span-5 hidden lg:flex justify-center relative">
            <div className="absolute -inset-4 bg-metal-gold/5 rounded-full blur-3xl" />
            <div className="relative w-80 h-80 rounded-full border border-metal-gold/20 flex items-center justify-center p-8 bg-[#2b2b2b]/30 backdrop-blur-md shadow-gold-glow">
              <img 
                src="/manus-storage/dilliz_new_logo_transparent_a0c86cf6.png" 
                alt="DILLIZ Badge" 
                className="w-48 h-auto object-contain animate-fadeIn opacity-80"
              />
            </div>
          </div>

        </div>

      </section>

      {/* 「關於我們」精簡導覽 */}
      <section className="py-24 bg-[#1a1a1a] border-t border-white/5 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* 左側：真實高清圖片 + 奢華 Logo 疊加 */}
          <div className="lg:col-span-5 relative group">
            <div className="absolute inset-0 bg-gradient-to-tr from-metal-gold/20 to-transparent rounded-3xl opacity-50 z-10" />
            <div className="absolute -inset-1 bg-gradient-to-r from-metal-gold/30 to-white/5 rounded-[26px] blur-md opacity-75" />
            <div className="relative rounded-3xl overflow-hidden border border-white/10 aspect-[4/3] md:aspect-[16/10] lg:aspect-[4/5] shadow-gold-glow">
              <img 
                src="/manus-storage/luxury_office_2c65c509.jpg" 
                alt="DILLIZ Luxury Office" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              
              {/* 疊加的 Shield Logo */}
              <div className="absolute inset-0 flex items-center justify-center z-20 bg-[#1a1a1a]/40 backdrop-blur-[2px]">
                <img 
                  src="/manus-storage/dilliz_new_logo_transparent_a0c86cf6.png" 
                  alt="DILLIZ Shield" 
                  className="w-28 md:w-36 h-auto object-contain drop-shadow-2xl"
                />
              </div>
            </div>
          </div>

          {/* 右側：品牌故事導覽 */}
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs font-bold tracking-[0.2em] text-metal-gold uppercase block">Brand Story</span>
            <h2 className="text-3xl md:text-4xl font-bold text-metal-gold font-serif">
              {lang === "zh" ? "關於帝力斯信託" : lang === "cn" ? "关于帝力斯信托" : "About DILLIZ Trust"}
            </h2>
            <p className="text-slate-300 font-light leading-relaxed">
              {lang === "zh"
                ? "帝力斯資本信託有限公司 DilliZ Capital Trust Limited 是一家總部設於香港的持牌信託服務公司。我們致力於為全球高淨值客戶與家族辦公室提供安全、合規、隱密且簡易靈活的財富保護、託管與跨代傳承解決方案。"
                : lang === "cn"
                ? "帝力斯资本信托有限公司 DilliZ Capital Trust Limited 是一家总部设于香港的持牌信托服务公司。我们致力于为全球高净值客户与家族办公室提供安全、合规、隐密且简易灵活的财富保护、托管与跨代传承解决方案。"
                : "DilliZ Capital Trust Limited is a licensed trust service provider in Hong Kong. We are dedicated to providing secure, compliant, private, and highly flexible wealth protection, custody, and multi-generational succession solutions for global high-net-worth clients and family offices."}
            </p>

            {/* 使命、理念、定位三大指標 */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
              <div className="bg-white/5 border border-white/10 p-5 rounded-xl space-y-2">
                <h4 className="text-xs font-bold text-slate-200 font-serif">{t("stats.mission", lang)}</h4>
                <p className="text-[11px] text-slate-400 font-light leading-relaxed">{t("stats.mission.desc", lang)}</p>
              </div>
              <div className="bg-white/5 border border-white/10 p-5 rounded-xl space-y-2">
                <h4 className="text-xs font-bold text-slate-200 font-serif">{t("stats.philosophy", lang)}</h4>
                <p className="text-[11px] text-slate-400 font-light leading-relaxed">{t("stats.philosophy.desc", lang)}</p>
              </div>
              <div className="bg-white/5 border border-white/10 p-5 rounded-xl space-y-2">
                <h4 className="text-xs font-bold text-slate-200 font-serif">{t("stats.positioning", lang)}</h4>
                <p className="text-[11px] text-slate-400 font-light leading-relaxed">{t("stats.positioning.desc", lang)}</p>
              </div>
            </div>

            <div className="pt-6">
              <Link href="/about" className="btn-gold shadow-gold-glow py-3.5 px-8 font-bold text-xs tracking-widest uppercase inline-flex items-center gap-2">
                {lang === "zh" ? "了解更多品牌故事" : lang === "cn" ? "了解更多品牌故事" : "Learn More Story"} <ArrowRight size={14} />
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* 「核心服務」精簡導覽 */}
      <section className="py-24 bg-[#2b2b2b] border-t border-b border-white/5 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 space-y-16">
          
          {/* 標題 */}
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="text-xs font-bold tracking-[0.2em] text-metal-gold uppercase block">Core Solutions</span>
            <h2 className="text-3xl md:text-4xl font-bold text-metal-gold font-serif">
              {t("services.title", lang)}
            </h2>
            <p className="text-slate-300 font-light leading-relaxed text-sm">
              {t("services.subtitle", lang)}
            </p>
          </div>

          {/* 5 大服務卡片網格 */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            
            {[
              { id: "asset", name: t("services.tab.asset", lang), icon: Shield, desc: lang === "zh" ? "安全合規的第三方資產託管與法律隔離保護" : lang === "cn" ? "安全合规的第三方资产托管与法律隔离保护" : "Secure third-party custody & legal isolation" },
              { id: "trust", name: t("services.tab.trust", lang), icon: Compass, desc: lang === "zh" ? "量身定制跨國資產信託，合規合法減輕稅務" : lang === "cn" ? "量身定制跨国资产信托，合规合法减轻税务" : "Bespoke trust structures to minimize global taxes" },
              { id: "deposit", name: t("services.tab.deposit", lang), icon: Landmark, desc: lang === "zh" ? "協助在全球頂級離岸中心設立賬戶" : lang === "cn" ? "协助在全球顶级离岸中心设立账户" : "Set up accounts in Swiss/Singapore financial centers" },
              { id: "finance", name: t("services.tab.finance", lang), icon: CreditCard, desc: lang === "zh" ? "定存資產直接授信，獲發尊貴聯名信用卡" : lang === "cn" ? "定存资产直接授信，获发尊贵联名信用卡" : "Direct credit based on assets, black gold co-brand" },
              { id: "card", name: t("services.tab.card", lang), icon: Receipt, desc: lang === "zh" ? "一站式海外物業稅、子女學費等全球賬單代付" : lang === "cn" ? "一站式海外物业税、子女学费等全球账单代付" : "One-stop escrow & auto-payment for global bills" }
            ].map((srv, idx) => {
              const IconComp = srv.icon;
              return (
                <div 
                  key={idx}
                  className="bg-white/5 border border-white/10 p-6 rounded-2xl flex flex-col justify-between hover:border-metal-gold/40 transition-all duration-300 group"
                >
                  <div className="space-y-4">
                    <div className="w-10 h-10 rounded-lg bg-metal-gold/10 border border-metal-gold/20 flex items-center justify-center text-metal-gold">
                      <IconComp size={20} />
                    </div>
                    <h4 className="text-sm font-bold text-slate-200 font-serif group-hover:text-metal-gold transition-colors">
                      {srv.name}
                    </h4>
                    <p className="text-[11px] text-slate-400 font-light leading-relaxed">
                      {srv.desc}
                    </p>
                  </div>
                </div>
              );
            })}

          </div>

          <div className="text-center pt-4">
            <Link href="/services" className="btn-gold shadow-gold-glow py-3.5 px-8 font-bold text-xs tracking-widest uppercase inline-flex items-center gap-2">
              {lang === "zh" ? "探索核心服務詳情" : lang === "cn" ? "探索核心服务详情" : "Explore Full Services"} <ArrowRight size={14} />
            </Link>
          </div>

        </div>
      </section>

      {/* 「真實案例」與「會員計劃」聯合導覽 */}
      <section className="py-24 bg-[#1a1a1a] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
          
          {/* 左側：真實案例導覽卡片 */}
          <div className="bg-white/5 border border-white/10 p-8 md:p-10 rounded-3xl flex flex-col justify-between hover:border-metal-gold/30 transition-all duration-300 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-metal-gold" />
            
            <div className="space-y-6">
              <span className="text-xs font-bold tracking-[0.2em] text-metal-gold uppercase block">Interactive Case Studies</span>
              <h3 className="text-2xl md:text-3xl font-bold text-slate-200 font-serif leading-tight">
                {lang === "zh" ? "360度互動案例情境" : lang === "cn" ? "360度互动案例情境" : "360° Interactive Case Studies"}
              </h3>
              <p className="text-slate-300 font-light text-sm leading-relaxed">
                {lang === "zh"
                  ? "我們將客戶面臨的創業債務風險、資產海外配置、突發意外凍結等六大情境，以「以客為尊 / YOU」為中心進行 360 度環狀推演，提供合規合法的定製信託解決方案。"
                  : lang === "cn"
                  ? "我们将客户面临的创业债务风险、资产海外配置、突发意外冻结等六大情境，以“以客为尊 / YOU”为中心进行 360 度环状推演，提供合规合法的定制信托解决方案。"
                  : "We present six major scenarios faced by high-net-worth clients, centered around 'YOU', demonstrating how DILLIZ provides customized legal trust solutions."}
              </p>

              {/* 亮點圖示列 */}
              <div className="flex gap-4 text-metal-gold pt-2">
                <div className="w-10 h-10 rounded-full bg-metal-gold/10 flex items-center justify-center"><Briefcase size={18} /></div>
                <div className="w-10 h-10 rounded-full bg-metal-gold/10 flex items-center justify-center"><Shield size={18} /></div>
                <div className="w-10 h-10 rounded-full bg-metal-gold/10 flex items-center justify-center"><Landmark size={18} /></div>
                <div className="w-10 h-10 rounded-full bg-metal-gold/10 flex items-center justify-center"><Heart size={18} /></div>
              </div>
            </div>

            <div className="pt-8 mt-8 border-t border-white/5">
              <Link href="/cases" className="btn-gold shadow-gold-glow py-3 px-6 font-bold text-xs tracking-widest uppercase inline-flex items-center gap-2 w-full justify-center">
                {lang === "zh" ? "進入 360° 互動案例" : lang === "cn" ? "进入 360° 互动案例" : "Enter Interactive Cases"} <ArrowRight size={14} />
              </Link>
            </div>
          </div>

          {/* 右側：會員計劃導覽卡片 */}
          <div className="bg-white/5 border border-white/10 p-8 md:p-10 rounded-3xl flex flex-col justify-between hover:border-metal-gold/30 transition-all duration-300 relative overflow-hidden">
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
                  ? "因为您，才值得拥有。我们独家推出基础、标准、尊享、典藏四大定存与信托会员计划，为不同资产规模的委托人提供极具竞争力的特惠收益与尊荣黑金卡权益。"
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
                  <span>{lang === "zh" ? "豁免離岸賬戶行政費" : lang === "cn" ? "豁免离岸账户行政费" : "Waived Offshore Admin Fees"}</span>
                </div>
                <div className="flex items-center gap-2 text-slate-300">
                  <Check size={14} className="text-metal-gold" />
                  <span>{lang === "zh" ? "聯名信用卡" : lang === "cn" ? "联名信用卡" : "Black Gold Co-branded Card"}</span>
                </div>
                <div className="flex items-center gap-2 text-slate-300">
                  <Check size={14} className="text-metal-gold" />
                  <span>{lang === "zh" ? "24小時專屬客服熱線" : lang === "cn" ? "24小时专属客服热线" : "24/7 Dedicated Hotline"}</span>
                </div>
              </div>
            </div>

            <div className="pt-8 mt-8 border-t border-white/5">
              <Link href="/membership" className="btn-gold shadow-gold-glow py-3 px-6 font-bold text-xs tracking-widest uppercase inline-flex items-center gap-2 w-full justify-center">
                {lang === "zh" ? "查看會員權益對照" : lang === "cn" ? "查看会员权益对照" : "View Membership Tiers"} <ArrowRight size={14} />
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* 聯絡諮詢與知識庫 CTA 板塊 */}
      <section className="py-20 bg-[#2b2b2b] border-t border-white/5 text-center relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-metal-gold/5 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="max-w-3xl mx-auto px-6 space-y-8 relative z-10">
          <span className="text-xs font-bold tracking-[0.25em] text-metal-gold uppercase block">Start Your Legacy</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white font-serif leading-tight">
            {lang === "zh" ? "立即開啟您的專屬財富傳承規劃" : lang === "cn" ? "立即开启您的专属财富传承规划" : "Begin Your Bespoke Wealth Planning Today"}
          </h2>
          <p className="text-slate-300 font-light text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
            {lang === "zh"
              ? "不論是家族資產隔離、全球稅務合規優化，還是跨代財富穩健傳承，我們的資深信託與法律專家團隊都將為您提供最專業、最隱密的諮詢服務。"
              : lang === "cn"
              ? "不论是家族资产隔离、全球税务合规优化，还是跨代财富稳健传承，我们的资深信托与法律专家团队都将为您提供最专业、最隐密的咨询服务。"
              : "Whether it is asset isolation, tax optimization, or multi-generational wealth succession, our senior legal and trust experts are ready to assist you in absolute confidentiality."}
          </p>

          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <Link 
              href="/contact" 
              className="btn-gold shadow-gold-glow py-4 px-10 font-bold text-xs tracking-widest uppercase inline-flex items-center gap-2"
            >
              {lang === "zh" ? "預約專屬諮詢" : lang === "cn" ? "预约专属咨询" : "Book Private Consultation"} <ArrowRight size={14} />
            </Link>
            <Link 
              href="/faq" 
              className="bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-white py-4 px-10 font-bold text-xs tracking-widest uppercase rounded-lg transition-all"
            >
              {lang === "zh" ? "瀏覽常見問題" : lang === "cn" ? "浏览常见问题" : "Browse FAQ"}
            </Link>
          </div>
        </div>
      </section>

    </Layout>
  );
}
