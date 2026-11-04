import { Reveal } from "@/common/reveal";
import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  tone?: "light" | "dark";
  className?: string;
};

export const SectionHeading = ({
  eyebrow,
  title,
  description,
  align = "left",
  tone = "light",
  className,
}: SectionHeadingProps) => (
  <Reveal
    className={cn(
      "max-w-2xl",
      align === "center" && "mx-auto text-center",
      className,
    )}
  >
    <p
      className={cn(
        "mb-3 text-xs font-semibold uppercase tracking-[0.2em]",
        tone === "light" ? "text-leaf" : "text-honey",
      )}
    >
      {eyebrow}
    </p>
    <h2
      className={cn(
        "font-heading text-3xl font-semibold leading-tight text-balance sm:text-4xl md:text-5xl",
        tone === "light" ? "text-forest" : "text-cream",
      )}
    >
      {title}
    </h2>
    {description && (
      <p
        className={cn(
          "mt-4 text-base leading-relaxed text-pretty sm:text-lg",
          tone === "light" ? "text-ink-muted" : "text-cream/75",
        )}
      >
        {description}
      </p>
    )}
  </Reveal>
);
