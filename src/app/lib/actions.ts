"use server";
import { z } from "zod";
import { prisma } from "./prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
const ContactSchema = z.object({
  name: z.string().min(3, "Name must be at least 3 characters"),
  message: z.string().min(5, "Message must be at least 5 characters"),
});

export type ContactState = {
  errors?: {
    name?: string;
    message?: string;
  };
  success?: boolean;
  message?: string;
};

export async function submitContactForm(
  prevState: ContactState,
  formData: FormData
): Promise<ContactState> {
  const rawData = {
    name: formData.get("name"),
    message: formData.get("message"),
  };

  const result = ContactSchema.safeParse(rawData);

  if (!result.success) {
    const errors = result.error.flatten().fieldErrors;
    return {
      errors: {
        name: errors.name?.[0],
        message: errors.message?.[0],
      },
    };
  }

  await prisma.contact.create({
    data: result.data,
  });

  revalidatePath("/contacts");
  redirect("/contacts");
  // return { success: true, message: "Message Sent successfully!" };
}

//Read all contacts
export async function getContacts() {
  return await prisma.contact.findMany({ orderBy: { createdAt: "desc" } });
}

//Delete Contacts
export async function deleteContact(id: string) {
  await prisma.contact.delete({ where: { id } });
  revalidatePath("/contacts");
  redirect("/contacts");
}

//update Contact
export async function updateContact(
  contactId: string,
  prevState: ContactState,
  formData: FormData
): Promise<ContactState> {
  const updatedData = {
    name: formData.get("name"),
    message: formData.get("message"),
  };

  const parsed = ContactSchema.safeParse(updatedData);

  if (!parsed.success) {
    const errors = parsed.error.flatten().fieldErrors;
    return {
      errors: {
        name: errors.name?.[0],
        message: errors.message?.[0],
      },
    };
  }
  await prisma.contact.update({
    where: { id: contactId },
    data: parsed.data,
  });
  revalidatePath("/contacts");
  redirect("/contacts");
}
