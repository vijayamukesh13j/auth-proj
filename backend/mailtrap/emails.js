import nodemailer from "nodemailer";
import {
  PASSWORD_RESET_REQUEST_TEMPLATE,
  PASSWORD_RESET_SUCCESS_TEMPLATE,
  VERIFICATION_EMAIL_TEMPLATE,
} from "./emailTempates.js";

import { transporter, sender } from "./mailtrap.config.js";

export const sendVerificationEmail = async (email, verificationToken) => {
  const recipient = email;
  try {
    const response = await transporter.sendMail({
      from: sender,
      to: recipient,
      subject: "Verify your email",
      html: VERIFICATION_EMAIL_TEMPLATE.replace(
        "{verificationCode}",
        verificationToken
      ),
    });

    console.log("Email sent successfully", response);
    console.log("Message sent:", response.messageId);
    console.log("Preview URL:", nodemailer.getTestMessageUrl(response));
  } catch (error) {
    console.log(`Eroor sendign verification email: ${error}`);

    throw new error(`Eroor sendign verification email: ${error}`);
  }
};

export const sendWelcomeEmail = async (email, name) => {
  const recipient = email;

  try {
    const response = await transporter.sendMail({
      from: sender,
      to: recipient,
      //subject: "Welcome to our app",
      template_uuid: "af0158d3-ecad-4869-bc8b-031edad7a0b0",
      template_variables: {
        company_info_name: "Auth Company",
        name: name,
      },
    });
    console.log("Welcome email sent successfully", response);
    console.log("Message sent:", response.messageId);
    console.log("Preview URL:", nodemailer.getTestMessageUrl(response));
  } catch (error) {
    console.log(`Error sending Welcome email: ${error}`);
    throw new Error(`Error sending Welcome email: ${error}`);
  }
};

export const sendPasswordResetEmail = async (email, resetURL) => {
  const recipient = email;

  try {
    const response = await transporter.sendMail({
      from: sender,
      to: recipient,
      subject: "Reset your password",
      html: PASSWORD_RESET_REQUEST_TEMPLATE.replace("{resetURL}", resetURL),
      category: "password Reset",
    });
    console.log("reset your password mail sent successfully", response);
    console.log("Message sent:", response.messageId);
    console.log("Preview URL:", nodemailer.getTestMessageUrl(response));
  } catch (error) {
    console.log(`Error sending password reset email:${error}`);
    throw new Error(`Error sending password reset email:${error}`);
  }
};

export const sendResetSuccessEmail = async (email) => {
  const recipient = email;
  try {
    const response = await transporter.sendMail({
      from: sender,
      to: recipient,
      subject: "Password Reset Successful",
      html: PASSWORD_RESET_SUCCESS_TEMPLATE,
      category: "password reset",
    });

    console.log("Password reset email sent seccessfully", response);
    console.log("Message sent:", response.messageId);
    console.log("Preview URL:", nodemailer.getTestMessageUrl(response));
  } catch (error) {
    console.log(`Error sending reset success email: ${error}`);
    throw new Error(`Error sending reset success email: ${error}`);
  }
};
