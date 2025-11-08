import { FadeInSection } from "@/components/FadeInSection";

const faqs = [
  {
    question: "What is Aggent and how does it work?",
    answer:
      "Aggent is a premium AI-assisted property advisory. We combine human expertise with proprietary intelligence to shortlist, evaluate, and negotiate luxury homes and investments on your behalf.",
  },
  {
    question: "Which cities do you operate in?",
    answer:
      "We currently focus on Bengaluru and Mumbai micro-markets, with select inventory in Goa and Delhi NCR available through our partner network.",
  },
  {
    question: "Do you charge buyers a fee?",
    answer:
      "Aggent partners with developers and curated sellers, so buyer representation is usually complimentary. For bespoke mandates we outline any retainers upfront.",
  },
  {
    question: "Can you help sell or lease my property?",
    answer:
      "Yes. Our advisory manages listings end-to-end, including positioning, marketing, buyer screening, and negotiations.",
  },
  {
    question: "How quickly can you arrange viewings?",
    answer:
      "Most walk-throughs are scheduled within 48 hours. For high-demand launches or limited inventory, we coordinate priority slots for Aggent clients.",
  },
  {
    question: "Do you assist with paperwork and legal?",
    answer:
      "Absolutely. We coordinate due diligence, RERA verification, legal review, financing, and closing documentation through trusted partners.",
  },
];

export function FAQ() {
  return (
    <section className="mx-auto w-full max-w-6xl px-6 pb-24 text-white md:px-8 lg:px-10">
      <FadeInSection className="grid gap-8 rounded-3xl border border-white/10 bg-[#060912]/95 p-6 shadow-[0_20px_80px_rgba(1,198,234,0.2)] md:p-10">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#01c6ea]">
            Aggent Knowledge Base
          </p>
          <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">
            Frequently asked questions
          </h2>
          <p className="mt-3 text-sm text-slate-300">
            Quick answers about how our advisory works. Need anything else? The property concierge
            bot can help or connect you with a specialist.
          </p>
        </div>
        <dl className="space-y-6">
          {faqs.map((faq, index) => (
            <FadeInSection
              key={faq.question}
              delay={index * 0.08}
              className="rounded-2xl border border-white/10 bg-white/5 p-6"
            >
              <dt className="text-sm font-semibold uppercase tracking-[0.3em] text-[#01c6ea]">
                {faq.question}
              </dt>
              <dd className="mt-3 text-sm text-slate-200">{faq.answer}</dd>
            </FadeInSection>
          ))}
        </dl>
      </FadeInSection>
    </section>
  );
}

