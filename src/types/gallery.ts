import type { StaticImageData } from "next/image";

export type GalleryItem = {
  id: number;
  imageUrl: string | StaticImageData;
  alt: string;
  caption?: string;
};
