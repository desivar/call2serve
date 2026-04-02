"use client";
import { useState } from 'react';

// 1. We need this function so 'stats' actually exists!
function calculateDailyBudget(total, spent) {
  const remaining = total - spent;
  const daysLeft = 30; // You can make this dynamic later
  return {
    remaining: remaining > 0 ? remaining : 0,
    dailyLimit: remaining > 0 ? (remaining / daysLeft).toFixed(2) : 0
  };
}

export default function BudgetTracker() {
  const [totalWave] = useState(400); 
  const [spent, setSpent] = useState(120);

  const stats = calculateDailyBudget(totalWave, spent);

  // 2. This function uses 'setSpent' to update the UI
  const addExpense = (amount: number) => {
    setSpent(prev => prev + amount);
  };

  return (
    <div className="p-6 max-w-md mx-auto bg-white min-h-screen">
      <h1 className="text-2xl font-black mb-6 text-slate-800 tracking-tight">Monthly Survival</h1>
      
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
          <p className="text-3xl font-black text-slate-900">${stats.remaining}</p>
          <p className="text-[10px] uppercase text-gray-400 font-bold tracking-widest">Left to Spend</p>
        </div>
      </div>

      <div className="bg-blue-50 p-5 rounded-3xl mb-6 border border-blue-100 text-center">
        <p className="text-xs text-blue-600 font-bold uppercase mb-1">Today's Safe Limit</p>
        <p className="text-4xl font-black text-blue-900">${stats.dailyLimit}</p>
        <p className="text-[10px] text-blue-400 mt-2 italic">If you spend more, your limit tomorrow drops.</p>
      </div>

      <div className="space-y-3">
        {/* 3. We call addExpense here! Now setSpent is being used. */}
        <button 
          onClick={() => addExpense(10)}
          className="w-full py-4 bg-slate-900 text-white rounded-2xl font-bold hover:bg-slate-800 active:scale-95 transition shadow-lg"
        >
          + Log $10 Expense
        </button>
        
        <button className="w-full py-4 bg-white border-2 border-slate-200 text-slate-600 rounded-2xl font-bold text-sm">
          View Expense History
        </button>
      </div>
    </div>
  );
}