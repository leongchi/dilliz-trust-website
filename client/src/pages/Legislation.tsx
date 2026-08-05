import { useState, useEffect } from "react";
import { Scale, ExternalLink } from "lucide-react";
import Layout from "@/components/Layout";
import { t } from "@/lib/translations";

interface LegislationItem {
  chapter?: string;
  name: { zh: string; en: string; cn: string };
  url: string;
}

const legislations: LegislationItem[] = [
  { chapter: "29", name: { zh: "受託人條例", en: "Trustee Ordinance", cn: "受托人条例" }, url: "https://www.elegislation.gov.hk/hk/cap29!zh-Hant-HK.pdf" },
  { chapter: "76", name: { zh: "信託承認條例", en: "Recognition of Trusts Ordinance", cn: "信托承认条例" }, url: "https://www.elegislation.gov.hk/hk/cap76!en-zh-Hant-HK?INDEX_CS=N" },
  { chapter: "257", name: { zh: "財產恒繼及收益累積條例", en: "Perpetuities and Accumulations Ordinance", cn: "财产恒继及收益累积条例" }, url: "https://www.elegislation.gov.hk/hk/cap257!en-zh-Hant-HK.pdf" },
  { chapter: "486", name: { zh: "個人資料（私隱）條例", en: "Personal Data (Privacy) Ordinance", cn: "个人资料（私隐）条例" }, url: "https://www.elegislation.gov.hk/hk/cap486!zh-Hant-HK.pdf" },
  { chapter: "537", name: { zh: "聯合國制裁條例", en: "United Nations Sanctions Ordinance", cn: "联合国制裁条例" }, url: "https://www.elegislation.gov.hk/hk/cap537!zh-Hant-HK.pdf" },
  { chapter: "575", name: { zh: "聯合國（反恐怖主義措施）條例", en: "United Nations (Anti-Terrorism Measures) Ordinance", cn: "联合国（反恐怖主义措施）条例" }, url: "https://www.elegislation.gov.hk/hk/cap575!zh-Hant-HK.pdf" },
  { chapter: "615", name: { zh: "打擊洗錢及恐怖分子資金籌集條例", en: "Anti-Money Laundering and Counter-Terrorist Financing Ordinance", cn: "打击洗钱及恐怖分子资金筹集条例" }, url: "https://www.elegislation.gov.hk/hk/cap615!zh-Hant-HK.pdf" },
  { chapter: "622", name: { zh: "公司條例", en: "Companies Ordinance", cn: "公司条例" }, url: "https://www.elegislation.gov.hk/hk/cap622!zh-Hant-HK.pdf" },
];

const guidelines: LegislationItem[] = [
  { name: { zh: "信託或公司服務提供者遵從打擊洗錢及恐怖分子資金籌集規定的指引", en: "Guideline on Compliance of AML/CFT Requirements for Trust or Company Service Providers", cn: "信托或公司服务提供者遵从打击洗钱及恐怖分子资金筹集规定的指引" }, url: "https://www.tcsp.cr.gov.hk/tcspls/portal/guide/62/chi-t/TCSP_G2-c.pdf" },
  { name: { zh: "打擊洗錢及恐怖分子資金籌集指引（認可機構適用）", en: "Guideline on AML/CFT (For Authorized Institutions)", cn: "打击洗钱及恐怖分子资金筹集指引（认可机构适用）" }, url: "https://www.hkma.gov.hk/media/chi/doc/key-information/guidelines-and-circular/guideline/g33.pdf" },
  { name: { zh: "OECD — 共同申報準則 (CRS)", en: "OECD — Common Reporting Standard (CRS)", cn: "OECD — 共同申报准则 (CRS)" }, url: "https://www.ird.gov.hk/chi/tax/dta_aeoi.htm" },
  { name: { zh: "自動交換財務帳戶資料 (AEOI)", en: "Automatic Exchange of Financial Account Information (AEOI)", cn: "自动交换财务帐户资料 (AEOI)" }, url: "https://www.ird.gov.hk/chi/faq/dta_aeoi.htm" },
  { name: { zh: "海牙信託公約", en: "Hague Convention on Trusts", cn: "海牙信托公约" }, url: "https://assets.hcch.net/docs/859c307f-f3bd-4d4b-b44f-3f46fdf4841d.pdf" },
];

const others: LegislationItem[] = [
  { name: { zh: "信託或公司服務提供商 (TCSP) 牌照制度", en: "Trust or Company Service Provider (TCSP) Licensing Regime", cn: "信托或公司服务提供商 (TCSP) 牌照制度" }, url: "https://www.tcsp.cr.gov.hk/tcspls/portal/guide/59/chi-t/TCSP_G1-c.pdf" },
  { name: { zh: "稅務局 — 申報稅務管轄區", en: "IRD — Reportable Jurisdictions", cn: "税务局 — 申报税务管辖区" }, url: "https://www.ird.gov.hk/chi/tax/aeoi/rpt_jur.htm" },
];

