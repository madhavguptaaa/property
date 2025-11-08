import { SearchBar } from "@/components/SearchBar";
import { PropertyGrid } from "@/components/PropertyGrid";
import { PropertyChatBot } from "@/components/PropertyChatBot";

export default function PropertiesPage() {
  return (
    <>
      <section className="relative flex min-h-[60vh] items-center justify-center overflow-hidden bg-[#05070d]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(1,198,234,0.18),_transparent_60%)]" />
        <div className="mx-auto flex w-full max-w-4xl flex-col items-center gap-6 px-6 text-center md:px-10">
          <p className="text-sm font-semibold uppercase tracking-[0.6em] text-[#01c6ea]">
            Our Portfolio
          </p>
          <h1 className="text-4xl font-black leading-tight sm:text-5xl">
            Discover premium residences handpicked by Aggent advisors.
          </h1>
          <p className="text-base text-slate-300">
            Explore curated villas, penthouses, and investment-grade apartments across India’s most
            desirable neighbourhoods.
          </p>
        </div>
      </section>
      <SearchBar />
      <PropertyGrid />
      <PropertyChatBot />
    </>
  );
}

