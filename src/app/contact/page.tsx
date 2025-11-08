import { CallToAction } from "@/components/CallToAction";

export default function ContactPage() {
  return (
    <>
      <section className="relative flex min-h-[50vh] items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(1,198,234,0.18),_transparent_55%)]" />
        <div className="mx-auto flex w-full max-w-3xl flex-col items-center gap-6 px-6 py-24 text-center md:px-10">
          <p className="text-sm font-semibold uppercase tracking-[0.6em] text-[#01c6ea]">
            Contact Aggent
          </p>
          <h1 className="text-4xl font-black leading-tight sm:text-5xl">
            Ready to unlock your next property move?
          </h1>
          <p className="text-base text-slate-300">
            Share your aspirations or schedule a private consultation with our advisory team. We
            respond within 24 hours.
          </p>
        </div>
      </section>
      <CallToAction />
      <section className="mx-auto w-full max-w-5xl px-6 pb-24 text-sm text-slate-300 md:px-8">
        <div className="grid gap-8 rounded-3xl border border-white/10 bg-white/5 p-8 md:grid-cols-3">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#01c6ea]">
              Call us
            </p>
            <p className="mt-3 text-lg font-semibold text-white">+91 98765 43210</p>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#01c6ea]">
              Email
            </p>
            <p className="mt-3 text-lg font-semibold text-white">
              concierge@aggent.in
            </p>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#01c6ea]">
              Offices
            </p>
            <p className="mt-3 text-lg font-semibold text-white">
              Bengaluru · Mumbai · Delhi NCR
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

