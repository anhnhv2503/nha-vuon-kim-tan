"use client";

import AnimatedSection from "@/common/animated-section";
import { ProductCard } from "@/components/ui/product-card";
import { products } from "@/data/mock/ProductList";
import { motion } from "framer-motion";

export const ProductShowcase = () => {
  return (
    <AnimatedSection
      id="products"
      className="w-full bg-[#F5E9D5] py-16 md:py-24 lg:py-32 px-4 sm:px-8 md:px-16 lg:px-32"
    >
      <div className="max-w-6xl mx-auto w-full">
        <motion.h2
          className="text-[20px] sm:text-[22px] md:text-[24px] font-black text-[#4C2004] mb-8 md:mb-12"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Sản phẩm Nổi Bật
        </motion.h2>
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
        >
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </motion.div>
      </div>
    </AnimatedSection>
  );
};
