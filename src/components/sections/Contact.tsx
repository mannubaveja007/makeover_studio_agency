"use client";

import { useState, FormEvent } from "react";
import { INSTAGRAM_DM_URL } from "@/lib/constants";
import SectionWrapper from "@/components/ui/SectionWrapper";
import AnimatedSection from "@/components/ui/AnimatedSection";
import Button from "@/components/ui/Button";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <SectionWrapper id="contact" variant="muted">
      <AnimatedSection>
        <h2
          id="contact-heading"
          className="text-2xl font-bold tracking-[-0.02em] text-neutral-900 sm:text-3xl md:text-4xl"
        >
          Ready for your makeover?
        </h2>
        <p className="mt-3 max-w-md text-sm leading-relaxed text-neutral-500 sm:mt-4 sm:text-base">
          Book a free discovery call or DM us on Instagram — we usually reply
          within a few hours.
        </p>
      </AnimatedSection>

      {/* Primary CTA — always visible, prominent on mobile */}
      <AnimatedSection delay={0.1}>
        <div className="mt-8 sm:mt-10">
          <Button
            href={INSTAGRAM_DM_URL}
            variant="primary"
            size="lg"
            target="_blank"
            rel="noopener noreferrer"
            className="tap-scale w-full text-center sm:w-auto"
          >
            DM us on Instagram →
          </Button>
        </div>
      </AnimatedSection>

      {/* Form — only on larger screens */}
      <AnimatedSection animation="fadeUp" delay={0.2}>
        <div className="mt-12 hidden md:block md:max-w-md">
          <p className="mb-5 text-sm font-medium text-neutral-900">
            Or leave us a message
          </p>
          {submitted ? (
            <div className="rounded-xl border border-neutral-200 bg-white p-8 text-center">
              <p className="text-base font-semibold text-neutral-900">
                We got your message.
              </p>
              <p className="mt-1.5 text-sm text-neutral-500">
                We&apos;ll be in touch within 24 hours.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="contact-name" className="sr-only">Name</label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  required
                  autoComplete="name"
                  placeholder="Your name"
                  className="w-full rounded-lg border border-neutral-200 bg-white px-4 py-3 text-sm text-neutral-900 outline-none transition-colors placeholder:text-neutral-400 focus:border-neutral-900"
                />
              </div>
              <div>
                <label htmlFor="contact-handle" className="sr-only">Instagram or email</label>
                <input
                  id="contact-handle"
                  name="handle"
                  type="text"
                  required
                  autoComplete="email"
                  placeholder="@yourhandle or email"
                  className="w-full rounded-lg border border-neutral-200 bg-white px-4 py-3 text-sm text-neutral-900 outline-none transition-colors placeholder:text-neutral-400 focus:border-neutral-900"
                />
              </div>
              <div>
                <label htmlFor="contact-message" className="sr-only">What do you need?</label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={3}
                  placeholder="What do you need?"
                  className="w-full resize-none rounded-lg border border-neutral-200 bg-white px-4 py-3 text-sm text-neutral-900 outline-none transition-colors placeholder:text-neutral-400 focus:border-neutral-900"
                />
              </div>
              <button
                type="submit"
                className="tap-scale w-full cursor-pointer rounded-lg bg-neutral-900 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-neutral-800"
              >
                Send message
              </button>
            </form>
          )}
        </div>
      </AnimatedSection>
    </SectionWrapper>
  );
}
