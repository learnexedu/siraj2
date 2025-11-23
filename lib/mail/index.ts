// packages
import { Resend } from "resend";

// api
const resend = new Resend("re_KR8cTKYw_7bguYxECTNERLGrGcWgiaGGE");

// send email
export const sendEmail = async (to: string, subject: string, html: string) => {
  resend.emails.send({
    from: "onboarding@resend.dev",
    to,
    subject,
    html,
  });
};
