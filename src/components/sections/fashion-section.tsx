"use client";

import Image from "next/image";
import { Reveal } from "@/components/ui/reveal";
import { SectionTitle } from "@/components/ui/section-title";

export function FashionSection() {
  return (
    <section id="fashion" className="mx-auto grid w-full max-w-6xl gap-12 px-6 py-20 sm:px-10 lg:grid-cols-2 lg:items-center lg:px-16">
      <Reveal>
        <SectionTitle
          eyebrow="Fashion"
          title="Kimono: Fabric of Memory"
          description="Kimono design reflects season, social identity, and ceremony. Patterns of cranes, waves, and blossoms represent longevity, resilience, and grace. The silhouette remains simple, yet every fold speaks with intention."
        />
        <p className="mt-6 text-sm leading-relaxed text-[var(--ink-soft)] sm:text-base">
          Contemporary designers reinterpret traditional motifs with lighter fabrics and modern tailoring, preserving craftsmanship while welcoming everyday wear.
        </p>
      </Reveal>

      <Reveal className="relative">
        <div className="relative overflow-hidden rounded-[2rem] border border-white/60 bg-white/50 p-4 shadow-[0_20px_60px_rgba(34,30,33,0.1)] backdrop-blur-md">
          <Image
            src="/assets/kimono-main.svg"
            alt="Layered kimono illustration"
            width={700}
            height={860}
            loading="lazy"
            className="h-[420px] w-full rounded-[1.6rem] object-cover sm:h-[520px]"
          />
        </div>

        <div className="absolute -bottom-8 -left-8 hidden w-44 overflow-hidden rounded-3xl border border-white/60 bg-white/70 p-3 shadow-[0_14px_45px_rgba(32,28,29,0.14)] backdrop-blur-md sm:block">
          <Image
            src="/assets/kimono-detail.svg"
            alt="Kimono pattern detail"
            width={260}
            height={200}
            loading="lazy"
            className="h-28 w-full rounded-2xl object-cover"
          />
          <p className="mt-3 text-xs uppercase tracking-[0.22em] text-[var(--muted-red)]">Handcrafted Motif</p>
        </div>
      </Reveal>
    </section>
  );
}
