import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "your email here",
    pass: "your password here",
  },
});

export async function sendEmail({ to, subject, html, text }) {
  console.log(process.env.GOOGLE_USER, process.env.GOOGLE_PASS);
  const info = await transporter.sendMail({
    from: "atharvak396@gmail.com",
    to,
    subject,
    html,
    text,
  });

  console.log("Email sent:", info.response);
}
