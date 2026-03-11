import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  CheckCircle2, 
  Star, 
  Shield, 
  Zap, 
  Code2, 
  FileText, 
  Globe, 
  Users, 
  ArrowRight, 
  Play, 
  Trophy, 
  Target, 
  TrendingUp,
  Cpu,
  Layout,
  MessageSquare,
  Sparkles,
  Monitor,
  Terminal,
  Briefcase,
  Layers,
  Server,
  Database,
  Network,
  Rocket,
  BookOpen
} from "lucide-react";

const partners = [
  "Google", "Amazon", "Microsoft", "Meta", "Apple", "Netflix", "Uber", "Airbnb", "Stripe", "Coinbase"
];

const methodology = [
  {
    step: "01",
    title: "Learn",
    subtitle: "Foundational Mastery",
    description: "Deep dive into core computer science concepts, data structures, and algorithms with industry-vetted curriculum.",
    icon: Code2
  },
  {
    step: "02",
    title: "Practice",
    subtitle: "Real-World Application",
    description: "Apply your knowledge on professional-grade projects using modern tech stacks and enterprise workflows.",
    icon: Terminal
  },
  {
    step: "03",
    title: "Perform",
    subtitle: "High-Stakes Success",
    description: "Master the art of technical communication and problem-solving through rigorous mock interview simulations.",
    icon: Trophy
  }
];

const roadmap = [
  { 
    day: "Day 01-25", 
    phase: "Phase 01",
    title: "Core Foundations", 
    desc: "Mastering the fundamentals, building a growth mindset, and establishing technical depth.",
    icon: Target,
    color: "bg-brand-red",
    image: "https://picsum.photos/seed/foundations/800/600"
  },
  { 
    day: "Day 26-50", 
    phase: "Phase 02",
    title: "Skill Acceleration", 
    desc: "Rapidly scaling your abilities through intensive building and advanced architectural patterns.",
    icon: TrendingUp,
    color: "bg-red-600",
    image: "https://picsum.photos/seed/acceleration/800/600"
  },
  { 
    day: "Day 51-75", 
    phase: "Phase 03",
    title: "Performance Simulation", 
    desc: "Testing your limits with high-pressure simulations and real-world project integration.",
    icon: Cpu,
    color: "bg-red-500",
    image: "https://picsum.photos/seed/simulation/800/600"
  },
  { 
    day: "Day 76-100", 
    phase: "Phase 04",
    title: "Career Transformation", 
    desc: "Finalizing your professional brand and launching into elite engineering roles.",
    icon: Rocket,
    color: "bg-red-400",
    image: "https://picsum.photos/seed/transformation/800/600"
  }
];

const sectors = [
  { name: "Global E-Commerce", icon: Globe },
  { name: "Top IT Services", icon: Cpu },
  { name: "High-Growth Startups", icon: TrendingUp },
  { name: "FinTech Innovators", icon: Shield },
  { name: "Fortune 500s", icon: Briefcase },
  { name: "Tech Unicorns", icon: Sparkles }
];

