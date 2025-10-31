import React, { useState } from "react";
import "./App.css";

const PasswordGenerator = () => {
  const [password, setPassword] = useState("");
  const [copied, setCopied] = useState(false);

  const generatePassword = () => {
    const chars =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+";
    let generated = "";
    for (let i = 0; i < 12; i++) {
      generated += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setPassword(generated);
    setCopied(false);
  };

  const copyToClipboard = () => {
    if (!password) return;
    navigator.clipboard.writeText(password);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="password__container">
      <h2 className="password__title">🔐 Password Generator</h2>

      <input
        type="text"
        className="password_copText"
        value={password}
        placeholder="Click 'Generate' to create password"
        readOnly
      />

      <div className="password__buttons">
        <button className="password_copyIcon" onClick={generatePassword}>
          Generate
        </button>
        <button
          className={`password_copyStatus ${copied ? "copied" : ""}`}
          onClick={copyToClipboard}
        >
          {copied ? "Copied!" : "Copy"}
        </button>
      </div>

      <p className="password__footer">
        ✨ Secure your world — one password at a time.
      </p>
    </div>
  );
};

export default PasswordGenerator;
