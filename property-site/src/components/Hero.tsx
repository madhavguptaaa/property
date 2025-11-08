import Image from "next/image";
import { stats } from "@/data/home";
import { FadeInSection } from "@/components/FadeInSection";

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[88vh] items-center justify-center overflow-visible bg-[#05070d] pb-40"
    >
      <div className="absolute inset-0 -z-20">
        <Image
          src="https://images.unsplash.com/photo-1512914890250-353c97c9e7c5?auto=format&fit=crop&w=2000&q=80"
          alt="Aggent hero background"
          fill
          priority
          className="object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#05070d]/40 via-[#05070d]/70 to-[#05070d]" />
      </div>
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(1,198,234,0.18),_transparent_55%)] opacity-60" />

      <FadeInSection className="mx-auto flex w-full max-w-5xl flex-col items-center justify-center gap-10 px-6 text-center md:px-10">
        <div className="space-y-4">
          <p className="text-sm font-semibold uppercase tracking-[0.6em] text-[#01c6ea]">
            Smarter Real Estate
          </p>
          <h1 className="text-4xl font-black leading-[1.1] text-white sm:text-6xl md:text-7xl">
            <span className="block text-white">AGGENT</span>
            <span className="block text-white">Your Trusted</span>
            <span className="block text-[#01c6ea]">AI Real Estate Agent!</span>
          </h1>
          <p className="text-base font-medium text-slate-300 sm:text-lg">
            Smarter searches. Faster results. Real estate decisions backed by AI expertise.
          </p>
        </div>
        <div className="flex flex-col items-center gap-4 sm:flex-row">
          <a
            href="#contact"
            className="rounded-full bg-[#01c6ea] px-10 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-[#020617] transition hover:bg-white"
          >
            Find Your Home
          </a>
          <a
            href="tel:+919876543210"
            className="text-sm font-semibold uppercase tracking-[0.3em] text-white transition hover:text-[#01c6ea]"
          >
            Call Aggent
          </a>
        </div>
        <div className="mt-4 grid w-full gap-4 sm:grid-cols-4">
          {stats.map((item) => (
            <div
              key={item.label}
              className="rounded-2xl border border-white/10 bg-white/5 px-6 py-5 text-left shadow-lg shadow-black/30"
            >
              <p className="text-2xl font-bold text-white">{item.value}</p>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-300">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </FadeInSection>
    </section>
  );
}

