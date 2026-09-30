// src/app/(legal)/layout.tsx
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

export default function LegalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-cream-50 pt-16 sm:pt-20">
        <section className="container-wide py-20">
          <article
            className="prose prose-lg mx-auto max-w-3xl
              prose-headings:font-display prose-headings:text-ink prose-headings:tracking-tight
              prose-h1:text-5xl prose-h1:font-semibold
              prose-p:text-ink-soft prose-li:text-ink-soft
              prose-a:text-terracotta-600 hover:prose-a:text-terracotta-700
              prose-strong:text-ink"
          >
            {children}
          </article>
        </section>
      </main>
      <Footer />
    </>
  );
}
