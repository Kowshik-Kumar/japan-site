import Link from "next/link";

const footerLinks = [
  { label: "Folktales", href: "#folktales" },
  { label: "Fashion", href: "#fashion" },
  { label: "Gallery", href: "#gallery" },
];

const socials = [
  { label: "Instagram", href: "https://instagram.com", short: "IG" },
  { label: "X", href: "https://x.com", short: "X" },
  { label: "Telegram", href: "https://telegram.org", short: "TG" },
];

export function SiteFooter() {
  return (
    <footer className="mt-20 border-t border-black/10 bg-white/45 px-6 py-12 backdrop-blur-md sm:px-10 lg:px-16">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-serif text-2xl text-[var(--charcoal)]">Japanese Culture</p>
          <p className="mt-1 text-sm text-[var(--ink-soft)]">Folktales & Fashion</p>
        </div>

        <nav className="flex gap-6 text-sm text-[var(--ink-soft)]">
          {footerLinks.map((link) => (
            <Link key={link.label} href={link.href} className="transition hover:text-[var(--muted-red)]">
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          {socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noreferrer"
              aria-label={social.label}
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-black/10 bg-white/70 text-[10px] font-semibold tracking-[0.1em] text-[var(--ink-soft)] transition hover:-translate-y-0.5 hover:text-[var(--muted-red)]"
            >
              {social.short}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
