/**
 * DILLIZ assessment preview content model.
 * Traditional Chinese is the source language; Simplified Chinese and English
 * are adapted from it. The sandbox route previews the complete email body but
 * intentionally does not send or persist any assessment data.
 */

export type AssessmentLang = "zh" | "cn" | "en";

export type LocalizedText = Record<AssessmentLang, string>;

export interface AssessmentOption {
  value: string;
  label: LocalizedText;
}

export interface AssessmentStep {
  id: number;
  key: string;
  title: LocalizedText;
  description: LocalizedText;
}

const localize = (zh: string, cn: string, en: string): LocalizedText => ({ zh, cn, en });

export const assessmentUi = {
  eyebrow: localize("開戶初步評估", "开户初步评估", "ACCOUNT OPENING ASSESSMENT"),
  title: localize(
    "帝力斯信託開戶評估",
    "帝力斯信托开户评估",
    "DILLIZ Trust Account Opening Assessment"
  ),
  subtitle: localize(
    "用八個清晰步驟整理你的初步需要，方便專員作後續評估。",
    "用八个清晰步骤整理你的初步需要，方便专员作后续评估。",
    "Organise your initial requirements in eight clear steps for specialist review."
  ),
  previewLabel: localize("沙盒測試", "沙盒测试", "SANDBOX TEST"),
  previewNotice: localize(
    "這是電郵內容沙盒預覽；所有資料只保留在目前頁面，不會寄出或保存。請只使用虛構測試資料。",
    "这是电邮内容沙盒预览；所有资料只保留在当前页面，不会寄出或保存。请只使用虚构测试资料。",
    "This is an email-content sandbox preview. All data remains on this page and is neither sent nor stored. Use fictional test data only."
  ),
  directReview: localize(
    "完成目前部分後，可重新開啟已完成的部分；按「下一步」會檢查必填資料並繼續。",
    "完成当前部分后，可重新打开已完成的部分；按“下一步”会检查必填资料并继续。",
    "Completed sections can be reopened. Continue checks required information before moving forward."
  ),
  confidential: localize("機密・初步客戶資料", "机密・初步客户资料", "CONFIDENTIAL · PRELIMINARY CLIENT INTAKE"),
  documentRef: localize("文件編號 DLZ-AP-01", "文件编号 DLZ-AP-01", "REFERENCE DLZ-AP-01"),
  step: localize("步驟", "步骤", "STEP"),
  of: localize("／", "／", "OF"),
  required: localize("必填", "必填", "REQUIRED"),
  optional: localize("選填", "选填", "OPTIONAL"),
  previous: localize("返回", "返回", "BACK"),
  next: localize("下一步", "下一步", "CONTINUE"),
  finish: localize("完成預覽", "完成预览", "COMPLETE PREVIEW"),
  reviewAnother: localize("重新查看步驟", "重新查看步骤", "REVIEW AGAIN"),
  review: localize("核對資料", "核对资料", "REVIEW DETAILS"),
  reviewTitle: localize("提交前核對", "提交前核对", "Review Before Submission"),
  reviewDescription: localize(
    "請核對八個部分的虛構測試資料。你可以返回任何部分修改，然後預覽寄給 CS 的完整電郵正文。",
    "请核对八个部分的虚构测试资料。你可以返回任何部分修改，然后预览寄给 CS 的完整电邮正文。",
    "Review the fictional test data across all eight sections. You may edit any section before previewing the complete email body for CS."
  ),
  edit: localize("修改", "修改", "EDIT"),
  notProvided: localize("未提供", "未提供", "Not provided"),
  testTools: localize("沙盒測試工具", "沙盒测试工具", "SANDBOX TEST TOOLS"),
  autoFill: localize("填入測試資料", "填入测试资料", "FILL TEST DATA"),
  clearTest: localize("清除全部", "清除全部", "CLEAR ALL"),
  testDataReady: localize(
    "測試資料已填入。所有內容均為虛構資料，只供功能測試。",
    "测试资料已填入。所有内容均为虚构资料，只供功能测试。",
    "Test data is ready. All values are fictional and for functional testing only."
  ),
  lockedStep: localize(
    "請先完成目前部分，才可前往後續步驟。",
    "请先完成当前部分，才可前往后续步骤。",
    "Complete the current section before opening later steps."
  ),
  testSubmitLead: localize("完整電郵正文預覽", "完整电邮正文预览", "COMPLETE EMAIL BODY PREVIEW"),
  testSubmitText: localize(
    "以下按鈕只會顯示準備寄到 info@dilliz.com 的完整電郵內容，不會呼叫 EmailJS、寄出郵件或保存資料。",
    "以下按钮只会显示准备寄到 info@dilliz.com 的完整电邮内容，不会调用 EmailJS、寄出邮件或保存资料。",
    "The button only displays the complete email prepared for info@dilliz.com. It does not call EmailJS, send email or store data."
  ),
  simulateSuccess: localize("預覽完整電郵", "预览完整电邮", "PREVIEW COMPLETE EMAIL"),
  submitting: localize("預覽時間（香港）", "预览时间（香港）", "PREVIEWED AT (HONG KONG)"),
  testReference: localize("提交編號", "提交编号", "SUBMISSION REFERENCE"),
  errorSummary: localize(
    "為確保初步評估資料完整，請先完成本部分的必填欄位。",
    "为确保初步评估资料完整，请先完成本部分的必填字段。",
    "To keep the preliminary assessment complete, please finish the required fields in this section."
  ),
  privacyLead: localize("資料處理提示", "资料处理提示", "DATA HANDLING NOTE"),
  privacyText: localize(
    "正式版本會在提交前清楚說明全部資料將經 EmailJS 及電郵傳送到 DILLIZ CS，包括收集目的、接收方、保存期限及查閱或更正方法。",
    "正式版本会在提交前清楚说明全部资料将经 EmailJS 及电邮发送到 DILLIZ CS，包括收集目的、接收方、保存期限及查阅或更正方法。",
    "The live version will clearly state that all data is sent to DILLIZ CS through EmailJS and email, including purposes, recipients, retention and access or correction arrangements."
  ),
  emailPreviewEyebrow: localize("電郵內容預覽・尚未寄出", "电邮内容预览・尚未寄出", "EMAIL PREVIEW · NOT SENT"),
  emailPreviewTitle: localize("DILLIZ 開戶評估完整電郵", "DILLIZ 开户评估完整电邮", "DILLIZ Complete Assessment Email"),
  emailTo: localize("收件人", "收件人", "TO"),
  emailReplyTo: localize("回覆至", "回复至", "REPLY TO"),
  emailSubject: localize("主旨", "主题", "SUBJECT"),
  emailSubjectValue: localize(
    "[DILLIZ][沙盒] 新開戶評估",
    "[DILLIZ][沙盒] 新开户评估",
    "[DILLIZ][SANDBOX] New Account Opening Assessment"
  ),
  emailIntro: localize(
    "以下為客戶提交的完整開戶評估資料，請由獲授權的 DILLIZ CS 人員處理。",
    "以下为客户提交的完整开户评估资料，请由获授权的 DILLIZ CS 人员处理。",
    "The complete account-opening assessment appears below for authorised DILLIZ CS handling."
  ),
  emailPrivacyWarning: localize(
    "此電郵包含機密個人、稅務及財務資料。只限獲授權人員查看，切勿未經批准轉寄。",
    "此电邮包含机密个人、税务及财务资料。只限获授权人员查看，切勿未经批准转发。",
    "This email contains confidential personal, tax and financial information. Authorised personnel only; do not forward without approval."
  ),
  emailBackToReview: localize("返回核對資料", "返回核对资料", "BACK TO REVIEW"),
  emailNotSent: localize(
    "這只是沙盒效果預覽；沒有資料經 EmailJS 傳送，也沒有保存到任何外部服務。",
    "这只是沙盒效果预览；没有资料经 EmailJS 发送，也没有保存到任何外部服务。",
    "This is a sandbox visual preview only. No data was sent through EmailJS or stored in any external service."
  ),
  emailSendLocked: localize("等待最後寄送確認", "等待最后寄送确认", "AWAITING FINAL SEND CONFIRMATION"),
  emailSendTest: localize("寄出虛構測試電郵", "寄出虚构测试电邮", "SEND FICTIONAL TEST EMAIL"),
  emailSending: localize("正在透過 EmailJS 寄送…", "正在通过 EmailJS 发送…", "SENDING THROUGH EMAILJS…"),
  emailSent: localize("測試電郵已寄出", "测试电邮已寄出", "TEST EMAIL SENT"),
  emailSentText: localize(
    "EmailJS 已接受這封虛構沙盒電郵。請到 info@dilliz.com 核對提交編號及完整內容。",
    "EmailJS 已接受这封虚构沙盒电邮。请到 info@dilliz.com 核对提交编号及完整内容。",
    "EmailJS accepted this fictional sandbox email. Check info@dilliz.com for the reference and complete content."
  ),
  emailSendError: localize(
    "未能寄出測試電郵。資料仍只留在目前頁面，你可以重試而不會產生任何 Google Sheet 記錄。",
    "未能寄出测试电邮。资料仍只留在当前页面，你可以重试而不会产生任何 Google Sheet 记录。",
    "The test email could not be sent. Data remains on this page and retrying creates no Google Sheet record."
  ),
  emailRetry: localize("重試寄送", "重试发送", "RETRY SEND")
};

