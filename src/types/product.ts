import type { StaticImageData } from "next/image";

export type Product = {
  id: number;
  name: string;
  tag: string;
  description: string;
  price: number;
  imageUrl: string | StaticImageData;
  /** Panel tint behind the product cut-out */
  tint: string;
};
