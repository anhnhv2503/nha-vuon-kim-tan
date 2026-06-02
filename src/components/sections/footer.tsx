import Image from "next/image";
import { FaFacebook } from "react-icons/fa";

export const Footer = () => {
  const socialIcons = [
    {
      name: "Facebook",
      href: "https://www.facebook.com/hanh.ha.427686",
      svg: <FaFacebook size={30} />,
    },
  ];

  return (
    <footer className="py-10 px-4 sm:px-6 lg:px-8 font-inter relative overflow-hidden bg-linear-to-b from-[#F3E7D3] via-white to-[#F3E7D3]">
      <div className="max-w-7xl mx-auto flex flex-col items-center relative z-10">
        <div className="mb-6 flex items-center justify-center">
          <Image src="/logo.png" alt="Logo" width={80} height={80} />
          <span className="text-gray-900 dark:text-[#4C2004] text-3xl font-extrabold tracking-wide">
            Nhà Vườn Kim Tân
          </span>
        </div>
        <div className="my-1 flex flex-wrap justify-center gap-4 text-sm">
          {socialIcons.map((icon) => (
            <a
              key={icon.name}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={icon.name}
              className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-300"
              href={icon.href}
            >
              {icon.svg}
            </a>
          ))}
        </div>

        <p className="text-center text-xs text-gray-500 dark:text-gray-500 mt-4">
          &copy; {new Date().getFullYear()} Nhà Vườn Kim Tân. Tất cả các quyền
          được bảo lưu.
        </p>
      </div>
    </footer>
  );
};
