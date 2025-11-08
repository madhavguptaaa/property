import { services } from "@/data/home";
import { Compass, Handshake, ShieldCheck } from "lucide-react";
import { FadeInSection } from "@/components/FadeInSection";

const icons = {
  handshake: Handshake,
  compass: Compass,
  check: ShieldCheck,
} as const;

export function Services() {
  return (
    <section className="mx-auto w-full max-w-6xl px-6 py-24 text-white md:px-8 lg:px-10">
      <FadeInSection className="grid gap-16 md:grid-cols-[1.1fr_1fr] md:items-start">
        <div className="space-y-6">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#01c6ea]">
            Why Aggent
          </p>
          <h2 className="text-3xl font-semibold sm:text-4xl">
            A full-stack advisory built on precision, relationships, and trust.
          </h2>
          <p className="text-sm text-slate-300">
            Our consultants blend market intelligence with design sensibilities so you experience
            properties the way end-users do. Every detail—from sunlight to social infrastructure—is
            mapped for you.
          </p>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 text-white shadow-[0_20px_80px_rgba(1,198,234,0.15)]">
            <p className="text-xs uppercase tracking-[0.3em] text-[#01c6ea]">
              Signature concierge
            </p>
            <p className="mt-4 text-2xl font-semibold">
              Dedicated experts orchestrate site visits, diligence, and negotiations with a single
              point of contact throughout.
            </p>
            <a
              id="consult"
              href="/contact"
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#01c6ea] transition hover:text-white"
            >
              Schedule a discovery call <span aria-hidden>→</span>
            </a>
          </div>
        </div>
        <div className="grid gap-6">
          {services.map((service, index) => {
            const Icon = icons[service.icon as keyof typeof icons] ?? Compass;

            return (
              <FadeInSection
                key={service.title}
                delay={index * 0.08}
                className="flex gap-6 rounded-3xl border border-white/10 bg-white/5 p-6 shadow-[0_16px_60px_rgba(1,198,234,0.12)] transition hover:-translate-y-1 hover:border-[#01c6ea]/30"
              >
                <article className="flex gap-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#01c6ea]/20 text-[#01c6ea]">
                    <Icon className="h-6 w-6" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold text-white">{service.title}</h3>
                    <p className="text-sm text-slate-300">{service.description}</p>
                  </div>
                </article>
              </FadeInSection>
            );
          })}
        </div>
      </FadeInSection>
    </section>
  );
}

