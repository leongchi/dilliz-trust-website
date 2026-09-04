export type SiteLanguage = "zh" | "cn" | "en";

export type ContactAssessmentPrefill = {
  name: string;
  phone: string;
  email: string;
};

type StoredContactAssessmentPrefill = ContactAssessmentPrefill & {
  createdAt: number;
};

const HANDOFF_KEY = "dilliz_contact_assessment_handoff";
const HANDOFF_MAX_AGE_MS = 10 * 60 * 1000;

export const contactContinuationCopy = {
  minimumHint: {
    zh: "只需填寫姓名，以及電話或電郵其中一項；備註可選填。",
    cn: "只需填写姓名，以及电话或电邮其中一项；备注可选填。",
    en: "Only your name and either a phone number or email address are required. Notes are optional."
  },
  contactRequired: {
    zh: "請至少提供電話或電郵其中一項，方便專員聯絡你。",
    cn: "请至少提供电话或电邮其中一项，方便专员联络你。",
    en: "Please provide either a phone number or an email address so our specialist can contact you."
  },
  optional: {
    zh: "選填",
    cn: "选填",
    en: "OPTIONAL"
  },
  notProvided: {
    zh: "未提供",
    cn: "未提供",
    en: "Not provided"
  },
  eyebrow: {
    zh: "非強制下一步",
    cn: "非强制下一步",
    en: "OPTIONAL NEXT STEP"
  },
  title: {
    zh: "願意提供更多資料？",
    cn: "愿意提供更多资料？",
    en: "Would you like to provide more information?"
  },
  body: {
    zh: "你亦可繼續完成開戶初步評估，讓專員在聯絡前了解更多需要。已提供的姓名、電話及電郵會自動帶入，不用再次填寫。",
    cn: "你也可继续完成开户初步评估，让专员在联络前了解更多需要。已提供的姓名、电话及电邮会自动带入，无需再次填写。",
    en: "You may continue with the account-opening assessment so our specialist can understand more before contacting you. Any name, phone and email already provided will be carried over automatically."
  },
  continue: {
    zh: "繼續初步評估",
    cn: "继续初步评估",
    en: "CONTINUE TO ASSESSMENT"
  },
  skip: {
    zh: "暫時不用，等待專員聯絡",
    cn: "暂时不用，等待专员联络",
    en: "NOT NOW — WAIT FOR OUR SPECIALIST"
  },
  skipConfirmed: {
    zh: "好的，資料已提交；專員會按你提供的聯絡方式跟進。",
    cn: "好的，资料已提交；专员会按你提供的联络方式跟进。",
    en: "Your enquiry has been submitted. Our specialist will follow up using the contact details provided."
  },
  privacy: {
    zh: "基本聯絡資料只會在目前分頁傳遞一次；進入評估頁後立即清除，不會加入網址或另行長期保存。",
    cn: "基本联络资料只会在当前分页传递一次；进入评估页后立即清除，不会加入网址或另行长期保存。",
    en: "Basic contact details are transferred once within this tab and cleared immediately after the assessment opens. They are not placed in the URL or stored separately long term."
  },
  prefilled: {
    zh: "已帶入你的基本聯絡資料；請核對後繼續。你仍可在此修改。",
    cn: "已带入你的基本联络资料；请核对后继续。你仍可在此修改。",
    en: "Your basic contact details have been carried over. Review them before continuing; you can still edit them here."
  }
} as const;

export function storeContactAssessmentPrefill(prefill: ContactAssessmentPrefill) {
  const payload: StoredContactAssessmentPrefill = {
    name: prefill.name.trim().slice(0, 120),
    phone: prefill.phone.trim().slice(0, 40),
    email: prefill.email.trim().slice(0, 160),
    createdAt: Date.now()
  };
  sessionStorage.setItem(HANDOFF_KEY, JSON.stringify(payload));
}

export function consumeContactAssessmentPrefill(): ContactAssessmentPrefill | null {
  const raw = sessionStorage.getItem(HANDOFF_KEY);
  sessionStorage.removeItem(HANDOFF_KEY);
  if (!raw) return null;

  try {
    const payload = JSON.parse(raw) as Partial<StoredContactAssessmentPrefill>;
    if (
      typeof payload.createdAt !== "number" ||
      Date.now() - payload.createdAt > HANDOFF_MAX_AGE_MS ||
      typeof payload.name !== "string" ||
      typeof payload.phone !== "string" ||
      typeof payload.email !== "string"
    ) {
      return null;
    }
    return {
      name: payload.name.slice(0, 120),
      phone: payload.phone.slice(0, 40),
      email: payload.email.slice(0, 160)
    };
  } catch {
    return null;
  }
}
