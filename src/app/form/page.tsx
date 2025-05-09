"use client";

import { useActionState } from "react";
import { submitContactForm, ContactState } from "../lib/actions";

const initialState: ContactState = {
  errors: {},
  success: false,
  message: "",
};
const ContactForm = () => {
  const [state, formAction, pending] = useActionState(
    submitContactForm,
    initialState
  );

  return (
    <form
      className="flex flex-col gap-4 max-w-md mx-auto mt-10"
      action={formAction}
    >
      <input
        type="text"
        name="name"
        placeholder="Your Name"
        className="p-2 border rounded"
      />
      {state.errors?.name && (
        <p className="text-red-500 text-sm">{state.errors.name}</p>
      )}
      <textarea
        name="message"
        placeholder="Your Message"
        className="p-2 border rounded"
      />
      {state.errors?.message && (
        <p className="text-red-500 text-sm">{state.errors.message}</p>
      )}
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded disabled:opacity-50"
        type="submit"
        disabled={pending}
      >
        {pending ? "Sending..." : "Send"}
      </button>
      {state.success && (
        <p className="text-green-600 font-medium">{state.message}</p>
      )}
    </form>
  );
};

export default ContactForm;