export const assessmentProductionUi = {
  ...assessmentUi,
  previewLabel: localize("資料處理提示", "资料处理提示", "DATA HANDLING NOTICE"),
  previewNotice: localize(
    "提交後，全部資料將透過 EmailJS 及電郵傳送至 DILLIZ 客戶服務郵箱 info@dilliz.com，只供開戶初步評估及後續聯絡。",
    "提交后，全部资料将通过 EmailJS 及电邮发送至 DILLIZ 客户服务邮箱 info@dilliz.com，只供开户初步评估及后续联络。",
    "After submission, all information will be sent through EmailJS and email to DILLIZ Client Services at info@dilliz.com solely for preliminary account-opening assessment and follow-up."
  ),
  reviewDescription: localize(
    "請核對八個部分的資料。你可以返回任何部分修改，確認完整電郵內容後再提交給 DILLIZ 客戶服務團隊。",
    "请核对八个部分的资料。你可以返回任何部分修改，确认完整电邮内容后再提交给 DILLIZ 客户服务团队。",
    "Review all eight sections. You may return to any section before confirming the complete email and submitting it to DILLIZ Client Services."
  ),
  testSubmitLead: localize("確認電郵內容", "确认电邮内容", "CONFIRM EMAIL CONTENT"),
  testSubmitText: localize(
    "下一步會顯示將寄往 info@dilliz.com 的完整電郵內容；資料在你按「提交評估」前不會寄出。",
    "下一步会显示将发送至 info@dilliz.com 的完整电邮内容；资料在你按“提交评估”前不会发送。",
    "The next step shows the complete email prepared for info@dilliz.com. Nothing is sent until you select Submit Assessment."
  ),
  simulateSuccess: localize("預覽完整電郵", "预览完整电邮", "PREVIEW COMPLETE EMAIL"),
  submitting: localize("提交時間（香港）", "提交时间（香港）", "SUBMITTED AT (HONG KONG)"),
  privacyText: localize(
    "提交即表示你確認資料可透過 EmailJS 及電郵傳送至 DILLIZ 客戶服務團隊，供開戶初步評估及聯絡用途。詳情請參閱私隱政策。",
    "提交即表示你确认资料可通过 EmailJS 及电邮发送至 DILLIZ 客户服务团队，供开户初步评估及联络用途。详情请参阅隐私政策。",
    "By submitting, you confirm that the information may be transmitted through EmailJS and email to DILLIZ Client Services for preliminary account-opening assessment and contact. Please see our Privacy Policy."
  ),
  emailPreviewEyebrow: localize("電郵內容預覽・尚未寄出", "电邮内容预览・尚未发送", "EMAIL PREVIEW · NOT YET SENT"),
  emailSubjectValue: localize(
    "[DILLIZ] 新開戶評估",
    "[DILLIZ] 新开户评估",
    "[DILLIZ] New Account Opening Assessment"
  ),
  emailNotSent: localize(
    "資料尚未寄出。請核對內容；如需修改，可返回上一頁。",
    "资料尚未发送。请核对内容；如需修改，可返回上一页。",
    "The information has not yet been sent. Review the content or return to make changes."
  ),
  emailSendLocked: localize("暫時未能提交", "暂时未能提交", "SUBMISSION UNAVAILABLE"),
  emailSendTest: localize("提交評估", "提交评估", "SUBMIT ASSESSMENT"),
  emailSending: localize("正在安全寄送…", "正在安全发送…", "SENDING SECURELY…"),
  emailSent: localize("評估已提交", "评估已提交", "ASSESSMENT SUBMITTED"),
  emailSentText: localize(
    "你的初步評估已傳送至 DILLIZ 客戶服務團隊。請保存提交編號，專員將按你提供的聯絡方式跟進。",
    "你的初步评估已发送至 DILLIZ 客户服务团队。请保存提交编号，专员将按你提供的联络方式跟进。",
    "Your preliminary assessment has been sent to DILLIZ Client Services. Keep the submission reference; a specialist will follow up using your preferred contact method."
  ),
  emailSendError: localize(
    "未能寄出評估資料。內容仍保留在目前頁面，請稍後重試；請勿重複開啟新的表格。",
    "未能发送评估资料。内容仍保留在当前页面，请稍后重试；请勿重复打开新的表格。",
    "The assessment could not be sent. Your entries remain on this page; retry shortly without opening a new form."
  )
};

