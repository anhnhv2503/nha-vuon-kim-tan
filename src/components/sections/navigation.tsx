"use client";

import { navItems, site } from "@/data/site";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, Phone, X } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled || isOpen
          ? "bg-cream/90 shadow-[0_1px_0_rgba(31,74,51,0.08)] backdrop-blur-lg"
          : "bg-transparent",
      )}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:h-20 sm:px-6">
        <a href="#top" className="flex items-center gap-2.5" aria-label={site.name}>
          <Image
            src="/logo.png"
            alt=""
            width={40}
            height={40}
            preload
            className="h-9 w-9 rounded-full object-contain sm:h-10 sm:w-10"
          />
          <span className="font-heading text-lg font-semibold text-forest sm:text-xl">
            {site.name}
          </span>
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="relative text-sm font-medium text-ink/80 transition-colors hover:text-forest after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-honey after:transition-all hover:after:w-full"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href={site.phoneHref}
            className="hidden items-center gap-2 rounded-full bg-forest px-4 py-2.5 text-sm font-semibold text-cream transition-colors hover:bg-forest-deep sm:inline-flex"
          >
            <Phone className="h-4 w-4" aria-hidden />
            Gọi đặt hàng
          </a>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full text-forest hover:bg-forest/10 md:hidden"
            onClick={() => setIsOpen((v) => !v)}
            aria-label={isOpen ? "Đóng menu" : "Mở menu"}
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="border-t border-forest/10 md:hidden"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <ul className="space-y-1 px-4 py-4">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="block rounded-xl px-4 py-3 font-medium text-ink hover:bg-forest/5 hover:text-forest"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
              <li className="pt-2">
                <a
                  href={site.phoneHref}
                  className="flex items-center justify-center gap-2 rounded-full bg-forest px-4 py-3 font-semibold text-cream"
                >
                  <Phone className="h-4 w-4" aria-hidden />
                  Gọi {site.phone}
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
