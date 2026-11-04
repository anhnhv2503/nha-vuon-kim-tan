import { Reveal } from "@/common/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import mainGate from "@/data/images/cong-chinh.webp";
import { galleryItems } from "@/data/mock/GalleryList";
import Image from "next/image";

const visitors = galleryItems.find((g) => g.id === 2);

export const About = () => (
  <section id="about" className="bg-sand/60 px-4 py-20 sm:px-6 md:py-28">
    <div className="mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-2 lg:gap-20">
      {/* Photos */}
      <Reveal className="relative mx-auto w-full max-w-md lg:max-w-none">
        <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] shadow-xl shadow-forest/10">
          <Image
            src={mainGate}
            alt="Cổng Nhà Vườn Kim Tân với bảng hiệu xanh"
            fill
            sizes="(min-width: 1024px) 40vw, 90vw"
            className="object-cover"
          />
        </div>
        {visitors && (
          <div className="absolute -bottom-8 -right-2 w-1/2 overflow-hidden rounded-2xl border-4 border-cream shadow-xl sm:-right-8">
            <div className="relative aspect-[4/3]">
              <Image
                src={visitors.imageUrl}
                alt={visitors.alt}
                fill
                sizes="(min-width: 1024px) 20vw, 45vw"
                className="object-cover"
              />
            </div>
          </div>
        )}
      </Reveal>

      {/* Story */}
      <div>
        <SectionHeading eyebrow="Về chúng tôi" title="Một khu vườn gia đình ở Đạ Huoai" />
        <Reveal delay={0.1} className="mt-6 space-y-4 text-lg leading-relaxed text-ink-muted">
          <p>
            Nhà Vườn Kim Tân nằm trên đường B2, xã Đoàn Kết, Đạ Huoai, Lâm Đồng.
            Gia đình chúng tôi trồng sầu riêng, tiêu và lấy mật ong ngay trong
            vườn, tự tay chăm sóc từ lúc ra hoa đến khi thu hoạch.
          </p>
          <p>
            Chúng tôi luôn chào đón khách ghé thăm: dạo vườn, thưởng thức trái
            cây tại chỗ và mua hàng tận gốc.
          </p>
        </Reveal>
        <Reveal delay={0.2}>
          <a
            href="#contact"
            className="mt-8 inline-flex items-center gap-2 font-semibold text-forest underline decoration-honey decoration-2 underline-offset-8 hover:decoration-forest"
          >
            Xem đường đến vườn
          </a>
        </Reveal>
      </div>
    </div>
  </section>
);
