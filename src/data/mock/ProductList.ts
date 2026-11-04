import durian from "@/data/images/durian-bg-removed.png";
import honey from "@/data/images/honey-bg-removed.png";
import pepper from "@/data/images/pepper-bg-removed.png";
import { Product } from "@/types/product";

export const products: Product[] = [
  {
    id: 1,
    name: "Sầu riêng",
    tag: "Trái cây",
    price: 595000,
    description:
      "Hái tại vườn khi trái đủ độ già. Cơm vàng, béo và thơm đậm, giữ trọn vị của vùng Đạ Huoai.",
    imageUrl: durian,
    tint: "#EAF0D8",
  },
  {
    id: 2,
    name: "Hạt tiêu",
    tag: "Gia vị",
    price: 595000,
    description:
      "Phơi khô tự nhiên, hạt chắc và đều, vị cay thơm. Hợp cho món kho, ướp thịt và nước chấm.",
    imageUrl: pepper,
    tint: "#EDE3CF",
  },
  {
    id: 3,
    name: "Mật ong",
    tag: "Mật ong",
    price: 595000,
    description:
      "Mật ong nguyên chất, sánh đặc, thơm hương hoa. Dùng trực tiếp hoặc pha với nước ấm.",
    imageUrl: honey,
    tint: "#F6E6BE",
  },
];
