
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Globe, Zap, Shield, ChevronDown, CheckCircle2, TrendingUp, Info, Bell, CreditCard, Sparkles, Coffee, BarChart3, Search, Activity, Users, Code, Cpu, Layers, Server, Workflow, Database, Network, Clock, Terminal, BookOpen, Code2 } from 'lucide-react';

const INITIAL_CURRENCIES = [
  { code: 'GBP', name: 'British Pound', flag: 'https://flagcdn.com/w40/gb.png', rate: 1.0 },
  { code: 'EUR', name: 'Euro', flag: 'https://flagcdn.com/w40/eu.png', rate: 1.17 },
  { code: 'USD', name: 'US Dollar', flag: 'https://flagcdn.com/w40/us.png', rate: 1.26 },
  { code: 'JPY', name: 'Japanese Yen', flag: 'https://flagcdn.com/w40/jp.png', rate: 191.4 },
  { code: 'AUD', name: 'Australian Dollar', flag: 'https://flagcdn.com/w40/au.png', rate: 1.94 },
  { code: 'CAD', name: 'Canadian Dollar', flag: 'https://flagcdn.com/w40/ca.png', rate: 1.73 },
  { code: 'SGD', name: 'Singapore Dollar', flag: 'https://flagcdn.com/w40/sg.png', rate: 1.71 },
];

