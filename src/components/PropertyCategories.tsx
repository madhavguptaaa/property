import Image from "next/image";
import { propertyCategories } from "@/data/home";
import { FadeInSection } from "@/components/FadeInSection";

export function PropertyCategories() {
  return (
    <section id="offerings" className="mx-auto w-full max-w-6xl px-6 py-24 text-white md:px-8 lg:px-10">
      <FadeInSection className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#01c6ea]">
            Curated for you
          </p>
          <h2 className="mt-3 max-w-xl text-3xl font-semibold sm:text-4xl">
            Inventory you can trust, tailored by specialists across prime micro-markets.
          </h2>
        </div>
        <p className="max-w-md text-sm text-slate-300">
          From luxury residences to grade-A commercial spaces, Aggent works with verified
          developers and owners to bring a tightly vetted portfolio that fits premium aspirations.
        </p>
      </FadeInSection>
      <div className="mt-12 grid gap-8 md:grid-cols-3">
        {propertyCategories.map((category, index) => (
          <FadeInSection
            key={category.title}
            delay={index * 0.08}
            className="group overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-[0_20px_80px_rgba(1,198,234,0.15)] transition hover:-translate-y-1 hover:border-[#01c6ea]/30"
          >
            <article>
              <div className="relative h-64 w-full overflow-hidden">
                <Image
                  src={category.image}
                  alt={category.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition duration-500 group-hover:scale-110"
                />
              </div>
              <div className="space-y-3 p-6">
                <h3 className="text-xl font-semibold">
                  {category.title}
                </h3>
                <p className="text-sm text-slate-300">{category.description}</p>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#01c6ea] transition hover:gap-3"
                >
                  View available listings
                  <span aria-hidden>→</span>
                </a>
              </div>
            </article>
          </FadeInSection>
        ))}
      </div>
    </section>
  );
}

