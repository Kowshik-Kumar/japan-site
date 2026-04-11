"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { folktales } from "@/data/culture-content";
import { Reveal } from "@/components/ui/reveal";
import { SectionTitle } from "@/components/ui/section-title";

export function FolktalesSection() {
  return (
    <section id="folktales" className="mx-auto w-full max-w-6xl px-6 py-20 sm:px-10 lg:px-16">
      <Reveal>
        <SectionTitle
          eyebrow="Folktales"
          title="Enchanting Folktales"
          description="From heroic adventures to mysterious winter spirits, these stories carry the moral imagination of generations."
        />
      </Reveal>

      <div className="mt-12 grid gap-7 md:grid-cols-3">
        {folktales.map((story, index) => (
          <Reveal key={story.title} delay={index * 0.1}>
            <motion.article
              className="group h-full overflow-hidden rounded-3xl border border-white/60 bg-white/60 p-4 shadow-[0_16px_50px_rgba(30,26,28,0.08)] backdrop-blur-md"
              whileHover={{ y: -8, scale: 1.01 }}
              transition={{ duration: 0.3 }}
            >
              <div className="relative overflow-hidden rounded-2xl">
                <Image
                  src={story.image}
                  alt={story.title}
                  width={420}
                  height={260}
                  loading="lazy"
                  className="h-52 w-full object-cover transition duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,transparent_35%,rgba(27,25,29,0.35))] opacity-0 transition duration-500 group-hover:opacity-100" />
              </div>
              <div className="px-1 pb-2 pt-4">
                <p className="text-xs uppercase tracking-[0.25em] text-[var(--muted-red)]">{story.subtitle}</p>
                <h3 className="mt-2 font-serif text-2xl text-[var(--charcoal)]">{story.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-[var(--ink-soft)]">{story.description}</p>
                <div className="mt-5">
                  <Link
                    href={`/folktales/${story.slug}`}
                    className="inline-flex items-center text-sm font-medium tracking-wide text-[var(--muted-red)] transition hover:translate-x-1 hover:text-[var(--charcoal)]"
                  >
                    More -&gt;
                  </Link>
                </div>
              </div>
            </motion.article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
