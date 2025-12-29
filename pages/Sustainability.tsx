
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Heart, Sun, Globe, Shield, ArrowRight, Target } from 'lucide-react';

const Sustainability: React.FC = () => {
   return (
      <div className="min-h-screen pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-custom-bg transition-colors">
         <div className="max-w-7xl mx-auto">
            <Link to="/" className="inline-flex items-center space-x-2 text-custom-secondary hover:text-custom-primary mb-12 md:mb-16 transition-all group px-4">
               <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
               <span className="font-bold uppercase text-[10px] tracking-widest text-gray-500">Back to home</span>
            </Link>

            <div className="text-center mb-24 md:mb-40 px-4 animate-reveal">
               <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-green-500 text-[10px] font-black tracking-widest mb-8 uppercase">
                  ESG Commitment
               </div>
               <h1 className="text-5xl sm:text-7xl lg:text-9xl font-black mb-8 text-custom-primary tracking-tighter leading-[1] md:leading-[0.85] font-gotham lowercase text-glow">Finance with <br /> <span className="text-brand-blue italic">a conscience.</span></h1>
               <p className="text-lg md:text-xl text-custom-secondary max-w-3xl mx-auto leading-relaxed font-medium opacity-80">
                  Waletz is committed to net-zero operations and financial inclusion. We build technology that powers human potential without costing the planet.
               </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-32 md:mb-48 px-4 animate-reveal">
               <div className="p-10 md:p-14 glass-panel border-black/5 dark:border-white/5 rounded-[40px] md:rounded-[64px] hover:border-green-500/30 transition-all group shadow-2xl relative overflow-hidden">
                  <Sun className="text-orange-400 mb-10 group-hover:scale-110 group-hover:rotate-12 transition-transform" size={56} md:size={64} />
                  <h2 className="text-3xl md:text-5xl font-black mb-6 text-custom-primary tracking-tighter font-gotham lowercase leading-none">Net-Zero <br /> Protocol</h2>
                  <p className="text-sm md:text-lg text-custom-secondary leading-relaxed mb-12 font-medium opacity-80 font-gotham">Our entire globally distributed network is powered by 100% renewable energy credits. We offset every micro-transaction through certified carbon removal projects.</p>
                  <div className="flex items-center space-x-6">
                     <div className="h-2 flex-grow bg-black/5 dark:bg-white/5 rounded-full overflow-hidden shadow-inner">
                        <div className="h-full bg-green-500 w-[92%] shadow-[0_0_15px_rgba(34,197,94,0.4)]"></div>
                     </div>
                     <span className="text-[10px] md:text-xs font-black text-green-500 uppercase tracking-widest">92% Net Zero</span>
                  </div>
                  <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-green-500/5 rounded-full blur-[100px]"></div>
               </div>
               <div className="p-10 md:p-14 glass-panel border-black/5 dark:border-white/5 rounded-[40px] md:rounded-[64px] hover:border-brand-blue/30 transition-all group shadow-2xl relative overflow-hidden">
                  <Heart className="text-brand-blue mb-10 group-hover:scale-110 transition-transform" size={56} md:size={64} />
                  <h2 className="text-3xl md:text-5xl font-black mb-6 text-custom-primary tracking-tighter font-gotham lowercase leading-none">Financial <br /> Inclusion</h2>
                  <p className="text-sm md:text-lg text-custom-secondary leading-relaxed mb-12 font-medium opacity-80 font-gotham">We provide zero-fee essential banking services to underbanked regions through our Global Access program, bridging the gap between local economies and global capital.</p>
                  <div className="flex items-center space-x-6">
                     <div className="h-2 flex-grow bg-black/5 dark:bg-white/5 rounded-full overflow-hidden shadow-inner">
                        <div className="h-full bg-brand-blue w-[75%] shadow-[0_0_15px_rgba(13,89,242,0.4)]"></div>
                     </div>
                     <span className="text-[10px] md:text-xs font-black text-brand-blue uppercase tracking-widest">75% Global Reach</span>
                  </div>
                  <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-brand-blue/5 rounded-full blur-[100px]"></div>
               </div>
            </div>

            <section className="py-24 md:py-40 border-t border-black/5 dark:border-white/5 animate-reveal px-4">
               <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
                  {[
                     { title: 'Governance', desc: 'Radical transparency through our multi-sig board oversight and public ethical audits.', icon: <Shield /> },
                     { title: 'Community Fund', desc: '1% of all transaction revenue is routed directly to global reforestation and literacy programs.', icon: <Target /> },
                     { title: 'Open Standards', desc: 'We lead the open-source movement in financial protocols to prevent ecosystem silos.', icon: <Globe /> }
                  ].map((item, idx) => (
                     <div key={idx} className="text-center group">
                        <div className="w-20 h-20 md:w-24 md:h-24 bg-brand-blue/10 rounded-[32px] flex items-center justify-center text-brand-blue mx-auto mb-10 group-hover:bg-brand-blue group-hover:text-white transition-all transform group-hover:-translate-y-4 shadow-xl group-hover:rotate-6">
                           {React.cloneElement(item.icon as React.ReactElement, { size: 32 })}
                        </div>
                        <h4 className="text-2xl md:text-3xl font-black text-custom-primary mb-6 tracking-tight font-gotham lowercase leading-none">{item.title}</h4>
                        <p className="text-sm md:text-base text-custom-secondary font-medium leading-relaxed opacity-70 max-w-xs mx-auto">{item.desc}</p>
                     </div>
                  ))}
               </div>
            </section>
         </div>
      </div>
   );
};

export default Sustainability;
