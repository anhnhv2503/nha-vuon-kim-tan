import { motion } from "framer-motion";
export const Navigation = () => {
  return (
    <motion.nav
      className="h-[72px] flex items-center px-8 md:px-16 lg:px-32 shadow-[rgba(0,0,0,0.1)_0px_2px_20px_0px] bg-[rgba(243,231,211,0.31)]"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="max-w-7xl w-full mx-auto flex justify-between items-center">
        <motion.div
          className="text-3xl font-black text-[#4C2004]"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          Nhà Vườn Kim Tân
        </motion.div>
        <div className="hidden md:flex gap-8">
          <motion.a
            href="#products"
            className="text-black font-medium hover:text-[#B6744A] hover:underline"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.2 }}
          >
            Sản phẩm
          </motion.a>
          <motion.a
            href="#about"
            className="text-black font-medium hover:text-[#B6744A] hover:underline"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.2 }}
          >
            Giới thiệu
          </motion.a>
          <motion.a
            href="#contact"
            className="text-black font-medium hover:text-[#B6744A] hover:underline"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.2 }}
          >
            Liên hệ
          </motion.a>
        </div>
      </div>
    </motion.nav>
  );
};
