import { Services } from "@/components/Services";
import { Steps } from "@/components/Steps";
import { Testimonials } from "@/components/Testimonials";

export default function AboutPage() {
  return (
    <>
      <section className="relative flex min-h-[60vh] items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(1,198,234,0.18),_transparent_55%)]" />
        <div className="mx-auto flex w-full max-w-4xl flex-col items-center gap-6 px-6 py-24 text-center md:px-10">
          <p className="text-sm font-semibold uppercase tracking-[0.6em] text-[#01c6ea]">
            About Aggent
          </p>
          <h1 className="text-4xl font-black leading-tight sm:text-5xl">
            AI-guided property advisory engineered for decisive buyers.
          </h1>
          <p className="text-base text-slate-300">
            We blend deep market intelligence with machine learning to match discerning clients to
            extraordinary homes and investments. Every engagement is bespoke, transparent, and fast.
          </p>
        </div>
      </section>
      <Services />
      <Steps />
      <Testimonials />
    </>
  );
}

