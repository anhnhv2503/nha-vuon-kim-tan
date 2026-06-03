"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { HiMenuAlt3, HiX } from "react-icons/hi";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navItems = [
    { label: "Sản phẩm", href: "#products" },
    { label: "Giới thiệu", href: "#about" },
  ];

  return (
    <>
      {/* Fixed Floating Navbar */}
      <motion.nav
        className="fixed top-0 left-0 right-0 z-50 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        {/* Container with gap from top and centered */}
        <div className="flex justify-center pt-4 px-4 sm:px-6 pointer-events-auto">
          {/* Pill-shaped Navbar */}
          <motion.div
            className="w-full max-w-5xl px-6 py-3 sm:px-8 sm:py-4 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 shadow-[0_8px_32px_0_rgba(31,38,135,0.15)] hover:bg-white/15 transition-colors duration-300"
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="flex items-center justify-between">
              {/* Logo */}
              <motion.div
                className="flex items-center gap-2 shrink-0"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src="/logo.png"
                  alt="Logo"
                  width={40}
                  height={40}
                  loading="eager"
                  className="rounded-lg"
                />
                <span className="hidden sm:inline text-emerald-500 font-bold text-lg tracking-wide">
                  Nhà Vườn Kim Tân
                </span>
              </motion.div>

              {/* Desktop Navigation Menu */}
              <div className="hidden md:flex items-center gap-1">
                {navItems.map((item, index) => (
                  <motion.a
                    key={item.href}
                    href={item.href}
                    custom={index}
                    initial="hidden"
                    animate="visible"
                    className="relative px-4 py-2 text-white/90 font-medium text-sm group"
                  >
                    <motion.div
                      className="absolute inset-0 rounded-lg bg-linear-to-r from-emerald-400/0 via-emerald-400/20 to-emerald-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      initial={{ backgroundPositionX: "0%" }}
                      whileHover={{ backgroundPositionX: "100%" }}
                    />
                    <span className="relative z-10 group-hover:text-emerald-300 transition-colors duration-300">
                      {item.label}
                    </span>
                    <motion.div
                      className="absolute bottom-0 left-0 w-0 h-0.5 bg-linear-to-r from-emerald-400 to-emerald-500 group-hover:w-full transition-all duration-300"
                      initial={{ width: 0 }}
                      whileHover={{ width: "100%" }}
                    />
                  </motion.a>
                ))}
              </div>

              {/* Mobile Menu Button */}
              <motion.button
                className="md:hidden flex items-center justify-center w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 transition-colors text-white"
                onClick={toggleMenu}
                whileTap={{ scale: 0.9 }}
                aria-label="Toggle menu"
              >
                {isOpen ? (
                  <HiX className="w-5 h-5" />
                ) : (
                  <HiMenuAlt3 className="w-5 h-5" />
                )}
              </motion.button>
            </div>
          </motion.div>
        </div>
      </motion.nav>

      {/* Mobile Menu Dropdown */}
      <motion.div
        className="fixed top-0 left-0 right-0 z-40 pt-24 px-4 pointer-events-auto"
        initial={{ opacity: 0 }}
        animate={isOpen ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.3 }}
        style={{ pointerEvents: isOpen ? "auto" : "none" }}
      >
        <motion.div
          className="w-full max-w-sm mx-auto rounded-2xl bg-white/10 backdrop-blur-xl border border-white/10 shadow-2xl overflow-hidden"
          initial={{ scale: 0.95, y: -20, opacity: 0 }}
          animate={
            isOpen
              ? { scale: 1, y: 0, opacity: 1 }
              : { scale: 0.95, y: -20, opacity: 0 }
          }
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          <div className="p-6 space-y-4">
            {/* Mobile Nav Items */}
            {navItems.map((item, index) => (
              <motion.a
                key={item.href}
                href={item.href}
                className="block px-4 py-3 rounded-lg text-white/90 font-medium hover:bg-emerald-500/20 hover:text-emerald-300 transition-colors duration-200"
                initial={{ x: -20, opacity: 0 }}
                animate={isOpen ? { x: 0, opacity: 1 } : { x: -20, opacity: 0 }}
                transition={{
                  delay: index * 0.05,
                  duration: 0.3,
                }}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </motion.div>

      {/* Backdrop Overlay */}
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-30 bg-black/50 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
};
