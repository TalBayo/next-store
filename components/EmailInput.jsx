"use client";
import { useState } from "react";

export default function EmailInput() {
  const [email, setEmail] = useState("");

  async function handleSubmit() {
    email.includes("@") || alert("Please enter a valid email address");
    try {
      //Add the post fetch request to send the email to the backend
    } catch (err) {
      console.error("Error submitting email: ", err);
    }
  }
  return (
    <div className="sign-up">
      <input
        placeholder="Email address.."
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button onClick={handleSubmit} className="button-card">
        Sign Up
      </button>
    </div>
  );
}
