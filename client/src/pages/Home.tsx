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
import ScrollReveal from "@/components/ScrollReveal";
import ProgressiveImage from "@/components/ProgressiveImage";
import { t } from "@/lib/translations";

export default function Home() {
  const [lang, setLang] = useState<"zh" | "en" | "cn">("zh");

  useEffect(() => {
    const savedLang = localStorage.getItem("dilliz_lang");
    if (savedLang === "zh" || savedLang === "en" || savedLang === "cn") {
      setLang(savedLang);
    }
    
    const handleLangChange = (e: CustomEvent<{ lang: "zh" | "en" | "cn" }>) => {
      setLang(e.detail.lang);
    };

    window.addEventListener("langChange" as any, handleLangChange as any);
    return () => {
      window.removeEventListener("langChange" as any, handleLangChange as any);
    };
  }, []);

  return (
    <Layout>
      {/* Hero Banner 區塊 */}
      <section className="relative min-h-screen flex items-center justify-center bg-[#141414] overflow-hidden pt-20">
        {/* 背景大圖 */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-[#141414]/90 via-[#141414]/70 to-[#141414] z-10" />
          <div className="absolute inset-0 bg-radial-gradient z-10" />
          <img 
            src="/images/hero_banner.jpg?v=2" 
            alt="Dilliz Trust Hero Background" 
            className="w-full h-full object-cover opacity-35 scale-100"
          />
        </div>

        {/* 內容區域 */}
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-20 py-16">
          {/* 左側文案與按鈕 */}
          <div className="lg:col-span-7 text-left space-y-8">
            <ScrollReveal className="space-y-8">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-metal-gold/10 border border-metal-gold/20 text-metal-gold text-xs font-semibold tracking-wider uppercase">
                <Shield className="w-3.5 h-3.5" />
                {lang === "zh" ? "香港持牌信託公司 • 註冊編號 TC009026" : lang === "cn" ? "香港持牌信托公司 • 注册编号 TC009026" : "Licensed Trust Company • TC009026"}
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.15] font-serif">
                {lang === "zh" ? "因為您，" : lang === "cn" ? "因为您，" : "Because of you, "}
                <br className="hidden md:inline" />
                <span className="text-metal-gold bg-clip-text">
                  {lang === "zh" ? "才值得擁有" : lang === "cn" ? "才值得拥有" : "it's worth having"}
                </span>
              </h1>
              
              <p className="text-lg md:text-xl text-slate-300 font-light max-w-2xl leading-relaxed">
                {lang === "zh" 
                  ? "帝力斯資本信託有限公司 Dilliz Capital Trust Limited 總部設於香港，是一家香港持牌信託服務公司。我們專注為客戶提供定制化信託解決方案，旨在成為您最值得信賴的信託公司。" 
                  : lang === "cn" 
                  ? "帝力斯资本信托有限公司 Dilliz Capital Trust Limited 总部设于香港，是一家香港持牌信托服务公司。我们专注为客户提供定制化信托解决方案，旨在成为您最值得信赖的信托公司。" 
                  : "Dilliz Capital Trust Limited, headquartered in Hong Kong, is a licensed trust company. We specialize in providing customized trust solutions, aiming to be your most trusted partner."}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link href="/services">
                  <button className="px-8 py-4 rounded-xl bg-gradient-to-r from-metal-gold to-amber-600 text-white font-medium hover:brightness-110 transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-metal-gold/20 cursor-pointer">
                    {lang === "zh" ? "探索信託方案" : lang === "cn" ? "探索信托方案" : "Explore Trust Solutions"}
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </Link>
                <Link href="/about">
                  <button className="px-8 py-4 rounded-xl bg-white/5 border border-white/10 text-slate-300 font-medium hover:bg-white/10 hover:text-white transition-all duration-300 cursor-pointer">
                    {lang === "zh" ? "關於帝力斯信託" : lang === "cn" ? "关于帝力斯信托" : "About DILLIZ Trust"}
                  </button>
                </Link>
              </div>
            </ScrollReveal>
          </div>

          {/* 右側：立體盾徽品牌形象 */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <ScrollReveal delay={200} className="relative w-80 h-80 rounded-full border border-metal-gold/20 flex items-center justify-center p-8 bg-[#2b2b2b]/30 backdrop-blur-md shadow-gold-glow">
              <div className="absolute inset-4 rounded-full border border-metal-gold/10 animate-pulse" />
              <img 
                src="/images/dilliz_new_logo_transparent_a0c86cf6.png" 
                alt="DILLIZ Logo Emblem" 
                className="w-48 h-auto object-contain drop-shadow-3xl"
              />
            </ScrollReveal>
          </div>
        </div>

        {/* 底部裝飾線 */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#1a1a1a] to-transparent" />
      </section>

      {/* 「關於我們」精簡導覽 */}
      <section className="py-24 bg-[#1a1a1a] border-t border-white/5 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* 左側：使用全新 ProgressiveImage 實現 100% 穩固、漸進式、無跳動加載 */}
          <div className="lg:col-span-5 relative group">
            <ScrollReveal>
              <div className="absolute inset-0 bg-gradient-to-tr from-metal-gold/20 to-transparent rounded-3xl opacity-50 z-10 pointer-events-none" />
              <div className="absolute -inset-1 bg-gradient-to-r from-metal-gold/30 to-white/5 rounded-[26px] blur-md opacity-75 pointer-events-none" />
              
              <ProgressiveImage
                src="/images/luxury_office_2c65c509.jpg?v=2"
                alt="DILLIZ Luxury Office"
                aspectRatioClassName="aspect-[4/3] md:aspect-[16/10] lg:aspect-[4/5]"
              >
                {/* 疊加在圖片內部的 Shield Logo，將與大圖同步絲滑淡入，完美消除跳動 */}
                <div className="absolute inset-0 flex items-center justify-center z-20 bg-[#1a1a1a]/40 backdrop-blur-[2px]">
                  <img 
                    src="/images/dilliz_new_logo_transparent_a0c86cf6.png" 
                    alt="DILLIZ Shield" 
                    className="w-28 md:w-36 h-auto object-contain drop-shadow-2xl"
                  />
                </div>
              </ProgressiveImage>
            </ScrollReveal>
          </div>

          {/* 右側：品牌故事導覽 */}
          <div className="lg:col-span-7 space-y-6">
            <ScrollReveal className="space-y-6">
              <span className="text-xs font-bold tracking-[0.2em] text-metal-gold uppercase block">Brand Story</span>
              <h2 className="text-3xl md:text-4xl font-bold text-metal-gold font-serif">
                {lang === "zh" ? "關於帝力斯信託" : lang === "cn" ? "关于帝力斯信托" : "About DILLIZ Trust"}
              </h2>
              <p className="text-slate-300 font-light leading-relaxed">
                {lang === "zh"
                  ? "帝力斯資本信託有限公司 (Dilliz Capital Trust Limited) 是一家總部設於香港的持牌信託服務公司，持有信託或公司服務提供者牌照（TCSP 牌照編號：TC009026）。我們由資深的金融、法律與財富管理專家團隊組成，專注為全球高淨值個人、家族及企業客戶提供定制化的全球信託解決方案、資產保護、家族財富傳承及企業信託服務。"
                  : lang === "cn"
                  ? "帝力斯资本信托有限公司 (Dilliz Capital Trust Limited) 是一家总部设于香港的持牌信托服务公司，持有信托或公司服务提供者牌照（TCSP 牌照编号：TC009026）。我们由资深的金融、法律与财富管理专家团队组成，专注为全球高净值个人、家族及企业客户提供定制化的全球信托解决方案、资产保护、家族财富传承及企业信托服务。"
                  : "Dilliz Capital Trust Limited is a licensed trust services provider headquartered in Hong Kong, holding a Trust or Company Service Provider License (TCSP License No. TC009026). Composed of a seasoned team of financial, legal, and wealth management experts, we focus on providing customized global trust solutions, asset protection, family wealth succession, and corporate trust services for high-net-worth individuals, families, and corporate clients worldwide."}
              </p>
            </ScrollReveal>

            {/* 三大指標卡片 */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
              <ScrollReveal delay={100} className="bg-white/5 border border-white/10 p-5 rounded-xl space-y-2 text-center flex flex-col items-center justify-center min-h-[140px]">
                <Shield className="w-8 h-8 text-metal-gold" />
                <h4 className="font-bold text-white text-sm">{lang === "zh" ? "安全合規" : lang === "cn" ? "安全合规" : "Secure & Compliant"}</h4>
                <p className="text-xs text-slate-400 font-light">{lang === "zh" ? "香港持牌監管" : lang === "cn" ? "香港持牌监管" : "HK Licensed"}</p>
              </ScrollReveal>
              <ScrollReveal delay={200} className="bg-white/5 border border-white/10 p-5 rounded-xl space-y-2 text-center flex flex-col items-center justify-center min-h-[140px]">
                <Sparkles className="w-8 h-8 text-metal-gold" />
                <h4 className="font-bold text-white text-sm">{lang === "zh" ? "專業定制" : lang === "cn" ? "专业定制" : "Bespoke Solutions"}</h4>
                <p className="text-xs text-slate-400 font-light">{lang === "zh" ? "專屬信託方案" : lang === "cn" ? "专属信托方案" : "Tailored for You"}</p>
              </ScrollReveal>
              <ScrollReveal delay={300} className="bg-white/5 border border-white/10 p-5 rounded-xl space-y-2 text-center flex flex-col items-center justify-center min-h-[140px]">
                <User className="w-8 h-8 text-metal-gold" />
                <h4 className="font-bold text-white text-sm">{lang === "zh" ? "家族傳承" : lang === "cn" ? "家族传承" : "Legacy Planning"}</h4>
                <p className="text-xs text-slate-400 font-light">{lang === "zh" ? "世代資產守護" : lang === "cn" ? "世代资产守护" : "Generational Wealth"}</p>
              </ScrollReveal>
            </div>

            <ScrollReveal delay={200} className="pt-6">
              <Link href="/about">
                <button className="px-6 py-3 rounded-xl border border-metal-gold/30 text-metal-gold hover:bg-metal-gold hover:text-white transition-all duration-300 flex items-center gap-2 text-sm font-medium cursor-pointer">
                  {lang === "zh" ? "深入了解我們" : lang === "cn" ? "深入了解我们" : "Learn More About Us"}
                  <ArrowRight className="w-4 h-4" />
                </button>
              </Link>
            </ScrollReveal>
          </div>

        </div>
      </section>

      {/* 「核心服務」精簡導覽 */}
      <section className="py-24 bg-[#141414] border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 space-y-16">
          
          <ScrollReveal className="text-center max-w-3xl mx-auto space-y-4">
            <span className="text-xs font-bold tracking-[0.2em] text-metal-gold uppercase block">Our Services</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white font-serif">
              {lang === "zh" ? "全方位信託服務" : lang === "cn" ? "全方位信托服务" : "Comprehensive Trust Services"}
            </h2>
            <p className="text-slate-400 font-light leading-relaxed">
              {lang === "zh" 
                ? "我們憑藉在信託架構設計、跨國法律、稅務規劃等領域的深厚專業積澱，為客戶量身定制多元化的信託架構，全方位守護您的資產安全。"
                : lang === "cn"
                ? "我们凭借在信托架构设计、跨国法律、税务规划等领域的深厚专业积淀，为客户量身定制多元化的信托架构，全方位守护您的资产安全。"
                : "With deep expertise in trust structuring, cross-border law, and tax planning, we customize diverse trust frameworks to safeguard your assets globally."}
            </p>
          </ScrollReveal>

          {/* 5 大服務卡片 */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              {
                icon: Shield,
                title: lang === "zh" ? "家族信託" : lang === "cn" ? "家族信托" : "Family Trust",
                desc: lang === "zh" ? "實現財富世代傳承，合理規劃稅務，提供最周全的家族資產保護。" : lang === "cn" ? "实现财富世代传承，合理规划税务，提供最周全的家族资产保护。" : "Achieve wealth succession, optimize tax planning, and protect family assets.",
                delay: 100
              },
              {
                icon: CreditCard,
                title: lang === "zh" ? "資產保護信託" : lang === "cn" ? "资产保护信托" : "Asset Protection Trust",
                desc: lang === "zh" ? "有效防範債務、訴訟及商業風險，為您的資產建立堅不可摧的防火牆。" : lang === "cn" ? "有效防范债务、诉讼及商业风险，为您的资产建立坚不可摧的防火墙。" : "Defend against commercial risks and litigation with an asset firewall.",
                delay: 200
              },
              {
                icon: Coins,
                title: lang === "zh" ? "股權與企業信託" : lang === "cn" ? "股权与企业信托" : "Corporate Trust",
                desc: lang === "zh" ? "優化企業股權結構，助力企業上市規劃，實現員工持股計劃(ESOP)。" : lang === "cn" ? "优化企业股权结构，助力企业上市规划，实现员工持股计划(ESOP)。" : "Optimize corporate equity structures and manage employee share plans.",
                delay: 300
              },
              {
                icon: Briefcase,
                title: lang === "zh" ? "資金託管服務" : lang === "cn" ? "资金托管服务" : "Escrow Services",
                desc: lang === "zh" ? "提供安全、獨立、合規的第三方資金與資產託管，保障商業交易安全。" : lang === "cn" ? "提供安全、独立、合规的第三方资金与资产托管，保障商业交易安全。" : "Provide safe, independent, and compliant escrow for secure transactions.",
                delay: 400
              },
              {
                icon: FileText,
                title: lang === "zh" ? "特制定存與專項信託" : lang === "cn" ? "特制定存与专项信托" : "Special Trust",
                desc: lang === "zh" ? "專為定存與專項投資設計，兼顧資產穩健增值與信託架構的雙重安全保障。" : lang === "cn" ? "专为定存与专项投资设计，兼顾资产稳健增值与信托架构的双重安全保障。" : "Designed for fixed deposits and special investments, balancing yield and safety.",
                delay: 500
              }
            ].map((srv, index) => {
              const IconComponent = srv.icon;
              return (
                <ScrollReveal 
                  key={index} 
                  delay={srv.delay as 100 | 200 | 300 | 400 | 500}
                  className="bg-gradient-to-b from-white/5 to-transparent border border-white/10 hover:border-metal-gold/40 p-6 rounded-2xl flex flex-col justify-between transition-all duration-300 min-h-[320px] group"
                >
                  <div className="space-y-4">
                    <div className="w-12 h-12 rounded-xl bg-metal-gold/10 border border-metal-gold/20 flex items-center justify-center text-metal-gold group-hover:bg-metal-gold group-hover:text-white transition-all duration-300">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-bold text-white group-hover:text-metal-gold transition-colors duration-300">
                      {srv.title}
                    </h3>
                    <p className="text-sm text-slate-400 font-light leading-relaxed">
                      {srv.desc}
                    </p>
                  </div>
                  
                  <div className="pt-6 border-t border-white/5 mt-4 flex items-center justify-between">
                    <Link href="/services">
                      <span className="text-xs font-medium text-metal-gold flex items-center gap-1.5 cursor-pointer group-hover:underline">
                        {lang === "zh" ? "查看詳情" : lang === "cn" ? "查看详情" : "Learn More"}
                        <ArrowRight className="w-3 h-3" />
                      </span>
                    </Link>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>

          <ScrollReveal className="text-center pt-4">
            <Link href="/services">
              <button className="px-8 py-4 rounded-xl bg-gradient-to-r from-metal-gold to-amber-600 text-white font-medium hover:brightness-110 transition-all duration-300 flex items-center justify-center gap-2 mx-auto shadow-lg shadow-metal-gold/20 cursor-pointer">
                {lang === "zh" ? "探索所有信託服務" : lang === "cn" ? "探索所有信托服务" : "Explore All Services"}
                <ArrowRight className="w-4 h-4" />
              </button>
            </Link>
          </ScrollReveal>

        </div>
      </section>

      {/* 「真實案例」與「會員計劃」聯合導覽 */}
      <section className="py-24 bg-[#1a1a1a] border-t border-white/5 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* 左側：真實案例 */}
          <ScrollReveal delay={100} className="flex">
            <div className="bg-gradient-to-b from-white/5 to-transparent border border-white/10 rounded-3xl p-8 md:p-10 flex flex-col justify-between w-full relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-48 h-48 bg-metal-gold/5 rounded-full blur-3xl pointer-events-none" />
              
              <div className="space-y-6">
                <span className="text-xs font-bold tracking-[0.2em] text-metal-gold uppercase block">Success Case</span>
                <h3 className="text-2xl md:text-3xl font-bold text-white font-serif">
                  {lang === "zh" ? "真實成功案例" : lang === "cn" ? "真实成功案例" : "Client Success Case"}
                </h3>
                <blockquote className="border-l-2 border-metal-gold pl-4 text-slate-300 italic font-light text-base md:text-lg leading-relaxed">
                  {lang === "zh"
                    ? "「作為一位家族企業創始人，資產的長效安全與後代的有序傳承是我最核心的考量。帝力斯信託為我們定制的家族信託架構，不僅成功隔離了商業經營風險，更為後代制定了清晰的信託受益人權益發放條款，真正實現了財富的世代守護。」"
                    : lang === "cn"
                    ? "「作为一位家族企业创始人，资产的长效安全与后代的有序传承是我最核心的考量。帝力斯信托为我们定制的家族信托架构，不仅成功隔离了商业经营风险，更为后代制定了清晰的信托受益人权益发放条款，真正实现了财富的世代守护。」"
                    : "\"As a family business founder, long-term asset security and orderly succession are my core concerns. The customized family trust structure designed by DILLIZ Trust not only successfully ring-fenced our commercial risks but also established clear distribution terms for our beneficiaries, truly safeguarding our wealth across generations.\""}
                </blockquote>
                <div className="flex items-center gap-3 pt-2">
                  <div className="w-10 h-10 rounded-full bg-metal-gold/10 border border-metal-gold/20 flex items-center justify-center text-metal-gold font-bold text-sm">
                    陳
                  </div>
                  <div>
                    <h5 className="font-bold text-white text-sm">{lang === "zh" ? "陳先生" : lang === "cn" ? "陈先生" : "Mr. Chan"}</h5>
                    <p className="text-xs text-slate-400">{lang === "zh" ? "香港上市科技企業創始人" : lang === "cn" ? "香港上市科技企业创始人" : "Founder of HK Listed Tech Enterprise"}</p>
                  </div>
                </div>
              </div>

              <div className="pt-8 border-t border-white/5 mt-8">
                <Link href="/cases">
                  <span className="text-sm font-medium text-metal-gold flex items-center gap-2 cursor-pointer group-hover:underline">
                    {lang === "zh" ? "探索更多真實案例" : lang === "cn" ? "探索更多真实案例" : "Explore More Success Cases"}
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </Link>
              </div>
            </div>
          </ScrollReveal>

          {/* 右側：會員計劃 */}
          <ScrollReveal delay={200} className="flex">
            <div className="bg-gradient-to-b from-white/5 to-transparent border border-white/10 rounded-3xl p-8 md:p-10 flex flex-col justify-between w-full relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-48 h-48 bg-metal-gold/5 rounded-full blur-3xl pointer-events-none" />
              
              <div className="space-y-6">
                <span className="text-xs font-bold tracking-[0.2em] text-metal-gold uppercase block">Exclusive Membership</span>
                <h3 className="text-2xl md:text-3xl font-bold text-white font-serif">
                  {lang === "zh" ? "專屬會員信託計劃" : lang === "cn" ? "专属会员信托计划" : "Exclusive Membership Plans"}
                </h3>
                <p className="text-slate-300 font-light leading-relaxed">
                  {lang === "zh"
                    ? "因為您，才值得擁有。我們獨家推出基礎、標準、尊享、典藏四大定存與信託會員計劃，為不同資產規模的委託人提供極具競爭力的特惠收益與尊榮黑金卡權益。"
                    : lang === "cn"
                    ? "因為您，才值得擁有。我們獨家推出基礎、標準、尊享、典藏四大定存與信託會員計劃，為不同資產規模的委託人提供極具競爭力的特惠收益與尊榮黑金卡權益。"
                    : "Because of you, it's worth having. We launch four tiers of membership: Basic, Standard, Premium, and Royal, providing highly competitive yields and black card privileges."}
                </p>
                <div className="grid grid-cols-2 gap-4 pt-2">
                  <div className="bg-white/5 p-4 rounded-xl border border-white/5">
                    <span className="text-xs text-slate-400 block mb-1">{lang === "zh" ? "尊享黑金卡" : lang === "cn" ? "尊享黑金卡" : "Black Card"}</span>
                    <span className="text-lg font-bold text-metal-gold font-serif">{lang === "zh" ? "四大等級" : lang === "cn" ? "四大等级" : "4 Tiers"}</span>
                  </div>
                  <div className="bg-white/5 p-4 rounded-xl border border-white/5">
                    <span className="text-xs text-slate-400 block mb-1">{lang === "zh" ? "信託定存收益" : lang === "cn" ? "信托定存收益" : "Trust Yield"}</span>
                    <span className="text-lg font-bold text-metal-gold font-serif">{lang === "zh" ? "極具競爭力" : lang === "cn" ? "极具竞争力" : "Highly Comp."}</span>
                  </div>
                </div>
              </div>

              <div className="pt-8 border-t border-white/5 mt-8">
                <Link href="/membership">
                  <span className="text-sm font-medium text-metal-gold flex items-center gap-2 cursor-pointer group-hover:underline">
                    {lang === "zh" ? "探索會員尊榮權益" : lang === "cn" ? "探索会员尊荣权益" : "Explore Membership Benefits"}
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </Link>
              </div>
            </div>
          </ScrollReveal>

        </div>
      </section>

      {/* 聯絡諮詢與知識庫 CTA 板塊 */}
      <section className="py-24 bg-gradient-to-b from-[#141414] to-[#0f0f0f] relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10">
          <div className="absolute inset-0 bg-radial-gradient" />
          <img 
            src="/images/hk_skyline.jpg" 
            alt="Hong Kong Skyline" 
            className="w-full h-full object-cover"
          />
        </div>

        <div className="max-w-5xl mx-auto px-6 text-center relative z-10 space-y-10">
          <ScrollReveal className="space-y-8">
            <span className="text-xs font-bold tracking-[0.2em] text-metal-gold uppercase block">Start Your Legacy</span>
            <h2 className="text-3xl md:text-5xl font-bold text-white font-serif leading-tight">
              {lang === "zh" ? "開啟您的專屬信託傳承之旅" : lang === "cn" ? "开启您的专属信托传承之旅" : "Begin Your Bespoke Trust Journey"}
            </h2>
            <p className="text-lg text-slate-300 font-light max-w-3xl mx-auto leading-relaxed">
              {lang === "zh"
                ? "無論是家族財富的世代守護、商業資產的風險隔離，還是定存與專項投資計劃，帝力斯信託專家團隊都將為您提供最專業、最安全、最合規的專屬定制化解決方案。"
                : lang === "cn"
                ? "无论是家族财富的世代守护、商业资产的风险隔离，还是定存与专项投资计划，帝力斯信托专家团队都将为您提供最专业、最安全、最合规的专属定制化解决方案。"
                : "Whether safeguarding family wealth across generations, shielding business assets from risks, or planning special investment trusts, our experts provide professional, secure, and compliant bespoke solutions."}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Link href="/contact">
                <button className="px-8 py-4 rounded-xl bg-gradient-to-r from-metal-gold to-amber-600 text-white font-medium hover:brightness-110 transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-metal-gold/20 cursor-pointer w-full sm:w-auto">
                  {lang === "zh" ? "預約專屬信託諮詢" : lang === "cn" ? "预约专属信托咨询" : "Book Bespoke Consultation"}
                  <ArrowRight className="w-4 h-4" />
                </button>
              </Link>
              <Link href="/faq">
                <button className="px-8 py-4 rounded-xl bg-white/5 border border-white/10 text-slate-300 font-medium hover:bg-white/10 hover:text-white transition-all duration-300 cursor-pointer w-full sm:w-auto">
                  {lang === "zh" ? "瀏覽信託知識庫" : lang === "cn" ? "浏览信托知识库" : "Browse Trust FAQ"}
                </button>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </Layout>
  );
}
