"use client";

import durian from "@/data/images/durian-bg-removed.png";
import honey from "@/data/images/honey-bg-removed.png";
import pepper from "@/data/images/pepper-bg-removed.png";
import { site } from "@/data/site";
import { motion } from "framer-motion";
import { ArrowRight, MapPin, Phone } from "lucide-react";
import Image from "next/image";

const ease = [0.22, 1, 0.36, 1] as const;

export const Hero = () => {
  const fadeUp = (delay: number) => ({
    initial: { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7, delay, ease },
  });

  return (
    <section
      id="top"
      className="relative overflow-hidden pt-28 pb-16 sm:pt-32 md:pb-24 lg:pt-36"
    >
      {/* soft background shapes */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 -right-40 h-[32rem] w-[32rem] rounded-full bg-honey/15 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-40 -left-32 h-[28rem] w-[28rem] rounded-full bg-leaf/10 blur-3xl"
      />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-[1.05fr_1fr] lg:gap-16">
        {/* Copy */}
        <div>
          <motion.p
            {...fadeUp(0)}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-forest/15 bg-white/60 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-forest"
          >
            <MapPin className="h-3.5 w-3.5 text-honey" aria-hidden />
            {site.region}
          </motion.p>

          <motion.h1
            {...fadeUp(0.08)}
            className="font-heading text-[2.6rem] font-semibold leading-[1.05] text-balance text-forest sm:text-6xl lg:text-7xl"
          >
            Sầu riêng, tiêu & mật ong{" "}
            <span className="italic text-honey">từ chính vườn nhà.</span>
          </motion.h1>

          <motion.p
            {...fadeUp(0.16)}
            className="mt-6 max-w-xl text-lg leading-relaxed text-pretty text-ink-muted"
          >
            Nhà Vườn Kim Tân tự tay chăm sóc, thu hoạch và gửi đến bạn những sản
            phẩm tươi ngon nhất của vùng đất Đạ Huoai. Mua trực tiếp từ nhà
            vườn, không qua trung gian.
          </motion.p>

          <motion.div
            {...fadeUp(0.24)}
            className="mt-9 flex flex-col gap-3 sm:flex-row"
          >
            <a
              href={site.phoneHref}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-forest px-7 py-4 font-semibold text-cream shadow-lg shadow-forest/20 transition hover:-translate-y-0.5 hover:bg-forest-deep"
            >
              <Phone className="h-4 w-4" aria-hidden />
              Gọi đặt hàng
            </a>
            <a
              href="#products"
              className="group inline-flex items-center justify-center gap-2 rounded-full border border-forest/20 bg-white/50 px-7 py-4 font-semibold text-forest transition hover:border-forest/40 hover:bg-white"
            >
              Xem sản phẩm
              <ArrowRight
                className="h-4 w-4 transition-transform group-hover:translate-x-1"
                aria-hidden
              />
            </a>
          </motion.div>
        </div>

        {/* Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.1, ease }}
          className="relative mx-auto w-full max-w-md lg:max-w-none"
        >
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2.5rem] bg-forest">
            <div
              aria-hidden
              className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(227,165,43,0.35),transparent_60%)]"
            />
            <div
              aria-hidden
              className="absolute inset-0 opacity-[0.07] [background-image:radial-gradient(#f7f1e5_1px,transparent_1px)] [background-size:18px_18px]"
            />
            <Image
              src={durian}
              alt="Sầu riêng Nhà Vườn Kim Tân"
              fill
              preload
              sizes="(min-width: 1024px) 40vw, 90vw"
              className="animate-float object-contain p-10 drop-shadow-[0_30px_40px_rgba(0,0,0,0.35)] sm:p-14"
            />
          </div>

          {/* floating chips */}
          <div className="absolute -left-3 bottom-10 flex items-center gap-3 rounded-2xl bg-cream p-2.5 pr-5 shadow-xl shadow-forest/15 sm:-left-8">
            <div className="relative h-12 w-12 overflow-hidden rounded-xl bg-sand">
              <Image src={pepper} alt="" fill sizes="48px" className="object-contain p-1" />
            </div>
            <div>
              <p className="text-sm font-semibold text-forest">Hạt tiêu</p>
              <p className="text-xs text-ink-muted">Cay thơm, hạt chắc</p>
            </div>
          </div>
          <div className="absolute -right-3 top-10 flex items-center gap-3 rounded-2xl bg-cream p-2.5 pr-5 shadow-xl shadow-forest/15 sm:-right-6">
            <div className="relative h-12 w-12 overflow-hidden rounded-xl bg-[#F6E6BE]">
              <Image src={honey} alt="" fill sizes="48px" className="object-contain p-1" />
            </div>
            <div>
              <p className="text-sm font-semibold text-forest">Mật ong</p>
              <p className="text-xs text-ink-muted">Nguyên chất</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
