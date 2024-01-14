"use client";

import React from "react";
import SectionHeading from "./SectionHeading";
import { useSectionInView } from "@/library/hooks";
import { motion } from "framer-motion";
import { sendEmail } from "@/server-actions/sendEmail";
import SubmitBtn from "./SubmitBtn";

export default function Contact() {
  const { ref } = useSectionInView("Contact");

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: false,
      }}
    >
      <SectionHeading>Contact me</SectionHeading>
      <p className="text-gray-700 -mt-6">
        Please contact me directly at{" "}
        <a className="underline" href="mailto:habart1978@gmail.com">
          habar1978@gmail.com
        </a>{" "}
        or through this form.
      </p>

      <form className="mt-10 flex flex-col" action={sendEmail}>
        <input
          type="email"
          name="senderEmail"
          placeholder="Your email"
          className="h-14 px-4 rounded-lg borderBlack"
          required
          maxLength={50}
        />
        <textarea
          name="message"
          placeholder="Your message"
          className="h-52 my-3 rounded-lg borderBlack p-4"
          required
          maxLength={500}
        />

        <SubmitBtn />
      </form>
    </motion.section>
  );
}
