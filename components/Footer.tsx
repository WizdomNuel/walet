
import React from 'react';
import { Link } from 'react-router-dom';
import { Globe, Twitter, Linkedin, Github, Facebook, Instagram, ShieldCheck, Lock, Activity, Database, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const regions = [
    'United States', 'United Kingdom', 'European Union', 'Singapore', 'Australia', 'Canada', 'Japan', 'Hong Kong',
    'United Arab Emirates', 'Saudi Arabia', 'Switzerland', 'Norway', 'Brazil', 'Mexico', 'South Africa', 'New Zealand',
    'South Korea', 'Israel', 'India', 'Thailand', 'Vietnam', 'Philippines', 'Indonesia', 'Malaysia', 'Nigeria',
    'Kenya', 'Egypt', 'Turkey', 'Argentina', 'Chile', 'Colombia', 'Peru', 'Portugal', 'Spain', 'Italy', 'France',
    'Germany', 'Netherlands', 'Belgium', 'Sweden', 'Denmark', 'Finland', 'Austria', 'Ireland', 'Greece', 'Poland',
    'Czech Republic', 'Hungary', 'Romania', 'Bulgaria', 'Croatia', 'Estonia', 'Latvia', 'Lithuania', 'Slovakia',
    'Slovenia', 'Luxembourg', 'Malta', 'Cyprus', 'Taiwan', 'Qatar', 'Kuwait', 'Bahrain', 'Oman', 'Morocco',
    'Ghana', 'Rwanda', 'Mauritius', 'Botswana', 'Panama', 'Costa Rica', 'Dominican Republic', 'Jamaica'
  ];

  return (
    <footer className="py-16 md:py-24 px-6 border-t border-black/5 dark:border-white/10 bg-white dark:bg-brand-dark/60 backdrop-blur-md relative overflow-hidden transition-colors">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-16 mb-24">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center space-x-2 mb-6 group cursor-pointer">
              <div className="w-8 h-8 bg-brand-blue rounded-lg flex items-center justify-center shadow-[0_0_15px_rgba(13,89,242,0.4)]">
                <div className="w-4 h-4 bg-white rotate-45"></div>
              </div>
              <span className="text-xl font-black tracking-tighter lowercase group-hover:text-brand-blue transition-colors font-gotham text-gray-900 dark:text-white">waletz</span>
            </div>
            <p className="text-gray-600 dark:text-gray-400 text-sm max-w-xs leading-relaxed font-medium mb-8">
              global capital infrastructure for the modern economy. building a world without borders.
            </p>
            <div className="flex space-x-4">
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="p-2.5 bg-black/5 dark:bg-white/5 rounded-xl text-gray-500 dark:text-gray-400 hover:text-brand-blue dark:hover:text-white transition-all"><Twitter size={18} /></a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="p-2.5 bg-black/5 dark:bg-white/5 rounded-xl text-gray-500 dark:text-gray-400 hover:text-brand-blue dark:hover:text-white transition-all"><Linkedin size={18} /></a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="p-2.5 bg-black/5 dark:bg-white/5 rounded-xl text-gray-500 dark:text-gray-400 hover:text-brand-blue dark:hover:text-white transition-all"><Facebook size={18} /></a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="p-2.5 bg-black/5 dark:bg-white/5 rounded-xl text-gray-500 dark:text-gray-400 hover:text-brand-blue dark:hover:text-white transition-all"><Instagram size={18} /></a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="p-2.5 bg-black/5 dark:bg-white/5 rounded-xl text-gray-500 dark:text-gray-400 hover:text-brand-blue dark:hover:text-white transition-all"><Github size={18} /></a>
            </div>
          </div>

          <div>
            <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-400 dark:text-white/40 mb-8">Solutions</h4>
            <ul className="space-y-4 text-sm text-gray-600 dark:text-gray-400 font-bold lowercase">
              <li><Link to="/treasury" className="hover:text-brand-blue dark:hover:text-white transition-colors">treasury management</Link></li>
              <li><Link to="/enterprise" className="hover:text-brand-blue dark:hover:text-white transition-colors">enterprise liquidity</Link></li>
              <li><Link to="/intelligence" className="hover:text-brand-blue dark:hover:text-white transition-colors">financial intelligence</Link></li>
              <li><Link to="/developers" className="hover:text-brand-blue dark:hover:text-white transition-colors">developer api</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-400 dark:text-white/40 mb-8">Company</h4>
            <ul className="space-y-4 text-sm text-gray-600 dark:text-gray-400 font-bold lowercase">
              <li><Link to="/about" className="hover:text-brand-blue dark:hover:text-white transition-colors">about us</Link></li>
              <li><Link to="/careers" className="hover:text-brand-blue dark:hover:text-white transition-colors">careers</Link></li>
              <li><Link to="/press" className="hover:text-brand-blue dark:hover:text-white transition-colors">press center</Link></li>
              <li><Link to="/sustainability" className="hover:text-brand-blue dark:hover:text-white transition-colors">sustainability</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-400 dark:text-white/40 mb-8">Legal</h4>
            <ul className="space-y-4 text-sm text-gray-600 dark:text-gray-400 font-bold lowercase">
              <li><Link to="/security" className="hover:text-brand-blue dark:hover:text-white transition-colors">trust center</Link></li>
              <li><Link to="/policy" className="hover:text-brand-blue dark:hover:text-white transition-colors">privacy policy</Link></li>
              <li><Link to="/policy" className="hover:text-brand-blue dark:hover:text-white transition-colors">terms of service</Link></li>
              <li><Link to="/policy" className="hover:text-brand-blue dark:hover:text-white transition-colors">compliance</Link></li>
            </ul>
          </div>
        </div>

        {/* 150+ Countries Section */}
        <div className="mb-24 pt-12 border-t border-black/5 dark:border-white/5">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-8 mb-12">
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-brand-blue/10 rounded-2xl text-brand-blue border border-brand-blue/20">
                <Globe size={24} />
              </div>
              <div>
                <h4 className="text-sm font-black text-gray-900 dark:text-white lowercase font-gotham">global settlement coverage</h4>
                <p className="text-[10px] text-gray-400 dark:text-gray-500 font-black uppercase tracking-[0.3em]">supporting 150+ countries & territories</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-6 items-center">
              <div className="flex items-center space-x-2 text-gray-400 opacity-60"><Database size={14} /> <span className="text-[10px] font-black uppercase">PCI-DSS V4</span></div>
              <div className="flex items-center space-x-2 text-gray-400 opacity-60"><Lock size={14} /> <span className="text-[10px] font-black uppercase">AES-256</span></div>
              <div className="flex items-center space-x-2 text-gray-400 opacity-60"><ShieldCheck size={14} /> <span className="text-[10px] font-black uppercase">SOC2 compliant</span></div>
            </div>
          </div>

          <div className="relative overflow-hidden group py-6">
            <div className="flex animate-marquee whitespace-nowrap gap-16 text-[11px] font-black uppercase tracking-[0.35em] text-gray-400 dark:text-gray-500/60">
              {[...regions, ...regions].map((region, i) => (
                <span key={i} className="hover:text-brand-blue transition-all cursor-default flex items-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-blue/30 mr-4"></span>
                  {region}
                </span>
              ))}
            </div>
            <div className="absolute top-0 left-0 w-48 h-full bg-gradient-to-r from-white dark:from-brand-dark to-transparent z-10"></div>
            <div className="absolute top-0 right-0 w-48 h-full bg-gradient-to-l from-white dark:from-brand-dark to-transparent z-10"></div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row justify-between lg:items-center gap-12 pt-12 border-t border-black/5 dark:border-white/5">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:flex items-center gap-6 lg:space-x-6 text-[10px] text-gray-400 dark:text-gray-500 font-black uppercase tracking-[0.5em]">
            <span className="flex items-center space-x-2 text-green-600 font-black">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              <span>all systems active</span>
            </span>
            <span className="hidden lg:inline opacity-40">|</span>
            <span className="flex items-center space-x-2 text-brand-blue">
              <Activity size={12} className="animate-pulse" />
              <span>node v.2.5 stable</span>
            </span>
            <span className="hidden lg:inline opacity-40">|</span>
            <span className="flex items-center space-x-2 text-red-400">
              <Heart size={12} fill="currentColor" className="opacity-50" />
              <span>Impact Program Live</span>
            </span>
          </div>
          <div className="flex flex-wrap items-center gap-8 text-[10px] text-gray-400 dark:text-gray-500 font-black uppercase tracking-[0.5em]">
            <span className="hover:text-brand-blue transition-colors cursor-pointer">status</span>
            <span className="hover:text-brand-blue transition-colors cursor-pointer">api logs</span>
            <span className="cursor-default">© 2026 waletz inc.</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
