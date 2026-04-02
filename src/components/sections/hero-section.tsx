"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { Reveal } from "@/components/ui/reveal";

export function HeroSection() {
  const [showAbout, setShowAbout] = useState(false);

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 pb-16 pt-24 sm:px-10 lg:px-16">
      <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_20%_10%,rgba(194,90,90,0.16),transparent_40%),radial-gradient(circle_at_90%_20%,rgba(247,197,205,0.18),transparent_34%),linear-gradient(140deg,#faf7f2_0%,#f4ece0_42%,#efe8dc_100%)]" />
      <div className="absolute inset-0 -z-10 bg-[url('/assets/hero-mist.svg')] bg-cover bg-center opacity-70" />

      <Reveal className="relative z-10 max-w-3xl text-center">
        <motion.div
          animate={{ y: showAbout ? -54 : 0 }}
          transition={{ duration: 0.55, ease: "easeInOut" }}
        >
          <p className="mb-4 text-xs uppercase tracking-[0.38em] text-[var(--muted-red)]">Japanese Heritage</p>
          <h1 className="font-serif text-4xl leading-tight text-[var(--charcoal)] sm:text-5xl lg:text-6xl">
            The Elegance of Japanese Culture
          </h1>
          <p className="mx-auto mt-6 max-w-xl font-serif text-base text-[#0b0b14] [word-spacing:0.12em] sm:text-lg">
            Where Folktales and Fashion tell timeless stories.
          </p>
        </motion.div>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <Link
            href="#folktales"
            className="inline-flex items-center rounded-full border border-white/50 bg-white/55 px-7 py-3 text-sm font-semibold text-[var(--charcoal)] shadow-[0_10px_40px_rgba(36,34,37,0.14)] backdrop-blur-md transition hover:-translate-y-0.5 hover:bg-white/80"
          >
            Explore Culture
          </Link>
          <button
            type="button"
            onClick={() => setShowAbout((prev) => !prev)}
            className="inline-flex items-center rounded-full border border-[rgba(194,90,90,0.35)] bg-[rgba(194,90,90,0.16)] px-7 py-3 text-sm font-semibold text-[var(--charcoal)] shadow-[0_10px_30px_rgba(36,34,37,0.12)] backdrop-blur-md transition hover:-translate-y-0.5 hover:bg-[rgba(194,90,90,0.24)]"
          >
            {showAbout ? "Hide About" : "About"}
          </button>
        </div>

        <AnimatePresence>
          {showAbout ? (
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 18 }}
              transition={{ duration: 0.45, ease: "easeOut" }}
              className="mx-auto mt-8 max-w-3xl p-1 text-left sm:p-2"
            >
              <p className="font-serif text-sm leading-relaxed text-[#0b0b14] [word-spacing:0.1em] sm:text-[0.95rem]">
                Japanese textiles, symbols, and folklore art weave a rich tapestry of nature's poetry, spiritual beliefs, and seasonal impermanence, transforming fabric into storytelling canvases. Rooted in wagara patterns from the 8th century, these designs - seen on kimonos, obi sashes, and noren curtains - draw from Shinto reverence for kami spirits and Buddhist cycles of life. Key textiles: Silk kasuri (ikat) creates blurred, hypnotic motifs through resist-dyeing threads before weaving, evoking misty mountains or rippling waves. Boro patchwork, born from rural thrift, layers indigo scraps with sashiko stitching into rugged, soulful quilts that whisper tales of endurance. Nishijin brocades shimmer with gold threads, depicting cranes in flight or peonies in bloom for Kyoto's elite ceremonies. Asanoha (hemp leaf) stars symbolize vigorous growth, adorning baby kimonos for healthy childhoods. Tsuru cranes promise longevity and fidelity, often paired with red sun circles for good fortune. Shippo interlocking circles represent Buddhist harmony, while Fujin and Raijin - wild wind and thunder gods - guard against calamity with demonic grins. These elements fuse in folklore art like ukiyo-e prints and emakimono scrolls, where Yuki-onna drifts through snow-laced geometrics or Momotaro battles oni amid peony explosions, preserving Japan's soul in every dyed thread.
              </p>
            </motion.div>
          ) : null}
        </AnimatePresence>
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
