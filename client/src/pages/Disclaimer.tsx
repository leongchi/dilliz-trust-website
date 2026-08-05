import { useState, useEffect } from "react";
import { AlertTriangle, Shield, FileWarning, Scale } from "lucide-react";
import Layout from "@/components/Layout";
import { t } from "@/lib/translations";

export default function Disclaimer() {
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

  const sections = [
    { icon: <FileWarning size={20} />, titleKey: "disclaimer.s1.title", paragraphKeys: ["disclaimer.s1.p1", "disclaimer.s1.p2", "disclaimer.s1.p3", "disclaimer.s1.p4"] },
    { icon: <AlertTriangle size={20} />, titleKey: "disclaimer.s2.title", paragraphKeys: ["disclaimer.s2.p1", "disclaimer.s2.p2", "disclaimer.s2.p3", "disclaimer.s2.p4"] },
    { icon: <Shield size={20} />, titleKey: "disclaimer.s3.title", paragraphKeys: ["disclaimer.s3.p1"] },
    { icon: <Shield size={20} />, titleKey: "disclaimer.s4.title", paragraphKeys: ["disclaimer.s4.p1"] },
    { icon: <Scale size={20} />, titleKey: "disclaimer.s5.title", paragraphKeys: ["disclaimer.s5.p1"] },
  ];

  return (
    <Layout>
      <main className="max-w-4xl mx-auto px-6 py-20 space-y-12">
        {/* 標題 */}
        <div className="text-center space-y-4 border-b border-white/10 pb-10">
          <div className="w-16 h-16 rounded-full bg-amber-900/20 border border-amber-700/30 flex items-center justify-center text-amber-400 mx-auto">
            <AlertTriangle size={32} />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-metal-gold font-serif">
            {t("disclaimer.title", lang)}
          </h1>
          <p className="text-xs text-slate-400 font-light tracking-wider">
            {t("disclaimer.subtitle", lang)}
          </p>
        </div>

        {/* 內容區塊 */}
        <div className="space-y-8 text-slate-300 font-light text-sm md:text-base leading-relaxed">
          {sections.map((section, idx) => (
            <section key={idx} className="space-y-4 bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 shadow-gold-glow">
              <h2 className="text-xl font-bold text-metal-gold font-serif flex items-center gap-3">
                <span className="text-sm bg-metal-gold/10 text-metal-gold w-6 h-6 rounded-full flex items-center justify-center font-bold">{idx + 1}</span>
                {t(section.titleKey, lang)}
              </h2>
              <div className="space-y-3">
                {section.paragraphKeys.map((key, pIdx) => (
                  <p key={pIdx}>{t(key, lang)}</p>
                ))}
              </div>
            </section>
          ))}
        </div>
      </main>
    </Layout>
  );
}

