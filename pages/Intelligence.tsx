
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, BarChart3, LineChart, Target, Brain, Search, TrendingUp, ShieldAlert, Workflow, Cpu, Layers, Database } from 'lucide-react';

const Intelligence: React.FC = () => {
  return (
    <div className="min-h-screen pt-44 pb-32 px-4 transition-colors overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <Link to="/" className="inline-flex items-center space-x-2 text-gray-500 hover:text-gray-900 dark:hover:text-white mb-10 md:mb-12 transition-all group animate-reveal px-4">
          <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
          <span className="font-bold uppercase text-[10px] tracking-widest">Analytics Core</span>
        </Link>

        <div className="grid lg:grid-cols-2 gap-16 md:gap-20 items-center mb-32 md:mb-40 px-4">
          <div className="animate-reveal delay-100">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-600 dark:text-purple-400 text-[10px] font-bold tracking-widest mb-8 uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-purple-500 animate-pulse"></span>
              Financial Intelligence v2.0
            </div>
            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black mb-8 text-gray-900 dark:text-white leading-[1] md:leading-[0.9] tracking-tighter font-gotham text-glow lowercase">Data with <br /> <span className="text-brand-blue italic">a vision.</span></h1>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-12 leading-relaxed max-w-xl font-medium">
              Unlock the narrative within your transaction data. waletz Intelligence uses proprietary AI to predict cash flow gaps, identify fraudulent patterns, and surface growth opportunities.
            </p>
            <Link to="/create-account" className="w-full sm:w-auto px-10 py-5 bg-brand-blue hover:bg-blue-600 text-white font-black rounded-2xl transition-all shadow-xl shadow-blue-500/20 inline-block hover:scale-105 active:scale-95 font-gotham lowercase text-center">
              Start Your Analysis
            </Link>
          </div>

          <div className="relative animate-reveal delay-200 flex justify-center items-center py-24 lg:py-20 px-4">
            <div className="relative z-10 scale-90 sm:scale-100">
              <div className="absolute inset-0 bg-brand-blue/20 blur-[100px] rounded-full animate-pulse"></div>
              <div className="w-56 h-56 sm:w-64 sm:h-64 lg:w-80 lg:h-80 rounded-full border border-brand-blue/20 flex items-center justify-center relative animate-rotate-slow">
                <div className="absolute inset-0 border-t-2 border-brand-blue rounded-full"></div>
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-40 h-40 sm:w-48 sm:h-48 lg:w-56 lg:h-56 rounded-full bg-brand-blue/10 border border-brand-blue/30 flex items-center justify-center">
                  <Brain size={60} lg:size={80} className="text-brand-blue animate-float" />
                </div>
              </div>
            </div>

            <div className="absolute top-0 right-0 lg:-right-10 p-4 md:p-6 glass-panel border-black/5 dark:border-white/5 rounded-2xl md:rounded-3xl shadow-2xl flex items-center space-x-3 md:space-x-4 animate-float z-20">
              <div className="p-2 bg-green-500/10 rounded-xl text-green-600"><TrendingUp size={16} md:size={20} /></div>
              <div className="text-[11px] md:text-sm font-black text-gray-900 dark:text-white">+12.4% Predicted Growth</div>
            </div>
            <div className="absolute bottom-0 left-0 lg:-left-10 p-4 md:p-6 glass-panel border-black/5 dark:border-white/5 rounded-2xl md:rounded-3xl shadow-2xl flex items-center space-x-3 md:space-x-4 animate-float z-20" style={{ animationDelay: '2s' }}>
              <div className="p-2 bg-brand-blue/10 rounded-xl text-brand-blue"><Search size={16} md:size={20} /></div>
              <div className="text-[11px] md:text-sm font-black text-gray-900 dark:text-white">0 Anomalies Detected</div>
            </div>
          </div>
        </div>

        {/* Intelligence Breakdown Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-32 md:mb-40 px-4">
          {[
            { icon: <Target />, title: 'Predictive Cash Flow', desc: 'Forecast future balances with 98% accuracy based on historical cycles and external market data.' },
            { icon: <BarChart3 />, title: 'Spend Intelligence', desc: 'Automatically categorize every expense and identify areas for operational efficiency.' },
            { icon: <Brain />, title: 'Autonomous Compliance', desc: 'AI-driven screening that learns your specific business risk profile over time.' }
          ].map((item, idx) => (
            <div key={idx} className={`p-8 md:p-10 rounded-[28px] md:rounded-[32px] glass-panel border-black/5 dark:border-white/5 hover:border-brand-blue transition-all group animate-reveal shadow-xl`} style={{ animationDelay: `${idx * 0.1}s` }}>
              <div className="w-12 h-12 md:w-14 md:h-14 bg-brand-blue/10 rounded-xl md:rounded-2xl flex items-center justify-center mb-8 text-brand-blue group-hover:bg-brand-blue group-hover:text-white transition-all transform group-hover:scale-110 shadow-sm">
                {item.icon}
              </div>
              <h3 className="text-xl md:text-2xl font-black mb-4 text-gray-900 dark:text-white tracking-tight lowercase font-gotham">{item.title}</h3>
              <p className="text-gray-500 dark:text-gray-400 text-xs md:text-sm leading-relaxed opacity-80 font-medium">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Predictive Models - NEW SECTION */}
        <section className="py-24 md:py-40 border-t border-black/5 dark:border-white/5 px-4">
          <div className="text-center mb-24 md:mb-32 px-4">
            <h2 className="text-4xl md:text-7xl font-black text-gray-900 dark:text-white tracking-tighter lowercase font-gotham mb-8 leading-none">AI <span className="text-brand-blue italic">Verticals.</span></h2>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto font-medium">Domain-specific models trained on billions of transaction events.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
            {[
              { title: 'Fraud Sentinel', icon: <ShieldAlert />, tags: ['Behavioral', 'Velocity'], detail: 'Detects sanctioned-entity signatures and high-velocity asset laundering patterns in real-time.' },
              { title: 'Logic Settle', icon: <Workflow />, tags: ['Routing', 'Cost'], detail: 'Automatically calculates the cheapest, fastest path across 180+ global rails based on liquidity.' },
              { title: 'Capital Forecaster', icon: <LineChart />, tags: ['Treasury', 'Flow'], detail: 'Forecasts operational overhead 90 days out with zero manual data entry required.' },
              { title: 'Anomaly Mesh', icon: <Layers />, tags: ['Compliance', 'Risk'], detail: 'Massively parallel screening of accounts for non-obvious relationship graphs and nested risks.' }
            ].map((model, i) => (
              <div key={i} className="p-10 md:p-12 glass-panel rounded-[40px] md:rounded-[56px] border-black/5 dark:border-white/5 hover:border-brand-blue/30 transition-all group shadow-2xl flex flex-col sm:flex-row gap-8 md:gap-10">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-brand-blue/10 rounded-2xl md:rounded-3xl flex items-center justify-center text-brand-blue shrink-0 group-hover:bg-brand-blue group-hover:text-white transition-all shadow-lg">
                  {model.icon}
                </div>
                <div>
                  <div className="flex flex-wrap items-center gap-2 md:gap-3 mb-4">
                    {model.tags.map(t => <span key={t} className="text-[8px] md:text-[9px] font-black uppercase tracking-widest text-brand-blue bg-brand-blue/5 px-2.5 md:px-3 py-1 rounded-full">{t}</span>)}
                  </div>
                  <h4 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4 tracking-tight lowercase font-gotham">{model.title}</h4>
                  <p className="text-xs md:text-sm text-gray-500 dark:text-gray-400 leading-relaxed font-medium">{model.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Intelligence CTA */}
        <section className="mt-24 md:mt-40 p-10 md:p-16 lg:p-20 glass-panel rounded-[40px] md:rounded-[80px] text-center border-black/5 dark:border-white/5 shadow-2xl relative overflow-hidden group mx-4">
          <div className="relative z-10 px-4">
            <Cpu className="text-brand-blue mx-auto mb-8 md:mb-10 animate-pulse" size={48} md:size={64} />
            <h2 className="text-3xl md:text-7xl font-black text-gray-900 dark:text-white tracking-tighter lowercase font-gotham mb-8 md:mb-10 leading-none">Ready for <br className="sm:hidden" /> <span className="text-brand-blue italic">Automated Strategy?</span></h2>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-12 md:mb-16 max-w-2xl mx-auto font-medium">Connect your enterprise ledger to the Waletz Intelligence Mesh and begin forecasting in seconds.</p>
            <Link to="/talk-to-sales" className="w-full sm:w-auto px-10 md:px-16 py-5 md:py-8 bg-brand-blue text-white font-black rounded-2xl md:rounded-3xl hover:bg-blue-600 transition-all text-xl md:text-2xl font-gotham lowercase inline-block text-center shadow-xl shadow-blue-500/20">
              Initialize Intelligence
            </Link>
          </div>
          <div className="absolute top-0 right-0 w-64 md:w-[500px] h-64 md:h-[500px] bg-brand-blue/5 blur-[120px] rounded-full group-hover:bg-brand-blue/10 transition-colors"></div>
        </section>
      </div>
    </div>
  );
};

export default Intelligence;
