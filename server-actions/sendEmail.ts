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

  if (!validateString(message, 5000)) {
    return {
      error: "Недопустимое сообщение!",
    };
  }

  let response;

  try {
    response = await resend.emails.send({
      // !TODO генерация ошибки .dev => .com
      from: "Contact Form <onboarding@resend.dev>",
      to: "habart1978@gmail.com",
      subject: "Сообщение из контактной формы",
      reply_to: senderEmail as string,
      react: React.createElement(ContactFormEmail, {
        message: message as string,
        senderEmail: senderEmail as string,
      }),
    });
  } catch (error: unknown) {
    return {
      data: undefined,
      error: getErrorMessage(error),
    };
  }

  return response;
};
