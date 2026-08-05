import { useState, useEffect } from "react";
import { AlertTriangle, Shield, FileWarning, Scale } from "lucide-react";
import Layout from "@/components/Layout";

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

  const content = {
    title: { zh: "免責聲明與風險披露", en: "Disclaimer & Risk Disclosure", cn: "免责声明与风险披露" },
    subtitle: { zh: "DILLIZ CAPITAL TRUST LIMITED · 帝力斯資本信託有限公司", en: "DILLIZ CAPITAL TRUST LIMITED", cn: "DILLIZ CAPITAL TRUST LIMITED · 帝力斯资本信托有限公司" },

    disclaimerTitle: { zh: "免責聲明", en: "Disclaimer", cn: "免责声明" },
    disclaimer1: { zh: "本網站所載資料僅供一般參考用途，不構成任何法律、稅務、投資、財務或其他專業建議，亦不構成任何要約、招攬或推薦。", en: "The information contained on this website is for general reference purposes only and does not constitute any legal, tax, investment, financial or other professional advice, nor does it constitute any offer, solicitation or recommendation.", cn: "本网站所载资料仅供一般参考用途，不构成任何法律、税务、投资、财务或其他专业建议，亦不构成任何要约、招揽或推荐。" },
    disclaimer2: { zh: "帝力斯資本信託有限公司（「本公司」）已盡合理努力確保本網站所載資料的準確性，但不對其完整性、準確性或時效性作出任何明示或暗示的保證或陳述。本公司保留隨時修改、更新或刪除本網站任何內容的權利，恕不另行通知。", en: "Dilliz Capital Trust Limited (the \"Company\") has made reasonable efforts to ensure the accuracy of the information on this website, but makes no express or implied warranty or representation as to its completeness, accuracy or timeliness. The Company reserves the right to modify, update or delete any content on this website at any time without prior notice.", cn: "帝力斯资本信托有限公司（「本公司」）已尽合理努力确保本网站所载资料的准确性，但不对其完整性、准确性或时效性作出任何明示或暗示的保证或陈述。本公司保留随时修改、更新或删除本网站任何内容的权利，恕不另行通知。" },
    disclaimer3: { zh: "本網站可能包含指向第三方網站的連結，該等連結僅為方便瀏覽而設。本公司對任何第三方網站的內容、隱私政策或做法不承擔任何責任，亦不對因使用或依賴該等網站而產生的任何損失或損害承擔責任。", en: "This website may contain links to third-party websites, which are provided for convenience only. The Company assumes no responsibility for the content, privacy policies or practices of any third-party websites, nor shall it be liable for any loss or damage arising from the use of or reliance on such websites.", cn: "本网站可能包含指向第三方网站的连结，该等连结仅为方便浏览而设。本公司对任何第三方网站的内容、隐私政策或做法不承担任何责任，亦不对因使用或依赖该等网站而产生的任何损失或损害承担责任。" },
    disclaimer4: { zh: "在法律允許的最大範圍內，本公司及其董事、職員、僱員和代理人不對因使用或無法使用本網站或依賴本網站所載資料而引起的任何直接、間接、附帶、特殊或後果性損失或損害承擔任何責任。", en: "To the maximum extent permitted by law, the Company and its directors, officers, employees and agents shall not be liable for any direct, indirect, incidental, special or consequential loss or damage arising from the use of or inability to use this website or reliance on the information contained herein.", cn: "在法律允许的最大范围内，本公司及其董事、职员、雇员和代理人不对因使用或无法使用本网站或依赖本网站所载资料而引起的任何直接、间接、附带、特殊或后果性损失或损害承担任何责任。" },

    riskTitle: { zh: "風險披露", en: "Risk Disclosure", cn: "风险披露" },
    risk1: { zh: "信託服務涉及多種風險，包括但不限於市場風險、流動性風險、信用風險、匯率風險、利率風險及法律風險。信託資產的價值可能會因市場波動而上升或下降，過往表現並不代表將來的回報。", en: "Trust services involve various risks, including but not limited to market risk, liquidity risk, credit risk, exchange rate risk, interest rate risk and legal risk. The value of trust assets may rise or fall due to market fluctuations, and past performance is not indicative of future returns.", cn: "信托服务涉及多种风险，包括但不限于市场风险、流动性风险、信用风险、汇率风险、利率风险及法律风险。信托资产的价值可能会因市场波动而上升或下降，过往表现并不代表将来的回报。" },
    risk2: { zh: "客戶在作出任何信託安排前，應充分了解相關風險，並根據自身的財務狀況、投資目標及風險承受能力作出獨立判斷。本公司強烈建議客戶在作出決定前諮詢獨立的法律、稅務及財務顧問。", en: "Clients should fully understand the relevant risks before making any trust arrangements and make independent judgments based on their own financial situation, investment objectives and risk tolerance. The Company strongly recommends that clients consult independent legal, tax and financial advisors before making decisions.", cn: "客户在作出任何信托安排前，应充分了解相关风险，并根据自身的财务状况、投资目标及风险承受能力作出独立判断。本公司强烈建议客户在作出决定前咨询独立的法律、税务及财务顾问。" },
    risk3: { zh: "跨境信託安排可能受到不同司法管轄區的法律及稅務規定影響。不同國家或地區的法律變更、政策調整或監管行動可能對信託資產的管理及分配產生重大影響。", en: "Cross-border trust arrangements may be subject to the laws and tax regulations of different jurisdictions. Changes in laws, policy adjustments or regulatory actions in different countries or regions may have a material impact on the management and distribution of trust assets.", cn: "跨境信托安排可能受到不同司法管辖区的法律及税务规定影响。不同国家或地区的法律变更、政策调整或监管行动可能对信托资产的管理及分配产生重大影响。" },
    risk4: { zh: "本公司不保證任何信託安排能夠完全達到客戶的預期目標。信託的設立、管理及終止均須遵守適用法律，且可能受到法院命令或監管機構指令的影響。", en: "The Company does not guarantee that any trust arrangement will fully achieve the client's expected objectives. The establishment, management and termination of trusts are subject to applicable laws and may be affected by court orders or regulatory directives.", cn: "本公司不保证任何信托安排能够完全达到客户的预期目标。信托的设立、管理及终止均须遵守适用法律，且可能受到法院命令或监管机构指令的影响。" },

    amlTitle: { zh: "反洗錢聲明", en: "Anti-Money Laundering Statement", cn: "反洗钱声明" },
    aml1: { zh: "本公司嚴格遵守《打擊洗錢及恐怖分子資金籌集條例》（第615章）及相關法規，對所有客戶執行客戶盡職審查（CDD）及持續監察。本公司有權拒絕任何未能通過合規審查的申請，或終止任何涉嫌違反反洗錢規定的業務關係。", en: "The Company strictly complies with the Anti-Money Laundering and Counter-Terrorist Financing Ordinance (Cap. 615) and related regulations, conducting Customer Due Diligence (CDD) and ongoing monitoring for all clients. The Company reserves the right to reject any application that fails compliance checks or terminate any business relationship suspected of violating AML regulations.", cn: "本公司严格遵守《打击洗钱及恐怖分子资金筹集条例》（第615章）及相关法规，对所有客户执行客户尽职审查（CDD）及持续监察。本公司有权拒绝任何未能通过合规审查的申请，或终止任何涉嫌违反反洗钱规定的业务关系。" },

    ipTitle: { zh: "知識產權", en: "Intellectual Property", cn: "知识产权" },
    ip1: { zh: "本網站的所有內容，包括但不限於文字、圖片、標誌、設計、軟件及其排列方式，均為帝力斯資本信託有限公司的財產或已獲授權使用，受香港及國際知識產權法律保護。未經本公司事先書面同意，不得以任何方式複製、修改、分發或使用本網站的任何內容。", en: "All content on this website, including but not limited to text, images, logos, designs, software and their arrangement, is the property of Dilliz Capital Trust Limited or used under license, and is protected by Hong Kong and international intellectual property laws. No content on this website may be reproduced, modified, distributed or used in any manner without the prior written consent of the Company.", cn: "本网站的所有内容，包括但不限于文字、图片、标志、设计、软件及其排列方式，均为帝力斯资本信托有限公司的财产或已获授权使用，受香港及国际知识产权法律保护。未经本公司事先书面同意，不得以任何方式复制、修改、分发或使用本网站的任何内容。" },

    jurisdictionTitle: { zh: "適用法律與司法管轄權", en: "Governing Law & Jurisdiction", cn: "适用法律与司法管辖权" },
    jurisdiction1: { zh: "本免責聲明及風險披露受香港特別行政區法律管轄並按其解釋。因本網站或本聲明引起之任何爭議，應提交香港法院專屬管轄。", en: "This Disclaimer and Risk Disclosure shall be governed by and construed in accordance with the laws of the Hong Kong Special Administrative Region. Any disputes arising from this website or this statement shall be subject to the exclusive jurisdiction of the courts of Hong Kong.", cn: "本免责声明及风险披露受香港特别行政区法律管辖并按其解释。因本网站或本声明引起之任何争议，应提交香港法院专属管辖。" },

    licenseNote: { zh: "香港持牌信託服務公司 · 牌照號碼: TC010540", en: "Licensed Trust Company in HK · License No. TC010540", cn: "香港持牌信托服务公司 · 牌照号码: TC010540" },
  };

  const sections = [
    { icon: <FileWarning size={20} />, title: content.disclaimerTitle, paragraphs: [content.disclaimer1, content.disclaimer2, content.disclaimer3, content.disclaimer4] },
    { icon: <AlertTriangle size={20} />, title: content.riskTitle, paragraphs: [content.risk1, content.risk2, content.risk3, content.risk4] },
    { icon: <Shield size={20} />, title: content.amlTitle, paragraphs: [content.aml1] },
    { icon: <Shield size={20} />, title: content.ipTitle, paragraphs: [content.ip1] },
    { icon: <Scale size={20} />, title: content.jurisdictionTitle, paragraphs: [content.jurisdiction1] },
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
            {content.title[lang]}
          </h1>
          <p className="text-xs text-slate-400 font-light tracking-wider">
            {content.subtitle[lang]}
          </p>
        </div>

        {/* 內容區塊 */}
        <div className="space-y-8 text-slate-300 font-light text-sm md:text-base leading-relaxed">
          {sections.map((section, idx) => (
            <section key={idx} className="space-y-4 bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 shadow-gold-glow">
              <h2 className="text-xl font-bold text-metal-gold font-serif flex items-center gap-3">
                <span className="text-sm bg-metal-gold/10 text-metal-gold w-6 h-6 rounded-full flex items-center justify-center font-bold">{idx + 1}</span>
                {section.title[lang]}
              </h2>
              <div className="space-y-3">
                {section.paragraphs.map((p, pIdx) => (
                  <p key={pIdx}>{p[lang]}</p>
                ))}
              </div>
            </section>
          ))}
        </div>

      </main>
    </Layout>
  );
}
