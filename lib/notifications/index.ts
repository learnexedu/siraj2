// lib
import { sendEmail } from "@/lib/mail";

// send otp by email
export const sendEmailOtp = async (
  email: string,
  name: string,
  otp: string
) => {
  // content
  const content = `<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>رمز التحقق</title>
<style>
  body, p, h1, h2, h3, a {
    margin: 0;
    padding: 0;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    color: #333;
  }

  body {
    background-color: #1a1a1a;
  }

  .email-wrapper {
    max-width: 600px;
    margin: 40px auto;
    background-color: #2c2c2c;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 6px 18px rgba(0,0,0,0.5);
    border-top: 6px solid #444;
  }

  .header {
    text-align: center;
    padding: 30px 20px;
    background-color: #333;
  }

  .logo-circle {
    width: 60px;
    height: 60px;
    background-color: #444;
    border-radius: 50%;
    color: #fff;
    font-weight: bold;
    font-size: 28px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 15px;
  }

  .header h1 {
    font-size: 22px;
    font-weight: bold;
    color: #f5f5f5;
    margin-bottom: 5px;
  }

  .header p {
    font-size: 14px;
    color: #aaa;
  }

  .content {
    padding: 30px 25px;
    text-align: center;
  }

  .content p {
    font-size: 16px;
    line-height: 1.6;
    color: #ddd;
    margin-bottom: 25px;
  }

  .otp-box {
    display: inline-block;
    font-size: 28px;
    letter-spacing: 6px;
    background-color: #444;
    padding: 15px 25px;
    border-radius: 8px;
    font-weight: bold;
    color: #f5f5f5;
    margin-bottom: 25px;
  }

  .btn {
    display: inline-block;
    padding: 14px 28px;
    background-color: #555;
    color: #fff;
    text-decoration: none;
    font-weight: bold;
    border-radius: 8px;
    transition: 0.3s;
  }

  .btn:hover {
    background-color: #666;
  }

  .footer {
    padding: 20px 25px;
    font-size: 13px;
    color: #888;
    text-align: center;
    border-top: 1px solid #444;
  }

  .footer a {
    color: #aaa;
    text-decoration: none;
  }
</style>
</head>
<body>
  <div class="email-wrapper">
    <div class="header">
      <h1>جامعة قناة السويس - سراج</h1>
      <p>رمز التحقق لتأكيد حسابك</p>
    </div>

     <div class="content">
      <p>مرحباً <strong>${name}</strong>! 👋<br>لقد طلبت رمز التحقق الخاص بك لتسجيل الدخول أو تأكيد بريدك الإلكتروني.</p>
      <div class="otp-box">${otp}</div>
      <p>أدخل هذا الرمز في تطبيق سراج لإكمال العملية. لا تشارك هذا الرمز مع أي شخص آخر.</p>
    </div>

    <div class="footer">
      إذا لم تطلب رمز التحقق هذا، يمكنك تجاهل هذه الرسالة. <br>
      لمزيد من الدعم، اتصل بنا عبر <a href="mailto:support@siraj.edu.eg">support@siraj.edu.eg</a>
    </div>
  </div>
</body>
</html>
      `;

  // send email
  await sendEmail(email, "security otp", content);
};
