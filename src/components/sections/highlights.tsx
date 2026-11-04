import { Reveal } from "@/common/reveal";
import { Handshake, Sprout, Trees } from "lucide-react";

const items = [
  {
    icon: Sprout,
    title: "Hái tại vườn",
    text: "Thu hoạch đúng độ, giữ trọn hương vị tự nhiên.",
  },
  {
    icon: Handshake,
    title: "Trực tiếp từ nhà vườn",
    text: "Không qua trung gian, biết rõ nguồn gốc từng sản phẩm.",
  },
  {
    icon: Trees,
    title: "Đón khách ghé thăm",
    text: "Tham quan vườn và thưởng thức trái cây tại chỗ.",
  },
];

export const Highlights = () => (
  <section aria-label="Điểm nổi bật" className="px-4 sm:px-6">
    <div className="mx-auto grid max-w-6xl gap-px overflow-hidden rounded-3xl border border-forest/10 bg-forest/10 sm:grid-cols-3">
      {items.map(({ icon: Icon, title, text }, i) => (
        <Reveal key={title} delay={i * 0.08} className="flex gap-4 bg-cream p-6 sm:p-7">
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-forest text-honey">
            <Icon className="h-5 w-5" aria-hidden />
          </span>
          <div>
            <h3 className="font-semibold text-forest">{title}</h3>
            <p className="mt-1 text-sm leading-relaxed text-ink-muted">{text}</p>
          </div>
        </Reveal>
      ))}
    </div>
  </section>
);
