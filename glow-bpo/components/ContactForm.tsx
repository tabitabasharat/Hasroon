"use client";
import { useState } from "react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [reason, setReason] = useState<"hire" | "apply">("hire");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="bg-panel border border-glow-deep rounded-2xl p-10 h-full flex flex-col items-center justify-center text-center gap-3">
        <div className="w-12 h-12 rounded-full bg-glow/15 flex items-center justify-center text-glow-high font-display text-xl">
          ✓
        </div>
        <h3 className="font-display text-lg text-white">Message received</h3>
        <p className="text-sm text-muted max-w-[320px]">
          Thanks — someone from GLOW BPO will follow up shortly. For a faster
          reply, message us on WhatsApp.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-panel border border-line rounded-2xl p-8 flex flex-col gap-5"
    >
      <div className="flex gap-3">
        <button
          type="button"
          onClick={() => setReason("hire")}
          className={`flex-1 py-3 rounded-xl text-sm font-medium border transition-colors ${
            reason === "hire"
              ? "border-glow bg-glow/10 text-glow-high"
              : "border-line text-muted"
          }`}
        >
          I want to hire agents
        </button>
        <button
          type="button"
          onClick={() => setReason("apply")}
          className={`flex-1 py-3 rounded-xl text-sm font-medium border transition-colors ${
            reason === "apply"
              ? "border-glow bg-glow/10 text-glow-high"
              : "border-line text-muted"
          }`}
        >
          I want to apply
        </button>
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <label className="flex flex-col gap-2 text-xs text-muted">
          Full name
          <input
            required
            type="text"
            className="bg-panel-2 border border-line rounded-lg px-4 py-3 text-sm text-text outline-none focus:border-glow"
            placeholder="Your name"
          />
        </label>
        <label className="flex flex-col gap-2 text-xs text-muted">
          Phone or WhatsApp
          <input
            required
            type="tel"
            className="bg-panel-2 border border-line rounded-lg px-4 py-3 text-sm text-text outline-none focus:border-glow"
            placeholder="+92 3XX-XXXXXXX"
          />
        </label>
      </div>

      <label className="flex flex-col gap-2 text-xs text-muted">
        {reason === "hire" ? "Company name" : "Experience (months/years)"}
        <input
          type="text"
          className="bg-panel-2 border border-line rounded-lg px-4 py-3 text-sm text-text outline-none focus:border-glow"
          placeholder={reason === "hire" ? "Your organization" : "e.g. 1 year in a call centre"}
        />
      </label>

      <label className="flex flex-col gap-2 text-xs text-muted">
        Message
        <textarea
          rows={4}
          className="bg-panel-2 border border-line rounded-lg px-4 py-3 text-sm text-text outline-none focus:border-glow resize-none"
          placeholder={
            reason === "hire"
              ? "Tell us about your campaign and staffing needs..."
              : "Tell us which role you're interested in..."
          }
        />
      </label>

      <button
        type="submit"
        className="mt-1 px-7 py-3.5 rounded-full text-sm font-semibold bg-linear-to-br from-glow to-glow-deep text-[#04101f] hover:shadow-[0_0_28px_rgba(47,182,255,0.55)] transition-all"
      >
        Send Message
      </button>
    </form>
  );
}
