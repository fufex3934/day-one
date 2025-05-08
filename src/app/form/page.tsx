'use client'

import { useState } from "react"
import { submitContactForm } from "../lib/actions"

const ContactForm = () => {
  const [status, setStatus] = useState("")

  return (
    <form
      className="flex flex-col gap-4 max-w-md mx-auto mt-10"
      onSubmit={async (e) => {
        e.preventDefault()
        setStatus("Sending...")

        const formData = new FormData(e.currentTarget)

        await submitContactForm(formData)
        setStatus("Message Sent!")
      }}
    >
      <input
        type="text"
        name="name"
        placeholder="Your Name"
        className="p-2 border rounded"
        required
      />
      <textarea
        name="message"
        placeholder="Your Message"
        className="p-2 border rounded"
        required
      />
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded"
        type="submit"
      >
        Send
      </button>
      <p>{status}</p>
    </form>
  )
}

export default ContactForm
