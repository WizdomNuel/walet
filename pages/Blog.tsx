
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Clock, User, ArrowRight, Tag } from 'lucide-react';

const Blog: React.FC = () => {
  const categories = ['All', 'Product Updates', 'Engineering', 'Financial Regulation', 'Company News'];

  const posts = [
    {
      id: 1,
      title: 'The Future of Cross-Border Settlement: Moving Beyond SWIFT',
      excerpt: 'How blockchain-inspired protocols are redefining how value moves across borders in real-time, reducing latency from days to seconds.',
      author: 'James Chen',
      date: 'Oct 24, 2024',
      readTime: '8 min read',
      category: 'Financial Regulation',
      image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=800'
    },
    {
      id: 2,
      title: 'Scaling Waletz API to 10k Requests Per Second',
      excerpt: 'A deep dive into our infrastructure overhaul and how we achieved 99.99% uptime during peak transaction volume.',
      author: 'Elena Rodriguez',
      date: 'Oct 12, 2024',
      readTime: '12 min read',
      category: 'Engineering',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc48?auto=format&fit=crop&q=80&w=800'
    },
    {
      id: 3,
      title: 'Introducing Smart Treasury: Automated Yield for Idle Cash',
      excerpt: 'Announcing our latest product feature that allows enterprises to put their operating capital to work without manual intervention.',
      author: 'Sarah Jenkins',
      date: 'Sep 28, 2024',
      readTime: '5 min read',
      category: 'Product Updates',
      image: 'https://images.unsplash.com/photo-1611974714014-4b50d1a66224?auto=format&fit=crop&q=80&w=800'
    }
  ];

  return (
    <div className="min-h-screen pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-custom-bg transition-colors">
      <div className="max-w-7xl mx-auto">
        <Link to="/" className="inline-flex items-center space-x-2 text-custom-secondary hover:text-custom-primary mb-12 md:mb-16 transition-all group px-4">
          <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
          <span className="font-bold uppercase text-[10px] tracking-widest text-gray-500">Back to home</span>
        </Link>

        <div className="text-center mb-20 px-4">
          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black mb-8 text-custom-primary tracking-tighter leading-[1] md:leading-[0.85] font-gotham lowercase text-glow">The waletz <br /> <span className="text-brand-blue italic">Ledger.</span></h1>
          <p className="text-lg md:text-xl text-custom-secondary max-w-2xl mx-auto leading-relaxed font-medium">
            Insights, engineering deep-dives, and financial perspectives from the team building the future of value exchange.
          </p>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-3 mb-16 px-4">
          {categories.map((cat) => (
            <button key={cat} className="px-5 md:px-6 py-2 md:py-2.5 rounded-full border border-black/5 dark:border-white/5 text-[10px] md:text-xs font-black uppercase tracking-widest hover:border-brand-blue hover:text-brand-blue transition-all glass-panel shadow-sm">
              {cat}
            </button>
          ))}
        </div>

        {/* Featured Post */}
        <div className="mb-16 md:mb-24 rounded-[32px] md:rounded-[48px] overflow-hidden glass-panel border-black/5 dark:border-white/5 group cursor-pointer shadow-2xl mx-4">
          <div className="grid lg:grid-cols-2">
            <div className="h-64 sm:h-80 lg:h-auto overflow-hidden relative">
              <img src={posts[0].image} alt="Featured" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent lg:hidden"></div>
            </div>
            <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-center">
              <div className="flex items-center space-x-4 mb-6 md:mb-8">
                <span className="px-3 py-1 rounded-full bg-brand-blue/10 border border-brand-blue/20 text-brand-blue text-[10px] font-black uppercase tracking-widest">{posts[0].category}</span>
                <span className="text-[10px] md:text-xs text-custom-secondary flex items-center font-bold uppercase tracking-wider"><Clock size={14} className="mr-2" /> {posts[0].readTime}</span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-6 text-custom-primary group-hover:text-brand-blue transition-colors tracking-tighter leading-[1.1] font-gotham lowercase">{posts[0].title}</h2>
              <p className="text-sm md:text-lg text-custom-secondary mb-10 leading-relaxed font-medium opacity-80">{posts[0].excerpt}</p>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-brand-blue/20 overflow-hidden shadow-lg">
                    <img src="https://picsum.photos/seed/james/100/100" alt="Author" className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <div className="text-sm md:text-base font-black text-custom-primary tracking-tight">{posts[0].author}</div>
                    <div className="text-[10px] md:text-xs text-custom-secondary font-bold uppercase tracking-widest">{posts[0].date}</div>
                  </div>
                </div>
                <div className="w-12 h-12 md:w-16 md:h-16 rounded-full glass-panel border-black/5 dark:border-white/5 flex items-center justify-center text-brand-blue group-hover:bg-brand-blue group-hover:text-white transition-all shadow-xl group-hover:scale-110">
                  <ArrowRight size={24} />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Grid Posts */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 px-4">
          {posts.slice(1).map((post) => (
            <div key={post.id} className="rounded-[32px] md:rounded-[40px] overflow-hidden glass-panel border-black/5 dark:border-white/5 group cursor-pointer flex flex-col shadow-2xl">
              <div className="h-56 md:h-64 overflow-hidden">
                <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
              </div>
              <div className="p-8 md:p-10 flex-grow flex flex-col">
                <div className="flex items-center space-x-4 mb-6">
                  <span className="text-[10px] font-black text-brand-blue uppercase tracking-widest border-b border-brand-blue/20 pb-1">{post.category}</span>
                  <span className="text-[10px] md:text-xs text-custom-secondary flex items-center font-bold uppercase tracking-wider"><Clock size={14} className="mr-2" /> {post.readTime}</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-black mb-4 text-custom-primary group-hover:text-brand-blue transition-colors tracking-tighter leading-tight font-gotham lowercase">{post.title}</h3>
                <p className="text-sm md:text-base text-custom-secondary mb-8 leading-relaxed font-medium opacity-80 line-clamp-2">{post.excerpt}</p>
                <div className="mt-auto pt-6 border-t border-black/5 dark:border-white/5 flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 rounded-full border-2 border-brand-blue/20 overflow-hidden shadow-md">
                      <img src={`https://picsum.photos/seed/${post.author}/100/100`} alt="Author" className="w-full h-full object-cover" />
                    </div>
                    <div className="text-[11px] md:text-xs font-black text-custom-primary tracking-tight">{post.author} <span className="text-gray-400 mx-1">•</span> {post.date}</div>
                  </div>
                  <ArrowRight size={20} className="text-brand-blue group-hover:translate-x-2 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Newsletter */}
        <div className="mt-24 md:mt-40 p-10 md:p-16 lg:p-24 rounded-[40px] md:rounded-[64px] glass-panel border-black/5 dark:border-white/5 text-center relative overflow-hidden mx-4 shadow-2xl">
          <div className="relative z-10 max-w-2xl mx-auto px-4">
            <div className="w-16 h-16 md:w-20 md:h-20 bg-brand-blue/10 rounded-3xl flex items-center justify-center text-brand-blue mx-auto mb-8 md:mb-10 shadow-lg group-hover:rotate-12 transition-transform">
              <Tag size={32} md:size={40} />
            </div>
            <h2 className="text-3xl md:text-6xl font-black mb-8 text-custom-primary tracking-tighter leading-none font-gotham lowercase">Subscribe to <br className="sm:hidden" /> the <span className="text-brand-blue italic">Ledger.</span></h2>
            <p className="text-lg md:text-xl text-custom-secondary mb-12 font-medium opacity-80 leading-relaxed font-gotham">Get the latest insights on fintech, engineering, and global markets delivered straight to your inbox.</p>
            <form className="flex flex-col sm:flex-row gap-4 sm:gap-6 max-w-lg mx-auto" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-grow bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/5 rounded-2xl px-6 py-5 text-custom-primary focus:outline-none focus:border-brand-blue transition-all font-medium text-lg placeholder:text-gray-400"
              />
              <button className="px-10 py-5 bg-brand-blue text-white font-black rounded-2xl hover:bg-blue-600 transition-all shadow-xl shadow-blue-500/20 font-gotham lowercase text-lg">
                Join 50k+ readers
              </button>
            </form>
          </div>
          <div className="absolute top-0 right-0 w-64 md:w-96 h-64 md:h-96 bg-brand-blue/5 blur-[120px] rounded-full"></div>
          <div className="absolute bottom-0 left-0 w-64 md:w-96 h-64 md:h-96 bg-cyan-500/5 blur-[120px] rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
