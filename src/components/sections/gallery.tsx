import AnimatedSection from "@/common/animated-section";
import Image from "next/image";
import { motion } from "framer-motion";

const Gallery = () => {
  return (
    <AnimatedSection
      id="gallery"
      className="w-full bg-gradient-to-b from-white via-white to-[#F3E7D3] py-16 md:py-24 lg:py-32 px-4 sm:px-8 md:px-16 lg:px-32 relative overflow-hidden"
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

      <div className="grid grid-cols-4 gap-2">
        <Image
          src="https://img.freepik.com/free-photo/cascade-boat-clean-china-natural-rural_1417-1356.jpg"
          alt=""
          width={400}
          height={400}
          className="col-span-2 w-full h-full object-cover"
        />
        <Image
          src="https://img.freepik.com/free-photo/beautiful-scenery-rock-formations-by-sea-queens-bath-kauai-hawaii-sunset_181624-36857.jpg"
          alt=""
          width={400}
          height={400}
          className="w-full h-full object-cover"
        />
        <Image
          src="https://img.freepik.com/free-photo/sea-beach_1203-3516.jpg?size=626&ext=jpg&uid=R134535407&ga=GA1.1.71340048.1688965399&semt=sph"
          alt=""
          width={400}
          height={400}
          className="w-full h-full object-cover row-span-2"
        />
        <Image
          src="https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg"
          alt=""
          width={400}
          height={400}
          className="w-full h-full object-cover"
        />
        <Image
          src="https://img.freepik.com/free-photo/group-elephants-big-green-tree-wilderness_181624-16897.jpg"
          alt=""
          width={400}
          height={400}
          className="col-span-2 w-full h-full object-cover"
        />
      </div>
    </AnimatedSection>
  );
};

export default Gallery;
