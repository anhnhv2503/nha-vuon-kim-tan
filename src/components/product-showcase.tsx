"use client";

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

const AnimatedCard = ({ children, ...props }: any) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      whileHover={{ y: -8, boxShadow: "rgba(0, 0, 0, 0.12) 0px 8px 24px 0px" }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true, amount: 0.2 }}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export const ProductShowcase = () => {
  return (
    <AnimatedSection id="products" className="section-spacing bg-[#F3E7D3]">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-[24px] font-black text-[#4C2004] mb-12"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Sản phẩm Nổi Bật
        </motion.h2>
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
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
          {/* Product Card 1 */}
          <AnimatedCard className="card">
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
              <span className="text-[#B6744A] font-semibold">Từ 595.000₫</span>
              <motion.a
                href="#"
                className="text-[#E76B25] font-bold hover:text-[#D45A1A]"
                whileHover={{ x: 5 }}
              >
                Xem →
              </motion.a>
            </div>
          </AnimatedCard>

          {/* Product Card 2 */}
          <AnimatedCard className="card">
            <div className="h-48 bg-[#F5E9D5] mb-6 flex items-center justify-center border-b border-[#E8DAC4]">
              <span className="text-[#B6744A]">Trái cây lạ</span>
            </div>
            <h3 className="text-lg font-black text-[#4C2004] mb-3">
              Sầu riêng cao cấp
            </h3>
            <p className="text-black text-sm leading-relaxed mb-4">
              Vua của các loại trái cây. Sầu riêng tươi, thơm nhập khẩu trực
              tiếp từ những estate cao cấp.
            </p>
            <div className="flex justify-between items-center">
              <span className="text-[#B6744A] font-semibold">Từ 945.000₫</span>
              <motion.a
                href="#"
                className="text-[#E76B25] font-bold hover:text-[#D45A1A]"
                whileHover={{ x: 5 }}
              >
                Xem →
              </motion.a>
            </div>
          </AnimatedCard>

          {/* Product Card 3 */}
          <AnimatedCard className="card">
            <div className="h-48 bg-[#F5E9D5] mb-6 flex items-center justify-center border-b border-[#E8DAC4]">
              <span className="text-[#B6744A]">Mật ong thủ công</span>
            </div>
            <h3 className="text-lg font-black text-[#4C2004] mb-3">
              Mật ong vàng
            </h3>
            <p className="text-black text-sm leading-relaxed mb-4">
              Mật ong nguyên chất, chưa qua xử lý từ những trang trại ong sạch.
              Giàu hương vị và lợi ích dinh dưỡng.
            </p>
            <div className="flex justify-between items-center">
              <span className="text-[#B6744A] font-semibold">Từ 475.000₫</span>
              <motion.a
                href="#"
                className="text-[#E76B25] font-bold hover:text-[#D45A1A]"
                whileHover={{ x: 5 }}
              >
                Xem →
              </motion.a>
            </div>
          </AnimatedCard>
        </motion.div>
      </div>
    </AnimatedSection>
  );
};
