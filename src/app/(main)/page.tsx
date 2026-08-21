import HeroSection from "@/src/components/HeroSection";
import CategoriesSection from "@/src/components/CategoriesSection";
import FeaturedProductsSection from "@/src/components/FeaturedProducts";
import QuoteSection from "@/src/components/QuoteSection";
import BrandsSection from "@/src/components/BrandsSection";

export default function Home() {
  return (
    <div className="font-sans bg-slate-50 text-slate-800 antialiased">
      <main>
        <HeroSection />
        <CategoriesSection />
        <FeaturedProductsSection />
        <QuoteSection />
        <BrandsSection />
      </main>

    </div>
  );
}