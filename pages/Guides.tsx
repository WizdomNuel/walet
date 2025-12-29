
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, BookOpen, Search, Zap, Shield, FileText, Globe, ArrowRight } from 'lucide-react';

const Guides: React.FC = () => {
  const guideCategories = [
    {
      title: 'Getting Started',
      icon: <Zap className="text-brand-blue" />,
      links: ['Introduction to Waletz', 'Setting up your first account', 'API Authentication flow', 'Verifying your identity']
    },
    {
      title: 'Payments & Settlement',
      icon: <Globe className="text-brand-blue" />,
      links: ['Sending global transfers', 'Handling multi-currency balances', 'Webhook integration for payments', 'Refunds and disputes']
    },
    {
      title: 'Treasury & Optimization',
      icon: <Shield className="text-brand-blue" />,
      links: ['Liquidity management 101', 'Automating sweep rules', 'Understanding yield instruments', 'Financial reporting & export']
    }
  ];

  return (
    <div className="min-h-screen pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-custom-bg transition-colors">
      <div className="max-w-7xl mx-auto">
        <Link to="/" className="inline-flex items-center space-x-2 text-custom-secondary hover:text-custom-primary mb-12 md:mb-16 transition-all group px-4">
          <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
          <span className="font-bold uppercase text-[10px] tracking-widest text-gray-500">Back to home</span>
        </Link>

        <div className="text-center mb-16 px-4">
          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black mb-8 text-custom-primary tracking-tighter leading-[1] md:leading-[0.85] font-gotham lowercase text-glow">Resources & <br /> <span className="text-brand-blue italic">Guides.</span></h1>
          <p className="text-lg md:text-xl text-custom-secondary max-w-2xl mx-auto leading-relaxed font-medium">
            Everything you need to master the waletz ecosystem, from technical tutorials to financial strategy guides.
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-24 md:mb-32 relative px-4">
          <Search className="absolute left-10 top-1/2 -translate-y-1/2 text-brand-blue" size={24} />
          <input
            type="text"
            placeholder="Search for articles, guides, or API endpoints..."
            className="w-full bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/5 rounded-2xl md:rounded-[32px] pl-16 md:pl-20 pr-8 py-5 md:py-8 text-custom-primary focus:outline-none focus:border-brand-blue transition-all shadow-2xl font-medium text-lg md:text-xl placeholder:text-gray-400 placeholder:font-medium"
          />
        </div>

        {/* Featured Guides */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 mb-32 px-4">
          {guideCategories.map((category) => (
            <div key={category.title} className="p-10 md:p-12 rounded-[40px] md:rounded-[56px] glass-panel border-black/5 dark:border-white/5 flex flex-col shadow-2xl hover:border-brand-blue/30 transition-all group">
              <div className="w-16 h-16 md:w-20 md:h-20 bg-brand-blue/10 rounded-2xl md:rounded-3xl flex items-center justify-center mb-10 text-brand-blue shadow-lg group-hover:scale-110 transition-transform">
                {React.cloneElement(category.icon as React.ReactElement, { size: 32 })}
              </div>
              <h3 className="text-2xl md:text-3xl font-black mb-8 text-custom-primary tracking-tight font-gotham lowercase leading-none">{category.title}</h3>
              <ul className="space-y-6 mb-10 flex-grow">
                {category.links.map((link) => (
                  <li key={link}>
                    <Link to="/documentation" className="text-custom-secondary hover:text-brand-blue transition-all flex items-center group/link">
                      <div className="w-1.5 h-1.5 bg-brand-blue rounded-full mr-4 opacity-30 group-hover/link:opacity-100 group-hover/link:scale-125 transition-all"></div>
                      <span className="text-sm md:text-base font-bold tracking-tight lowercase">{link}</span>
                      <ArrowRight size={14} className="ml-2 opacity-0 -translate-x-2 group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all" />
                    </Link>
                  </li>
                ))}
              </ul>
              <Link to="/documentation" className="inline-flex items-center text-[10px] md:text-xs font-black text-brand-blue uppercase tracking-widest hover:translate-x-2 transition-transform">
                View all content <ArrowRight size={14} className="ml-2" />
              </Link>
            </div>
          ))}
        </div>

        {/* Learning Paths */}
        <section className="py-24 md:py-40 border-t border-black/5 dark:border-white/5 px-4 text-center">
          <h2 className="text-4xl md:text-7xl font-black text-center mb-16 md:mb-24 text-custom-primary tracking-tighter font-gotham lowercase leading-none">Pick your <span className="text-brand-blue italic">path.</span></h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            <div className="p-10 md:p-16 rounded-[40px] md:rounded-[64px] bg-brand-blue text-white group cursor-pointer hover:scale-[1.02] transition-all shadow-2xl relative overflow-hidden text-left">
              <BookOpen className="mb-10 opacity-80 group-hover:scale-110 transition-transform" size={48} md:size={64} />
              <h3 className="text-2xl md:text-4xl font-black mb-6 tracking-tight font-gotham lowercase whitespace-nowrap">I'm an Engineer</h3>
              <p className="text-blue-50/80 mb-10 text-base md:text-xl font-medium leading-relaxed font-gotham max-w-sm">Learn how to integrate our APIs, SDKs, and webhooks into your existing tech stack with detailed technical documentation.</p>
              <Link to="/developers" className="inline-flex items-center px-8 py-4 bg-white/10 hover:bg-white/20 rounded-2xl font-black text-sm md:text-base border border-white/10 transition-all font-gotham lowercase tracking-tight">
                Enter Developer Portal <ArrowRight className="ml-3" />
              </Link>
              <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-white/5 rounded-full blur-3xl"></div>
            </div>
            <div className="p-10 md:p-16 rounded-[40px] md:rounded-[64px] glass-panel border-black/5 dark:border-white/5 group cursor-pointer hover:scale-[1.02] transition-all shadow-2xl relative overflow-hidden text-left">
              <Globe className="text-brand-blue mb-10 group-hover:scale-110 transition-transform" size={48} md:size={64} />
              <h3 className="text-2xl md:text-4xl font-black text-custom-primary mb-6 tracking-tight font-gotham lowercase whitespace-nowrap">I'm a Business Owner</h3>
              <p className="text-custom-secondary mb-10 text-base md:text-xl font-medium leading-relaxed font-gotham max-w-sm">Discover how to leverage our treasury and payment tools to optimize your global operations and scale your revenue.</p>
              <Link to="/start-business" className="inline-flex items-center px-8 py-4 bg-brand-blue text-white rounded-2xl font-black text-sm md:text-base transition-all font-gotham lowercase tracking-tight shadow-xl shadow-blue-500/20">
                Explore Solutions <ArrowRight className="ml-3" />
              </Link>
              <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-brand-blue/5 rounded-full blur-3xl"></div>
            </div>
          </div>
        </section>

        {/* Support CTA */}
        <section className="mt-24 md:mt-40 p-10 md:p-20 md:p-32 rounded-[40px] md:rounded-[80px] glass-panel border-black/5 dark:border-white/5 text-center relative overflow-hidden group mx-4 shadow-2xl">
          <div className="relative z-10 px-4">
            <h2 className="text-3xl md:text-7xl font-black mb-8 text-custom-primary tracking-tighter leading-none font-gotham lowercase">Missing <br className="sm:hidden" /> <span className="text-brand-blue italic">Something?</span></h2>
            <p className="text-lg md:text-xl text-custom-secondary mb-12 md:mb-16 max-w-xl mx-auto font-medium opacity-80 font-gotham">Our support team is available 24/7 to help you with any questions or issues you might have.</p>
            <Link to="/contact" className="w-full sm:w-auto px-10 md:px-16 py-5 md:py-8 bg-brand-blue text-white font-black rounded-2xl md:rounded-3xl hover:bg-blue-600 transition-all text-xl md:text-2xl font-gotham lowercase inline-block text-center shadow-xl shadow-blue-500/20">
              Contact Support
            </Link>
          </div>
          <div className="absolute top-0 right-0 w-64 md:w-96 h-64 md:h-96 bg-brand-blue/5 blur-[120px] rounded-full"></div>
        </section>
      </div>
    </div>
  );
};

export default Guides;
