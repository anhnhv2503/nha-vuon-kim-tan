import type { Metadata } from "next";
import { Be_Vietnam_Pro, Playfair_Display } from "next/font/google";
import "./globals.css";
import { MotionProvider } from "@/common/motion-provider";
import { cn } from "@/lib/utils";

const display = Playfair_Display({
  subsets: ["latin", "vietnamese"],
  variable: "--font-display",
});

const body = Be_Vietnam_Pro({
  subsets: ["latin", "vietnamese"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "Nhà Vườn Kim Tân · Sầu riêng, tiêu & mật ong từ vườn Đạ Huoai",
  description:
    "Nhà Vườn Kim Tân ở Đạ Huoai, Lâm Đồng: sầu riêng, hạt tiêu và mật ong hái tại vườn, bán trực tiếp từ nhà vườn. Ghé thăm vườn hoặc gọi đặt hàng.",
  icons: {
    icon: [{ url: "/logo.png", type: "image/png" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="vi"
      data-scroll-behavior="smooth"
      className={cn("h-full antialiased", display.variable, body.variable)}
    >
      <body className="min-h-full flex flex-col">
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  );
}
