
import React, { useState, useEffect, useRef } from 'react';
import { 
  ChevronRight, 
  Monitor, 
  Zap, 
  ShieldCheck, 
  BarChart3, 
  Star, 
  CheckCircle2,
  Menu,
  X,
  ArrowUp,
  Globe,
  TrendingUp,
  MessageSquare
} from 'lucide-react';

// --- Types ---
interface Testimonial {
  name: string;
  business: string;
  quote: string;
  img: string;
}

// --- Components ---

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Our Process', href: '#process' },
    { name: 'Testimonials', href: '#testimonials' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'bg-black/80 backdrop-blur-xl border-b border-white/5 py-4' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#" className="text-2xl font-black tracking-tighter text-white group">
          T-PONE <span className="text-[#8D53FF] group-hover:text-[#A67BFF] transition-colors">STUDIOS</span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-10">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-[#E5E5E5] hover:text-white font-medium transition-all relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#8D53FF] transition-all group-hover:w-full"></span>
            </a>
          ))}
          <button className="bg-[#8D53FF] hover:bg-[#7a42eb] text-white px-8 py-3 rounded-full font-bold transition-all transform hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(141,83,255,0.3)]">
            Get Your Free Plan
          </button>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white p-2" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 bg-black z-40 transition-transform duration-500 ease-in-out md:hidden ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col h-full justify-center items-center space-y-8 p-6">
          <button className="absolute top-6 right-6 text-white" onClick={() => setIsOpen(false)}>
            <X size={32} />
          </button>
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-4xl font-bold text-white hover:text-[#8D53FF]"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <button className="bg-[#8D53FF] text-white w-full py-5 rounded-2xl font-bold text-xl shadow-lg">
            Get Your Free Plan
          </button>
        </div>
      </div>
    </nav>
  );
};

