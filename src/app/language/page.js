"use client";

export default function LanguageEvaluator() {
  // Replace this URL with the link to the actual evaluation app
  const externalAppUrl = "https://the-other-app.com";

  return (
    <div className="p-6 bg-white min-h-screen">
      <h1 className="text-2xl font-black text-slate-800 mb-2">Language Growth</h1>
      <p className="text-sm text-slate-500 mb-8 italic">Complete your monthly fluency check-in using the official evaluation tool.</p>

      {/* The External Link Card */}
      <div className="p-8 bg-cyan-50 rounded-[2rem] border-2 border-cyan-100 flex flex-col items-center text-center">
        <div className="w-16 h-16 bg-cyan-500 rounded-2xl flex items-center justify-center mb-4 shadow-lg shadow-cyan-200">
          <span className="text-white text-2xl">🌐</span>
        </div>
        <h3 className="text-lg font-black text-cyan-900 mb-2">Fluency Evaluator</h3>
        <p className="text-xs text-cyan-700 mb-6 px-4">
          Click below to open the external recording app. Your results will be sent to the Mission President.
        </p>
        
        <a 
          href={externalAppUrl}
          target="_blank" 
          rel="noopener noreferrer"
          className="w-full py-4 bg-cyan-500 text-white rounded-xl font-bold hover:bg-cyan-600 transition-all text-center shadow-md active:scale-95"
        >
          OPEN EXTERNAL APP
        </a>
      </div>

      {/* 2. Simple History Placeholder */}
      <div className="mt-10 space-y-4">
        <h3 className="font-bold text-slate-700 px-2">Recent Submissions</h3>
        <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100 flex justify-between items-center opacity-60">
          <p className="text-sm font-bold">Check-in March 2026</p>
          <span className="text-[10px] font-black text-green-600 bg-green-100 px-2 py-1 rounded-md">COMPLETED</span>
        </div>
      </div>
    </div>
  );
}