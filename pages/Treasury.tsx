
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Zap, Shield, Activity, Globe, ArrowRight, BarChart3, TrendingUp, Cpu, PieChart, Coins, Briefcase, Zap as Bolt, Database, RefreshCcw, Layout, FileText } from 'lucide-react';

const Treasury: React.FC = () => {
  return (
    <div className="min-h-screen pt-44 pb-32 px-4 transition-colors overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <Link to="/" className="inline-flex items-center space-x-2 text-gray-500 hover:text-gray-900 dark:hover:text-white mb-12 md:mb-16 transition-all group animate-reveal px-4">
          <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
          <span className="font-bold uppercase text-[10px] tracking-widest">Platform Core</span>
        </Link>

        <div className="grid lg:grid-cols-2 gap-16 md:gap-24 items-center mb-32 md:mb-60 px-4">
          <div className="animate-reveal delay-100">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-500 text-[10px] font-bold tracking-widest mb-10 uppercase">
              Autonomous Liquidity Protocol
            </div>
            <h1 className="text-5xl sm:text-7xl md:text-8xl font-black mb-10 text-gray-900 dark:text-white leading-[1] md:leading-[0.9] tracking-tighter font-gotham text-glow lowercase">Your capital, <br /> <span className="text-brand-blue italic">unlocked.</span></h1>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-14 leading-relaxed max-w-xl font-medium">
              waletz treasury provides autonomous liquidity routing, real-time exposure monitoring, and multi-currency yield optimization in one unified infrastructure.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 md:gap-6">
              <Link to="/talk-to-sales" className="w-full sm:w-auto px-10 py-5 bg-blue-600 hover:bg-blue-500 text-white font-black rounded-2xl transition-all text-center shadow-xl shadow-blue-600/20 group font-gotham lowercase">
                Request Demo <ArrowRight className="inline ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/documentation" className="w-full sm:w-auto px-10 py-5 glass-panel text-gray-900 dark:text-white font-black rounded-2xl transition-all text-center font-gotham lowercase">
                API Docs
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 animate-reveal delay-200">
            {[
              { label: 'Real-time Visibility', desc: 'Unified view of global balances with sub-second latency.', icon: <Activity />, delay: '0s' },
              { label: 'Autonomous Yield', desc: 'Dynamic capital routing to top-tier financial instruments.', icon: <TrendingUp />, delay: '0.1s' },
              { label: 'Edge Liquidity', desc: 'Move millions across 150+ regions via high-velocity nodes.', icon: <Globe />, delay: '0.2s' },
              { label: 'Risk AI', desc: 'Predictive FX hedging and credit risk monitoring.', icon: <Shield />, delay: '0.3s' }
            ].map((card, i) => (
              <div
                key={i}
                className="p-8 md:p-10 rounded-[32px] md:rounded-[40px] glass-panel border-black/5 dark:border-white/5 space-y-6 animate-reveal shadow-xl"
                style={{ animationDelay: card.delay }}
              >
                <div className="w-12 h-12 md:w-14 md:h-14 bg-blue-600/10 rounded-xl md:rounded-2xl flex items-center justify-center text-blue-500">
                  {card.icon}
                </div>
                <h4 className="font-black text-lg md:text-xl text-gray-900 dark:text-white tracking-tight leading-tight lowercase font-gotham">{card.label}</h4>
                <p className="text-[13px] md:text-sm text-gray-500 leading-relaxed opacity-80 font-medium">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Multi-Asset Engine - NEW SECTION */}
        <section className="py-24 md:py-40 border-t border-black/5 dark:border-white/5 relative px-4">
          <div className="max-w-4xl mx-auto text-center mb-24 md:mb-32">
            <h2 className="text-4xl md:text-7xl font-black text-gray-900 dark:text-white tracking-tighter lowercase font-gotham mb-8 leading-none px-4">Multi-Asset <span className="text-brand-blue italic">Engine.</span></h2>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 font-medium px-4">Manage complex treasury allocations across fiat, commodities, and digital assets from a single point of truth.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {[
              { title: 'Liquidity Pools', icon: <RefreshCcw />, detail: 'Direct access to institutional liquidity pools for deep-volume execution.' },
              { title: 'Asset Bridge', icon: <Layout />, detail: 'Seamless settlement between legacy banking rails and digital networks.' },
              { title: 'Oracle Sync', icon: <Database />, detail: 'Real-time price feed integration from 40+ global asset markets.' },
              { title: 'Legal Tenders', icon: <FileText />, detail: 'Native support for 120+ local currencies with instant clearing.' }
            ].map((item, i) => (
              <div key={i} className="p-10 md:p-12 glass-panel rounded-[32px] md:rounded-[48px] border-black/5 dark:border-white/5 hover:border-brand-blue/30 transition-all group shadow-2xl">
                <div className="text-brand-blue mb-8 group-hover:rotate-12 transition-transform">
                  {item.icon}
                </div>
                <h4 className="text-xl font-black text-gray-900 dark:text-white mb-4 lowercase font-gotham">{item.title}</h4>
                <p className="text-[13px] md:text-sm text-gray-500 leading-relaxed font-medium">{item.detail}</p>
              </div>
            ))}
          </div>
        </section>

        {/* USE CASES */}
        <section className="py-24 md:py-40 border-t border-black/5 dark:border-white/5 px-4">
          <div className="text-center mb-16 md:mb-24 px-4">
            <h2 className="text-4xl md:text-7xl font-black text-gray-900 dark:text-white tracking-tighter font-gotham lowercase mb-6 leading-none">Designed for use.</h2>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto font-medium">Treasury infrastructure that adapts to your operational complexity.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {[
              { title: 'Global Payroll', icon: <Briefcase />, desc: 'Settle employee and contractor payments in 120+ currencies through a single API call. Automatic FX optimization included.' },
              { title: 'Liquidity Sweeping', icon: <Bolt />, desc: 'Minimize idle balances. Automatically sweep excess capital into safe, low-risk yield instruments at EOD.' },
              { title: 'Partner Payouts', icon: <Coins />, desc: 'Scale marketplace payouts to thousands of vendors globally with real-time tracking and zero-latency settlement.' },
              { title: 'Corporate Governance', icon: <Shield />, desc: 'Granular role-based access for your finance team with multi-sig approval flows for all treasury movements.' }
            ].map((useCase, i) => (
              <div key={i} className="p-10 md:p-16 glass-panel rounded-[40px] md:rounded-[56px] border-black/5 dark:border-white/5 hover:border-brand-blue/20 transition-all group flex flex-col sm:flex-row gap-8 shadow-2xl">
                <div className="w-14 h-14 md:w-16 md:h-16 bg-brand-blue/10 rounded-xl md:rounded-2xl flex items-center justify-center text-brand-blue shrink-0 group-hover:bg-brand-blue group-hover:text-white transition-all shadow-lg">
                  {useCase.icon}
                </div>
                <div>
                  <h3 className="text-2xl md:text-3xl font-black text-gray-900 dark:text-white mb-4 tracking-tight lowercase font-gotham">{useCase.title}</h3>
                  <p className="text-[15px] md:text-lg text-gray-600 dark:text-gray-500 leading-relaxed font-medium opacity-80">{useCase.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Technical Stack Section */}
        <section className="py-24 md:py-40 relative border-t border-black/5 dark:border-white/5 px-4">
          <div className="flex flex-col lg:flex-row justify-between lg:items-end gap-12 mb-16 md:mb-24 px-4 text-left">
            <div className="max-w-2xl">
              <h2 className="text-4xl md:text-6xl font-black mb-8 text-gray-900 dark:text-white tracking-tighter font-gotham lowercase leading-none">Liquid <br className="sm:hidden" /> Intelligence.</h2>
              <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 leading-relaxed font-medium opacity-80">Our proprietary routing engine eliminates the friction of manual bank transfers and currency swaps across 150+ countries.</p>
            </div>
            <div className="flex gap-4">
              <div className="flex-1 sm:flex-none p-6 md:p-8 glass-panel rounded-2xl md:rounded-3xl text-center min-w-[140px] md:min-w-[160px] border-black/5 dark:border-white/5 shadow-xl">
                <div className="text-2xl md:text-3xl font-black text-blue-500 mb-1">0.02%</div>
                <div className="text-[9px] md:text-[10px] font-black uppercase tracking-widest text-gray-400 dark:text-gray-500">Avg. Slippage</div>
              </div>
              <div className="flex-1 sm:flex-none p-6 md:p-8 glass-panel rounded-2xl md:rounded-3xl text-center min-w-[140px] md:min-w-[160px] border-black/5 dark:border-white/5 shadow-xl">
                <div className="text-2xl md:text-3xl font-black text-blue-500 mb-1">10k+</div>
                <div className="text-[9px] md:text-[10px] font-black uppercase tracking-widest text-gray-400 dark:text-gray-500">Daily Routes</div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 px-4">
            {[
              { title: 'Predictive Flow', icon: <Cpu />, desc: 'AI analyzes your historical flow to forecast liquidity gaps 30 days in advance.' },
              { title: 'Global Sweep', icon: <PieChart />, desc: 'Automatically aggregate small balances into high-yield treasury accounts nightly.' },
              { title: 'Compliance Node', icon: <Shield />, desc: 'Every transaction undergoes real-time AML screening on our dedicated security node across global corridors.' }
            ].map((box, i) => (
              <div key={i} className="p-10 md:p-12 glass-panel rounded-[32px] md:rounded-[48px] hover:scale-[1.02] transition-transform group border-black/5 dark:border-white/5 shadow-2xl">
                <div className="text-blue-500 mb-8 md:mb-10 group-hover:scale-110 transition-transform">{box.icon}</div>
                <h3 className="text-2xl md:text-3xl font-black mb-6 text-gray-900 dark:text-white tracking-tighter leading-none font-gotham lowercase">{box.title}</h3>
                <p className="text-[13px] md:text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-10 md:mb-12 font-medium opacity-80">{box.desc}</p>
                <div className="h-1 w-full bg-black/5 dark:bg-white/5 rounded-full overflow-hidden">
                  <div className="h-full bg-blue-600 w-1/3 animate-pulse"></div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Call to action */}
        <section className="mt-24 md:mt-40 p-10 md:p-16 lg:p-24 glass-panel rounded-[40px] md:rounded-[64px] text-center relative overflow-hidden group border-black/10 dark:border-white/10 shadow-2xl mx-4">
          <div className="relative z-10 max-w-3xl mx-auto px-4">
            <BarChart3 className="text-blue-500 mx-auto mb-8 md:mb-10 animate-float" size={48} md:size={64} />
            <h2 className="text-3xl md:text-7xl font-black mb-8 md:mb-10 text-gray-900 dark:text-white tracking-tighter font-gotham lowercase leading-none">Automate your <br /> global treasury.</h2>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-12 md:mb-16 leading-relaxed font-medium opacity-80">
              Access institutional-grade liquidity and automated yield instruments through one programmatic interface across 150+ countries.
            </p>
            <Link to="/talk-to-sales" className="w-full sm:w-auto px-10 md:px-14 py-5 md:py-6 bg-brand-blue text-white font-black rounded-2xl hover:scale-105 transition-all text-lg shadow-2xl font-gotham lowercase text-center inline-block">
              Schedule a Demo
            </Link>
          </div>
          <div className="absolute top-0 right-0 w-64 md:w-96 h-64 md:h-96 bg-blue-600/10 blur-[120px] rounded-full"></div>
          <div className="absolute bottom-0 left-0 w-64 md:w-96 h-64 md:h-96 bg-cyan-500/10 blur-[120px] rounded-full"></div>
        </section>
      </div>
    </div>
  );
};

export default Treasury;
