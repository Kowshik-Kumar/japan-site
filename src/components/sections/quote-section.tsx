"use client";

import { Reveal } from "@/components/ui/reveal";

export function QuoteSection() {
  return (
    <section className="mx-auto w-full max-w-4xl px-6 py-24 text-center sm:px-10">
      <Reveal>
        <p className="text-xs uppercase tracking-[0.3em] text-[var(--muted-red)]">Philosophy</p>
        <blockquote className="mt-5 font-serif text-3xl leading-snug text-[var(--charcoal)] sm:text-4xl">
          "Beauty lies in simplicity and tradition."
        </blockquote>
        <p className="mx-auto mt-5 max-w-xl text-sm text-[var(--ink-soft)] sm:text-base">
          The most enduring art often whispers rather than shouts, and that quiet elegance defines the spirit of Japanese culture.
        </p>
      </Reveal>
    </section>
  );
}
