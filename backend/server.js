import { configDotenv } from "dotenv";
import e, { json } from "express";
import cors from "cors";
import nodemailer from "nodemailer";

configDotenv();

// App Config
const app = e();
const port = process.env.PORT || 5500;

// App Middleware
const allowedOrigins = [
  "http://localhost:3000", // For local development
  "https://huzaifa-alii.vercel.app", // Your deployed frontend
];

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
  })
);

app.options("*", cors()); // Allow preflight for all routes

app.use(json());

// nodemailer endpoint
app.post("/send", async (req, res) => {
  const { email, name, message } = req.body;
  try {
    const transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: process.env.GMAIL,
        pass: process.env.GMAIL_PASS,
      },
    });

    const mailOptions = {
      from: email,
      to: process.env.GMAIL, // Your email address to receive the message
      subject: `Contact Form Submission from ${name}`,
      text: `You have a new contact form submission.\n\nName: ${name}\nEmail: ${email}\nMessage: ${message}`,
    };

    transporter.sendMail(mailOptions);
    res.status(200).json({ success: true, message: "Email sent successfully" });
  } catch (error) {
    console.log(error.message);
    res.send({ success: false, message: error.message });
  }
});

app.listen(port, () => {
  console.log(`server is running at port ${port}`);
});
