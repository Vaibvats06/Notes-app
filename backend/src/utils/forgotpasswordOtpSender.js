import nodemailer from 'nodemailer'

const sendOtp = async (UserEmail) => {
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: process.env.APP_USER,
        pass: process.env.APP_PASS,
      },
    });

    const otp = Math.floor(100000 + Math.random() * 900000);

    const info = await transporter.sendMail({
      from: `"Vingo" <${process.env.APP_USER}>`,
      to: `${UserEmail}`,
      subject: "OTP verification from Vingo",
      text: `Dear Customer,

Our One-Time Password (OTP) for completing your Profile Setup at Vingo is: ${otp}

This OTP is valid for the next 10 minutes. Please do not share it with anyone.

If you did not request this OTP, please ignore this message.

Thank you for choosing Vingo.

Best regards,
Vingo Team`,
      html: `
<p>Dear Customer,</p>
<p>Your <strong>One-Time Password (OTP)</strong> for completing your Profile Setup at <strong>Vingo</strong> is:</p>
<h2 style="color: #f77810ff;">${otp}</h2>
<p>This OTP is valid for the next <strong>10 minutes</strong>. Please do not share it with anyone.</p>
<p>If you did not request this OTP, please ignore this message.</p>
<p>Thank you for choosing <strong>Vingo</strong>.</p>
<p>Best regards,<br>Vingo Team</p>
`,
    });

    console.log("Message sent:", info.messageId);
    return otp; // optional: return OTP to verify later
  } catch (error) {
    console.error("Error sending OTP:", error);
    throw error;
  }
};


export default sendOtp;