import { useState } from "react";
import { Shield, ArrowLeft, Globe, Lock, Eye } from "lucide-react";

export default function Privacy() {
  const [lang, setLang] = useState<"zh" | "en">("zh");

  const toggleLang = () => {
    setLang(lang === "zh" ? "en" : "zh");
  };

  return (
    <div className="min-h-screen bg-[#1a1a1a] text-slate-100 font-sans selection:bg-metal-gold selection:text-[#2b2b2b]">
      {/* 頂部導航欄 */}
      <header className="sticky top-0 z-50 bg-[#2b2b2b] border-b border-white/5 backdrop-blur-md shadow-md">
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
            <Lock size={32} />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-metal-gold font-serif">
            {lang === "zh" ? "隱私政策" : "Privacy Policy"}
          </h1>
          <p className="text-xs text-slate-400 font-light tracking-wider">
            {lang === "zh" ? "最後更新日期：2026年5月30日" : "Last Updated: May 30, 2026"}
          </p>
        </div>

        {/* 專業合規內容 */}
        <div className="space-y-8 text-slate-300 font-light text-sm md:text-base leading-relaxed">
          
          {/* 1. 隱私承諾 */}
          <section className="space-y-4 bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 shadow-gold-glow">
            <h2 className="text-xl font-bold text-metal-gold font-serif flex items-center gap-3">
              <span className="text-sm bg-metal-gold/10 text-metal-gold w-6 h-6 rounded-full flex items-center justify-center font-bold">1</span>
              {lang === "zh" ? "隱私保護承諾" : "Our Commitment to Privacy"}
            </h2>
            <div className="space-y-3">
              <p>
                {lang === "zh" 
                  ? "帝力斯資本信託有限公司（以下簡稱「本公司」或「我們」）高度重視客戶的隱私及個人資料安全。我們承諾嚴格遵守香港《個人資料（私隱）條例》（第486章）以及信託行業最高級別的保密義務，保護高淨值客戶及其受益人的資產與身份私密資訊。"
                  : "Dilliz Capital Trust Limited (hereinafter referred to as 'the Company' or 'we') places the highest value on client privacy and data security. We commit to strictly complying with the Personal Data (Privacy) Ordinance (Cap. 486) of Hong Kong and the highest confidentiality obligations of the trust industry to protect the asset and identity privacy of high-net-worth clients and beneficiaries."}
              </p>
            </div>
          </section>

          {/* 2. 資料收集 */}
          <section className="space-y-4 bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 shadow-gold-glow">
            <h2 className="text-xl font-bold text-metal-gold font-serif flex items-center gap-3">
              <span className="text-sm bg-metal-gold/10 text-metal-gold w-6 h-6 rounded-full flex items-center justify-center font-bold">2</span>
              {lang === "zh" ? "個人資料收集與範疇" : "Collection of Personal Data"}
            </h2>
            <div className="space-y-3">
              <p>
                {lang === "zh"
                  ? "當您使用本網站預約諮詢或提交表單時，我們可能會收集您的：姓名、聯絡電話、電子郵件、意向信託服務類型、意向資產規模等。在正式建立信託關係時，根據監管要求，我們還將收集身份證明、住址證明、稅務居民身份及資金來源證明（SOF）。"
                  : "When you use this website to book consultations or submit forms, we may collect your: name, phone number, email address, intended trust service types, and intended asset scale. Upon formally establishing a trust, we will also collect identity proof, proof of address, tax residency status, and source of funds (SOF) as required by regulations."}
              </p>
            </div>
          </section>

          {/* 3. 使用目的 */}
          <section className="space-y-4 bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 shadow-gold-glow">
            <h2 className="text-xl font-bold text-metal-gold font-serif flex items-center gap-3">
              <span className="text-sm bg-metal-gold/10 text-metal-gold w-6 h-6 rounded-full flex items-center justify-center font-bold">3</span>
              {lang === "zh" ? "資料使用目的" : "Purpose of Data Usage"}
            </h2>
            <div className="space-y-3">
              <p>
                {lang === "zh"
                  ? "我們收集的個人資料將嚴格用於以下目的：提供定制化信託諮詢服務、進行客戶身份盡職調查（KYC）、防範洗錢及金融犯罪合規審查、履行受託人日常管理職責，以及向您發送與信託或定存相關的合規通告與重要通知。"
                  : "The personal data we collect will be strictly used for: providing customized trust consultation services, performing client due diligence (KYC), complying with anti-money laundering and financial crime prevention audits, performing daily trustee administrative duties, and sending you regulatory circulars and important notices related to your trust or fixed deposits."}
              </p>
            </div>
          </section>

          {/* 4. 資料安全與保密 */}
          <section className="space-y-4 bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 shadow-gold-glow">
            <h2 className="text-xl font-bold text-metal-gold font-serif flex items-center gap-3">
              <span className="text-sm bg-metal-gold/10 text-metal-gold w-6 h-6 rounded-full flex items-center justify-center font-bold">4</span>
              {lang === "zh" ? "資料安全與國際合規保密" : "Data Security & Global Compliance Confidentiality"}
            </h2>
            <div className="space-y-3">
              <p>
                {lang === "zh"
                  ? "本公司採用銀行級的數據加密傳輸與安全存儲技術，嚴格限制非授權人員訪問您的個人及資產資訊。我們絕不會將您的資料出售、出租或洩露給任何第三方機構。"
                  : "The Company employs bank-grade data encryption and secure storage technologies, strictly restricting unauthorized personnel from accessing your personal and asset information. We will never sell, rent, or disclose your data to any third-party organizations."}
              </p>
              <p>
                {lang === "zh"
                  ? "作為持牌受託機構，我們在遵守本地保密法的同時，嚴格履行與共同申報標準（CRS）及美國外國帳戶稅收合規法案（FATCA）相關的國際合規與申報義務。"
                  : "As a licensed trustee, while adhering to local confidentiality laws, we strictly perform global compliance and reporting obligations under the Common Reporting Standard (CRS) and the Foreign Account Tax Compliance Act (FATCA)."}
              </p>
            </div>
          </section>

          {/* 5. 客戶權利 */}
          <section className="space-y-4 bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 shadow-gold-glow">
            <h2 className="text-xl font-bold text-metal-gold font-serif flex items-center gap-3">
              <span className="text-sm bg-metal-gold/10 text-metal-gold w-6 h-6 rounded-full flex items-center justify-center font-bold">5</span>
              {lang === "zh" ? "客戶資料權利" : "Your Rights Regarding Your Data"}
            </h2>
            <div className="space-y-3">
              <p>
                {lang === "zh"
                  ? "您有權隨時要求查詢、更正或刪除我們所持有的您的個人資料。如需行使上述權利，或對我們的隱私政策有任何疑問，請通過本網站的聯絡電子郵件或電話與我們的合規官（Compliance Officer）聯絡。"
                  : "You have the right to request access to, correction of, or erasure of your personal data held by us at any time. To exercise these rights, or if you have any questions regarding our Privacy Policy, please contact our Compliance Officer via the contact email or phone number listed on this website."}
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
