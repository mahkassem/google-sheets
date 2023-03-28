import _mail from "../providers/mail.provider";

export interface MailOptions {
  from?: string;
  to: string;
  subject: string;
  text: string;
  html?: string;
}


const sendMail = async (options: MailOptions) => {
  if (!options.from) options.from = "Admin <info@moolapay.io>";
  if (!options.html) options.html = `
  <h1>${options.subject}</h1>
  ${options.text}
  `;
  return await _mail.sendMail(options);
}

export { sendMail };