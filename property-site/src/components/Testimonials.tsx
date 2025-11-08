import Image from "next/image";
import { partners, testimonials } from "@/data/home";
import { FadeInSection } from "@/components/FadeInSection";

export function Testimonials() {
  return (
    <section
      id="testimonials"
      className="mx-auto w-full max-w-6xl px-6 py-24 text-white md:px-8 lg:px-10"
    >
      <FadeInSection className="flex flex-col gap-10 lg:flex-row lg:items-center">
        <div className="flex-1 space-y-6">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#01c6ea]">
            Trusted by leaders
          </p>
          <h2 className="text-3xl font-semibold sm:text-4xl">
            Developers, CXOs, and global citizens rely on Aggent to unlock the right address.
          </h2>
          <p className="text-sm text-slate-300">
            We partner closely with marquee developers while championing buyers&apos; interests. Our
            advisory delivers clarity that accelerates decision-making.
          </p>
          <div className="flex flex-wrap gap-4 text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">
            {partners.map((partner) => (
              <span
                key={partner}
                className="rounded-full border border-white/10 px-4 py-2 text-slate-200"
              >
                {partner}
              </span>
            ))}
          </div>
        </div>
        <div className="flex-1 space-y-6">
          {testimonials.map((testimonial, index) => (
            <FadeInSection
              key={testimonial.name}
              delay={index * 0.1}
              className="flex flex-col gap-4 rounded-3xl border border-white/10 bg-white/5 p-6 shadow-[0_20px_80px_rgba(1,198,234,0.15)]"
            >
              <article className="flex flex-col gap-4">
                <p className="text-sm text-slate-200">{testimonial.quote}</p>
                <div className="flex items-center gap-3">
                  <div className="relative h-12 w-12 overflow-hidden rounded-full">
                    <Image
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      fill
                      sizes="48px"
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">{testimonial.name}</p>
                    <p className="text-xs uppercase tracking-[0.25em] text-slate-400">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </article>
            </FadeInSection>
          ))}
        </div>
      </FadeInSection>
    </section>
  );
}

