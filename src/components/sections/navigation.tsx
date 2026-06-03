"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const menuItems = [
    { label: "Sản phẩm", href: "#products" },
    { label: "Giới thiệu", href: "#about" },
  ];

  return (
    <motion.nav
      className="h-18 flex items-center px-4 sm:px-8 md:px-16 lg:px-32 shadow-[rgba(0,0,0,0.1)_0px_2px_20px_0px] bg-[rgba(243,231,211,0.31)] fixed w-full z-50 backdrop-blur-sm min-h-18"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="max-w-7xl w-full mx-auto flex justify-between items-center">
        {/* Logo */}
        <motion.div
          className="text-3xl font-black text-[#4C2004] shrink-0"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          <Image
            src="/logo.png"
            alt="Logo"
            width={60}
            height={60}
            loading="eager"
          />
        </motion.div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex gap-8">
          {menuItems.map((item) => (
            <motion.a
              key={item.href}
              href={item.href}
              className="text-black font-medium text-base hover:text-[#B6744A] hover:underline transition-colors"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.2 }}
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </motion.a>
          ))}
        </div>

        {/* Mobile Hamburger Button */}
        <motion.button
          className="lg:hidden flex flex-col gap-1.5 p-2 focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
          whileTap={{ scale: 0.95 }}
        >
          <motion.span
            className="block w-6 h-0.5 bg-black rounded-full"
            animate={isOpen ? { rotate: 45, y: 10 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.3 }}
          />
          <motion.span
            className="block w-6 h-0.5 bg-black rounded-full"
            animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
            transition={{ duration: 0.3 }}
          />
          <motion.span
            className="block w-6 h-0.5 bg-black rounded-full"
            animate={isOpen ? { rotate: -45, y: -10 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.3 }}
          />
        </motion.button>
      </div>

      {/* Mobile Menu */}
      <motion.div
        className="absolute top-full left-0 right-0 bg-[rgba(243,231,211,0.95)] lg:hidden shadow-md"
        initial={{ height: 0, opacity: 0 }}
        animate={
          isOpen ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }
        }
        transition={{ duration: 0.3 }}
        style={{ overflow: "hidden" }}
      >
        <div className="flex flex-col gap-4 px-4 py-6 sm:px-8">
          {menuItems.map((item) => (
            <motion.a
              key={item.href}
              href={item.href}
              className="text-black font-medium text-base hover:text-[#B6744A] hover:underline transition-colors"
              whileHover={{ x: 5 }}
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </motion.a>
          ))}
        </div>
      </motion.div>
    </motion.nav>
  );
};
