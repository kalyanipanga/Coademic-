import { useEffect, useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "motion/react";
import { 
  Trophy, Building2, Users, TrendingUp, Globe, 
  Target, Zap, Star, Briefcase, GraduationCap,
  ChevronRight, ArrowUpRight, BarChart3, PieChart,
  Clock, CheckCircle2, Rocket, Lightbulb, ShieldCheck,
  Cpu, Layout, Smartphone, Search, FileText,
  Linkedin, Users2, Laptop, Repeat, Key,
  Code2, MessageSquare, Wallet, Award, Infinity,
  Map
} from "lucide-react";

function AnimatedCounter({ from, to, suffix }: { from: number; to: number; suffix: string }) {
  const [count, setCount] = useState(from);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!isInView) return;
    
    let startTime: number;
    const duration = 2000;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / duration, 1);
      
      const easeOut = 1 - Math.pow(1 - percentage, 4);
      setCount(Math.floor(from + (to - from) * easeOut));

      if (percentage < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [from, to, isInView]);

  return <span ref={ref}>{count}{suffix}</span>;
}

export default function Placements() {
  return (
    <div className="py-24 px-6 min-h-screen bg-white">
      <div className="max-w-[95%] mx-auto">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-brand-red/30 bg-brand-red/5 text-brand-red text-sm font-semibold mb-6"
          >
            SUCCESS STORIES
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-6xl font-display font-bold mb-6 text-slate-900"
          >
            Our <span className="text-brand-red">Placements</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-slate-600 max-w-2xl mx-auto"
          >
            Join thousands of students who have transformed their careers with Coademic.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-32">
          {[
            { icon: Users, label: "Students Placed", value: <AnimatedCounter from={100} to={350} suffix="+" />, color: "text-blue-600", bg: "bg-blue-50" },
            { icon: Building2, label: "Hiring Partners", value: <AnimatedCounter from={0} to={500} suffix="+" />, color: "text-emerald-600", bg: "bg-emerald-50" },
            { icon: TrendingUp, label: "Avg. Salary Hike", value: <AnimatedCounter from={0} to={150} suffix="%" />, color: "text-brand-red", bg: "bg-brand-red/5" },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`p-8 rounded-3xl ${stat.bg} border border-white shadow-xl shadow-slate-200/50 text-center relative overflow-hidden group`}
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-white/20 rounded-full -mr-12 -mt-12 transition-transform group-hover:scale-150 duration-700" />
              <div className={`w-14 h-14 mx-auto mb-6 rounded-2xl ${stat.bg} border border-white shadow-inner flex items-center justify-center ${stat.color}`}>
                <stat.icon size={28} />
              </div>
              <div className="text-4xl font-bold text-slate-900 mb-2">{stat.value}</div>
              <div className="text-slate-500 font-semibold uppercase tracking-wider text-xs">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Success Funnel Section */}
        <div className="mb-32">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">The <span className="text-brand-red">Success</span> Funnel</h2>
            <p className="text-slate-600">How we transform your potential into a professional career.</p>
          </div>
          
          <div className="max-w-4xl mx-auto space-y-4">
            {[
              { label: "Applications Received", value: "10,000+", width: "w-full", color: "bg-slate-900" },
              { label: "Resume Shortlisted", value: "4,500+", width: "w-[85%]", color: "bg-slate-800" },
              { label: "Technical Rounds Cleared", value: "1,200+", width: "w-[65%]", color: "bg-brand-red" },
              { label: "HR Rounds Qualified", value: "450+", width: "w-[45%]", color: "bg-brand-red/80" },
              { label: "Final Offer Letters", value: "350+", width: "w-[25%]", color: "bg-emerald-500" },
            ].map((step, i) => (
              <motion.div
                key={step.label}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="flex items-center gap-6"
              >
                <div className="w-48 text-right font-bold text-slate-500 text-sm hidden md:block">{step.label}</div>
                <div className="flex-1 relative h-14 flex items-center">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + i * 0.1, duration: 1 }}
                    className={`h-full ${step.width} ${step.color} rounded-r-full shadow-lg flex items-center justify-end px-6 text-white font-bold`}
                  >
                    {step.value}
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Salary Trends & Global Reach */}
        <div className="grid lg:grid-cols-2 gap-12 mb-32">
          {/* Salary Trends */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="p-10 rounded-[40px] bg-slate-900 text-white relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-8 opacity-10">
              <BarChart3 size={120} />
            </div>
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
              <TrendingUp className="text-brand-red" /> Salary Growth Trends
            </h3>
            
            <div className="space-y-8 relative z-10">
              <div className="space-y-2">
                <div className="flex justify-between text-sm font-medium text-slate-400">
                  <span>Before Coademic</span>
                  <span>Avg. 3.5 LPA</span>
                </div>
                <div className="h-4 bg-white/10 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: "30%" }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className="h-full bg-slate-500"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="flex justify-between text-sm font-medium text-brand-red">
                  <span>After Coademic Training</span>
                  <span>Avg. 8.5 LPA</span>
                </div>
                <div className="h-6 bg-white/10 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: "85%" }}
                    transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
                    className="h-full bg-gradient-to-r from-brand-red to-rose-500"
                  />
                </div>
              </div>

              <div className="pt-6 grid grid-cols-2 gap-4">
                <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                  <div className="text-brand-red font-bold text-xl">24 LPA</div>
                  <div className="text-slate-400 text-xs uppercase tracking-wider">Highest Package</div>
                </div>
                <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                  <div className="text-emerald-400 font-bold text-xl">100%</div>
                  <div className="text-slate-400 text-xs uppercase tracking-wider">Assistance</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Global Reach */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="p-10 rounded-[40px] bg-white border border-slate-100 shadow-2xl relative overflow-hidden"
          >
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-3 text-slate-900">
              <Globe className="text-blue-500" /> Global Placement Reach
            </h3>
            
            <div className="relative h-64 flex items-center justify-center">
              {/* Stylized Map Dots */}
              <div className="absolute inset-0 flex items-center justify-center opacity-20">
                <Globe size={200} className="text-slate-200" />
              </div>
              
              <div className="relative w-full h-full">
                {[
                  { top: "20%", left: "30%", delay: 0 },
                  { top: "40%", left: "60%", delay: 0.5 },
                  { top: "70%", left: "40%", delay: 1 },
                  { top: "30%", left: "80%", delay: 1.5 },
                  { top: "60%", left: "20%", delay: 2 },
                ].map((dot, i) => (
                  <motion.div
                    key={i}
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: [0, 1.5, 1], opacity: [0, 1, 0.5] }}
                    transition={{ 
                      duration: 2, 
                      repeat: 1000000, 
                      delay: dot.delay 
                    }}
                    className="absolute w-4 h-4 bg-brand-red rounded-full"
                    style={{ top: dot.top, left: dot.left }}
                  />
                ))}
              </div>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-500">
                  <Building2 size={20} />
                </div>
                <div>
                  <div className="font-bold text-slate-900">12+</div>
                  <div className="text-slate-500 text-xs">Countries</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-500">
                  <Users size={20} />
                </div>
                <div>
                  <div className="font-bold text-slate-900">150+</div>
                  <div className="text-slate-500 text-xs">Cities</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* 90-Day Transformation Timeline */}
        <div className="mb-32">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-block px-4 py-1 rounded-full bg-emerald-50 text-emerald-600 text-xs font-bold tracking-widest mb-4"
            >
              THE JOURNEY
            </motion.div>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-slate-900">90-Day <span className="text-brand-red">Transformation</span></h2>
            <p className="text-slate-600">Your roadmap from a learner to a top-tier professional.</p>
          </div>

          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-slate-100 -translate-x-1/2 hidden md:block" />
            
            <div className="space-y-12 relative">
              {[
                {
                  day: "Day 1-30",
                  title: "Foundation & Core Mastery",
                  desc: "Deep dive into Advanced DSA, System Design, and CS Fundamentals with industry mentors.",
                  icon: GraduationCap,
                  color: "bg-blue-500",
                  align: "left"
                },
                {
                  day: "Day 31-60",
                  title: "Production-Grade Projects",
                  desc: "Build 3+ full-stack applications using modern tech stacks like React, Node.js, and AWS.",
                  icon: Zap,
                  color: "bg-amber-500",
                  align: "right"
                },
                {
                  day: "Day 61-75",
                  title: "Interview Readiness",
                  desc: "5+ Mock interviews with SDEs from FAANG, resume optimization, and soft skills training.",
                  icon: Target,
                  color: "bg-rose-500",
                  align: "left"
                },
                {
                  day: "Day 76-90",
                  title: "Placement Launchpad",
                  desc: "Direct referrals to 500+ hiring partners and personalized interview scheduling.",
                  icon: Rocket,
                  color: "bg-emerald-500",
                  align: "right"
                }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className={`flex flex-col md:flex-row items-center gap-8 ${item.align === 'right' ? 'md:flex-row-reverse' : ''}`}
                >
                  <div className="flex-1 w-full md:text-right">
                    {item.align === 'left' && (
                      <div className="md:pr-12">
                        <div className={`inline-block px-3 py-1 rounded-lg ${item.color} text-white text-xs font-bold mb-2`}>{item.day}</div>
                        <h4 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h4>
                        <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                      </div>
                    )}
                  </div>

                  <div className={`w-12 h-12 rounded-full ${item.color} flex items-center justify-center text-white shadow-lg z-10 shrink-0 border-4 border-white`}>
                    <item.icon size={20} />
                  </div>

                  <div className="flex-1 w-full">
                    {item.align === 'right' && (
                      <div className="md:pl-12">
                        <div className={`inline-block px-3 py-1 rounded-lg ${item.color} text-white text-xs font-bold mb-2`}>{item.day}</div>
                        <h4 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h4>
                        <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Placement Support Ecosystem - Bento Grid */}
        <div className="mb-32">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-slate-900">The Placement <span className="text-brand-red">Ecosystem</span></h2>
            <p className="text-slate-600">Comprehensive support that goes beyond just teaching code.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-4 h-auto md:h-[600px]">
            {/* Main Card */}
            <motion.div 
              whileHover={{ scale: 1.01 }}
              className="md:col-span-2 md:row-span-2 bg-slate-900 rounded-[32px] p-10 text-white flex flex-col justify-between relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-brand-red/20 blur-[100px] -mr-32 -mt-32 group-hover:bg-brand-red/40 transition-colors" />
              <div>
                <div className="w-12 h-12 rounded-2xl bg-brand-red flex items-center justify-center mb-6">
                  <Trophy size={24} />
                </div>
                <h3 className="text-3xl font-bold mb-4">Personalized Career Coaching</h3>
                <p className="text-slate-400 text-lg leading-relaxed">
                  Get 1-on-1 mentorship from industry veterans who have worked at top tech giants. We don't just guide; we transform.
                </p>
              </div>
              <div className="flex items-center gap-4 mt-8">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map(i => (
                    <img key={i} src={`https://i.pravatar.cc/100?img=${i+10}`} className="w-10 h-10 rounded-full border-2 border-slate-900" alt="Mentor" />
                  ))}
                </div>
                <span className="text-sm text-slate-400 font-medium">+50 Industry Mentors</span>
              </div>
            </motion.div>

            {/* Feature 1 */}
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="md:col-span-2 bg-blue-50 rounded-[32px] p-8 flex items-center gap-6 group cursor-pointer"
            >
              <div className="w-16 h-16 rounded-2xl bg-white shadow-sm flex items-center justify-center text-blue-600 shrink-0 group-hover:rotate-12 transition-transform">
                <Search size={32} />
              </div>
              <div>
                <h4 className="text-xl font-bold text-slate-900 mb-1">Resume Optimization</h4>
                <p className="text-slate-500 text-sm">ATS-friendly resumes designed to get you noticed by top recruiters.</p>
              </div>
            </motion.div>

            {/* Feature 2 */}
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="bg-emerald-50 rounded-[32px] p-8 flex flex-col justify-center text-center group cursor-pointer"
            >
              <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center text-emerald-600 mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Users size={24} />
              </div>
              <h4 className="font-bold text-slate-900">Mock Interviews</h4>
              <p className="text-slate-500 text-xs mt-2">Real-world simulation with feedback.</p>
            </motion.div>

            {/* Feature 3 */}
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="bg-rose-50 rounded-[32px] p-8 flex flex-col justify-center text-center group cursor-pointer"
            >
              <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center text-rose-600 mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Briefcase size={24} />
              </div>
              <h4 className="font-bold text-slate-900">Referral Network</h4>
              <p className="text-slate-500 text-xs mt-2">Direct access to internal openings.</p>
            </motion.div>
          </div>
        </div>

        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-slate-900">Voices of <span className="text-brand-red">Success</span></h2>
          <p className="text-slate-600">Hear from our alumni who are now leading the tech industry.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              name: "Aarav Sharma",
              role: "SDE II",
              company: "Top Product Company",
              message: "The system design course was exactly what I needed. The depth of the content and the real-world examples helped me ace my interviews.",
              avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Aarav&skinColor=edb98a&hairColor=2c1b18"
            },
            {
              name: "Priya Patel",
              role: "Frontend Engineer",
              company: "Leading MNC",
              message: "I was struggling with DSA concepts until I found Coademic. The visual explanations made complex algorithms so much easier to understand.",
              avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Priya&skinColor=ffdbb4&hairColor=4a312c"
            },
            {
              name: "Rahul Verma",
              role: "Backend Developer",
              company: "High Growth Startup",
              message: "Mock interviews with industry experts gave me the confidence I lacked. The feedback was actionable and precise.",
              avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Rahul&skinColor=d08b5b&hairColor=0e0e0e"
            },
            {
              name: "Ananya Gupta",
              role: "Full Stack Developer",
              company: "Global Tech Firm",
              message: "From zero to hero! The structured learning path and hands-on projects were instrumental in my transition to a product-based company.",
              avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Ananya&skinColor=edb98a&hairColor=2c1b18"
            },
            {
              name: "Vikram Singh",
              role: "Software Engineer",
              company: "Fintech Giant",
              message: "The community support is amazing. Whenever I got stuck, there was always someone to help. Highly recommend Coademic!",
              avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Vikram&skinColor=fd9841&hairColor=0e0e0e"
            },
            {
              name: "Neha Reddy",
              role: "DevOps Engineer",
              company: "Cloud Services Leader",
              message: "The best investment I've made for my career. The curriculum is up-to-date with current industry standards.",
              avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Neha&skinColor=ffdbb4&hairColor=4a312c"
            }
          ].map((testimonial, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              className="p-6 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-all"
            >
              <div className="flex items-center gap-4 mb-4">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full bg-slate-50"
                />
                <div>
                  <div className="font-bold text-slate-900">{testimonial.name}</div>
                  <div className="text-sm text-slate-500">{testimonial.role}</div>
                </div>
              </div>
              <p className="text-slate-600 mb-4 text-sm leading-relaxed">
                "{testimonial.message}"
              </p>
              <div className="flex items-center gap-2 text-sm font-medium text-brand-red">
                <Building2 size={16} />
                Placed at {testimonial.company}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Free Add-ons Section */}
        <div className="mb-32">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-block px-4 py-1 rounded-full bg-brand-red/10 text-brand-red text-xs font-bold tracking-widest mb-4"
            >
              BONUS VALUE
            </motion.div>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-slate-900">Free <span className="text-brand-red">Add-On</span> Sessions</h2>
            <p className="text-slate-600">Extra resources to give you a competitive edge in the job market.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[
              { title: "Resume Building", icon: FileText, color: "text-blue-500", bg: "bg-blue-50" },
              { title: "LinkedIn Building", icon: Linkedin, color: "text-blue-600", bg: "bg-blue-50" },
              { title: "Networking Session", icon: Users2, color: "text-purple-500", bg: "bg-purple-50" },
              { title: "Freelancing Session", icon: Laptop, color: "text-slate-700", bg: "bg-slate-50" },
              { title: "Career Transition", icon: Repeat, color: "text-orange-500", bg: "bg-orange-50" },
              { title: "Job Secrets & Updates", icon: Key, color: "text-amber-500", bg: "bg-amber-50" },
              { title: "Tech Sessions 1&2", icon: Code2, color: "text-indigo-500", bg: "bg-indigo-50" },
              { title: "Communication Skills", icon: MessageSquare, color: "text-pink-500", bg: "bg-pink-50" },
              { title: "Financial Awareness", icon: Wallet, color: "text-emerald-500", bg: "bg-emerald-50" },
              { title: "MAANG Sessions", icon: Infinity, color: "text-cyan-500", bg: "bg-cyan-50" },
              { title: "Roadmap to DSA", icon: Map, color: "text-rose-500", bg: "bg-rose-50" },
              { title: "Earn a Certificate", icon: Award, color: "text-yellow-500", bg: "bg-yellow-50" },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                whileHover={{ y: -5 }}
                className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl transition-all text-center flex flex-col items-center justify-center group"
              >
                <div className={`w-16 h-16 rounded-2xl ${item.bg} flex items-center justify-center ${item.color} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <item.icon size={32} />
                </div>
                <h4 className="font-bold text-slate-800 text-sm md:text-base leading-tight">{item.title}</h4>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Final CTA Section */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-32 p-12 md:p-20 rounded-[48px] bg-brand-red text-white text-center relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
            <motion.div 
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 6, repeat: 1000000, ease: "easeInOut" }}
              className="absolute top-10 left-10"
            >
              <Star size={40} />
            </motion.div>
            <motion.div 
              animate={{ y: [0, -30, 0] }}
              transition={{ duration: 8, repeat: 1000000, ease: "easeInOut", delay: 1 }}
              className="absolute bottom-20 right-20"
            >
              <Trophy size={60} />
            </motion.div>
            <motion.div 
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 5, repeat: 1000000, ease: "easeInOut", delay: 0.5 }}
              className="absolute top-1/2 left-1/4"
            >
              <Zap size={30} />
            </motion.div>
          </div>
          
          <div className="relative z-10">
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-8">Ready to be our next <br /> <span className="text-slate-900">Success Story?</span></h2>
            <p className="text-white/80 text-xl max-w-2xl mx-auto mb-12">
              Don't leave your career to chance. Join the elite community of developers and land your dream job in 90 days.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <button className="bg-white text-brand-red px-10 py-5 rounded-2xl font-bold text-lg hover:bg-slate-50 transition-colors shadow-2xl shadow-black/20">
                Apply for Next Batch
              </button>
              <button className="bg-transparent border-2 border-white/30 text-white px-10 py-5 rounded-2xl font-bold text-lg hover:bg-white/10 transition-colors">
                Talk to an Expert
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
