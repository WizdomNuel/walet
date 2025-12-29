
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Check, Info, ArrowRight, Shield, Zap, Globe, Rocket, HelpCircle } from 'lucide-react';

const Pricing: React.FC = () => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annually'>('annually');

  const plans = [
    {
      name: 'Starter',
      description: 'Ideal for individuals and early-stage founders.',
      price: billingCycle === 'annually' ? '0' : '0',
      features: [
        'Up to $10k/mo throughput',
        'Standard KYC/AML screening',
        'Basic financial intelligence',
        'Email support (24h SLA)',
        'Personal wallet dashboard'
      ],
      cta: 'Start for Free',
      highlight: false,
      color: 'blue'
    },
    {
      name: 'Growth',
      description: 'Accelerated tools for high-velocity teams.',
      price: billingCycle === 'annually' ? '79' : '99',
      features: [
        'Up to $1M/mo throughput',
        'Autonomous KYB engine',
        'Predictive liquidity insights',
        'Priority 24/7 haptic support',
        'Full API & SDK Access',
        'Custom Webhook limits'
      ],
      cta: 'Start 14-day Trial',
      highlight: true,
      color: 'cyan'
    },
    {
      name: 'Enterprise',
      description: 'Global infrastructure for institutional scale.',
      price: 'Custom',
      features: [
        'Infinite processing volume',
        'Dedicated compliance node',
        'Multi-sig corporate governance',
        'White-label dashboard API',
        'On-premise deployments',
        'SLA-backed performance'
      ],
      cta: 'Request Demo',
      highlight: false,
      color: 'white'
    }
  ];

  return (
    <div className="min-h-screen pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-custom-bg transition-colors overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24 md:mb-32 animate-reveal px-4">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-500 text-[10px] font-bold tracking-widest mb-10 uppercase">
            Transparent Value Protocol
          </div>
          <h1 className="text-5xl sm:text-7xl lg:text-[110px] font-black mb-10 text-custom-primary tracking-tighter leading-[1] md:leading-[0.85] font-gotham text-glow lowercase px-4">Pure Value. <br /> <span className="text-brand-blue italic">No friction.</span></h1>
          <p className="text-lg md:text-xl text-custom-secondary max-w-2xl mx-auto mb-16 leading-relaxed stagger-1 animate-reveal px-4">
            Waletz scales with your ambition. Choose a tier that matches your current velocity and unlock global potential.
          </p>

          <div className="flex items-center justify-center space-x-4 md:space-x-6 mb-16 md:mb-20 stagger-2 animate-reveal">
            <span className={`text-[10px] md:text-xs font-black uppercase tracking-widest transition-colors ${billingCycle === 'monthly' ? 'text-custom-primary' : 'text-custom-secondary'}`}>Monthly</span>
            <button
              onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'annually' : 'monthly')}
              className="w-14 md:w-16 h-7 md:h-8 bg-custom-surface border border-custom rounded-full relative transition-all hover:border-brand-blue group"
            >
              <div className={`absolute top-1 w-5 md:w-6 h-5 md:h-6 bg-brand-blue rounded-full shadow-[0_0_15px_rgba(13,89,242,0.6)] transition-all duration-300 ${billingCycle === 'annually' ? 'left-8 md:left-9' : 'left-1'}`}></div>
            </button>
            <span className={`text-[10px] md:text-xs font-black uppercase tracking-widest transition-colors ${billingCycle === 'annually' ? 'text-custom-primary' : 'text-custom-secondary'}`}>
              Annually <span className="text-green-400 ml-1.5 whitespace-nowrap">(Save 20%)</span>
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 mb-32 md:mb-40 items-stretch px-4">
          {plans.map((plan, idx) => (
            <div
              key={plan.name}
              className={`p-8 md:p-10 lg:p-14 rounded-[32px] md:rounded-[48px] border transition-all flex flex-col group animate-reveal stagger-${idx + 1} ${plan.highlight
                  ? 'bg-[#0B0D11] border-brand-blue/50 ring-1 ring-brand-blue/30 shadow-2xl relative lg:scale-105 z-10'
                  : 'bg-custom-surface border-custom hover:border-custom-primary/20 shadow-xl'
                }`}
            >
              {plan.highlight && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 bg-brand-blue text-white text-[9px] font-black uppercase tracking-widest rounded-full shadow-lg z-20 whitespace-nowrap">
                  Most Advanced
                </div>
              )}

              <div className="mb-10">
                <h3 className="text-2xl md:text-3xl font-black mb-3 text-custom-primary tracking-tight font-gotham lowercase">{plan.name}</h3>
                <p className="text-custom-secondary text-sm leading-relaxed opacity-70 mb-8 min-h-[3rem] font-medium">{plan.description}</p>
                <div className="flex items-baseline space-x-2">
                  <span className="text-5xl lg:text-6xl font-black text-custom-primary tracking-tighter">
                    {plan.price === 'Custom' ? '' : '$'}{plan.price}
                  </span>
                  {plan.price !== 'Custom' && (
                    <span className="text-custom-secondary text-[10px] font-bold uppercase tracking-widest">/ month</span>
                  )}
                </div>
              </div>

              <div className="space-y-5 mb-12 flex-grow">
                {plan.features.map((feature, fIdx) => (
                  <div key={fIdx} className="flex items-start space-x-4">
                    <div className={`mt-1 p-0.5 rounded-full ${plan.highlight ? 'bg-brand-blue text-white' : 'bg-brand-blue/10 text-brand-blue'}`}>
                      <Check size={14} />
                    </div>
                    <span className="text-sm text-custom-primary font-medium opacity-90">{feature}</span>
                  </div>
                ))}
              </div>

              <Link
                to={plan.name === 'Enterprise' ? '/talk-to-sales' : '/create-account'}
                className={`w-full py-5 rounded-2xl font-black text-center transition-all flex items-center justify-center space-x-2 group/btn ${plan.highlight
                    ? 'bg-brand-blue text-white glow-blue hover:bg-blue-600'
                    : 'bg-white text-black hover:bg-gray-100'
                  }`}
              >
                <span>{plan.cta}</span>
                <ArrowRight size={20} className="group-hover/btn:translate-x-2 transition-transform" />
              </Link>
            </div>
          ))}
        </div>

        {/* Feature Comparison Section */}
        <section className="py-24 md:py-32 border-t border-custom animate-reveal px-4">
          <div className="text-center mb-16 md:mb-24 px-4">
            <h2 className="text-3xl md:text-5xl font-black mb-6 text-custom-primary tracking-tighter font-gotham lowercase leading-none">Full Platform <span className="text-brand-blue italic">Capabilities.</span></h2>
            <p className="text-lg text-custom-secondary max-w-xl mx-auto font-medium opacity-80">Compare tiers and find the exact infrastructure for your needs.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              { title: 'Treasury Dashboard', desc: 'Real-time visibility across 120+ currency accounts with autonomous sweep rules.', icon: <Zap /> },
              { title: 'Global Settlement', desc: 'Settle transactions instantly using our proprietary distributed ledger protocol.', icon: <Globe /> },
              { title: 'Security Perimeter', desc: 'Quantum-resistant encryption and multi-factor haptic authentication.', icon: <Shield /> },
              { title: 'API Integration', desc: 'Developer-first SDKs for Node.js, Python, Ruby, and native Go.', icon: <Rocket /> },
              { title: 'Compliance Engine', desc: 'Integrated KYC/KYB screening with 99.9% accuracy via AI vision.', icon: <Info /> },
              { title: 'Expert Support', desc: 'Direct access to our engineering team for integration assistance.', icon: <HelpCircle /> }
            ].map((feat, i) => (
              <div key={i} className="p-8 md:p-10 bg-custom-surface border border-custom rounded-[28px] md:rounded-[32px] hover:border-brand-blue/30 transition-all stagger-2 animate-reveal hover:shadow-xl group">
                <div className="w-12 h-12 bg-brand-blue/10 rounded-xl flex items-center justify-center mb-8 text-brand-blue group-hover:bg-brand-blue group-hover:text-white transition-all shadow-sm">
                  {feat.icon}
                </div>
                <h4 className="text-xl font-black mb-4 text-custom-primary tracking-tight font-gotham lowercase">{feat.title}</h4>
                <p className="text-custom-secondary text-xs md:text-sm leading-relaxed opacity-70 font-medium">{feat.desc}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Pricing;
