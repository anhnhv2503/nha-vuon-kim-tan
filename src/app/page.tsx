import { About } from "@/components/sections/about";
import { Footer } from "@/components/sections/footer";
import { Gallery } from "@/components/sections/gallery";
import { Hero } from "@/components/sections/hero";
import { Highlights } from "@/components/sections/highlights";
import { Navigation } from "@/components/sections/navigation";
import { ProductShowcase } from "@/components/sections/product-showcase";

export default function Home() {
  return (
    <>
      <Navigation />
      <main className="flex-1">
        <Hero />
        <Highlights />
        <ProductShowcase />
        <About />
        <Gallery />
      </main>
      <Footer />
    </>
  );
}
