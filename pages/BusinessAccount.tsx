
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowLeft,
  ArrowRight,
  Plus,
  ArrowUpRight,
  Clock,
  Search,
  BarChart3,
  UserPlus,
  Briefcase,
  Smartphone,
  Shield,
  CheckCircle2,
  Zap
} from 'lucide-react';

const BusinessAccount: React.FC = () => {
  return (
    <div className="min-h-screen pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-custom-bg transition-colors">
      <div className="max-w-7xl mx-auto">
        <Link to="/" className="inline-flex items-center space-x-2 text-custom-secondary hover:text-custom-primary mb-16 transition-all group animate-reveal">
          <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
          <span className="font-bold">Back to home</span>
        </Link>

        {/* Hero Section */}
        <div className="grid lg:grid-cols-2 gap-20 items-center mb-40 animate-reveal">
          <div className="stagger-1 animate-reveal px-4">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-500 text-[10px] font-bold tracking-widest mb-10 uppercase">
              Enterprise Dashboard v4.0
            </div>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black mb-10 text-custom-primary leading-[1] sm:leading-[0.95]">The OS for <br /> <span className="text-brand-blue">Global Scale.</span></h1>
            <p className="text-lg md:text-xl text-custom-secondary mb-14 leading-relaxed max-w-xl">
              waletz Business isn't just an account—it's your command center. Collect global revenue, automate payroll, and manage high-performance teams in one borderless interface.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/talk-to-sales" className="w-full sm:w-auto px-10 py-5 bg-brand-blue hover:bg-blue-600 text-white font-black rounded-2xl transition-all text-center flex items-center justify-center glow-blue hover:scale-105">
                Talk to Sales <ArrowUpRight className="ml-2" size={20} />
              </Link>
              <Link to="/documentation" className="w-full sm:w-auto px-10 py-5 bg-custom-surface border border-custom text-custom-primary font-black rounded-2xl transition-all text-center hover:bg-custom-accent">
                API Docs
              </Link>
            </div>
          </div>

          {/* Futuristic Dashboard Mockup */}
          <div className="relative stagger-2 animate-reveal animate-float">
            <div className="bg-custom-surface border border-custom p-1 w-full rounded-[48px] shadow-2xl relative z-10">
              <div className="bg-[#08090C] rounded-[44px] p-8 lg:p-12 overflow-hidden relative">
                <div className="flex flex-col sm:flex-row justify-between sm:items-start gap-8 mb-14 relative z-10">
                  <div>
                    <h4 className="text-[10px] font-bold text-custom-secondary uppercase tracking-widest mb-2">Total Liquidity</h4>
                    <div className="text-3xl md:text-4xl font-black text-custom-primary tracking-tighter">$2,840,920.00</div>
                    <div className="text-[10px] text-green-500 font-bold mt-2 flex items-center">
                      <TrendingUpIcon className="mr-1" size={14} /> +14.2% YOY
                    </div>
                  </div>
                  <div className="flex space-x-3">
                    <div className="p-3 bg-custom-accent rounded-xl border border-custom hover:border-brand-blue transition-colors cursor-pointer"><BarChart3 size={20} className="text-brand-blue" /></div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-5 mb-10 relative z-10">
                  <div className="p-6 bg-custom-accent border border-custom rounded-[28px] hover:border-brand-blue transition-all">
                    <div className="text-[10px] text-custom-secondary uppercase font-bold mb-2">Active Cards</div>
                    <div className="text-2xl font-black text-custom-primary">24</div>
                  </div>
                  <div className="p-6 bg-custom-accent border border-custom rounded-[28px] hover:border-orange-500/50 transition-all">
                    <div className="text-[10px] text-custom-secondary uppercase font-bold mb-2">Pending</div>
                    <div className="text-2xl font-black text-orange-400">07</div>
                  </div>
                </div>

                <div className="space-y-4 relative z-10">
                  <div className="text-[10px] font-bold text-custom-secondary uppercase tracking-widest px-2 mb-4">Live Ledger</div>
                  {[
                    { name: 'Acme Global Ops', amount: '+$142,000.00', status: 'Completed', type: 'Incoming' },
                    { name: 'Contractor Payroll', amount: '-$54,200.00', status: 'Processing', type: 'Payroll' }
                  ].map((row, i) => (
                    <div key={i} className="flex justify-between items-center p-4 md:p-5 bg-custom-accent/40 rounded-[24px] md:rounded-3xl border border-transparent hover:border-custom transition-all group cursor-pointer hover:bg-custom-accent/60">
                      <div className="flex items-center space-x-4 md:space-x-5">
                        <div className={`p-2.5 md:p-3 rounded-xl ${row.type === 'Incoming' ? 'bg-green-500/10 text-green-500' : 'bg-brand-blue/10 text-brand-blue'}`}>
                          {row.type === 'Incoming' ? <Plus size={16} /> : <ArrowUpRight size={16} />}
                        </div>
                        <div>
                          <div className="text-xs md:text-sm font-black text-custom-primary group-hover:text-brand-blue transition-colors">{row.name}</div>
                          <div className="text-[8px] md:text-[9px] text-custom-secondary uppercase font-bold tracking-tighter">{row.type}</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className={`text-xs md:text-sm font-black ${row.amount.startsWith('+') ? 'text-green-500' : 'text-custom-primary'}`}>{row.amount}</div>
                        <div className="text-[8px] md:text-[9px] text-custom-secondary flex items-center justify-end font-bold">
                          <Clock size={10} className="mr-1" /> {row.status}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                {/* Decorative Inner Glow */}
                <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-brand-blue/5 blur-[80px] rounded-full"></div>
              </div>
            </div>
            {/* Background Floating Elements */}
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-brand-blue/20 blur-[80px] rounded-full -z-0"></div>
          </div>
        </div>

        {/* Dynamic Grid: Features */}
        <section className="py-32 border-t border-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: 'Dynamic Team Controls', icon: <UserPlus />, color: 'blue', desc: "Deploy role-based access controls (RBAC). Assign employees to tiered permission levels with multi-sig paths." },
              { title: 'Autonomous Payroll', icon: <Briefcase />, color: 'purple', desc: "Settle global payroll in 120+ currencies instantly. Automated tax filings and local compliance included." },
              { title: 'Founder\'s Edge', icon: <Smartphone />, color: 'cyan', desc: "Seamlessly bridge your business and personal wealth. Transfer dividends instantly with zero latency." }
            ].map((item, idx) => (
              <div key={item.title} className={`p-8 md:p-12 rounded-[32px] md:rounded-[40px] bg-custom-surface border border-custom group hover:border-brand-blue transition-all animate-reveal stagger-${idx + 1}`}>
                <div className={`w-14 md:w-16 h-14 md:h-16 rounded-2xl bg-brand-blue/10 flex items-center justify-center mb-10 text-brand-blue group-hover:scale-110 transition-transform`}>
                  {item.icon}
                </div>
                <h3 className="text-2xl font-black mb-5 text-custom-primary tracking-tight">{item.title}</h3>
                <p className="text-custom-secondary mb-10 leading-relaxed text-sm opacity-80">
                  {item.desc}
                </p>
                <div className="mt-auto flex items-center text-[10px] font-bold text-brand-blue uppercase tracking-widest group-hover:translate-x-2 transition-transform">
                  Learn More <ArrowRight size={14} className="ml-2" />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Global CTA */}
        <section className="mt-20 py-32 bg-brand-blue text-white rounded-[64px] overflow-hidden relative animate-reveal">
          <div className="max-w-4xl mx-auto px-6 md:px-12 relative z-10 text-center">
            <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black mb-10 tracking-tighter leading-[1.1] sm:leading-none">Business Power, <br /> Personal Ease.</h2>
            <p className="text-lg md:text-xl text-blue-100 mb-14 max-w-2xl mx-auto opacity-90">
              One ecosystem, total liquidity. Move capital across your enterprise and personal life with zero friction.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-6 sm:gap-8 w-full max-w-lg mx-auto">
              <Link to="/start-personal" className="w-full sm:w-auto px-10 py-5 bg-white text-brand-blue font-black rounded-2xl hover:bg-blue-50 transition-all hover:scale-105 text-center">
                Personal Account
              </Link>
              <Link to="/talk-to-sales" className="w-full sm:w-auto px-10 py-5 bg-blue-600 text-white font-black rounded-2xl border border-blue-400/30 hover:bg-blue-700 transition-all hover:scale-105 text-center">
                Contact Sales
              </Link>
            </div>
          </div>
          <div className="absolute inset-0 shimmer-bg opacity-10 pointer-events-none"></div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 blur-[150px] rounded-full"></div>
        </section>
      </div>
    </div>
  );
};

const TrendingUpIcon = ({ className, size }: { className?: string; size: number }) => (
  <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline><polyline points="17 6 23 6 23 12"></polyline></svg>
);

export default BusinessAccount;
