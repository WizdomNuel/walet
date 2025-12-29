
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Smartphone, CreditCard, ShieldCheck, Heart, Globe, Lock, Mail, ChevronDown } from 'lucide-react';

const PersonalAccount: React.FC = () => {
  return (
    <div className="min-h-screen pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-custom-bg transition-colors">
      <div className="max-w-7xl mx-auto">
        <Link to="/" className="inline-flex items-center space-x-2 text-custom-secondary hover:text-custom-primary mb-12 transition-colors px-4">
          <ArrowLeft size={18} />
          <span className="font-bold text-sm">Back to home</span>
        </Link>

        <div className="text-center max-w-4xl mx-auto mb-24 md:mb-32 px-4">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-500 text-[10px] font-bold tracking-widest mb-8 uppercase">
            Personal Banking
          </div>
          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black mb-8 text-custom-primary tracking-tighter leading-[1] md:leading-[0.85] font-gotham lowercase text-glow">Your wealth, <br /> <span className="text-brand-blue italic">evolved.</span></h1>
          <p className="text-lg md:text-xl text-custom-secondary mb-12 leading-relaxed font-medium">
            The all-in-one platform to earn, save, and spend globally. One account, zero borders.
          </p>
          <Link to="/contact" className="w-full sm:w-auto px-10 py-5 bg-brand-blue hover:bg-blue-600 text-white font-black rounded-2xl transition-all shadow-xl shadow-blue-500/20 inline-block hover:scale-105 active:scale-95 font-gotham lowercase text-center">
            Get Started Now
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-32 px-4">
          {[
            { icon: <CreditCard />, title: 'Global Card', desc: 'Spend in any currency with local exchange rates and no hidden fees.' },
            { icon: <Smartphone />, title: 'Smart App', desc: 'Real-time notifications and intuitive wealth tracking tools.' },
            { icon: <ShieldCheck />, title: 'Assets Protection', desc: 'Your deposits are protected up to $250k via our partner network.' },
            { icon: <Heart />, title: 'Family Accounts', desc: 'Seamlessly share wealth and set limits for your loved ones.' }
          ].map((item, idx) => (
            <div key={idx} className="p-8 md:p-10 rounded-[32px] glass-panel border-black/5 dark:border-white/5 hover:border-brand-blue/30 transition-all group shadow-xl">
              <div className="text-brand-blue mb-8 group-hover:scale-110 transition-transform">{item.icon}</div>
              <h3 className="text-xl font-black mb-3 text-custom-primary tracking-tight lowercase font-gotham">{item.title}</h3>
              <p className="text-custom-secondary text-[13px] leading-relaxed font-medium opacity-80">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="bg-brand-blue rounded-[40px] md:rounded-[64px] p-10 md:p-16 lg:p-24 text-white relative overflow-hidden mx-4 shadow-2xl mb-32">
          <div className="relative z-10 grid lg:grid-cols-2 gap-16 md:gap-20 items-center">
            <div className="text-left">
              <h2 className="text-4xl md:text-6xl font-black mb-8 tracking-tighter leading-none font-gotham lowercase">Experience the future <br className="hidden md:block" /> of personal finance.</h2>
              <p className="text-blue-50/80 mb-10 text-lg md:text-xl font-medium leading-relaxed font-gotham">Join over 15 million people who trust waletz to manage their daily financial lives across 170+ countries.</p>
              <ul className="space-y-5 md:space-y-6">
                {[
                  'Zero monthly maintenance fees',
                  'Instant P2P transfers worldwide',
                  'High-yield savings vaults'
                ].map((text, i) => (
                  <li key={i} className="flex items-center space-x-4">
                    <div className="w-1.5 h-1.5 bg-white rounded-full shadow-[0_0_10px_rgba(255,255,255,0.8)]"></div>
                    <span className="font-bold text-sm md:text-base lowercase tracking-tight">{text}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex justify-center">
              {/* Phone Mockup Replicating Signup Image UI */}
              <div className="w-64 h-[520px] bg-black rounded-[48px] border-[8px] border-[#1a1c22] shadow-[0_40px_100px_rgba(0,0,0,0.6)] relative overflow-hidden flex flex-col p-4">
                {/* App Status Bar */}
                <div className="flex justify-between items-center mb-4 px-4 pt-1">
                  <div className="text-[10px] font-bold">9:41</div>
                  <div className="flex space-x-1">
                    <div className="w-3 h-3 bg-white rounded-full opacity-20"></div>
                    <div className="w-4 h-2 bg-white rounded-sm opacity-20"></div>
                  </div>
                </div>

                {/* Mini UI Content */}
                <div className="flex-1 rounded-3xl bg-[#08090C] border border-white/5 p-4 flex flex-col overflow-y-auto no-scrollbar">
                  <div className="flex items-center space-x-1.5 mb-6">
                    <div className="w-5 h-5 bg-[#0d59f2] rounded flex items-center justify-center">
                      <div className="w-2 h-2 bg-white rotate-45"></div>
                    </div>
                    <span className="text-[10px] font-bold tracking-tight">waletz</span>
                  </div>

                  <div className="mb-4">
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-[6px] text-[#0d59f2] font-bold uppercase tracking-wider">Identity</span>
                      <span className="text-[6px] text-gray-500 font-bold uppercase">Step 1 of 3</span>
                    </div>
                    <div className="h-0.5 bg-white/5 rounded-full overflow-hidden">
                      <div className="h-full bg-[#0d59f2] w-1/3"></div>
                    </div>
                  </div>

                  <h4 className="text-sm font-bold leading-tight mb-2">Join the Future <br /> of Finance</h4>
                  <p className="text-[7px] text-gray-500 leading-relaxed mb-6">Explore the world's most advanced borderless payment network.</p>

                  <div className="grid grid-cols-2 gap-2 mb-4">
                    <div className="h-7 bg-[#15171E] border border-white/5 rounded-lg flex items-center justify-center space-x-1.5">
                      <img src="https://www.svgrepo.com/show/303108/google-icon-logo.svg" className="w-2.5 h-2.5" />
                      <span className="text-[7px] font-medium">Google</span>
                    </div>
                    <div className="h-7 bg-[#15171E] border border-white/5 rounded-lg flex items-center justify-center space-x-1.5">
                      <Smartphone size={10} className="text-gray-400" />
                      <span className="text-[7px] font-medium">Apple</span>
                    </div>
                  </div>

                  <div className="space-y-3 mb-6">
                    <div className="h-9 bg-[#0d59f2] rounded-lg flex items-center justify-center shadow-lg shadow-blue-500/20 mt-2">
                      <span className="text-[9px] font-bold">Contact Us</span>
                    </div>
                  </div>

                  <div className="mt-auto pt-4 flex justify-around items-center border-t border-white/5">
                    <div className="flex flex-col items-center opacity-40">
                      <ShieldCheck size={10} />
                      <span className="text-[4px] mt-0.5">SOC2</span>
                    </div>
                    <div className="flex flex-col items-center opacity-40">
                      <Lock size={10} />
                      <span className="text-[4px] mt-0.5">AES-256</span>
                    </div>
                    <div className="flex flex-col items-center opacity-40">
                      <Globe size={10} />
                      <span className="text-[4px] mt-0.5">Global</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
        </div>
      </div>
    </div>
  );
};

export default PersonalAccount;
