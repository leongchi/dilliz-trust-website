export interface TranslationDict {
  [key: string]: {
    zh: string;
    en: string;
  };
}

export const translations: TranslationDict = {
  // Navigation
  "nav.about": { zh: "關於我們", en: "About Us" },
  "nav.services": { zh: "我們的服務", en: "Our Services" },
  "nav.cases": { zh: "真實案例", en: "Case Studies" },
  "nav.membership": { zh: "會員計劃", en: "Membership" },
  "nav.faq": { zh: "常見問題", en: "FAQ" },
  "nav.contact": { zh: "聯絡我們", en: "Contact" },
  "nav.portal": { zh: "專屬客戶端登入", en: "Client Portal" },
  "nav.book": { zh: "預約專屬諮詢", en: "Book Consultation" },

  // Hero Section
  "hero.badge": { zh: "香港持牌信託服務公司 · 牌照 TC010540", en: "HK Licensed Trust Service Provider · License TC010540" },
  "hero.title": { zh: "Build A Trust with DILLIZ", en: "Build A Trust with DILLIZ" },
  "hero.subtitle": { zh: "Shape The Future YOU Deserve", en: "Shape The Future YOU Deserve" },
  "hero.desc": { zh: "帝力斯資本信託有限公司（Dilliz Capital Trust Limited）總部設於香港，是一家香港持牌信託服務公司（牌照號碼：TC010540）。我們專注為客戶提供定制化信託解決方案，旨在成為您最值得信賴的信託公司。", en: "Dilliz Capital Trust Limited, headquartered in Hong Kong, is a licensed trust service provider registered under License No. TC010540. We specialize in providing bespoke trust solutions, aiming to become your most trusted partner." },
  "hero.btn.explore": { zh: "探索信託方案", en: "Explore Solutions" },
  "hero.btn.about": { zh: "關於帝力斯信託", en: "About DILLIZ" },

  // Brand Stats (Mission, Philosophy, Positioning from Brochure)
  "stats.mission": { zh: "我們的使命", en: "Our Mission" },
  "stats.mission.desc": { zh: "保護並傳承每一位客戶的財富，超越世代", en: "Protect and pass on every client's wealth, transcending generations" },
  "stats.philosophy": { zh: "我們的理念", en: "Our Philosophy" },
  "stats.philosophy.desc": { zh: "以客為本，信任相連，創新驅動", en: "Client-centric, trust-connected, and innovation-driven" },
  "stats.positioning": { zh: "我們的定位", en: "Our Positioning" },
  "stats.positioning.desc": { zh: "簡易靈活管理，長期守護您的財富", en: "Simple and flexible management, safeguarding your wealth long-term" },

  // Core Services (Aligned with Brochure)
  "services.title": { zh: "我們的服務", en: "Our Services" },
  "services.subtitle": { zh: "專業合規的金融信託方案，全方位守護與增值您的財富", en: "Professional and compliant financial trust solutions, safeguarding and appreciating your wealth globally" },
  "services.tab.asset": { zh: "託管服務", en: "Custody Services" },
  "services.tab.trust": { zh: "稅務優化", en: "Tax Optimization" },
  "services.tab.deposit": { zh: "離岸銀行設立服務", en: "Offshore Bank Setup" },
  "services.tab.finance": { zh: "資產聯動信用卡服務", en: "Asset-Linked Card" },
  "services.tab.card": { zh: "全球賬單支付服務", en: "Global Bill Payment" },

  "services.asset.title": { zh: "託管服務", en: "Custody Services" },
  "services.asset.desc": { zh: "守護您的資產，傳承您的未來。透過香港信託獨特的法律架構，將信託資產與委託人的個人資產進行徹底的法律隔離，規避未來潛在的商業、婚姻或法律風險，確保財富穩健傳承。", en: "Safeguarding your assets, passing on your future. Through the unique legal structure of Hong Kong trusts, trust assets are completely isolated from the settlor's personal assets, mitigating commercial, marital, or legal risks to ensure robust wealth inheritance." },
  "services.asset.feature1": { zh: "資產安全與法律隔離", en: "Asset security & legal isolation" },
  "services.asset.feature2": { zh: "規避商業與婚姻風險", en: "Mitigate business & marital risks" },
  "services.asset.feature3": { zh: "高度保密，信託資產不公開", en: "High privacy, non-public trust assets" },

  "services.trust.title": { zh: "稅務優化", en: "Tax Optimization" },
  "services.trust.desc": { zh: "智慧規劃，合規增值。我們為高淨值家族與企業提供量身定制的信託架構，結合香港不徵收資本利得稅、贈與稅或遺產稅的法律優勢，進行全球資產的合規稅務優化，實現財富最大化增值。", en: "Smart planning, compliant appreciation. We provide tailor-made trust structures for high-net-worth families and enterprises, leveraging Hong Kong's tax advantages (no capital gains, gift, or estate taxes) to optimize global assets compliantly." },
  "services.trust.feature1": { zh: "合規全球稅務優化與規劃", en: "Compliant global tax optimization" },
  "services.trust.feature2": { zh: "跨區域資產配置架構設計", en: "Cross-border asset allocation structure" },
  "services.trust.feature3": { zh: "合規安全，規避跨境稅務爭議", en: "Compliant and secure, avoiding tax disputes" },

  "services.deposit.title": { zh: "離岸銀行設立服務", en: "Offshore Bank Setup Services" },
  "services.deposit.desc": { zh: "連接全球，佈局世界。依託 DILLIZ 廣泛的全球銀行合作網絡，我們協助客戶在世界頂尖的金融管轄區（如瑞士、新加坡等）設立離岸銀行賬戶，實現資產的多幣種、跨區域靈活配置與對沖風險。", en: "Connecting globally, structuring worldwide. Leveraging DILLIZ's extensive global banking network, we assist clients in establishing offshore bank accounts in top-tier jurisdictions (e.g., Switzerland, Singapore) to achieve flexible multi-currency asset allocation." },
  "services.deposit.feature1": { zh: "全球頂尖銀行快速開戶通道", en: "Fast-track opening at top global banks" },
  "services.deposit.feature2": { zh: "多幣種賬戶，靈活對沖風險", en: "Multi-currency accounts, flexible risk hedging" },
  "services.deposit.feature3": { zh: "高度隱私，離岸資產安全託管", en: "High privacy, secure offshore asset custody" },

  "services.finance.title": { zh: "資產聯動信用卡服務", en: "Asset-Linked Credit Card Services" },
  "services.finance.desc": { zh: "靈活消費，尊享禮遇。我們與全球頂級發卡機構合作，為客戶簽發專屬聯動信用卡。該卡額度直接與客戶託管的信託資產聯動，提供極高信用額度，免除繁瑣的跨境匯款，帶來全球無憂的頂級支付體驗。", en: "Flexible spending, exclusive privileges. Collaborating with top global card issuers, we issue exclusive linked credit cards. The credit limit is directly linked to custody trust assets, providing superior limits and a seamless global payment experience." },
  "services.finance.feature1": { zh: "額度直接聯動信託，極致靈活", en: "Limits directly linked to trust, ultimate flexibility" },
  "services.finance.feature2": { zh: "全球尊貴無障礙支付與提現", en: "Global seamless premium payment & withdrawal" },
  "services.finance.feature3": { zh: "專屬私人禮賓與頂級金融特權", en: "Dedicated private concierge & premium perks" },

  "services.card.title": { zh: "全球賬單支付服務", en: "Global Bill Payment Services" },
  "services.card.desc": { zh: "輕鬆繳費，掌握全局。我們為客戶提供一站式的全球賬單支付與代繳服務，客戶可以透過信託託管賬戶或聯動信用卡，輕鬆支付全球各地的物業費、保險費、學費及其他各類日常或商業賬單，省時省心。", en: "Easy payment, mastering the big picture. We provide clients with a one-stop global bill payment and agency service. Clients can easily pay global property fees, insurance, tuition, and other bills via trust accounts or linked cards." },
  "services.card.feature1": { zh: "全球各類賬單一站式託管代繳", en: "One-stop global bill custody and payment" },
  "services.card.feature2": { zh: "信託資產自動結算，高效便捷", en: "Auto-settlement via trust assets, efficient" },
  "services.card.feature3": { zh: "清晰透明的全球賬單流水報告", en: "Clear and transparent global billing reports" },

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

  // Membership Tiers (Directly Aligned with Brochure)
  "membership.title": { zh: "會員計劃", en: "Membership Plan" },
  "membership.subtitle": { zh: "因為您，才值得擁有。量身定制的專屬信託權益與尊榮服務", en: "Because of you, it's worth having. Tailored exclusive trust rights and prestigious services" },
  "membership.btn.select": { zh: "立即申請預約", en: "Apply Now" },
  "membership.threshold": { zh: "定存門檻", en: "Fixed Deposit Threshold" },
  "membership.duration": { zh: "定存期限", en: "Fixed Deposit Duration" },
  "membership.offshore": { zh: "離岸賬戶配置", en: "Offshore Account Setup" },
  "membership.billpay": { zh: "全球賬單支付", en: "Global Bill Payment" },
  "membership.customerservice": { zh: "客戶服務", en: "Customer Service" },
  "membership.linkedcard": { zh: "資產聯動信用卡", en: "Asset-Linked Card" },
  "membership.brochure.note": { zh: "如需了解詳情，請與資深客戶專員聯絡", en: "For details, please contact our senior relationship manager" },
  
  "membership.t1.name": { zh: "基礎 (Basic)", en: "Basic" },
  "membership.t1.threshold": { zh: "美金10,000 +", en: "$10,000+ USD" },
  "membership.t1.duration": { zh: "12個月", en: "12 Months" },
  "membership.t1.offshore": { zh: "行政費", en: "Admin Fee" },
  "membership.t1.billpay": { zh: "不適用", en: "N/A" },
  "membership.t1.service": { zh: "線上諮詢", en: "Online Chat" },

  "membership.t2.name": { zh: "標準 (Standard)", en: "Standard" },
  "membership.t2.threshold": { zh: "美金50,000 +", en: "$50,000+ USD" },
  "membership.t2.duration": { zh: "6/12個月", en: "6 or 12 Months" },
  "membership.t2.offshore": { zh: "行政費", en: "Admin Fee" },
  "membership.t2.billpay": { zh: "1% 手續費", en: "1% Fee" },
  "membership.t2.service": { zh: "線上諮詢", en: "Online Chat" },

  "membership.t3.name": { zh: "尊享 (Premium)", en: "Premium" },
  "membership.t3.threshold": { zh: "美金200,000 +", en: "$200,000+ USD" },
  "membership.t3.duration": { zh: "3/6/9/12個月", en: "3/6/9/12 Months" },
  "membership.t3.offshore": { zh: "豁免行政費", en: "Waived Admin Fee" },
  "membership.t3.billpay": { zh: "0.5% 手續費", en: "0.5% Fee" },
  "membership.t3.service": { zh: "專屬客服熱線", en: "Dedicated Hotline" },

  "membership.t4.name": { zh: "典藏 (Royal)", en: "Royal" },
  "membership.t4.threshold": { zh: "專員洽詢", en: "Contact Manager" },
  "membership.t4.duration": { zh: "靈活定制", en: "Bespoke" },
  "membership.t4.offshore": { zh: "豁免並優先配置", en: "Waived & Priority" },
  "membership.t4.billpay": { zh: "特惠手續費", en: "Special Fee" },
  "membership.t4.service": { zh: "資深客戶專員聯絡", en: "Senior Manager" },

  // FAQ
  "faq.title": { zh: "常見問題與信託知識庫", en: "Frequently Asked Questions" },
  "faq.subtitle": { zh: "為您解答關於香港信託、資產安全與合規運營的所有疑問", en: "Answering all your questions about Hong Kong trusts, asset security, and compliant operations" },
  
  "faq.q1": { zh: "1. 帝力斯資本信託有限公司（DILLIZ）的牌照資質是什麼？", en: "1. What are the licensing credentials of DILLIZ Capital Trust?" },
  "faq.a1": { zh: "DILLIZ 是一家總部設在香港的持牌信託服務公司，持有香港公司註冊處頒發的「信託或公司服務提供者牌照」（TCSP License），牌照號碼為 TC010540。我們嚴格遵循香港《打擊洗錢及恐怖分子資金籌集條例》（第 615 章）的監管要求，確保所有業務運營 100% 合規、透明且安全。", en: "DILLIZ is a licensed trust service company headquartered in Hong Kong, holding the Trust or Company Service Provider License (TCSP License) issued by the Hong Kong Companies Registry, under License No. TC010540. We strictly comply with the regulatory requirements of the Anti-Money Laundering and Counter-Terrorist Financing Ordinance (Cap. 615) of Hong Kong, ensuring all business operations are 100% compliant, transparent, and secure." },
  
  "faq.q2": { zh: "2. 為什麼選擇香港信託？香港信託有哪些法律優勢？", en: "2. Why choose a Hong Kong trust? What are its legal advantages?" },
  "faq.a2": { zh: "香港作為全球領先的國際金融中心，實行普通法系。香港信託擁有極其完善的法律保障：首先是「資產徹底隔離」，信託資產在法律上不再屬於委託人，能有效規避未來的商業訴訟與債務追索；其次是「極致的隱私保護」，信託契約無需向公眾公開；最後，香港不徵收資本利得稅、贈與稅或遺產稅，是全球財富保護與傳承的首選地。", en: "Hong Kong, as a leading global financial hub, practices the Common Law system. Hong Kong trusts enjoy comprehensive legal protection: firstly, 'complete asset isolation' - trust assets legally no longer belong to the settlor, effectively mitigating future commercial litigation and debt claims; secondly, 'ultimate privacy protection' - trust deeds do not need to be disclosed to the public; lastly, Hong Kong does not levy capital gains tax, gift tax, or estate duty, making it the premier choice for global wealth protection and succession." },
  
  "faq.q3": { zh: "3. DILLIZ 的離岸銀行設立服務是如何運作的？", en: "3. How does DILLIZ's offshore bank setup service work?" },
  "faq.a3": { zh: "依託 DILLIZ 廣泛的全球銀行合作網絡，我們為高淨值客戶提供一站式、快速的離岸銀行賬戶設立服務。我們與瑞士、新加坡、列支敦士登等全球頂尖金融管轄區的多家私人銀行與商業銀行建立了戰略合作。客戶在信託架構下，能以極高效率開立多幣種賬戶，並享有極致的隱私保護與靈活的全球資產配置通道。", en: "Leveraging DILLIZ's extensive global banking network, we provide high-net-worth clients with a one-stop, fast offshore bank account opening service. We have established strategic partnerships with multiple private and commercial banks in top global financial jurisdictions like Switzerland, Singapore, and Liechtenstein. Under the trust structure, clients can open multi-currency accounts with high efficiency, enjoying ultimate privacy and flexible asset allocation." },
  
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
  "contact.info.address": { zh: "公司地址", en: "Company Address" },
  "contact.info.address.value": { zh: "香港觀塘海濱道133號 萬兆豐中心17樓I室", en: "Unit I, 17/F, MG Tower, 133 Hoi Bun Road, Kwun Tong, Hong Kong" },
  "contact.info.phone": { zh: "聯絡電話", en: "Phone Number" },
  "contact.info.phone.value": { zh: "+852 6528 6838", en: "+852 6528 6838" },
  "contact.info.slogan": { zh: "因為您，才值得擁有", en: "Because of you, it's worth having" },
  
  "contact.form.title": { zh: "線上預約諮詢", en: "Online Consultation Booking" },
  "contact.form.name": { zh: "您的姓名", en: "Your Name" },
  "contact.form.phone": { zh: "聯絡電話", en: "Phone Number" },
  "contact.form.email": { zh: "電子郵件", en: "Email Address" },
  "contact.form.interest": { zh: "感興趣的服務", en: "Services of Interest" },
  "contact.form.interest.placeholder": { zh: "請選擇服務項目", en: "Please select a service" },
  "contact.form.interest.asset": { zh: "託管服務", en: "Custody Services" },
  "contact.form.interest.trust": { zh: "稅務優化", en: "Tax Optimization" },
  "contact.form.interest.deposit": { zh: "離岸銀行設立服務", en: "Offshore Bank Setup" },
  "contact.form.interest.finance": { zh: "資產聯動信用卡服務", en: "Asset-Linked Card" },
  "contact.form.interest.card": { zh: "全球賬單支付服務", en: "Global Bill Payment" },
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
  "footer.desc": { zh: "帝力斯資本信託有限公司為全球客戶提供安全、合規且高度保密的財富管理與信託託管解決方案。Build A Trust with DILLIZ, Shape The Future YOU Deserve.", en: "Dilliz Capital Trust Limited provides secure, compliant, and highly confidential wealth management and trust custody solutions for global clients. Build A Trust with DILLIZ, Shape The Future YOU Deserve." },
  "footer.license": { zh: "信託或公司服務提供者牌照號碼", en: "Trust or Company Service Provider License No." },
  "footer.links.title": { zh: "快速連結", en: "Quick Links" },
  "footer.disclaimer.title": { zh: "免責聲明", en: "Disclaimer" },
  "footer.disclaimer.text": { zh: "本網站所載的所有資料僅供一般參考之用，不構成任何投資、稅務、法律或其他專業建議。信託服務的具體條款與權益，以最終簽署的正式信託契約為準。信託資產的過往表現並不代表未來收益。", en: "All information contained in this website is for general reference purposes only and does not constitute any investment, tax, legal, or other professional advice. The specific terms and rights of trust services are subject to the formal trust deed finally signed. Past performance of trust assets does not guarantee future returns." },
  "footer.copyright": { zh: "© 2026 帝力斯資本信託有限公司 (DILLIZ CAPITAL TRUST LIMITED). 保留所有權利。", en: "© 2026 DILLIZ CAPITAL TRUST LIMITED. All Rights Reserved." }
};
