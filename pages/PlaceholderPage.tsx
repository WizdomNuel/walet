
import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const PlaceholderPage: React.FC = () => {
  const location = useLocation();
  const title = location.pathname.substring(1).replace(/-/g, ' ').replace(/\//g, ' > ').toUpperCase() || 'WALETZ';

  return (
    <div className="min-h-screen pt-32 pb-20 px-4 sm:px-6 lg:px-8 transition-colors relative">
      <div className="max-w-4xl mx-auto relative z-10">
        <Link to="/" className="inline-flex items-center space-x-2 text-custom-secondary hover:text-custom-primary mb-12 transition-all group px-4">
          <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
          <span className="font-bold uppercase text-[10px] tracking-widest text-gray-500">Back to home</span>
        </Link>
        <div className="px-4">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-brand-blue/10 border border-brand-blue/20 text-brand-blue text-[10px] font-black tracking-widest mb-8 uppercase">
            Portal Module / {title}
          </div>
          <h1 className="text-5xl sm:text-7xl lg:text-9xl font-black mb-8 text-custom-primary tracking-tighter leading-[1] md:leading-[0.85] font-gotham lowercase text-glow">{title.toLowerCase()}</h1>
          <p className="text-lg md:text-xl text-custom-secondary mb-12 leading-relaxed font-medium max-w-2xl">
            This module is being initialized on the Waletz core infrastructure. Our engineers are finalizing the documentation for the <span className="text-brand-blue italic">{title.toLowerCase()}</span> protocol.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-20 px-4">
          <div className="p-10 md:p-12 rounded-[40px] md:rounded-[56px] glass-panel border-black/5 dark:border-white/5 group shadow-2xl relative overflow-hidden">
            <h3 className="text-[10px] md:text-xs font-black mb-6 text-custom-primary tracking-widest uppercase opacity-40 font-gotham">System Status</h3>
            <div className="flex items-center space-x-4 text-green-500">
              <div className="w-3 h-3 rounded-full bg-green-500 shadow-[0_0_15px_rgba(34,197,94,0.6)] animate-pulse"></div>
              <span className="text-base md:text-lg font-black uppercase tracking-widest font-gotham">Global Operational</span>
            </div>
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-green-500/5 rounded-full blur-3xl"></div>
          </div>
          <div className="p-10 md:p-12 rounded-[40px] md:rounded-[56px] glass-panel border-black/5 dark:border-white/5 shadow-2xl relative overflow-hidden">
            <h3 className="text-[10px] md:text-xs font-black mb-6 text-custom-primary tracking-widest uppercase opacity-40 font-gotham">Latest Version</h3>
            <span className="text-base md:text-lg text-custom-secondary font-black uppercase tracking-widest font-gotham">v2.4.0-stable</span>
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-brand-blue/5 rounded-full blur-3xl"></div>
          </div>
        </div>

        <div className="p-12 md:p-24 rounded-[48px] md:rounded-[80px] bg-brand-blue/5 border border-brand-blue/20 border-dashed text-center mx-4 relative overflow-hidden group shadow-xl">
          <p className="text-lg md:text-xl text-custom-secondary mb-10 font-medium font-gotham max-w-md mx-auto">Need priority access to this section?</p>
          <Link
            to="/talk-to-sales"
            className="w-full sm:w-auto px-12 py-5 md:py-8 bg-brand-blue hover:bg-blue-600 text-white font-black rounded-2xl md:rounded-3xl transition-all inline-block shadow-2xl shadow-blue-500/20 active:scale-95 text-xl md:text-2xl font-gotham lowercase"
          >
            Talk to a Specialist
          </Link>
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-blue/5 blur-[100px] rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default PlaceholderPage;
