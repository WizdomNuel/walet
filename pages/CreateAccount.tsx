
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Globe, CreditCard, BarChart3, ChevronDown, Mail, Lock, ShieldCheck, CheckCircle, TrendingUp } from 'lucide-react';

const CreateAccount: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#08090C] text-white flex flex-col lg:flex-row font-sans selection:bg-brand-blue overflow-hidden">
      {/* Left Pane - Form */}
      <div className="flex-1 px-6 py-12 lg:px-24 lg:py-20 flex flex-col justify-between relative z-10 bg-[#08090C]">
        <header className="flex flex-col sm:flex-row justify-between items-center gap-8 mb-16 px-4">
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="w-10 h-10 bg-[#0d59f2] rounded-xl flex items-center justify-center shadow-[0_0_20px_rgba(13,89,242,0.4)]">
              <div className="w-5 h-5 bg-white rotate-45"></div>
            </div>
            <span className="text-2xl font-black tracking-tighter group-hover:text-brand-blue transition-colors lowercase font-gotham">waletz</span>
          </Link>
          <div className="text-xs flex items-center">
            <span className="text-gray-500 mr-4 font-bold lowercase">Already have an account?</span>
            <Link to="/login" className="px-8 py-3 bg-white/5 border border-white/10 rounded-full hover:bg-brand-blue hover:text-white transition-all font-black uppercase tracking-widest text-[9px] shadow-xl">
              Log In
            </Link>
          </div>
        </header>

        <main className="max-w-lg w-full mx-auto lg:mx-0">
          <div className="mb-16 md:mb-20 px-4">
            <div className="flex justify-between items-end mb-4">
              <span className="text-[10px] md:text-xs font-black text-[#0d59f2] tracking-[0.3em] uppercase">Identity protocol</span>
              <span className="text-[10px] md:text-xs font-black text-gray-500 uppercase tracking-widest opacity-60">Step 1 of 3</span>
            </div>
            <div className="h-1.5 bg-[#15171E] rounded-full overflow-hidden shadow-inner">
              <div className="h-full bg-[#0d59f2] w-1/3 shadow-[0_0_15px_rgba(13,89,242,0.6)]"></div>
            </div>
          </div>

          <div className="px-4">
            <h1 className="text-5xl md:text-7xl font-black mb-8 tracking-tighter leading-[0.85] font-gotham lowercase text-glow">join the future <br /> <span className="text-brand-blue italic">of finance</span></h1>
            <p className="text-lg md:text-xl text-gray-400 mb-12 font-medium leading-relaxed max-w-md">Create your free waletz account to access borderless payments and enterprise-grade intelligence.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12 px-4">
            <button className="flex items-center justify-center space-x-4 py-5 px-6 bg-[#15171E] border border-white/5 rounded-[20px] hover:bg-white/5 transition-all group shadow-xl hover:border-white/10">
              <img src="https://www.svgrepo.com/show/303108/google-icon-logo.svg" className="w-5 h-5" alt="Google" />
              <span className="text-[10px] md:text-xs font-black uppercase tracking-widest">Google Auth</span>
            </button>
            <button className="flex items-center justify-center space-x-4 py-5 px-6 bg-[#15171E] border border-white/5 rounded-[20px] hover:bg-white/5 transition-all group shadow-xl hover:border-white/10">
              <img src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg" className="w-5 h-5 invert" alt="Apple" />
              <span className="text-[10px] md:text-xs font-black uppercase tracking-widest">Apple ID</span>
            </button>
          </div>

          <div className="relative flex items-center mb-12 px-4">
            <div className="flex-grow border-t border-white/5"></div>
            <span className="flex-shrink mx-6 text-[9px] text-gray-500 uppercase font-black tracking-[0.4em] opacity-60">secure email path</span>
            <div className="flex-grow border-t border-white/5"></div>
          </div>

          <form className="space-y-8 px-4 mb-20" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-3">
                <label className="block text-[10px] font-black text-gray-500 uppercase tracking-widest ml-4">First Name</label>
                <input
                  type="text"
                  placeholder="Alex"
                  className="w-full bg-[#111318] border border-white/5 rounded-2xl md:rounded-3xl px-8 py-5 text-base md:text-lg font-black focus:outline-none focus:border-[#0d59f2] transition-all shadow-inner placeholder:text-gray-700"
                />
              </div>
              <div className="space-y-3">
                <label className="block text-[10px] font-black text-gray-500 uppercase tracking-widest ml-4">Last Name</label>
                <input
                  type="text"
                  placeholder="Morgan"
                  className="w-full bg-[#111318] border border-white/5 rounded-2xl md:rounded-3xl px-8 py-5 text-base md:text-lg font-black focus:outline-none focus:border-[#0d59f2] transition-all shadow-inner placeholder:text-gray-700"
                />
              </div>
            </div>

            <div className="space-y-3">
              <label className="block text-[10px] font-black text-gray-500 uppercase tracking-widest ml-4">Email Address</label>
              <div className="relative">
                <Mail className="absolute left-8 top-1/2 -translate-y-1/2 text-brand-blue/40" size={24} />
                <input
                  type="email"
                  placeholder="name@company.com"
                  className="w-full bg-[#111318] border border-white/5 rounded-2xl md:rounded-3xl pl-20 pr-8 py-5 text-base md:text-lg font-black focus:outline-none focus:border-[#0d59f2] transition-all shadow-inner placeholder:text-gray-700"
                />
              </div>
            </div>

            <div className="space-y-3">
              <label className="block text-[10px] font-black text-gray-500 uppercase tracking-widest ml-4">Country of Residence</label>
              <div className="relative">
                <select className="w-full bg-[#111318] border border-white/5 rounded-2xl md:rounded-3xl px-8 py-5 text-base md:text-lg font-black focus:outline-none focus:border-[#0d59f2] appearance-none cursor-pointer shadow-inner pr-16 font-gotham">
                  <option>United States</option>
                  <option>United Kingdom</option>
                  <option>Singapore</option>
                  <option>Germany</option>
                </select>
                <ChevronDown className="absolute right-8 top-1/2 -translate-y-1/2 text-brand-blue" size={24} />
              </div>
            </div>

            <button type="submit" className="w-full bg-[#0d59f2] hover:bg-blue-600 text-white font-black py-6 md:py-8 rounded-2xl md:rounded-[32px] transition-all shadow-2xl shadow-blue-500/30 flex items-center justify-center space-x-4 group active:scale-[0.98] uppercase tracking-[0.2em] text-xs md:text-sm font-gotham">
              <span>Initialize Account</span>
              <ArrowRight size={24} className="group-hover:translate-x-3 transition-transform" />
            </button>
          </form>
        </main>

        <footer className="mt-auto flex flex-wrap items-center gap-8 md:gap-12 opacity-40 px-4 justify-center lg:justify-start">
          <div className="flex items-center space-x-3 text-white text-[10px] font-black uppercase tracking-widest">
            <Lock size={14} className="text-brand-blue" /> <span>SOC2 Type II</span>
          </div>
          <div className="flex items-center space-x-3 text-white text-[10px] font-black uppercase tracking-widest">
            <ShieldCheck size={14} className="text-brand-blue" /> <span>AES-256 Protocol</span>
          </div>
          <div className="flex items-center space-x-3 text-white text-[10px] font-black uppercase tracking-widest">
            <CheckCircle size={14} className="text-brand-blue" /> <span>GDPR Compliant</span>
          </div>
        </footer>
      </div>

      {/* Right Pane - Visual Dashboard */}
      <div className="hidden lg:flex flex-1 bg-[#0b0d11] relative items-center justify-center overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/10 blur-[150px] rounded-full -z-10 animate-pulse-slow"></div>

        <div className="w-full max-w-xl p-10 rounded-[56px] glass-panel border border-[#222630] shadow-[0_50px_100px_-20px_rgba(0,0,0,1)] relative animate-reveal delay-200">
          <div className="aspect-[4/3] relative rounded-3xl overflow-hidden mb-12 bg-black/60 border border-white/5 shadow-inner">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-64 h-64 border-2 border-brand-blue/10 rounded-full animate-[spin_20s_linear_infinite]"></div>
              <div className="absolute w-56 h-56 border-2 border-cyan-400/5 rounded-full animate-[spin_15s_linear_infinite_reverse]"></div>
              <div className="absolute w-40 h-40 bg-brand-blue/5 blur-3xl rounded-full"></div>
              <Globe size={160} className="text-[#0d59f2] opacity-30 animate-pulse-slow" />
            </div>

            <div className="absolute top-8 right-8 p-5 glass-panel border border-white/10 rounded-3xl flex items-center space-x-4 shadow-2xl animate-float">
              <div className="p-2.5 bg-green-500/10 rounded-xl text-green-500">
                <TrendingUp size={18} />
              </div>
              <div>
                <div className="text-[10px] text-gray-500 font-black uppercase tracking-[0.2em]">yield yield</div>
                <div className="text-lg font-black text-white">4.85%</div>
              </div>
            </div>

            <div className="absolute bottom-8 left-8 p-5 glass-panel border border-white/10 rounded-3xl flex items-center space-x-4 shadow-2xl animate-float" style={{ animationDelay: '2s' }}>
              <div className="p-2.5 bg-blue-500/10 rounded-xl text-blue-500">
                <Globe size={18} />
              </div>
              <div>
                <div className="text-[10px] text-gray-500 font-black uppercase tracking-[0.2em]">regions active</div>
                <div className="text-lg font-black text-white">180+</div>
              </div>
            </div>

            <div className="absolute bottom-8 right-8 text-right">
              <div className="text-xs font-black mb-1 text-white uppercase tracking-widest">waletz core sync</div>
              <div className="text-[9px] text-gray-500 font-bold uppercase">Atomic Protocol • Stable</div>
              <div className="mt-3 h-1.5 w-32 bg-gray-800/50 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-blue-600 to-cyan-400 w-3/4 animate-pulse"></div>
              </div>
            </div>
          </div>

          <div className="space-y-10">
            <div className="flex items-start space-x-6 group">
              <div className="mt-1 p-4 bg-blue-500/10 rounded-2xl text-blue-500 border border-blue-500/20 group-hover:bg-brand-blue group-hover:text-white transition-all shadow-lg">
                <CreditCard size={24} />
              </div>
              <div>
                <h3 className="text-xl font-black mb-2 text-white lowercase">borderless payments</h3>
                <p className="text-sm text-gray-400 font-medium opacity-80 leading-relaxed">Send and receive funds globally with zero hidden fees and instant settlement times.</p>
              </div>
            </div>
            <div className="flex items-start space-x-6 group">
              <div className="mt-1 p-4 bg-blue-500/10 rounded-2xl text-blue-500 border border-blue-500/20 group-hover:bg-brand-blue group-hover:text-white transition-all shadow-lg">
                <BarChart3 size={24} />
              </div>
              <div>
                <h3 className="text-xl font-black mb-2 text-white lowercase">real-time intelligence</h3>
                <p className="text-sm text-gray-400 font-medium opacity-80 leading-relaxed">Access enterprise-grade financial analytics and market insights directly from your dashboard.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateAccount;