export const assessmentSteps: AssessmentStep[] = [
  {
    id: 1,
    key: "basic",
    title: localize("基本資料", "基本资料", "Basic Information"),
    description: localize(
      "提供聯絡資料及首選聯絡方式。",
      "提供联络资料及首选联络方式。",
      "Provide contact details and your preferred contact method."
    )
  },
  {
    id: 2,
    key: "client",
    title: localize("客戶類型", "客户类型", "Client Type"),
    description: localize(
      "說明申請人以個人或公司身份進行評估。",
      "说明申请人以个人或公司身份进行评估。",
      "Identify whether the assessment is for an individual or a company."
    )
  },
  {
    id: 3,
    key: "tax",
    title: localize("國籍及稅務身份", "国籍及税务身份", "Nationality & Tax Status"),
    description: localize(
      "初步識別申請人及相關人士的國籍、稅務或政治公眾人物身份。",
      "初步识别申请人及相关人士的国籍、税务或政治公众人物身份。",
      "Identify relevant nationality, tax-residency or politically exposed person status."
    )
  },
  {
    id: 4,
    key: "purpose",
    title: localize("成立信託及開戶目的", "成立信托及开户目的", "Trust & Account Purpose"),
    description: localize(
      "選擇主要安排目的，並可補充你的需要。",
      "选择主要安排目的，并可补充你的需要。",
      "Select the main objectives and add context where useful."
    )
  },
  {
    id: 5,
    key: "assets",
    title: localize("資產類型", "资产类型", "Asset Type"),
    description: localize(
      "說明預計涉及法幣、虛擬資產或兩者。",
      "说明预计涉及法币、虚拟资产或两者。",
      "Indicate whether fiat, digital assets or both may be involved."
    )
  },
  {
    id: 6,
    key: "funding",
    title: localize("信託資金及注入方式", "信托资金及注入方式", "Trust Funding & Injection Method"),
    description: localize(
      "提供預期最初款項、資金來源、注入方式及受益人安排。",
      "提供预期最初款项、资金来源、注入方式及受益人安排。",
      "Outline the expected initial amount, source, injection method and beneficiary arrangements."
    )
  },
  {
    id: 7,
    key: "account",
    title: localize("帳戶類型偏好", "账户类型偏好", "Account Type Preference"),
    description: localize(
      "選擇較適合你的帳戶形式，或要求專員建議。",
      "选择较适合你的账户形式，或要求专员建议。",
      "Choose a preferred account format or request a recommendation."
    )
  },
  {
    id: 8,
    key: "consent",
    title: localize("聲明及同意", "声明及同意", "Declaration & Consent"),
    description: localize(
      "確認資料準確性，並了解這只是初步評估。",
      "确认资料准确性，并了解这只是初步评估。",
      "Confirm accuracy and acknowledge that this is a preliminary assessment."
    )
  }
];

