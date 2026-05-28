"use client";

import { About } from "@/components/about";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { Navigation } from "@/components/navigation";
import { ProductShowcase } from "@/components/product-showcase";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const AnimatedSection = ({ children, ...props }: any) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      {...props}
    >
      {children}
    </motion.section>
  );
};

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

      {/* Footer */}
      <Footer />
    </div>
  );
}
