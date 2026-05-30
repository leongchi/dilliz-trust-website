export interface TranslationDict {
  [key: string]: {
    zh: string;
    en: string;
  };
}

export const translations: TranslationDict = {
  // Navigation
  "nav.about": { zh: "關於我們", en: "About Us" },
  "nav.services": { zh: "信託服務", en: "Trust Services" },
  "nav.cases": { zh: "真實案例", en: "Case Studies" },
  "nav.membership": { zh: "會員等級", en: "Membership" },
  "nav.faq": { zh: "常見問題", en: "FAQ" },
  "nav.contact": { zh: "聯絡我們", en: "Contact" },
  "nav.portal": { zh: "專屬客戶端登入", en: "Client Portal" },
  "nav.book": { zh: "預約專屬諮詢", en: "Book Consultation" },

  // Hero Section
  "hero.badge": { zh: "香港持牌信託服務公司 · 牌照 TC010540", en: "HK Licensed Trust Service Provider · License TC010540" },
  "hero.title": { zh: "Build A Trust with DILLIZ", en: "Build A Trust with DILLIZ" },
  "hero.subtitle": { zh: "Shape The Future YOU Deserve", en: "Shape The Future YOU Deserve" },
  "hero.desc": { zh: "帝力斯資本信託有限公司（Dilliz Capital Trust Company Limited）總部設於香港，是一家根據香港《打擊洗錢及恐怖分子資金籌集條例》（第 615 章）註冊的持牌信託服務公司。我們專注為全球高淨值客戶提供客製化信託解決方案。", en: "Dilliz Capital Trust Company Limited, headquartered in Hong Kong, is a licensed trust service provider registered under the Anti-Money Laundering and Counter-Terrorist Financing Ordinance (Cap. 615). We specialize in providing bespoke trust solutions for high-net-worth clients globally." },
  "hero.btn.explore": { zh: "探索信託方案", en: "Explore Solutions" },
  "hero.btn.about": { zh: "關於帝力斯信託", en: "About DILLIZ" },

  // Brand Stats
  "stats.protection": { zh: "資產安全保護", en: "Asset Protection" },
  "stats.protection.desc": { zh: "香港普通法系下最嚴格的隱私與法律隔離保護", en: "Strict privacy & asset isolation under HK Common Law" },
  "stats.compliance": { zh: "100% 合規運營", en: "100% Compliant" },
  "stats.compliance.desc": { zh: "持有香港 TCSP 信託牌照，嚴格遵循監管標準", en: "Holding HK TCSP license, strictly adhering to regulatory standards" },
  "stats.bespoke": { zh: "私人定制服務", en: "Bespoke Services" },
  "stats.bespoke.desc": { zh: "專屬客戶經理，一對一量身定制資產傳承架構", en: "Dedicated relationship manager, 1-on-1 tailored inheritance structure" },

  // Core Services
  "services.title": { zh: "核心服務板塊", en: "Core Services" },
  "services.subtitle": { zh: "為您的財富築起安全防線，實現跨代穩健傳承", en: "Building a secure shield for your wealth, achieving robust cross-generation inheritance" },
  "services.tab.asset": { zh: "資產保護", en: "Asset Protection" },
  "services.tab.trust": { zh: "信託託管", en: "Trust Custody" },
  "services.tab.deposit": { zh: "定期存款", en: "Fixed Deposit" },
  "services.tab.finance": { zh: "全球金融", en: "Global Finance" },
  "services.tab.card": { zh: "聯動信用卡", en: "Linked Credit Card" },

  "services.asset.title": { zh: "資產隔離與保護信託", en: "Asset Isolation & Protection Trust" },
  "services.asset.desc": { zh: "透過香港信託獨特的法律架構，將信託資產與委託人的個人資產進行徹底的法律隔離。無論委託人未來面臨何種商業、婚姻或法律風險，信託資產均能受到法律的嚴格保護，不被追索，確保資產的安全無虞。", en: "Through the unique legal structure of Hong Kong trusts, trust assets are completely isolated from the settlor's personal assets. Regardless of future commercial, marital, or legal risks faced by the settlor, the trust assets are strictly protected by law from creditors, ensuring ultimate asset security." },
  "services.asset.feature1": { zh: "徹底的法律隔離保護", en: "Complete legal isolation" },
  "services.asset.feature2": { zh: "規避商業經營與婚姻風險", en: "Mitigate business operation & marital risks" },
  "services.asset.feature3": { zh: "高度隱私，信託資產不公開", en: "High privacy, non-public trust assets" },

  "services.trust.title": { zh: "客製化信託託管與傳承", en: "Bespoke Trust Custody & Inheritance" },
  "services.trust.desc": { zh: "為家族與企業提供量身定制的信託架構。我們根據委託人的意願，靈活設定受益人、分配條件與時間。支援股權、房產、現金、藝術品等多樣化資產託管，實現資產的精準分配與永續傳承，規避繼承爭議。", en: "Tailor-made trust structures for families and enterprises. We flexibly set beneficiaries, distribution conditions, and timing according to the settlor's wishes. Supporting diverse asset custody including equities, real estate, cash, and art, achieving precise distribution and sustainable inheritance while avoiding inheritance disputes." },
  "services.trust.feature1": { zh: "靈活的受益人分配條款", en: "Flexible beneficiary distribution clauses" },
  "services.trust.feature2": { zh: "支持股權、房產等多元資產", en: "Support diverse assets like equities & real estate" },
  "services.trust.feature3": { zh: "避免繁瑣的遺產繼承程序", en: "Avoid tedious probate procedures" },

  "services.deposit.title": { zh: "高收益定期存款託管", en: "High-Yield Fixed Deposit Custody" },
  "services.deposit.desc": { zh: "依託 DILLIZ 的全球銀行合作網絡，為客戶提供遠高於普通零售銀行的定期存款收益率。在信託架構的保護下，客戶的定存資產不僅能享受穩健、高額的利息回報，更能同時享有信託的資產隔離與隱私保護功能，實現資產的保值與增值。", en: "Relying on DILLIZ's global banking partner network, we provide clients with fixed deposit yields significantly higher than ordinary retail banks. Under the protection of the trust structure, clients' fixed deposit assets enjoy robust, high-interest returns, while simultaneously enjoying the asset isolation and privacy protection of the trust, achieving wealth preservation and appreciation." },
  "services.deposit.feature1": { zh: "尊享全球頂尖銀行特優利率", en: "Exclusive premium rates from top global banks" },
  "services.deposit.feature2": { zh: "定存資產兼具信託隔離功能", en: "Fixed deposits combined with trust isolation" },
  "services.deposit.feature3": { zh: "多幣種選擇，靈活對沖風險", en: "Multi-currency options, flexible risk hedging" },

  "services.finance.title": { zh: "全球金融資產配置", en: "Global Financial Asset Allocation" },
  "services.finance.desc": { zh: "為客戶開闢全球投資通道。在信託框架下，客戶可自由配置全球股票、債券、基金、私募股權及大宗商品等金融資產。我們的專業投資團隊提供全球市場洞察與風險管理，幫助客戶在波動的市場中，構建跨區域、跨資產類別的穩健投資組合。", en: "Opening global investment channels for clients. Under the trust framework, clients can freely allocate global financial assets such as equities, bonds, funds, private equity, and commodities. Our professional investment team provides global market insights and risk management, helping clients build robust cross-regional, cross-asset portfolios in volatile markets." },
  "services.finance.feature1": { zh: "一站式全球金融市場通道", en: "One-stop access to global financial markets" },
  "services.finance.feature2": { zh: "專業團隊提供動態資產配置", en: "Professional team providing dynamic asset allocation" },
  "services.finance.feature3": { zh: "信託架構下的免稅與隱私投資", en: "Tax-efficient & private investment under trust" },

  "services.card.title": { zh: "信託聯動尊貴信用卡", en: "Trust-Linked Prestigious Credit Card" },
  "services.card.desc": { zh: "DILLIZ 與全球頂級發卡機構聯手推出專屬聯動信用卡。該卡直接連結客戶的信託資產，為客戶提供極高額度、無憂的全球支付體驗。同時，客戶可享有專屬私人禮賓服務、全球機場貴賓室、頂級酒店禮遇及專屬金融特權，彰顯尊貴身份。", en: "DILLIZ joins hands with top global card issuers to launch an exclusive linked credit card. Directly linked to clients' trust assets, the card provides extremely high credit limits and a worry-free global payment experience. Simultaneously, clients enjoy exclusive private concierge services, global airport lounge access, luxury hotel privileges, and bespoke financial perks, reflecting their prestigious status." },
  "services.card.feature1": { zh: "直接聯動信託資產，額度超群", en: "Directly linked to trust assets, superior limits" },
  "services.card.feature2": { zh: "全球無障礙尊貴支付與提現", en: "Global seamless premium payment & withdrawal" },
  "services.card.feature3": { zh: "24/7 專屬私人禮賓與奢華禮遇", en: "24/7 dedicated private concierge & luxury perks" },

  // Case Studies
  "cases.title": { zh: "真實情境案例分析", en: "Real-world Case Studies" },
  "cases.subtitle": { zh: "深入了解信託如何在複雜的現實生活中保護您的家庭與財富", en: "In-depth understanding of how trusts protect your family and wealth in complex real-life scenarios" },
  
  "cases.c1.badge": { zh: "企業經營風險隔離", en: "Business Risk Isolation" },
  "cases.c1.title": { zh: "企業主面臨債務與訴訟風險", en: "Business Owner Facing Debt & Litigation" },
  "cases.c1.desc": { zh: "一位成功企業家在面臨公司債務糾紛與潛在訴訟前，提前將部分個人財富注入 DILLIZ 保護信託。隨後公司因市場波動面臨重組，由於信託資產已在法律上徹底隔離，其家庭生活與子女教育基金完全未受影響，成功為家庭保留了最後的防線。", en: "Before facing corporate debt disputes and potential litigation, a successful entrepreneur injected part of his personal wealth into a DILLIZ protection trust. Subsequently, the company faced restructuring due to market fluctuations. Because the trust assets were completely isolated legally, his family's livelihood and children's education funds remained entirely unaffected, successfully preserving the final line of defense." },
  
  "cases.c2.badge": { zh: "婚姻變動資產保護", en: "Marital Change Asset Protection" },
  "cases.c2.title": { zh: "子女婚姻變動防範資產外流", en: "Preventing Asset Dilution in Children's Marital Changes" },
  "cases.c2.desc": { zh: "一位高淨值客戶為子女準備了豐厚的婚嫁禮金。為防止未來可能發生的婚姻變動導致財富流失，客戶透過 DILLIZ 設立了子女專屬信託。信託條款規定，資產所有權歸信託所有，子女僅享有定期收益分配權。即便子女未來離婚，這筆財富也不會作為夫妻共同財產被瓜分。", en: "A high-net-worth client prepared a generous wedding dowry for their child. To prevent wealth dilution from potential marital changes in the future, the client established a dedicated trust for the child through DILLIZ. The trust clauses stipulate that the asset ownership belongs to the trust, and the child only enjoys periodic distribution rights. Even if the child divorces in the future, this wealth will not be split as marital property." },
  
  "cases.c3.badge": { zh: "退休與傳承規劃", en: "Retirement & Succession Planning" },
  "cases.c3.title": { zh: "避免繼承紛爭與精準財富傳承", en: "Avoiding Inheritance Disputes & Precise Wealth Succession" },
  "cases.c3.desc": { zh: "一位年邁的創始人擔心自己去世後子女因爭奪遺產而導致家族分裂。他透過 DILLIZ 設立了家族信託，將公司股權與現金注入其中。信託明確規定了子女每月可領取的固定生活費、結婚與生育的專屬獎勵金，以及參與公司運營的股權分紅條件。這不僅保障了財富的永續，也引導了後代的健康成長。", en: "An elderly founder worried that his children would split the family apart by fighting over his estate after his death. He established a family trust through DILLIZ, injecting company shares and cash. The trust clearly stipulated fixed monthly living allowances for the children, exclusive wedding and childbirth incentives, and conditions for company dividend distributions. This not only secured sustainable wealth but also guided the healthy growth of future generations." },
  
  "cases.c4.badge": { zh: "跨境稅務優化", en: "Cross-border Tax Optimization" },
  "cases.c4.title": { zh: "移民前的全球資產稅務規劃", en: "Pre-immigration Global Asset Tax Planning" },
  "cases.c4.desc": { zh: "一位計劃移民高稅率國家的客戶，在移民前將其名下的全球金融資產信託給 DILLIZ。在香港信託不徵收資本利得稅與遺產稅的法律優勢下，客戶成功優化了移民後的稅務結構。信託資產產生的收益無需在目的國申報高額的個人所得稅，實現了財富的合法、高效增值。", en: "A client planning to immigrate to a high-tax country trusted their global financial assets to DILLIZ prior to immigration. Leveraging the legal advantages of Hong Kong trusts (no capital gains tax or estate duty), the client successfully optimized their post-immigration tax structure. The returns generated by the trust assets do not trigger high personal income tax in the destination country, achieving legitimate and highly efficient wealth growth." },
  
  "cases.c5.badge": { zh: "突發意外保障", en: "Emergency Asset Protection" },
  "cases.c5.title": { zh: "家庭支柱突發意外的緊急救助", en: "Emergency Support for sudden loss of Breadwinner" },
  "cases.c5.desc": { zh: "一位客戶作為家庭唯一的經濟支柱，不幸因突發意外陷入深度昏迷。由於其個人銀行賬戶被凍結，家庭面臨巨大的醫療與生活費壓力。幸運的是，他此前在 DILLIZ 設立了信託，並設定了「緊急醫療與生活救助」觸發條款。DILLIZ 作為受託人，立即啟動應急預案，按月向其家人撥付資金，確保了家庭的正常運轉。", en: "A client, the sole breadwinner of his family, unfortunately fell into a deep coma due to a sudden accident. As his personal bank accounts were frozen, the family faced immense medical and living expense pressures. Fortunately, he had previously established a trust with DILLIZ, setting an 'emergency medical and living support' trigger clause. DILLIZ, as trustee, immediately activated the contingency plan and disbursed funds monthly to his family, ensuring the family's normal operation." },
  
  "cases.c6.badge": { zh: "海外資產配置", en: "Offshore Asset Allocation" },
  "cases.c6.title": { zh: "跨境資產配置與隱私保護", en: "Cross-border Asset Allocation & Privacy Protection" },
  "cases.c6.desc": { zh: "一位客戶希望將部分資產配置於海外，但擔憂跨境投資的繁瑣程序與隱私洩露。透過 DILLIZ 設立香港信託後，客戶以信託名義在海外購置了優質物業與金融資產。所有海外資產的登記持有人均為 DILLIZ 信託，客戶的個人身份完全未出現在任何公開登記冊中，既實現了全球化配置，又獲得了極致的隱私保護。", en: "A client wished to allocate part of their assets offshore but worried about tedious cross-border investment procedures and privacy leaks. After establishing a Hong Kong trust through DILLIZ, the client purchased premium properties and financial assets offshore in the name of the trust. The registered holder of all offshore assets is the DILLIZ trust, and the client's personal identity does not appear in any public registers, achieving global allocation while obtaining ultimate privacy protection." },

  // Membership Tiers
  "membership.title": { zh: "尊貴會員等級", en: "Prestigious Membership Tiers" },
  "membership.subtitle": { zh: "量身定制的託管門檻，尊享無與倫比的全球特權", en: "Tailored custody thresholds, enjoying unparalleled global privileges" },
  "membership.btn.select": { zh: "立即申請預約", en: "Apply Now" },
  "membership.threshold": { zh: "託管門檻", en: "Custody Threshold" },
  "membership.services": { zh: "包含服務", en: "Included Services" },
  "membership.privileges": { zh: "專屬特權", en: "Exclusive Privileges" },
  
  "membership.t1.name": { zh: "精選會員 (Select)", en: "Select Member" },
  "membership.t1.threshold": { zh: "10 萬美金起", en: "$100,000 USD" },
  "membership.t1.s1": { zh: "高收益定期存款託管", en: "High-yield fixed deposit custody" },
  "membership.t1.s2": { zh: "基礎資產保護信託", en: "Basic asset protection trust" },
  "membership.t1.p1": { zh: "1對1專屬客服支持", en: "1-on-1 dedicated customer support" },
  "membership.t1.p2": { zh: "多幣種定存特優利率", en: "Multi-currency fixed deposit premium rates" },

  "membership.t2.name": { zh: "優越會員 (Elite)", en: "Elite Member" },
  "membership.t2.threshold": { zh: "50 萬美金起", en: "$500,000 USD" },
  "membership.t2.s1": { zh: "包含精選會員所有服務", en: "Includes all Select services" },
  "membership.t2.s2": { zh: "全球金融資產配置信託", en: "Global financial asset allocation trust" },
  "membership.t2.p1": { zh: "專屬客戶經理服務", en: "Dedicated relationship manager" },
  "membership.t2.p2": { zh: "免費簽發 1 張 DILLIZ 聯動信用卡", en: "1 complimentary DILLIZ Linked Credit Card" },

  "membership.t3.name": { zh: "尊榮會員 (Prestige)", en: "Prestige Member" },
  "membership.t3.threshold": { zh: "100 萬美金起", en: "$1,000,000 USD" },
  "membership.t3.s1": { zh: "包含優越會員所有服務", en: "Includes all Elite services" },
  "membership.t3.s2": { zh: "客製化家族/企業信託架構", en: "Bespoke family/corporate trust structure" },
  "membership.t3.p1": { zh: "24/7 全天候私人禮賓服務", en: "24/7 dedicated private concierge service" },
  "membership.t3.p2": { zh: "全球機場貴賓室無限次免費使用", en: "Unlimited complimentary global airport lounge access" },

  "membership.t4.name": { zh: "私享典藏版 (Royal)", en: "Royal Collector" },
  "membership.t4.threshold": { zh: "300 萬美金起", en: "$3,000,000 USD" },
  "membership.t4.s1": { zh: "包含尊榮會員所有服務", en: "Includes all Prestige services" },
  "membership.t4.s2": { zh: "全球頂級物業與股權信託託管", en: "Global premium property & equity trust custody" },
  "membership.t4.p1": { zh: "私人飛機與奢華遊艇租賃特權", en: "Private jet & luxury yacht charter privileges" },
  "membership.t4.p2": { zh: "尊享 DILLIZ 黑金聯動信用卡（極高額度）", en: "Exclusive DILLIZ Black Gold Card (Superior limits)" },

  // FAQ
  "faq.title": { zh: "常見問題與信託知識庫", en: "Frequently Asked Questions" },
  "faq.subtitle": { zh: "為您解答關於香港信託、資產安全與合規運營的所有疑問", en: "Answering all your questions about Hong Kong trusts, asset security, and compliant operations" },
  
  "faq.q1": { zh: "1. 帝力斯資本信託有限公司（DILLIZ）的牌照資質是什麼？", en: "1. What are the licensing credentials of DILLIZ Capital Trust?" },
  "faq.a1": { zh: "DILLIZ 是一家總部設在香港的持牌信託服務公司，持有香港公司註冊處頒發的「信託或公司服務提供者牌照」（TCSP License），牌照號碼為 TC010540。我們嚴格遵循香港《打擊洗錢及恐怖分子資金籌集條例》（第 615 章）的監管要求，確保所有業務運營 100% 合規、透明且安全。", en: "DILLIZ is a licensed trust service company headquartered in Hong Kong, holding the Trust or Company Service Provider License (TCSP License) issued by the Hong Kong Companies Registry, under License No. TC010540. We strictly comply with the regulatory requirements of the Anti-Money Laundering and Counter-Terrorist Financing Ordinance (Cap. 615) of Hong Kong, ensuring all business operations are 100% compliant, transparent, and secure." },
  
  "faq.q2": { zh: "2. 為什麼選擇香港信託？香港信託有哪些法律優勢？", en: "2. Why choose a Hong Kong trust? What are its legal advantages?" },
  "faq.a2": { zh: "香港作為全球領先的國際金融中心，實行普通法系。香港信託擁有極其完善的法律保障：首先是「資產徹底隔離」，信託資產在法律上不再屬於委託人，能有效規避未來的商業訴訟與債務追索；其次是「極致的隱私保護」，信託契約無需向公眾公開；最後，香港不徵收資本利得稅、贈與稅或遺產稅，是全球財富保護與傳承的首選地。", en: "Hong Kong, as a leading global financial hub, practices the Common Law system. Hong Kong trusts enjoy comprehensive legal protection: firstly, 'complete asset isolation' - trust assets legally no longer belong to the settlor, effectively mitigating future commercial litigation and debt claims; secondly, 'ultimate privacy protection' - trust deeds do not need to be disclosed to the public; lastly, Hong Kong does not levy capital gains tax, gift tax, or estate duty, making it the premier choice for global wealth protection and succession." },
  
  "faq.q3": { zh: "3. DILLIZ 的定期存款託管是如何運作的？為什麼利率更高？", en: "3. How does DILLIZ's fixed deposit custody work? Why are the rates higher?" },
  "faq.a3": { zh: "普通零售客戶在銀行存款只能獲得大眾化利率。而 DILLIZ 作為專業的信託機構，依託龐大的託管資產規模與全球頂尖銀行的戰略合作關係，能夠直接接入批發級的「大額協議存款市場」，從而獲取遠高於普通零售銀行的特優利率。我們將這些高收益回報直接回饋給信託客戶，並在信託架構下為客戶提供資產隔離與隱私保護，實現安全與收益的雙重保障。", en: "Ordinary retail customers can only obtain standard interest rates for bank deposits. As a professional trust institution, DILLIZ leverages its massive scale of custody assets and strategic partnerships with top global banks to directly access the wholesale 'large-sum protocol deposit market', thereby obtaining premium rates significantly higher than retail banks. We pass these high-yield returns directly back to our trust clients, while providing asset isolation and privacy protection under the trust structure, achieving double security of safety and returns." },
  
  "faq.q4": { zh: "4. DILLIZ 聯動信用卡是如何連結信託資產的？", en: "4. How does the DILLIZ Linked Credit Card connect to trust assets?" },
  "faq.a4": { zh: "當客戶在 DILLIZ 託管資產（如定期存款或金融資產）後，我們可以根據客戶的託管規模，與合作的全球頂級發卡機構聯動，為客戶簽發專屬信用卡。該信用卡的信用額度直接與客戶的信託資產掛鉤（通常可達託管金額的 80%-90%）。客戶在全球消費時，可直接使用該卡進行高額支付，並由信託資產的收益或託管資金進行自動結算，免去繁瑣的跨境匯款，享有極致的流暢與尊貴體驗。", en: "Once a client deposits assets (such as fixed deposits or financial assets) with DILLIZ, we can collaborate with partnering top global card issuers to issue an exclusive credit card based on the client's custody scale. The credit limit of this card is directly linked to the client's trust assets (usually up to 80%-90% of the custody value). When spending globally, clients can directly use this card for high-value payments, with automatic settlement handled by trust asset returns or custody funds, bypassing tedious cross-border wire transfers and enjoying ultimate seamless convenience." },
  
  "faq.q5": { zh: "5. 設立信託的流程是怎樣的？需要多長時間？", en: "5. What is the process of establishing a trust? How long does it take?" },
  "faq.a5": { zh: "設立流程通常分為四個步驟：1.「初步諮詢與評估」，了解您的財富保護與傳承需求；2.「架構設計」，由我們的信託專家為您量身定制信託契約條款；3.「合規審查與簽署」，完成嚴格的 KYC（客戶身份審查）並正式簽署信託契約；4.「資產注入」，將現金、股權或物業正式過戶至信託名下。在客戶資料齊備的情況下，整個流程通常在 2 至 4 週內即可完成。", en: "The establishment process generally consists of four steps: 1. 'Initial Consultation & Assessment' to understand your wealth protection and inheritance needs; 2. 'Structure Design', where our trust experts tailor the trust deed clauses for you; 3. 'Compliance Review & Signing', completing strict KYC (Know Your Customer) reviews and formally signing the trust deed; 4. 'Asset Injection', formally transferring cash, equities, or properties to the trust. With all client documentation ready, the entire process can usually be completed within 2 to 4 weeks." },

  // Contact & Consultation
  "contact.title": { zh: "預約您的專屬私人信託顧問", en: "Book Your Private Trust Advisor" },
  "contact.subtitle": { zh: "邁出財富安全與傳承的第一步。我們的專家團隊將在 24 小時內與您聯絡，為您量身定制專屬方案。", en: "Take the first step towards wealth security and inheritance. Our expert team will contact you within 24 hours to customize your exclusive solution." },
  
  "contact.info.title": { zh: "聯絡資訊", en: "Contact Information" },
  "contact.info.whatsapp": { zh: "WhatsApp 專線", en: "WhatsApp Line" },
  "contact.info.email": { zh: "電子郵件", en: "Email Address" },
  "contact.info.address": { zh: "亞太區總部地址", en: "Asia-Pacific HQ Address" },
  "contact.info.address.value": { zh: "香港九龍觀塘海濱道 133 號萬兆豐群大廈 17 樓 I 室", en: "Unit I, 17/F, MG Tower, 133 Hoi Bun Road, Kwun Tong, Kowloon, Hong Kong" },
  
  "contact.form.title": { zh: "線上預約諮詢", en: "Online Consultation Booking" },
  "contact.form.name": { zh: "您的姓名", en: "Your Name" },
  "contact.form.phone": { zh: "聯絡電話", en: "Phone Number" },
  "contact.form.email": { zh: "電子郵件", en: "Email Address" },
  "contact.form.interest": { zh: "感興趣的服務", en: "Services of Interest" },
  "contact.form.interest.placeholder": { zh: "請選擇服務項目", en: "Please select a service" },
  "contact.form.interest.asset": { zh: "資產保護信託", en: "Asset Protection Trust" },
  "contact.form.interest.trust": { zh: "家族/企業信託託管", en: "Family/Corporate Trust Custody" },
  "contact.form.interest.deposit": { zh: "高收益定期存款託管", en: "High-Yield Fixed Deposit Custody" },
  "contact.form.interest.finance": { zh: "全球金融資產配置", en: "Global Financial Asset Allocation" },
  "contact.form.interest.card": { zh: "信託聯動信用卡", en: "Trust-Linked Credit Card" },
  "contact.form.amount": { zh: "預計信託託管規模", en: "Estimated Custody Scale" },
  "contact.form.amount.placeholder": { zh: "請選擇託管規模", en: "Please select custody scale" },
  "contact.form.amount.t1": { zh: "10 萬 - 50 萬美金", en: "$100k - $500k USD" },
  "contact.form.amount.t2": { zh: "50 萬 - 100 萬美金", en: "$500k - $1M USD" },
  "contact.form.amount.t3": { zh: "100 萬 - 300 萬美金", en: "$1M - $3M USD" },
  "contact.form.amount.t4": { zh: "300 萬美金以上", en: "$3M+ USD" },
  "contact.form.message": { zh: "其他需求或備註 (選填)", en: "Other Requirements or Notes (Optional)" },
  "contact.form.message.placeholder": { zh: "請輸入您的具體需求，以便我們為您準備更精準的方案...", en: "Please enter your specific requirements so we can prepare a more precise proposal..." },
  "contact.form.btn.submit": { zh: "提交預約申請", en: "Submit Booking" },
  "contact.form.success": { zh: "預約成功！我們將在 24 小時內指派專屬客戶經理與您聯絡。", en: "Booking Successful! We will assign a dedicated relationship manager to contact you within 24 hours." },

  // Footer & Disclaimer
  "footer.desc": { zh: "帝力斯資本信託有限公司為全球客戶提供安全、合規且高度保密的財富管理與信託託管解決方案。Build A Trust with DILLIZ, Shape The Future YOU Deserve.", en: "Dilliz Capital Trust Company Limited provides secure, compliant, and highly confidential wealth management and trust custody solutions for global clients. Build A Trust with DILLIZ, Shape The Future YOU Deserve." },
  "footer.license": { zh: "信託或公司服務提供者牌照號碼", en: "Trust or Company Service Provider License No." },
  "footer.links.title": { zh: "快速連結", en: "Quick Links" },
  "footer.disclaimer.title": { zh: "免責聲明", en: "Disclaimer" },
  "footer.disclaimer.text": { zh: "本網站所載的所有資料僅供一般參考之用，不構成任何投資、稅務、法律或其他專業建議。信託服務的具體條款與權益，以最終簽署的正式信託契約為準。信託資產的過往表現並不代表未來收益。", en: "All information contained in this website is for general reference purposes only and does not constitute any investment, tax, legal, or other professional advice. The specific terms and rights of trust services are subject to the formal trust deed finally signed. Past performance of trust assets does not guarantee future returns." },
  "footer.copyright": { zh: "© 2026 帝力斯資本信託有限公司 (DILLIZ CAPITAL TRUST LIMITED). 保留所有權利。", en: "© 2026 DILLIZ CAPITAL TRUST LIMITED. All Rights Reserved." }
};
