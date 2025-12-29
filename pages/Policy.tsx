
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, FileText, Shield, Scale, Lock, ArrowRight, Search } from 'lucide-react';

const Policy: React.FC = () => {
  const policies = [
    { title: 'Privacy Protocol', desc: 'How we manage and protect your global financial footprint.', icon: <Lock /> },
    { title: 'Terms of Service', desc: 'The legal framework for using our borderless infrastructure.', icon: <Scale /> },
    { title: 'AML / KYC Compliance', desc: 'Our rigorous standards for anti-money laundering and identity.', icon: <Shield /> },
    { title: 'Responsible AI Policy', desc: 'Ethical guidelines for our financial intelligence models.', icon: <FileText /> },
    { title: 'Security Standards', desc: 'Detailed technical overview of our defense-in-depth.', icon: <Lock /> },
    { title: 'Whistleblower Policy', desc: 'Safe channels for reporting ethical or legal concerns.', icon: <FileText /> },
  ];

  return (
    <div className="min-h-screen pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-custom-bg transition-colors">
      <div className="max-w-7xl mx-auto">
        <Link to="/" className="inline-flex items-center space-x-2 text-custom-secondary hover:text-custom-primary mb-12 md:mb-16 transition-all group px-4">
          <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
          <span className="font-bold uppercase text-[10px] tracking-widest text-gray-500">Back to home</span>
        </Link>

        <div className="max-w-4xl mb-24 md:mb-40 px-4 animate-reveal">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-500 dark:text-cyan-400 text-[10px] font-black tracking-widest mb-8 uppercase">
            Legal & Compliance
          </div>
          <h1 className="text-5xl sm:text-7xl lg:text-9xl font-black mb-8 text-custom-primary tracking-tighter leading-[1] md:leading-[0.85] font-gotham lowercase text-glow">Integrity is <br /> <span className="text-brand-blue italic">immutable.</span></h1>
          <p className="text-lg md:text-xl text-custom-secondary leading-relaxed font-medium opacity-80 max-w-2xl">
            We operate at the highest global standards of regulatory compliance and data ethics. Explore our policies and legal frameworks.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-32 md:mb-40 px-4 animate-reveal">
          {policies.map((p, i) => (
            <div key={i} className="p-10 md:p-12 glass-panel border-black/5 dark:border-white/5 rounded-[40px] md:rounded-[56px] hover:border-brand-blue/30 transition-all group cursor-pointer shadow-2xl">
              <div className="w-14 h-14 md:w-16 md:h-16 bg-brand-blue/10 rounded-2xl md:rounded-3xl flex items-center justify-center text-brand-blue mb-10 group-hover:scale-110 shadow-lg transition-transform">
                {React.cloneElement(p.icon as React.ReactElement, { size: 28 })}
              </div>
              <h3 className="text-2xl md:text-3xl font-black mb-4 text-custom-primary tracking-tight font-gotham lowercase">{p.title}</h3>
              <p className="text-sm md:text-base text-custom-secondary leading-relaxed mb-10 font-medium opacity-80">{p.desc}</p>
              <div className="flex items-center text-brand-blue font-black text-[10px] md:text-xs uppercase tracking-widest border-b-2 border-brand-blue/10 pb-1 group-hover:border-brand-blue transition-all w-fit">
                Read Protocol <ArrowRight size={16} className="ml-2 group-hover:translate-x-2 transition-transform" />
              </div>
            </div>
          ))}
        </div>

        <section className="py-24 md:py-40 border-t border-black/5 dark:border-white/5 animate-reveal px-4">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-16 md:gap-24">
            <div className="max-w-2xl text-center lg:text-left">
              <h2 className="text-3xl md:text-6xl font-black mb-8 text-custom-primary tracking-tighter font-gotham lowercase leading-none">Need a customized <br /> <span className="text-brand-blue italic">legal pack?</span></h2>
              <p className="text-lg md:text-xl text-custom-secondary leading-relaxed mb-12 font-medium opacity-80 font-gotham">Our enterprise partners can request custom compliance documentation and full regulatory audit reports for their jurisdictions.</p>
              <Link to="/talk-to-sales" className="w-full sm:w-auto inline-block px-10 md:px-16 py-5 md:py-8 bg-brand-blue text-white font-black rounded-2xl md:rounded-3xl hover:bg-blue-600 transition-all text-xl md:text-2xl shadow-xl shadow-blue-500/20 font-gotham lowercase text-center">
                Request Legal Pack
              </Link>
            </div>
            <div className="w-full lg:max-w-md p-10 md:p-14 glass-panel border-black/5 dark:border-white/5 rounded-[48px] md:rounded-[64px] relative overflow-hidden group shadow-2xl">
              <Search className="text-brand-blue mb-10 group-hover:scale-110 transition-transform" size={48} md:size={64} />
              <h4 className="text-2xl md:text-3xl font-black text-custom-primary mb-6 tracking-tight font-gotham lowercase">Quick Lookup</h4>
              <input
                type="text"
                placeholder="Search policies..."
                className="w-full bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/5 rounded-2xl px-6 py-5 md:py-6 text-lg focus:border-brand-blue focus:outline-none transition-all placeholder:text-gray-400 shadow-inner"
              />
              <div className="mt-8 text-[11px] md:text-xs text-custom-secondary font-bold uppercase tracking-widest opacity-60">e.g. "Data retention", "California privacy"</div>
              <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-brand-blue/5 rounded-full blur-[100px]"></div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Policy;