export default function WhyUs() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <div className="bg-white selection:bg-brand-red selection:text-white overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(#C0000015_1px,transparent_1px)] [background-size:40px_40px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-red/10 rounded-full blur-[120px] animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-brand-red/5 rounded-full blur-[120px] animate-pulse delay-1000" />
        </div>

        <div className="container-custom relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-brand-red/30 bg-brand-red/5 text-brand-red text-sm font-bold mb-8"
            >
              <Sparkles size={14} />
              THE COADEMIC ADVANTAGE
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="mb-8"
            >
              Engineered for <span className="relative inline-block">
                Performance
                <svg className="absolute -bottom-2 left-0 w-full h-3 text-brand-red" viewBox="0 0 100 12" preserveAspectRatio="none">
                  <path d="M0,10 Q50,0 100,10" stroke="currentColor" strokeWidth="4" fill="none" />
                </svg>
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-slate-600 mb-12 max-w-2xl mx-auto"
            >
              We've dismantled the traditional education model and rebuilt it for the elite tech landscape. High-energy, high-impact, and outcome-obsessed.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap justify-center gap-4"
            >
              <button className="btn-primary flex items-center gap-2">
                Start Your Journey <ArrowRight size={20} />
              </button>
              <button className="btn-secondary">View Curriculum</button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Placement Partners Logo Cloud */}
      <section className="py-12 border-y border-slate-100 bg-slate-50/50">
        <div className="container-custom">
          <p className="text-center text-slate-400 font-bold text-xs uppercase tracking-[0.2em] mb-10">
            WHERE OUR ALUMNI BUILD THE FUTURE
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-700">
            {partners.map((partner) => (
              <span key={partner} className="text-2xl font-display font-black text-slate-900 tracking-tighter">
                {partner}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Methodology Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="mb-6">The Learn-Practice-Perform Framework</h2>
            <p className="text-lg">Our proprietary methodology ensures you don't just know the theory, but can execute under pressure.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {methodology.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="luxury-card group"
              >
                <div className="flex justify-between items-start mb-8">
                  <div className="w-16 h-16 rounded-2xl bg-brand-red/5 flex items-center justify-center text-brand-red group-hover:bg-brand-red group-hover:text-white transition-all duration-500">
                    <item.icon size={32} />
                  </div>
                  <span className="text-4xl font-display font-black text-slate-100 group-hover:text-brand-red/10 transition-colors duration-500">
                    {item.step}
                  </span>
                </div>
                <h3 className="mb-2">{item.title}</h3>
                <p className="text-brand-red font-bold text-sm mb-4 uppercase tracking-wider">{item.subtitle}</p>
                <p className="text-slate-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Pillars (Red Section) */}
      <section className="bg-brand-red py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_#fff_1px,_transparent_1px)] [background-size:24px_24px]" />
        </div>
        
        <div className="container-custom relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="text-white">
              <h2 className="text-white mb-8">Built for Real-World Outcomes</h2>
              <div className="space-y-8">
                {[
                  { title: "Industry Alignment", desc: "Curriculum updated weekly based on real interview trends from top-tier tech firms." },
                  { title: "92% Success Rate", desc: "Our alumni consistently secure roles at their target companies within 100 days." },
                  { title: "Real-Time Feedback", desc: "Instant code analysis and performance metrics to track your growth daily." }
                ].map((pillar) => (
                  <div key={pillar.title} className="flex gap-6">
                    <div className="w-12 h-12 shrink-0 rounded-xl bg-white/10 flex items-center justify-center">
                      <CheckCircle2 size={24} />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">{pillar.title}</h4>
                      <p className="text-white/70">{pillar.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <motion.div
                initial={{ rotate: -2, scale: 0.95 }}
                whileInView={{ rotate: 0, scale: 1 }}
                className="bg-white rounded-[40px] p-12 shadow-[0_40px_100px_rgba(0,0,0,0.2)] relative z-10"
              >
                <div className="grid grid-cols-2 gap-8">
                  <div className="text-center p-6 rounded-3xl bg-slate-50">
                    <p className="text-4xl font-display font-black text-brand-red mb-2">450+</p>
                    <p className="text-slate-500 text-sm font-bold uppercase tracking-wider">Hiring Partners</p>
                  </div>
                  <div className="text-center p-6 rounded-3xl bg-slate-50">
                    <p className="text-4xl font-display font-black text-brand-red mb-2">12.5L</p>
                    <p className="text-slate-500 text-sm font-bold uppercase tracking-wider">Avg. Package</p>
                  </div>
                  <div className="text-center p-6 rounded-3xl bg-slate-50">
                    <p className="text-4xl font-display font-black text-brand-red mb-2">95%</p>
                    <p className="text-slate-500 text-sm font-bold uppercase tracking-wider">Placement Rate</p>
                  </div>
                  <div className="text-center p-6 rounded-3xl bg-slate-50">
                    <p className="text-4xl font-display font-black text-brand-red mb-2">100+</p>
                    <p className="text-slate-500 text-sm font-bold uppercase tracking-wider">Mock Tests</p>
                  </div>
                </div>
                <div className="mt-8 pt-8 border-t border-slate-100 flex items-center justify-between">
                  <div className="flex -space-x-4">
                    {[1, 2, 3, 4].map((i) => (
                      <img 
                        key={i}
                        src={`https://picsum.photos/seed/user${i}/100/100`}
                        className="w-12 h-12 rounded-full border-4 border-white object-cover"
                        referrerPolicy="no-referrer"
                        alt="Alumni"
                      />
                    ))}
                  </div>
                  <p className="text-slate-600 font-medium">Join 5,000+ Alumni</p>
                </div>
              </motion.div>
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-white/20 rounded-full blur-3xl" />
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-white/20 rounded-full blur-3xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Platform Deep Dive */}
      <section className="section-padding bg-slate-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="mb-6">Professional-Grade Ecosystem</h2>
            <p className="text-lg">We provide the same tools used by elite engineering teams worldwide.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Monitor, title: "Monaco-Powered IDE", desc: "A high-performance coding environment with real-time linting and debugging." },
              { icon: FileText, title: "ATS Resume Kit", desc: "Build resumes that bypass automated filters and land on recruiters' desks." },
              { icon: Globe, title: "Global Question Bank", desc: "Access 10,000+ real interview questions from top tech companies." },
              { icon: Users, title: "Elite Community", desc: "24/7 support from a network of ambitious engineers and mentors." }
            ].map((tool) => (
              <div key={tool.title} className="bg-white p-8 rounded-[32px] border border-slate-200 hover:border-brand-red/30 transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-brand-red/5 text-brand-red flex items-center justify-center mb-6">
                  <tool.icon size={24} />
                </div>
                <h4 className="text-xl font-bold mb-3">{tool.title}</h4>
                <p className="text-slate-600 text-sm leading-relaxed">{tool.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 100-Day Success Roadmap */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-slate-50/50 -z-10" />
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-brand-red/10 text-brand-red text-xs font-black uppercase tracking-widest mb-6"
            >
              <TrendingUp size={14} />
              THE JOURNEY TO ELITE
            </motion.div>
            <h2 className="mb-6">The 100-Day Success Roadmap</h2>
            <p className="text-lg">A high-intensity, structured path engineered to transform your professional trajectory. Click on a phase to see more.</p>
          </div>

          <div className="grid lg:grid-cols-12 gap-12 items-start">
            {/* Roadmap Steps */}
            <div className="lg:col-span-5 space-y-6">
              {roadmap.map((step, i) => (
                <motion.div
                  key={step.day}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  onClick={() => setActiveStep(i)}
                  className={`relative cursor-pointer p-8 rounded-[32px] border transition-all duration-500 ${
                    activeStep === i 
                      ? 'bg-white border-brand-red shadow-luxury scale-[1.02]' 
                      : 'bg-white/50 border-slate-100 hover:border-brand-red/30 grayscale opacity-60 hover:grayscale-0 hover:opacity-100'
                  }`}
                >
                  <div className="flex items-center gap-6">
                    <div className={`w-14 h-14 rounded-2xl ${step.color} text-white flex items-center justify-center shrink-0 shadow-lg`}>
                      <step.icon size={24} />
                    </div>
                    <div>
                      <div className="flex items-center gap-3 mb-1">
                        <span className="text-[10px] font-black uppercase tracking-widest text-brand-red">{step.phase}</span>
                        <span className="w-1 h-1 rounded-full bg-slate-300" />
                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{step.day}</span>
                      </div>
                      <h4 className="text-xl font-bold text-slate-900">{step.title}</h4>
                    </div>
                  </div>
                  {activeStep === i && (
                    <motion.p 
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      className="mt-4 text-slate-500 text-sm leading-relaxed pl-20"
                    >
                      {step.desc}
                    </motion.p>
                  )}
                </motion.div>
              ))}
            </div>

            {/* Image Display Area */}
            <div className="lg:col-span-7 sticky top-32">
              <div className="relative aspect-video rounded-[40px] overflow-hidden shadow-luxury bg-slate-900">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeStep}
                    initial={{ opacity: 0, scale: 1.1, filter: 'blur(20px)' }}
                    animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                    exit={{ opacity: 0, scale: 0.9, filter: 'blur(20px)' }}
                    transition={{ duration: 0.6, ease: "circOut" }}
                    className="absolute inset-0"
                  >
                    <img 
                      src={roadmap[activeStep].image}
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                      alt={roadmap[activeStep].title}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                    
                    {/* Floating Info Card */}
                    <motion.div 
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                      className="absolute bottom-8 left-8 right-8 p-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl"
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-brand-red font-black text-[10px] uppercase tracking-[0.2em] mb-1">CURRENT PHASE</p>
                          <h5 className="text-white text-2xl font-display font-bold">{roadmap[activeStep].title}</h5>
                        </div>
                        <div className="w-12 h-12 rounded-full bg-brand-red text-white flex items-center justify-center font-black">
                          {activeStep + 1}
                        </div>
                      </div>
                    </motion.div>
                  </motion.div>
                </AnimatePresence>

                {/* Decorative Elements */}
                <div className="absolute top-6 right-6 flex gap-2">
                  {[0, 1, 2, 3].map(i => (
                    <div 
                      key={i} 
                      className={`w-2 h-2 rounded-full transition-all duration-500 ${activeStep === i ? 'bg-brand-red w-6' : 'bg-white/20'}`} 
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 360° Skill Mastery Framework */}
      <section className="section-padding bg-slate-50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="mb-8">360° Skill Mastery Framework</h2>
              <p className="text-lg mb-12">We balance technical depth with professional polish to create the complete engineering package.</p>
              
              <div className="space-y-8">
                {[
                  { label: "Technical Excellence", value: 95, color: "bg-brand-red" },
                  { label: "Communication & Soft Skills", value: 85, color: "bg-red-500" },
                  { label: "Professional Branding", value: 90, color: "bg-red-400" }
                ].map((skill) => (
                  <div key={skill.label}>
                    <div className="flex justify-between mb-3">
                      <span className="font-bold text-slate-900">{skill.label}</span>
                      <span className="font-bold text-brand-red">{skill.value}%</span>
                    </div>
                    <div className="h-3 w-full bg-slate-200 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.value}%` }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                        className={`h-full ${skill.color}`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square rounded-[40px] bg-white p-8 shadow-luxury flex items-center justify-center overflow-hidden">
                <div className="relative w-full h-full flex items-center justify-center">
                  {/* Background Glow */}
                  <div className="absolute w-64 h-64 bg-brand-red/5 rounded-full blur-3xl animate-pulse" />
                  
                  {/* Rotating Rings */}
                  <motion.div 
                    animate={{ rotate: 360 }}
                    transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                    className="absolute w-72 h-72 rounded-full border border-dashed border-brand-red/10"
                  />
                  <motion.div 
                    animate={{ rotate: -360 }}
                    transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                    className="absolute w-56 h-56 rounded-full border border-dashed border-brand-red/20"
                  />
                  
                  {/* Pulsing Core */}
                  <div className="absolute w-32 h-32 rounded-full bg-brand-red/5 animate-ping" />
                  
                  {/* Orbiting Icons */}
                  {[
                    { Icon: Code2, delay: 0, color: "text-blue-500" },
                    { Icon: Terminal, delay: 1.5, color: "text-emerald-500" },
                    { Icon: Briefcase, delay: 3, color: "text-amber-500" },
                    { Icon: MessageSquare, delay: 4.5, color: "text-purple-500" }
                  ].map((item, i) => (
                    <motion.div
                      key={i}
                      animate={{ 
                        rotate: 360,
                      }}
                      transition={{ 
                        duration: 12, 
                        repeat: Infinity, 
                        ease: "linear",
                        delay: item.delay
                      }}
                      className="absolute w-full h-full pointer-events-none"
                    >
                      <motion.div 
                        animate={{ rotate: -360 }}
                        transition={{ duration: 12, repeat: Infinity, ease: "linear", delay: item.delay }}
                        className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-2xl shadow-lg border border-slate-50 flex items-center justify-center"
                      >
                        <item.Icon className={item.color} size={20} />
                      </motion.div>
                    </motion.div>
                  ))}

                  {/* Floating Particles */}
                  {[...Array(6)].map((_, i) => (
                    <motion.div
                      key={i}
                      animate={{ 
                        y: [0, -20, 0],
                        x: [0, Math.random() * 20 - 10, 0],
                        opacity: [0.2, 0.5, 0.2]
                      }}
                      transition={{ 
                        duration: 3 + Math.random() * 2, 
                        repeat: Infinity,
                        delay: Math.random() * 2
                      }}
                      className="absolute w-1.5 h-1.5 bg-brand-red rounded-full"
                      style={{ 
                        top: `${Math.random() * 100}%`, 
                        left: `${Math.random() * 100}%` 
                      }}
                    />
                  ))}

                  {/* Central Card */}
                  <motion.div 
                    whileHover={{ scale: 1.05, rotate: -2 }}
                    className="bg-white p-8 rounded-[32px] shadow-2xl border border-slate-100 text-center z-10 relative cursor-pointer group"
                  >
                    <div className="relative mb-4 inline-block">
                      <div className="absolute inset-0 bg-brand-red/20 blur-xl rounded-full group-hover:bg-brand-red/40 transition-colors" />
                      <Zap className="text-brand-red relative z-10 group-hover:scale-110 transition-transform" size={40} />
                    </div>
                    <p className="font-black text-slate-900 text-xl tracking-tight">Career Ready</p>
                    <div className="flex gap-1 justify-center mt-2">
                      {[1, 2, 3, 4, 5].map(star => (
                        <Star key={star} size={12} className="fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* System Architecture Exploded View */}
      <section className="bg-slate-950 py-32 relative overflow-hidden">
        {/* Background Grid & Elements */}
        <div className="absolute inset-0 z-0 opacity-20">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:40px_40px]" />
        </div>

        <div className="container-custom relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Side: Technical Diagram */}
            <div className="relative aspect-square max-w-xl mx-auto lg:mx-0">
              {/* Central Circle */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-64 h-64 rounded-full border border-white/10 relative">
                  <motion.div 
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0 border-t-2 border-brand-red rounded-full opacity-40"
                  />
                  <div className="absolute inset-4 rounded-full border border-dashed border-white/5" />
                </div>
              </div>

              {/* Orbiting Icons */}
              {[
                { icon: Layers, pos: "top-0 left-1/2 -translate-x-1/2", delay: 0 },
                { icon: Server, pos: "bottom-1/2 left-0 -translate-y-1/2", delay: 1 },
                { icon: Database, pos: "bottom-0 left-1/2 -translate-x-1/2", delay: 2 },
                { icon: Network, pos: "top-1/2 right-0 -translate-y-1/2", delay: 3, active: true }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: item.delay * 0.2 }}
                  className={`absolute ${item.pos} w-16 h-16 rounded-xl border ${item.active ? 'bg-brand-red border-brand-red shadow-[0_0_30px_rgba(192,0,0,0.4)]' : 'bg-slate-900 border-white/10'} flex items-center justify-center text-white z-20`}
                >
                  <item.icon size={24} />
                  {item.active && (
                    <div className="absolute -left-2 top-1/2 -translate-y-1/2 w-4 h-8 bg-brand-red rounded-l-md flex flex-col justify-around py-1">
                      <div className="w-1 h-1 bg-white/50 rounded-full mx-auto" />
                      <div className="w-1 h-1 bg-white/50 rounded-full mx-auto" />
                    </div>
                  )}
                </motion.div>
              ))}

              {/* Connecting Lines */}
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/2 left-0 w-full h-[1px] bg-white/5 border-dashed border-t" />
                <div className="absolute left-1/2 top-0 w-[1px] h-full bg-white/5 border-dashed border-l" />
              </div>

              {/* Status Indicators (Left Side) */}
              <div className="absolute left-0 top-1/4 space-y-4">
                {[1, 2, 3, 4, 5].map(i => (
                  <div key={i} className="w-1 h-1 bg-white/20 rounded-full" />
                ))}
              </div>
            </div>

            {/* Right Side: Content */}
            <div className="text-white">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-2 h-2 bg-brand-red" />
                <span className="text-[10px] font-mono tracking-[0.3em] text-white/40 uppercase">SYSTEM_ARCHITECTURE_EXPLODED_VIEW</span>
              </div>
              
              <h2 className="text-white text-5xl md:text-7xl font-display font-black leading-none mb-12">
                BUILD THE <br />
                <span className="text-brand-red">UNTHINKABLE.</span>
              </h2>

              <div className="bg-slate-900/50 border border-white/5 rounded-3xl p-8 mb-8 backdrop-blur-sm">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-10 h-10 rounded-lg bg-brand-red/10 flex items-center justify-center text-brand-red">
                    <Network size={20} />
                  </div>
                  <h4 className="text-xl font-display font-bold tracking-tight uppercase">LOAD_BALANCER</h4>
                </div>
                <p className="text-white/40 text-lg leading-relaxed">
                  Distributing traffic across global clusters with 0ms overhead. Engineered for massive scale and absolute reliability.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-slate-900/50 border border-white/5 rounded-2xl p-6 backdrop-blur-sm">
                  <p className="text-[10px] font-mono text-white/40 uppercase tracking-widest mb-2">THROUGHPUT</p>
                  <p className="text-2xl font-display font-bold">100k+ REQ/S</p>
                </div>
                <div className="bg-slate-900/50 border border-white/5 rounded-2xl p-6 backdrop-blur-sm">
                  <p className="text-[10px] font-mono text-white/40 uppercase tracking-widest mb-2">AVAILABILITY</p>
                  <p className="text-2xl font-display font-bold">99.999%</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Technical Footer Bar */}
        <div className="absolute bottom-0 left-0 w-full border-t border-white/5 bg-slate-950/80 backdrop-blur-md py-3 px-6">
          <div className="container-custom flex flex-wrap items-center justify-between gap-4 text-[10px] font-mono text-white/20 uppercase tracking-widest">
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                <span>COADEMIC_CORE_STABLE</span>
              </div>
              <span>LAT: 37.7749</span>
              <span>LNG: -122.4194</span>
              <span>SYS_LOAD: 12.4%</span>
            </div>
            <div className="flex items-center gap-6">
              <span>MEMORY_USAGE: 4.2GB</span>
              <span>THREAD_COUNT: 128</span>
              <span>ENCRYPTION: AES-256</span>
            </div>
          </div>
        </div>

        {/* Command Icon (Bottom Right) */}
        <div className="absolute bottom-12 right-12 z-30 hidden md:block">
          <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white/40 hover:text-white hover:border-white transition-all duration-300 cursor-pointer group">
            <div className="relative">
              <div className="absolute -inset-1 rounded-full border border-brand-red opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="w-5 h-5 flex items-center justify-center">⌘</div>
            </div>
          </div>
        </div>
      </section>

      {/* Live Workshop Preview */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="luxury-card overflow-hidden p-0 border-none shadow-luxury">
            <div className="grid lg:grid-cols-2">
              <div className="p-12 lg:p-20">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-red/10 text-brand-red text-xs font-bold mb-6">
                  <span className="w-2 h-2 rounded-full bg-brand-red animate-pulse" />
                  LIVE NOW
                </div>
                <h2 className="mb-6">Experience the Live Workshop</h2>
                <p className="text-lg mb-8 text-slate-600">Join immersive sessions led by industry veterans. Real-time coding, instant Q&A, and collaborative problem-solving.</p>
                <ul className="space-y-4 mb-10">
                  {["Interactive Whiteboarding", "Live Code Reviews", "System Design Deep Dives"].map((item) => (
                    <li key={item} className="flex items-center gap-3 font-bold text-slate-900">
                      <CheckCircle2 className="text-brand-red" size={20} />
                      {item}
                    </li>
                  ))}
                </ul>
                <button className="btn-primary">Join Next Session</button>
              </div>
              <div className="relative bg-slate-900 overflow-hidden group">
                <img 
                  src="https://picsum.photos/seed/workshop/1200/800"
                  className="w-full h-full object-cover opacity-40 group-hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                  alt="Workshop"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <button className="w-24 h-24 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-brand-red hover:border-brand-red transition-all duration-300 group">
                    <Play fill="currentColor" size={32} className="ml-2" />
                  </button>
                </div>
                <div className="absolute bottom-8 left-8 right-8 bg-white/10 backdrop-blur-md border border-white/10 p-4 rounded-2xl flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-brand-red flex items-center justify-center text-white font-bold">JD</div>
                  <div>
                    <p className="text-white font-bold text-sm">John Doe</p>
                    <p className="text-white/60 text-xs">Senior Engineer @ Google</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Traditional vs. Coademic Comparison */}
      <section className="section-padding bg-slate-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="mb-6">The <span className="line-through decoration-brand-red decoration-4 opacity-50">Old Way</span> vs. Coademic</h2>
            <p className="text-lg">Why settle for passive learning when you can train for performance?</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 relative">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full bg-white shadow-xl border border-slate-100 z-20 hidden md:flex items-center justify-center font-display font-black text-2xl text-slate-300 italic">
              VS
            </div>

            {/* Traditional */}
            <div className="bg-white p-12 rounded-[40px] border border-slate-200 opacity-60 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-500">
              <h4 className="text-2xl font-bold mb-2 text-slate-400">Traditional Learning</h4>
              <p className="text-slate-400 font-bold text-sm mb-8 italic">The slow, uncertain path</p>
              <ul className="space-y-6">
                {[
                  "Endless passive video tutorials",
                  "Outdated, theoretical curriculum",
                  "Zero real-world interview prep",
                  "Left alone to figure out placements",
                  "Isolated, unguided learning journey"
                ].map((item) => (
                  <li key={item} className="flex items-start gap-4 text-slate-400">
                    <div className="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center shrink-0 mt-1">
                      <div className="w-2 h-2 rounded-full bg-slate-300" />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Coademic */}
            <div className="bg-white p-12 rounded-[40px] border-2 border-brand-red shadow-luxury relative overflow-hidden group">
              <div className="absolute top-6 right-6 px-4 py-1 bg-brand-red text-white text-[10px] font-black uppercase tracking-widest rounded-full">
                Fast-Track
              </div>
              <h4 className="text-2xl font-bold mb-2 text-slate-900">The Coademic Engine</h4>
              <p className="text-brand-red font-bold text-sm mb-8 italic">The outcome-driven engine</p>
              <ul className="space-y-6">
                {[
                  "Interactive, performance-driven coding",
                  "Enterprise-grade, modern tech stacks",
                  "High-pressure live mock interviews",
                  "End-to-end ATS & placement pipeline",
                  "24/7 elite engineering community"
                ].map((item) => (
                  <li key={item} className="flex items-start gap-4 text-slate-900 font-medium">
                    <div className="w-6 h-6 rounded-full bg-brand-red/10 flex items-center justify-center shrink-0 mt-1 text-brand-red">
                      <CheckCircle2 size={16} />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Sectors & Attraction Stats */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="mb-6">Powering Innovation Across Every Major Sector</h2>
            <p className="text-lg">Our alumni are leading engineering teams in diverse industries worldwide.</p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-20">
            {sectors.map((sector) => (
              <div key={sector.name} className="flex items-center gap-3 px-6 py-3 rounded-full bg-white border border-slate-200 hover:border-brand-red hover:text-brand-red transition-all duration-300 cursor-default group">
                <sector.icon size={18} className="text-slate-400 group-hover:text-brand-red transition-colors" />
                <span className="font-bold text-sm">{sector.name}</span>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { label: "Hiring Partners", value: "450+", icon: Target },
              { label: "Alumni Network", value: "5k+", icon: Users },
              { label: "Avg. Placement Time", value: "45 Days", icon: Zap }
            ].map((stat) => (
              <div key={stat.label} className="bg-slate-50 p-10 rounded-[32px] text-center border border-slate-100 hover:border-brand-red/20 transition-all duration-300">
                <stat.icon className="text-brand-red mx-auto mb-6" size={40} />
                <p className="text-4xl font-display font-black text-slate-900 mb-2">{stat.value}</p>
                <p className="text-slate-500 font-bold text-xs uppercase tracking-widest">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-padding px-6">
        <div className="container-custom">
          <div className="relative bg-slate-950 rounded-[48px] p-12 md:p-24 overflow-hidden text-center">
            {/* Glowing Orbs */}
            <div className="absolute top-0 left-0 w-full h-full">
              <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-brand-red/20 rounded-full blur-[120px] animate-pulse" />
              <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] animate-pulse delay-700" />
              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20" />
            </div>

            <div className="relative z-10 max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-white/80 text-xs font-bold mb-8">
                <Sparkles size={14} className="text-brand-red" />
                YOUR NEXT CHAPTER
              </div>
              <h2 className="text-white text-4xl md:text-6xl mb-8 leading-tight">
                Ready to <span className="bg-gradient-to-r from-brand-red to-red-400 bg-clip-text text-transparent">Transform</span> Your Career?
              </h2>
              <p className="text-white/60 text-xl mb-12">
                Don't just learn to code. Learn to lead, innovate, and excel in the world's most demanding tech environments.
              </p>
              <button className="bg-brand-red text-white px-10 py-5 rounded-2xl font-bold text-lg shadow-[0_0_40px_rgba(192,0,0,0.3)] hover:shadow-[0_0_60px_rgba(192,0,0,0.5)] hover:scale-105 transition-all duration-300 group">
                Apply Now <ArrowRight className="inline-block ml-2 group-hover:translate-x-2 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
