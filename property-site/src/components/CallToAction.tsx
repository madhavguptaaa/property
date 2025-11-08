"use client";

import { FormEvent, useState, useTransition } from "react";

export function CallToAction() {
  const [isPending, startTransition] = useTransition();
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    const payload = {
      name: String(formData.get("name") || ""),
      email: String(formData.get("email") || ""),
      phone: String(formData.get("phone") || ""),
      location: String(formData.get("location") || ""),
      message: String(formData.get("message") || ""),
    };

    startTransition(async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL ?? "http://127.0.0.1:8000"}/enquiries`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload),
          },
        );

        if (!response.ok) {
          throw new Error("Failed to submit enquiry");
        }

        setStatus("success");
        event.currentTarget.reset();
      } catch (error) {
        console.error(error);
        setStatus("error");
      }
    });
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-slate-950 py-24"
    >
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,_rgba(139,92,246,0.4),_transparent_60%)]" />
      <div className="mx-auto flex w-full max-w-5xl flex-col items-center gap-6 px-6 text-center text-white md:px-8">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-violet-200">
          Let&apos;s begin
        </p>
        <h2 className="text-3xl font-semibold sm:text-4xl">
          Share your aspirations and we&apos;ll curate a personalised property
          discovery in 24 hours.
        </h2>
        <p className="max-w-2xl text-sm text-slate-200">
          Submit your details and a senior consultant will reach out with a
          tailored shortlist, walkthrough plan, and investment insights aligned
          to your goals.
        </p>
        <form
          className="grid w-full gap-4 sm:grid-cols-2"
          onSubmit={handleSubmit}
        >
          <input
            name="name"
            type="text"
            placeholder="Full name"
            className="w-full rounded-2xl border border-white/15 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-slate-300 focus:border-violet-300 focus:outline-none focus:ring-2 focus:ring-violet-300/40"
            required
          />
          <input
            name="email"
            type="email"
            placeholder="Email address"
            className="w-full rounded-2xl border border-white/15 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-slate-300 focus:border-violet-300 focus:outline-none focus:ring-2 focus:ring-violet-300/40"
            required
          />
          <input
            name="phone"
            type="tel"
            placeholder="Phone number"
            className="w-full rounded-2xl border border-white/15 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-slate-300 focus:border-violet-300 focus:outline-none focus:ring-2 focus:ring-violet-300/40"
          />
          <input
            name="location"
            type="text"
            placeholder="Preferred location"
            className="w-full rounded-2xl border border-white/15 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-slate-300 focus:border-violet-300 focus:outline-none focus:ring-2 focus:ring-violet-300/40"
          />
          <textarea
            name="message"
            placeholder="Tell us what you're looking for"
            className="sm:col-span-2 h-28 w-full rounded-2xl border border-white/15 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-slate-300 focus:border-violet-300 focus:outline-none focus:ring-2 focus:ring-violet-300/40"
          />
          <button
            type="submit"
            disabled={isPending}
            className="sm:col-span-2 inline-flex items-center justify-center rounded-2xl bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-violet-100 disabled:cursor-not-allowed disabled:bg-slate-300"
          >
            {isPending ? "Submitting..." : "Submit enquiry"}
          </button>
        </form>
        {status === "success" && (
          <p className="text-sm font-medium text-emerald-300">
            Thank you! A consultant will reach out shortly.
          </p>
        )}
        {status === "error" && (
          <p className="text-sm font-medium text-rose-300">
            Something went wrong. Please try again or reach us at
            concierge@aggent.in.
          </p>
        )}
        <p className="text-xs font-medium uppercase tracking-[0.3em] text-violet-200">
          Response time • under 24 hours
        </p>
      </div>
    </section>
  );
}
