export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center p-4 bg-slate-50">
      <div className="bg-white p-12 rounded-[3rem] shadow-2xl border-t-[12px] border-cyan-500 max-w-md w-full text-center">
        <h1 className="text-5xl font-black text-slate-900 mb-2 italic tracking-tighter">
          Call2Serve
        </h1>
        <p className="text-cyan-600 font-bold uppercase tracking-widest text-xs mb-8">
          Professional Growth Incubator
        </p>
        
        <div className="space-y-4">
          <button className="w-full bg-cyan-500 hover:bg-cyan-600 text-white font-black py-5 rounded-2xl transition-all transform hover:scale-105 shadow-lg shadow-cyan-100">
            INGRESAR / LOGIN
          </button>
          <p className="text-slate-400 text-sm"> NGO Management System v1.0 </p>
        </div>
      </div>
    </main>
  );
}