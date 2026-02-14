
import * as React from 'react';
import { useState, useEffect, useRef } from 'react';
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
  MessageSquare,
  Sparkles
} from 'lucide-react';
import { AuroraHero } from './components/AuroraHero';
import { AuroraButton } from './components/AuroraButton';
import { FeatureCarousel, Step, ImageSet } from './components/ui/animated-feature-carousel';

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
              className="text-[#E5E5E5] hover:text-white font-medium transition-all duration-200 relative group cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#8D53FF] rounded-sm"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#8D53FF] transition-all duration-200 group-hover:w-full"></span>
            </a>
          ))}
          <AuroraButton ariaLabel="Get your free marketing plan" className="text-sm px-6 py-2.5">
            Get Your Free Plan
          </AuroraButton>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white p-2 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8D53FF] rounded-lg transition-colors duration-200 hover:bg-white/10" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
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
              className="text-4xl font-bold text-white hover:text-[#8D53FF] transition-colors duration-200 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#8D53FF] rounded-lg"
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

const LegacyHero: React.FC = () => {
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
              <button className="group bg-[#8D53FF] hover:bg-[#7a42eb] text-white px-10 py-5 rounded-2xl font-bold text-xl transition-all duration-200 transform hover:scale-105 active:scale-95 shadow-[0_10px_30px_rgba(141,83,255,0.4)] flex items-center justify-center cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white" aria-label="Start getting more clients with T-Pone Studios">
                Start Getting More Clients
                <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform duration-200" />
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
                    alt="T-Pone Studios analytics dashboard displaying real-time lead generation metrics, conversion rates, and marketing campaign performance data"
                    className="w-full h-full object-cover opacity-80"
                    loading="lazy"
                  />
                </div>
              </div>
              {/* Mobile Mockup */}
              <div className="absolute -bottom-10 -left-6 md:-left-16 z-20 w-32 md:w-56 bg-zinc-950 rounded-[2.5rem] p-3 border-4 border-zinc-800 shadow-2xl transform -rotate-3 transition-transform duration-700 hover:rotate-0">
                <div className="rounded-[1.8rem] overflow-hidden aspect-[9/19] bg-zinc-900">
                  <img
                    src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=400"
                    alt="Mobile-optimized marketing dashboard showing responsive design and mobile-first analytics for local business growth"
                    className="w-full h-full object-cover opacity-80"
                    loading="lazy"
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
  // ... (steps and images remain same)
  const steps: Step[] = [
    {
      id: "1",
      name: "The Trigger",
      title: "They find you on Google",
      description: "When someone in your area needs a pro, they grab their phone and search. We make sure they find your business first.",
      bullets: [
        "Local searches for your services",
        "Ads popping up on Google & Meta",
        "Catching them while they're ready to hire"
      ]
    },
    {
      id: "2",
      name: "The Validation",
      title: "They see you're the best",
      description: "People don't just click—they verify. We show them they can trust you before they even say hello.",
      bullets: [
        "Recent 5-star reviews on display",
        "A professional Google Business Profile",
        "Instant trust that stops the scroll"
      ]
    },
    {
      id: "3",
      name: "The Capture",
      title: "They land on your site",
      description: "We send them to a page designed to do one thing: get you a lead. No generic homepages, just clear offers that convert.",
      bullets: [
        "Lightning-fast mobile loading",
        "Zero distractions, just results",
        "A clear reason to choose you"
      ]
    },
    {
      id: "4",
      name: "The Conversion",
      title: "They pick up the phone",
      description: "This is the moment that matters. We make it brain-dead simple for them to call or book a job with you.",
      bullets: [
        "Huge 'Call Now' buttons",
        "Easy 1-click booking",
        "Casual browsers become paying jobs"
      ]
    },
    {
      id: "5",
      name: "The Safety Net",
      title: "We bring them back",
      description: "Not everyone calls on the first try. We stick with them so you're the only one they think of when they're ready.",
      bullets: [
        "Ads that follow them for 7 days",
        "Gentle reminders to finish booking",
        "Closing the loop on every visitor"
      ]
    }
  ];

  const images: ImageSet = {
    alt: "The Mechanical Customer Journey",
    step1img1: "/images/journey/trigger-single.png",
    step1img2: "/images/journey/trigger-desktop.png",
    step2img1: "/images/journey/validation.png",
    step2img2: "/images/journey/validation.png",
    step3img: "/images/journey/capture.png",
    step4img: "/images/journey/conversion.png",
    step5img: "/images/journey/safety-net.png",
  };

  return (
    <section id="services" className="py-16 md:py-32 bg-[#020617] relative overflow-hidden">
      {/* Top transition overlay - Blends from the hero section */}
      <div className="absolute top-0 left-0 right-0 h-24 md:h-48 bg-gradient-to-b from-[#020617] to-transparent z-10" />

      {/* Enhanced Aurora Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#8D53FF]/20 via-[#020617] to-[#020617] pointer-events-none"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] md:w-[800px] h-[400px] md:h-[800px] bg-gradient-to-r from-[#8D53FF]/10 via-[#EC4899]/10 to-[#06B6D4]/10 rounded-full blur-[60px] md:blur-[100px] pointer-events-none opacity-50 animate-pulse"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-8 md:mb-12 max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-4xl lg:text-6xl font-black bg-gradient-to-br from-white to-gray-400 bg-clip-text text-transparent mb-4 md:mb-6 tracking-tight">The Complete Local Growth System</h2>
          <p className="text-gray-400 text-sm md:text-lg leading-relaxed px-2">The Mechanical Customer Journey: How we turn strangers into paying customers.</p>
        </div>

        <FeatureCarousel
          image={images}
          steps={steps}
        />
      </div>
    </section>
  );
};

const Reporting: React.FC = () => {
  return (
    <section id="process" className="py-16 md:py-32 bg-gray-950 overflow-hidden relative border-t border-white/5">
      <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-to-tl from-[#06B6D4]/10 via-transparent to-transparent pointer-events-none blur-3xl"></div>
      <div className="container mx-auto px-4 md:px-6 relative z-10 flex flex-col md:flex-row items-center gap-10 md:gap-20">
        <div className="md:w-1/2">
          <h2 className="text-2xl md:text-4xl lg:text-6xl font-black bg-gradient-to-br from-white to-gray-400 bg-clip-text text-transparent mb-4 md:mb-8 leading-[1.1] tracking-tight">
            Results You Can <span className="bg-gradient-to-r from-[#8D53FF] to-[#EC4899] bg-clip-text text-transparent">Actually See.</span>
          </h2>
          <p className="text-base md:text-xl text-gray-400 mb-6 md:mb-10 leading-relaxed font-medium">
            No confusing jargon. We send you a simple weekly report showing exactly how many new leads and calls we generated for you.
          </p>
          <div className="space-y-4 md:space-y-6">
            {[
              { title: "Weekly Lead Dashboards", desc: "See your ROI in real-time." },
              { title: "Call Tracking", desc: "Know exactly which ads are ringing your phone." },
              { title: "Review Insights", desc: "Monitor your local reputation effortlessly." }
            ].map((item, i) => (
              <div key={i} className="flex group p-3 md:p-4 rounded-xl md:rounded-2xl hover:bg-white/5 transition-colors duration-300 border border-transparent hover:border-white/5">
                <div className="flex-shrink-0 mt-1 mr-3 md:mr-4 bg-[#8D53FF]/20 p-2 md:p-2.5 rounded-lg md:rounded-xl group-hover:bg-[#8D53FF] transition-all duration-300 shadow-[0_0_15px_rgba(141,83,255,0.2)]">
                  <CheckCircle2 size={20} className="text-[#8D53FF] group-hover:text-white md:size-24" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-base md:text-xl mb-1 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300">{item.title}</h4>
                  <p className="text-gray-500 text-sm md:text-lg group-hover:text-gray-400 transition-colors">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="md:w-1/2 relative group perspective-1000 mt-8 md:mt-0">
          <div className="absolute -inset-4 bg-gradient-to-r from-[#8D53FF]/20 via-[#EC4899]/20 to-[#06B6D4]/20 blur-3xl -z-10 group-hover:opacity-80 transition-opacity duration-700 opacity-50"></div>
          <div className="bg-gray-900/80 backdrop-blur-xl border border-white/10 rounded-2xl md:rounded-[2.5rem] p-4 md:p-8 shadow-2xl relative overflow-hidden transition-all duration-700 transform group-hover:scale-[1.02] group-hover:rotate-1">
            <div className="flex items-center justify-between mb-6 md:mb-10">
              <div className="flex space-x-2">
                <div className="w-3 h-3 rounded-full bg-[#EC4899]/40"></div>
                <div className="w-3 h-3 rounded-full bg-[#8D53FF]/40"></div>
                <div className="w-3 h-3 rounded-full bg-[#06B6D4]/40"></div>
              </div>
              <div className="text-[10px] md:text-xs text-white/30 font-bold tracking-[0.2em] uppercase flex items-center gap-1 md:gap-2">
                <Sparkles size={10} className="text-[#EC4899] md:size-12" />
                Weekly Performance
              </div>
            </div>

            <div className="space-y-6 md:space-y-10">
              <div className="grid grid-cols-2 gap-3 md:gap-6">
                <div className="bg-black/40 p-3 md:p-6 rounded-xl md:rounded-3xl border border-white/5 hover:border-[#8D53FF]/30 transition-colors duration-300">
                  <p className="text-gray-500 text-[10px] md:text-xs font-bold uppercase mb-1 md:mb-2 tracking-wider">New Leads</p>
                  <p className="text-2xl md:text-4xl font-black text-white">+58</p>
                  <div className="w-full h-1 md:h-1.5 bg-gray-800 mt-2 md:mt-4 rounded-full overflow-hidden">
                    <div className="w-4/5 h-full bg-gradient-to-r from-[#8D53FF] to-[#EC4899] rounded-full shadow-[0_0_10px_rgba(236,72,153,0.5)]"></div>
                  </div>
                </div>
                <div className="bg-black/40 p-3 md:p-6 rounded-xl md:rounded-3xl border border-white/5 hover:border-[#06B6D4]/30 transition-colors duration-300">
                  <p className="text-gray-500 text-[10px] md:text-xs font-bold uppercase mb-1 md:mb-2 tracking-wider">Google Calls</p>
                  <p className="text-2xl md:text-4xl font-black text-white">+24</p>
                  <div className="w-full h-1 md:h-1.5 bg-gray-800 mt-2 md:mt-4 rounded-full overflow-hidden">
                    <div className="w-2/3 h-full bg-gradient-to-r from-[#06B6D4] to-[#13FFAA] rounded-full shadow-[0_0_10px_rgba(6,182,212,0.5)]"></div>
                  </div>
                </div>
              </div>

              <div className="h-32 md:h-48 w-full flex items-end justify-between px-2 md:px-4 gap-2 md:gap-3 bg-black/20 p-3 md:p-6 rounded-xl md:rounded-3xl border border-white/5 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#8D53FF]/5 pointer-events-none"></div>
                {[30, 50, 40, 80, 60, 95, 100].map((h, i) => (
                  <div key={i} className="flex-1 bg-gradient-to-t from-[#8D53FF] via-[#EC4899] to-[#06B6D4] rounded-t-lg transition-all duration-1000 group-hover:opacity-100 shadow-[0_0_15px_rgba(141,83,255,0.3)]" style={{ height: `${h}%`, opacity: 0.7 }}></div>
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
    <section id="testimonials" className="py-16 md:py-32 bg-gray-950 relative overflow-hidden border-t border-white/5">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#8D53FF]/20 to-transparent"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-[#EC4899]/5 via-transparent to-transparent pointer-events-none"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-10 md:mb-20">
          <h2 className="text-2xl md:text-4xl lg:text-6xl font-black bg-gradient-to-b from-white to-gray-400 bg-clip-text text-transparent mb-4 md:mb-6 tracking-tight italic uppercase">Trusted by Local Giants</h2>
          <div className="flex justify-center space-x-2">
            {[0, 1, 2].map(i => (
              <div key={i} className={`h-1.5 rounded-full transition-all duration-500 ${activeIndex === i ? 'w-8 md:w-12 bg-gradient-to-r from-[#8D53FF] to-[#EC4899]' : 'w-3 md:w-4 bg-gray-800'}`}></div>
            ))}
          </div>
        </div>

        <div className="relative max-w-5xl mx-auto min-h-[300px] md:min-h-[400px]">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className={`absolute inset-0 transition-all duration-1000 ease-in-out transform flex flex-col md:flex-row items-center gap-6 md:gap-12 ${idx === activeIndex ? 'opacity-100 translate-x-0 scale-100 pointer-events-auto' : 'opacity-0 translate-x-10 scale-95 pointer-events-none'
                }`}
            >
              <div className="md:w-1/3 flex justify-center">
                <div className="relative group">
                  <div className="absolute -inset-2 md:-inset-4 bg-gradient-to-r from-[#8D53FF] to-[#EC4899] rounded-full blur-xl md:blur-2xl opacity-20 group-hover:opacity-40 transition-opacity"></div>
                  <img
                    src={t.img}
                    alt={`${t.name}, ${t.business} - T-Pone Studios client testimonial`}
                    className="w-32 h-32 md:w-48 md:h-48 lg:w-64 lg:h-64 rounded-[2rem] md:rounded-[3rem] object-cover border-4 border-zinc-900 shadow-2xl relative z-10"
                    loading="lazy"
                  />
                </div>
              </div>
              <div className="md:w-2/3 text-center md:text-left">
                <div className="flex justify-center md:justify-start mb-4 md:mb-6">
                  {[1, 2, 3, 4, 5].map(s => <Star key={s} fill="#8D53FF" size={18} className="text-[#8D53FF] mr-0.5 md:mr-1" />)}
                </div>
                <p className="text-base md:text-2xl lg:text-4xl font-medium text-white italic mb-6 md:mb-10 leading-snug">"{t.quote}"</p>
                <div>
                  <h4 className="text-xl md:text-2xl font-black text-white tracking-tight">{t.name}</h4>
                  <p className="bg-gradient-to-r from-[#8D53FF] to-[#EC4899] bg-clip-text text-transparent text-sm md:text-lg font-bold tracking-wider uppercase">{t.business}</p>
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
    <footer className="bg-gray-950 pt-16 md:pt-32 pb-8 md:pb-12 relative overflow-hidden border-t border-white/5">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-16 md:mb-32">
          <h2 className="text-3xl md:text-5xl lg:text-8xl font-black bg-gradient-to-b from-white to-gray-400 bg-clip-text text-transparent mb-6 md:mb-10 leading-[1.05] tracking-tighter">
            Ready to <span className="bg-gradient-to-r from-[#8D53FF] via-[#EC4899] to-[#06B6D4] bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(141,83,255,0.4)]">Dominate?</span>
          </h2>
          <p className="text-base md:text-xl text-gray-400 mb-8 md:mb-12 max-w-2xl mx-auto font-medium leading-relaxed px-2">
            Let's build your growth plan today. Schedule your free 15-minute strategy call with our team.
          </p>
          <div className="flex justify-center px-4">
            <AuroraButton ariaLabel="Book my free strategy call now" className="text-sm md:text-base px-6 md:px-8 py-3 md:py-4">
              Book My Free Call Now <Zap className="ml-2 md:ml-3" fill="white" aria-hidden="true" size={18} />
            </AuroraButton>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 md:pt-16 border-t border-white/10">
          <div className="text-xl md:text-3xl font-black tracking-tighter text-white mb-6 md:mb-0">
            T-PONE <span className="bg-gradient-to-r from-[#8D53FF] to-[#EC4899] bg-clip-text text-transparent">STUDIOS</span>
          </div>
          <div className="flex flex-wrap justify-center gap-6 md:gap-10 text-gray-500 text-xs md:text-sm font-bold tracking-widest uppercase">
            <a href="#" className="hover:text-white transition-colors duration-200 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8D53FF] rounded-sm" aria-label="Follow us on Instagram">Instagram</a>
            <a href="#" className="hover:text-white transition-colors duration-200 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8D53FF] rounded-sm" aria-label="Connect with us on LinkedIn">LinkedIn</a>
            <a href="#" className="hover:text-white transition-colors duration-200 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8D53FF] rounded-sm" aria-label="Read our privacy policy">Privacy</a>
            <span>&copy; {new Date().getFullYear()} T-Pone Studios</span>
          </div>
        </div>
      </div>

      {/* Decorative gradient for footer */}
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-[#8D53FF]/10 via-[#06B6D4]/5 to-transparent -z-10 pointer-events-none"></div>
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
        className={`fixed bottom-24 right-8 z-40 bg-zinc-900/50 backdrop-blur-md p-4 rounded-full text-white/40 hover:text-[#8D53FF] border border-white/5 transition-all duration-300 hover:scale-110 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8D53FF] ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        aria-label="Scroll back to top of page"
      >
        <ArrowUp size={20} aria-hidden="true" />
      </button>

      {/* Main Sticky Action Bar */}
      <div className={`fixed bottom-6 left-1/2 -translate-x-1/2 z-40 w-[90%] max-w-md transition-all duration-500 transform ${visible && scrollDirection === 'up' ? 'translate-y-0 opacity-100' : 'translate-y-24 opacity-0'}`}>
        <AuroraButton ariaLabel="Get your free marketing plan" className="w-full justify-center py-5 text-xl">
          <span>Get Your Free Plan</span>
          <div className="bg-white/20 p-1 rounded-lg ml-3">
            <Zap size={16} fill="white" className="text-white" aria-hidden="true" />
          </div>
        </AuroraButton>
      </div>
    </>
  );
};

export default function App() {
  return (
    <div className="min-h-screen bg-black selection:bg-[#8D53FF] selection:text-white antialiased">
      <Navbar />
      <main>
        <AuroraHero />
        <Features />
        <Reporting />
        <Testimonials />
      </main>
      <Footer />
      <StickyCTA />
    </div>
  );
}

