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
  const [name, setName] = useState(contact.name);
  const [message, setMessage] = useState(contact.message);
  const [error, setError] = useState<ErrorState>({});
  const [isEditing, setIsEditing] = useState(false);

  const handleUpdate = async (e: FormEvent) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", name);
    formData.append("message", message);

    const result = await updateContact(contact.id, initialState, formData);

    if (result.errors) {
      setError(result.errors);
    } else {
      setError({});
      setIsEditing(false); 
      alert("Contact updated");
    }
  };

  const handleDelete = async (e: FormEvent) => {
    e.preventDefault();
    await deleteContact(contact.id);
    alert("Contact deleted");
  };

  return (
    <div className="flex flex-col gap-2 border p-4 rounded shadow">
      {isEditing ? (
        <form onSubmit={handleUpdate} className="flex flex-col gap-2">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border p-2 rounded"
          />
          {error.name && <p className="text-red-500">{error.name}</p>}

          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="border p-2 rounded"
          />
          {error.message && <p className="text-red-500">{error.message}</p>}

          <div className="flex gap-2">
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-1 rounded"
            >
              Save
            </button>
            <button
              type="button"
              onClick={() => setIsEditing(false)}
              className="bg-gray-300 px-4 py-1 rounded"
            >
              Cancel
            </button>
          </div>
        </form>
      ) : (
        <>
          <p>
            <strong>Name:</strong> {name}
          </p>
          <p>
            <strong>Message:</strong> {message}
          </p>

          <div className="flex gap-2">
            <button
              onClick={() => setIsEditing(true)}
              className="bg-green-500 text-white px-4 py-1 rounded"
            >
              Edit
            </button>
            <form onSubmit={handleDelete}>
              <button
                type="submit"
                className="bg-red-500 text-white px-4 py-1 rounded"
              >
                Delete
              </button>
            </form>
          </div>
        </>
      )}
    </div>
  );
}
