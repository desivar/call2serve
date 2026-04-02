"use client";
import { useState, useRef } from 'react';

export default function LanguageEvaluator() {
  const [isRecording, setIsRecording] = useState(false);
  const [recordings, setRecordings] = useState([
    { date: "Jan 2026", level: "L1", url: "#" },
    { date: "Feb 2026", level: "L1+", url: "#" }
  ]);

  // Web Audio API Logic
  const startRecording = () => {
    setIsRecording(true);
    // navigator.mediaDevices.getUserMedia({ audio: true })...
  };

  const stopRecording = () => {
    setIsRecording(false);
    // Save to Cloudinary (Free Tier)
  };

  return (
    <div className="p-6 bg-white min-h-screen pb-20">
      <h1 className="text-2xl font-black text-slate-800 mb-2">Fluency Progress</h1>
      <p className="text-sm text-slate-500 mb-8">Record your monthly "Check-in" to track your internship growth.</p>

      {/* 1. The "Record" Button */}
      <div className="flex flex-col items-center justify-center p-10 bg-blue-50 rounded-[40px] border-2 border-dashed border-blue-200 mb-8">
        <button 
          onMouseDown={startRecording}
          onMouseUp={stopRecording}
          className={`w-20 h-20 rounded-full flex items-center justify-center shadow-lg transition-all ${isRecording ? 'bg-red-500 scale-110' : 'bg-blue-600'}`}
        >
          <span className="text-white font-bold">{isRecording ? "STOP" : "REC"}</span>
        </button>
        <p className="mt-4 text-xs font-bold text-blue-600 uppercase tracking-widest">
          {isRecording ? "Recording Voice Note..." : "Hold to record your monthly check-in"}
        </p>
      </div>

      {/* 2. The Progress Timeline */}
      <div className="space-y-4">
        <h3 className="font-bold text-slate-700">Audio History</h3>
        {recordings.map((rec, index) => (
          <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-2xl border border-gray-100">
            <div>
              <p className="font-bold text-sm text-slate-800">{rec.date}</p>
              <p className="text-[10px] text-blue-500 font-black uppercase">Level: {rec.level}</p>
            </div>
            <button className="w-10 h-10 bg-white rounded-full shadow-sm flex items-center justify-center text-blue-600">
              ▶
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}