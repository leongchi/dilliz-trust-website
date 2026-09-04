/**
 * Style contract: contemporary private-banking editorialism using the existing
 * DILLIZ rock-grey, champagne-gold and blue-grey system. Desktop uses an
 * asymmetric step rail plus a single content stage; mobile uses a compact
 * progress header. Development retains guarded preview tools; production sends
 * the approved full assessment email only after explicit review and consent.
 */
import { useEffect, useRef, useState } from "react";
import {
  AlertCircle,
  ArrowRight,
  Check,
  ChevronLeft,
  ClipboardCheck,
  Eye,
  FlaskConical,
  LockKeyhole,
  MailOpen,
  PencilLine,
  RotateCcw,
  Trash2,
  TriangleAlert
} from "lucide-react";
import Layout from "@/components/Layout";
import { sendAssessmentEmail, type AssessmentEmailParams } from "@/lib/assessmentEmail";
import { consumeContactAssessmentPrefill, contactContinuationCopy } from "@/lib/contactAssessmentHandoff";
import {
  assessmentSteps,
  assessmentProductionUi,
  assessmentUi,
  declarationText,
  labels,
  optionSets,
  type AssessmentLang,
  type AssessmentOption,
  type LocalizedText
} from "@/lib/assessmentPreviewContent";

type FormState = {
  fullName: string;
  companyName: string;
  email: string;
  phone: string;
  preferredContact: string;
  preferredContactOther: string;
  clientType: string;
  clientOther: string;
  taxStatus: string;
  taxOther: string;
  purpose: string[];
  purposeDetails: string;
  assetType: string;
  otherBeneficiaries: string;
  initialAmount: string;
  sourceOfFunds: string;
  sourceOther: string;
  fundingMethod: string[];
  fundingOther: string;
  accountType: string;
  declaration: boolean;
};

type SubmissionStatus = "idle" | "email-preview";
type EmailDeliveryStatus = "locked" | "sending" | "sent" | "error";

const initialForm: FormState = {
  fullName: "",
  companyName: "",
  email: "",
  phone: "",
  preferredContact: "",
  preferredContactOther: "",
  clientType: "",
  clientOther: "",
  taxStatus: "",
  taxOther: "",
  purpose: [],
  purposeDetails: "",
  assetType: "",
  otherBeneficiaries: "",
  initialAmount: "",
  sourceOfFunds: "",
  sourceOther: "",
  fundingMethod: [],
  fundingOther: "",
  accountType: "",
  declaration: false
};

const createTestForm = (lang: AssessmentLang): FormState => ({
  fullName: lang === "en" ? "Alex Chen (Test)" : lang === "cn" ? "陈测试" : "陳測試",
  companyName: "DILLIZ Sandbox Client",
  email: "test.applicant@example.com",
  phone: "+852 5555 0101",
  preferredContact: "whatsapp",
  preferredContactOther: "",
  clientType: "company",
  clientOther: "",
  taxStatus: "none",
  taxOther: "",
  purpose: ["family", "custodian"],
  purposeDetails:
    lang === "en"
      ? "Sandbox workflow test only. No real account-opening request."
      : lang === "cn"
        ? "只用于沙盒流程测试，并非真实开户申请。"
        : "只用於沙盒流程測試，並非真實開戶申請。",
  assetType: "both",
  otherBeneficiaries: "pending",
  initialAmount: "10to50",
  sourceOfFunds: "salary",
  sourceOther: "",
  fundingMethod: ["bank", "digital"],
  fundingOther: "",
  accountType: "virtual",
  declaration: true
});

const createAssessmentReference = (isProduction: boolean) =>
  `DLZ-${isProduction ? "ASSESS" : "SBX-EMAIL"}-${crypto.randomUUID()}`;

const stepFields: Record<number, Array<keyof FormState>> = {
  1: ["fullName", "companyName", "email", "phone", "preferredContact", "preferredContactOther"],
  2: ["clientType", "clientOther"],
  3: ["taxStatus", "taxOther"],
  4: ["purpose", "purposeDetails"],
  5: ["assetType"],
  6: ["otherBeneficiaries", "initialAmount", "sourceOfFunds", "sourceOther", "fundingMethod", "fundingOther"],
  7: ["accountType"],
  8: ["declaration"]
};

const text = (value: LocalizedText, lang: AssessmentLang) => value[lang];

const messages = {
  required: {
    zh: "請完成此必填欄位。",
    cn: "请完成此必填字段。",
    en: "Please complete this required field."
  },
  select: {
    zh: "請選擇一項。",
    cn: "请选择一项。",
    en: "Please select an option."
  },
  selectMany: {
    zh: "請至少選擇一項。",
    cn: "请至少选择一项。",
    en: "Please select at least one option."
  },
  email: {
    zh: "請輸入有效的電郵格式。",
    cn: "请输入有效的电邮格式。",
    en: "Please enter a valid email address."
  },
  phone: {
    zh: "請輸入有效的電話號碼。",
    cn: "请输入有效的电话号码。",
    en: "Please enter a valid phone number."
  }
} satisfies Record<string, LocalizedText>;

const inputBase =
  "w-full min-h-12 rounded-lg border bg-[#151b22] px-4 py-3 text-sm text-slate-100 placeholder:text-slate-600 shadow-[inset_0_1px_2px_rgba(0,0,0,0.35),inset_0_0_0_1px_rgba(255,255,255,0.015)] outline-none transition-[border-color,box-shadow] duration-200 focus:border-[#bfae95] focus:ring-2 focus:ring-[#95856e]/25";

function FieldHeader({
  label,
  lang,
  required = false
}: {
  label: LocalizedText;
  lang: AssessmentLang;
  required?: boolean;
}) {
  return (
    <div className="mb-3 flex flex-wrap items-center gap-2">
      <span className="text-sm font-semibold leading-relaxed tracking-[0.015em] text-slate-200">{text(label, lang)}</span>
      <span
        className={`text-[9px] font-bold tracking-[0.16em] ${
          required ? "text-[#bfae95]" : "text-slate-600"
        }`}
      >
        {required ? text(assessmentUi.required, lang) : text(assessmentUi.optional, lang)}
      </span>
    </div>
  );
}

function FieldError({ id, message }: { id: string; message?: string }) {
  if (!message) return null;
  return (
    <p id={id} role="alert" className="mt-2 flex items-center gap-2 text-xs leading-relaxed text-[#e2a7a7]">
      <AlertCircle size={13} aria-hidden="true" />
      {message}
    </p>
  );
}

function TextField({
  id,
  label,
  lang,
  value,
  onChange,
  required = false,
  error,
  type = "text",
  autoComplete,
  multiline = false
}: {
  id: string;
  label: LocalizedText;
  lang: AssessmentLang;
  value: string;
  onChange: (value: string) => void;
  required?: boolean;
  error?: string;
  type?: "text" | "email" | "tel";
  autoComplete?: string;
  multiline?: boolean;
}) {
  const errorId = `${id}-error`;
  return (
    <div>
      <label htmlFor={id}>
        <FieldHeader label={label} lang={lang} required={required} />
      </label>
      {multiline ? (
        <textarea
          id={id}
          value={value}
          onChange={(event) => onChange(event.target.value)}
          aria-invalid={Boolean(error)}
          aria-describedby={error ? errorId : undefined}
          className={`${inputBase} min-h-32 resize-y ${error ? "border-[#c97f7f]" : "border-white/10"}`}
        />
      ) : (
        <input
          id={id}
          type={type}
          autoComplete={autoComplete}
          value={value}
          onChange={(event) => onChange(event.target.value)}
          aria-invalid={Boolean(error)}
          aria-describedby={error ? errorId : undefined}
          className={`${inputBase} ${error ? "border-[#c97f7f]" : "border-white/10"}`}
        />
      )}
      <FieldError id={errorId} message={error} />
    </div>
  );
}

