"use client";
import { FormEvent, useState } from "react";
import { updateContact, deleteContact, ContactState } from "../lib/actions";

export type Contact = {
  id: string;
  name: string;
  message: string;
};

const initialState: ContactState = {
  errors: {},
  success: false,
  message: "",
};

type ErrorState = {
  name?: string;
  message?: string;
};

export function ContactFormUpdate({ contact }: { contact: Contact }) {
  const [error, setError] = useState<ErrorState>({});
  const [isEditing, setIsEditing] = useState(false);

  const handleUpdate = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const result = await updateContact(contact.id, initialState, formData);

    if (result.errors) {
      setError(result.errors);
    } else {
      setError({});
      alert("Contact updated");
      setIsEditing(false);
    }
  };

  const handleDelete = async () => {
    await deleteContact(contact.id);
    alert("Contact deleted");
  };

  return (
    <div className="flex flex-col gap-2 border p-4 rounded shadow">
      {isEditing ? (
        <form onSubmit={handleUpdate} className="flex flex-col gap-2">
          <input
            name="name"
            type="text"
            defaultValue={contact.name}
            className="border p-2 rounded"
          />
          {error.name && <p className="text-red-500">{error.name}</p>}

          <textarea
            name="message"
            defaultValue={contact.message}
            className="border p-2 rounded"
          />
          {error.message && <p className="text-red-500">{error.message}</p>}

          <div className="flex gap-2">
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
              Update
            </button>
            <button
              type="button"
              onClick={() => setIsEditing(false)}
              className="bg-gray-500 text-white px-4 py-2 rounded"
            >
              Cancel
            </button>
          </div>
        </form>
      ) : (
        <div>
          <p><strong>Name:</strong> {contact.name}</p>
          <p><strong>Message:</strong> {contact.message}</p>
          <div className="flex gap-2 mt-2">
            <button
              onClick={() => setIsEditing(true)}
              className="bg-yellow-500 text-white px-4 py-2 rounded"
            >
              Edit
            </button>
            <button
              onClick={handleDelete}
              className="bg-red-500 text-white px-4 py-2 rounded"
            >
              Delete
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
