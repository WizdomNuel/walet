
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Briefcase, Globe, Zap, Users, ArrowRight, Heart } from 'lucide-react';

const Careers: React.FC = () => {
  const openings = [
    { title: 'Senior Protocol Engineer', dept: 'Engineering', location: 'Remote / NYC', type: 'Full-time' },
    { title: 'Global Compliance Manager', dept: 'Legal', location: 'Singapore', type: 'Full-time' },
    { title: 'Lead Product Designer', dept: 'Design', location: 'Remote / London', type: 'Full-time' },
    { title: 'Treasury Operations Specialist', dept: 'Finance', location: 'Zurich', type: 'Full-time' },
    { title: 'Customer Growth Lead', dept: 'Sales', location: 'San Francisco', type: 'Full-time' },
  ];

  return (
    <div className="min-h-screen pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-custom-bg transition-colors">
      <div className="max-w-7xl mx-auto">
        <Link to="/" className="inline-flex items-center space-x-2 text-custom-secondary hover:text-custom-primary mb-12 md:mb-16 transition-all group px-4">
          <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
          <span className="font-bold uppercase text-[10px] tracking-widest text-gray-500">Back to home</span>
        </Link>

        <div className="text-center mb-24 md:mb-32 px-4 animate-reveal">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-500 text-[10px] font-black tracking-widest mb-8 uppercase">
            Build the Future With Us
          </div>
          <h1 className="text-5xl sm:text-7xl lg:text-9xl font-black mb-8 text-custom-primary tracking-tighter leading-[1] md:leading-[0.85] font-gotham lowercase text-glow">Your career, <br /> <span className="text-brand-blue italic">unlimited.</span></h1>
          <p className="text-lg md:text-xl text-custom-secondary max-w-3xl mx-auto leading-relaxed font-medium">
            We're a global team of visionaries, engineers, and designers redefining the movement of value. Come build the borderless future.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-32 md:mb-40 px-4 animate-reveal">
          {[
            { icon: <Globe />, title: 'Global Impact', desc: 'Work on infrastructure that powers the global economy.' },
            { icon: <Zap />, title: 'Rapid Growth', desc: 'We move at the speed of the edge. Scale your career fast.' },
            { icon: <Heart />, title: 'Holistic Culture', desc: 'Flexible work, health parity, and deep focus cycles.' }
          ].map((item, i) => (
            <div key={i} className="p-8 md:p-10 rounded-[32px] md:rounded-[48px] glass-panel border-black/5 dark:border-white/5 hover:border-brand-blue/30 transition-all group shadow-2xl">
              <div className="w-14 h-14 md:w-16 md:h-16 bg-brand-blue/10 rounded-2xl md:rounded-3xl flex items-center justify-center text-brand-blue mb-8 group-hover:scale-110 transition-transform shadow-lg">
                {item.icon}
              </div>
              <h3 className="text-2xl md:text-3xl font-black mb-4 text-custom-primary tracking-tight font-gotham lowercase">{item.title}</h3>
              <p className="text-sm md:text-base text-custom-secondary font-medium opacity-80 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="px-4 animate-reveal">
          <div className="flex items-center space-x-4 mb-12 md:mb-16">
            <div className="w-12 h-12 md:w-16 md:h-16 bg-brand-blue/10 rounded-2xl flex items-center justify-center text-brand-blue shadow-lg">
              <Briefcase size={24} md:size={32} />
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-custom-primary tracking-tighter font-gotham lowercase leading-none">Open <span className="text-brand-blue italic">Missions.</span></h2>
          </div>
          <div className="space-y-4 md:space-y-6">
            {openings.map((job, idx) => (
              <Link
                key={idx}
                to="/contact"
                className="flex flex-col sm:flex-row justify-between items-start sm:items-center p-8 md:p-10 glass-panel border-black/5 dark:border-white/5 rounded-[32px] md:rounded-[40px] hover:border-brand-blue/30 transition-all group shadow-xl"
              >
                <div className="mb-6 sm:mb-0">
                  <h4 className="text-xl md:text-2xl font-black text-custom-primary mb-2 group-hover:text-brand-blue transition-colors tracking-tight font-gotham lowercase">{job.title}</h4>
                  <div className="flex flex-wrap items-center gap-3 text-[10px] md:text-xs font-black text-custom-secondary uppercase tracking-widest">
                    <span className="bg-black/5 dark:bg-white/5 px-3 py-1 rounded-full">{job.dept}</span>
                    <span className="text-brand-blue opacity-30">•</span>
                    <span className="bg-black/5 dark:bg-white/5 px-3 py-1 rounded-full">{job.location}</span>
                  </div>
                </div>
                <div className="flex items-center text-brand-blue font-black text-[10px] md:text-xs uppercase tracking-widest bg-brand-blue/5 px-6 py-3 rounded-full group-hover:bg-brand-blue group-hover:text-white transition-all shadow-sm">
                  Apply Now <ArrowRight size={18} className="ml-3 group-hover:translate-x-2 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Careers;
