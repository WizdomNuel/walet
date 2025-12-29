
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ShieldCheck, Lock, Eye, FileText, CheckCircle, Fingerprint, Server, Shield, Activity, Search, AlertTriangle, Key, Cpu, Radio, Zap } from 'lucide-react';

const Security: React.FC = () => {
  return (
    <div className="min-h-screen pt-44 pb-32 px-4 transition-colors overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <Link to="/" className="inline-flex items-center space-x-2 text-gray-500 hover:text-gray-900 dark:hover:text-white mb-16 md:mb-20 transition-all group animate-reveal px-4">
          <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
          <span className="font-bold uppercase text-[10px] tracking-widest">Trust Center</span>
        </Link>

        <div className="max-w-5xl mb-24 md:mb-40 animate-reveal delay-100 px-4">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-600/10 border border-blue-600/20 text-blue-500 text-[10px] font-black tracking-widest mb-10 uppercase">
            Security First Protocol
          </div>
          <h1 className="text-5xl sm:text-7xl lg:text-9xl font-black mb-10 text-gray-900 dark:text-white tracking-tighter leading-[1] md:leading-[0.85] font-gotham lowercase text-glow">Fortified by <br /> <span className="text-brand-blue italic">design.</span></h1>
          <p className="text-lg md:text-3xl text-gray-600 dark:text-gray-400 leading-relaxed max-w-3xl font-medium">
            At waletz, security isn't a feature—it's the core of our DNA. We employ a defense-in-depth strategy to protect your global capital.
          </p>
        </div>
        ...

        {/* Security Layers */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-32 md:mb-60 px-4">
          {[
            { icon: <Fingerprint size={32} />, title: 'Zero-Knowledge', desc: 'We build systems where even our engineers cannot access your private keys or sensitive credentials.' },
            { icon: <Lock size={32} />, title: 'Quantum Encryption', desc: 'All data at rest is encrypted using post-quantum AES-256 standards with rotating keys.' },
            { icon: <Server size={32} />, title: 'Immutable Logs', desc: 'Every transaction is recorded on an immutable ledger for absolute auditability and transparency.' }
          ].map((item, i) => (
            <div key={i} className="p-10 md:p-12 rounded-[32px] md:rounded-[48px] glass-panel border-black/5 dark:border-white/5 group animate-reveal shadow-2xl" style={{ animationDelay: `${i * 0.1}s` }}>
              <div className="text-brand-blue mb-8 md:mb-10 group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <h3 className="text-2xl md:text-3xl font-black mb-6 text-gray-900 dark:text-white tracking-tighter lowercase font-gotham">{item.title}</h3>
              <p className="text-gray-500 dark:text-gray-400 leading-relaxed text-sm font-medium opacity-80">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Threat Mitigation */}
        <section className="py-24 md:py-40 border-t border-black/5 dark:border-white/5 relative px-4">
          <div className="grid lg:grid-cols-2 gap-16 md:gap-24 items-center">
            <div className="animate-reveal">
              <h2 className="text-3xl md:text-6xl font-black mb-10 text-gray-900 dark:text-white tracking-tighter leading-[1] md:leading-tight font-gotham lowercase px-4">Autonomous <br /> Threat Suppression.</h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-12 leading-relaxed opacity-80 font-medium px-4">
                Our security nodes use proprietary AI models to identify and neutralize anomalous patterns before they manifest as risks.
              </p>
              <div className="space-y-4 md:space-y-6 px-4">
                {[
                  { label: 'Real-time Fraud Detection', icon: <Search size={20} /> },
                  { label: 'DDoS Mitigation Shield', icon: <Shield size={20} /> },
                  { label: 'Heuristic Risk Scoring', icon: <Activity size={20} /> }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center space-x-4 p-4 md:p-5 glass-panel rounded-2xl border-black/5 dark:border-white/5 hover:bg-brand-blue/5 transition-all">
                    <div className="text-brand-blue shrink-0">{item.icon}</div>
                    <span className="text-gray-900 dark:text-white font-black text-sm lowercase">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="p-8 md:p-16 glass-panel rounded-[40px] md:rounded-[64px] border-brand-blue/20 relative overflow-hidden group shadow-2xl animate-float mx-4">
              <div className="flex items-center space-x-4 mb-8 md:mb-10">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-red-500/10 rounded-xl flex items-center justify-center text-red-500">
                  <AlertTriangle size={20} className="animate-pulse" />
                </div>
                <h3 className="text-xl md:text-2xl font-black text-gray-900 dark:text-white lowercase font-gotham">anomalous signal response</h3>
              </div>
              <div className="bg-black/5 dark:bg-black/40 rounded-2xl md:rounded-3xl p-6 md:p-8 mb-8 md:mb-10 border border-black/5 dark:border-white/5">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                  <span className="text-[10px] font-black uppercase text-gray-400 dark:text-gray-500">Signal Origin: EU-West-2</span>
                  <span className="text-[10px] font-black uppercase text-red-500">Mitigated</span>
                </div>
                <div className="h-2 w-full bg-black/5 dark:bg-white/5 rounded-full mb-6">
                  <div className="h-full bg-brand-blue w-2/3 animate-pulse"></div>
                </div>
                <p className="text-[11px] md:text-xs text-gray-500 dark:text-gray-400 font-medium leading-relaxed">System successfully isolated a high-velocity signature originating from a sanctioned node. Zero data exfiltration. Capital fully secured.</p>
              </div>
              <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-brand-blue/5 blur-[100px] rounded-full"></div>
            </div>
          </div>
        </section>

        {/* Defense in Depth - NEW SECTION */}
        <section className="py-24 md:py-40 border-t border-black/5 dark:border-white/5 px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Kernel Security', icon: <Cpu />, desc: 'Low-level sandboxing for all transaction processing services.' },
              { title: 'Haptic Auth', icon: <Zap />, desc: 'Next-gen biometric verification for institutional high-volume movements.' },
              { title: 'Signal Mesh', icon: <Radio />, desc: 'Global monitoring of financial corridors for pattern anomalies.' },
              { title: 'Key Sharding', icon: <Key />, desc: 'Multi-party computation (MPC) for secure asset custody.' }
            ].map((item, i) => (
              <div key={i} className="p-8 md:p-10 glass-panel rounded-[32px] md:rounded-[40px] border-black/5 dark:border-white/5 hover:border-brand-blue/40 transition-all group shadow-2xl">
                <div className="w-12 h-12 bg-brand-blue/10 rounded-xl flex items-center justify-center text-brand-blue mb-8 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h4 className="text-xl font-black text-gray-900 dark:text-white mb-3 tracking-tight lowercase font-gotham">{item.title}</h4>
                <p className="text-[11px] md:text-xs text-gray-500 dark:text-gray-400 font-medium leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Compliance Section */}
        <section className="py-24 md:py-40 border-t border-black/5 dark:border-white/5 relative px-4">
          <div className="absolute top-0 right-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-brand-blue/5 blur-[120px] rounded-full -z-10"></div>
          <div className="grid lg:grid-cols-2 gap-16 md:gap-24 items-center">
            <div className="animate-reveal px-4">
              <h2 className="text-3xl md:text-6xl font-black mb-10 text-gray-900 dark:text-white tracking-tighter leading-[1] md:leading-none font-gotham lowercase">Institutional <br /> Compliance.</h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-12 leading-relaxed opacity-80 font-medium font-gotham">We operate within the strictest regulatory frameworks globally, ensuring your enterprise is always protected and compliant across 150+ countries.</p>
              <ul className="space-y-4 md:space-y-6">
                {[
                  'PCI-DSS Level 1 Service Provider',
                  'SOC2 Type II & SOC1 Certified',
                  'GDPR & CCPA Data Privacy Architecture',
                  'FCA & MAS Registered Institution',
                  '24/7 Global SOC Monitoring'
                ].map((item, idx) => (
                  <li key={item} className="flex items-center space-x-4 p-5 md:p-6 glass-panel rounded-2xl group hover:border-brand-blue/50 transition-all border-black/5 dark:border-white/5">
                    <div className="p-1.5 bg-brand-blue/10 rounded-lg text-brand-blue shrink-0 group-hover:bg-brand-blue group-hover:text-white transition-all shadow-sm">
                      <CheckCircle size={18} />
                    </div>
                    <span className="text-sm md:text-base text-gray-900 dark:text-white font-bold tracking-tight lowercase">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="p-10 md:p-16 rounded-[40px] md:rounded-[64px] bg-black/5 dark:bg-[#0A0C10] border border-black/5 dark:border-white/5 relative overflow-hidden group shadow-2xl mx-4">
              <Shield className="text-brand-blue mb-8 md:mb-12 group-hover:rotate-12 transition-transform" size={48} md:size={64} />
              <h3 className="text-3xl md:text-4xl font-black mb-8 text-gray-900 dark:text-white tracking-tighter lowercase font-gotham">Request Audit Pack</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-10 md:mb-12 text-base md:text-lg leading-relaxed opacity-80 font-medium">Our annual SOC2 reports and quarterly penetration tests are available for enterprise review. Download our full media and audit pack below.</p>
              <Link to="/talk-to-sales" className="w-full sm:w-auto inline-flex items-center justify-center px-10 md:px-12 py-5 md:py-6 bg-brand-blue text-white font-black rounded-2xl transition-all hover:bg-blue-600 hover:scale-105 shadow-xl font-gotham lowercase text-center">
                Access Security Pack <FileText size={20} className="ml-3" />
              </Link>
              <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-brand-blue/5 blur-[100px] rounded-full"></div>
            </div>
          </div>
        </section>

        {/* Global Security Grid */}
        <section className="py-24 md:py-40 text-center px-4">
          <h2 className="text-3xl md:text-5xl font-black mb-12 md:mb-16 tracking-tighter text-gray-900 dark:text-white font-gotham lowercase leading-none">Our Defense <br className="md:hidden" /> in <span className="text-brand-blue italic">Depth.</span></h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
            {['Identity', 'Network', 'Database', 'Encryption', 'Compliance', 'Hardware', 'Personnel', 'Recovery'].map((label, i) => (
              <div key={label} className="p-6 md:p-8 glass-panel rounded-2xl md:rounded-3xl group hover:bg-brand-blue/10 transition-all border-black/5 dark:border-white/5 shadow-lg">
                <div className="text-[8px] md:text-[10px] font-black uppercase tracking-[0.2em] md:tracking-[0.3em] text-gray-400 dark:text-gray-500 group-hover:text-brand-blue transition-colors">{label}</div>
                <div className="mt-2 text-[10px] md:text-sm text-gray-900 dark:text-white font-bold tracking-tight lowercase">Active Layer</div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Security;
