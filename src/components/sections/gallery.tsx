import { Reveal } from "@/common/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { galleryItems } from "@/data/mock/GalleryList";
import { site } from "@/data/site";
import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { FaFacebookF } from "react-icons/fa";

export const Gallery = () => (
  <section id="gallery" className="px-4 pt-28 pb-20 sm:px-6 md:pt-36 md:pb-28">
    <div className="mx-auto max-w-6xl">
      <SectionHeading
        eyebrow="Hình ảnh"
        title="Một ngày ở vườn"
        description="Những khoảnh khắc cùng khách ghé thăm Nhà Vườn Kim Tân."
      />

      <div className="mt-12 grid auto-rows-[220px] grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:auto-rows-[240px]">
        {galleryItems.map((item, i) => (
          <Reveal
            key={item.id}
            delay={i * 0.06}
            className={cn(
              "group relative overflow-hidden rounded-3xl bg-sand",
              i === 0 && "row-span-2",
            )}
          >
            <Image
              src={item.imageUrl}
              alt={item.alt}
              fill
              sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            {item.caption && (
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-5 pt-12">
                <p className="text-sm font-medium text-white">{item.caption}</p>
              </div>
            )}
          </Reveal>
        ))}

        <Reveal
          delay={galleryItems.length * 0.06}
          className="sm:col-span-2 lg:col-span-2"
        >
          <a
            href={site.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex h-full flex-col justify-between rounded-3xl bg-forest p-7 text-cream transition-colors hover:bg-forest-deep"
          >
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-cream/10">
              <FaFacebookF className="h-5 w-5" aria-hidden />
            </span>
            <span>
              <span className="block font-heading text-2xl font-semibold sm:text-3xl">
                Xem thêm hình ảnh mới nhất
              </span>
              <span className="mt-2 inline-flex items-center gap-1.5 text-cream/75 group-hover:text-honey">
                Theo dõi vườn trên Facebook
                <ArrowUpRight
                  className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  aria-hidden
                />
              </span>
            </span>
          </a>
        </Reveal>
      </div>
    </div>
  </section>
);
