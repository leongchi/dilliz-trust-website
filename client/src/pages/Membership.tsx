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
      offshore: t("membership.t1.offshore", lang),
      billpay: t("membership.t1.billpay", lang),
      service: t("membership.t1.service", lang),
      features: [
        lang === "zh" ? "信託賬戶設立基礎託管" : lang === "cn" ? "信托账户设立基础托管" : "Basic trust account setup",
        lang === "zh" ? "資產法律隔離保護" : lang === "cn" ? "资产法律隔离保护" : "Asset legal isolation",
        lang === "zh" ? "定存基本收益保障" : lang === "cn" ? "定存基本收益保障" : "Basic deposit yield"
      ],
      isPopular: false
    },
    {
      id: "t2",
      name: t("membership.t2.name", lang),
      icon: Shield,
      threshold: t("membership.t2.threshold", lang),
      duration: t("membership.t2.duration", lang),
      offshore: t("membership.t2.offshore", lang),
      billpay: t("membership.t2.billpay", lang),
      service: t("membership.t2.service", lang),
      features: [
        lang === "zh" ? "標準已包括基礎所有權益" : lang === "cn" ? "标准已包括基础所有权益" : "Standard includes all Basic rights",
        lang === "zh" ? "專屬全球銀行開戶快速通道" : lang === "cn" ? "专属全球银行开户快速通道" : "Fast-track global bank opening",
        lang === "zh" ? "全球賬單託管代繳服務" : lang === "cn" ? "全球账单托管代缴服务" : "Global bill escrow services",
        lang === "zh" ? "尊享定存特惠收益率" : lang === "cn" ? "尊享定存特惠收益率" : "Preferential deposit yield"
      ],
      isPopular: false
    },
    {
      id: "t3",
      name: t("membership.t3.name", lang),
      icon: Award,
      threshold: t("membership.t3.threshold", lang),
      duration: t("membership.t3.duration", lang),
      offshore: t("membership.t3.offshore", lang),
      billpay: t("membership.t3.billpay", lang),
      service: t("membership.t3.service", lang),
      features: [
        lang === "zh" ? "尊享已包括標準所有權益" : lang === "cn" ? "尊享已包括标准所有权益" : "Premium includes all Standard rights",
        lang === "zh" ? "完全豁免全球銀行戶口開設行政費" : lang === "cn" ? "完全豁免全球银行户口开设行政费" : "Waived global bank account opening admin fees",
        lang === "zh" ? "資產聯動信用卡授信" : lang === "cn" ? "资产联动信用卡授信" : "Asset-Linked Card",
        lang === "zh" ? "專屬客戶經理（辦公時間）" : lang === "cn" ? "专属客户经理（办公时间）" : "Dedicated relationship manager (Office Hours)",
        lang === "zh" ? "定制化信託受益人條款" : lang === "cn" ? "定制化信托受益人条款" : "Customized trust clauses"
      ],
      isPopular: true
    },
    {
      id: "t4",
      name: t("membership.t4.name", lang),
      icon: Sparkles,
      threshold: t("membership.t4.threshold", lang),
      duration: t("membership.t4.duration", lang),
      offshore: t("membership.t4.offshore", lang),
      billpay: t("membership.t4.billpay", lang),
      service: t("membership.t4.service", lang),
      features: [
        lang === "zh" ? "典藏已包括尊享所有權益" : lang === "cn" ? "典藏已包括尊享所有权益" : "Royal includes all Premium rights",
        lang === "zh" ? "全球資產與股權信託架構定製" : lang === "cn" ? "全球资产与股权信托架构定制" : "Global asset & equity trust design",
        lang === "zh" ? "極致隱私保護與多重信託聯動" : lang === "cn" ? "极致隐私保护与多重信托联动" : "Ultimate privacy & multi-trusts",
        lang === "zh" ? "資深合夥人親自提供諮詢服務" : lang === "cn" ? "资深合伙人亲自提供咨询服务" : "Senior partners consulting",
        lang === "zh" ? "專屬家族辦公室秘書對接" : lang === "cn" ? "专属家族办公室秘书对接" : "Dedicated family office secretary"
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
            <p className="text-slate-300 font-light leading-relaxed">
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
                      {lang === "zh" ? "推薦級別" : lang === "cn" ? "推荐级别" : "RECOMMENDED"}
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
                        <span className="text-xl font-bold text-metal-gold font-serif">
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
                      
                      <div className="flex justify-between items-center py-1 border-b border-white/5">
                        <span className="text-slate-500">{t("membership.offshore", lang)}</span>
                        <span className="text-slate-200">{tier.offshore}</span>
                      </div>

                      <div className="flex justify-between items-center py-1 border-b border-white/5">
                        <span className="text-slate-500">{t("membership.billpay", lang)}</span>
                        <span className="text-slate-200">{tier.billpay}</span>
                      </div>

                      <div className="flex justify-between items-center py-1 border-b border-white/5">
                        <span className="text-slate-500">{t("membership.customerservice", lang)}</span>
                        <span className="text-slate-200">{tier.service}</span>
                      </div>

                    </div>

                    <hr className="border-white/10" />

                    {/* 特色亮點 */}
                    <div className="space-y-3">
                      <span className="text-[10px] text-slate-500 font-bold tracking-wider uppercase block">
                        {lang === "zh" ? "包含權益" : lang === "cn" ? "包含权益" : "Rights Included"}
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
          <div className="text-center">
            <p className="text-xs text-slate-500 font-light italic">
              * {t("membership.brochure.note", lang)}
            </p>
          </div>

        </div>

      </div>
    </Layout>
  );
}
