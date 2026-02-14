
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
    { name: 'Process', href: '#process' },
    { name: 'Results', href: '#testimonials' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'bg-black/80 backdrop-blur-xl border-b border-white/5 py-4' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#" className="text-2xl font-black tracking-tighter text-white group">
          T-PONE <span className="bg-gradient-to-r from-[#8D53FF] to-[#EC4899] bg-clip-text text-transparent">STUDIOS</span>
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
          <AuroraButton ariaLabel="Schedule free consultation" className="text-sm px-6 py-2.5">
            Free Consultation
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
            Free Consultation
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
  // Professional customer journey steps - SEO optimized
  const steps: Step[] = [
    {
      id: "1",
      name: "Discovery",
      title: "Drive Local Traffic",
      description: "Strategic digital marketing that puts your business in front of high-intent local customers actively searching for your services.",
      bullets: [
        "Local SEO optimization for Google rankings",
        "Targeted Google Ads campaigns",
        "Facebook & Instagram Ads to target local homeowners before they search."
      ]
    },
    {
      id: "2",
      name: "Trust",
      title: "Build Online Authority",
      description: "Establish credibility through professional online presence and positive customer reviews that differentiate your business.",
      bullets: [
        "Google Business Profile optimization",
        "Online reputation management",
        "Customer review generation strategy"
      ]
    },
    {
      id: "3",
      name: "Experience",
      title: "Captivate Every Visitor",
      description: "High-performance websites engineered to hold attention and look flawless on every device.",
      bullets: [
        "Conversion-First Design that guides visitors to the sale",
        "Lightning-Fast Mobile Pages that load instantly",
        "Professional Branding that builds immediate trust"
      ]
    },
    {
      id: "4",
      name: "Conversion",
      title: "Generate Quality Leads",
      description: "Streamlined user experience that makes contacting your business effortless and immediate.",
      bullets: [
        "Click-to-call functionality",
        "Online booking system integration",
        "Lead capture forms that convert"
      ]
    },
    {
      id: "5",
      name: "Retention",
      title: "Maximize Customer Value",
      description: "Retargeting strategies that keep your business visible to prospects until they're ready to purchase.",
      bullets: [
        "Retargeting ad campaigns",
        "Email marketing for service businesses",
        "Customer relationship management"
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
          <h2 className="text-2xl md:text-4xl lg:text-6xl font-black bg-gradient-to-br from-white to-gray-400 bg-clip-text text-transparent mb-4 md:mb-6 tracking-tight">Digital Marketing for Local Businesses</h2>
          <p className="text-gray-400 text-sm md:text-lg leading-relaxed px-2">A proven system that transforms website visitors into qualified leads and customers for service-based businesses.</p>
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
          <h2 className="text-2xl md:text-4xl lg:text-6xl font-black bg-gradient-to-br from-white to-gray-400 bg-clip-text text-transparent mb-4 md:mb-6 leading-[1.1] tracking-tight">
            Transparent <span className="bg-gradient-to-r from-[#8D53FF] to-[#EC4899] bg-clip-text text-transparent">Performance Reporting</span>
          </h2>
          <p className="text-base md:text-xl text-gray-400 mb-8 md:mb-12 leading-relaxed">
            Clear, actionable analytics that show exactly how your marketing investment translates into measurable business growth.
          </p>
          <div className="space-y-5">
            {[
              { title: "Real-Time Lead Tracking", desc: "Monitor new inquiries and conversions as they happen." },
              { title: "Call Attribution Analytics", desc: "Identify which campaigns drive actual phone calls." },
              { title: "Reputation Monitoring", desc: "Track and manage your online reviews across platforms." }
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-4">
                <div className="flex-shrink-0 mt-0.5">
                  <CheckCircle2 size={22} className="text-[#8D53FF]" />
                </div>
                <div>
                  <h4 className="text-white font-semibold text-base md:text-lg mb-1">{item.title}</h4>
                  <p className="text-gray-500 text-sm md:text-base">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="md:w-1/2 relative mt-8 md:mt-0">
          <div className="bg-gray-900/60 backdrop-blur-xl border border-white/5 rounded-3xl p-6 md:p-10 shadow-2xl">
            <div className="flex items-center justify-between mb-8">
              <div className="flex space-x-2">
                <div className="w-2.5 h-2.5 rounded-full bg-[#EC4899]"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-[#8D53FF]"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-[#06B6D4]"></div>
              </div>
              <div className="text-xs text-gray-500 font-medium tracking-wider uppercase">
                Analytics
              </div>
            </div>

            <div className="space-y-8">
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 md:p-5 rounded-2xl">
                  <p className="text-gray-500 text-xs font-medium uppercase mb-2 tracking-wide">Qualified Leads</p>
                  <p className="text-3xl md:text-4xl font-bold text-white">+58</p>
                  <div className="w-full h-1 bg-gray-800 mt-3 rounded-full overflow-hidden">
                    <div className="w-4/5 h-full bg-gradient-to-r from-[#8D53FF] to-[#EC4899] rounded-full"></div>
                  </div>
                </div>
                <div className="p-4 md:p-5 rounded-2xl">
                  <p className="text-gray-500 text-xs font-medium uppercase mb-2 tracking-wide">Phone Inquiries</p>
                  <p className="text-3xl md:text-4xl font-bold text-white">+24</p>
                  <div className="w-full h-1 bg-gray-800 mt-3 rounded-full overflow-hidden">
                    <div className="w-2/3 h-full bg-gradient-to-r from-[#06B6D4] to-[#13FFAA] rounded-full"></div>
                  </div>
                </div>
              </div>

              <div className="h-36 md:h-44 w-full flex items-end justify-between gap-2 bg-gray-950/50 p-4 rounded-2xl">
                {[30, 50, 40, 80, 60, 95, 100].map((h, i) => (
                  <div key={i} className="flex-1 bg-gradient-to-t from-[#8D53FF] via-[#EC4899] to-[#06B6D4] rounded-t-md" style={{ height: `${h}%`, opacity: 0.8 }}></div>
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
      name: "Coach Frank S.",
      business: "Head Trainer & Founder - Elevate Your Game",
      quote: "T-Pone Studios transformed my online presence! My website looks professional, runs smoothly, and is bringing in more customers and revenue. They took my vision and made it a reality. Highly recommend!",
      img: ""
    },
    {
      name: "Coach Shane S.",
      business: "Founder & Head Coach - Primetime Performance",
      quote: "Working with T-Pone Studios was a game changer! My site looks polished, runs flawlessly, and is already helping me attract more business. They really listened to what I wanted and delivered beyond expectations.",
      img: ""
    }
  ];

  const goToNext = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const goToPrev = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-16 md:py-32 bg-gray-950 relative overflow-hidden border-t border-white/5">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#8D53FF]/20 to-transparent"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-[#EC4899]/5 via-transparent to-transparent pointer-events-none"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-2xl md:text-4xl lg:text-6xl font-black bg-gradient-to-b from-white to-gray-400 bg-clip-text text-transparent mb-4 md:mb-6 tracking-tight uppercase">Client Success Stories</h2>
          <div className="flex justify-center space-x-2">
            {[0, 1].map(i => (
              <div key={i} className={`h-1.5 rounded-full transition-all duration-500 ${activeIndex === i ? 'w-8 md:w-12 bg-gradient-to-r from-[#8D53FF] to-[#EC4899]' : 'w-3 md:w-4 bg-gray-800'}`}></div>
            ))}
          </div>
        </div>

        <div className="relative max-w-4xl mx-auto min-h-[280px] md:min-h-[320px]">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className={`absolute inset-0 transition-all duration-700 ease-in-out ${idx === activeIndex ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20 pointer-events-none'}`}
            >
              <div className="bg-gray-900/40 border border-white/5 rounded-3xl p-8 md:p-12 backdrop-blur-sm">
                {/* Stars */}
                <div className="flex justify-center mb-6">
                  {[1, 2, 3, 4, 5].map(s => <Star key={s} fill="#8D53FF" size={20} className="text-[#8D53FF] mx-0.5" />)}
                </div>
                
                {/* Quote */}
                <blockquote className="text-center">
                  <p className="text-lg md:text-2xl lg:text-3xl font-medium text-white leading-relaxed mb-8">
                    "{t.quote}"
                  </p>
                </blockquote>
                
                {/* Author Info */}
                <div className="text-center">
                  <div className="inline-flex items-center gap-3">
                    <div className="h-px w-8 bg-gradient-to-r from-transparent to-[#8D53FF]"></div>
                    <div>
                      <h4 className="text-base md:text-lg font-bold text-white">{t.name}</h4>
                      <p className="text-sm text-gray-400">{t.business}</p>
                    </div>
                    <div className="h-px w-8 bg-gradient-to-l from-transparent to-[#8D53FF]"></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <div className="flex justify-center items-center gap-6 mt-16 md:mt-20">
          <button 
            onClick={goToPrev}
            className="p-3 rounded-full border border-white/10 bg-gray-900/50 text-white/60 hover:text-white hover:border-[#8D53FF]/50 hover:bg-gray-800 transition-all duration-300"
            aria-label="Previous testimonial"
          >
            <ChevronRight size={24} className="rotate-180" />
          </button>
          <button 
            onClick={goToNext}
            className="p-3 rounded-full border border-white/10 bg-gray-900/50 text-white/60 hover:text-white hover:border-[#8D53FF]/50 hover:bg-gray-800 transition-all duration-300"
            aria-label="Next testimonial"
          >
            <ChevronRight size={24} />
          </button>
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
            Ready to <span className="bg-gradient-to-r from-[#8D53FF] via-[#EC4899] to-[#06B6D4] bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(141,83,255,0.4)]">Scale?</span>
          </h2>
          <p className="text-base md:text-xl text-gray-400 mb-8 md:mb-12 max-w-2xl mx-auto font-medium leading-relaxed px-2">
            Schedule a free strategy session to discuss how we can accelerate your business growth.
          </p>
          <div className="flex justify-center px-4">
            <AuroraButton ariaLabel="Schedule your free consultation" className="text-sm md:text-base px-6 md:px-8 py-3 md:py-4">
              Schedule Free Consultation <Zap className="ml-2 md:ml-3" fill="white" aria-hidden="true" size={18} />
            </AuroraButton>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 md:pt-16 border-t border-white/10">
          <div className="text-xl md:text-3xl font-black tracking-tighter text-white mb-6 md:mb-0">
            T-PONE <span className="bg-gradient-to-r from-[#8D53FF] to-[#EC4899] bg-clip-text text-transparent">STUDIOS</span>
          </div>
          <div className="flex flex-wrap justify-center gap-6 md:gap-10 text-gray-500 text-xs md:text-sm font-bold tracking-widest uppercase">
            <a href="#services" className="hover:text-white transition-colors duration-200 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8D53FF] rounded-sm" aria-label="View our services">Services</a>
            <a href="#process" className="hover:text-white transition-colors duration-200 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8D53FF] rounded-sm" aria-label="Learn about our process">Process</a>
            <a href="#testimonials" className="hover:text-white transition-colors duration-200 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8D53FF] rounded-sm" aria-label="View client results">Results</a>
          </div>
        </div>
      </div>

        {/* Decorative gradient for footer */}
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-[#8D53FF]/10 via-[#06B6D4]/5 to-transparent -z-10 pointer-events-none"></div>
      
      {/* Attribution */}
      <div className="absolute bottom-2 right-4 text-[8px] text-gray-600 opacity-30 hover:opacity-60 transition-opacity">
        Sparkle icon by Icons8
      </div>
    </footer>
  );
};

const StickyCTA: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Only show when scrolling up and past hero section
      if (currentScrollY > 600 && currentScrollY < lastScrollY.current && !isDismissed) {
        setVisible(true);
      } else {
        setVisible(false);
      }
      
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isDismissed]);

  if (isDismissed) return null;

  return (
    <div className={`fixed bottom-8 right-8 z-40 transition-all duration-500 transform ${visible ? 'translate-y-0 opacity-100' : 'translate-y-24 opacity-0'}`}>
      <div className="relative group">
        {/* Close button */}
        <button 
          onClick={() => setIsDismissed(true)}
          className="absolute -top-2 -right-2 w-6 h-6 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-gray-700 transition-all z-10"
          aria-label="Dismiss CTA"
        >
          <X size={12} />
        </button>
        
        {/* Compact floating button */}
        <button 
          className="flex items-center gap-2 bg-gradient-to-r from-[#8D53FF] to-[#EC4899] text-white px-5 py-3 rounded-full shadow-[0_4px_20px_rgba(141,83,255,0.3)] hover:shadow-[0_6px_30px_rgba(141,83,255,0.5)] transition-all duration-300 hover:scale-105 group-hover:opacity-100"
          aria-label="Get your free marketing plan"
        >
          <Zap size={16} fill="white" className="text-white" />
          <span className="text-sm font-semibold whitespace-nowrap">Free Consultation</span>
        </button>
      </div>
    </div>
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

