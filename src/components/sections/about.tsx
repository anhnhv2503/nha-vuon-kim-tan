import AnimatedSection from "@/common/animated-section";
import { motion } from "framer-motion";
import Image from "next/image";
import mainGate from "@/data/images/cong-chinh.webp";

export const About = () => {
  return (
    <>
      <AnimatedSection id="about" className="section-spacing bg-white">
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
                width={300}
                height={500}
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
          <h2 className="text-[24px] font-black text-[#4C2004] mb-12 mt-20">
            Sản phẩm Nổi Bật
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Product Card 1 */}
            <div className="card">
              <div className="h-48 bg-[#F5E9D5] mb-6 flex items-center justify-center border-b border-[#E8DAC4]">
                <span className="text-[#B6744A]">Gia vị đặc biệt</span>
              </div>
              <h3 className="text-lg font-black text-[#4C2004] mb-3">
                Hạt tiêu cao cấp
              </h3>
              <p className="text-black text-sm leading-relaxed mb-4">
                Hạt tiêu tuyển chọn tay với hương vị táo bạo, phức tạp. Hoàn hảo
                cho những người sành ăn.
              </p>
              <div className="flex justify-between items-center">
                <span className="text-[#B6744A] font-semibold">
                  Từ 595.000đ
                </span>
                <a
                  href="#"
                  className="text-[#E76B25] font-bold hover:text-[#D45A1A]"
                >
                  Xem →
                </a>
              </div>
            </div>

            {/* Product Card 2 */}
            <div className="card">
              <div className="h-48 bg-[#F5E9D5] mb-6 flex items-center justify-center border-b border-[#E8DAC4]">
                <span className="text-[#B6744A]">Trái cây lạ</span>
              </div>
              <h3 className="text-lg font-black text-[#4C2004] mb-3">
                Sầu riêng cao cấp
              </h3>
              <p className="text-black text-sm leading-relaxed mb-4">
                Vua của các loại trái cây. Sầu riêng tươi, thơm nhập khẩu trực
                tiếp từ những lestate cao cấp.
              </p>
              <div className="flex justify-between items-center">
                <span className="text-[#B6744A] font-semibold">
                  Từ 945.000đ
                </span>
                <a
                  href="#"
                  className="text-[#E76B25] font-bold hover:text-[#D45A1A]"
                >
                  Xem →
                </a>
              </div>
            </div>

            {/* Product Card 3 */}
            <div className="card">
              <div className="h-48 bg-[#F5E9D5] mb-6 flex items-center justify-center border-b border-[#E8DAC4]">
                <span className="text-[#B6744A]">Mật ong thủ công</span>
              </div>
              <h3 className="text-lg font-black text-[#4C2004] mb-3">
                Mật ong vàng
              </h3>
              <p className="text-black text-sm leading-relaxed mb-4">
                Mật ong nguyên chất, chưa qua xử lý từ những trang trại ong
                sạch. Giàu hương vị và lợi ích dinh dưỡng.
              </p>
              <div className="flex justify-between items-center">
                <span className="text-[#B6744A] font-semibold">
                  Từ 475.000đ
                </span>
                <a
                  href="#"
                  className="text-[#E76B25] font-bold hover:text-[#D45A1A]"
                >
                  Xem →
                </a>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>
      <AnimatedSection id="about" className="section-spacing bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="bg-[#F5E9D5] h-80 rounded-none flex items-center justify-center border border-[#E8DAC4]">
              <div className="text-center">
                <p className="text-[#B6744A] font-semibold">
                  Câu chuyện của chúng tôi
                </p>
                <p className="text-xs text-[#999999] mt-2">Hình ảnh sắp có</p>
              </div>
            </div>
            <div className="flex flex-col gap-6">
              <h2 className="text-[24px] font-black text-[#4C2004]">
                Về Nhà Vườn Kim Tân
              </h2>
              <p className="text-black leading-relaxed">
                Với hơn hai mươi năm kinh nghiệm trong việc cung cấp gia vị đặc
                biệt cao cấp và trái cây lạ, Nhà Vườn Kim Tân đã trở thành điểm
                đến đáng tin cậy cho các chuyên gia nấu ăn và những người yêu
                thích nấu ăn ở nhà.
              </p>
              <p className="text-black leading-relaxed">
                Chúng tôi tự hào với các mối quan hệ trực tiếp với những nhà sản
                xuất tốt nhất trên thế giới, đảm bảo mỗi sản phẩm đạt được tiêu
                chuẩn khắt khe của chúng tôi về chất lượng, tính xác thực và bền
                vững.
              </p>
              <motion.div
                className="flex flex-col gap-3 pt-4"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: {
                      staggerChildren: 0.15,
                    },
                  },
                }}
              >
                <motion.div
                  className="flex gap-4"
                  variants={{
                    hidden: { opacity: 0, x: 20 },
                    visible: { opacity: 1, x: 0 },
                  }}
                  transition={{ duration: 0.5 }}
                >
                  <span className="text-[#E76B25] font-black text-2xl">✓</span>
                  <div>
                    <h4 className="font-bold text-[#4C2004]">
                      Chất lượng thực
                    </h4>
                    <p className="text-sm text-black">
                      Được lấy trực tiếp từ nhà sản xuất cao cấp
                    </p>
                  </div>
                </motion.div>
                <motion.div
                  className="flex gap-4"
                  variants={{
                    hidden: { opacity: 0, x: 20 },
                    visible: { opacity: 1, x: 0 },
                  }}
                  transition={{ duration: 0.5 }}
                >
                  <span className="text-[#E76B25] font-black text-2xl">✓</span>
                  <div>
                    <h4 className="font-bold text-[#4C2004]">
                      Tuyển chọn chuyên gia
                    </h4>
                    <p className="text-sm text-black">
                      Được tuyển chọn tay vì hương vị và sự xuất sắc
                    </p>
                  </div>
                </motion.div>
                <motion.div
                  className="flex gap-4"
                  variants={{
                    hidden: { opacity: 0, x: 20 },
                    visible: { opacity: 1, x: 0 },
                  }}
                  transition={{ duration: 0.5 }}
                >
                  <span className="text-[#E76B25] font-black text-2xl">✓</span>
                  <div>
                    <h4 className="font-bold text-[#4C2004]">
                      Thực hành bền vững
                    </h4>
                    <p className="text-sm text-black">
                      Cam kết với trách nhiệm môi trường
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </>
  );
};
