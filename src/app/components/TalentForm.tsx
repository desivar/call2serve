"use client";
import { useState } from 'react';

export default function TalentForm() {
  return (
    <div className="max-w-2xl mx-auto p-8 bg-white rounded-[2rem] shadow-xl border border-ngo-mint">
      <h2 className="text-3xl font-black text-ngo-navy mb-2">Professional Profile</h2>
      <p className="text-slate-500 mb-8">This information helps the Mission President assign your service role.</p>

      <form className="space-y-6">
        {/* University Major */}
        <div>
          <label className="block text-sm font-bold text-ngo-navy mb-2 uppercase tracking-wider">
            University Major / Area of Study
          </label>
          <input 
            type="text" 
            placeholder="e.g. Graphic Design, Finance, Psychology"
            className="w-full p-4 rounded-2xl bg-slate-50 border-2 border-transparent focus:border-ngo-turquoise outline-none transition-all"
          />
        </div>

        {/* Skill Selection (Turquoise Tag Style) */}
        <div>
          <label className="block text-sm font-bold text-ngo-navy mb-2 uppercase tracking-wider">
            Technical Skills
          </label>
          <div className="flex flex-wrap gap-2">
            {['Accounting', 'Web Dev', 'Public Speaking', 'Social Media', 'Office Suite'].map(skill => (
              <button 
                key={skill}
                type="button"
                className="px-4 py-2 rounded-full border-2 border-ngo-turquoise text-ngo-turquoise font-bold text-xs hover:bg-ngo-turquoise hover:text-white transition"
              >
                {skill}
              </button>
            ))}
          </div>
        </div>

        {/* Service Goal */}
        <div>
          <label className="block text-sm font-bold text-ngo-navy mb-2 uppercase tracking-wider">
            Service Goal
          </label>
          <textarea 
            placeholder="What do you want to learn during these 24 months?"
            className="w-full p-4 rounded-2xl bg-slate-50 border-2 border-transparent focus:border-ngo-turquoise outline-none h-32"
          />
        </div>

        <button className="w-full py-4 bg-ngo-turquoise text-white rounded-2xl font-black text-lg hover:bg-ngo-dark shadow-lg shadow-cyan-200 transition-all">
          Save Professional Profile
        </button>
      </form>
    </div>
  );
}