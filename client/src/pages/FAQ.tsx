import { useState, useEffect } from "react";
import { HelpCircle, ChevronDown, BookOpen, ShieldCheck, Landmark } from "lucide-react";
import Layout from "@/components/Layout";
import { t } from "@/lib/translations";

export default function FAQ() {
  const [lang, setLang] = useState<"zh" | "en">("zh");
  const [openIndex, setOpenOpenIndex] = useState<number | null>(0);

  useEffect(() => {
    const savedLang = localStorage.getItem("dilliz_lang");
    if (savedLang === "zh" || savedLang === "en") {
      setLang(savedLang);
    }

    const handleLangChange = () => {
      const updatedLang = localStorage.getItem("dilliz_lang");
      if (updatedLang === "zh" || updatedLang === "en") {
        setLang(updatedLang);
      }
    };

    window.addEventListener("dilliz_lang_changed", handleLangChange);
    return () => window.removeEventListener("dilliz_lang_changed", handleLangChange);
  }, []);

  const toggleAccordion = (idx: number) => {
    setOpenOpenIndex(openIndex === idx ? null : idx);
  };

  const faqs = [
    { q: t("faq.q1", lang), a: t("faq.a1", lang) },
    { q: t("faq.q2", lang), a: t("faq.a2", lang) },
    { q: t("faq.q3", lang), a: t("faq.a3", lang) },
    { q: t("faq.q4", lang), a: t("faq.a4", lang) },
    { q: t("faq.q5", lang), a: t("faq.a5", lang) }
  ];

  return (
    <Layout>
      <div className="py-20 bg-[#1a1a1a] relative overflow-hidden">
        
        {/* 背景裝飾 */}
        <div className="absolute top-0 right-1/3 w-[500px] h-[500px] bg-metal-gold/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-4xl mx-auto px-6 space-y-16">
          
          {/* 頁面標題 */}
          <div className="text-center space-y-4">
            <span className="text-xs font-bold tracking-[0.25em] text-metal-gold uppercase block">Knowledge Base</span>
            <h1 className="text-4xl md:text-5xl font-bold text-metal-gold font-serif leading-tight">
              {t("faq.title", lang)}
            </h1>
            <p className="text-slate-300 font-light leading-relaxed max-w-2xl mx-auto text-sm md:text-base">
              {t("faq.subtitle", lang)}
            </p>
          </div>

          {/* 專業問答手風琴列表 */}
          <div className="space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div
                  key={idx}
                  className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden transition-all duration-300 hover:border-metal-gold/30"
                >
                  {/* 問答頭部 (Button) */}
                  <button
                    onClick={() => toggleAccordion(idx)}
                    className="w-full px-6 py-5 md:px-8 md:py-6 flex items-center justify-between text-left gap-4"
                  >
                    <span className="text-sm md:text-base font-bold text-slate-200 font-serif hover:text-metal-gold transition-colors">
                      {faq.q}
                    </span>
                    <ChevronDown
                      size={18}
                      className={`text-metal-gold shrink-0 transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {/* 問答展開內容 */}
                  <div
                    className={`transition-all duration-300 ease-in-out overflow-hidden ${
                      isOpen ? "max-h-[500px] border-t border-white/5" : "max-h-0"
                    }`}
                  >
                    <div className="px-6 py-5 md:px-8 md:py-6 bg-[#2b2b2b]/30 text-xs md:text-sm text-slate-300 leading-relaxed font-light space-y-4">
                      <p>{faq.a}</p>
                    </div>
                  </div>

                </div>
              );
            })}
          </div>

          {/* 額外合規宣告與牌照資訊 */}
          <div className="bg-[#2b2b2b] border border-metal-gold/20 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center gap-6 shadow-gold-glow">
            <div className="w-12 h-12 rounded-full bg-metal-gold/10 border border-metal-gold/30 flex items-center justify-center text-metal-gold shrink-0">
              <ShieldCheck size={24} />
            </div>
            <div className="space-y-1 text-center md:text-left">
              <h4 className="text-sm font-bold text-slate-200 font-serif">
                {lang === "zh" ? "合規合約與反洗錢 (AML) 聲明" : "Compliance & AML Statement"}
              </h4>
              <p className="text-xs text-slate-400 font-light leading-relaxed">
                {lang === "zh"
                  ? "帝力斯資本信託嚴格遵守香港《打擊洗錢及恐怖分子資金籌集條例》（第 615 章）及香港公司註冊處 TCSP 牌照規範。所有客戶均需通過嚴格的 KYC (認識您的客戶) 審查與合規背景調查，以確保資金來源合法合規，維護信託體系的極致安全與合規信譽。"
                  : "Dilliz Capital Trust strictly complies with Cap. 615 Anti-Money Laundering Ordinance of HK and TCSP regulations. All settlors must pass rigorous KYC & AML screening to ensure legitimacy and preserve the integrity of our trust systems."}
              </p>
            </div>
          </div>

        </div>

      </div>
    </Layout>
  );
}
