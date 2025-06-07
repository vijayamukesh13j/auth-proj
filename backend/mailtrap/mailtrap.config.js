// import { MailtrapClient } from "mailtrap";
// import dotenv from "dotenv";
import nodemailer from "nodemailer";

// dotenv.config();

// const TOKEN = process.env.MAILTRAP_TOKEN;
// const ENDPOINT = process.env.MAILTRAP_ENDPOINT;

// export const mailreapClient = new MailtrapClient({
//   token: TOKEN,
//   endpoint: ENDPOINT,
// });

export const sender = `"Mukesh 👻" <maddison53@ethereal.email>`;
export const transporter = nodemailer.createTransport({
  host: "smtp.ethereal.email",
  port: 587,
  secure: false, // true for 465, false for other ports
  auth: {
    user: "maddison53@ethereal.email",
    pass: "jn7jnAPss4f63QBp6D",
  },
});

// const recipients = [
//   {
//     email: "ev.mukesh13j@gmail.com",
//   },
// ];

// mailreapClient
//   .send({
//     from: sender,
//     to: recipients,
//     subject: "You are awesome!",
//     text: "Congrats for sending test email with Mailtrap!",
//     category: "Integration Test",
//   })
//   .then(console.log, console.error);
