import { useState, useEffect } from "react";
import { Shield, Landmark, CreditCard, Receipt, Compass, Check, ArrowRight } from "lucide-react";
import Layout from "@/components/Layout";
import { t } from "@/lib/translations";

export default function Services() {
  const [lang, setLang] = useState<"zh" | "en" | "cn">("zh");
  const [activeTab, setActiveTab] = useState("asset");

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace("#", "");
      if (["asset", "trust", "deposit", "finance", "card"].includes(hash)) {
        setActiveTab(hash);
      }
    };

    handleHashChange();
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

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

  const serviceTabs = [
    { id: "asset", name: t("services.tab.asset", lang), icon: Shield },
    { id: "trust", name: t("services.tab.trust", lang), icon: Compass },
    { id: "deposit", name: t("services.tab.deposit", lang), icon: Landmark },
    { id: "finance", name: t("services.tab.finance", lang), icon: CreditCard },
    { id: "card", name: t("services.tab.card", lang), icon: Receipt }
  ];

  const getServiceDetail = () => {
    switch (activeTab) {
      case "asset":
        return {
          title: t("services.asset.title", lang),
          desc: t("services.asset.desc", lang),
          features: [
            t("services.asset.feature1", lang),
            t("services.asset.feature2", lang),
            t("services.asset.feature3", lang)
          ]
        };
      case "trust":
        return {
          title: t("services.trust.title", lang),
          desc: t("services.trust.desc", lang),
          features: [
            t("services.trust.feature1", lang),
            t("services.trust.feature2", lang),
            t("services.trust.feature3", lang)
          ]
        };
      case "deposit":
        return {
          title: t("services.deposit.title", lang),
          desc: t("services.deposit.desc", lang),
          features: [
            t("services.deposit.feature1", lang),
            t("services.deposit.feature2", lang),
            t("services.deposit.feature3", lang)
          ]
        };
      case "finance":
        return {
          title: t("services.finance.title", lang),
          desc: t("services.finance.desc", lang),
          features: [
            t("services.finance.feature1", lang),
            t("services.finance.feature2", lang),
            t("services.finance.feature3", lang)
          ]
        };
      case "card":
        return {
          title: t("services.card.title", lang),
          desc: t("services.card.desc", lang),
          features: [
            t("services.card.feature1", lang),
            t("services.card.feature2", lang),
            t("services.card.feature3", lang)
          ]
        };
      default:
        return { title: "", desc: "", features: [] };
    }
  };

  const detail = getServiceDetail();

  return (
    <Layout>
      <div className="py-20 bg-[#1a1a1a] relative overflow-hidden">
        
        {/* 背景裝飾 */}
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-metal-gold/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 space-y-20">
          
          {/* 頁面標題 */}
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="text-xs font-bold tracking-[0.25em] text-metal-gold uppercase block">Our Services</span>
            <h1 className="text-4xl md:text-5xl font-bold text-metal-gold font-serif leading-tight">
              {t("services.title", lang)}
            </h1>
            <p className="text-slate-300 font-light leading-relaxed">
              {t("services.subtitle", lang)}
            </p>
          </div>

          {/* 核心：五大核心服務交互面板 */}
          <div className="space-y-12">
            
            {/* 服務切換 Tab 按鈕列 */}
            <div className="flex flex-wrap justify-center gap-3 md:gap-4 border-b border-white/5 pb-8">
              {serviceTabs.map((tab) => {
                const IconComponent = tab.icon;
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center gap-2.5 px-6 py-3.5 rounded-full text-xs font-bold tracking-wider transition-all border ${
                      isActive 
                        ? "bg-[#2b2b2b] text-metal-gold border-metal-gold shadow-gold-glow scale-105" 
                        : "bg-white/5 text-slate-300 border-white/10 hover:border-metal-gold/40"
                    }`}
                  >
                    <IconComponent size={14} className={isActive ? "text-metal-gold" : "text-slate-400"} />
                    <span>{tab.name}</span>
                  </button>
                );
              })}
            </div>

            {/* 服務詳情雙欄網格面板 */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
              
              {/* 左側：文字、亮點特色與預約按鈕 */}
              <div className="lg:col-span-7 bg-white/5 backdrop-blur border border-white/10 p-8 md:p-12 rounded-3xl flex flex-col justify-between shadow-gold-glow relative overflow-hidden">
                <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-metal-gold" />
                <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-metal-gold" />

                <div className="space-y-8">
                  <div className="space-y-3">
                    <span className="text-xs font-bold tracking-[0.2em] text-metal-gold uppercase block">DILLIZ BESPOKE TRUST</span>
                    <h3 className="text-2xl md:text-3xl font-bold text-slate-200 font-serif leading-tight">
                      {detail.title}
                    </h3>
                  </div>

                  <p className="text-slate-300 font-light leading-relaxed text-sm md:text-base">
                    {detail.desc}
                  </p>

                  <div className="border-t border-white/10 pt-6 space-y-4">
                    <h4 className="text-xs font-bold tracking-wider text-slate-400 uppercase">
                      {lang === "zh" ? "核心服務優勢" : lang === "cn" ? "核心服务优势" : "Core Advantages"}
                    </h4>
                    <div className="grid grid-cols-1 gap-3.5">
                      {detail.features.map((feat, fIdx) => (
                        <div key={fIdx} className="flex items-start gap-3">
                          <div className="w-5 h-5 rounded-full bg-metal-gold/10 border border-metal-gold/30 flex items-center justify-center text-metal-gold mt-0.5 shrink-0">
                            <Check size={12} className="text-metal-gold" />
                          </div>
                          <span className="text-slate-200 text-sm font-medium">{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-8 border-t border-white/10 mt-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <span className="text-[10px] text-slate-400 font-light italic">
                    {lang === "zh" ? "* 服務具體條款與操作細節，請預約專屬客戶專員洽詢" : lang === "cn" ? "* 服务具体条款与操作细节，请预约专属客户专员洽询" : "* Specific terms and details, please book a private manager"}
                  </span>
                  <a href="/contact" className="btn-gold text-center py-3 px-8 font-bold text-xs tracking-wider inline-flex items-center justify-center gap-2">
                    {t("nav.book", lang)} <ArrowRight size={14} />
                  </a>
                </div>
              </div>

              {/* 右側：根據 activeTab 動態渲染的高品質無人像背景圖（契合宣傳冊高奢調性） */}
              <div className="lg:col-span-5 relative group rounded-3xl overflow-hidden border border-white/10 shadow-luxury min-h-[400px] lg:min-h-auto">
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] via-transparent to-transparent z-10 opacity-60" />
                <img 
                  src={
                    activeTab === "asset" ? "/manus-storage/luxury_office_2c65c509.jpg" :
                    activeTab === "trust" ? "/manus-storage/trust_concept.png" :
                    activeTab === "deposit" ? "/manus-storage/hk_skyline.jpg" :
                    activeTab === "finance" ? "/manus-storage/credit_card.png" :
                    "/manus-storage/handshake_aa0be52f.jpg"
                  } 
                  alt="DILLIZ Service Illustration" 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* 浮動水印 */}
                <div className="absolute bottom-8 left-8 right-8 z-20 space-y-1">
                  <span className="text-[10px] font-bold tracking-widest text-metal-gold uppercase">DILLIZ TRUST</span>
                  <h4 className="text-lg font-bold text-white font-serif">
                    {activeTab === "asset" && (lang === "zh" ? "資產託管 · 法律隔離" : lang === "cn" ? "资产托管 · 法律隔离" : "Asset Custody & Legal Isolation")}
                    {activeTab === "trust" && (lang === "zh" ? "稅務優化 · 家族傳承" : lang === "cn" ? "税务优化 · 家族传承" : "Tax Optimization & Succession")}
                    {activeTab === "deposit" && (lang === "zh" ? "全球賬戶 · 安全便捷" : lang === "cn" ? "全球账户 · 安全便捷" : "Global Accounts & Security")}
                    {activeTab === "finance" && (lang === "zh" ? "資產聯動 · 尊貴特權" : lang === "cn" ? "资产联动 · 尊贵特权" : "Asset-Linked Co-brand Card")}
                    {activeTab === "card" && (lang === "zh" ? "賬單代付 · 全球代繳" : lang === "cn" ? "账单代付 · 全球代缴" : "Global Bill Escrow")}
                  </h4>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </Layout>
  );
}
