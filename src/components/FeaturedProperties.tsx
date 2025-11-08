import Image from "next/image";
import { featuredProperties } from "@/data/home";
import { FadeInSection } from "@/components/FadeInSection";

export function FeaturedProperties() {
  return (
    <section
      id="featured"
      className="bg-slate-950 py-24"
    >
      <div className="mx-auto w-full max-w-6xl px-6 md:px-8 lg:px-10">
        <FadeInSection className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-violet-200">
              Featured exclusives
            </p>
            <h2 className="mt-3 max-w-2xl text-3xl font-semibold text-white sm:text-4xl">
              Discover newly launched residences and investment-ready addresses.
            </h2>
          </div>
          <a
            href="#consult"
            className="inline-flex items-center gap-2 text-sm font-semibold text-violet-200 transition hover:text-white"
          >
            Book a private walkthrough
            <span aria-hidden>→</span>
          </a>
        </FadeInSection>
        <div className="mt-10 grid gap-8 md:grid-cols-3">
          {featuredProperties.map((property, index) => (
            <FadeInSection
              key={property.title}
              delay={index * 0.1}
              className="group flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur"
            >
              <article className="flex h-full flex-col">
                <div className="relative h-64 w-full overflow-hidden">
                  <Image
                    src={property.image}
                    alt={property.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="flex flex-1 flex-col gap-4 p-6 text-white">
                  <div>
                    <p className="text-sm uppercase tracking-[0.25em] text-violet-200">
                      {property.price}
                    </p>
                    <h3 className="mt-2 text-xl font-semibold">{property.title}</h3>
                    <p className="text-sm text-slate-200">{property.location}</p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {property.specs.map((spec) => (
                      <span
                        key={spec}
                        className="rounded-full border border-white/15 px-3 py-1 text-xs font-medium text-slate-100"
                      >
                        {spec}
                      </span>
                    ))}
                  </div>
                  <div className="mt-auto pt-4">
                    <a
                      href="#contact"
                      className="inline-flex items-center gap-2 text-sm font-semibold text-violet-200 transition hover:text-white"
                    >
                      Request brochure <span aria-hidden>→</span>
                    </a>
                  </div>
                </div>
              </article>
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  );
}

