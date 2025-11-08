import { steps } from "@/data/home";
import { FadeInSection } from "@/components/FadeInSection";

export function Steps() {
  return (
    <section
      id="process"
      className="bg-slate-950 py-24"
    >
      <div className="mx-auto w-full max-w-6xl px-6 md:px-8 lg:px-10">
        <FadeInSection className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-violet-200">
              How it works
            </p>
            <h2 className="mt-3 max-w-2xl text-3xl font-semibold text-white sm:text-4xl">
              A transparent journey designed for decisive homebuyers and investors.
            </h2>
          </div>
          <p className="max-w-md text-sm text-slate-300">
            Each stage is led by seasoned advisors who align stakeholders, organise
            walkthroughs, and anticipate next steps—keeping you in control at all times.
          </p>
        </FadeInSection>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {steps.map((item, index) => (
            <FadeInSection
              key={item.step}
              delay={index * 0.08}
              className="flex h-full flex-col gap-4 rounded-3xl border border-white/10 bg-white/5 p-6 text-white backdrop-blur transition hover:-translate-y-1 hover:border-violet-300/40"
            >
              <article className="flex h-full flex-col gap-4">
                <span className="text-sm font-semibold uppercase tracking-[0.3em] text-violet-200">
                  {item.step}
                </span>
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="text-sm text-slate-200">{item.description}</p>
              </article>
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  );
}

