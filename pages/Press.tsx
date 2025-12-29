
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Newspaper, Download, ArrowRight, Globe, Share2 } from 'lucide-react';

const Press: React.FC = () => {
  const releases = [
    { date: 'Oct 30, 2024', title: 'Waletz Expands Operations to South East Asia with New Singapore Hub', category: 'Global Expansion' },
    { date: 'Oct 15, 2024', title: 'Waletz Series C Funding: $250M at $4.2B Valuation', category: 'Corporate' },
    { date: 'Sep 12, 2024', title: 'Introducing Quantum-Proof Encryption for Enterprise Treasury', category: 'Product' },
    { date: 'Aug 05, 2024', title: 'Waletz Partners with Global Regulators to Define Open Banking Standards', category: 'Regulation' },
  ];

  return (
    <div className="min-h-screen pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-custom-bg transition-colors">
      <div className="max-w-7xl mx-auto">
        <Link to="/" className="inline-flex items-center space-x-2 text-custom-secondary hover:text-custom-primary mb-12 md:mb-16 transition-all group px-4">
          <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
          <span className="font-bold uppercase text-[10px] tracking-widest text-gray-500">Back to home</span>
        </Link>

        <div className="grid lg:grid-cols-2 gap-12 md:gap-20 items-end mb-24 md:mb-40 px-4 animate-reveal">
          <div>
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-500 text-[10px] font-black tracking-widest mb-8 uppercase">
              Waletz Press Room
            </div>
            <h1 className="text-5xl sm:text-7xl lg:text-9xl font-black mb-8 text-custom-primary tracking-tighter leading-[1] md:leading-[0.85] font-gotham lowercase text-glow">Latest from <br /> <span className="text-brand-blue italic">the edge.</span></h1>
            <p className="text-lg md:text-xl text-custom-secondary leading-relaxed font-medium opacity-80 max-w-2xl">
              Stay updated with our latest announcements, product launches, and corporate milestones as we build the future of finance.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 w-full">
            <button className="flex-1 py-5 md:py-6 glass-panel border-black/5 dark:border-white/5 rounded-2xl md:rounded-3xl flex items-center justify-center space-x-3 text-custom-primary font-black uppercase tracking-widest text-[10px] md:text-xs hover:border-brand-blue/30 transition-all shadow-xl group">
              <Download size={20} className="text-brand-blue group-hover:scale-110 transition-transform" /> <span>Brand Assets</span>
            </button>
            <button className="flex-1 py-5 md:py-6 glass-panel border-black/5 dark:border-white/5 rounded-2xl md:rounded-3xl flex items-center justify-center space-x-3 text-custom-primary font-black uppercase tracking-widest text-[10px] md:text-xs hover:border-brand-blue/30 transition-all shadow-xl group">
              <Share2 size={20} className="text-brand-blue group-hover:scale-110 transition-transform" /> <span>Media Kit</span>
            </button>
          </div>
        </div>

        <div className="px-4 animate-reveal">
          <div className="flex items-center space-x-4 mb-12 md:mb-16">
            <div className="w-12 h-12 md:w-16 md:h-16 bg-brand-blue/10 rounded-2xl flex items-center justify-center text-brand-blue shadow-lg">
              <Newspaper size={24} md:size={32} />
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-custom-primary tracking-tighter font-gotham lowercase leading-none">Recent <span className="text-brand-blue italic">News.</span></h2>
          </div>
          <div className="grid gap-6 md:gap-8">
            {releases.map((news, i) => (
              <div key={i} className="p-8 md:p-12 glass-panel border-black/5 dark:border-white/5 rounded-[32px] md:rounded-[48px] hover:border-brand-blue/30 transition-all group flex flex-col md:flex-row justify-between items-start md:items-center shadow-2xl">
                <div className="mb-8 md:mb-0">
                  <div className="flex items-center space-x-4 mb-4">
                    <span className="px-3 py-1 rounded-full bg-brand-blue/10 border border-brand-blue/20 text-brand-blue text-[10px] font-black uppercase tracking-widest">{news.category}</span>
                    <span className="text-gray-400 font-bold">•</span>
                    <span className="text-[10px] md:text-xs font-black text-custom-secondary uppercase tracking-widest">{news.date}</span>
                  </div>
                  <h3 className="text-2xl md:text-3xl lg:text-4xl font-black text-custom-primary group-hover:text-brand-blue transition-colors max-w-3xl tracking-tight leading-tight font-gotham lowercase">{news.title}</h3>
                </div>
                <Link to="/contact" className="w-16 h-16 md:w-20 md:h-20 glass-panel border-black/5 dark:border-white/5 rounded-2xl md:rounded-3xl flex items-center justify-center text-brand-blue group-hover:bg-brand-blue group-hover:text-white transition-all transform group-hover:scale-110 shadow-xl group-hover:rotate-12">
                  <ArrowRight size={32} />
                </Link>
              </div>
            ))}
          </div>
        </div>

        <section className="mt-32 md:mt-48 p-10 md:p-24 lg:p-32 bg-brand-blue text-white rounded-[40px] md:rounded-[80px] text-center relative overflow-hidden mx-4 animate-reveal shadow-2xl">
          <div className="relative z-10">
            <h2 className="text-4xl md:text-7xl font-black mb-8 tracking-tighter leading-none font-gotham lowercase px-4">Inquiries?</h2>
            <p className="text-blue-50/80 mb-12 max-w-2xl mx-auto text-lg md:text-xl font-medium font-gotham leading-relaxed px-4">For media inquiries, interview requests, and speaker opportunities, please reach out to our communications team.</p>
            <a href="mailto:press@waletz.com" className="inline-block px-10 md:px-16 py-6 md:py-8 bg-white text-brand-blue font-black rounded-2xl md:rounded-3xl hover:bg-blue-50 transition-all text-xl md:text-2xl shadow-xl shadow-white/10 font-gotham lowercase">
              press@waletz.com
            </a>
          </div>
          <div className="absolute top-0 left-0 w-64 md:w-96 h-64 md:h-96 bg-white/10 blur-[120px] rounded-full"></div>
          <div className="absolute bottom-0 right-0 w-64 md:w-96 h-64 md:h-96 bg-white/5 blur-[120px] rounded-full"></div>
        </section>
      </div>
    </div>
  );
};

export default Press;
