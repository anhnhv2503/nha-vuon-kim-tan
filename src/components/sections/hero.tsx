import durian from "@/data/images/durian-bg-removed.png";
import honey from "@/data/images/honey-bg-removed.png";
import pepper from "@/data/images/pepper-bg-removed.png";
import { motion } from "framer-motion";
import Image from "next/image";

export const Hero = () => {
  return (
    <motion.section
      className="w-full bg-white py-24 md:py-32 lg:py-40 px-8 md:px-16 lg:px-32"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="flex flex-col gap-8 z-10">
            <motion.h1
              className="text-[28px] md:text-[36px] lg:text-[51.2px] font-black leading-tight text-[#4C2004]"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Gia vị đặc biệt cao cấp & Trái cây lạ
            </motion.h1>
            <motion.p
              className="text-base md:text-lg text-black max-w-xl leading-relaxed "
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Trải nghiệm lựa chọn tốt nhất của gia vị thủ công và trái cây lạ.
              Từ hạt tiêu thơm ngát đến sầu riêng kỳ lạ, khám phá nguyên liệu
              cao cấp thực sự nâng cao trải nghiệm nấu ăn của bạn.
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row gap-4 pt-4"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <motion.button
                className="btn-primary"
                whileHover={{ scale: 1.05, backgroundColor: "#D45A1A" }}
                whileTap={{ scale: 0.95 }}
              >
                Mua Ngay
              </motion.button>
              <motion.button
                className="btn-secondary"
                whileHover={{ scale: 1.05, backgroundColor: "#E8DAC4" }}
                whileTap={{ scale: 0.95 }}
              >
                Tìm Hiểu Thêm
              </motion.button>
            </motion.div>
          </div>
          <motion.div
            className="h-96 rounded-none flex items-center justify-center z-0"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            whileHover={{ scale: 1.02 }}
          >
            <Image
              src={durian}
              alt="Durian"
              className="object-cover"
              loading="eager"
            />
            <Image
              src={pepper}
              alt="Pepper"
              className="object-cover"
              loading="eager"
            />
            <Image
              src={honey}
              alt="Honey"
              className="object-cover"
              loading="eager"
            />
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};
