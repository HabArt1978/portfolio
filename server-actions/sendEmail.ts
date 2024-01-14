"use server";

import { Resend } from "resend";
import { validateString } from "@/library/utils";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
  const message = formData.get("message");
  const senderEmail = formData.get("senderEmail");

  // простая проверка на стороне сервера
  if (!validateString(senderEmail, 50)) {
    return {
      error: "Неверный адрес электронной почты отправителя!",
    };
  }

  if (!validateString(message, 500)) {
    return {
      error: "Недопустимое сообщение!",
    };
  }

  try {
    await resend.emails.send({
      from: `${senderEmail} <onboarding@resend.dev>`,
      to: "habart1978@gmail.com",
      subject: "Message from contact form",
      text: message as string,
      reply_to: senderEmail as string,
    });
  } catch (err) {
    console.error(err);
  }
};
