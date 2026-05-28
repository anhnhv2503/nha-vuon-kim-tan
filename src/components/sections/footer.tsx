import { motion } from "framer-motion";

export const Footer = () => {
  return (
    <motion.footer
      className="bg-[#2A1503] text-white py-16 px-8 md:px-16 lg:px-32"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="grid md:grid-cols-4 gap-8 mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
        >
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <h3 className="font-black mb-4">Nhà Vườn Kim Tân</h3>
            <p className="text-sm text-gray-300">
              Gia vị đặc biệt cao cấp và trái cây lạ kể từ năm 2000.
            </p>
          </motion.div>
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <h4 className="font-bold mb-4">Cửa hàng</h4>
            <ul className="text-sm space-y-2">
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  Gia vị
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  Trái cây
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  Mật ong
                </a>
              </li>
            </ul>
          </motion.div>
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <h4 className="font-bold mb-4">Giới thiệu</h4>
            <ul className="text-sm space-y-2">
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  Câu chuyện của chúng tôi
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  Chất lượng
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  Bền vững
                </a>
              </li>
            </ul>
          </motion.div>
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <h4 className="font-bold mb-4">Liên hệ</h4>
            <ul className="text-sm space-y-2">
              <li className="text-gray-300">Email: hello@nhavuonkimtan.com</li>
              <li className="text-gray-300">Điện thoại: +84 (0) 123 456 789</li>
            </ul>
          </motion.div>
        </motion.div>
        <div className="border-t border-gray-700 pt-8 text-center text-sm text-gray-400">
          <p>&copy; 2024 Nhà Vườn Kim Tân. Bảo lưu mọi quyền.</p>
        </div>
      </div>
    </motion.footer>
  );
};
