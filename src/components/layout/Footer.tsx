// src/components/layout/Footer.tsx
import Link from 'next/link';
import { MessageCircle } from 'lucide-react';
import { SITE_CONFIG, FOOTER_LINKS } from '@/lib/constants';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-neutral-200 bg-neutral-50">
      <div className="container mx-auto px-4 py-8 sm:py-12 sm:px-6 lg:px-8">
        <div className="grid gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-2 text-center sm:text-left">
            <Link
              href="/"
              className="text-2xl font-display font-bold text-neutral-900 transition-colors hover:text-primary-600 inline-block"
            >
              {SITE_CONFIG.name}
            </Link>
            <p className="mt-3 sm:mt-4 text-sm leading-relaxed text-neutral-600 max-w-md mx-auto sm:mx-0">
              {SITE_CONFIG.description}
            </p>
          </div>

          {/* Company Links */}
          <div className="text-center sm:text-left">
            <h3 className="text-sm font-semibold text-neutral-900 uppercase tracking-wider">
              Company
            </h3>
            <ul className="mt-3 sm:mt-4 space-y-2 sm:space-y-3">
              {FOOTER_LINKS.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-neutral-600 transition-colors hover:text-primary-600"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="text-center sm:text-left">
            <h3 className="text-sm font-semibold text-neutral-900 uppercase tracking-wider">
              Connect
            </h3>
            <ul className="mt-3 sm:mt-4 space-y-2 sm:space-y-3">
              <li>
                <a
                  href={SITE_CONFIG.links.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-neutral-600 transition-colors hover:text-primary-600"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href={SITE_CONFIG.links.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-neutral-600 transition-colors hover:text-primary-600"
                >
                  <MessageCircle className="h-4 w-4" />
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 sm:mt-12 border-t border-neutral-200 pt-6 sm:pt-8">
          <p className="text-center text-sm text-neutral-600">
            &copy; {currentYear} {SITE_CONFIG.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
