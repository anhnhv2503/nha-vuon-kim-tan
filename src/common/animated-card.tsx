import { motion } from "framer-motion";

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

export default AnimatedCard;