export const labels = {
  fullName: localize("全名", "全名", "Full name"),
  companyName: localize("公司名稱（如適用）", "公司名称（如适用）", "Company name, if applicable"),
  email: localize("電郵地址", "电邮地址", "Email address"),
  phone: localize("電話號碼", "电话号码", "Phone number"),
  preferredContact: localize("首選聯絡方式", "首选联络方式", "Preferred contact method"),
  preferredContactOther: localize("請說明其他聯絡方式", "请说明其他联络方式", "Please specify the other contact method"),
  clientType: localize("客戶類型", "客户类型", "Client type"),
  clientOther: localize("如選擇其他，請說明", "如选择其他，请说明", "If other, please specify"),
  taxStatus: localize(
    "申請人及相關人士的國籍／稅務身份",
    "申请人及相关人士的国籍／税务身份",
    "Nationality or tax status of applicant and related parties"
  ),
  taxOther: localize(
    "如有其他國籍或稅務居民身份，請說明",
    "如有其他国籍或税务居民身份，请说明",
    "If other nationality or tax residency, please specify"
  ),
  trustPurpose: localize("成立信託之目的", "成立信托之目的", "Main purpose of the trust"),
  purposeDetails: localize("請簡述你的開戶目的", "请简述你的开户目的", "Briefly describe your account purpose"),
  assetType: localize("帳戶將涉及哪些資產類型？", "账户将涉及哪些资产类型？", "What type of assets may be involved?"),
  otherBeneficiaries: localize("是否會有其他指定受益人？", "是否会有其他指定受益人？", "Will there be other designated beneficiaries?"),
  initialAmount: localize("信託資金預期最初款項", "信托资金预计最初款项", "Expected initial trust funding amount"),
  sourceOfFunds: localize("預計資金來源", "预计资金来源", "Expected source of funds"),
  sourceOther: localize("請說明其他資金來源", "请说明其他资金来源", "Please specify the other source of funds"),
  fundingMethod: localize("計劃如何注入資金？", "计划如何注入资金？", "How do you plan to inject funds?"),
  fundingOther: localize("如選擇其他，請說明", "如选择其他，请说明", "If other, please specify"),
  accountType: localize("你需要哪種類型的帳戶？", "你需要哪种类型的账户？", "Which type of account do you need?"),
  declaration: localize("聲明及同意", "声明及同意", "Declaration and consent")
};

