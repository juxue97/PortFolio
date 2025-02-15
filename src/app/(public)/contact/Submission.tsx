"use client";

import SendEmailForm from "@/components/Form";
import React, { FormEvent, useState } from "react";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const SubmissionComponent = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [error, setError] = useState<string>("");
  const [success, setSuccess] = useState<string>("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (
      !formData.name ||
      !formData.email ||
      !formData.subject ||
      !formData.message
    ) {
      setError("All fields are required");
      return;
    }
    // Simulate form submission
    setTimeout(() => {
      setSuccess("Your message has been sent successfully!");
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 1000);
  };

  return (
    <SendEmailForm
      handleSubmit={handleSubmit}
      handleChange={handleChange}
      formData={formData}
      error={error}
      success={success}
    />
  );
};

export default SubmissionComponent;
