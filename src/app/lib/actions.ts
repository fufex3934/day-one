"use server";
import { z } from "zod";
import {prisma} from "../lib/prisma";


const ContactSchema = z.object({
  name: z.string().min(1),
  message: z.string().min(1),
});

export async function submitContactForm(formData: FormData) {
  const rawData = {
    name: formData.get("name"),
    message: formData.get("message"),
  };

  const result = ContactSchema.safeParse(rawData);

  if (!result.success) {
    console.error(result.error);
    throw new Error("Validation failed");
  }

  await prisma.contact.create({
    data: {
      name: result.data.name,
      message: result.data.message,
    },
  });

  return { success: true };
}