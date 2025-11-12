"use client";

import { useState } from "react";
import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";

import Link from "next/link";

const BLUR_FADE_DELAY = 0.1; // or import from constants if you already have it

export default function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setStatus("Message sent successfully!");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("Failed to send message. Please try again.");
      }
    } catch {
      setStatus("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact">
      <div className="grid items-center justify-center gap-4 px-4 text-center md:px-6 w-full py-16">
        <BlurFade delay={BLUR_FADE_DELAY * 16}>
          <div className="space-y-3">
            <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
              Contact
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Get in Touch
            </h2>
            <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed">
              Feel free to reach out using the form below — I’ll get back to you as soon as possible.
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="max-w-md mx-auto mt-10 space-y-4 text-left"
          >
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-foreground mb-1">
                Name
              </label>
              <input
                id="name"
                type="text"
                value={form.name}
                onChange={handleChange}
                required
                className="w-full rounded-lg border border-muted bg-background px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none transition"
                placeholder="Your name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1">
                Email
              </label>
              <input
                id="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full rounded-lg border border-muted bg-background px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none transition"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-foreground mb-1">
                Message
              </label>
              <textarea
                id="message"
                value={form.message}
                onChange={handleChange}
                required
                className="w-full h-32 rounded-lg border border-muted bg-background px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none transition resize-none"
                placeholder="Your message..."
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-2 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition disabled:opacity-50"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>

            {status && (
              <p
                className={`text-center text-sm ${
                  status === "Message sent successfully!"
                    ? "text-green-500"
                    : "text-red-500"
                }`}
              >
                {status}
              </p>
            )}
          </form>
        </BlurFade>
      </div>
    </section>
  );
}
