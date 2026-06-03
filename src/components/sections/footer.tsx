import { AuroraText } from "@/components/ui/aurora-text";
import Image from "next/image";
import { FaFacebook, FaMapMarkerAlt, FaPhone } from "react-icons/fa";

export const Footer = () => {
  const socialIcons = [
    {
      name: "Facebook",
      href: "https://www.facebook.com/hanh.ha.427686",
      icon: <FaFacebook size={20} />,
    },
  ];

  const contactInfo = [
    {
      icon: <FaMapMarkerAlt size={18} />,
      label: "Địa chỉ",
      value: "Đường B2, Thôn 2, Xã Đoàn Kết, Huyện Đạ Huoai, Lâm Đồng",
    },
    {
      icon: <FaPhone size={18} />,
      label: "Điện thoại",
      value: "+84 829 871 644",
    },
  ];

  return (
    <footer className="font-inter relative overflow-hidden bg-linear-to-b from-[#F3E7D3] via-white to-white">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-emerald-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10">
        {/* Main content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Left Side - Branding */}
            <div className="flex flex-col items-center lg:items-start">
              <div className="mb-6 flex items-center justify-center lg:justify-start gap-3">
                <div className="relative">
                  <div className="absolute inset-0 bg-emerald-500/20 blur-xl rounded-lg"></div>
                  <Image
                    src="/logo.png"
                    alt="Logo"
                    width={70}
                    height={70}
                    className="relative"
                  />
                </div>
                <div>
                  <h1 className="text-4xl font-bold tracking-tighter md:text-5xl lg:text-7xl">
                    Nhà Vườn <AuroraText>Kim Tân</AuroraText>
                  </h1>
                </div>
              </div>

              <p className="text-gray-400 text-sm leading-relaxed text-center lg:text-left mb-6">
                Chúng tôi mang đến những cây xanh chất lượng cao, giải pháp xanh
                cho không gian sống của bạn.
              </p>

              {/* Social Icons */}
              <div className="flex gap-4">
                {socialIcons.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={item.name}
                    className="group w-10 h-10 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-gray-300 hover:text-emerald-400 hover:bg-emerald-500/20 hover:border-emerald-500 transition-all duration-300"
                  >
                    {item.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Center - Contact Info */}
            <div className="flex flex-col items-center">
              <h3 className="text-white text-lg font-bold mb-6">
                Thông Tin Liên Hệ
              </h3>
              <div className="space-y-4 w-full">
                {contactInfo.map((info, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 group cursor-pointer"
                  >
                    <div className="shrink-0 w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 group-hover:bg-emerald-500/20 group-hover:border-emerald-500 transition-all duration-300">
                      {info.icon}
                    </div>
                    <div className="flex-1">
                      <p className="text-gray-800 text-xs font-semibold">
                        {info.label}
                      </p>
                      <p className="text-gray-800 text-sm font-medium group-hover:text-emerald-400 transition-colors">
                        {info.value}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Side - Map */}
            <div className="flex flex-col items-center lg:items-end">
              <h3 className="text-white text-lg font-bold mb-4">
                Địa Chỉ Của Chúng Tôi
              </h3>
              <div className="w-full h-64 sm:h-72 rounded-2xl overflow-hidden shadow-2xl border border-emerald-500/20 hover:border-emerald-500/40 transition-all duration-300 group">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d9763.431929827031!2d107.67967566602941!3d11.327311542619828!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3174131fd340421b%3A0x72e6d0e368b2fde6!2zTmjDoCBWxrDhu51uIEtpbSBUw6Ju!5e0!3m2!1svi!2s!4v1780493917869!5m2!1svi!2s"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="group-hover:brightness-110 transition-all duration-300"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-linear-to-r from-transparent via-emerald-500/20 to-transparent"></div>

        {/* Bottom Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <p className="text-gray-400 text-xs text-center sm:text-left">
              &copy; {new Date().getFullYear()}{" "}
              <span className="text-emerald-400 font-semibold">
                Nhà Vườn Kim Tân
              </span>
              . Tất cả các quyền được bảo lưu.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
