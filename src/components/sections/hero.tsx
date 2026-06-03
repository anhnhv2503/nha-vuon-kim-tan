import durian from "@/data/images/durian-bg-removed.png";
import honey from "@/data/images/honey-bg-removed.png";
import pepper from "@/data/images/pepper-bg-removed.png";
import {
  AnimatePresence,
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export const Hero = () => {
  const containerRef = useRef(null);
  const imageContainerRef = useRef(null);
  const [rotation, setRotation] = useState(0);

  // Auto-rotate images every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setRotation((prev) => (prev + 1) % 3);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Define images array for rotation
  const images = [
    {
      id: "durian",
      src: durian,
      title: "Sầu riêng",
      subtitle: "Vua của trái cây",
      alt: "Durian - Vua của các loại trái cây",
    },
    {
      id: "pepper",
      src: pepper,
      title: "Hạt tiêu",
      subtitle: "Gia vị thơm ngát",
      alt: "Pepper - Gia vị thơm ngát",
    },
    {
      id: "honey",
      src: honey,
      title: "Mật ong",
      subtitle: "Nguyên chất tự nhiên",
      alt: "Honey - Mật ong nguyên chất",
    },
  ];

  // Get rotated images based on current rotation state
  const getRotatedImages = () => {
    return [
      images[(0 + rotation) % 3],
      images[(1 + rotation) % 3],
      images[(2 + rotation) % 3],
    ];
  };

  const rotatedImages = getRotatedImages();

  // Parallax effects for each image
  const yDurian = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const yPepper = useTransform(scrollYProgress, [0, 1], [-30, 30]);
  const yHoney = useTransform(scrollYProgress, [0, 1], [30, -30]);

  const opacityDurian = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [0.7, 1, 0.7],
  );
  const opacityPepper = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [0.6, 1, 0.6],
  );
  const opacityHoney = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [0.7, 1, 0.7],
  );

  const scaleDurian = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [0.9, 1.05, 0.9],
  );
  const scalePepper = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [0.95, 1.08, 0.95],
  );
  const scaleHoney = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [0.9, 1.05, 0.9],
  );

  return (
    <motion.section
      ref={containerRef}
      className="w-full bg-linear-to-b from-white via-white to-[#F3E7D3] pt-16 md:pt-20 lg:pt-28 pb-12 md:pb-16 lg:pb-20 px-4 sm:px-8 md:px-16 lg:px-32 relative overflow-hidden mt-22"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Decorative background elements */}
      <div className="absolute top-10 right-10 w-32 h-32 bg-[#E76B25] rounded-full opacity-5 blur-3xl"></div>
      <div className="absolute bottom-20 left-5 w-40 h-40 bg-[#B6744A] rounded-full opacity-5 blur-3xl"></div>

      <div className="max-w-full mx-auto w-full relative z-10">
        <div className="grid grid-cols-1 gap-6 md:gap-8 lg:gap-10">
          {/* Image Grid with Text Overlay - FULL WIDTH */}
          <motion.div
            ref={imageContainerRef}
            className="relative w-full h-87.5 sm:h-112.5 md:h-137.5 lg:h-162.5 grid grid-cols-3 gap-2 sm:gap-3 md:gap-4 lg:gap-6 perspective"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {/* Dynamic Image Cards with Infinite Animation */}
            <AnimatePresence>
              {rotatedImages.map((img, index) => (
                <motion.div
                  key={img.id}
                  layoutId={img.id}
                  className="relative h-full rounded-lg overflow-hidden bg-[#F5E9D5] border border-[#E8DAC4] shadow-md hover:shadow-lg transition-shadow duration-300"
                  style={{
                    y: index === 0 ? yDurian : index === 1 ? yPepper : yHoney,
                    opacity:
                      index === 0
                        ? opacityDurian
                        : index === 1
                          ? opacityPepper
                          : opacityHoney,
                    scale:
                      index === 0
                        ? scaleDurian
                        : index === 1
                          ? scalePepper
                          : scaleHoney,
                  }}
                  whileHover={{
                    boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
                    borderColor: "#E76B25",
                  }}
                  initial={{ opacity: 0, scale: 0.8, rotate: 0 }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                    rotate: 0,
                  }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{
                    duration: 0.8,
                    delay: index * 0.12,
                    ease: "easeInOut",
                  }}
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-full object-cover"
                    loading="eager"
                    priority
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/40 via-black/10 to-transparent flex flex-col justify-end p-4 md:p-6">
                    <span className="text-white font-black text-lg md:text-2xl">
                      {img.title}
                    </span>
                    <span className="text-white/80 font-medium text-xs md:text-sm">
                      {img.subtitle}
                    </span>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};
