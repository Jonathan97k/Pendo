"use client";

import { useState, type FormEvent } from "react";
import { Send, CheckCircle2, Loader2 } from "lucide-react";
import { BUSINESS } from "@/lib/constants";

type Errors = Partial<Record<"name" | "phone" | "message", string>>;

export default function ContactForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "sent">("idle");

  function validate(): boolean {
    const next: Errors = {};
    if (!name.trim()) {
      next.name = "Please enter your name.";
    }
    if (!phone.trim()) {
      next.phone = "Please enter your phone number.";
    }
    if (!message.trim()) {
      next.message = "Please enter a message.";
    }
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!validate()) {
      return;
    }
    // No email backend is configured yet. We simulate a short sending delay
    // and show a clear success state. To connect a real backend later, post
    // to an API route (e.g. /api/contact) here and pass a SERVER-side env key.
    setStatus("submitting");
    window.setTimeout(() => {
      setStatus("sent");
    }, 900);
  }

  if (status === "sent") {
    return (
      <div className="card flex flex-col items-center gap-3 p-10 text-center">
        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366]/15 text-[#25D366]">
          <CheckCircle2 className="h-7 w-7" aria-hidden="true" />
        </span>
        <h3 className="font-display text-xl font-bold text-charcoal-900">
          Message Received
        </h3>
        <p className="max-w-sm text-sm text-charcoal-900/70">
          Thank you for reaching out. We&rsquo;ll get back to you soon via the
          phone number you provided.
        </p>
        <button
          type="button"
          onClick={() => {
            setName("");
            setPhone("");
            setMessage("");
            setStatus("idle");
          }}
          className="btn-secondary mt-2"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="card space-y-5 p-6 sm:p-8">
      <p className="text-sm text-charcoal-900/60">
        For the fastest response, call or WhatsApp us at{" "}
        <a
          href={BUSINESS.phoneHref}
          className="font-semibold text-burgundy-700 underline-offset-2 hover:underline"
        >
          {BUSINESS.phoneDisplay}
        </a>
      </p>
      <div>
        <label htmlFor="cf-name" className="mb-1.5 block text-sm font-semibold text-charcoal-900">
          Name
        </label>
        <input
          id="cf-name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          aria-invalid={Boolean(errors.name)}
          aria-describedby={errors.name ? "cf-name-error" : undefined}
          className="w-full rounded-xl border border-charcoal-900/15 bg-white px-4 py-3 text-sm text-charcoal-900 shadow-sm outline-none transition-colors focus:border-burgundy-500 focus:ring-2 focus:ring-burgundy-500/20"
        />
        {errors.name ? (
          <p id="cf-name-error" className="mt-1.5 text-xs font-medium text-burgundy-700">
            {errors.name}
          </p>
        ) : null}
      </div>
      <div>
        <label htmlFor="cf-phone" className="mb-1.5 block text-sm font-semibold text-charcoal-900">
          Phone Number
        </label>
        <input
          id="cf-phone"
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="e.g. +265 994 630 808"
          aria-invalid={Boolean(errors.phone)}
          aria-describedby={errors.phone ? "cf-phone-error" : undefined}
          className="w-full rounded-xl border border-charcoal-900/15 bg-white px-4 py-3 text-sm text-charcoal-900 shadow-sm outline-none transition-colors focus:border-burgundy-500 focus:ring-2 focus:ring-burgundy-500/20"
        />
        {errors.phone ? (
          <p id="cf-phone-error" className="mt-1.5 text-xs font-medium text-burgundy-700">
            {errors.phone}
          </p>
        ) : null}
      </div>
      <div>
        <label htmlFor="cf-message" className="mb-1.5 block text-sm font-semibold text-charcoal-900">
          Message
        </label>
        <textarea
          id="cf-message"
          rows={5}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "cf-message-error" : undefined}
          className="w-full rounded-xl border border-charcoal-900/15 bg-white px-4 py-3 text-sm text-charcoal-900 shadow-sm outline-none transition-colors focus:border-burgundy-500 focus:ring-2 focus:ring-burgundy-500/20"
        />
        {errors.message ? (
          <p id="cf-message-error" className="mt-1.5 text-xs font-medium text-burgundy-700">
            {errors.message}
          </p>
        ) : null}
      </div>
      <button
        type="submit"
        disabled={status === "submitting"}
        className="btn-primary w-full"
      >
        {status === "submitting" ? (
          <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
        ) : (
          <Send className="h-4 w-4" aria-hidden="true" />
        )}
        Send Message
      </button>
      <p className="text-center text-xs text-charcoal-900/50">
        This form is a demo until a real email/backend service is connected.
      </p>
    </form>
  );
}