import { Hero } from '@/components/sections/Hero';
import { CategoryGrid } from '@/components/sections/CategoryGrid';
import { AboutSection } from '@/components/sections/AboutSection';
import { Newsletter } from '@/components/sections/Newsletter';

export default function HomePage() {
  return (
    <>
      <Hero />
      <CategoryGrid />
      <AboutSection />
      <Newsletter />
    </>
  );
}
