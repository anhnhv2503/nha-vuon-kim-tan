import { GalleryCard } from "@/components/ui/gallery-card";
import { Marquee } from "@/components/ui/marquee";
import { galleryItems } from "@/data/mock/GalleryList";

const firstRow = galleryItems.slice(0, galleryItems.length / 2);
const secondRow = galleryItems.slice(galleryItems.length / 2);
const thirdRow = galleryItems.slice(0, galleryItems.length / 2);
const fourthRow = galleryItems.slice(galleryItems.length / 2);

export function Marquee3D() {
  return (
    <div className="relative flex h-96 w-full flex-row items-center justify-center gap-4 overflow-hidden perspective-near">
      <div className="flex flex-row items-center gap-4">
        <Marquee pauseOnHover vertical className="[--duration:40s]">
          {firstRow.map((item) => (
            <GalleryCard key={item.id} {...item} />
          ))}
        </Marquee>
        <Marquee reverse pauseOnHover className="[--duration:40s]" vertical>
          {secondRow.map((item) => (
            <GalleryCard key={item.id} {...item} />
          ))}
        </Marquee>
        <Marquee pauseOnHover className="[--duration:40s]" vertical>
          {thirdRow.map((item) => (
            <GalleryCard key={item.id} {...item} />
          ))}
        </Marquee>
        <Marquee reverse pauseOnHover className="[--duration:40s]" vertical>
          {fourthRow.map((item) => (
            <GalleryCard key={item.id} {...item} />
          ))}
        </Marquee>
      </div>
    </div>
  );
}
