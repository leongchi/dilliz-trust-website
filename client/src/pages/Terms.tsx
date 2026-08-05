import { useState, useEffect } from "react";
import { Shield, FileText, Check } from "lucide-react";
import Layout from "@/components/Layout";
import { t } from "@/lib/translations";

export default function Terms() {
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
      {/* 條款內容區 */}
      <main className="max-w-4xl mx-auto px-6 py-20 space-y-12">
        {/* 標題 */}
        <div className="text-center space-y-4 border-b border-white/10 pb-10">
          <div className="w-16 h-16 rounded-full bg-metal-gold/10 border border-metal-gold/30 flex items-center justify-center text-metal-gold mx-auto shadow-gold-glow">
            <Shield size={32} />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-metal-gold font-serif">
            {t("inline.terms.0", lang)}
          </h1>
          <p className="text-xs text-slate-400 font-light tracking-wider">
            {t("inline.terms.1", lang)}
          </p>
        </div>

        {/* 專業合規內容 */}
        <div className="space-y-8 text-slate-300 font-light text-sm md:text-base leading-relaxed">
          
          {/* 1. 總則 */}
          <section className="space-y-4 bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 shadow-gold-glow">
            <h2 className="text-xl font-bold text-metal-gold font-serif flex items-center gap-3">
              <span className="text-sm bg-metal-gold/10 text-metal-gold w-6 h-6 rounded-full flex items-center justify-center font-bold">1</span>
              {t("inline.terms.2", lang)}
            </h2>
            <div className="space-y-3">
              <p>
                {t("inline.terms.3", lang)}
              </p>
              <p>
                {t("inline.terms.4", lang)}
              </p>
            </div>
          </section>

          {/* 2. 受託人職責與合規 */}
          <section className="space-y-4 bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 shadow-gold-glow">
            <h2 className="text-xl font-bold text-metal-gold font-serif flex items-center gap-3">
              <span className="text-sm bg-metal-gold/10 text-metal-gold w-6 h-6 rounded-full flex items-center justify-center font-bold">2</span>
              {t("inline.terms.5", lang)}
            </h2>
            <div className="space-y-3">
              <p>
                {t("inline.terms.6", lang)}
              </p>
              <p>
                {t("inline.terms.7", lang)}
              </p>
            </div>
          </section>

          {/* 3. 服務範疇限制 */}
          <section className="space-y-4 bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 shadow-gold-glow">
            <h2 className="text-xl font-bold text-metal-gold font-serif flex items-center gap-3">
              <span className="text-sm bg-metal-gold/10 text-metal-gold w-6 h-6 rounded-full flex items-center justify-center font-bold">3</span>
              {t("inline.terms.8", lang)}
            </h2>
            <div className="space-y-3">
              <p>
                {t("inline.terms.9", lang)}
              </p>
              <p>
                {t("inline.terms.10", lang)}
              </p>
            </div>
          </section>

          {/* 4. 免責聲明 */}
          <section className="space-y-4 bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 shadow-gold-glow">
            <h2 className="text-xl font-bold text-metal-gold font-serif flex items-center gap-3">
              <span className="text-sm bg-metal-gold/10 text-metal-gold w-6 h-6 rounded-full flex items-center justify-center font-bold">4</span>
              {t("inline.terms.11", lang)}
            </h2>
            <div className="space-y-3">
              <p>
                {t("inline.terms.12", lang)}
              </p>
            </div>
          </section>

          {/* 5. 司法管轄權 */}
          <section className="space-y-4 bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 shadow-gold-glow">
            <h2 className="text-xl font-bold text-metal-gold font-serif flex items-center gap-3">
              <span className="text-sm bg-metal-gold/10 text-metal-gold w-6 h-6 rounded-full flex items-center justify-center font-bold">5</span>
              {t("inline.terms.13", lang)}
            </h2>
            <div className="space-y-3">
              <p>
                {t("inline.terms.14", lang)}
              </p>
            </div>
          </section>

        </div>

        {/* 底部印章 */}
        <div className="pt-10 border-t border-white/10 text-center text-xs text-slate-500 space-y-2">
          <p>© 2026 DILLIZ CAPITAL TRUST LIMITED. All rights reserved.</p>
          <p>{t("inline.terms.15", lang)}</p>
        </div>
      </main>
    </Layout>
  );
}
