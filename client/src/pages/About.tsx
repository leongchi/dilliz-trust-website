import { useState, useEffect } from "react";
import { Shield, Target, Eye, Compass, Award, Building, Sparkles } from "lucide-react";
import Layout from "@/components/Layout";
import { t } from "@/lib/translations";

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
              {lang === "zh" ? "關於帝力斯信託" : lang === "cn" ? "关于帝力斯信托" : "About DILLIZ Trust"}
            </h1>
            <p className="text-slate-300 font-light leading-relaxed">
              {lang === "zh" 
                ? "源自瑞士私人銀行級別的財富保護美學，立足香港全球金融中心，為家族與企業守護永續未來。"
                : lang === "cn"
                ? "源自瑞士私人银行级别的财富保护美学，立足香港全球金融中心，为家族与企业守护永续未来。"
                : "Rooted in Swiss private banking-grade wealth preservation aesthetics, based in Hong Kong's global financial hub, safeguarding a sustainable future for families and enterprises."}
            </p>
          </div>

          {/* 品牌核心介紹：圖文雙欄 */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            
            {/* 左側：真實高清圖片 + 奢華 Logo 疊加 */}
            <div className="lg:col-span-5 relative group">
              <div className="absolute inset-0 bg-gradient-to-tr from-metal-gold/20 to-transparent rounded-3xl opacity-50 group-hover:opacity-75 transition-opacity duration-500 z-10" />
              <div className="absolute -inset-1 bg-gradient-to-r from-metal-gold/30 to-white/5 rounded-[26px] blur-md opacity-75 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative rounded-3xl overflow-hidden border border-white/10 aspect-[4/5] shadow-gold-glow">
                <img 
                  src="/manus-storage/luxury_office_2c65c509.jpg" 
                  alt="DILLIZ Luxury Office" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* 浮動徽章 */}
                <div className="absolute bottom-8 left-8 right-8 bg-[#2b2b2b]/90 backdrop-blur-md border border-metal-gold/30 p-6 rounded-2xl flex items-center gap-4 z-20 shadow-lg">
                  <div className="w-12 h-12 rounded-full bg-metal-gold/10 border border-metal-gold/30 flex items-center justify-center text-metal-gold shrink-0">
                    <Award size={24} />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-100 font-serif">
                      {lang === "zh" ? "香港持牌信託公司" : lang === "cn" ? "香港持牌信托公司" : "HK Licensed Trustee"}
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
                  {lang === "zh" ? "我們的品牌故事" : lang === "cn" ? "我们的品牌故事" : "Our Brand Story"}
                </h3>
                <p className="text-slate-300 font-light leading-relaxed">
                  {lang === "zh"
                    ? "帝力斯資本信託有限公司 DilliZ Capital Trust Limited 是一家總部設於香港的持牌信託服務公司。我們致力於為全球客戶與家族辦公室提供安全、合規、隱密且簡易靈活的財富保護、託管與跨代傳承解決方案。"
                    : lang === "cn"
                    ? "帝力斯资本信托有限公司 DilliZ Capital Trust Limited 是一家总部设于香港的持牌信托服务公司。我们致力于为全球客户与家族办公室提供安全、合规、隐密且简易灵活的财富保护、托管与跨代传承解决方案。"
                    : "DilliZ Capital Trust Limited is a licensed trust service provider in Hong Kong. We are dedicated to providing secure, compliant, private, and highly flexible wealth protection, custody, and multi-generational succession solutions for global clients and family offices."}
                </p>
                <p className="text-slate-300 font-light leading-relaxed">
                  {lang === "zh"
                    ? "我們深知，財富不僅僅是數字的累積，更是家族奮鬥歷史的沉澱與對未來的期許。因此，我們秉持「以客為本，信任相連」的核心價值，將瑞士私人銀行的嚴謹與精緻，與香港普通法系下信託架構的靈活優勢完美結合。"
                    : lang === "cn"
                    ? "我们深知，财富不仅仅是数字的累积，更是家族奋斗历史的沉淀与对未来的期许。因此，我们秉持「以客为本，信任相连」的核心价值，将瑞士私人银行的严谨与精致，与香港普通法系下信托架构的灵活优势完美结合。"
                    : "We understand that wealth is not just an accumulation of numbers, but the crystallization of family struggles and hopes for the future. Therefore, we uphold the core value of 'Client-Centric, Trust-Connected', combining the rigor and sophistication of Swiss private banking with the flexible advantages of Hong Kong's common law trust structure."}
                </p>
              </div>

              {/* 三大支柱卡片 */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                
                {/* 使命 */}
                <div className="bg-white/5 border border-white/10 p-6 rounded-2xl space-y-3 shadow-sm hover:border-metal-gold/30 transition-all duration-300">
                  <div className="w-10 h-10 rounded-lg bg-metal-gold/10 border border-metal-gold/20 flex items-center justify-center text-metal-gold">
                    <Target size={20} />
                  </div>
                  <h4 className="text-sm font-bold text-slate-200 font-serif">{t("stats.mission", lang)}</h4>
                  <p className="text-xs text-slate-400 font-light leading-relaxed whitespace-pre-line">
                    {t("stats.mission.desc", lang)}
                  </p>
                </div>

                {/* 理念 */}
                <div className="bg-white/5 border border-white/10 p-6 rounded-2xl space-y-3 shadow-sm hover:border-metal-gold/30 transition-all duration-300">
                  <div className="w-10 h-10 rounded-lg bg-metal-gold/10 border border-metal-gold/20 flex items-center justify-center text-metal-gold">
                    <Compass size={20} />
                  </div>
                  <h4 className="text-sm font-bold text-slate-200 font-serif">{t("stats.philosophy", lang)}</h4>
                  <p className="text-xs text-slate-400 font-light leading-relaxed whitespace-pre-line">
                    {t("stats.philosophy.desc", lang)}
                  </p>
                </div>

                {/* 定位 */}
                <div className="bg-white/5 border border-white/10 p-6 rounded-2xl space-y-3 shadow-sm hover:border-metal-gold/30 transition-all duration-300">
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

          {/* 核心競爭優勢板塊 */}
          <div className="bg-[#2b2b2b] border border-metal-gold/20 rounded-3xl p-10 md:p-12 shadow-gold-glow space-y-10">
            <div className="text-center max-w-2xl mx-auto space-y-3">
            <h3 className="text-2xl md:text-3xl font-bold text-metal-gold font-serif">
              {lang === "zh" ? "帝力斯的核心競爭優勢" : lang === "cn" ? "帝力斯的核心竞争优势" : "Our Core Advantages"}
            </h3>
            <p className="text-xs md:text-sm text-slate-300 font-light">
              {lang === "zh" ? "我們如何確保您的資產安全無虞、增值穩健並實現完美傳承" : lang === "cn" ? "我们如何确保您的资产安全无虞、增值稳健并实现完美传承" : "How we ensure your assets are safe, appreciate steadily, and pass on perfectly"}
            </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
              
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-full bg-metal-gold/10 border border-metal-gold/30 flex items-center justify-center text-metal-gold mx-auto md:mx-0">
                  <Shield size={22} />
                </div>
                <h4 className="text-lg font-bold text-slate-200 font-serif">
                  {lang === "zh" ? "1. 牌照合規 · 法律保障" : lang === "cn" ? "1. 牌照合规 · 法律保障" : "1. Licensed & Fully Compliant"}
                </h4>
                <p className="text-xs text-slate-400 font-light leading-relaxed">
                  {lang === "zh"
                    ? "持有香港公司註冊處正式頒發的 TCSP 信託牌照，所有信託資產均依法獨立隔離託管，受香港信託條例與普通法系的雙重強力保護。"
                    : lang === "cn"
                    ? "持有香港公司注册处正式颁发的 TCSP 信托牌照，所有信托资产均依法独立隔离托管，受香港信托条例与普通法系的双重強力保护。"
                    : "Holding the TCSP Trust License issued by the HK Companies Registry. All trust assets are legally isolated and protected by HK Trust Ordinance and Common Law."}
                </p>
              </div>

              <div className="space-y-3">
                <div className="w-12 h-12 rounded-full bg-metal-gold/10 border border-metal-gold/30 flex items-center justify-center text-metal-gold mx-auto md:mx-0">
                  <Building size={22} />
                </div>
                <h4 className="text-lg font-bold text-slate-200 font-serif">
                  {lang === "zh" ? "2. 全球銀行聯動" : lang === "cn" ? "2. 全球银行联动" : "2. Global Banking Alliance"}
                </h4>
                <p className="text-xs text-slate-400 font-light leading-relaxed">
                  {lang === "zh"
                    ? "與全球銀行深度合作，為信託設立專屬安全賬戶，提供多幣種配置、極致隱私保護及快速開戶通道。"
                    : lang === "cn"
                    ? "与全球银行深度合作，为信托设立专属安全账户，提供多币种配置、极致隐私保护及快速开户通道。"
                    : "Deeply allied with global banks to set up dedicated trust accounts, providing multi-currency setup and ultimate privacy."}
                </p>
              </div>

              <div className="space-y-3">
                <div className="w-12 h-12 rounded-full bg-metal-gold/10 border border-metal-gold/30 flex items-center justify-center text-metal-gold mx-auto md:mx-0">
                  <Sparkles size={22} />
                </div>
                <h4 className="text-lg font-bold text-slate-200 font-serif">
                  {lang === "zh" ? "3. 私人銀行級定製" : lang === "cn" ? "3. 私人银行级定制" : "3. Private Banking Bespoke"}
                </h4>
                <p className="text-xs text-slate-400 font-light leading-relaxed">
                  {lang === "zh"
                    ? "打破傳統信託的高昂門檻，為每位客戶量身定制靈活的信託條款，並獨家提供定存資產授信、聯名信用卡與全球賬單支付代繳等尊榮服務。"
                    : lang === "cn"
                    ? "打破传统信托的高昂门槛，为每位客户量身定制灵活的信托条款，并独家提供定存资产授信、联名信用卡与全球账单支付代缴等尊荣服务。"
                    : "Breaking traditional high trustee thresholds, tailoring flexible clauses, and exclusively offering asset-linked co-branded cards and global bill escrow services."}
                </p>
              </div>

            </div>
          </div>

        </div>

      </div>
    </Layout>
  );
}
