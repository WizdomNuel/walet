
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Search,
  Terminal,
  Code,
  Book,
  Cpu,
  Globe,
  ShieldCheck,
  BarChart,
  ArrowRight,
  Rocket,
  Key,
  Webhook,
  AlertCircle,
  MessageSquare,
  Copy,
  Check,
  Lock,
  Layers,
  Zap,
  Activity,
  Server,
  Database,
  Shield,
  Code2,
  // Fix: Added missing CheckCircle2 import
  CheckCircle2
} from 'lucide-react';

const Developers: React.FC = () => {
  const [activeTab, setActiveTab] = useState('Node.js');
  const [copied, setCopied] = useState(false);

  const sdkTabs = ['Node.js', 'Python', 'Ruby', 'Go', 'Java'];

  const codeSnippets: Record<string, string> = {
    'Node.js': `import { Waletz } from 'waletz-node';

const client = new Waletz(process.env.WALETZ_API_KEY);

export default async function handler(req, res) {
  try {
    const session = await client.checkout.sessions.create({
      success_url: 'https://example.com/success',
      line_items: [
        { price: 'price_123', quantity: 1 },
      ],
      mode: 'payment',
    });

    res.redirect(303, session.url);
  } catch (err) {
    res.status(500).json(err);
  }
}`,
    'Python': `import waletz
import os

waletz.api_key = os.getenv("WALETZ_API_KEY")

session = waletz.checkout.Session.create(
    success_url="https://example.com/success",
    line_items=[{"price": "price_123", "quantity": 1}],
    mode="payment",
)

print(session.url)`,
    'Ruby': `require 'waletz'

Waletz.api_key = ENV['WALETZ_API_KEY']

session = Waletz::Checkout::Session.create({
  success_url: 'https://example.com/success',
  line_items: [{ price: 'price_123', quantity: 1 }],
  mode: 'payment',
})

puts session.url`,
    'Go': `package main

import (
  "github.com/waletz/waletz-go"
  "github.com/waletz/waletz-go/checkout/session"
)

func main() {
  waletz.Key = "sk_test_..."

  params := &waletz.CheckoutSessionParams{
    SuccessURL: waletz.String("https://example.com/success"),
    LineItems: []*waletz.CheckoutSessionLineItemParams{
      {
        Price:    waletz.String("price_123"),
        Quantity: waletz.Int64(1),
      },
    },
    Mode: waletz.String("payment"),
  }

  s, _ := session.New(params)
  println(s.URL)
}`,
    'Java': `import com.waletz.Waletz;
import com.waletz.model.checkout.Session;
import com.waletz.param.checkout.SessionCreateParams;

public class Example {
  public static void main(String[] args) {
    Waletz.apiKey = "sk_test_...";

    SessionCreateParams params = SessionCreateParams.builder()
      .setSuccessUrl("https://example.com/success")
      .addLineItem(
        SessionCreateParams.LineItem.builder()
          .setPrice("price_123")
          .setQuantity(1L)
          .build()
      )
      .setMode(SessionCreateParams.Mode.PAYMENT)
      .build();

    Session session = Session.create(params);
    System.out.println(session.getUrl());
  }
}`
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(codeSnippets[activeTab] || codeSnippets['Node.js']);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-[#08090C] text-white pt-20 transition-colors selection:bg-brand-blue/30">
      {/* Dev Navbar Sub-menu */}
      <div className="border-b border-black/10 dark:border-white/5 bg-white/80 dark:bg-[#0b0d11]/80 backdrop-blur-xl sticky top-20 z-40 transition-sm overflow-x-auto no-scrollbar">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between min-w-[600px] md:min-w-0">
          <div className="flex items-center space-x-8">
            <span className="text-sm font-black text-gray-900 dark:text-white flex items-center uppercase tracking-widest font-gotham">
              <Code className="mr-2 text-brand-blue" size={16} /> Developers
            </span>
            <div className="flex space-x-6">
              <Link to="/treasury" className="text-[10px] md:text-xs font-black text-gray-500 hover:text-brand-blue dark:hover:text-white transition-colors uppercase tracking-widest">Products</Link>
              <Link to="/resources" className="text-[10px] md:text-xs font-black text-gray-500 hover:text-brand-blue dark:hover:text-white transition-colors uppercase tracking-widest">Docs</Link>
              <Link to="/api-reference" className="text-[10px] md:text-xs font-black text-brand-blue dark:text-brand-blue transition-colors uppercase tracking-widest">API Reference</Link>
              <Link to="/pricing" className="text-[10px] md:text-xs font-black text-gray-500 hover:text-brand-blue dark:hover:text-white transition-colors uppercase tracking-widest">Pricing</Link>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="relative group hidden lg:block">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={14} />
              <input
                type="text"
                placeholder="Search documentation..."
                className="bg-black/5 dark:bg-[#15171E] border border-black/5 dark:border-white/10 rounded-xl pl-9 pr-12 py-2 text-xs focus:outline-none focus:border-brand-blue w-64 text-gray-900 dark:text-white transition-all"
              />
              <div className="absolute right-3 top-1/2 -translate-y-1/2 border border-black/10 dark:border-white/10 rounded-lg px-1.5 py-0.5 text-[9px] font-black text-gray-400">
                ⌘K
              </div>
            </div>
            <Link to="/talk-to-sales" className="text-[9px] md:text-[10px] font-black uppercase tracking-widest bg-brand-blue text-white px-4 md:px-5 py-2 md:py-2.5 rounded-xl hover:bg-blue-600 transition-all shadow-lg shadow-blue-500/20 whitespace-nowrap">Contact Sales</Link>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-20">
        <div className="flex-1 text-center lg:text-left animate-reveal">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-green-500 text-[10px] font-black tracking-widest mb-10 uppercase shadow-sm">
            <span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2 animate-pulse"></span>
            v2.4 API is now live
          </div>
          <h1 className="text-5xl md:text-8xl font-black mb-10 leading-[1] md:leading-[0.85] tracking-tighter text-gray-900 dark:text-white font-gotham text-glow">
            Build the future of <br />
            <span className="text-brand-blue italic">finance.</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto lg:mx-0 mb-12 leading-relaxed font-medium">
            The complete toolkit for borderless payments, compliance, and financial intelligence. Integrate enterprise-grade banking infrastructure in minutes.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-6">
            <Link to="/resources" className="w-full sm:w-auto px-10 py-5 bg-gray-900 dark:bg-white text-white dark:text-black font-black rounded-2xl flex items-center justify-center hover:scale-105 transition-all shadow-2xl font-gotham lowercase">
              <Book className="mr-3" size={20} /> Read Docs
            </Link>
            <Link to="/api-reference" className="w-full sm:w-auto px-10 py-5 bg-white/5 dark:bg-[#15171E] border border-black/5 dark:border-white/10 text-gray-900 dark:text-white font-black rounded-2xl flex items-center justify-center hover:bg-black/10 dark:hover:bg-[#1c202a] transition-all font-gotham lowercase">
              <Terminal className="mr-3" size={20} /> API Reference
            </Link>
          </div>
        </div>

        {/* Code Snippet Card */}
        <div className="flex-1 w-full max-w-2xl bg-white dark:bg-[#0B0D11] border border-black/5 dark:border-white/10 rounded-[24px] md:rounded-[32px] overflow-hidden shadow-2xl animate-reveal delay-200">
          <div className="bg-black/5 dark:bg-[#15171E] px-4 md:px-6 py-3 md:py-4 flex items-center justify-between border-b border-black/5 dark:border-white/5">
            <div className="flex space-x-2">
              <div className="w-2.5 h-2.5 bg-red-500/30 rounded-full"></div>
              <div className="w-2.5 h-2.5 bg-yellow-500/30 rounded-full"></div>
              <div className="w-2.5 h-2.5 bg-green-500/30 rounded-full"></div>
            </div>
            <div className="text-[9px] md:text-[10px] text-gray-400 font-mono flex items-center font-black uppercase tracking-widest">
              <Lock size={10} className="mr-2" /> secure_session.js
            </div>
          </div>
          <div className="p-6 md:p-8 font-mono text-xs md:text-sm leading-relaxed overflow-x-auto text-gray-600 dark:text-gray-300 min-h-[300px] md:min-h-[360px] no-scrollbar">
            <pre className="whitespace-pre">
              {codeSnippets[activeTab] || codeSnippets['Node.js']}
            </pre>
          </div>
        </div>
      </section>

      {/* NEW SECTION: Technical Architecture */}
      <section className="py-32 bg-black/[0.02] dark:bg-[#0b0d11]/50 border-y border-black/5 dark:border-white/5 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-blue/5 blur-[120px] rounded-full"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-20">
            <div className="flex-1 space-y-12 px-4">
              <div className="animate-reveal">
                <h2 className="text-3xl md:text-5xl font-black text-gray-900 dark:text-white tracking-tighter font-gotham lowercase mb-6 leading-none">Built for <span className="text-brand-blue italic">Reliability.</span></h2>
                <p className="text-lg text-gray-600 dark:text-gray-400 font-medium leading-relaxed">
                  Our API is built on a distributed mesh of clearing nodes, ensuring that your financial operations are never dependent on a single point of failure.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {[
                  { icon: <Layers />, title: 'Idempotency', desc: 'Safely retry requests without duplicate transactions.' },
                  { icon: <Shield />, title: 'HSTS Forced', desc: 'Mandatory high-level security for all data in transit.' },
                  { icon: <Activity />, title: '99.999% SLA', desc: 'Industrial grade uptime for mission critical apps.' },
                  { icon: <Zap />, title: 'Edge Routing', desc: 'Global request latency minimized via local POPs.' }
                ].map((item, i) => (
                  <div key={i} className="flex space-x-4 group animate-reveal" style={{ animationDelay: `${i * 0.1}s` }}>
                    <div className="w-12 h-12 bg-brand-blue/10 rounded-xl flex items-center justify-center text-brand-blue shrink-0 group-hover:bg-brand-blue group-hover:text-white transition-all">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="text-base font-black text-gray-900 dark:text-white mb-1 lowercase font-gotham">{item.title}</h4>
                      <p className="text-xs text-gray-500 font-medium leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex-1 w-full lg:max-w-md px-4">
              <div className="p-8 md:p-10 glass-panel rounded-[32px] md:rounded-[48px] border-black/5 dark:border-white/10 shadow-2xl animate-float">
                <div className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-400 mb-8">System Health</div>
                <div className="space-y-6 md:space-y-8">
                  {[
                    { label: 'Payments API', status: 'Operational', color: 'green' },
                    { label: 'Identity Mesh', status: 'Operational', color: 'green' },
                    { label: 'Treasury Sync', status: 'Maintenance', color: 'yellow' },
                    { label: 'Auth Gateway', status: 'Operational', color: 'green' }
                  ].map((svc, i) => (
                    <div key={i} className="flex items-center justify-between">
                      <span className="text-sm font-bold text-gray-900 dark:text-white lowercase">{svc.label}</span>
                      <div className="flex items-center space-x-2">
                        <div className={`w-1.5 h-1.5 rounded-full bg-${svc.color}-500 animate-pulse`}></div>
                        <span className={`text-[10px] font-black uppercase tracking-widest text-${svc.color}-500`}>{svc.status}</span>
                      </div>
                    </div>
                  ))}
                </div>
                <Link to="/status" className="block mt-10 text-center py-4 bg-black/5 dark:bg-white/5 rounded-2xl text-[10px] font-black uppercase tracking-widest text-gray-500 hover:text-brand-blue transition-all">View Historical Logs</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SDK Section */}
      <section className="py-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between md:items-end mb-16 gap-8 animate-reveal px-4">
          <div>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 dark:text-white tracking-tighter lowercase font-gotham mb-4 leading-none">Native SDKs for <span className="text-brand-blue">your stack.</span></h2>
            <p className="text-lg text-gray-500 font-medium">Official libraries to get you integrated faster with first-class support.</p>
          </div>
          <Link to="/resources" className="text-brand-blue font-black text-xs uppercase tracking-widest flex items-center hover:underline group">
            View all libraries <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="bg-white dark:bg-[#0B0D11] border border-black/5 dark:border-white/10 rounded-[28px] md:rounded-[32px] overflow-hidden shadow-2xl animate-reveal mx-4">
          <div className="flex border-b border-black/5 dark:border-white/10 px-4 md:px-8 no-scrollbar overflow-x-auto bg-black/[0.01]">
            {sdkTabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`py-5 md:py-6 px-6 md:px-8 text-[10px] md:text-xs font-black uppercase tracking-[0.2em] transition-all border-b-2 relative shrink-0 ${activeTab === tab ? 'text-brand-blue border-brand-blue' : 'text-gray-400 border-transparent hover:text-gray-900 dark:hover:text-white'
                  }`}
              >
                {tab}
              </button>
            ))}
          </div>
          <div className="p-6 md:p-10 relative group">
            <button
              onClick={handleCopy}
              className="absolute top-6 md:top-10 right-6 md:right-10 p-2.5 md:p-3 bg-black/5 dark:bg-[#15171E] border border-black/5 dark:border-white/10 rounded-xl hover:scale-110 transition-all z-10"
              title="Copy code"
            >
              {copied ? <Check size={18} className="text-green-500" /> : <Copy size={18} className="text-gray-400 group-hover:text-brand-blue" />}
            </button>
            <div className="text-[10px] text-gray-400 font-mono mb-6 md:mb-8 font-black uppercase tracking-widest">/server/waletz_init.js</div>
            <pre className="font-mono text-xs md:text-sm leading-relaxed overflow-x-auto text-gray-600 dark:text-gray-300 min-h-[260px] md:min-h-[300px] whitespace-pre no-scrollbar">
              {codeSnippets[activeTab] || codeSnippets['Node.js']}
            </pre>
          </div>
          <div className="bg-black/[0.02] dark:bg-[#15171E] px-6 md:px-10 py-5 md:py-6 border-t border-black/5 dark:border-white/5 flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="text-[10px] md:text-xs text-gray-400 font-medium">Version 3.2.0-stable • Last deployment 2 days ago</div>
            <div className="flex space-x-6">
              <Link to="/docs" className="text-[10px] font-black text-brand-blue uppercase tracking-widest hover:underline">NPM →</Link>
              <Link to="/docs" className="text-[10px] font-black text-gray-500 uppercase tracking-widest hover:text-gray-900 dark:hover:text-white transition-colors">Documentation →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* NEW SECTION: Event-Driven Webhooks */}
      <section className="py-32 px-4 border-t border-black/5 dark:border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 md:gap-20 items-center px-4">
            <div className="animate-reveal">
              <h2 className="text-3xl md:text-5xl font-black text-gray-900 dark:text-white tracking-tighter lowercase font-gotham mb-8 leading-none">Real-time <span className="text-brand-blue italic">Signal Mesh.</span></h2>
              <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-12 leading-relaxed font-medium">
                Never poll for status again. Our global webhook system delivers instant notifications for every state change across your treasury.
              </p>
              <ul className="space-y-5 md:space-y-6">
                {[
                  'Automated signature verification',
                  'Guaranteed at-least-once delivery',
                  'Granular event subscription',
                  'Test environment simulation',
                  'Replay failed events instantly'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center space-x-4 text-gray-600 dark:text-gray-400 font-medium group text-sm md:text-base">
                    <div className="p-1.5 bg-brand-blue/10 rounded-lg text-brand-blue group-hover:bg-brand-blue group-hover:text-white transition-all shadow-sm">
                      <CheckCircle2 size={16} />
                    </div>
                    <span className="lowercase">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative group animate-reveal delay-200">
              <div className="absolute inset-0 bg-brand-blue/10 blur-[100px] rounded-full group-hover:bg-brand-blue/20 transition-all"></div>
              <div className="p-8 md:p-12 glass-panel rounded-[40px] md:rounded-[56px] border-black/5 dark:border-white/10 relative overflow-hidden shadow-2xl">
                <div className="flex items-center justify-between mb-10">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-brand-blue rounded-xl flex items-center justify-center text-white shadow-lg">
                      <Webhook size={20} />
                    </div>
                    <h4 className="text-sm font-black text-gray-900 dark:text-white lowercase font-gotham">webhook listener</h4>
                  </div>
                  <div className="px-3 py-1 bg-green-500/10 rounded-full text-green-500 text-[9px] md:text-[10px] font-black uppercase">Active</div>
                </div>
                <div className="space-y-4">
                  <div className="bg-black/5 dark:bg-black/40 rounded-2xl p-5 border border-black/5 dark:border-white/5 overflow-x-auto no-scrollbar">
                    <div className="text-[9px] font-black text-gray-400 uppercase mb-2">Endpoint URL</div>
                    <code className="text-[10px] md:text-xs text-brand-blue whitespace-nowrap">https://api.yourdomain.com/webhooks</code>
                  </div>
                  <div className="p-4 md:p-5 space-y-4">
                    <div className="flex items-center justify-between text-[11px] md:text-xs text-gray-500 font-medium border-b border-black/5 dark:border-white/5 pb-3">
                      <span>payment.succeeded</span>
                      <span className="text-[9px] md:text-[10px] text-gray-400 font-mono">1.4ms</span>
                    </div>
                    <div className="flex items-center justify-between text-[11px] md:text-xs text-gray-500 font-medium border-b border-black/5 dark:border-white/5 pb-3">
                      <span>vault.threshold_reached</span>
                      <span className="text-[9px] md:text-[10px] text-gray-400 font-mono">2.1ms</span>
                    </div>
                    <div className="flex items-center justify-between text-[11px] md:text-xs text-gray-500 font-medium">
                      <span>identity.verification_failed</span>
                      <span className="text-[9px] md:text-[10px] text-gray-400 font-mono">0.8ms</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NEW SECTION: Global Infrastructure Map-like UI */}
      <section className="py-32 px-4 relative overflow-hidden bg-white dark:bg-[#050608]">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 md:gap-20 items-center px-4">
          <div className="flex-1 order-2 lg:order-1 w-full">
            <div className="aspect-video glass-panel rounded-[40px] md:rounded-[64px] border-black/5 dark:border-white/10 p-1 relative shadow-2xl animate-reveal">
              <div className="w-full h-full bg-black/5 dark:bg-black/60 rounded-[39px] md:rounded-[63px] overflow-hidden relative flex items-center justify-center group">
                <Globe className="text-brand-blue opacity-20 group-hover:scale-110 transition-transform duration-1000 w-1/2 h-1/2" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="absolute top-1/4 left-1/3 w-1.5 md:w-2 h-1.5 md:h-2 bg-brand-blue rounded-full animate-ping"></div>
                  <div className="absolute top-1/2 left-2/3 w-1.5 md:w-2 h-1.5 md:h-2 bg-brand-blue rounded-full animate-ping delay-75"></div>
                  <div className="absolute bottom-1/4 left-1/2 w-1.5 md:w-2 h-1.5 md:h-2 bg-brand-blue rounded-full animate-ping delay-150"></div>
                </div>
                <div className="absolute bottom-4 md:bottom-8 left-4 md:left-8 p-3 md:p-4 glass-panel border-white/10 rounded-xl md:rounded-2xl shadow-xl">
                  <div className="text-[8px] md:text-[10px] font-black text-gray-400 uppercase mb-1 tracking-widest">Global POPs</div>
                  <div className="text-base md:text-xl font-black text-gray-900 dark:text-white">42 Locations</div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 order-1 lg:order-2 animate-reveal">
            <h2 className="text-3xl md:text-5xl font-black text-gray-900 dark:text-white tracking-tighter lowercase font-gotham mb-8 leading-none">Edge-First <br /> <span className="text-brand-blue italic">Infrastructure.</span></h2>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-10 leading-relaxed font-medium">
              We process requests at the network edge, closer to your customers. Sub-10ms latency for all core settlement endpoints across North America, Europe, and Asia.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { label: 'AWS PrivateLink Support', icon: <Server /> },
                { label: 'Direct Database Peering', icon: <Database /> },
                { label: 'Quantum Resistant Core', icon: <Shield /> },
                { label: 'Tier 1 Global Clearing', icon: <Globe /> }
              ].map((feat, i) => (
                <div key={i} className="p-4 bg-black/[0.02] dark:bg-white/5 rounded-2xl flex items-center space-x-3 border border-black/5 dark:border-white/5 hover:border-brand-blue/30 transition-all cursor-default">
                  <div className="text-brand-blue shrink-0">{feat.icon}</div>
                  <span className="text-xs md:text-sm font-bold text-gray-900 dark:text-white lowercase">{feat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Resources Grid */}
      <section className="py-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-10 px-4">
          <div className="bg-white dark:bg-[#0b0d11] border border-black/5 dark:border-white/5 p-10 md:p-16 rounded-[40px] md:rounded-[48px] group hover:border-brand-blue/50 transition-all flex flex-col justify-between shadow-2xl animate-reveal">
            <div>
              <div className="w-14 md:w-16 h-14 md:h-16 bg-brand-blue rounded-2xl flex items-center justify-center mb-10 shadow-xl shadow-blue-500/20">
                <Rocket className="text-white" size={28} />
              </div>
              <h2 className="text-3xl md:text-4xl font-black text-gray-900 dark:text-white tracking-tight lowercase font-gotham mb-8 leading-none">Quickstart <br /> Guide.</h2>
              <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-12 font-medium">
                Get up and running with your first transaction in less than 5 minutes. Includes interactive sandbox testing and sample credentials.
              </p>
            </div>
            <Link to="/resources" className="text-brand-blue font-black text-lg md:text-xl flex items-center hover:underline group/link font-gotham lowercase">
              Start Tutorial <ArrowRight size={20} className="ml-3 group-link:translate-x-2 transition-transform" />
            </Link>
          </div>

          {/* Smaller Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 animate-reveal delay-200">
            <Link to="/api-reference" className="p-8 md:p-10 bg-white dark:bg-[#0b0d11] border border-black/5 dark:border-white/5 rounded-[32px] md:rounded-[40px] hover:bg-black/[0.02] dark:hover:bg-[#15171E] transition-all group shadow-xl">
              <Key className="text-cyan-400 mb-8 group-hover:scale-110 transition-transform" size={24} />
              <h4 className="font-black text-lg md:text-xl text-gray-900 dark:text-white mb-2 font-gotham lowercase">Authentication</h4>
              <p className="text-gray-500 text-xs md:text-sm font-medium">Secure your API requests with rolling keys.</p>
            </Link>
            <Link to="/api-reference" className="p-8 md:p-10 bg-white dark:bg-[#0b0d11] border border-black/5 dark:border-white/5 rounded-[32px] md:rounded-[40px] hover:bg-black/[0.02] dark:hover:bg-[#15171E] transition-all group shadow-xl">
              <Webhook className="text-purple-400 mb-8 group-hover:scale-110 transition-transform" size={24} />
              <h4 className="font-black text-lg md:text-xl text-gray-900 dark:text-white mb-2 font-gotham lowercase">Webhooks</h4>
              <p className="text-gray-500 text-xs md:text-sm font-medium">Listen for events on your local server.</p>
            </Link>
            <Link to="/api-reference" className="p-8 md:p-10 bg-white dark:bg-[#0b0d11] border border-black/5 dark:border-white/10 rounded-[32px] md:rounded-[40px] hover:bg-black/[0.02] dark:hover:bg-[#15171E] transition-all group shadow-xl">
              <AlertCircle className="text-red-400 mb-8 group-hover:scale-110 transition-transform" size={24} />
              <h4 className="font-black text-lg md:text-xl text-gray-900 dark:text-white mb-2 font-gotham lowercase">Errors</h4>
              <p className="text-gray-500 text-xs md:text-sm font-medium">Troubleshoot integration issues fast.</p>
            </Link>
            <Link to="/api-reference" className="p-8 md:p-10 bg-white dark:bg-[#0b0d11] border border-black/5 dark:border-white/5 rounded-[32px] md:rounded-[40px] hover:bg-black/[0.02] dark:hover:bg-[#15171E] transition-all group shadow-xl">
              <MessageSquare className="text-blue-400 mb-8 group-hover:scale-110 transition-transform" size={24} />
              <h4 className="font-black text-lg md:text-xl text-gray-900 dark:text-white mb-2 font-gotham lowercase">Community</h4>
              <p className="text-gray-500 text-xs md:text-sm font-medium">Join our global developer discord.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Developer CTA Section */}
      <section className="py-48 bg-white dark:bg-[#0B0D11] border-t border-black/5 dark:border-white/5 relative overflow-hidden">
        <div className="absolute inset-0 bg-brand-blue/[0.02] dark:bg-brand-blue/[0.02] animate-pulse"></div>
        <div className="max-w-4xl mx-auto px-6 md:px-8 text-center relative z-10">
          <Code2 className="text-brand-blue mx-auto mb-10 md:mb-12 animate-float" size={60} md:size={80} />
          <h2 className="text-4xl md:text-7xl font-black text-gray-900 dark:text-white tracking-tighter lowercase font-gotham mb-10 leading-none">Ready to <span className="text-brand-blue italic">Build?</span></h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-12 md:mb-16 font-medium max-w-2xl mx-auto">
            Connect to institutional-grade liquidity and automated settlement through a single, secure programmatic gateway.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6 md:gap-8 w-full max-w-lg mx-auto">
            <Link to="/talk-to-sales" className="w-full sm:w-auto px-10 md:px-12 py-5 md:py-6 bg-brand-blue text-white font-black rounded-2xl md:rounded-2xl hover:bg-blue-600 transition-all text-lg md:text-xl shadow-xl shadow-blue-500/20 font-gotham lowercase text-center">
              Request API Key
            </Link>
            <Link to="/pricing" className="w-full sm:w-auto px-10 md:px-12 py-5 md:py-6 bg-black/5 dark:bg-white/5 text-gray-900 dark:text-white font-black rounded-2xl md:rounded-2xl hover:bg-black/10 dark:hover:bg-white/10 transition-all text-lg md:text-xl border border-black/5 dark:border-white/10 font-gotham lowercase text-center">
              View API Pricing
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Developers;
