import emailjs from "@emailjs/browser";

const assessmentEmailConfig = {
  serviceId: "service_p02igzf",
  templateId: "template_id6y2ku",
  publicKey: "jV6VJZBOtjeaELQb2"
} as const;

const productionAssessmentHosts = new Set(["dilliz.com", "www.dilliz.com"]);

export function isAssessmentEmailEnabled() {
  if (typeof window === "undefined") return false;
  const hostname = window.location.hostname.toLowerCase();
  if (productionAssessmentHosts.has(hostname)) return true;
  const trustedPreviewHost =
    hostname === "localhost" ||
    hostname === "127.0.0.1" ||
    hostname.endsWith(".manus.computer") ||
    hostname.endsWith(".manuspre.computer");
  return trustedPreviewHost &&
    window.location.pathname === "/assessment-preview" &&
    import.meta.env.VITE_ENABLE_ASSESSMENT_EMAIL_TEST === "true";
}

export const assessmentEmailParamKeys = [
  "email_title",
  "email_intro",
  "confidentiality_warning",
  "submission_id_label",
  "submission_id",
  "submitted_at_label",
  "submitted_at",
  "language_label",
  "language",
  "reply_to_label",
  "reply_to",
  "section_1_title",
  "full_name_label",
  "full_name",
  "company_name_label",
  "company_name",
  "email_label",
  "email",
  "phone_label",
  "phone",
  "preferred_contact_label",
  "preferred_contact",
  "preferred_contact_other_label",
  "preferred_contact_other",
  "section_2_title",
  "client_type_label",
  "client_type",
  "client_other_label",
  "client_other",
  "section_3_title",
  "tax_status_label",
  "tax_status",
  "tax_other_label",
  "tax_other",
  "section_4_title",
  "trust_purpose_label",
  "trust_purpose",
  "purpose_details_label",
  "purpose_details",
  "section_5_title",
  "asset_type_label",
  "asset_type",
  "section_6_title",
  "other_beneficiaries_label",
  "other_beneficiaries",
  "initial_amount_label",
  "initial_amount",
  "source_of_funds_label",
  "source_of_funds",
  "source_other_label",
  "source_other",
  "funding_method_label",
  "funding_method",
  "funding_other_label",
  "funding_other",
  "section_7_title",
  "account_type_label",
  "account_type",
  "section_8_title",
  "declaration_label",
  "declaration"
] as const;

export type AssessmentEmailParamKey = (typeof assessmentEmailParamKeys)[number];
export type AssessmentEmailParams = Record<AssessmentEmailParamKey, string>;

export function validateAssessmentEmailParams(params: AssessmentEmailParams) {
  const actualKeys = Object.keys(params).sort();
  const expectedKeys = [...assessmentEmailParamKeys].sort();
  if (actualKeys.length !== expectedKeys.length || actualKeys.some((key, index) => key !== expectedKeys[index])) {
    throw new Error("Assessment email parameter mapping does not match the approved template.");
  }
  if (!/^DLZ-(?:SBX-EMAIL|ASSESS)-[a-zA-Z0-9-]{8,64}$/.test(params.submission_id)) {
    throw new Error("Invalid assessment email submission reference.");
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(params.reply_to)) {
    throw new Error("Invalid Reply-To email address.");
  }
  if (!params.full_name.trim() || !params.phone.trim() || !params.declaration.trim()) {
    throw new Error("Required assessment email fields are missing.");
  }
  const totalCharacters = Object.values(params).reduce((total, value) => total + value.length, 0);
  if (totalCharacters > 45_000) {
    throw new Error("Assessment email content is too large for the configured template.");
  }
  return { keyCount: actualKeys.length, totalCharacters };
}

export async function sendAssessmentEmail(params: AssessmentEmailParams) {
  validateAssessmentEmailParams(params);
  if (!isAssessmentEmailEnabled()) {
    throw new Error("Assessment EmailJS sending is not enabled.");
  }

  return emailjs.send(
    assessmentEmailConfig.serviceId,
    assessmentEmailConfig.templateId,
    params,
    assessmentEmailConfig.publicKey
  );
}