export const optionSets = {
  contact: [
    { value: "email", label: localize("電郵", "电邮", "Email") },
    { value: "phone", label: localize("電話", "电话", "Phone") },
    { value: "whatsapp", label: localize("WhatsApp", "WhatsApp", "WhatsApp") },
    { value: "telegram", label: localize("Telegram", "Telegram", "Telegram") },
    { value: "wechat", label: localize("微信", "微信", "WeChat") },
    { value: "other", label: localize("其他", "其他", "Other") }
  ],
  clientType: [
    { value: "individual", label: localize("個人", "个人", "Individual") },
    { value: "company", label: localize("公司", "公司", "Company") },
    { value: "bvi", label: localize("英屬維爾京群島（BVI）公司", "英属维尔京群岛（BVI）公司", "British Virgin Islands (BVI) company") },
    { value: "other", label: localize("其他", "其他", "Other") }
  ],
  taxStatus: [
    { value: "china", label: localize("中國籍或中國稅務居民", "中国籍或中国税务居民", "Chinese nationality or tax resident") },
    { value: "us", label: localize("美國綠卡持有人、美國居民或美國公民", "美国绿卡持有人、美国居民或美国公民", "U.S. green-card holder, resident or citizen") },
    { value: "other", label: localize("其他國籍或稅務居民", "其他国籍或税务居民", "Other nationality or tax resident") },
    { value: "pep", label: localize("現任或前任政治公眾人物／公職人員", "现任或前任政治公众人物／公职人员", "Current or former politically exposed person or public official") },
    { value: "none", label: localize("以上皆不是", "以上皆不是", "None of the above") }
  ],
  purpose: [
    { value: "family", label: localize("使本人／家人受益", "使本人／家人受益", "Benefit me or my family members") },
    { value: "succession", label: localize("遺產或資產傳承規劃", "遗产或资产传承规划", "Estate or succession planning") },
    { value: "custodian", label: localize("固定收益信託", "固定收益信托", "Fixed-Term Custodian Funding Plan") },
    { value: "protection", label: localize("資產保障", "资产保障", "Asset protection") },
    { value: "tax", label: localize("稅務規劃", "税务规划", "Tax planning") },
    { value: "harmony", label: localize("促進家庭成員和諧關係", "促进家庭成员和谐关系", "Family harmony") },
    { value: "other", label: localize("其他", "其他", "Other") }
  ],
  assetType: [
    { value: "fiat", label: localize("只涉及法幣", "只涉及法币", "Fiat only") },
    { value: "digital", label: localize("只涉及虛擬資產", "只涉及虚拟资产", "Digital assets only") },
    { value: "both", label: localize("同時涉及法幣及虛擬資產", "同时涉及法币及虚拟资产", "Both fiat and digital assets") },
    { value: "unsure", label: localize("暫時不確定", "暂时不确定", "Not sure yet") }
  ],
  yesNoPending: [
    { value: "yes", label: localize("是", "是", "Yes") },
    { value: "no", label: localize("否", "否", "No") },
    { value: "pending", label: localize("待確認", "待确认", "To be confirmed") }
  ],
  initialAmount: [
    { value: "under10", label: localize("低於 10,000 美元", "低于 10,000 美元", "Below USD 10,000") },
    { value: "10to50", label: localize("10,000 至 50,000 美元", "10,000 至 50,000 美元", "USD 10,000–50,000") },
    { value: "50to200", label: localize("50,001 至 200,000 美元", "50,001 至 200,000 美元", "USD 50,001–200,000") },
    { value: "above200", label: localize("高於 200,000 美元", "高于 200,000 美元", "Above USD 200,000") },
    { value: "pending", label: localize("待確認", "待确认", "To be confirmed") }
  ],
  sourceOfFunds: [
    { value: "salary", label: localize("薪金／就業收入", "薪金／就业收入", "Salary or employment income") },
    { value: "business", label: localize("商業收入", "商业收入", "Business income") },
    { value: "assetIncome", label: localize("資產收益／資產處置所得", "资产收益／资产处置所得", "Asset income or disposal proceeds") },
    { value: "propertySale", label: localize("物業出售所得", "物业出售所得", "Sale of property") },
    { value: "shareSale", label: localize("出售股份或業務所得", "出售股份或业务所得", "Sale of shares or business") },
    { value: "savings", label: localize("個人儲蓄", "个人储蓄", "Personal savings") },
    { value: "family", label: localize("家族資產／家人支持", "家族资产／家人支持", "Family wealth or family support") },
    { value: "inheritance", label: localize("遺產繼承", "遗产继承", "Inheritance") },
    { value: "trust", label: localize("信託分派", "信托分派", "Trust distribution") },
    { value: "digital", label: localize("虛擬資產收益", "虚拟资产收益", "Digital-asset gains") },
    { value: "loan", label: localize("貸款", "贷款", "Loan") },
    { value: "gift", label: localize("贈與", "赠与", "Gift") },
    { value: "other", label: localize("其他", "其他", "Other") }
  ],
  fundingMethod: [
    { value: "bank", label: localize("銀行轉帳", "银行转账", "Bank transfer") },
    { value: "digital", label: localize("虛擬資產轉入", "虚拟资产转入", "Digital-asset transfer") },
    { value: "thirdParty", label: localize("第三方付款", "第三方付款", "Third-party payment") },
    { value: "other", label: localize("其他", "其他", "Other") }
  ],
  accountType: [
    { value: "virtual", label: localize("虛擬銀行帳戶", "虚拟银行账户", "Banking virtual account") },
    { value: "physical", label: localize("實體銀行帳戶", "实体银行账户", "Physical bank account") },
    { value: "both", label: localize("兩者都需要", "两者都需要", "Both") },
    { value: "unsure", label: localize("不確定，需要建議", "不确定，需要建议", "Not sure; recommendation needed") }
  ]
} satisfies Record<string, AssessmentOption[]>;

export const declarationText = localize(
  "本人確認所提供的資料在本人所知範圍內真實及準確。本人明白本表格資料僅用於初步評估，帳戶開立是否獲批須視乎 KYC、KYB、反洗錢審查、制裁名單篩查、風險評估，以及相關金融機構或服務供應商的要求而定。",
  "本人确认所提供的资料在本人所知范围内真实及准确。本人明白本表格资料仅用于初步评估，账户开立是否获批须视乎 KYC、KYB、反洗钱审查、制裁名单筛查、风险评估，以及相关金融机构或服务供应商的要求而定。",
  "I confirm that the information provided is true and accurate to the best of my knowledge. I understand that it will be used for preliminary assessment only and that account-opening approval is subject to KYC, KYB, AML, sanctions screening, risk review and the requirements of relevant financial institutions or service providers."
);
