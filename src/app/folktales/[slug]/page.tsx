import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { folktales } from "@/data/culture-content";

type FolktalePageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function FolktaleDetailPage({ params }: FolktalePageProps) {
  const { slug } = await params;
  const story = folktales.find((item) => item.slug === slug);

  if (!story) {
    notFound();
  }

  return (
    <main className="mx-auto w-full max-w-5xl px-6 py-12 sm:px-10 lg:px-16">
      <Link
        href="/#folktales"
        className="inline-flex items-center text-sm font-medium tracking-wide text-[var(--muted-red)] transition hover:text-[var(--charcoal)]"
      >
        &lt;- Back to Folktales
      </Link>

      <article className="mt-6 overflow-hidden rounded-3xl border border-white/60 bg-white/70 shadow-[0_18px_55px_rgba(30,26,28,0.1)] backdrop-blur-md">
        <div className="relative h-[260px] w-full sm:h-[360px]">
          <Image src={story.image} alt={story.title} fill priority className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/10 to-transparent" />
          <div className="absolute bottom-0 left-0 px-6 pb-6 sm:px-8 sm:pb-8">
            <p className="text-xs uppercase tracking-[0.22em] text-white/80">{story.subtitle}</p>
            <h1 className="mt-2 font-serif text-4xl text-white sm:text-5xl">{story.title}</h1>
          </div>
        </div>

        <div className="space-y-5 px-6 py-8 sm:px-8 sm:py-10">
          {story.fullDescription.map((paragraph) => (
            <p
              key={paragraph}
              className="text-base leading-relaxed text-[var(--ink-soft)] sm:text-lg"
              style={{ fontFamily: '"Times New Roman", Times, serif' }}
            >
              {paragraph}
            </p>
          ))}
        </div>
      </article>
    </main>
  );
}