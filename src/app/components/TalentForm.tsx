"use client";
import { useState } from 'react';

export default function TalentForm() {
  // 1. Create a state to hold the selected skills
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);

  const toggleSkill = (skill: string) => {
    if (selectedSkills.includes(skill)) {
      // Remove it if it's already there
      setSelectedSkills(selectedSkills.filter(s => s !== skill));
    } else {
      // Add it if it's new
      setSelectedSkills([...selectedSkills, skill]);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-8 bg-white rounded-[2rem] shadow-xl border border-slate-100">
      <h2 className="text-3xl font-black text-slate-900 mb-2">Professional Profile</h2>
      <p className="text-slate-500 mb-8">This information helps the Mission President assign your service role.</p>

      <form className="space-y-6">
        {/* ... University Major (Same as your code) ... */}

        {/* Skill Selection */}
        <div>
          <label className="block text-sm font-bold text-slate-800 mb-2 uppercase tracking-wider">
            Technical Skills
          </label>
          <div className="flex flex-wrap gap-2">
            {['Accounting', 'Web Dev', 'Public Speaking', 'Social Media', 'Office Suite'].map(skill => {
              const isSelected = selectedSkills.includes(skill);
              return (
                <button 
                  key={skill}
                  type="button"
                  onClick={() => toggleSkill(skill)}
                  className={`px-4 py-2 rounded-full border-2 transition-all font-bold text-xs ${
                    isSelected 
                    ? "bg-cyan-500 border-cyan-500 text-white shadow-md" 
                    : "border-cyan-500 text-cyan-600 hover:bg-cyan-50"
                  }`}
                >
                  {skill} {isSelected ? '✓' : '+'}
                </button>
              );
            })}
          </div>
        </div>

        {/* ... Service Goal & Submit Button (Same as your code) ... */}
        
        <button 
          type="submit"
          className="w-full py-4 bg-cyan-500 text-white rounded-2xl font-black text-lg hover:bg-cyan-600 shadow-lg shadow-cyan-100 transition-all active:scale-[0.98]"
        >
          Save Professional Profile
        </button>
      </form>
    </div>
  );
}