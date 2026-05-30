import { useState } from "react";
import { Shield, ArrowLeft, Globe, FileText, Check } from "lucide-react";

export default function Terms() {
  const [lang, setLang] = useState<"zh" | "en">("zh");

  const toggleLang = () => {
    setLang(lang === "zh" ? "en" : "zh");
  };

  return (
    <div className="min-h-screen bg-[#030914] text-slate-100 font-sans selection:bg-metal-gold selection:text-[#071426]">
      {/* 頂部導航欄 */}
      <header className="sticky top-0 z-50 bg-[#071426] border-b border-white/5 backdrop-blur-md shadow-md">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <a href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-lg bg-metal-gold/10 border border-metal-gold/30 flex items-center justify-center text-metal-gold transition-all group-hover:border-metal-gold">
              <ArrowLeft size={20} />
            </div>
            <span className="text-sm font-bold text-slate-300 group-hover:text-metal-gold transition-colors">
              {lang === "zh" ? "返回首頁" : "Back to Home"}
            </span>
          </a>

          {/* 語言切換 */}
          <button 
            onClick={toggleLang}
            className="flex items-center gap-2 px-4 py-2 rounded-full border border-metal-gold text-xs font-bold text-metal-gold hover:bg-metal-gold/10 transition-all shadow-gold-glow"
          >
            <Globe size={14} />
            <span>{lang === "zh" ? "ENGLISH" : "繁體中文"}</span>
          </button>
        </div>
      </header>

      {/* 條款內容區 */}
      <main className="max-w-4xl mx-auto px-6 py-20 space-y-12">
        {/* 標題 */}
        <div className="text-center space-y-4 border-b border-white/10 pb-10">
          <div className="w-16 h-16 rounded-full bg-metal-gold/10 border border-metal-gold/30 flex items-center justify-center text-metal-gold mx-auto shadow-gold-glow">
            <Shield size={32} />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-metal-gold font-serif">
            {lang === "zh" ? "使用條款" : "Terms & Conditions"}
          </h1>
          <p className="text-xs text-slate-400 font-light tracking-wider">
            {lang === "zh" ? "最後更新日期：2026年5月30日" : "Last Updated: May 30, 2026"}
          </p>
        </div>

        {/* 專業合規內容 */}
        <div className="space-y-8 text-slate-300 font-light text-sm md:text-base leading-relaxed">
          
          {/* 1. 總則 */}
          <section className="space-y-4 bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 shadow-gold-glow">
            <h2 className="text-xl font-bold text-metal-gold font-serif flex items-center gap-3">
              <span className="text-sm bg-metal-gold/10 text-metal-gold w-6 h-6 rounded-full flex items-center justify-center font-bold">1</span>
              {lang === "zh" ? "總則與法律地位" : "General & Legal Status"}
            </h2>
            <div className="space-y-3">
              <p>
                {lang === "zh" 
                  ? "歡迎訪問帝力斯資本信託有限公司（以下簡稱「本公司」或「我們」）官方網站。本公司是一家在香港合法註冊並持有信託或公司服務提供者牌照（牌照號碼：TC010540）的持牌機構。訪問、瀏覽或使用本網站，即表示您已閱讀、理解並同意接受本條款之約束。"
                  : "Welcome to the official website of Dilliz Capital Trust Limited (hereinafter referred to as 'the Company' or 'we'). The Company is a licensed entity legally registered in Hong Kong holding a Trust or Company Service Provider License (License No. TC010540). By accessing, browsing, or using this website, you acknowledge that you have read, understood, and agree to be bound by these Terms."}
              </p>
              <p>
                {lang === "zh"
                  ? "本網站所載之所有資訊及服務均受香港特別行政區法律管轄。本網站的內容僅供一般參考之用，不構成任何法律、稅務、財務、投資或專業建議。"
                  : "All information and services on this website are governed by the laws of the Hong Kong Special Administrative Region. The content of this website is for general informational purposes only and does not constitute legal, tax, financial, investment, or professional advice."}
              </p>
            </div>
          </section>

          {/* 2. 受託人職責與合規 */}
          <section className="space-y-4 bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 shadow-gold-glow">
            <h2 className="text-xl font-bold text-metal-gold font-serif flex items-center gap-3">
              <span className="text-sm bg-metal-gold/10 text-metal-gold w-6 h-6 rounded-full flex items-center justify-center font-bold">2</span>
              {lang === "zh" ? "受託人職責與合規承諾" : "Fiduciary Duties & Compliance"}
            </h2>
            <div className="space-y-3">
              <p>
                {lang === "zh"
                  ? "作為持牌受託人，我們嚴格遵守香港《信託條例》（第29章）及其他相關法律法規，對信託資產履行最高的受託人職責（Fiduciary Duties），包括誠實信用、謹慎管理、避免利益衝突以及維護受益人最大權益。"
                  : "As a licensed trustee, we strictly adhere to the Trustee Ordinance (Cap. 29) of Hong Kong and other relevant laws and regulations, performing the highest fiduciary duties, including honesty, prudent management, avoidance of conflicts of interest, and safeguarding the best interests of beneficiaries."}
              </p>
              <p>
                {lang === "zh"
                  ? "我們嚴格執行香港打擊洗錢及恐怖分子資金籌集之合規標準。在建立任何正式信託或諮詢關係前，客戶必須配合本公司進行「了解您的客戶」（KYC）及資金來源（SOF）審查。"
                  : "We strictly enforce Hong Kong anti-money laundering (AML) and counter-terrorist financing compliance standards. Before establishing any formal trust or advisory relationship, clients must cooperate with our 'Know Your Customer' (KYC) and Source of Funds (SOF) verifications."}
              </p>
            </div>
          </section>

          {/* 3. 服務範疇限制 */}
          <section className="space-y-4 bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 shadow-gold-glow">
            <h2 className="text-xl font-bold text-metal-gold font-serif flex items-center gap-3">
              <span className="text-sm bg-metal-gold/10 text-metal-gold w-6 h-6 rounded-full flex items-center justify-center font-bold">3</span>
              {lang === "zh" ? "服務範疇與諮詢性質" : "Scope of Services & Consultations"}
            </h2>
            <div className="space-y-3">
              <p>
                {lang === "zh"
                  ? "本網站所展示的信託、財富傳承、資產保護及定存等服務，均需根據客戶的具體情況進行定制，並最終以雙方正式簽署的信託契約（Trust Deed）或服務協議為準。"
                  : "The trust, wealth succession, asset protection, and fixed deposit services displayed on this website are subject to customization based on each client's specific circumstances, and are ultimately governed by the formal Trust Deed or Service Agreement signed by both parties."}
              </p>
              <p>
                {lang === "zh"
                  ? "通過本網站預約的「專屬諮詢」屬於初步意向交流，不代表信託關係的成立，亦不產生任何受託人法律責任。正式信託關係的成立需通過本公司合規委員會的審核。"
                  : "The 'Exclusive Consultation' booked through this website is an initial exchange of intent, does not represent the establishment of a trust relationship, and does not generate any fiduciary liabilities. The formal establishment of a trust relationship is subject to the approval of our Compliance Committee."}
              </p>
            </div>
          </section>

          {/* 4. 免責聲明 */}
          <section className="space-y-4 bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 shadow-gold-glow">
            <h2 className="text-xl font-bold text-metal-gold font-serif flex items-center gap-3">
              <span className="text-sm bg-metal-gold/10 text-metal-gold w-6 h-6 rounded-full flex items-center justify-center font-bold">4</span>
              {lang === "zh" ? "免責聲明" : "Disclaimers"}
            </h2>
            <div className="space-y-3">
              <p>
                {lang === "zh"
                  ? "本公司盡力確保本網站所載資訊的準確性，但對於因使用或依賴本網站資訊而導致的任何直接或間接損失，本公司不承擔任何法律責任。資產配置、信託架構及金融定存均存在一定的市場、稅務及法規變動風險，歷史業績不代表未來表現。"
                  : "The Company endeavors to ensure the accuracy of the information contained on this website, but accepts no liability for any direct or indirect loss resulting from the use of or reliance on such information. Asset allocation, trust structuring, and fixed deposits are subject to market, tax, and regulatory risks, and historical performance is not indicative of future results."}
              </p>
            </div>
          </section>

          {/* 5. 司法管轄權 */}
          <section className="space-y-4 bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 shadow-gold-glow">
            <h2 className="text-xl font-bold text-metal-gold font-serif flex items-center gap-3">
              <span className="text-sm bg-metal-gold/10 text-metal-gold w-6 h-6 rounded-full flex items-center justify-center font-bold">5</span>
              {lang === "zh" ? "司法管轄權" : "Governing Law & Jurisdiction"}
            </h2>
            <div className="space-y-3">
              <p>
                {lang === "zh"
                  ? "本使用條款受香港特別行政區法律管轄並按其解釋。因本網站或本條款引起之任何爭議，應提交香港法院專屬管轄。"
                  : "These Terms and Conditions shall be governed by and construed in accordance with the laws of the Hong Kong Special Administrative Region. Any disputes arising from this website or these Terms shall be subject to the exclusive jurisdiction of the courts of Hong Kong."}
              </p>
            </div>
          </section>

        </div>

        {/* 底部印章 */}
        <div className="pt-10 border-t border-white/10 text-center text-xs text-slate-500 space-y-2">
          <p>© 2026 DILLIZ CAPITAL TRUST LIMITED. All rights reserved.</p>
          <p>{lang === "zh" ? "香港持牌信託服務公司 · 牌照號碼: TC010540" : "Licensed Trust Company in HK · License No. TC010540"}</p>
        </div>
      </main>
    </div>
  );
}
