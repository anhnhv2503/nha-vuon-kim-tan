import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nhà Vườn Kim Tân - Gia vị đặc biệt cao cấp & Trái cây lạ",
  description:
    "Khám phá gia vị đặc biệt cao cấp, trái cây lạ và nguyên liệu thủ công tại Nhà Vườn Kim Tân. Chất lượng thực từ thiên nhiên.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="vi"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
