import AnimatedSection from "@/common/animated-section";
import { motion } from "framer-motion";
import Image from "next/image";
import mainGate from "@/data/images/cong-chinh.webp";

export const About = () => {
  return (
    <>
      <AnimatedSection
        id="about"
        className="section-spacing bg-gradient-to-b from-[#F3E7D3] via-white to-white h-164"
      >
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              className="h-80 rounded-none flex items-center justify-center"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              <Image
                src={mainGate}
                alt="Main Gate"
                className="object-cover"
                loading="eager"
              />
            </motion.div>
            <div className="flex flex-col gap-6">
              <motion.h2
                className="text-[24px] font-black text-[#4C2004]"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                Về Nhà Vườn Kim Tân
              </motion.h2>
              <motion.p
                className="text-black leading-relaxed"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                Với hơn hai mươi năm kinh nghiệm trong việc cung cấp gia vị đặc
                biệt cao cấp và trái cây lạ, Nhà Vườn Kim Tân đã trở thành điểm
                đến đáng tin cây cho các chuyên gia nấu ăn và những người yêu
                thích nấu ăn ở nhà.
              </motion.p>
              <motion.p
                className="text-black leading-relaxed"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                Chúng tôi tự hào với các mối quan hệ trực tiếp với những nhà sản
                xuất tốt nhất trên thế giới, đảm bảo mỗi sản phẩm đạt được tiêu
                chuẩn khắt khe của chúng tôi về chất lượng, tính xác thực và bền
                vững.
              </motion.p>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </>
  );
};
