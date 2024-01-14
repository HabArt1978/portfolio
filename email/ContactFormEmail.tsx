import React from "react";
import {
  Html,
  Body,
  Head,
  Heading,
  Hr,
  Container,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import { Tailwind } from "@react-email/tailwind";

type TContactFormEmailProps = {
  message: string;
  senderEmail: string;
};

export default function ContactFormEmail({
  message,
  senderEmail,
}: TContactFormEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>Новое сообщение с вашего сайта-портфолио</Preview>
      <Tailwind>
        <Body className="bg-gray-100 text-black ">
          <Container>
            <Section className="flex flex-col bg-white borderBlack my-10 px-10 py-4 rounded-md">
              <Heading className="leading-tight">
                Вы получили сообщение из контактной формы:
              </Heading>
              <Text>{message}</Text>
              <Hr />
              <Text>Адрес электронной почты отправителя: {senderEmail}</Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
