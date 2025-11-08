export function Footer() {
  return (
    <footer className="bg-slate-950 py-12 text-slate-200">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-6 md:grid-cols-4 md:px-8 lg:px-10">
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-white">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-violet-500 text-sm font-semibold">
              A
            </div>
            <span className="text-lg font-semibold">Aggent</span>
          </div>
          <p className="text-sm text-slate-400">
            A next-generation property advisory working across India&apos;s prime residential and
            commercial markets.
          </p>
          <p className="text-xs uppercase tracking-[0.3em] text-violet-200">
            RERA ID: PRM/KA/RERA/1251/446/AG/220322/002342
          </p>
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-200">
            Offices
          </p>
          <ul className="mt-4 space-y-2 text-sm text-slate-400">
            <li>Bengaluru — Indiranagar</li>
            <li>Mumbai — BKC</li>
            <li>Delhi NCR — Golf Course Road</li>
          </ul>
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-200">
            Services
          </p>
          <ul className="mt-4 space-y-2 text-sm text-slate-400">
            <li>Buyer Representation</li>
            <li>Investment Advisory</li>
            <li>Developer Partnerships</li>
            <li>Private Office Leasing</li>
          </ul>
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-200">
            Get in touch
          </p>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <a href="tel:+919876543210" className="text-violet-200 transition hover:text-white">
                +91 98765 43210
              </a>
            </li>
            <li>
              <a
                href="mailto:concierge@aggent.in"
                className="text-violet-200 transition hover:text-white"
              >
                concierge@aggent.in
              </a>
            </li>
            <li className="text-slate-400">Mon – Sat · 9am to 7pm IST</li>
          </ul>
        </div>
      </div>
      <div className="mx-auto mt-10 flex w-full max-w-6xl flex-col gap-4 border-t border-white/10 px-6 pt-6 text-xs text-slate-500 md:flex-row md:items-center md:justify-between md:px-8 lg:px-10">
        <p>© {new Date().getFullYear()} Aggent. All rights reserved.</p>
        <div className="flex flex-wrap gap-4">
          <a href="#" className="transition hover:text-white">
            Privacy
          </a>
          <a href="#" className="transition hover:text-white">
            Terms
          </a>
          <a href="#" className="transition hover:text-white">
            Careers
          </a>
        </div>
      </div>
    </footer>
  );
}

