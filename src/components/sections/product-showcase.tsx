import { Reveal } from "@/common/reveal";
import { ProductCard } from "@/components/ui/product-card";
import { SectionHeading } from "@/components/ui/section-heading";
import { products } from "@/data/mock/ProductList";

export const ProductShowcase = () => (
  <section id="products" className="px-4 py-20 sm:px-6 md:py-28">
    <div className="mx-auto max-w-6xl">
      <SectionHeading
        eyebrow="Sản phẩm của vườn"
        title="Những gì vườn đang có"
        description="Sản phẩm thay đổi theo mùa vụ. Hãy gọi để biết hàng đang có và giá mới nhất."
      />
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((product, i) => (
          <Reveal key={product.id} delay={i * 0.1} className="h-full">
            <ProductCard {...product} />
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);
