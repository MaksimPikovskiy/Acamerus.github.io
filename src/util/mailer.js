import { nodemailer } from "nodemailer";

export const Mailer = async (mail) => {
  if (!mail.name || !mail.email || !mail.subject || !mail.message) {
    return {
      status: "error",
      message: "Name, email, subject, and message are required",
    };
  }

  // Build email body
  const emailBody = `
    Name: ${mail.name}
    Email: ${mail.email}
    Subject: ${mail.subject}
    Message:
    ${mail.message}
  `;

  // Configure Nodemailer transporter
  const transporter = nodemailer.createTransport({
    service: "hotmail",
    auth: {
      user: import.meta.env.EMAIL_USER,
      pass: import.meta.env.EMAIL_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: `New Contact Message from ${mail.name} - ${mail.subject}`,
      text: emailBody,
    });

    return { status: "success", message: "Email sent successfully" };
  } catch (error) {
    return { status: "error", message: "Error sending email", error };
  }
};

export default Mailer;
