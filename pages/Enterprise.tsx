
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Shield, Globe, Zap, ArrowRight, LayoutGrid, CheckCircle, BarChart3, Database, Key, Activity, Coffee, Cpu, Cloud, Lock, Terminal, Code2, Rocket } from 'lucide-react';

const Enterprise: React.FC = () => {
  return (
    <div className="min-h-screen pt-44 pb-32 px-4 transition-colors overflow-hidden relative">
      <div className="max-w-7xl mx-auto">
        <Link to="/" className="inline-flex items-center space-x-3 text-gray-500 hover:text-gray-900 dark:hover:text-white mb-20 transition-all group animate-reveal">
          <ArrowLeft size={18} className="group-hover:-translate-x-2 transition-transform" />
          <span className="font-black uppercase text-[11px] tracking-[0.3em]">Infrastructure Core</span>
        </Link>

        <div className="grid lg:grid-cols-2 gap-24 items-center mb-60">
          <div className="animate-reveal delay-100">
            <div className="inline-flex items-center space-x-3 px-4 py-1.5 rounded-full bg-brand-blue/10 border border-brand-blue/20 text-brand-blue text-[10px] font-black tracking-[0.3em] mb-12 uppercase shadow-[0_0_20px_rgba(13,89,242,0.1)]">
              <span className="w-2 h-2 bg-brand-blue rounded-full animate-pulse"></span>
              <span>Institutional Grade v4.0</span>
            </div>
            <h1 className="text-5xl sm:text-7xl md:text-9xl font-black mb-12 text-gray-900 dark:text-white leading-[1] sm:leading-[0.85] tracking-tighter font-gotham text-glow lowercase px-4">Scale at the <br /> <span className="text-brand-blue italic">edge.</span></h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-16 leading-relaxed max-w-xl font-medium px-4">
              Institutional capital management and programmatic treasury infrastructure for the world's most ambitious enterprises.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 px-4">
              <Link to="/talk-to-sales" className="w-full sm:w-auto px-10 md:px-12 py-5 md:py-6 bg-brand-blue hover:bg-blue-600 text-white font-black rounded-3xl transition-all shadow-xl shadow-blue-500/20 group text-lg md:text-xl border border-white/10 uppercase tracking-widest text-center">
                Partner with Us <ArrowRight className="inline ml-3 group-hover:translate-x-2 transition-transform" />
              </Link>
              <Link to="/developers" className="w-full sm:w-auto px-10 md:px-12 py-5 md:py-6 glass-panel text-gray-900 dark:text-white font-black rounded-3xl transition-all text-center text-lg md:text-xl border border-black/5 dark:border-white/10 hover:bg-black/5 dark:hover:bg-white/10 uppercase tracking-widest lowercase font-gotham">
                View API
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 animate-reveal delay-200 px-4">
            {[
              { label: 'Global Liquidity', desc: 'Real-time routing across our global clearing node network.', icon: <Globe size={28} />, delay: '0s' },
              { label: 'Quantum Security', desc: 'Defense-in-depth with post-quantum encryption standards.', icon: <Shield size={28} />, delay: '0.1s' },
              { label: 'Atomic Settle', desc: 'Sub-second settlement with zero counterparty friction.', icon: <Zap size={28} />, delay: '0.2s' },
              { label: 'Governance AI', desc: 'Predictive exposure monitoring and multi-sig paths.', icon: <Database size={28} />, delay: '0.3s' }
            ].map((card, i) => (
              <div
                key={i}
                className="p-8 md:p-12 rounded-[40px] md:rounded-[48px] glass-panel border border-black/5 dark:border-white/5 space-y-6 md:space-y-8 animate-reveal group hover:border-brand-blue/30 transition-all shadow-2xl"
                style={{ animationDelay: card.delay }}
              >
                <div className="w-14 md:w-16 h-14 md:h-16 bg-brand-blue/10 rounded-2xl flex items-center justify-center text-brand-blue group-hover:bg-brand-blue group-hover:text-white transition-all shadow-lg">
                  {card.icon}
                </div>
                <h4 className="font-black text-xl md:text-2xl text-gray-900 dark:text-white tracking-tighter leading-tight lowercase font-gotham">{card.label}</h4>
                <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed font-medium opacity-80">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Vertical Solutions */}
        <section className="py-40 border-t border-black/5 dark:border-white/5 relative">
          <div className="text-center mb-24 md:mb-32 px-4">
            <h4 className="text-[10px] font-black uppercase tracking-[0.5em] text-brand-blue mb-6">Vertical Integration</h4>
            <h2 className="text-4xl md:text-7xl font-black text-gray-900 dark:text-white tracking-tighter font-gotham lowercase leading-[1.1] sm:leading-none">Solutions for every sector.</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 px-4">
            {[
              { title: 'Fintech Platforms', icon: <Cpu />, items: ['White-label wallets', 'Local rail access', 'KYC/AML APIs'] },
              { title: 'Marketplaces', icon: <Globe />, items: ['Vendor payouts', 'Escrow logic', 'Split payments'] },
              { title: 'SaaS & Web3', icon: <Cloud />, items: ['Subscription billing', 'Smart contracts', 'Treasury yield'] },
              { title: 'Institutional Finance', icon: <Lock />, items: ['Direct clearing', 'Asset custody', 'Reporting'] }
            ].map((vertical, i) => (
              <div key={i} className="p-8 md:p-12 glass-panel rounded-[32px] md:rounded-[48px] border-black/5 dark:border-white/5 hover:bg-black/[0.01] dark:hover:bg-white/[0.02] transition-all group shadow-xl">
                <div className="text-brand-blue mb-10 group-hover:scale-110 transition-transform">{vertical.icon}</div>
                <h3 className="text-2xl font-black text-gray-900 dark:text-white mb-8 tracking-tight font-gotham lowercase">{vertical.title}</h3>
                <ul className="space-y-4">
                  {vertical.items.map(item => (
                    <li key={item} className="flex items-center space-x-3 text-sm text-gray-500 dark:text-gray-400 font-medium">
                      <CheckCircle className="text-brand-blue/40" size={14} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* NEW SECTION: Technical Integration for Enterprise */}
        <section className="py-40 border-t border-black/5 dark:border-white/5 bg-brand-blue/[0.01]">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="order-2 lg:order-1 animate-reveal px-4">
              <div className="p-1 glass-panel rounded-[32px] md:rounded-[48px] border-black/5 dark:border-white/10 shadow-2xl">
                <div className="bg-gray-900 rounded-[31px] md:rounded-[47px] p-6 md:p-10 font-mono text-xs text-gray-300 overflow-x-auto no-scrollbar">
                  <div className="flex space-x-2 mb-6 opacity-30">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  </div>
                  <p className="text-purple-400"># Waletz Enterprise Module</p>
                  <p className="text-green-300">GET /v2/enterprise/liquidity/mesh</p>
                  <div className="mt-4 p-4 bg-black/40 rounded-xl whitespace-pre">
                    <p>{"{"}</p>
                    <p className="pl-6">"status": <span className="text-yellow-200">"converged"</span>,</p>
                    <p className="pl-6">"nodes": <span className="text-yellow-200">18492</span>,</p>
                    <p className="pl-6">"latency": <span className="text-yellow-200">"0.42ms"</span></p>
                    <p>{"}"}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2 animate-reveal px-4">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-brand-blue/10 border border-brand-blue/20 text-brand-blue text-[10px] font-black tracking-widest mb-10 uppercase">
                Developer First Enterprise
              </div>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 dark:text-white tracking-tighter lowercase font-gotham mb-8 leading-[1.1] sm:leading-none">Programmable <br /> <span className="text-brand-blue italic">Institutional Control.</span></h2>
              <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-12 leading-relaxed font-medium">
                Bridge your core banking infrastructure directly to our liquidity mesh. Automate complex treasury movements with our high-volume programmatic gateway.
              </p>
              <div className="flex flex-wrap gap-6">
                <Link to="/developers" className="flex items-center space-x-3 text-brand-blue font-black uppercase tracking-widest text-[10px] hover:underline transition-all">
                  <Terminal size={16} /> <span>Explore Enterprise API</span>
                </Link>
                <Link to="/api-reference" className="flex items-center space-x-3 text-gray-500 dark:text-gray-400 font-black uppercase tracking-widest text-[10px] hover:text-brand-blue transition-colors">
                  <Rocket size={16} /> <span>API Specs</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Technical Capabilities Grid */}
        <section className="py-40 border-t border-black/5 dark:border-white/5 relative">
          <div className="flex flex-col lg:flex-row justify-between lg:items-end gap-12 md:gap-16 mb-24 md:mb-32 px-4">
            <div className="max-w-3xl">
              <h2 className="text-4xl sm:text-5xl md:text-7xl font-black mb-8 md:mb-10 text-gray-900 dark:text-white tracking-tighter leading-[1.1] sm:leading-tight font-gotham lowercase text-glow">Liquid Intelligence for <span className="text-brand-blue italic">Global Portfolios.</span></h2>
              <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 leading-relaxed font-medium opacity-80">Our proprietary clearing engine eliminates the friction of legacy banking, providing a unified settlement layer for fiat and digital capital.</p>
            </div>
            <div className="grid grid-cols-2 gap-4 md:gap-6 w-full lg:w-auto">
              <div className="p-6 md:p-10 glass-panel rounded-3xl md:rounded-[40px] text-center flex-1 border border-black/5 dark:border-white/5 shadow-2xl">
                <div className="text-2xl md:text-4xl font-black text-brand-blue mb-2 font-gotham">99.99%</div>
                <div className="text-[9px] md:text-[11px] font-black uppercase tracking-[0.2em] md:tracking-[0.3em] text-gray-400 dark:text-gray-500">Service Uptime</div>
              </div>
              <div className="p-6 md:p-10 glass-panel rounded-3xl md:rounded-[40px] text-center flex-1 border border-black/5 dark:border-white/5 shadow-2xl">
                <div className="text-2xl md:text-4xl font-black text-brand-blue mb-2 font-gotham">10ms</div>
                <div className="text-[9px] md:text-[11px] font-black uppercase tracking-[0.2em] md:tracking-[0.3em] text-gray-400 dark:text-gray-500">API Latency</div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 px-4">
            {[
              { title: 'Custodial Logic', icon: <Key size={32} />, desc: 'Programmable custodial accounts with granular role-based access controls and multi-sig authorization.' },
              { title: 'Sweep Protocol', icon: <Activity size={32} />, desc: 'Autonomous capital aggregation nightly into high-yield, low-risk institutional instruments.' },
              { title: 'Global Compliance', icon: <Shield size={32} />, desc: 'Integrated real-time AML and KYC screening via our dedicated global compliance nodes across 150+ countries.' }
            ].map((box, i) => (
              <div key={i} className="p-10 md:p-16 glass-panel rounded-[40px] md:rounded-[64px] border border-black/5 dark:border-white/5 hover:border-brand-blue/40 transition-all group relative overflow-hidden h-full flex flex-col shadow-2xl">
                <div className="text-brand-blue mb-10 md:mb-12 group-hover:scale-110 transition-transform flex justify-center lg:justify-start">
                  <div className="w-16 md:w-20 h-16 md:h-20 bg-brand-blue/10 rounded-[24px] md:rounded-3xl flex items-center justify-center shadow-lg group-hover:bg-brand-blue group-hover:text-white transition-all">
                    {box.icon}
                  </div>
                </div>
                <h3 className="text-3xl md:text-4xl font-black mb-6 md:mb-8 text-gray-900 dark:text-white tracking-tighter leading-none font-gotham lowercase">{box.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-base md:text-lg mb-10 md:mb-12 font-medium opacity-80">{box.desc}</p>
                <div className="mt-auto h-2 w-full bg-black/5 dark:bg-white/5 rounded-full overflow-hidden">
                  <div className="h-full bg-brand-blue w-2/3 animate-pulse"></div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Enterprise CTA */}
        <section className="mt-40 p-20 lg:p-32 glass-panel rounded-[80px] text-center relative overflow-hidden group border border-black/5 dark:border-white/10 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.4)]">
          <div className="relative z-10 max-w-4xl mx-auto px-4">
            <BarChart3 className="text-brand-blue mx-auto mb-12 md:mb-16 animate-float" size={80} />
            <h2 className="text-5xl md:text-8xl font-black mb-10 md:mb-12 text-gray-900 dark:text-white tracking-tighter leading-[1] md:leading-none font-gotham lowercase text-glow">The Future of <br /> <span className="text-brand-blue italic">Capital Command.</span></h2>
            <p className="text-lg md:text-2xl text-gray-600 dark:text-gray-400 mb-16 md:mb-20 leading-relaxed font-medium opacity-80">
              Connect to institutional-grade liquidity and automated settlement through a single, secure programmatic gateway covering 150+ countries.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-6 sm:gap-12 w-full max-w-3xl mx-auto">
              <Link to="/talk-to-sales" className="w-full sm:w-auto px-10 md:px-16 py-5 md:py-8 bg-brand-blue text-white font-black rounded-2xl md:rounded-3xl hover:bg-blue-600 transition-all text-xl md:text-2xl shadow-xl shadow-blue-500/30 border border-white/10 active:scale-95 font-gotham lowercase text-center">
                Consult our Core Team
              </Link>
              <Link to="/resources" className="w-full sm:w-auto px-10 md:px-16 py-5 md:py-8 glass-panel text-gray-900 dark:text-white font-black rounded-2xl md:rounded-3xl border border-black/5 dark:border-white/10 hover:bg-black/5 dark:hover:bg-white/10 transition-all text-xl md:text-2xl font-gotham lowercase text-center">
                System Docs
              </Link>
            </div>
          </div>
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-blue/5 blur-[150px] rounded-full pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-brand-cyan/5 blur-[150px] rounded-full pointer-events-none"></div>
        </section>
      </div>
    </div>
  );
};

export default Enterprise;
