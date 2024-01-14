"use server";

import React from "react";
import { Resend } from "resend";
import { getErrorMessage, validateString } from "@/library/utils";
import ContactFormEmail from "@/email/ContactFormEmail";

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

  let data;

  try {
    data = await resend.emails.send({
      from: "Contact Form <onboarding@resend.com>",
      to: "habart1978@gmail.com",
      subject: "Сообщение из контактной формы",
      reply_to: senderEmail as string,
      react: React.createElement(ContactFormEmail, {
        message: message as string,
        senderEmail: senderEmail as string,
      }),
    });
  } catch (err: unknown) {
    return {
      error: getErrorMessage(err),
    };
  }

  return {
    data,
  };
};
