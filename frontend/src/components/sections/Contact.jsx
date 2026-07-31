import React, { useState } from "react";
import axios from "axios";
import { toast } from "sonner";
import { content } from "../../data/content";
import { Reveal } from "../primitives";
import { Star, Sparkle, Heart } from "../Doodles";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

export const Contact = () => {
  const { contact, meta } = content;
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sending, setSending] = useState(false);

  const submit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast.error("Please fill in all fields.");
      return;
    }
    setSending(true);
    try {
      await axios.post(`${API}/contact`, form);
      toast.success("Thanks — your message has been sent.");
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      toast.error("Something went wrong. Please email directly.");
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" className="relative py-24 md:py-36 bg-grey overflow-hidden">
      <Star className="absolute left-[8%] top-[18%] w-10 hidden md:block" />
      <Sparkle className="absolute right-[10%] top-[24%] w-12 hidden md:block" />
      <Heart className="absolute right-[20%] bottom-[16%] w-9 hidden md:block" fill="var(--pink-soft)" />

      <div className="mx-auto max-w-[1400px] px-5 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
          <div>
            <Reveal>
              <h2 className="font-display uppercase text-ink" style={{ fontSize: "clamp(2.6rem,8vw,7rem)", fontWeight: 700, lineHeight: 0.9, letterSpacing: "-0.02em" }}>
                Let's<br />Talk
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-ink-soft mt-6 max-w-md" style={{ fontSize: "clamp(16px,1.6vw,20px)" }}>{contact.sub}</p>
            </Reveal>
            <Reveal delay={0.16}>
              <div className="mt-10 flex flex-col gap-4">
                <a href={`mailto:${meta.email}`} data-testid="contact-email" className="link-underline font-display w-fit" style={{ fontSize: "clamp(16px,1.8vw,22px)" }}>
                  Email — {meta.email}
                </a>
                <a href={meta.linkedin} target="_blank" rel="noopener noreferrer" data-testid="contact-linkedin" className="link-underline font-display w-fit" style={{ fontSize: "clamp(16px,1.8vw,22px)" }}>
                  LinkedIn — /in/yichun-hou
                </a>
              </div>
            </Reveal>
          </div>

          {/* Form */}
          <Reveal delay={0.12}>
            <form onSubmit={submit} data-testid="contact-form" className="flex flex-col gap-5">
              <span className="font-hand text-pink" style={{ fontSize: "clamp(18px,2vw,24px)" }}>{contact.formNote}</span>
              <div className="flex flex-col gap-1">
                <label className="font-display uppercase text-ink-soft" style={{ fontSize: "11px", letterSpacing: "0.08em" }}>Name</label>
                <input
                  data-testid="contact-input-name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="bg-transparent py-3 text-ink outline-none"
                  style={{ borderBottom: "1.5px solid var(--line)", fontSize: "16px" }}
                  placeholder="Your name"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label className="font-display uppercase text-ink-soft" style={{ fontSize: "11px", letterSpacing: "0.08em" }}>Email</label>
                <input
                  data-testid="contact-input-email"
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="bg-transparent py-3 text-ink outline-none"
                  style={{ borderBottom: "1.5px solid var(--line)", fontSize: "16px" }}
                  placeholder="you@email.com"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label className="font-display uppercase text-ink-soft" style={{ fontSize: "11px", letterSpacing: "0.08em" }}>Message</label>
                <textarea
                  data-testid="contact-input-message"
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  rows={4}
                  className="bg-transparent py-3 text-ink outline-none resize-none"
                  style={{ borderBottom: "1.5px solid var(--line)", fontSize: "16px" }}
                  placeholder="Tell me about the role or project…"
                />
              </div>
              <button
                type="submit"
                data-testid="contact-submit"
                disabled={sending}
                className="mt-2 w-fit rounded-full px-8 py-3 font-display uppercase text-white transition-transform duration-300 hover:-translate-y-0.5 disabled:opacity-60"
                style={{ backgroundColor: "var(--pink)", fontSize: "13px", letterSpacing: "0.06em" }}
              >
                {sending ? "Sending…" : "Send Message →"}
              </button>
            </form>
          </Reveal>
        </div>

        <div className="mt-24 pt-8 flex items-center justify-between" style={{ borderTop: "1px solid var(--line)" }}>
          <span className="font-display uppercase text-ink" style={{ fontSize: "13px", letterSpacing: "0.06em" }}>
            {meta.name} · {meta.location} · {meta.year}
          </span>
          <a href="#top" className="link-underline font-display" style={{ fontSize: "13px" }}>Back to top ↑</a>
        </div>
      </div>
    </section>
  );
};
