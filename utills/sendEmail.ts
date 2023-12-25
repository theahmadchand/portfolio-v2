"use server";

import { createElement } from "react";
import { Resend } from "resend";
import { ContactFormEmail } from "@/templates";
import { getErrorMessage } from "./getErrorMessage";
import { validateString } from "./validateString";

const resend = new Resend(process.env.RESEND_API_KEY);
const receiverEmail = process.env.RECEIVER_EMAIL || "";

export const sendEmail = async (formData: FormData) => {
    const senderEmail = formData.get("senderEmail");
    const message = formData.get("message");

    // simple server-side validation
    if (!validateString(senderEmail, 500)) {
        return { error: "Invalid sender email" };
    }
    if (!validateString(message, 5000)) {
        return { error: "Invalid message" };
    }

    if (!receiverEmail) {
        return { error: "Receiver email not found" };
    }

    let data;
    try {
        data = await resend.emails.send({
            from: "Contact Form <onboarding@resend.dev>",
            to: receiverEmail.toString(),
            subject: "Message from portfolio contact form",
            reply_to: senderEmail,
            react: createElement(ContactFormEmail, {
                message,
                senderEmail,
            }),
        });
    } catch (error: unknown) {
        return { error: getErrorMessage(error) };
    }

    return { data };
};
