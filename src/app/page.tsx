import { CursorGlow } from "@/components/effects/cursor-glow";
import { FloatingPetals } from "@/components/effects/floating-petals";
import { FashionSection } from "@/components/sections/fashion-section";
import { FolktalesSection } from "@/components/sections/folktales-section";
import { GallerySection } from "@/components/sections/gallery-section";
import { HeroSection } from "@/components/sections/hero-section";
import { QuoteSection } from "@/components/sections/quote-section";
import { SiteFooter } from "@/components/sections/site-footer";

export default function Home() {
  return (
    <div className="relative overflow-x-clip">
      <CursorGlow />
      <FloatingPetals />
      <main className="relative z-10">
        <HeroSection />
        <FolktalesSection />
        <FashionSection />
        <GallerySection />
        <QuoteSection />
      </main>
      <SiteFooter />
    </div>
  );
}
