export default function SignUp() {
  return (
    <main className="min-h-screen bg-slate-100 flex items-center justify-center p-6">
      <div className="bg-white p-10 rounded-[2rem] shadow-xl w-full max-w-md border-t-8 border-cyan-500">
        <h1 className="text-3xl font-black mb-6 text-slate-800">Create Account</h1>
        <form className="space-y-4">
          <input type="text" placeholder="Full Name" className="w-full p-4 bg-slate-50 rounded-xl border border-slate-200" />
          <input type="email" placeholder="Email" className="w-full p-4 bg-slate-50 rounded-xl border border-slate-200" />
          <input type="password" placeholder="Password" className="w-full p-4 bg-slate-50 rounded-xl border border-slate-200" />
          <button className="w-full bg-cyan-500 text-white font-bold py-4 rounded-xl shadow-lg shadow-cyan-100 hover:bg-cyan-600 transition-all">
            REGISTER
          </button>
        </form>
      </div>
    </main>
  );
}