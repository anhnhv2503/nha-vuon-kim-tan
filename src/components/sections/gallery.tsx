import AnimatedSection from "@/common/animated-section";
import { Marquee3D } from "@/components/sections/gallery-marquee";
import { motion } from "framer-motion";
import Image from "next/image";

const Gallery = () => {
  return (
    <AnimatedSection
      id="gallery"
      className="w-full bg-linear-to-b from-white via-white to-[#F3E7D3] py-16 md:py-24 lg:py-32 px-4 sm:px-8 md:px-16 lg:px-32 relative overflow-hidden"
    >
      <motion.h2
        className="text-[20px] sm:text-[22px] md:text-[24px] font-black text-[#4C2004] mb-8 md:mb-12"
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <span className="text-[20px] sm:text-[22px] md:text-[24px] font-black text-[#4C2004] mb-8 md:mb-12">
          Thư Viện Hình Ảnh (Đang cập nhật)
        </span>
      </motion.h2>

      <Marquee3D />
    </AnimatedSection>
  );
};

export default Gallery;
