"use client";
import { useState } from 'react';

export default function BudgetTracker() {
  const [totalWave] = useState(400); // Example: 400 Euros/Dollars after bills
  const [spent, setSpent] = useState(120);

  const stats = calculateDailyBudget(totalWave, spent);

  return (
    <div className="p-6 max-w-md mx-auto bg-white min-h-screen">
      <h1 className="text-2xl font-black mb-6 text-slate-800">Monthly Survival</h1>
      
      {/* Visual Progress Circle or Gauge */}
      <div className="relative flex items-center justify-center mb-8">
        <svg className="w-48 h-48 transform -rotate-90">
          <circle cx="96" cy="96" r="88" stroke="currentColor" strokeWidth="12" fill="transparent" className="text-gray-100" />
          <circle cx="96" cy="96" r="88" stroke="currentColor" strokeWidth="12" fill="transparent" 
            strokeDasharray={552}
            strokeDashoffset={552 - (552 * (spent / totalWave))}
            className="text-blue-600 transition-all duration-500" 
          />
        </svg>
        <div className="absolute text-center">
          <p className="text-3xl font-black">${stats.remaining}</p>
          <p className="text-[10px] uppercase text-gray-400 font-bold">Left to Spend</p>
        </div>
      </div>

      {/* Daily Limit Card */}
      <div className="bg-blue-50 p-5 rounded-3xl mb-6 border border-blue-100 text-center">
        <p className="text-xs text-blue-600 font-bold uppercase mb-1">Today's Safe Limit</p>
        <p className="text-4xl font-black text-blue-900">${stats.dailyLimit}</p>
        <p className="text-[10px] text-blue-400 mt-2 italic">If you spend more, your limit tomorrow drops.</p>
      </div>

      {/* Quick Add Expense */}
      <div className="space-y-3">
        <button className="w-full py-4 bg-slate-900 text-white rounded-2xl font-bold hover:bg-slate-800 transition shadow-lg">
          + Log Grocery Expense
        </button>
        <button className="w-full py-4 bg-white border-2 border-slate-200 text-slate-600 rounded-2xl font-bold text-sm">
          View Expense History
        </button>
      </div>
    </div>
  );
}