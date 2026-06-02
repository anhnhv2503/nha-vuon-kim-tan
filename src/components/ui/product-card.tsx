import AnimatedCard from "@/common/animated-card";
import { Product } from "@/types/product";
import Image from "next/image";
import { motion } from "framer-motion";

export const ProductCard = (product: Product) => {
  return (
    <AnimatedCard className="overflow-hidden">
      {/* Modern gradient background with abstract shapes */}
      <div className="relative h-auto rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
        {/* Abstract background pattern */}
        <div className="absolute inset-0 pointer-events-none" />

        {/* Image container with modern styling */}
        <div className="relative w-full h-64 sm:h-72 md:h-80 flex items-center justify-center overflow-hidden group">
          {/* Decorative circles */}
          <div className="absolute top-0 right-0 w-24 h-24 sm:w-32 sm:h-32 bg-[#E76B25]/15 rounded-full blur-2xl -mr-12 -mt-12 group-hover:bg-[#E76B25]/25 transition-colors duration-300" />
          <div className="absolute bottom-0 left-0 w-20 h-20 sm:w-28 sm:h-28 bg-[#B6744A]/10 rounded-full blur-2xl -ml-10 -mb-10 group-hover:bg-[#B6744A]/15 transition-colors duration-300" />

          {/* Image with modern scaling effect */}
          <motion.div
            className="relative z-10 w-full h-full flex items-center justify-center"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <Image
              src={product.imageUrl}
              alt={product.name}
              width={220}
              height={180}
              loading="eager"
              className="object-cover h-[90%] w-auto drop-shadow-lg"
            />
          </motion.div>
        </div>

        {/* Content container */}
        <div className="relative z-20 p-5 sm:p-6 md:p-7">
          {/* Title with modern typography */}
          <h3 className="text-lg sm:text-xl md:text-2xl font-black text-[#4C2004] mb-2 md:mb-3 line-clamp-2">
            {product.name}
          </h3>

          {/* Description with improved spacing */}
          <p className="text-xs sm:text-sm md:text-base text-gray-700 leading-relaxed mb-5 md:mb-6 line-clamp-3 min-h-12">
            {product.description}
          </p>

          {/* CTA Button with modern design */}
          <motion.button
            className="w-full py-2.5 sm:py-3 px-4 bg-gradient-to-r from-[#E76B25] to-[#D45A1A] text-white font-semibold text-sm sm:text-base rounded-lg hover:from-[#D45A1A] hover:to-[#C34A0A] transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center gap-2 group/btn"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            <span>Liên hệ để biết giá</span>
            <motion.svg
              className="w-4 h-4 opacity-0 group-hover/btn:opacity-100 transition-opacity"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              initial={{ x: -4 }}
              whileHover={{ x: 0 }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </motion.svg>
          </motion.button>
        </div>
      </div>
    </AnimatedCard>
  );
};
