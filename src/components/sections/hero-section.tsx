"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Reveal } from "@/components/ui/reveal";

export function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 pb-16 pt-24 sm:px-10 lg:px-16">
      <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_20%_10%,rgba(194,90,90,0.16),transparent_40%),radial-gradient(circle_at_90%_20%,rgba(247,197,205,0.18),transparent_34%),linear-gradient(140deg,#faf7f2_0%,#f4ece0_42%,#efe8dc_100%)]" />
      <div className="absolute inset-0 -z-10 bg-[url('/assets/hero-mist.svg')] bg-cover bg-center opacity-70" />

      <Reveal className="relative z-10 max-w-3xl text-center">
        <p className="mb-4 text-xs uppercase tracking-[0.38em] text-[var(--muted-red)]">Japanese Heritage</p>
        <h1 className="font-serif text-4xl leading-tight text-[var(--charcoal)] sm:text-5xl lg:text-6xl">
          The Elegance of Japanese Culture
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-base text-[var(--ink-soft)] sm:text-lg">
          Where Folktales and Fashion tell timeless stories.
        </p>
        <div className="mt-10">
          <Link
            href="#folktales"
            className="inline-flex items-center rounded-full border border-white/50 bg-white/55 px-7 py-3 text-sm font-semibold text-[var(--charcoal)] shadow-[0_10px_40px_rgba(36,34,37,0.14)] backdrop-blur-md transition hover:-translate-y-0.5 hover:bg-white/80"
          >
            Explore Culture
          </Link>
        </div>
      </Reveal>

      <motion.a
        href="#folktales"
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-xs tracking-[0.25em] text-[var(--ink-soft)]"
        animate={{ y: [0, 9, 0], opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 2.1, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
      >
        SCROLL
      </motion.a>
    </section>
  );
}
