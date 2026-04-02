"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { galleryItems } from "@/data/culture-content";
import { Reveal } from "@/components/ui/reveal";
import { SectionTitle } from "@/components/ui/section-title";

export function GallerySection() {
  return (
    <section id="gallery" className="mx-auto w-full max-w-6xl px-6 py-20 sm:px-10 lg:px-16">
      <Reveal>
        <SectionTitle
          eyebrow="Visual Gallery"
          title="Textiles, Symbols, and Folklore Art"
          description="A bento-style arrangement inspired by gallery walls and patterned textile blocks."
        />
      </Reveal>

      <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-3 md:grid-rows-3">
        {galleryItems.map((item, index) => (
          <Reveal key={item.title} delay={index * 0.08} className={item.className}>
            <motion.figure
              className="group relative h-full min-h-56 overflow-hidden rounded-3xl border border-white/50 bg-white/60 shadow-[0_18px_45px_rgba(28,25,28,0.1)]"
              whileHover={{ y: -6 }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src={item.image}
                alt={item.title}
                width={640}
                height={640}
                loading="lazy"
                className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
              />
              <figcaption className="absolute inset-x-3 bottom-3 rounded-2xl border border-white/50 bg-white/35 px-4 py-3 text-xs uppercase tracking-[0.24em] text-white opacity-0 backdrop-blur-md transition duration-300 group-hover:opacity-100">
                {item.title}
              </figcaption>
            </motion.figure>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
