// src/components/layout/Footer.tsx
import Link from 'next/link';
import Image from 'next/image';
import { MessageCircle, Mail } from 'lucide-react';
import { SITE_CONFIG, FOOTER_LINKS } from '@/lib/constants';

// Brand glyphs aren't in this lucide build — inline a minimal Instagram mark.
function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-ink text-cream-200">
      {/* oversized wordmark watermark */}
      <div className="pointer-events-none absolute -bottom-8 left-0 w-full select-none text-center font-display text-[22vw] font-semibold leading-none text-cream-50/[0.04]">
        Adya
      </div>

      <div className="container-wide relative py-20">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          {/* Brand */}
          <div>
            <Link href="/" aria-label="Adya Artistry — home" className="inline-flex">
              <Image
                src="/adya-artistry-logo-cropped.png"
                alt="Adya Artistry — made with heart"
                width={852}
                height={307}
                className="h-16 w-auto"
              />
            </Link>
            <p className="mt-4 max-w-sm leading-relaxed text-cream-200/70">
              {SITE_CONFIG.description}. Made by hand, in small batches, with a lot
              of heart.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <a
                href={SITE_CONFIG.links.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-cream-100/15 text-cream-100 transition-colors hover:border-terracotta-400 hover:text-terracotta-300"
              >
                <InstagramIcon className="h-4 w-4" />
              </a>
              <a
                href={SITE_CONFIG.links.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-cream-100/15 text-cream-100 transition-colors hover:border-terracotta-400 hover:text-terracotta-300"
              >
                <MessageCircle className="h-4 w-4" />
              </a>
              <a
                href={`mailto:${SITE_CONFIG.links.email}`}
                aria-label="Email"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-cream-100/15 text-cream-100 transition-colors hover:border-terracotta-400 hover:text-terracotta-300"
              >
                <Mail className="h-4 w-4" />
              </a>
            </div>
          </div>

          <FooterColumn title="Shop" links={FOOTER_LINKS.shop} />
          <FooterColumn title="Company" links={FOOTER_LINKS.company} />
          <FooterColumn title="Support" links={FOOTER_LINKS.support} />
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-cream-100/10 pt-8 sm:flex-row">
          <p className="text-sm text-cream-200/60">
            &copy; {currentYear} {SITE_CONFIG.name}. All rights reserved.
          </p>
          <p className="text-sm text-cream-200/60">
            Handcrafted with <span className="text-terracotta-400">❤</span> in India
          </p>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: readonly { label: string; href: string }[];
}) {
  return (
    <div>
      <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-cream-100">
        {title}
      </h3>
      <ul className="mt-4 space-y-3">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="text-sm text-cream-200/70 transition-colors hover:text-terracotta-300"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
