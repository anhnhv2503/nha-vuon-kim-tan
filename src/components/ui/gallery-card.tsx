import { cn } from "@/lib/utils";
import { GalleryItem } from "@/types/gallery";
import Image from "next/image";

export const GalleryCard = (item: GalleryItem) => {
  return (
    <figure className={cn("flex flex-col ")}>
      <Image
        src={item.imageUrl}
        alt={`Gallery item ${item.id}`}
        width={250}
        height={350}
        className="rounded-md"
        loading="eager"
      />
    </figure>
  );
};
