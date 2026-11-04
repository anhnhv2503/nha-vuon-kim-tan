import { site } from "@/data/site";
import { Product } from "@/types/product";
import { Phone } from "lucide-react";
import Image from "next/image";

export const ProductCard = (product: Product) => (
  <article className="group flex h-full flex-col overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-forest/5 transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-forest/10">
    <div
      className="relative aspect-[5/4] overflow-hidden"
      style={{ backgroundColor: product.tint }}
    >
      <span className="absolute left-4 top-4 z-10 rounded-full bg-white/80 px-3 py-1 text-xs font-semibold text-forest backdrop-blur">
        {product.tag}
      </span>
      <Image
        src={product.imageUrl}
        alt={product.name}
        fill
        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
        className="object-contain p-8 drop-shadow-[0_18px_24px_rgba(0,0,0,0.18)] transition-transform duration-500 group-hover:scale-105"
      />
    </div>

    <div className="flex flex-1 flex-col p-6">
      <h3 className="font-heading text-2xl font-semibold text-forest">
        {product.name}
      </h3>
      <p className="mt-2 flex-1 leading-relaxed text-ink-muted">
        {product.description}
      </p>
      <a
        href={site.phoneHref}
        className="mt-6 inline-flex items-center justify-center gap-2 rounded-full border border-forest/20 px-5 py-3 text-sm font-semibold text-forest transition-colors hover:border-forest hover:bg-forest hover:text-cream"
      >
        <Phone className="h-4 w-4" aria-hidden />
        Liên hệ để biết giá
      </a>
    </div>
  </article>
);