const Hero: React.FC = () => {
  return (
    <section className="relative pt-40 pb-20 md:pt-56 md:pb-32 overflow-hidden bg-[radial-gradient(circle_at_top_right,rgba(141,83,255,0.1),transparent_50%)]">
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 text-center md:text-left mb-16 md:mb-0">
            <div className="inline-flex items-center space-x-2 bg-[#8D53FF]/10 border border-[#8D53FF]/20 rounded-full px-4 py-1.5 mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#8D53FF] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#8D53FF]"></span>
              </span>
              <span className="text-[#8D53FF] text-xs font-bold uppercase tracking-widest">Accepting 3 New Clients This Month</span>
            </div>
            <h1 className="text-5xl md:text-8xl font-black text-white leading-[1.05] mb-8 tracking-tighter">
              We Turn Your Website Into Your <span className="text-[#8D53FF] drop-shadow-[0_0_15px_rgba(141,83,255,0.4)]">Best Salesperson.</span>
            </h1>
            <p className="text-xl md:text-2xl text-[#E5E5E5] mb-12 max-w-xl mx-auto md:mx-0 leading-relaxed font-medium">
              Stop losing local customers to competitors. We build high-converting websites and drive instant traffic with Google Ads & SEO.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 justify-center md:justify-start">
              <button className="group bg-[#8D53FF] hover:bg-[#7a42eb] text-white px-10 py-5 rounded-2xl font-bold text-xl transition-all transform hover:scale-105 active:scale-95 shadow-[0_10px_30px_rgba(141,83,255,0.4)] flex items-center justify-center">
                Start Getting More Clients 
                <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
            <div className="mt-12 flex flex-wrap items-center justify-center md:justify-start gap-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
               {/* Placeholders for partner logos or trust badges */}
               <div className="flex items-center space-x-2 font-black text-xl italic tracking-tighter">GOOGLE ADS</div>
               <div className="flex items-center space-x-2 font-black text-xl italic tracking-tighter">META PARTNER</div>
               <div className="flex items-center space-x-2 font-black text-xl italic tracking-tighter">LOCAL SEO</div>
            </div>
          </div>

          <div className="md:w-1/2 relative flex justify-center perspective-1000">
            <div className="relative w-full max-w-lg">
               {/* Laptop Mockup */}
               <div className="relative z-10 bg-zinc-900 rounded-3xl p-4 border border-white/10 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.8)] transform rotate-2 transition-transform duration-700 hover:rotate-0">
                  <div className="rounded-2xl overflow-hidden aspect-[16/10] bg-zinc-950">
                    <img 
                      src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800" 
                      alt="Digital Marketing Dashboard" 
                      className="w-full h-full object-cover opacity-80"
                    />
                  </div>
               </div>
               {/* Mobile Mockup */}
               <div className="absolute -bottom-10 -left-6 md:-left-16 z-20 w-32 md:w-56 bg-zinc-950 rounded-[2.5rem] p-3 border-4 border-zinc-800 shadow-2xl transform -rotate-3 transition-transform duration-700 hover:rotate-0">
                 <div className="rounded-[1.8rem] overflow-hidden aspect-[9/19] bg-zinc-900">
                    <img 
                      src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=400" 
                      alt="Mobile Marketing" 
                      className="w-full h-full object-cover opacity-80"
                    />
                 </div>
               </div>
               {/* Floating Glow */}
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[#8D53FF]/20 blur-[120px] rounded-full -z-10 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Features: React.FC = () => {
  const cards = [
    {
      icon: <Monitor className="text-[#8D53FF]" size={36} />,
      title: "High-Converting Websites",
      description: "Custom-designed sites that don't just look good—they are built to turn visitors into paying customers."
    },
    {
      icon: <Zap className="text-[#8D53FF]" size={36} />,
      title: "Traffic & Ads",
      description: "We manage your Google & Meta ads to put your business in front of people actively looking for your services right now."
    },
    {
      icon: <ShieldCheck className="text-[#8D53FF]" size={36} />,
      title: "Reputation Management",
      description: "We handle your Google Business Profile and reviews so you rank higher on Maps and build trust instantly."
    }
  ];

  return (
    <section id="services" className="py-32 bg-zinc-950/40 relative">
      <div className="container mx-auto px-6 relative">
        <div className="text-center mb-24 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight">The Complete Local Growth System</h2>
          <p className="text-[#E5E5E5] text-lg md:text-xl leading-relaxed">Everything you need to dominate your local competition, all in one premium package.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {cards.map((card, idx) => (
            <div 
              key={idx} 
              className="group relative bg-black border border-white/5 p-12 rounded-[2.5rem] transition-all duration-500 hover:border-[#8D53FF]/40 hover:-translate-y-4 shadow-[0_20px_40px_-20px_rgba(0,0,0,0.5)]"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#8D53FF]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-[2.5rem]"></div>
              <div className="bg-[#8D53FF]/10 w-20 h-20 rounded-3xl flex items-center justify-center mb-10 group-hover:bg-[#8D53FF]/20 group-hover:scale-110 transition-all duration-500">
                {card.icon}
              </div>
              <h3 className="text-3xl font-bold text-white mb-6 tracking-tight">{card.title}</h3>
              <p className="text-[#E5E5E5] text-lg leading-relaxed opacity-80 group-hover:opacity-100 transition-opacity">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Reporting: React.FC = () => {
  return (
    <section id="process" className="py-32 bg-black overflow-hidden relative">
      <div className="container mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center gap-20">
        <div className="md:w-1/2">
          <h2 className="text-4xl md:text-6xl font-black text-white mb-8 leading-[1.1] tracking-tight">
            Results You Can <span className="text-[#8D53FF]">Actually See.</span>
          </h2>
          <p className="text-xl text-[#E5E5E5] mb-10 leading-relaxed font-medium">
            No confusing jargon. We send you a simple weekly report showing exactly how many new leads and calls we generated for you.
          </p>
          <div className="space-y-6">
            {[
              { title: "Weekly Lead Dashboards", desc: "See your ROI in real-time." },
              { title: "Call Tracking", desc: "Know exactly which ads are ringing your phone." },
              { title: "Review Insights", desc: "Monitor your local reputation effortlessly." }
            ].map((item, i) => (
              <div key={i} className="flex group">
                <div className="flex-shrink-0 mt-1 mr-4 bg-[#8D53FF]/20 p-2 rounded-lg group-hover:bg-[#8D53FF] transition-colors">
                  <CheckCircle2 size={24} className="text-[#8D53FF] group-hover:text-white" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-xl mb-1">{item.title}</h4>
                  <p className="text-[#E5E5E5]/60 text-lg">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="md:w-1/2 relative group">
          <div className="absolute -inset-4 bg-gradient-to-r from-[#8D53FF]/20 to-transparent blur-2xl -z-10 group-hover:from-[#8D53FF]/40 transition-all duration-700"></div>
          <div className="bg-zinc-900 border border-white/10 rounded-[2.5rem] p-8 shadow-2xl relative overflow-hidden transition-all duration-700 transform group-hover:scale-[1.02]">
            <div className="flex items-center justify-between mb-10">
              <div className="flex space-x-2">
                <div className="w-4 h-4 rounded-full bg-zinc-800"></div>
                <div className="w-4 h-4 rounded-full bg-zinc-800"></div>
                <div className="w-4 h-4 rounded-full bg-zinc-800"></div>
              </div>
              <div className="text-xs text-white/30 font-bold tracking-[0.2em] uppercase">Weekly Performance Report</div>
            </div>
            
            <div className="space-y-10">
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-black p-6 rounded-3xl border border-white/5">
                   <p className="text-[#E5E5E5]/40 text-sm font-bold uppercase mb-2">New Leads</p>
                   <p className="text-4xl font-black text-white">+58</p>
                   <div className="w-full h-1 bg-[#8D53FF]/20 mt-4 rounded-full">
                     <div className="w-4/5 h-full bg-[#8D53FF] rounded-full"></div>
                   </div>
                </div>
                <div className="bg-black p-6 rounded-3xl border border-white/5">
                   <p className="text-[#E5E5E5]/40 text-sm font-bold uppercase mb-2">Google Calls</p>
                   <p className="text-4xl font-black text-white">+24</p>
                   <div className="w-full h-1 bg-green-500/20 mt-4 rounded-full">
                     <div className="w-2/3 h-full bg-green-500 rounded-full"></div>
                   </div>
                </div>
              </div>
              
              <div className="h-48 w-full flex items-end justify-between px-4 gap-3 bg-black/50 p-6 rounded-3xl border border-white/5">
                {[30, 50, 40, 80, 60, 95, 100].map((h, i) => (
                  <div key={i} className="flex-1 bg-gradient-to-t from-[#8D53FF] to-[#A67BFF] rounded-t-xl transition-all duration-1000 group-hover:opacity-100" style={{height: `${h}%`, opacity: 0.6}}></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Testimonials: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const testimonials: Testimonial[] = [
    {
      name: "Dr. Sarah Miller",
      business: "Pristine Dental Care",
      quote: "T-Pone Studios tripled our monthly new patients within just 90 days. Their tracking makes it clear exactly where our growth is coming from.",
      img: "https://i.pravatar.cc/150?u=sarah"
    },
    {
      name: "Mark Henderson",
      business: "Henderson Plumbing",
      quote: "I was tired of agencies charging for 'exposure'. T-Pone delivers actual phone calls. Our schedule is now booked 2 weeks out consistently.",
      img: "https://i.pravatar.cc/150?u=mark"
    },
    {
      name: "Elena Rodriguez",
      business: "Gusto Italian Kitchen",
      quote: "The reputation management service alone was worth it. We went from a 3.8 to a 4.7 on Google Maps and the table bookings followed.",
      img: "https://i.pravatar.cc/150?u=elena"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  return (
    <section id="testimonials" className="py-32 bg-zinc-950 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#8D53FF]/20 to-transparent"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight italic uppercase">Trusted by Local Giants</h2>
          <div className="flex justify-center space-x-2">
            {[0, 1, 2].map(i => (
              <div key={i} className={`h-1.5 rounded-full transition-all duration-500 ${activeIndex === i ? 'w-12 bg-[#8D53FF]' : 'w-4 bg-zinc-800'}`}></div>
            ))}
          </div>
        </div>

        <div className="relative max-w-5xl mx-auto min-h-[400px]">
          {testimonials.map((t, idx) => (
            <div 
              key={idx} 
              className={`absolute inset-0 transition-all duration-1000 ease-in-out transform flex flex-col md:flex-row items-center gap-12 ${
                idx === activeIndex ? 'opacity-100 translate-x-0 scale-100 pointer-events-auto' : 'opacity-0 translate-x-10 scale-95 pointer-events-none'
              }`}
            >
              <div className="md:w-1/3 flex justify-center">
                 <div className="relative group">
                    <div className="absolute -inset-4 bg-[#8D53FF] rounded-full blur-2xl opacity-20 group-hover:opacity-40 transition-opacity"></div>
                    <img 
                      src={t.img} 
                      alt={t.name} 
                      className="w-48 h-48 md:w-64 md:h-64 rounded-[3rem] object-cover border-4 border-zinc-900 shadow-2xl relative z-10"
                    />
                 </div>
              </div>
              <div className="md:w-2/3 text-center md:text-left">
                <div className="flex justify-center md:justify-start mb-6">
                  {[1, 2, 3, 4, 5].map(s => <Star key={s} fill="#8D53FF" size={24} className="text-[#8D53FF] mr-1" />)}
                </div>
                <p className="text-2xl md:text-4xl font-medium text-white italic mb-10 leading-snug">"{t.quote}"</p>
                <div>
                  <h4 className="text-2xl font-black text-white tracking-tight">{t.name}</h4>
                  <p className="text-[#8D53FF] text-lg font-bold tracking-wider uppercase">{t.business}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Footer: React.FC = () => {
  return (
    <footer className="bg-black pt-32 pb-12 relative overflow-hidden border-t border-white/5">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-32">
          <h2 className="text-5xl md:text-8xl font-black text-white mb-10 leading-[1.05] tracking-tighter">
            Ready to <span className="text-[#8D53FF] drop-shadow-[0_0_20px_rgba(141,83,255,0.4)]">Dominate?</span>
          </h2>
          <p className="text-xl md:text-2xl text-[#E5E5E5] mb-12 max-w-2xl mx-auto font-medium leading-relaxed">
            Let's build your growth plan today. Schedule your free 15-minute strategy call with our team.
          </p>
          <button className="bg-[#8D53FF] hover:bg-[#7a42eb] text-white px-12 py-7 rounded-[2rem] font-bold text-2xl transition-all transform hover:scale-105 active:scale-95 shadow-[0_15px_45px_rgba(141,83,255,0.5)] flex items-center justify-center mx-auto">
            Book My Free Call Now <Zap className="ml-3" fill="white" />
          </button>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-16 border-t border-white/10">
          <div className="text-3xl font-black tracking-tighter text-white mb-8 md:mb-0">
            T-PONE <span className="text-[#8D53FF]">STUDIOS</span>
          </div>
          <div className="flex flex-wrap justify-center gap-10 text-[#E5E5E5]/40 text-sm font-bold tracking-widest uppercase">
            <a href="#" className="hover:text-white transition-colors">Instagram</a>
            <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <span>&copy; {new Date().getFullYear()} T-Pone Studios</span>
          </div>
        </div>
      </div>
      
      {/* Decorative gradient for footer */}
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-[#8D53FF]/10 to-transparent -z-10 pointer-events-none"></div>
    </footer>
  );
};

const StickyCTA: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const [scrollDirection, setScrollDirection] = useState<'up' | 'down'>('down');
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Determine direction
      if (currentScrollY > lastScrollY.current) {
        setScrollDirection('down');
      } else {
        setScrollDirection('up');
      }
      lastScrollY.current = currentScrollY;

      // Logic: show if scrolled past hero AND (scrolling up OR near bottom)
      if (currentScrollY > 600) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Back to top - minimal */}
      <button 
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className={`fixed bottom-24 right-8 z-40 bg-zinc-900/50 backdrop-blur-md p-4 rounded-full text-white/40 hover:text-[#8D53FF] border border-white/5 transition-all duration-500 hover:scale-110 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        aria-label="Back to top"
      >
        <ArrowUp size={20} />
      </button>

      {/* Main Sticky Action Bar */}
      <div className={`fixed bottom-6 left-1/2 -translate-x-1/2 z-40 w-[90%] max-w-md transition-all duration-500 transform ${visible && scrollDirection === 'up' ? 'translate-y-0 opacity-100' : 'translate-y-24 opacity-0'}`}>
        <button className="bg-[#8D53FF] text-white w-full py-5 rounded-[1.5rem] font-black text-lg shadow-[0_10px_40px_rgba(141,83,255,0.6)] flex items-center justify-center space-x-3 transition-all hover:scale-[1.03] active:scale-95">
          <span>Get Your Free Plan</span>
          <div className="bg-white/20 p-1 rounded-lg">
            <Zap size={16} fill="white" className="text-white" />
          </div>
        </button>
      </div>
    </>
  );
};

export default function App() {
  return (
    <div className="min-h-screen bg-black selection:bg-[#8D53FF] selection:text-white antialiased">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Reporting />
        <Testimonials />
      </main>
      <Footer />
      <StickyCTA />
    </div>
  );
}

