import mainGate from "@/data/images/cong-chinh.webp";
import { GalleryItem } from "@/types/gallery";

/**
 * Host photos on Cloudinary (or put them in src/data/images).
 * Do NOT paste Facebook image links (scontent.*.fbcdn.net): they are signed
 * and expire after a few weeks, after which they return 403.
 */
export const galleryItems: GalleryItem[] = [
  {
    id: 1,
    imageUrl: mainGate,
    alt: "Cổng chính Nhà Vườn Kim Tân",
    caption: "Cổng vườn",
  },
  {
    id: 2,
    imageUrl:
      "https://res.cloudinary.com/de0xc35ew/image/upload/v1780492564/7272ca20-9f37-4aad-84c5-cdc606f51afd_wq5zlj.jpg",
    alt: "Khách thưởng thức trái cây cùng gia đình tại vườn",
    caption: "Thưởng thức trái cây tại vườn",
  },
  {
    id: 3,
    imageUrl:
      "https://res.cloudinary.com/de0xc35ew/image/upload/v1780492563/787f004d-db9f-4ba1-bb46-7228256da419_oyy4vg.jpg",
    alt: "Đoàn khách trên con đường vào vườn lúc chiều",
    caption: "Đường vào vườn",
  },
];
