
import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Sun, Moon, ChevronDown, Zap, BarChart3, Shield, Users, Briefcase, Mail, Info, Globe, LayoutGrid, Terminal } from 'lucide-react';

interface NavbarProps {
  isDark: boolean;
  toggleTheme: () => void;
}

const WaletzLogo = () => (
  <svg width="36" height="36" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="filter drop-shadow-[0_0_8px_rgba(13,89,242,0.4)]">
    <path d="M16 4L4 10L4 22L16 28L28 22L28 10L16 4Z" stroke="#0d59f2" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M16 12L10 15V21L16 24L22 21V15L16 12Z" fill="#0d59f2" className="animate-pulse" />
    <circle cx="16" cy="16" r="2" fill="white" />
  </svg>
);

const Navbar: React.FC<NavbarProps> = ({ isDark, toggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const productLinks = [
    { label: 'treasury', href: '/treasury', icon: <Zap size={18} />, desc: 'Global liquidity infrastructure' },
    { label: 'enterprise', href: '/enterprise', icon: <LayoutGrid size={18} />, desc: 'Institutional capital scaling' },
    { label: 'intelligence', href: '/intelligence', icon: <BarChart3 size={18} />, desc: 'AI-driven predictive treasury' },
  ];

  const companyLinks = [
    { label: 'about', href: '/about', icon: <Users size={18} />, desc: 'Our mission to dissolve borders' },
    { label: 'careers', href: '/careers', icon: <Briefcase size={18} />, desc: 'Join the borderless revolution' },
    { label: 'press', href: '/press', icon: <Globe size={18} />, desc: 'Latest from the global edge' },
  ];

  const Dropdown = ({ label, items, id }: { label: string, items: any[], id: string }) => (
    <div className="relative group">
      <button
        onMouseEnter={() => setActiveDropdown(id)}
        className={`flex items-center space-x-1.5 py-2 px-4 rounded-xl text-sm font-bold transition-all uppercase tracking-widest ${activeDropdown === id ? 'bg-brand-blue/10 text-brand-blue' : 'text-gray-600 dark:text-gray-400 hover:text-brand-blue dark:hover:text-white'
          }`}
      >
        <span>{label}</span>
        <ChevronDown size={14} className={`transition-transform duration-300 ${activeDropdown === id ? 'rotate-180' : ''}`} />
      </button>

      {activeDropdown === id && (
        <div
          onMouseLeave={() => setActiveDropdown(null)}
          className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-80 glass-panel rounded-[24px] border border-black/5 dark:border-white/10 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.2)] dark:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.6)] p-5 animate-reveal z-50 overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/5 to-transparent pointer-events-none"></div>
          <div className="grid gap-3 relative z-10">
            {items.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                onClick={() => setActiveDropdown(null)}
                className="flex items-start space-x-4 p-3.5 rounded-2xl hover:bg-black/5 dark:hover:bg-white/5 transition-all group/item"
              >
                <div className="p-2.5 bg-brand-blue/10 rounded-xl text-brand-blue group-hover/item:bg-brand-blue group-hover/item:text-white transition-all shadow-sm">
                  {item.icon}
                </div>
                <div>
                  <div className="text-sm font-bold text-gray-900 dark:text-white group-hover/item:text-brand-blue transition-colors lowercase">{item.label}</div>
                  <div className="text-[11px] text-gray-500 dark:text-gray-400 font-medium leading-relaxed">{item.desc}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );

  return (
    <div className="fixed top-6 left-0 right-0 z-50 px-4 pointer-events-none">
      <nav ref={navRef} className="max-w-7xl mx-auto glass-panel rounded-[28px] border border-black/5 dark:border-white/5 flex items-center justify-between h-16 lg:h-20 px-6 lg:px-10 pointer-events-auto transition-all shadow-xl dark:shadow-2xl">

        <div className="flex items-center space-x-12">
          <Link to="/" className="flex items-center space-x-3 shrink-0 group">
            <WaletzLogo />
            <span className="text-xl lg:text-2xl font-black tracking-tighter text-gray-900 dark:text-white lowercase italic group-hover:text-brand-blue transition-colors font-gotham">waletz</span>
          </Link>

          <div className="hidden lg:flex items-center space-x-2">
            <Dropdown label="products" id="products" items={productLinks} />
            <Dropdown label="company" id="company" items={companyLinks} />
            <Link to="/developers" className="text-sm font-bold text-gray-600 dark:text-gray-400 hover:text-brand-blue dark:hover:text-white px-4 flex items-center uppercase tracking-widest transition-colors"><Terminal size={14} className="mr-2 opacity-50" /> developers</Link>
          </div>
        </div>

        <div className="hidden lg:flex items-center space-x-6">
          <button onClick={toggleTheme} className="p-2.5 rounded-xl text-gray-600 dark:text-gray-400 hover:text-brand-blue hover:bg-black/5 dark:hover:bg-white/5 transition-all">
            {isDark ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          <Link to="/login" className="text-sm font-bold text-gray-900 dark:text-white hover:text-brand-blue transition-colors uppercase tracking-widest">
            Log in
          </Link>

          <Link
            to="/create-account"
            className="px-7 py-3 bg-brand-blue text-white text-sm font-black rounded-2xl hover:bg-blue-600 transition-all shadow-[0_10px_30px_-5px_rgba(13,89,242,0.4)] active:scale-95 border border-black/10 dark:border-white/10 uppercase tracking-widest"
          >
            Get Started
          </Link>
        </div>

        <div className="lg:hidden flex items-center space-x-3">
          <button onClick={toggleTheme} className="p-2.5 rounded-xl text-gray-600 dark:text-gray-400 hover:bg-black/5 dark:hover:bg-white/5 transition-all">
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button onClick={() => setIsOpen(!isOpen)} className="p-2.5 rounded-xl text-gray-900 dark:text-white hover:bg-black/5 dark:hover:bg-white/5 transition-all">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="fixed inset-0 top-0 left-0 w-full h-full z-[60] lg:hidden animate-reveal pointer-events-auto">
          <div className="absolute inset-0 bg-white/80 dark:bg-brand-dark/80 backdrop-blur-xl" onClick={() => setIsOpen(false)}></div>
          <div className="relative h-full flex flex-col p-6 pt-24 overflow-y-auto no-scrollbar">
            <div className="glass-panel rounded-[32px] border border-black/5 dark:border-white/10 p-8 shadow-2xl">
              <div className="flex flex-col space-y-8">
                <div>
                  <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 dark:text-gray-500 mb-6 px-1">products</h4>
                  <div className="grid gap-4">
                    {productLinks.map(link => (
                      <Link key={link.label} to={link.href} onClick={() => setIsOpen(false)} className="flex items-center space-x-4 p-2 rounded-2xl hover:bg-black/5 dark:hover:bg-white/5 transition-all group">
                        <div className="p-3 bg-brand-blue/10 rounded-2xl text-brand-blue group-hover:bg-brand-blue group-hover:text-white transition-all">{link.icon}</div>
                        <span className="font-bold text-gray-900 dark:text-white lowercase">{link.label}</span>
                      </Link>
                    ))}
                    <Link to="/developers" onClick={() => setIsOpen(false)} className="flex items-center space-x-4 p-2 rounded-2xl hover:bg-black/5 dark:hover:bg-white/5 transition-all group">
                      <div className="p-3 bg-brand-blue/10 rounded-2xl text-brand-blue group-hover:bg-brand-blue group-hover:text-white transition-all"><Terminal size={18} /></div>
                      <span className="font-bold text-gray-900 dark:text-white lowercase">developers</span>
                    </Link>
                  </div>
                </div>

                <div>
                  <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 dark:text-gray-500 mb-6 px-1">company</h4>
                  <div className="grid gap-4">
                    {companyLinks.map(link => (
                      <Link key={link.label} to={link.href} onClick={() => setIsOpen(false)} className="flex items-center space-x-4 p-2 rounded-2xl hover:bg-black/5 dark:hover:bg-white/5 transition-all group">
                        <div className="p-3 bg-brand-blue/10 rounded-2xl text-brand-blue group-hover:bg-brand-blue group-hover:text-white transition-all">{link.icon}</div>
                        <span className="font-bold text-gray-900 dark:text-white lowercase">{link.label}</span>
                      </Link>
                    ))}
                  </div>
                </div>

                <hr className="border-black/5 dark:border-white/5" />

                <div className="flex flex-col space-y-4">
                  <Link to="/login" onClick={() => setIsOpen(false)} className="text-lg font-bold text-gray-900 dark:text-white uppercase tracking-widest text-center py-4 border border-black/5 dark:border-white/5 rounded-2xl">Log in</Link>
                  <Link to="/create-account" onClick={() => setIsOpen(false)} className="w-full py-5 bg-brand-blue text-white font-black rounded-[20px] text-center shadow-lg shadow-blue-500/20 uppercase tracking-widest active:scale-95 transition-transform">
                    Get Started
                  </Link>
                </div>
              </div>
            </div>
            <div className="mt-8 text-center text-gray-400 dark:text-gray-600 text-[10px] font-black uppercase tracking-[0.3em]">
              © 2024 waletz inc.
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
