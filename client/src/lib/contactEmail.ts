// DILLIZ Contact EmailJS contract: keep the client name aliases synchronized because
// the long-lived dashboard template has used different variable names over time.
export type ContactEmailInput = {
  name: string;
  phone: string;
  email: string;
  message: string;
};

export type ContactEmailTemplateParams = {
  from_name: string;
  customer_name: string;
  client_name: string;
  user_name: string;
  name: string;
  phone: string;
  reply_to: string;
  email: string;
  message: string;
};

export function buildContactEmailTemplateParams(
  input: ContactEmailInput,
  notProvided: string,
  noMessage = "（無留言 / No Message）"
): ContactEmailTemplateParams {
  const customerName = input.name.trim();
  const email = input.email.trim();

  if (!customerName) {
    throw new Error("CONTACT_NAME_REQUIRED");
  }

  if (!email) {
    throw new Error("CONTACT_EMAIL_REQUIRED");
  }

  return {
    from_name: customerName,
    customer_name: customerName,
    client_name: customerName,
    user_name: customerName,
    name: customerName,
    phone: input.phone.trim() || notProvided,
    reply_to: email,
    email,
    message: input.message.trim() || noMessage
  };
}
