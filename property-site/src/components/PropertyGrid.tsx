import Image from "next/image";
import { properties } from "@/data/properties";

interface PropertyGridProps {
  limit?: number;
}

export function PropertyGrid({ limit }: PropertyGridProps) {
  const list = limit ? properties.slice(0, limit) : properties;

  return (
    <section className="mx-auto w-full max-w-6xl px-6 py-24 text-white md:px-8 lg:px-10">
      <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#01c6ea]">
            Featured Collection
          </p>
          <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">
            Explore our curated portfolio of luxury residences and investments.
          </h2>
        </div>
        <p className="max-w-md text-sm text-slate-300">
          Each listing is vetted by Aggent advisors for legal clarity, developer credibility, and
          future-ready amenities.
        </p>
      </div>

      <div className="mt-12 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
        {list.map((property) => (
          <article
            key={property.id}
            className="group flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-[0_16px_60px_rgba(1,198,234,0.12)] transition hover:-translate-y-1 hover:border-[#01c6ea]/40"
          >
            <div className="relative h-56 w-full overflow-hidden">
              <Image
                src={property.image}
                alt={property.name}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover transition duration-500 group-hover:scale-110"
              />
            </div>
            <div className="flex flex-1 flex-col gap-4 p-6">
              <div className="space-y-1">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#01c6ea]">
                  {property.type}
                </p>
                <h3 className="text-xl font-semibold text-white">{property.name}</h3>
                <p className="text-sm text-slate-300">
                  {property.location}, {property.city}
                </p>
              </div>
              <p className="text-sm text-slate-200">{property.description}</p>
              <div className="flex flex-wrap gap-2">
                <span className="rounded-full border border-white/10 px-3 py-1 text-xs font-semibold text-white/80">
                  {property.priceLabel}
                </span>
                <span className="rounded-full border border-white/10 px-3 py-1 text-xs font-semibold text-white/80">
                  {property.bedrooms} Beds
                </span>
                {property.bathrooms > 0 && (
                  <span className="rounded-full border border-white/10 px-3 py-1 text-xs font-semibold text-white/80">
                    {property.bathrooms} Baths
                  </span>
                )}
                <span className="rounded-full border border-white/10 px-3 py-1 text-xs font-semibold text-white/80">
                  {property.areaSqft.toLocaleString()} sq.ft.
                </span>
              </div>
              <div className="mt-auto space-y-2 text-xs uppercase tracking-[0.3em] text-slate-400">
                <p>Amenities</p>
                <div className="flex flex-wrap gap-2 text-[11px] tracking-normal text-slate-300">
                  {property.amenities.slice(0, 4).map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/10 px-3 py-1"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