const Home: React.FC = () => {
  const [sendAmount, setSendAmount] = useState(1000);
  const [currencies, setCurrencies] = useState(INITIAL_CURRENCIES);
  const [sourceCurrency, setSourceCurrency] = useState(INITIAL_CURRENCIES[0]);
  const [targetCurrency, setTargetCurrency] = useState(INITIAL_CURRENCIES[1]);
  const [isSourceOpen, setIsSourceOpen] = useState(false);
  const [isTargetOpen, setIsTargetOpen] = useState(false);
  const [isCalculating, setIsCalculating] = useState(false);
  const [lastUpdated, setLastUpdated] = useState<Date>(new Date());

  const fee = 6.45;

  useEffect(() => {
    const updateRates = () => {
      setIsCalculating(true);
      const newCurrencies = currencies.map(c => {
        if (c.code === 'GBP') return c;
        const fluctuation = 1 + (Math.random() * 0.001 - 0.0005);
        return { ...c, rate: c.rate * fluctuation };
      });

      setCurrencies(newCurrencies);
      setSourceCurrency(newCurrencies.find(c => c.code === sourceCurrency.code) || newCurrencies[0]);
      setTargetCurrency(newCurrencies.find(c => c.code === targetCurrency.code) || newCurrencies[1]);
      setLastUpdated(new Date());

      setTimeout(() => setIsCalculating(false), 600);
    };

    const interval = setInterval(updateRates, 15000);
    return () => clearInterval(interval);
  }, [currencies, sourceCurrency.code, targetCurrency.code]);

  const currentRate = targetCurrency.rate / sourceCurrency.rate;
  const receiveAmount = (sendAmount - fee) * currentRate;

  return (
    <div className="overflow-hidden transition-colors">
      {/* Hero Section */}
      <section className="relative pt-44 lg:pt-64 pb-32 lg:pb-48 px-4">
        <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
          <div className="inline-flex items-center space-x-3 px-5 py-2 rounded-full bg-brand-blue/10 border border-brand-blue/20 text-brand-blue text-[11px] font-black tracking-[0.25em] uppercase mb-16 animate-reveal shadow-[0_0_40px_rgba(13,89,242,0.15)]">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-blue opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-blue"></span>
            </span>
            <span>waletz network: v2.5 live</span>
          </div>

          <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-[110px] font-black mb-12 text-gray-900 dark:text-white leading-[1] sm:leading-[0.9] tracking-tighter animate-reveal delay-100 font-gotham text-glow px-4">
            The Future Of <br /> <span className="text-brand-blue italic filter drop-shadow-[0_0_50px_rgba(13,89,242,0.35)]">Finance Made Easy.</span>
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-20 max-w-3xl leading-relaxed font-medium animate-reveal delay-200 px-6">
            Autonomous capital routing and predictive treasury for the next generation of global builders. Experience zero-latency value movement.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-40 animate-reveal delay-300 w-full px-6">
            <Link to="/create-account" className="w-full sm:w-auto px-10 md:px-14 py-5 md:py-7 bg-brand-blue hover:bg-blue-600 text-white font-black rounded-3xl md:rounded-[32px] transition-all shadow-lg shadow-blue-500/30 text-xl md:text-2xl flex items-center justify-center group active:scale-95 border border-black/10 dark:border-white/10">
              Start Settle <ArrowRight className="ml-4 group-hover:translate-x-3 transition-transform" />
            </Link>
            <Link to="/talk-to-sales" className="w-full sm:w-auto px-10 md:px-14 py-5 md:py-7 glass-panel text-gray-900 dark:text-white font-black rounded-3xl md:rounded-[32px] border border-black/10 dark:border-white/10 hover:bg-black/5 dark:hover:bg-white/10 transition-all text-xl md:text-2xl">
              Contact Core
            </Link>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 w-full max-w-7xl relative">
            {/* Calculator UI */}
            <div className="glass-panel rounded-[56px] p-10 lg:p-14 text-left animate-reveal delay-400 relative overflow-hidden group/converter border-black/10 dark:border-white/10 shadow-2xl">
              <div className="absolute top-0 right-0 p-8 opacity-10 group-hover/converter:opacity-30 transition-all duration-700">
                <Zap size={140} className="text-brand-blue animate-pulse-slow" />
              </div>

              <div className="flex justify-between items-center mb-10 relative z-10">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-brand-blue/10 rounded-xl flex items-center justify-center text-brand-blue">
                    <Activity size={20} className="animate-pulse" />
                  </div>
                  <h3 className="text-sm font-black text-brand-blue uppercase tracking-[0.3em]">waletz exchange core</h3>
                </div>
                <div className="text-[10px] text-gray-500 font-bold uppercase tracking-widest bg-black/5 dark:bg-white/5 px-3 py-1 rounded-full border border-black/5 dark:border-white/5">
                  Last Sync: {lastUpdated.toLocaleTimeString()}
                </div>
              </div>

              <div className="space-y-2 relative z-10">
                <label className="text-[10px] font-black text-gray-500 uppercase tracking-[0.2em] ml-2">Source Assets</label>
                <div className="flex items-center bg-black/5 dark:bg-black/40 border border-black/10 dark:border-white/10 rounded-3xl md:rounded-[32px] px-6 md:px-8 py-5 md:py-7 focus-within:border-brand-blue transition-all group/input shadow-2xl">
                  <input
                    type="number"
                    value={sendAmount}
                    onChange={(e) => setSendAmount(Number(e.target.value))}
                    className="bg-transparent border-none text-3xl md:text-4xl font-black text-gray-900 dark:text-white focus:outline-none w-full placeholder-black/20 dark:placeholder-white/20"
                  />
                  <div
                    onClick={() => { setIsSourceOpen(!isSourceOpen); setIsTargetOpen(false); }}
                    className="flex items-center space-x-3 md:space-x-4 cursor-pointer bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 px-3 md:px-5 py-2 md:py-3 rounded-2xl border border-black/10 dark:border-white/10 transition-all shrink-0 active:scale-95 shadow-lg"
                  >
                    <img src={sourceCurrency.flag} className="w-6 md:w-7 h-4 md:h-5 rounded-sm object-cover shadow-md" alt={sourceCurrency.code} />
                    <span className="font-black text-base md:text-lg text-gray-900 dark:text-white">{sourceCurrency.code}</span>
                    <ChevronDown size={14} className={`transition-transform duration-300 text-gray-900 dark:text-white ${isSourceOpen ? 'rotate-180' : ''}`} />
                  </div>
                </div>

                {isSourceOpen && (
                  <div className="absolute top-full right-0 mt-3 w-72 glass-panel rounded-3xl shadow-2xl p-4 z-50 grid gap-2 border border-black/10 dark:border-white/20 animate-reveal">
                    {currencies.map(c => (
                      <button key={c.code} onClick={() => { setSourceCurrency(c); setIsSourceOpen(false); }} className="flex items-center space-x-4 p-4 rounded-2xl hover:bg-brand-blue/20 text-left transition-all group/item border border-transparent hover:border-brand-blue/30">
                        <img src={c.flag} className="w-8 h-5 rounded-sm shadow-md" alt={c.code} />
                        <div>
                          <div className="font-black text-sm text-gray-900 dark:text-white group-hover/item:text-brand-blue">{c.code}</div>
                          <div className="text-[10px] text-gray-500 font-bold uppercase">{c.name}</div>
                        </div>
                      </button>
                    ))}
                  </div>
                )}
              </div>

              <div className="my-10 relative pl-12 border-l-2 border-dashed border-black/5 dark:border-white/5 ml-8 space-y-10">
                <div className="relative">
                  <div className="absolute -left-[53px] top-1/2 -translate-y-1/2 w-6 h-6 bg-white dark:bg-brand-surface border-4 border-black/5 dark:border-white/10 rounded-full flex items-center justify-center">
                    <div className="w-1.5 h-1.5 bg-gray-400 dark:bg-gray-500 rounded-full"></div>
                  </div>
                  <div className="flex justify-between items-center group/fee cursor-help">
                    <div className="text-[11px] font-black text-gray-500 uppercase flex items-center">
                      {fee.toFixed(2)} {sourceCurrency.code} waletz fee <Info size={12} className="ml-2 opacity-50" />
                    </div>
                    <span className="text-[10px] text-brand-cyan font-bold tracking-widest uppercase animate-pulse">atomic routing</span>
                  </div>
                </div>
                <div className="relative">
                  <div className="absolute -left-[53px] top-1/2 -translate-y-1/2 w-6 h-6 bg-brand-blue border-4 border-white dark:border-brand-dark rounded-full shadow-[0_0_20px_rgba(13,89,242,0.6)] animate-pulse"></div>
                  <div className="flex justify-between items-center">
                    <div className="text-[11px] font-black text-brand-blue uppercase tracking-widest flex items-center">
                      <span className="inline-block w-2 h-2 bg-brand-blue rounded-full mr-2 animate-ping"></span>
                      {currentRate.toFixed(6)} live rate
                    </div>
                    <div className="flex items-center space-x-1">
                      <span className="text-[10px] text-brand-blue font-black uppercase italic tracking-tighter shadow-sm">fixed for 2h</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-2 relative z-10">
                <label className="text-[10px] font-black text-gray-500 uppercase tracking-[0.2em] ml-2">Target Settlement</label>
                <div className="flex items-center bg-black/5 dark:bg-black/40 border border-black/10 dark:border-white/10 rounded-3xl md:rounded-[32px] px-6 md:px-8 py-5 md:py-7 shadow-2xl relative overflow-hidden group/output">
                  {isCalculating && <div className="absolute inset-0 bg-gradient-to-r from-transparent via-brand-blue/5 to-transparent animate-shimmer" style={{ backgroundSize: '200% 100%' }}></div>}
                  <div className="text-3xl md:text-4xl font-black text-gray-900 dark:text-white w-full flex items-center">
                    {isCalculating ? (
                      <div className="flex space-x-1">
                        <div className="w-2 h-8 bg-brand-blue/20 rounded-full animate-pulse"></div>
                        <div className="w-2 h-8 bg-brand-blue/20 rounded-full animate-pulse delay-75"></div>
                        <div className="w-2 h-8 bg-brand-blue/20 rounded-full animate-pulse delay-150"></div>
                      </div>
                    ) : receiveAmount.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                  </div>
                  <div
                    onClick={() => { setIsTargetOpen(!isTargetOpen); setIsSourceOpen(false); }}
                    className="flex items-center space-x-3 md:space-x-4 cursor-pointer bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 px-3 md:px-5 py-2 md:py-3 rounded-2xl border border-black/10 dark:border-white/10 transition-all shrink-0 active:scale-95 shadow-lg"
                  >
                    <img src={targetCurrency.flag} className="w-6 md:w-7 h-4 md:h-5 rounded-sm object-cover shadow-md" alt={targetCurrency.code} />
                    <span className="font-black text-base md:text-lg text-gray-900 dark:text-white">{targetCurrency.code}</span>
                    <ChevronDown size={14} className={`transition-transform duration-300 text-gray-900 dark:text-white ${isTargetOpen ? 'rotate-180' : ''}`} />
                  </div>
                </div>
                {isTargetOpen && (
                  <div className="absolute top-full right-0 mt-3 w-72 glass-panel rounded-3xl shadow-2xl p-4 z-50 grid gap-2 border border-black/10 dark:border-white/20 animate-reveal">
                    {currencies.map(c => (
                      <button key={c.code} onClick={() => { setTargetCurrency(c); setIsTargetOpen(false); }} className="flex items-center space-x-4 p-4 rounded-2xl hover:bg-brand-blue/20 text-left transition-all group/item border border-transparent hover:border-brand-blue/30">
                        <img src={c.flag} className="w-8 h-5 rounded-sm shadow-md" alt={c.code} />
                        <div>
                          <div className="font-black text-sm text-gray-900 dark:text-white group-hover/item:text-brand-blue">{c.code}</div>
                          <div className="text-[10px] text-gray-500 font-bold uppercase">{c.name}</div>
                        </div>
                      </button>
                    ))}
                  </div>
                )}
              </div>

              <button className="w-full mt-12 py-7 bg-brand-blue text-white font-black rounded-[32px] hover:bg-blue-600 transition-all shadow-[0_20px_40px_-10px_rgba(13,89,242,0.4)] active:scale-95 text-xl border border-black/10 dark:border-white/10 group/btn">
                Settle {sendAmount} {sourceCurrency.code} Now <ArrowRight className="inline ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Intelligence UI */}
            <div className="bg-white dark:bg-[#0b0d11] rounded-[56px] p-10 lg:p-14 border border-black/5 dark:border-white/5 shadow-2xl text-left animate-reveal delay-500 flex flex-col h-full overflow-hidden group/intel">
              <div className="flex justify-between items-center mb-20 relative z-10">
                <div className="flex items-center space-x-4">
                  <div className="w-14 h-14 rounded-2xl overflow-hidden border-2 border-brand-blue/30 p-1 bg-black/5 dark:bg-white/5">
                    <div className="w-full h-full bg-brand-blue/10 rounded-xl flex items-center justify-center">
                      <Users className="text-brand-blue" size={24} />
                    </div>
                  </div>
                  <div>
                    <div className="text-xs font-black text-gray-900 dark:text-white uppercase tracking-widest">global vault</div>
                    <div className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">master key protocol</div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-14 h-14 glass-panel rounded-2xl flex items-center justify-center relative hover:bg-black/5 dark:hover:bg-white/10 transition-colors cursor-pointer border-black/10 dark:border-white/10 shadow-lg">
                    <Bell size={24} className="text-gray-400 group-hover/intel:text-brand-blue transition-colors" />
                    <span className="absolute top-4 right-4 w-2.5 h-2.5 bg-brand-cyan rounded-full border-2 border-white dark:border-brand-dark animate-pulse"></span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col items-center text-center mb-20 relative">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-64 bg-brand-blue/15 blur-[80px] rounded-full pointer-events-none"></div>
                <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-brand-blue/10 border border-brand-blue/20 text-brand-blue text-[10px] font-black uppercase tracking-widest mb-10">
                  <Shield size={14} className="animate-pulse" />
                  <span>vault secured • quantum sync</span>
                </div>
                <div className="text-6xl md:text-8xl lg:text-[100px] font-black text-gray-900 dark:text-white tracking-tighter mb-6 leading-none filter drop-shadow-[0_0_30px_rgba(13,89,242,0.1)]">142,893</div>
                <div className="px-6 py-2 bg-green-500/10 rounded-full text-green-500 text-xs font-black flex items-center border border-green-500/20 shadow-lg shadow-green-500/5">
                  <TrendingUp size={16} className="mr-2" /> +2.4% capital yield
                </div>
              </div>

              <div className="space-y-5 mb-14 relative z-10">
                <div className="flex justify-between items-center px-2 mb-6">
                  <div className="text-[10px] font-black text-gray-500 uppercase tracking-[0.3em]">intelligence stream</div>
                  <Search size={16} className="text-gray-400 dark:text-gray-600 hover:text-brand-blue dark:hover:text-white transition-colors cursor-pointer" />
                </div>

                {[
                  { title: 'smart savings', sub: 'optimizing idle balances', icon: <Sparkles size={22} />, active: true },
                  { title: 'starbucks reserve', sub: 'Today, 8:42 AM', icon: <Coffee size={22} />, active: false, amount: '-$14.50' }
                ].map((item, i) => (
                  <div key={i} className="p-6 bg-black/5 dark:bg-white/5 rounded-[32px] border border-black/5 dark:border-white/5 flex justify-between items-center hover:bg-black/10 dark:hover:bg-white/10 transition-all cursor-pointer group/card active:scale-[0.98] shadow-lg">
                    <div className="flex items-center space-x-5">
                      <div className={`w-14 h-14 bg-black/5 dark:bg-white/5 rounded-2xl flex items-center justify-center text-gray-400 group-hover/card:bg-brand-blue/20 group-hover/card:text-brand-blue transition-all shadow-inner`}>
                        {item.icon}
                      </div>
                      <div>
                        <div className="text-base font-black text-gray-900 dark:text-white">{item.title}</div>
                        <div className="text-[11px] text-gray-500 font-bold uppercase tracking-widest">{item.sub}</div>
                      </div>
                    </div>
                    {item.active ? (
                      <div className="flex flex-col items-end">
                        <span className="text-[10px] font-black text-brand-cyan uppercase tracking-[0.2em] bg-brand-cyan/10 px-4 py-1.5 rounded-full border border-brand-cyan/20">active</span>
                      </div>
                    ) : (
                      <span className="text-base font-black text-gray-900 dark:text-white tracking-tight">{item.amount}</span>
                    )}
                  </div>
                ))}
              </div>

              <div className="mt-auto glass-panel p-2.5 rounded-[32px] flex items-center justify-between border-black/5 dark:border-white/10 relative z-10 shadow-lg">
                <div className="flex flex-col items-center py-3 px-8 opacity-40 hover:opacity-100 transition-opacity cursor-pointer group/nav">
                  <BarChart3 size={22} className="text-gray-600 dark:text-gray-300 mb-1.5 group-hover/nav:text-brand-blue transition-colors" />
                  <span className="text-[9px] font-black text-gray-500 uppercase tracking-widest">analysis</span>
                </div>
                <div className="bg-brand-blue px-12 py-4 rounded-2xl flex items-center space-x-3 shadow-xl shadow-blue-500/30 active:scale-95 transition-all hover:bg-blue-600 group/btn-move">
                  <ArrowRight size={20} className="text-white rotate-[-45deg] group-hover/btn-move:translate-x-1 group-hover/btn-move:-translate-y-1 transition-transform" />
                  <span className="text-[11px] font-black text-white uppercase tracking-[0.3em]">move money</span>
                </div>
                <div className="flex flex-col items-center py-3 px-8 opacity-40 hover:opacity-100 transition-opacity cursor-pointer group/nav">
                  <CreditCard size={22} className="text-gray-600 dark:text-gray-300 mb-1.5 group-hover/nav:text-brand-blue transition-colors" />
                  <span className="text-[9px] font-black text-gray-500 uppercase tracking-widest">cards</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Operational Transparency */}
      <section className="py-32 px-4 relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 animate-reveal">
            {[
              { label: 'Uptime Protocol', value: '99.999%', icon: <Activity className="text-green-500" />, sub: 'Institutional standard' },
              { label: 'Active Channels', value: '18,492', icon: <Network className="text-brand-blue" />, sub: 'Global liquidity nodes' },
              { label: 'Mean Settle Time', value: '0.42s', icon: <Clock className="text-brand-cyan" />, sub: 'Atomic finality' },
              { label: 'Asset Security', value: '$84B+', icon: <Shield className="text-brand-blue" />, sub: 'Vaulted & protected' }
            ].map((stat, i) => (
              <div key={i} className="p-8 md:p-10 glass-panel rounded-3xl md:rounded-[40px] border-black/5 dark:border-white/5 hover:border-brand-blue/30 transition-all group shadow-2xl">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="p-3 bg-black/5 dark:bg-white/5 rounded-2xl group-hover:bg-brand-blue/10 transition-colors">
                    {stat.icon}
                  </div>
                  <span className="text-[10px] font-black text-gray-500 uppercase tracking-widest">{stat.label}</span>
                </div>
                <div className="text-3xl md:text-4xl font-black text-gray-900 dark:text-white tracking-tighter mb-2 font-gotham">{stat.value}</div>
                <div className="text-[10px] text-gray-400 dark:text-gray-500 font-bold uppercase tracking-widest">{stat.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NEW SECTION: Developer First Integration */}
      <section className="py-48 px-4 bg-brand-blue/5 border-y border-black/5 dark:border-white/5 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-blue/[0.03] blur-[150px] rounded-full pointer-events-none"></div>
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-24">
          <div className="flex-1 animate-reveal">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-brand-blue/10 border border-brand-blue/20 text-brand-blue text-[10px] font-black tracking-widest mb-10 uppercase">
              Developer First Infrastructure
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-7xl font-black text-gray-900 dark:text-white tracking-tighter font-gotham lowercase mb-10">Integrate in <span className="text-brand-blue italic">minutes.</span></h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-12 leading-relaxed font-medium">
              Waletz is built for developers. Access the same infrastructure powering the global economy through our clean, RESTful APIs and comprehensive SDKs.
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <Link to="/developers" className="px-10 py-5 bg-brand-blue text-white font-black rounded-2xl flex items-center justify-center hover:bg-blue-600 transition-all font-gotham lowercase">
                <Terminal size={18} className="mr-3" /> Explore API
              </Link>
              <Link to="/resources" className="px-10 py-5 glass-panel text-gray-900 dark:text-white font-black rounded-2xl border border-black/5 dark:border-white/10 flex items-center justify-center hover:bg-black/5 dark:hover:bg-white/5 transition-all font-gotham lowercase">
                <BookOpen size={18} className="mr-3" /> View Guides
              </Link>
            </div>
          </div>
          <div className="flex-1 w-full lg:max-w-xl animate-reveal delay-200">
            <div className="bg-gray-900 rounded-[40px] border border-white/5 p-1 shadow-2xl relative group overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/10 to-transparent pointer-events-none"></div>
              <div className="bg-gray-900 rounded-[39px] p-10 font-mono text-sm leading-relaxed text-gray-300">
                <div className="flex items-center space-x-2 mb-8 opacity-40">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <div className="space-y-2">
                  <p className="text-brand-blue"><span className="text-purple-400">const</span> waletz = <span className="text-yellow-200">require</span>(<span className="text-green-300">'waletz-sdk'</span>);</p>
                  <p><span className="text-purple-400">await</span> waletz.settle({'{'}</p>
                  <p className="pl-6"><span className="text-orange-300">amount:</span> <span className="text-yellow-300">10000.00</span>,</p>
                  <p className="pl-6"><span className="text-orange-300">currency:</span> <span className="text-green-300">'USD'</span>,</p>
                  <p className="pl-6"><span className="text-orange-300">destination:</span> <span className="text-green-300">'vault_a7b...'</span>,</p>
                  <p className="pl-6"><span className="text-orange-300">atomic:</span> <span className="text-purple-400">true</span></p>
                  <p>{'}'});</p>
                </div>
                <div className="mt-12 flex justify-between items-center">
                  <span className="text-[10px] text-gray-500 uppercase tracking-widest font-black">SDK: Node.js V4.2</span>
                  <div className="p-3 bg-white/5 rounded-xl text-gray-500 hover:text-white transition-colors cursor-pointer group-hover:scale-110 transition-transform">
                    <Code2 size={18} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Pillars */}
      <section className="py-48 px-4 bg-black/[0.02] dark:bg-[#050608]/50 relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-12">
            {[
              { title: 'Global Settlement', icon: <Layers size={32} />, desc: 'Proprietary ledger technology ensuring sub-second finality across all major currency corridors.' },
              { title: 'Predictive Treasury', icon: <Cpu size={32} />, desc: 'AI-driven forecasting that anticipates liquidity requirements before they manifest.' },
              { title: 'Institutional Trust', icon: <Shield size={32} />, desc: 'Bank-grade compliance and multi-sig governance protocols integrated into every movement.' }
            ].map((pillar, i) => (
              <div key={i} className="p-16 glass-panel rounded-[56px] border-black/5 dark:border-white/5 hover:border-brand-blue/20 transition-all group animate-reveal shadow-xl dark:shadow-2xl" style={{ animationDelay: `${i * 0.15}s` }}>
                <div className="w-20 h-20 bg-brand-blue/10 rounded-[28px] flex items-center justify-center text-brand-blue mb-10 group-hover:bg-brand-blue group-hover:text-white transition-all shadow-xl">
                  {pillar.icon}
                </div>
                <h3 className="text-3xl font-black text-gray-900 dark:text-white mb-6 tracking-tight lowercase font-gotham">{pillar.title}</h3>
                <p className="text-lg text-gray-600 dark:text-gray-500 font-medium leading-relaxed opacity-80">{pillar.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Network Evolution */}
      <section className="py-48 px-4 border-t border-black/5 dark:border-white/5 bg-brand-dark overflow-hidden relative">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="flex-1 animate-reveal">
              <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter lowercase font-gotham mb-10">Network <span className="text-brand-blue italic">Evolution.</span></h2>
              <div className="space-y-12">
                {[
                  { year: '2024 Q4', title: 'Atomic Settle V3', desc: 'Release of sub-millisecond settlement protocol for institucional high-frequency corridors.' },
                  { year: '2025 Q2', title: 'Global Identity Hub', desc: 'Integration of decentralized KYC identities for zero-friction boarding across 180 regions.' },
                  { year: '2025 Q4', title: 'Autonomous Treasury AI', desc: 'Final phase of fully self-governing liquidity buffers across all major clearing nodes.' }
                ].map((item, i) => (
                  <div key={i} className="flex gap-10 group cursor-default">
                    <div className="text-[11px] font-black text-brand-blue tracking-[0.3em] uppercase w-24 pt-1 shrink-0">{item.year}</div>
                    <div className="border-l border-white/10 pl-10 group-hover:border-brand-blue transition-colors">
                      <h4 className="text-2xl font-bold text-white mb-3 tracking-tight lowercase font-gotham">{item.title}</h4>
                      <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex-1 relative animate-reveal delay-200 flex justify-center">
              <div className="w-full max-w-md aspect-square glass-panel rounded-full flex items-center justify-center border-brand-blue/20 overflow-hidden group">
                <div className="absolute inset-0 bg-brand-blue/5 animate-pulse"></div>
                <Network className="text-brand-blue opacity-40 animate-rotate-slow w-full h-full p-12" size={undefined} />
                <div className="absolute inset-0 flex items-center justify-center flex-col text-center p-4">
                  <div className="text-4xl md:text-6xl font-black text-white tracking-tighter mb-2">99.9%</div>
                  <div className="text-[10px] font-black text-gray-500 uppercase tracking-[0.5em]">Convergence</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Ecosystem */}
      <section className="py-48 px-4 relative bg-black/[0.01] dark:bg-transparent">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24 md:mb-32 max-w-4xl mx-auto animate-reveal px-4">
            <h2 className="text-4xl sm:text-6xl lg:text-8xl font-black mb-8 md:mb-12 text-gray-900 dark:text-white tracking-tighter leading-[1.1] sm:leading-none font-gotham text-glow lowercase">Designed for <br /> global <span className="text-brand-blue italic">velocity.</span></h2>
            <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-400 font-medium leading-relaxed opacity-80">enterprise-grade infrastructure optimized for speed, security, and institutional scale.</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {[
              {
                title: 'global settle',
                icon: <Globe size={40} />,
                desc: 'Real-time settlement across 150+ regions via high-velocity clearing nodes.',
                color: 'blue'
              },
              {
                title: 'value logic',
                icon: <Zap size={40} />,
                desc: 'Programmatic treasury and yield optimization for complex asset portfolios.',
                color: 'cyan'
              }
            ].map((feature, i) => (
              <div key={i} className="p-16 glass-panel rounded-[64px] group hover:border-brand-blue/50 transition-all relative overflow-hidden h-[640px] flex flex-col justify-between border-black/5 dark:border-white/10 shadow-2xl animate-reveal" style={{ animationDelay: `${i * 0.2}s` }}>
                <div className="relative z-10">
                  <div className={`w-20 h-20 bg-brand-blue/10 rounded-3xl flex items-center justify-center text-brand-blue mb-12 group-hover:bg-brand-blue group-hover:text-white transition-all shadow-lg`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-4xl md:text-5xl font-black mb-10 text-gray-900 dark:text-white tracking-tighter lowercase font-gotham">{feature.title}</h3>
                  <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 leading-relaxed max-w-md opacity-80 font-medium">{feature.desc}</p>
                  <Link to="/create-account" className={`mt-16 text-brand-blue font-black flex items-center group-hover:underline text-xl tracking-tight uppercase tracking-widest text-[11px]`}>
                    Initialize Protocol <ArrowRight className="ml-4 group-hover:translate-x-3 transition-transform" size={20} />
                  </Link>
                </div>
                <div className={`absolute -bottom-32 -right-32 opacity-[0.03] dark:opacity-[0.05] group-hover:opacity-10 transition-all duration-700 text-brand-blue`}>
                  {feature.icon}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-64 px-4 text-center relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[700px] bg-brand-blue/10 blur-[150px] rounded-full pointer-events-none"></div>
        <div className="max-w-5xl mx-auto relative z-10 animate-reveal px-6">
          <h2 className="text-5xl sm:text-7xl lg:text-[120px] font-black mb-12 md:mb-16 tracking-tighter text-gray-900 dark:text-white leading-[1] sm:leading-[0.8] font-gotham lowercase text-glow">Master your <br /> <span className="text-brand-blue italic">capital.</span></h2>
          <p className="text-xl sm:text-3xl text-gray-600 dark:text-gray-400 mb-16 md:mb-24 leading-relaxed font-medium max-w-3xl mx-auto opacity-80">Join the institutional standard for borderless value movement across 150+ countries.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-12 w-full max-w-3xl mx-auto">
            <Link to="/create-account" className="w-full sm:w-auto px-10 md:px-20 py-5 md:py-8 bg-brand-blue text-white font-black rounded-3xl md:rounded-[36px] hover:bg-blue-600 transition-all shadow-xl shadow-blue-500/30 text-2xl md:text-3xl active:scale-95 border border-black/10 dark:border-white/10 font-gotham lowercase text-center">
              Get Started
            </Link>
            <Link to="/developers" className="w-full sm:w-auto px-10 md:px-20 py-5 md:py-8 glass-panel text-gray-900 dark:text-white font-black rounded-3xl md:rounded-[36px] border border-black/10 dark:border-white/10 hover:bg-black/5 dark:hover:bg-white/5 transition-all text-2xl md:text-3xl font-gotham lowercase text-center">
              Developer API
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
