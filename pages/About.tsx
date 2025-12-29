
import React from 'react';
import { ArrowLeft, Target, Globe, Heart, Shield, Compass, Scale, Zap, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const About: React.FC = () => {
  return (
    <div className="pt-44 pb-20 px-6 max-w-7xl mx-auto min-h-screen transition-colors">
      <div className="max-w-4xl">
        <Link to="/" className="inline-flex items-center text-gray-500 hover:text-gray-900 dark:hover:text-white mb-16 transition-colors group animate-reveal">
          <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
          <span className="text-[10px] font-black uppercase tracking-[0.3em]">back home</span>
        </Link>

        <h1 className="text-4xl sm:text-6xl md:text-8xl font-black mb-16 tracking-tighter leading-[1] sm:leading-[0.85] animate-reveal font-gotham text-glow text-gray-900 dark:text-white">
          our mission is to <br /> <span className="text-brand-blue italic">dissolve borders.</span>
        </h1>

        <div className="space-y-12 text-xl text-gray-600 dark:text-gray-400 leading-relaxed font-medium animate-reveal delay-100 mb-32">
          <p>
            waletz was founded on a simple premise: money should move as freely as information. In a world where digital communication is instant, financial transactions remain trapped in legacy silos.
          </p>

          <div className="p-8 md:p-12 glass-panel border-black/5 dark:border-white/10 rounded-3xl md:rounded-[40px] shadow-2xl">
            <h3 className="text-gray-900 dark:text-white font-black text-2xl md:text-3xl mb-6 tracking-tight lowercase font-gotham">infrastructure first</h3>
            <p className="opacity-80 text-lg">
              We don't just build an app. We build the rails. Our protocol connects global clearing houses, private banks, and digital asset networks into a single, unified API covering 150+ countries.
            </p>
          </div>

          <p>
            Today, thousands of high-growth companies use waletz to settle global payroll, manage multi-currency treasury, and launch products in markets they previously couldn't access.
          </p>
        </div>
      </div>

      {/* Global Vision */}
      <section className="py-40 border-t border-black/5 dark:border-white/5">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          <div className="animate-reveal">
            <h2 className="text-4xl md:text-7xl font-black text-gray-900 dark:text-white mb-10 md:mb-12 tracking-tighter leading-tight font-gotham lowercase">A vision for the <br /> <span className="text-brand-blue italic">next century.</span></h2>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-12 leading-relaxed opacity-80 font-medium">
              We are building the financial layer for the internet. A system that is neutral, programmatic, and accessible to anyone, anywhere.
            </p>
            <div className="space-y-10">
              {[
                { icon: <Target />, title: 'Radical Transparency', desc: 'Every transaction, movement, and conversion is audit-ready and visible.' },
                { icon: <Globe />, title: 'Global Parity', desc: 'Ensuring businesses in emerging markets have the same tools as those in Silicon Valley.' },
                { icon: <Shield />, title: 'Resilient Infrastructure', desc: 'A system designed to operate through global shifts and technical disruptions.' }
              ].map((item, idx) => (
                <div key={idx} className="flex items-start space-x-6 group">
                  <div className="w-14 h-14 bg-brand-blue/10 rounded-2xl flex items-center justify-center text-brand-blue shadow-lg shrink-0 group-hover:bg-brand-blue group-hover:text-white transition-all">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-black text-gray-900 dark:text-white mb-2 lowercase font-gotham">{item.title}</h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400 font-medium opacity-80 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative animate-reveal delay-200">
            <div className="aspect-square rounded-[40px] md:rounded-[80px] overflow-hidden glass-panel border-black/5 dark:border-white/10 p-1 animate-float shadow-2xl max-w-lg mx-auto">
              <div className="w-full h-full bg-black/5 dark:bg-black/40 rounded-[39px] md:rounded-[79px] flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/10 to-transparent"></div>
                <Globe className="text-brand-blue opacity-30 animate-pulse-slow w-full h-full p-20" size={undefined} />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center z-10 w-full px-4">
                  <div className="text-5xl md:text-7xl font-black text-gray-900 dark:text-white tracking-tighter mb-4">150+</div>
                  <div className="text-[10px] font-black uppercase tracking-[0.5em] text-brand-blue">Active Regions</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Principles - NEW SECTION */}
      <section className="py-40 border-t border-black/5 dark:border-white/5">
        <div className="text-center mb-24 md:mb-32">
          <h2 className="text-4xl md:text-7xl font-black text-gray-900 dark:text-white tracking-tighter lowercase font-gotham mb-8">Core <span className="text-brand-blue italic">Principles.</span></h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto font-medium">How we operate, decide, and build at the edge of possibility.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {[
            { title: 'Atomic Honesty', icon: <Compass />, desc: 'We value direct, data-driven communication over corporate hierarchy.' },
            { icon: <Scale />, title: 'Ethical Scale', desc: 'Growth must be sustainable. We never compromise security for velocity.' },
            { icon: <Zap />, title: 'Bias for Build', desc: 'We are makers. We prototype at the edge and iterate in the open.' }
          ].map((principle, i) => (
            <div key={i} className="p-8 md:p-12 glass-panel rounded-3xl md:rounded-[56px] border-black/5 dark:border-white/5 hover:border-brand-blue/30 transition-all group shadow-2xl">
              <div className="w-16 h-16 bg-brand-blue/10 rounded-2xl flex items-center justify-center text-brand-blue mb-10 group-hover:bg-brand-blue group-hover:text-white transition-all shadow-lg">
                {principle.icon}
              </div>
              <h4 className="text-2xl md:text-3xl font-black text-gray-900 dark:text-white mb-6 tracking-tight lowercase font-gotham">{principle.title}</h4>
              <p className="text-gray-500 dark:text-gray-400 text-sm md:text-base leading-relaxed font-medium">{principle.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-32 border-t border-black/5 dark:border-white/5 animate-reveal">
        <div className="text-center md:text-left">
          <div className="text-4xl font-black text-gray-900 dark:text-white mb-2 tracking-tighter">2024</div>
          <div className="text-[10px] uppercase font-black tracking-[0.2em] text-gray-400 dark:text-gray-500">founded</div>
        </div>
        <div className="text-center md:text-left">
          <div className="text-4xl font-black text-gray-900 dark:text-white mb-2 tracking-tighter">150+</div>
          <div className="text-[10px] uppercase font-black tracking-[0.2em] text-gray-400 dark:text-gray-500">countries</div>
        </div>
        <div className="text-center md:text-left">
          <div className="text-4xl font-black text-gray-900 dark:text-white mb-2 tracking-tighter">$80b+</div>
          <div className="text-[10px] uppercase font-black tracking-[0.2em] text-gray-400 dark:text-gray-500">flow</div>
        </div>
        <div className="text-center md:text-left">
          <div className="text-4xl font-black text-gray-900 dark:text-white mb-2 tracking-tighter">99.9%</div>
          <div className="text-[10px] uppercase font-black tracking-[0.2em] text-gray-400 dark:text-gray-500">uptime</div>
        </div>
      </div>
    </div>
  );
};

export default About;
