"use client";

import { useState } from "react";
import { FadeInSection } from "@/components/FadeInSection";

const propertyTypes = ["Apartments", "Villas", "Penthouses", "Plots"];

export function SearchBar() {
  const [budget, setBudget] = useState("3 Cr");

  return (
    <div className="-mt-14 flex w-full justify-center px-6 sm:-mt-24 md:px-8 lg:-mt-32">
      <FadeInSection className="flex w-full max-w-5xl flex-col gap-6 rounded-3xl border border-white/10 bg-[#070b14]/90 p-6 text-white shadow-[0_20px_80px_rgba(1,198,234,0.2)] backdrop-blur md:flex-row md:items-center lg:gap-8">
        <div className="flex flex-1 flex-col gap-2">
          <label className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-300">
            Location
          </label>
          <input
            type="text"
            placeholder="Search city, neighbourhood, or project"
            className="w-full rounded-2xl border border-white/20 bg-white/5 px-4 py-3 text-sm text-white outline-none transition focus:border-[#01c6ea] focus:ring-2 focus:ring-[#01c6ea]/30 placeholder:text-slate-400"
          />
        </div>
        <div className="flex flex-1 flex-col gap-2">
          <label className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-300">
            Property type
          </label>
          <select className="w-full appearance-none rounded-2xl border border-white/20 bg-white/5 px-4 py-3 text-sm text-white outline-none transition focus:border-[#01c6ea] focus:ring-2 focus:ring-[#01c6ea]/30">
            {propertyTypes.map((type) => (
              <option key={type}>{type}</option>
            ))}
          </select>
        </div>
        <div className="flex flex-1 flex-col gap-2">
          <label className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-300">
            Budget
          </label>
          <input
            type="range"
            min="1"
            max="10"
            value={budget.replace(" Cr", "")}
            onChange={(event) => setBudget(`${event.target.value} Cr`)}
            className="w-full accent-[#01c6ea]"
          />
          <span className="text-sm font-semibold text-white">{budget} onwards</span>
        </div>
        <div className="flex items-end">
          <button className="w-full rounded-2xl bg-[#01c6ea] px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#020617] transition hover:bg-white md:w-auto">
            Start search
          </button>
        </div>
      </FadeInSection>
    </div>
  );
}