function ChoiceField({
  name,
  label,
  lang,
  options,
  value,
  onChange,
  required = true,
  multiple = false,
  error
}: {
  name: string;
  label: LocalizedText;
  lang: AssessmentLang;
  options: AssessmentOption[];
  value: string | string[];
  onChange: (value: string | string[]) => void;
  required?: boolean;
  multiple?: boolean;
  error?: string;
}) {
  const values = Array.isArray(value) ? value : [value];
  const errorId = `${name}-error`;

  const toggle = (optionValue: string) => {
    if (!multiple) {
      onChange(optionValue);
      return;
    }
    const current = Array.isArray(value) ? value : [];
    onChange(
      current.includes(optionValue)
        ? current.filter((item) => item !== optionValue)
        : [...current, optionValue]
    );
  };

  return (
    <fieldset id={`${name}-group`} aria-invalid={Boolean(error)} aria-describedby={error ? errorId : undefined}>
      <legend className="w-full">
        <FieldHeader label={label} lang={lang} required={required} />
      </legend>
      <div className="grid gap-3 sm:grid-cols-2">
        {options.map((option) => {
          const selected = values.includes(option.value);
          return (
            <label
              key={option.value}
              className={`group flex min-h-14 items-start gap-3 rounded-lg border px-4 py-3 text-sm leading-relaxed shadow-[inset_0_1px_1px_rgba(255,255,255,0.018)] transition-[border-color,background-color] duration-200 ${
                selected
                  ? "border-[#b09c7d] bg-[#26303a] text-slate-100"
                  : "border-[#66717a]/25 bg-[#151b22] text-slate-300 hover:border-[#95856e]/45 hover:bg-[#1b232b]"
              }`}
            >
              <input
                type={multiple ? "checkbox" : "radio"}
                name={name}
                value={option.value}
                checked={selected}
                onChange={() => toggle(option.value)}
                className="peer sr-only"
              />
              <span
                className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center border transition-colors peer-focus-visible:ring-2 peer-focus-visible:ring-[#bfae95] peer-focus-visible:ring-offset-2 peer-focus-visible:ring-offset-[#181818] ${
                  multiple ? "rounded-md" : "rounded-full"
                } ${selected ? "border-[#bfae95] bg-[#95856e]" : "border-slate-600 bg-transparent"}`}
                aria-hidden="true"
              >
                {selected &&
                  (multiple ? (
                    <Check size={13} className="text-white" />
                  ) : (
                    <span className="h-2 w-2 rounded-full bg-white" />
                  ))}
              </span>
              <span>{text(option.label, lang)}</span>
            </label>
          );
        })}
      </div>
      <FieldError id={errorId} message={error} />
    </fieldset>
  );
}

const selectedOptionText = (
  options: AssessmentOption[],
  value: string,
  lang: AssessmentLang,
  fallback: string
) => options.find((option) => option.value === value)?.label[lang] ?? fallback;

const selectedOptionsText = (
  options: AssessmentOption[],
  values: string[],
  lang: AssessmentLang,
  fallback: string
) => {
  const selected = options.filter((option) => values.includes(option.value)).map((option) => option.label[lang]);
  return selected.length > 0 ? selected.join(lang === "en" ? ", " : "、") : fallback;
};

function ReviewSection({
  title,
  stepId,
  items,
  lang,
  onEdit
}: {
  title: LocalizedText;
  stepId: number;
  items: Array<{ label: LocalizedText; value: string }>;
  lang: AssessmentLang;
  onEdit: (step: number) => void;
}) {
  return (
    <section className="border-b border-[#66717a]/25 py-7 first:pt-0 last:border-b-0 last:pb-0">
      <div className="mb-5 flex items-start justify-between gap-4">
        <div className="flex items-center gap-3">
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#95856e]/60 text-[10px] font-bold text-[#bfae95]">
            {String(stepId).padStart(2, "0")}
          </span>
          <h3 className="font-serif text-lg font-bold text-slate-100">{text(title, lang)}</h3>
        </div>
        <button
          type="button"
          onClick={() => onEdit(stepId)}
          className="inline-flex min-h-9 shrink-0 items-center gap-2 border border-white/10 px-3 text-[10px] font-bold tracking-[0.12em] text-slate-400 transition-colors hover:border-[#95856e]/60 hover:text-[#bfae95] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#95856e]"
        >
          <PencilLine size={13} aria-hidden="true" />
          {text(assessmentUi.edit, lang)}
        </button>
      </div>
      <dl className="grid gap-x-8 gap-y-5 sm:grid-cols-2">
        {items.map((item, index) => (
          <div key={`${stepId}-${index}`} className="min-w-0">
            <dt className="text-[9px] font-bold uppercase tracking-[0.16em] text-slate-600">{text(item.label, lang)}</dt>
            <dd className="mt-1.5 whitespace-pre-wrap break-words text-sm leading-6 text-slate-300">{item.value}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}

export default function AssessmentPreview() {
  const isProductionExperience = import.meta.env.PROD || (
    import.meta.env.DEV && new URLSearchParams(window.location.search).has("productionPreview")
  );
  const experienceUi = isProductionExperience ? assessmentProductionUi : assessmentUi;
  const [lang, setLang] = useState<AssessmentLang>("zh");
  const [currentStep, setCurrentStep] = useState(1);
  const [form, setForm] = useState<FormState>(initialForm);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [reviewing, setReviewing] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState<SubmissionStatus>("idle");
  const [testReference, setTestReference] = useState("");
  const [previewedAt, setPreviewedAt] = useState("");
  const [emailDeliveryStatus, setEmailDeliveryStatus] = useState<EmailDeliveryStatus>("locked");
  const [prefillApplied, setPrefillApplied] = useState(false);
  const [testNotice, setTestNotice] = useState("");
  const [lockedNotice, setLockedNotice] = useState("");
  const stageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const syncLanguage = () => {
      const saved = localStorage.getItem("dilliz_lang");
      if (saved === "zh" || saved === "cn" || saved === "en") {
        setLang(saved);
        setErrors({});
        setLockedNotice("");
        setTestNotice("");
      }
    };
    syncLanguage();
    window.addEventListener("dilliz_lang_changed", syncLanguage);
    return () => {
      window.removeEventListener("dilliz_lang_changed", syncLanguage);
    };
  }, []);

  useEffect(() => {
    const prefill = consumeContactAssessmentPrefill();
    if (!prefill) return;
    setForm((previous) => ({
      ...previous,
      fullName: prefill.name,
      phone: prefill.phone,
      email: prefill.email
    }));
    setPrefillApplied(true);
  }, []);

  useEffect(() => {
    if (!import.meta.env.DEV || !new URLSearchParams(window.location.search).has("emailPreview")) return;
    setForm(createTestForm(lang));
    setReviewing(false);
    setSubmissionStatus("email-preview");
    setTestReference(createAssessmentReference(false));
    setPreviewedAt(
      new Intl.DateTimeFormat(lang === "en" ? "en-GB" : lang === "cn" ? "zh-CN" : "zh-HK", {
        dateStyle: "medium",
        timeStyle: "medium",
        timeZone: "Asia/Hong_Kong"
      }).format(new Date())
    );
    setErrors({});
    setLockedNotice("");
    setEmailDeliveryStatus("locked");
  }, [lang]);

  const update = <K extends keyof FormState>(key: K, value: FormState[K]) => {
    setForm((previous) => ({ ...previous, [key]: value }));
    setTestReference("");
    setPreviewedAt("");
    setEmailDeliveryStatus("locked");
    setTestNotice("");
    setLockedNotice("");
    setErrors((previous) => {
      if (!previous[key]) return previous;
      const next = { ...previous };
      delete next[key];
      return next;
    });
  };

  const scrollToStage = () => {
    window.requestAnimationFrame(() => {
      stageRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  };

  const getStepErrors = (step: number) => {
    const nextErrors: Record<string, string> = {};
    const required = text(messages.required, lang);
    const select = text(messages.select, lang);
    const selectMany = text(messages.selectMany, lang);

    if (step === 1) {
      if (!form.fullName.trim()) nextErrors.fullName = required;
      if (!form.email.trim()) {
        nextErrors.email = required;
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
        nextErrors.email = text(messages.email, lang);
      }
      if (!form.phone.trim()) {
        nextErrors.phone = required;
      } else if (!/^\+?[0-9\s()\-]{8,20}$/.test(form.phone.trim())) {
        nextErrors.phone = text(messages.phone, lang);
      }
      if (!form.preferredContact) nextErrors.preferredContact = select;
      if (form.preferredContact === "other" && !form.preferredContactOther.trim()) {
        nextErrors.preferredContactOther = required;
      }
    }
    if (step === 2) {
      if (!form.clientType) nextErrors.clientType = select;
      if (form.clientType === "other" && !form.clientOther.trim()) nextErrors.clientOther = required;
    }
    if (step === 3) {
      if (!form.taxStatus) nextErrors.taxStatus = select;
      if (form.taxStatus === "other" && !form.taxOther.trim()) nextErrors.taxOther = required;
    }
    if (step === 4) {
      if (form.purpose.length === 0) nextErrors.purpose = selectMany;
      if (form.purpose.includes("other") && !form.purposeDetails.trim()) nextErrors.purposeDetails = required;
    }
    if (step === 5 && !form.assetType) nextErrors.assetType = select;
    if (step === 6) {
      if (!form.otherBeneficiaries) nextErrors.otherBeneficiaries = select;
      if (!form.initialAmount) nextErrors.initialAmount = select;
      if (!form.sourceOfFunds) nextErrors.sourceOfFunds = select;
      if (form.sourceOfFunds === "other" && !form.sourceOther.trim()) nextErrors.sourceOther = required;
      if (form.fundingMethod.length === 0) nextErrors.fundingMethod = selectMany;
      if (form.fundingMethod.includes("other") && !form.fundingOther.trim()) nextErrors.fundingOther = required;
    }
    if (step === 7 && !form.accountType) nextErrors.accountType = select;
    if (step === 8 && !form.declaration) nextErrors.declaration = required;

    return nextErrors;
  };

  const isStepComplete = (step: number) => Object.keys(getStepErrors(step)).length === 0;

  const focusFirstError = (nextErrors: Record<string, string>) => {
    const firstField = Object.keys(nextErrors)[0];
    if (!firstField) return;
    window.requestAnimationFrame(() => {
      const target =
        document.getElementById(firstField) ??
        document.getElementById(`${firstField}-group`) ??
        document.getElementById(`${firstField}-error`);
      target?.focus?.();
      target?.scrollIntoView({ behavior: "smooth", block: "center" });
    });
  };

  const validateStep = (step: number) => {
    const nextErrors = getStepErrors(step);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) focusFirstError(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const firstIncompleteStep = () => {
    for (let index = 1; index <= assessmentSteps.length; index += 1) {
      if (!isStepComplete(index)) return index;
    }
    return null;
  };

  const openStep = (step: number) => {
    const blockedStep = Array.from({ length: Math.max(0, step - 1) }, (_, index) => index + 1).find(
      (item) => !isStepComplete(item)
    );
    if (blockedStep && step > currentStep && !reviewing) {
      setLockedNotice(text(assessmentUi.lockedStep, lang));
      setCurrentStep(blockedStep);
      validateStep(blockedStep);
      scrollToStage();
      return;
    }
    setCurrentStep(step);
    setReviewing(false);
    setSubmissionStatus("idle");
    setLockedNotice("");
    setErrors({});
    scrollToStage();
  };

  const continueToNext = () => {
    if (!validateStep(currentStep)) return;
    if (currentStep < assessmentSteps.length) {
      setCurrentStep((step) => step + 1);
      setErrors({});
      setLockedNotice("");
      scrollToStage();
    } else {
      setReviewing(true);
      setSubmissionStatus("idle");
      scrollToStage();
    }
  };

  const handleFormSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    continueToNext();
  };

  const fillTestData = () => {
    setForm(createTestForm(lang));
    setPrefillApplied(false);
    setCurrentStep(1);
    setReviewing(false);
    setSubmissionStatus("idle");
    setTestReference("");
    setPreviewedAt("");
    setEmailDeliveryStatus("locked");
    setErrors({});
    setLockedNotice("");
    setTestNotice(text(assessmentUi.testDataReady, lang));
    scrollToStage();
  };

  const clearTestData = () => {
    setForm(initialForm);
    setPrefillApplied(false);
    setCurrentStep(1);
    setReviewing(false);
    setSubmissionStatus("idle");
    setTestReference("");
    setPreviewedAt("");
    setEmailDeliveryStatus("locked");
    setErrors({});
    setTestNotice("");
    setLockedNotice("");
    scrollToStage();
  };

  const openReview = () => {
    const incomplete = firstIncompleteStep();
    if (incomplete) {
      setCurrentStep(incomplete);
      setReviewing(false);
      setLockedNotice(text(assessmentUi.lockedStep, lang));
      validateStep(incomplete);
    } else {
      setReviewing(true);
      setSubmissionStatus("idle");
      setEmailDeliveryStatus("locked");
      setErrors({});
      setLockedNotice("");
    }
    scrollToStage();
  };

  const openEmailPreview = () => {
    const reference = testReference || createAssessmentReference(isProductionExperience);
    setTestReference(reference);
    setPreviewedAt(
      new Intl.DateTimeFormat(lang === "en" ? "en-GB" : lang === "cn" ? "zh-CN" : "zh-HK", {
        dateStyle: "medium",
        timeStyle: "medium",
        timeZone: "Asia/Hong_Kong"
      }).format(new Date())
    );
    setSubmissionStatus("email-preview");
    setEmailDeliveryStatus("locked");
    setReviewing(false);
    setErrors({});
    setLockedNotice("");
    scrollToStage();
  };

  const step = assessmentSteps[currentStep - 1];
  const stageNumber = reviewing || submissionStatus !== "idle" ? 9 : currentStep;
  const progress = `${(stageNumber / 9) * 100}%`;
  const notProvided = text(assessmentUi.notProvided, lang);
  const optionValue = (options: AssessmentOption[], value: string) =>
    selectedOptionText(options, value, lang, notProvided);
  const optionValues = (options: AssessmentOption[], values: string[]) =>
    selectedOptionsText(options, values, lang, notProvided);
  const reviewSections: Array<{
    stepId: number;
    items: Array<{ label: LocalizedText; value: string }>;
  }> = [
    {
      stepId: 1,
      items: [
        { label: labels.fullName, value: form.fullName || notProvided },
        { label: labels.companyName, value: form.companyName || notProvided },
        { label: labels.email, value: form.email || notProvided },
        { label: labels.phone, value: form.phone || notProvided },
        { label: labels.preferredContact, value: optionValue(optionSets.contact, form.preferredContact) },
        ...(form.preferredContact === "other"
          ? [{ label: labels.preferredContactOther, value: form.preferredContactOther || notProvided }]
          : [])
      ]
    },
    {
      stepId: 2,
      items: [
        { label: labels.clientType, value: optionValue(optionSets.clientType, form.clientType) },
        ...(form.clientType === "other" ? [{ label: labels.clientOther, value: form.clientOther || notProvided }] : [])
      ]
    },
    {
      stepId: 3,
      items: [
        { label: labels.taxStatus, value: optionValue(optionSets.taxStatus, form.taxStatus) },
        ...(form.taxStatus === "other" ? [{ label: labels.taxOther, value: form.taxOther || notProvided }] : [])
      ]
    },
    {
      stepId: 4,
      items: [
        { label: labels.trustPurpose, value: optionValues(optionSets.purpose, form.purpose) },
        { label: labels.purposeDetails, value: form.purposeDetails || notProvided }
      ]
    },
    {
      stepId: 5,
      items: [{ label: labels.assetType, value: optionValue(optionSets.assetType, form.assetType) }]
    },
    {
      stepId: 6,
      items: [
        { label: labels.otherBeneficiaries, value: optionValue(optionSets.yesNoPending, form.otherBeneficiaries) },
        { label: labels.initialAmount, value: optionValue(optionSets.initialAmount, form.initialAmount) },
        { label: labels.sourceOfFunds, value: optionValue(optionSets.sourceOfFunds, form.sourceOfFunds) },
        ...(form.sourceOfFunds === "other" ? [{ label: labels.sourceOther, value: form.sourceOther || notProvided }] : []),
        { label: labels.fundingMethod, value: optionValues(optionSets.fundingMethod, form.fundingMethod) },
        ...(form.fundingMethod.includes("other") ? [{ label: labels.fundingOther, value: form.fundingOther || notProvided }] : [])
      ]
    },
    {
      stepId: 7,
      items: [{ label: labels.accountType, value: optionValue(optionSets.accountType, form.accountType) }]
    },
    {
      stepId: 8,
      items: [
        {
          label: labels.declaration,
          value: form.declaration
            ? lang === "en"
              ? "Confirmed"
              : lang === "cn"
                ? "已确认"
                : "已確認"
            : notProvided
        }
      ]
    }
  ];

  const declarationValue = form.declaration
    ? lang === "en"
      ? "Confirmed"
      : lang === "cn"
        ? "已确认"
        : "已確認"
    : notProvided;
  const emailParams: AssessmentEmailParams = {
    email_title: text(experienceUi.emailPreviewTitle, lang),
    email_intro: text(experienceUi.emailIntro, lang),
    confidentiality_warning: text(experienceUi.emailPrivacyWarning, lang),
    submission_id_label: text(assessmentUi.testReference, lang),
    submission_id: testReference,
    submitted_at_label: text(experienceUi.submitting, lang),
    submitted_at: previewedAt,
    language_label: lang === "en" ? "LANGUAGE" : lang === "cn" ? "语言" : "語言",
    language: lang === "en" ? "English" : lang === "cn" ? "简体中文" : "繁體中文",
    reply_to_label: text(assessmentUi.emailReplyTo, lang),
    reply_to: form.email,
    section_1_title: text(assessmentSteps[0].title, lang),
    full_name_label: text(labels.fullName, lang),
    full_name: form.fullName || notProvided,
    company_name_label: text(labels.companyName, lang),
    company_name: form.companyName || notProvided,
    email_label: text(labels.email, lang),
    email: form.email || notProvided,
    phone_label: text(labels.phone, lang),
    phone: form.phone || notProvided,
    preferred_contact_label: text(labels.preferredContact, lang),
    preferred_contact: optionValue(optionSets.contact, form.preferredContact),
    preferred_contact_other_label: text(labels.preferredContactOther, lang),
    preferred_contact_other: form.preferredContactOther || notProvided,
    section_2_title: text(assessmentSteps[1].title, lang),
    client_type_label: text(labels.clientType, lang),
    client_type: optionValue(optionSets.clientType, form.clientType),
    client_other_label: text(labels.clientOther, lang),
    client_other: form.clientOther || notProvided,
    section_3_title: text(assessmentSteps[2].title, lang),
    tax_status_label: text(labels.taxStatus, lang),
    tax_status: optionValue(optionSets.taxStatus, form.taxStatus),
    tax_other_label: text(labels.taxOther, lang),
    tax_other: form.taxOther || notProvided,
    section_4_title: text(assessmentSteps[3].title, lang),
    trust_purpose_label: text(labels.trustPurpose, lang),
    trust_purpose: optionValues(optionSets.purpose, form.purpose),
    purpose_details_label: text(labels.purposeDetails, lang),
    purpose_details: form.purposeDetails || notProvided,
    section_5_title: text(assessmentSteps[4].title, lang),
    asset_type_label: text(labels.assetType, lang),
    asset_type: optionValue(optionSets.assetType, form.assetType),
    section_6_title: text(assessmentSteps[5].title, lang),
    other_beneficiaries_label: text(labels.otherBeneficiaries, lang),
    other_beneficiaries: optionValue(optionSets.yesNoPending, form.otherBeneficiaries),
    initial_amount_label: text(labels.initialAmount, lang),
    initial_amount: optionValue(optionSets.initialAmount, form.initialAmount),
    source_of_funds_label: text(labels.sourceOfFunds, lang),
    source_of_funds: optionValue(optionSets.sourceOfFunds, form.sourceOfFunds),
    source_other_label: text(labels.sourceOther, lang),
    source_other: form.sourceOther || notProvided,
    funding_method_label: text(labels.fundingMethod, lang),
    funding_method: optionValues(optionSets.fundingMethod, form.fundingMethod),
    funding_other_label: text(labels.fundingOther, lang),
    funding_other: form.fundingOther || notProvided,
    section_7_title: text(assessmentSteps[6].title, lang),
    account_type_label: text(labels.accountType, lang),
    account_type: optionValue(optionSets.accountType, form.accountType),
    section_8_title: text(assessmentSteps[7].title, lang),
    declaration_label: text(labels.declaration, lang),
    declaration: declarationValue
  };
  const emailSendEnabled = import.meta.env.VITE_ENABLE_ASSESSMENT_EMAIL === "true" ||
    import.meta.env.VITE_ENABLE_ASSESSMENT_EMAIL_TEST === "true";

  const sendFullAssessmentEmail = async () => {
    if (emailDeliveryStatus === "sending" || emailDeliveryStatus === "sent") return;
    setEmailDeliveryStatus("sending");
    try {
      await sendAssessmentEmail(emailParams);
      setEmailDeliveryStatus("sent");
    } catch {
      setEmailDeliveryStatus("error");
    }
  };

  const renderStep = () => {
    if (currentStep === 1) {
      return (
        <div className="grid gap-6 md:grid-cols-2">
          <TextField id="fullName" label={labels.fullName} lang={lang} value={form.fullName} onChange={(value) => update("fullName", value)} required error={errors.fullName} autoComplete="name" />
          <TextField id="companyName" label={labels.companyName} lang={lang} value={form.companyName} onChange={(value) => update("companyName", value)} autoComplete="organization" />
          <TextField id="email" label={labels.email} lang={lang} value={form.email} onChange={(value) => update("email", value)} required error={errors.email} type="email" autoComplete="email" />
          <TextField id="phone" label={labels.phone} lang={lang} value={form.phone} onChange={(value) => update("phone", value)} required error={errors.phone} type="tel" autoComplete="tel" />
          <div className="md:col-span-2">
            <ChoiceField name="preferredContact" label={labels.preferredContact} lang={lang} options={optionSets.contact} value={form.preferredContact} onChange={(value) => update("preferredContact", value as string)} error={errors.preferredContact} />
          </div>
          {form.preferredContact === "other" && (
            <div className="md:col-span-2">
              <TextField id="preferredContactOther" label={labels.preferredContactOther} lang={lang} value={form.preferredContactOther} onChange={(value) => update("preferredContactOther", value)} required error={errors.preferredContactOther} />
            </div>
          )}
        </div>
      );
    }

    if (currentStep === 2) {
      return (
        <div className="space-y-7">
          <ChoiceField name="clientType" label={labels.clientType} lang={lang} options={optionSets.clientType} value={form.clientType} onChange={(value) => update("clientType", value as string)} error={errors.clientType} />
          {form.clientType === "other" && (
            <TextField id="clientOther" label={labels.clientOther} lang={lang} value={form.clientOther} onChange={(value) => update("clientOther", value)} required error={errors.clientOther} />
          )}
        </div>
      );
    }

    if (currentStep === 3) {
      return (
        <div className="space-y-7">
          <ChoiceField name="taxStatus" label={labels.taxStatus} lang={lang} options={optionSets.taxStatus} value={form.taxStatus} onChange={(value) => update("taxStatus", value as string)} error={errors.taxStatus} />
          {form.taxStatus === "other" && (
            <TextField id="taxOther" label={labels.taxOther} lang={lang} value={form.taxOther} onChange={(value) => update("taxOther", value)} required error={errors.taxOther} />
          )}
        </div>
      );
    }

    if (currentStep === 4) {
      return (
        <div className="space-y-7">
          <ChoiceField name="purpose" label={labels.trustPurpose} lang={lang} options={optionSets.purpose} value={form.purpose} onChange={(value) => update("purpose", value as string[])} multiple error={errors.purpose} />
          <TextField id="purposeDetails" label={labels.purposeDetails} lang={lang} value={form.purposeDetails} onChange={(value) => update("purposeDetails", value)} multiline required={form.purpose.includes("other")} error={errors.purposeDetails} />
        </div>
      );
    }

    if (currentStep === 5) {
      return (
        <ChoiceField name="assetType" label={labels.assetType} lang={lang} options={optionSets.assetType} value={form.assetType} onChange={(value) => update("assetType", value as string)} error={errors.assetType} />
      );
    }

    if (currentStep === 6) {
      return (
        <div className="space-y-9">
          <ChoiceField name="otherBeneficiaries" label={labels.otherBeneficiaries} lang={lang} options={optionSets.yesNoPending} value={form.otherBeneficiaries} onChange={(value) => update("otherBeneficiaries", value as string)} error={errors.otherBeneficiaries} />
          <ChoiceField name="initialAmount" label={labels.initialAmount} lang={lang} options={optionSets.initialAmount} value={form.initialAmount} onChange={(value) => update("initialAmount", value as string)} error={errors.initialAmount} />
          <ChoiceField name="sourceOfFunds" label={labels.sourceOfFunds} lang={lang} options={optionSets.sourceOfFunds} value={form.sourceOfFunds} onChange={(value) => update("sourceOfFunds", value as string)} error={errors.sourceOfFunds} />
          {form.sourceOfFunds === "other" && (
            <TextField id="sourceOther" label={labels.sourceOther} lang={lang} value={form.sourceOther} onChange={(value) => update("sourceOther", value)} required error={errors.sourceOther} />
          )}
          <ChoiceField name="fundingMethod" label={labels.fundingMethod} lang={lang} options={optionSets.fundingMethod} value={form.fundingMethod} onChange={(value) => update("fundingMethod", value as string[])} multiple error={errors.fundingMethod} />
          {form.fundingMethod.includes("other") && (
            <TextField id="fundingOther" label={labels.fundingOther} lang={lang} value={form.fundingOther} onChange={(value) => update("fundingOther", value)} required error={errors.fundingOther} />
          )}
        </div>
      );
    }

    if (currentStep === 7) {
      return (
        <ChoiceField name="accountType" label={labels.accountType} lang={lang} options={optionSets.accountType} value={form.accountType} onChange={(value) => update("accountType", value as string)} error={errors.accountType} />
      );
    }

    return (
      <div className="space-y-7">
        <FieldHeader label={labels.declaration} lang={lang} required />
        <label
          className={`flex items-start gap-4 rounded-lg border p-5 text-sm leading-7 shadow-[inset_0_1px_2px_rgba(0,0,0,0.28)] transition-colors ${
            form.declaration
              ? "border-[#b09c7d] bg-[#26303a] text-slate-100"
              : "border-[#66717a]/25 bg-[#151b22] text-slate-300 hover:border-[#95856e]/45"
          }`}
        >
          <input
            type="checkbox"
            checked={form.declaration}
            onChange={(event) => update("declaration", event.target.checked)}
            className="peer sr-only"
            aria-describedby={errors.declaration ? "declaration-error" : undefined}
          />
          <span
            className={`mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-md border peer-focus-visible:ring-2 peer-focus-visible:ring-[#bfae95] peer-focus-visible:ring-offset-2 peer-focus-visible:ring-offset-[#181818] ${
              form.declaration ? "border-[#bfae95] bg-[#95856e]" : "border-slate-600"
            }`}
            aria-hidden="true"
          >
            {form.declaration && <Check size={15} className="text-white" />}
          </span>
          <span>{text(declarationText, lang)}</span>
        </label>
        <FieldError id="declaration-error" message={errors.declaration} />

        <div className="border-t border-white/10 pt-6">
          <p className="mb-2 flex items-center gap-2 text-[10px] font-bold tracking-[0.2em] text-[#bfae95]">
            <LockKeyhole size={14} aria-hidden="true" />
            {text(assessmentUi.privacyLead, lang)}
          </p>
          <p className="text-xs leading-6 text-slate-500">{text(experienceUi.privacyText, lang)}</p>
        </div>
      </div>
    );
  };

  return (
    <Layout>
      <main className="relative bg-[#16191d] py-12 md:py-16">
        <div className="pointer-events-none absolute left-0 top-0 h-72 w-72 bg-[#95856e]/[0.06] blur-[110px]" />
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,transparent_0,transparent_calc(50%-1px),rgba(149,133,110,0.025)_50%,transparent_calc(50%+1px),transparent_100%)]" />
        <div className="mx-auto max-w-7xl px-5 sm:px-6">
          <div className="mb-8 max-w-4xl">
            <span className="mb-4 block text-[10px] font-bold tracking-[0.28em] text-[#bfae95]">
              {text(assessmentUi.eyebrow, lang)}
            </span>
            <h1 className="max-w-4xl font-serif text-3xl font-bold leading-tight text-slate-100 sm:text-4xl md:text-5xl">
              {text(assessmentUi.title, lang)}
            </h1>
            <p className="mt-5 max-w-2xl text-sm font-light leading-7 text-slate-400 md:text-base">
              {text(assessmentUi.subtitle, lang)}
            </p>
          </div>

          <section className="mb-8 flex items-start gap-4 border-y border-[#95856e]/35 bg-[#1b2229] px-4 py-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.018)] sm:px-5" aria-label={text(experienceUi.previewLabel, lang)}>
            <Eye size={19} className="mt-0.5 shrink-0 text-[#bfae95]" aria-hidden="true" />
            <div>
              <p className="text-[10px] font-bold tracking-[0.2em] text-[#bfae95]">{text(experienceUi.previewLabel, lang)}</p>
              <p className="mt-1 text-xs leading-6 text-slate-300 sm:text-sm">{text(experienceUi.previewNotice, lang)}</p>
            </div>
          </section>

          {!isProductionExperience && <section className="mb-8 border border-[#66717a]/25 bg-[#182028] px-4 py-4 sm:px-5" aria-label={text(assessmentUi.testTools, lang)}>
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-3">
                <FlaskConical size={18} className="shrink-0 text-[#bfae95]" aria-hidden="true" />
                <div>
                  <p className="text-[10px] font-bold tracking-[0.2em] text-[#bfae95]">{text(assessmentUi.testTools, lang)}</p>
                  {testNotice && <p role="status" className="mt-1 text-xs leading-5 text-slate-400">{testNotice}</p>}
                </div>
              </div>
              <div className="flex flex-col gap-2 min-[430px]:flex-row">
                <button
                  type="button"
                  onClick={fillTestData}
                  className="inline-flex min-h-11 items-center justify-center gap-2 border border-[#95856e]/55 bg-[#95856e]/10 px-4 text-[10px] font-bold tracking-[0.12em] text-[#d4c4aa] transition-colors hover:bg-[#95856e]/18 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#bfae95]"
                >
                  <FlaskConical size={14} aria-hidden="true" />
                  {text(assessmentUi.autoFill, lang)}
                </button>
                <button
                  type="button"
                  onClick={clearTestData}
                  className="inline-flex min-h-11 items-center justify-center gap-2 border border-white/10 px-4 text-[10px] font-bold tracking-[0.12em] text-slate-400 transition-colors hover:border-[#95856e]/45 hover:text-[#bfae95] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#95856e]"
                >
                  <Trash2 size={14} aria-hidden="true" />
                  {text(assessmentUi.clearTest, lang)}
                </button>
              </div>
            </div>
          </section>}

          <div className="grid items-start gap-6 lg:grid-cols-[300px_minmax(0,1fr)] lg:gap-8">
            <aside className="hidden border border-[#66717a]/25 bg-[#1b2026] p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.025),0_20px_55px_rgba(0,0,0,0.18)] lg:sticky lg:top-28 lg:block" aria-label="Assessment steps">
              <div className="mb-6 flex items-center justify-between border-b border-white/10 pb-5">
                <span className="text-[10px] font-bold tracking-[0.2em] text-slate-500">{text(experienceUi.previewLabel, lang)}</span>
                <span className="text-xs font-semibold text-[#bfae95]">{stageNumber}/9</span>
              </div>
              <ol className="relative space-y-1 before:absolute before:bottom-5 before:left-4 before:top-5 before:w-px before:bg-gradient-to-b before:from-[#95856e]/45 before:via-[#66717a]/20 before:to-transparent">
                {assessmentSteps.map((item) => {
                  const active = submissionStatus === "idle" && !reviewing && item.id === currentStep;
                  const passed = isStepComplete(item.id);
                  return (
                    <li key={item.id}>
                      <button
                        type="button"
                        onClick={() => openStep(item.id)}
                        aria-current={active ? "step" : undefined}
                        className={`relative grid w-full grid-cols-[32px_1fr] items-center gap-3 border-b border-white/[0.055] bg-[#1b2026] py-3 text-left transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#95856e] ${
                          active ? "text-slate-100" : "text-slate-500 hover:text-slate-300"
                        }`}
                      >
                        <span
                          className={`flex h-8 w-8 items-center justify-center rounded-full border text-[10px] font-bold ${
                            active
                              ? "border-[#bfae95] bg-[#95856e] text-white"
                              : passed
                                ? "border-[#95856e]/70 text-[#bfae95]"
                                : "border-white/10 text-slate-600"
                          }`}
                        >
                          {passed ? <Check size={13} /> : String(item.id).padStart(2, "0")}
                        </span>
                        <span className="text-xs font-semibold leading-5">{text(item.title, lang)}</span>
                      </button>
                    </li>
                  );
                })}
              </ol>
              <button
                type="button"
                onClick={openReview}
                aria-current={reviewing || submissionStatus !== "idle" ? "step" : undefined}
                className={`mt-3 grid w-full grid-cols-[32px_1fr] items-center gap-3 border-y border-white/[0.07] py-3 text-left transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#95856e] ${
                  reviewing || submissionStatus !== "idle" ? "text-slate-100" : "text-slate-500 hover:text-slate-300"
                }`}
              >
                <span className={`flex h-8 w-8 items-center justify-center rounded-full border text-[10px] font-bold ${reviewing || submissionStatus !== "idle" ? "border-[#bfae95] bg-[#95856e] text-white" : "border-white/10 text-slate-600"}`}>
                  09
                </span>
                <span className="text-xs font-semibold leading-5">{text(assessmentUi.review, lang)}</span>
              </button>
              <p className="mt-6 text-[11px] leading-5 text-slate-600">{text(assessmentUi.directReview, lang)}</p>
            </aside>

            <div ref={stageRef} className="scroll-mt-28">
              <div className="mb-5 border border-[#66717a]/25 bg-[#1b2026] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.025)] lg:hidden">
                <div className="mb-3 flex items-center justify-between">
                  <span className="text-[10px] font-bold tracking-[0.18em] text-[#bfae95]">
                    {text(assessmentUi.step, lang)} {stageNumber} {text(assessmentUi.of, lang)} 9
                  </span>
                  <button
                    type="button"
                    onClick={openReview}
                    className="text-[10px] font-bold tracking-[0.12em] text-slate-500 underline decoration-slate-700 underline-offset-4"
                  >
                    {text(assessmentUi.review, lang)}
                  </button>
                </div>
                <div className="h-1 bg-white/10" aria-hidden="true">
                  <div className="h-full bg-[#95856e] transition-[width] duration-300" style={{ width: progress }} />
                </div>
                <p className="mt-3 text-sm font-semibold text-slate-200">
                  {reviewing || submissionStatus !== "idle" ? text(assessmentUi.reviewTitle, lang) : text(step.title, lang)}
                </p>
                <div className="mt-4 grid grid-cols-5 gap-2" aria-label="Mobile assessment steps">
                  {assessmentSteps.map((item) => (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => openStep(item.id)}
                      aria-label={`${text(assessmentUi.step, lang)} ${item.id}: ${text(item.title, lang)}`}
                      className={`flex min-h-9 items-center justify-center border text-[10px] font-bold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#95856e] ${
                        !reviewing && submissionStatus === "idle" && currentStep === item.id
                          ? "border-[#bfae95] bg-[#95856e] text-white"
                          : isStepComplete(item.id)
                            ? "border-[#95856e]/60 text-[#bfae95]"
                            : "border-white/10 text-slate-600"
                      }`}
                    >
                      {isStepComplete(item.id) ? <Check size={13} aria-hidden="true" /> : String(item.id).padStart(2, "0")}
                    </button>
                  ))}
                  <button
                    type="button"
                    onClick={openReview}
                    aria-label={text(assessmentUi.review, lang)}
                    className={`flex min-h-9 items-center justify-center border text-[10px] font-bold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#95856e] ${
                      reviewing || submissionStatus !== "idle" ? "border-[#bfae95] bg-[#95856e] text-white" : "border-white/10 text-slate-600"
                    }`}
                  >
                    09
                  </button>
                </div>
              </div>

              {(lockedNotice || Object.keys(errors).length > 0) && (
                <div role="alert" className="mb-5 flex items-start gap-3 border border-[#c97f7f]/30 bg-[#c97f7f]/[0.07] px-4 py-3 text-xs leading-6 text-[#e2b4b4]">
                  <TriangleAlert size={16} className="mt-1 shrink-0" aria-hidden="true" />
                  {lockedNotice || text(assessmentUi.errorSummary, lang)}
                </div>
              )}

              <form onSubmit={handleFormSubmit} noValidate>
                <section className="relative border border-[#66717a]/30 bg-[#1b2026] shadow-[inset_0_1px_0_rgba(255,255,255,0.03),inset_0_0_55px_rgba(15,28,40,0.18),0_22px_70px_rgba(0,0,0,0.3)]">
                  <div className="h-1 w-full bg-gradient-to-r from-transparent via-[#95856e] to-transparent" />

                  {submissionStatus === "email-preview" ? (
                    <>
                      <div className="flex items-center justify-between border-b border-[#95856e]/25 bg-[#182028] px-5 py-3 text-[9px] font-bold tracking-[0.18em] text-slate-500 sm:px-8 md:px-10">
                        <span className="text-[#bfae95]">{text(experienceUi.emailPreviewEyebrow, lang)}</span>
                        <MailOpen size={16} className="text-[#bfae95]" aria-hidden="true" />
                      </div>
                      <div className="bg-[#eee9df] px-3 py-5 sm:px-7 sm:py-8 md:px-10">
                        <article className="mx-auto max-w-3xl border border-[#cfc2ad] bg-white text-[#17202a] shadow-[0_22px_65px_rgba(0,0,0,0.22)]">
                          <header className="border-b-[3px] border-[#b5a17e] bg-[#151b22] px-5 py-7 sm:px-8">
                            <p className="text-[9px] font-bold tracking-[0.22em] text-[#c9b895]">DILLIZ CAPITAL TRUST LIMITED</p>
                            <h2 className="mt-3 font-serif text-2xl font-bold leading-tight text-white sm:text-3xl">{text(experienceUi.emailPreviewTitle, lang)}</h2>
                            <p className="mt-3 text-xs leading-6 text-slate-300">{text(experienceUi.emailIntro, lang)}</p>
                          </header>

                          <div className="border-b border-[#e5ded2] px-5 py-6 sm:px-8">
                            <dl className="grid gap-x-8 gap-y-4 sm:grid-cols-2">
                              <div>
                                <dt className="text-[9px] font-bold tracking-[0.15em] text-[#7d6e57]">{text(assessmentUi.emailTo, lang)}</dt>
                                <dd className="mt-1 break-all text-sm font-semibold">info@dilliz.com</dd>
                              </div>
                              <div>
                                <dt className="text-[9px] font-bold tracking-[0.15em] text-[#7d6e57]">{text(assessmentUi.emailReplyTo, lang)}</dt>
                                <dd className="mt-1 break-all text-sm font-semibold">{form.email}</dd>
                              </div>
                              <div className="sm:col-span-2">
                                <dt className="text-[9px] font-bold tracking-[0.15em] text-[#7d6e57]">{text(assessmentUi.emailSubject, lang)}</dt>
                                <dd className="mt-1 break-words text-sm font-semibold">{text(experienceUi.emailSubjectValue, lang)} — {testReference}</dd>
                              </div>
                              <div>
                                <dt className="text-[9px] font-bold tracking-[0.15em] text-[#7d6e57]">{text(assessmentUi.testReference, lang)}</dt>
                                <dd className="mt-1 break-all font-mono text-xs">{testReference}</dd>
                              </div>
                              <div>
                                <dt className="text-[9px] font-bold tracking-[0.15em] text-[#7d6e57]">{text(experienceUi.submitting, lang)}</dt>
                                <dd className="mt-1 text-sm font-semibold">{previewedAt}</dd>
                              </div>
                            </dl>
                          </div>

                          <div className="border-b border-[#e5ded2] bg-[#fbf9f5] px-5 py-5 sm:px-8">
                            <p className="text-xs font-semibold leading-6 text-[#6d5840]">{text(experienceUi.emailPrivacyWarning, lang)}</p>
                          </div>

                          <div className="px-5 py-2 sm:px-8">
                            {reviewSections.map((section) => (
                              <section key={section.stepId} className="border-b border-[#e5ded2] py-6 last:border-b-0">
                                <div className="mb-5 flex items-center gap-3">
                                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-[#a8916c] text-[9px] font-bold text-[#7d6e57]">
                                    {String(section.stepId).padStart(2, "0")}
                                  </span>
                                  <h3 className="font-serif text-lg font-bold text-[#17202a]">{text(assessmentSteps[section.stepId - 1].title, lang)}</h3>
                                </div>
                                <dl className="grid gap-x-8 gap-y-5 sm:grid-cols-2">
                                  {section.items.map((item, index) => (
                                    <div key={`${section.stepId}-email-${index}`} className="min-w-0">
                                      <dt className="text-[9px] font-bold uppercase tracking-[0.14em] text-[#8a7b67]">{text(item.label, lang)}</dt>
                                      <dd className="mt-1.5 whitespace-pre-wrap break-words text-sm leading-6 text-[#33404c]">{item.value}</dd>
                                    </div>
                                  ))}
                                </dl>
                              </section>
                            ))}
                          </div>

                          <footer className="border-t border-[#e5ded2] bg-[#f7f4ee] px-5 py-5 text-[11px] leading-5 text-[#6f7479] sm:px-8">
                            {text(experienceUi.emailPrivacyWarning, lang)}
                          </footer>
                        </article>
                      </div>
                      <footer className="border-t border-[#95856e]/25 bg-[#182028]/55 px-5 py-6 sm:px-8 md:px-10">
                        <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                          <p
                            role={emailDeliveryStatus === "error" ? "alert" : "status"}
                            className={`max-w-xl text-xs leading-6 ${
                              emailDeliveryStatus === "error"
                                ? "text-[#e2a7a7]"
                                : emailDeliveryStatus === "sent"
                                  ? "text-[#bfae95]"
                                  : "text-slate-500"
                            }`}
                          >
                            {emailDeliveryStatus === "error"
                                ? text(experienceUi.emailSendError, lang)
                              : emailDeliveryStatus === "sent"
                                ? text(experienceUi.emailSentText, lang)
                                : text(experienceUi.emailNotSent, lang)}
                          </p>
                          <div className="flex flex-col gap-3 sm:flex-row">
                            <button type="button" onClick={openReview} disabled={emailDeliveryStatus === "sending"} className="btn-gold-outline inline-flex min-h-12 shrink-0 items-center justify-center gap-2 px-6 text-xs font-bold disabled:cursor-not-allowed disabled:opacity-50">
                              <ChevronLeft size={15} aria-hidden="true" />
                              {text(experienceUi.emailBackToReview, lang)}
                            </button>
                            <button
                              type="button"
                              onClick={sendFullAssessmentEmail}
                              disabled={!emailSendEnabled || emailDeliveryStatus === "sending" || emailDeliveryStatus === "sent"}
                              className="btn-gold inline-flex min-h-12 shrink-0 items-center justify-center gap-2 px-6 text-xs font-bold disabled:cursor-not-allowed disabled:opacity-55"
                            >
                              <MailOpen size={15} aria-hidden="true" />
                              {emailDeliveryStatus === "sending"
                                ? text(experienceUi.emailSending, lang)
                                : emailDeliveryStatus === "sent"
                                  ? text(experienceUi.emailSent, lang)
                                  : emailDeliveryStatus === "error"
                                    ? text(experienceUi.emailRetry, lang)
                                    : emailSendEnabled
                                      ? text(experienceUi.emailSendTest, lang)
                                      : text(experienceUi.emailSendLocked, lang)}
                            </button>
                          </div>
                        </div>
                      </footer>
                    </>
                  ) : reviewing ? (
                    <>
                      <div className="flex flex-col gap-2 border-b border-[#95856e]/25 bg-[#182028] px-5 py-3 text-[9px] font-bold tracking-[0.18em] text-slate-500 sm:flex-row sm:items-center sm:justify-between sm:px-8 md:px-10">
                        <span className="text-[#bfae95]">{text(assessmentUi.confidential, lang)}</span>
                        <span>{text(assessmentUi.documentRef, lang)}</span>
                      </div>
                      <header className="border-b border-[#66717a]/25 px-5 py-7 sm:px-8 md:px-10 md:py-9">
                        <span className="text-[10px] font-bold tracking-[0.22em] text-[#bfae95]">{text(assessmentUi.step, lang)} 09</span>
                        <h2 className="mt-3 font-serif text-2xl font-bold leading-tight text-slate-100 md:text-3xl">{text(assessmentUi.reviewTitle, lang)}</h2>
                        <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-500">{text(experienceUi.reviewDescription, lang)}</p>
                      </header>
                      <div className="px-5 py-8 sm:px-8 md:px-10 md:py-10">
                        {reviewSections.map((section) => (
                          <ReviewSection
                            key={section.stepId}
                            title={assessmentSteps[section.stepId - 1].title}
                            stepId={section.stepId}
                            items={section.items}
                            lang={lang}
                            onEdit={openStep}
                          />
                        ))}
                      </div>
                      <footer className="border-t border-[#95856e]/25 bg-[#182028]/55 px-5 py-6 sm:px-8 md:px-10">
                        <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
                          <div className="max-w-xl">
                            <p className="text-[10px] font-bold tracking-[0.2em] text-[#bfae95]">{text(experienceUi.testSubmitLead, lang)}</p>
                            <p className="mt-2 text-xs leading-6 text-slate-500">{text(experienceUi.testSubmitText, lang)}</p>
                          </div>
                          <div className="flex flex-col gap-3 sm:flex-row">
                            <button type="button" onClick={openEmailPreview} className="btn-gold inline-flex min-h-12 items-center justify-center gap-2 px-6 text-xs font-bold">
                              {text(experienceUi.simulateSuccess, lang)}
                              <MailOpen size={15} aria-hidden="true" />
                            </button>
                          </div>
                        </div>
                      </footer>
                    </>
                  ) : (
                    <>
                      <div className="flex flex-col gap-2 border-b border-[#95856e]/25 bg-[#182028] px-5 py-3 text-[9px] font-bold tracking-[0.18em] text-slate-500 sm:flex-row sm:items-center sm:justify-between sm:px-8 md:px-10">
                        <span className="text-[#bfae95]">{text(assessmentUi.confidential, lang)}</span>
                        <span>{text(assessmentUi.documentRef, lang)}</span>
                      </div>
                      <header className="border-b border-[#66717a]/25 px-5 py-7 sm:px-8 md:px-10 md:py-9">
                        <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
                          <div>
                            <span className="text-[10px] font-bold tracking-[0.22em] text-[#bfae95]">
                              {text(assessmentUi.step, lang)} {String(currentStep).padStart(2, "0")}
                            </span>
                            <h2 className="mt-3 font-serif text-2xl font-bold leading-tight text-slate-100 md:text-3xl">{text(step.title, lang)}</h2>
                            <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-500">{text(step.description, lang)}</p>
                          </div>
                          <div className="hidden shrink-0 items-center gap-2 text-xs text-slate-600 sm:flex" aria-hidden="true">
                            <span className="h-px w-10 bg-[#95856e]/50" />
                            {currentStep}/8
                          </div>
                        </div>
                      </header>

                      <div className="px-5 py-8 sm:px-8 md:px-10 md:py-10">
                        {currentStep === 1 && prefillApplied && (
                          <div role="status" className="mb-7 flex items-start gap-3 border-y border-[#95856e]/30 bg-[#95856e]/[0.07] px-4 py-4 text-sm leading-6 text-[#d4c4aa]">
                            <Check size={17} className="mt-0.5 shrink-0" aria-hidden="true" />
                            <span>{contactContinuationCopy.prefilled[lang]}</span>
                          </div>
                        )}
                        <div key={currentStep} className="animate-fadeIn">{renderStep()}</div>
                      </div>

                      <footer className="flex flex-col-reverse gap-3 border-t border-[#95856e]/25 bg-[#182028]/55 px-5 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-8 md:px-10">
                        <button
                          type="button"
                          onClick={() => openStep(Math.max(1, currentStep - 1))}
                          disabled={currentStep === 1}
                          className="inline-flex min-h-12 items-center justify-center gap-2 border border-white/10 px-5 text-xs font-bold tracking-[0.12em] text-slate-300 transition-colors hover:border-[#95856e]/60 hover:text-[#bfae95] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#95856e] disabled:cursor-not-allowed disabled:opacity-30"
                        >
                          <ChevronLeft size={16} aria-hidden="true" />
                          {text(assessmentUi.previous, lang)}
                        </button>
                        {currentStep < 8 ? (
                          <button type="button" onClick={continueToNext} className="btn-gold inline-flex min-h-12 items-center justify-center gap-2 px-7 text-xs font-bold">
                            {text(assessmentUi.next, lang)}
                            <ArrowRight size={16} aria-hidden="true" />
                          </button>
                        ) : (
                          <button type="submit" className="btn-gold inline-flex min-h-12 items-center justify-center gap-2 px-7 text-xs font-bold">
                            {text(assessmentUi.review, lang)}
                            <ClipboardCheck size={16} aria-hidden="true" />
                          </button>
                        )}
                      </footer>
                    </>
                  )}
                </section>
              </form>

              <div className="mt-5 flex items-start gap-3 px-1 text-[11px] leading-5 text-slate-600">
                <LockKeyhole size={14} className="mt-0.5 shrink-0 text-[#95856e]" aria-hidden="true" />
                <span>{text(experienceUi.previewNotice, lang)}</span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}
