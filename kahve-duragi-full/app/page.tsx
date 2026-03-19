import { Announcement } from "@/components/ui/Announcement";
import { Navbar } from "@/components/sections/Navbar";
import { HeroSection } from "@/components/sections/HeroSection";
import { CategorySection } from "@/components/sections/CategorySection";
import { FeaturedSection } from "@/components/sections/FeaturedSection";
import { MenuSection } from "@/components/sections/MenuSection";
import { QRCtaSection } from "@/components/sections/QRCtaSection";
import { Footer } from "@/components/sections/Footer";
import { demoBusiness } from "@/lib/data";

export default function LandingPage() {
  const business = demoBusiness;

  return (
    <main className="min-h-screen">
      {/* 1. Announcement */}
      <Announcement
        message="Hafta sonuna özel: Her kahvede %20 indirim!"
        emoji="☕"
        href="#menu"
      />

      {/* 2. Navbar */}
      <Navbar business={business} />

      {/* 3. Hero */}
      <HeroSection business={business} />

      {/* 4. Kategoriler */}
      <CategorySection categories={business.categories} />

      {/* 5. Öne Çıkan Ürünler */}
      <FeaturedSection items={business.featuredItems} />

      {/* 6. Tam Menü */}
      <MenuSection items={business.menuItems} categories={business.categories} />

      {/* 7. QR CTA */}
      <QRCtaSection businessName={business.name} slug={business.slug} />

      {/* 8. Footer */}
      <Footer business={business} />
    </main>
  );
}
