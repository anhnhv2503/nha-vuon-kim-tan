import { Reveal } from "@/common/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { navItems, site } from "@/data/site";
import { MapPin, Navigation as NavigationIcon, Phone } from "lucide-react";
import Image from "next/image";
import { FaFacebookF } from "react-icons/fa";

export const Footer = () => (
  <footer id="contact" className="bg-forest text-cream">
    <div className="mx-auto grid max-w-6xl gap-12 px-4 py-20 sm:px-6 md:py-28 lg:grid-cols-2 lg:gap-16">
      <div>
        <SectionHeading
          tone="dark"
          eyebrow="Liên hệ"
          title="Ghé thăm vườn hoặc gọi đặt hàng"
          description="Gọi trước để vườn chuẩn bị hàng và đón bạn chu đáo."
        />

        <Reveal delay={0.1}>
          <ul className="mt-10 space-y-5">
            <li className="flex gap-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-cream/10 text-honey">
                <MapPin className="h-5 w-5" aria-hidden />
              </span>
              <div>
                <p className="text-sm text-cream/60">Địa chỉ</p>
                <p className="font-medium">{site.address}</p>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-cream/10 text-honey">
                <Phone className="h-5 w-5" aria-hidden />
              </span>
              <div>
                <p className="text-sm text-cream/60">Điện thoại</p>
                <a href={site.phoneHref} className="font-medium hover:text-honey">
                  {site.phone}
                </a>
              </div>
            </li>
          </ul>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <a
              href={site.phoneHref}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-honey px-6 py-3.5 font-semibold text-forest-deep transition hover:-translate-y-0.5 hover:bg-[#ecb54a]"
            >
              <Phone className="h-4 w-4" aria-hidden />
              Gọi ngay
            </a>
            <a
              href={site.mapLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-cream/25 px-6 py-3.5 font-semibold transition hover:border-cream/60 hover:bg-cream/5"
            >
              <NavigationIcon className="h-4 w-4" aria-hidden />
              Chỉ đường
            </a>
            <a
              href={site.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-cream/25 px-6 py-3.5 font-semibold transition hover:border-cream/60 hover:bg-cream/5"
            >
              <FaFacebookF className="h-4 w-4" aria-hidden />
              Facebook
            </a>
          </div>
        </Reveal>
      </div>

      <Reveal delay={0.15} className="min-h-80 overflow-hidden rounded-3xl ring-1 ring-cream/10 lg:min-h-0">
        <iframe
          title={`Bản đồ đường đến ${site.name}`}
          src={site.mapEmbed}
          className="h-full min-h-80 w-full border-0"
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
        />
      </Reveal>
    </div>

    <div className="border-t border-cream/10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 py-8 sm:flex-row sm:px-6">
        <div className="flex items-center gap-3">
          <Image
            src="/logo.png"
            alt=""
            width={36}
            height={36}
            className="h-9 w-9 rounded-full bg-cream object-contain p-0.5"
          />
          <span className="font-heading text-lg font-semibold">{site.name}</span>
        </div>
        <nav aria-label="Liên kết cuối trang">
          <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-cream/70">
            {navItems.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="hover:text-honey">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <p className="text-sm text-cream/50">
          © {new Date().getFullYear()} {site.name}
        </p>
      </div>
    </div>
  </footer>
);