export default function Legislation() {
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

  const pageTitle = { zh: "法規與合規", en: "Legislation & Compliance", cn: "法规与合规" };
  const pageSubtitle = { zh: "帝力斯資本信託有限公司嚴格遵守香港特別行政區所有適用的法律、法規及行業守則，確保為客戶提供合法、合規且值得信賴的信託服務。", en: "Dilliz Capital Trust Limited strictly complies with all applicable laws, regulations and industry guidelines in the Hong Kong SAR, ensuring lawful, compliant and trustworthy trust services for our clients.", cn: "帝力斯资本信托有限公司严格遵守香港特别行政区所有适用的法律、法规及行业守则，确保为客户提供合法、合规且值得信赖的信托服务。" };
  const introText = { zh: "根據《受託人條例》（第29章）第3A條，帝力斯資本信託有限公司必須遵守所規定的法定謹慎責任。我們履行條例第8部分第77(2)節的受託人執照要求，在政府庫務署存入了規定的存款。我們非常重視我們的法律責任與合規義務。", en: "Pursuant to Section 3A of the Trustee Ordinance (Cap. 29), Dilliz Capital Trust Limited must comply with the statutory duty of care as prescribed. We fulfill the trustee license requirements under Section 77(2) of Part 8 of the Ordinance by depositing the required amount with the Government Treasury. We take our legal responsibilities and compliance obligations very seriously.", cn: "根据《受托人条例》（第29章）第3A条，帝力斯资本信托有限公司必须遵守所规定的法定谨慎责任。我们履行条例第8部分第77(2)节的受托人执照要求，在政府库务署存入了规定的存款。我们非常重视我们的法律责任与合规义务。" };
  const sectionLegislation = { zh: "香港法例", en: "Hong Kong Ordinances", cn: "香港法例" };
  const sectionGuidelines = { zh: "行業守則與指引", en: "Industry Guidelines", cn: "行业守则与指引" };
  const sectionOthers = { zh: "其他參考", en: "Other References", cn: "其他参考" };
  const chapterLabel = { zh: "第", en: "Cap.", cn: "第" };
  const chapterSuffix = { zh: "章", en: "", cn: "章" };
  const licenseNote = { zh: "香港持牌信託服務公司 · 牌照號碼: TC010540", en: "Licensed Trust Company in HK · License No. TC010540", cn: "香港持牌信托服务公司 · 牌照号码: TC010540" };

  return (
    <Layout>
      <main className="max-w-4xl mx-auto px-6 py-20 space-y-12">
        {/* 標題 */}
        <div className="text-center space-y-4 border-b border-white/10 pb-10">
          <div className="w-16 h-16 rounded-full bg-metal-gold/10 border border-metal-gold/30 flex items-center justify-center text-metal-gold mx-auto shadow-gold-glow">
            <Scale size={32} />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-metal-gold font-serif">
            {pageTitle[lang]}
          </h1>
          <p className="text-sm text-slate-300 font-light leading-relaxed max-w-2xl mx-auto">
            {pageSubtitle[lang]}
          </p>
        </div>

        {/* 引言 */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 shadow-gold-glow">
          <p className="text-slate-300 font-light text-sm md:text-base leading-relaxed">
            {introText[lang]}
          </p>
        </div>

        {/* 法規列表 */}
        <div className="space-y-10">
          
          {/* 香港法例 */}
          <section className="space-y-4">
            <h2 className="text-xl font-bold text-metal-gold font-serif flex items-center gap-3">
              <span className="w-1 h-6 bg-metal-gold rounded-full" />
              {sectionLegislation[lang]}
            </h2>
            <div className="space-y-2">
              {legislations.map((item, idx) => (
                <a
                  key={idx}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 bg-white/[0.03] hover:bg-white/[0.07] border border-white/10 hover:border-metal-gold/30 rounded-xl px-5 py-4 transition-all duration-200"
                >
                  <span className="text-xs text-metal-gold/70 font-mono whitespace-nowrap min-w-[72px]">
                    {chapterLabel[lang]}{item.chapter}{chapterSuffix[lang]}
                  </span>
                  <span className="text-slate-200 font-light text-sm md:text-base flex-1">
                    {item.name[lang]}
                  </span>
                  <ExternalLink size={14} className="text-slate-500 group-hover:text-metal-gold transition-colors shrink-0" />
                </a>
              ))}
            </div>
          </section>

          {/* 行業守則 */}
          <section className="space-y-4">
            <h2 className="text-xl font-bold text-metal-gold font-serif flex items-center gap-3">
              <span className="w-1 h-6 bg-metal-gold rounded-full" />
              {sectionGuidelines[lang]}
            </h2>
            <div className="space-y-2">
              {guidelines.map((item, idx) => (
                <a
                  key={idx}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 bg-white/[0.03] hover:bg-white/[0.07] border border-white/10 hover:border-metal-gold/30 rounded-xl px-5 py-4 transition-all duration-200"
                >
                  <span className="text-slate-200 font-light text-sm md:text-base flex-1">
                    {item.name[lang]}
                  </span>
                  <ExternalLink size={14} className="text-slate-500 group-hover:text-metal-gold transition-colors shrink-0" />
                </a>
              ))}
            </div>
          </section>

          {/* 其他參考 */}
          <section className="space-y-4">
            <h2 className="text-xl font-bold text-metal-gold font-serif flex items-center gap-3">
              <span className="w-1 h-6 bg-metal-gold rounded-full" />
              {sectionOthers[lang]}
            </h2>
            <div className="space-y-2">
              {others.map((item, idx) => (
                <a
                  key={idx}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 bg-white/[0.03] hover:bg-white/[0.07] border border-white/10 hover:border-metal-gold/30 rounded-xl px-5 py-4 transition-all duration-200"
                >
                  <span className="text-slate-200 font-light text-sm md:text-base flex-1">
                    {item.name[lang]}
                  </span>
                  <ExternalLink size={14} className="text-slate-500 group-hover:text-metal-gold transition-colors shrink-0" />
                </a>
              ))}
            </div>
          </section>

        </div>

        {/* 底部印章 */}
        <div className="pt-10 border-t border-white/10 text-center text-xs text-slate-500 space-y-2">
          <p>&copy; 2026 DILLIZ CAPITAL TRUST LIMITED. All rights reserved.</p>
          <p>{licenseNote[lang]}</p>
        </div>
      </main>
    </Layout>
  );
}
