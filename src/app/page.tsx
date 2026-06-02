"use client";

import { About } from "@/components/sections/about";
import { Footer } from "@/components/sections/footer";
import Gallery from "@/components/sections/gallery";
import { Hero } from "@/components/sections/hero";
import { Navigation } from "@/components/sections/navigation";
import { ProductShowcase } from "@/components/sections/product-showcase";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-[#F3E7D3] text-black">
      {/* Navigation */}
      <Navigation />
      {/* Hero Section */}
      <Hero />
      {/* Products Showcase */}
      <ProductShowcase />
      {/* About Section */}
      <About />
      {/* Gallery Section */}
      <Gallery />
      {/* Footer */}
      <Footer />
    </div>
  );
}
