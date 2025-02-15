"use client";

import { useAppSelector } from "@/lib/hooks";
import React from "react";

type SendEmailFormProps = {
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  handleChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  formData: {
    name: string;
    email: string;
    subject: string;
    message: string;
  };
  error: string;
  success: string;
};

const SendEmailForm: React.FC<SendEmailFormProps> = ({
  handleSubmit,
  handleChange,
  formData,
  error,
  success,
}) => {
  const isDark = useAppSelector((state) => state.global.isDarkMode);
  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col space-y-4 bg-gray-700 p-6 rounded-lg shadow-md"
    >
      <input
        type="text"
        name="name"
        placeholder="Your Name"
        value={formData.name}
        onChange={handleChange}
        className="placeholder-gray-400 text-lg font-semibold bg-gray-500 text-white border-2 border-gray-900 rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
      />

      <input
        type="email"
        name="email"
        placeholder="Your Email"
        value={formData.email}
        onChange={handleChange}
        className="placeholder-gray-400 text-lg font-semibold bg-gray-500 text-white border-2 border-gray-900 rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
      />

      <input
        type="text"
        name="subject"
        placeholder="Subject"
        value={formData.subject}
        onChange={handleChange}
        className="placeholder-gray-400 text-lg font-semibold bg-gray-500 text-white border-2 border-gray-900 rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
      />

      <textarea
        name="message"
        placeholder="Your Message"
        value={formData.message}
        onChange={handleChange}
        className="placeholder-gray-400 text-lg font-semibold bg-gray-500 text-white border-2 border-gray-900 rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
      {error && <p className="text-red-500">{error}</p>}
      {success && (
        <p className={isDark ? "text-green-300" : "text-green-600"}>
          {success}
        </p>
      )}
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
      >
        Send Message
      </button>
    </form>
  );
};

export default SendEmailForm;
