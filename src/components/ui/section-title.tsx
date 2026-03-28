import { ReactNode } from "react";

type SectionTitleProps = {
  eyebrow: string;
  title: string;
  description?: ReactNode;
  align?: "left" | "center";
};

export function SectionTitle({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionTitleProps) {
  const alignment = align === "center" ? "text-center mx-auto" : "text-left";

  return (
    <div className={`max-w-2xl ${alignment}`}>
      <p className="mb-2 text-xs uppercase tracking-[0.35em] text-[var(--muted-red)]">{eyebrow}</p>
      <h2 className="font-serif text-3xl leading-tight text-[var(--charcoal)] sm:text-4xl">{title}</h2>
      {description ? (
        <p className="mt-4 text-sm leading-relaxed text-[var(--ink-soft)] sm:text-base">{description}</p>
      ) : null}
    </div>
  );
}
