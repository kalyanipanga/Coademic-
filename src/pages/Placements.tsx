import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "motion/react";
import { Trophy, Building2, Users, TrendingUp, Briefcase, GraduationCap, ArrowRight, Star, CheckCircle2 } from "lucide-react";

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
    <div className="min-h-screen bg-white selection:bg-brand-red selection:text-white pb-0">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 lg:pt-48 lg:pb-24 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:24px_24px]"></div>
          <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[400px] w-[400px] rounded-full bg-brand-red opacity-[0.05] blur-[120px]"></div>
        </div>

        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-brand-red/30 bg-brand-red/5 text-brand-red text-sm font-semibold mb-6 shadow-sm"
          >
            <Trophy size={16} />
            SUCCESS STORIES
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-display font-bold mb-6 text-slate-900 tracking-tight"
          >
            Our <span className="text-brand-red relative">
              Placements
              <svg className="absolute w-full h-3 -bottom-1 left-0 text-brand-red/20" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M0 5 Q 50 10 100 5" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round"/>
              </svg>
            </span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-slate-600 max-w-2xl mx-auto mb-12"
          >
            Join thousands of students who have transformed their careers and landed their dream jobs with Coademic.
          </motion.p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 px-6 bg-slate-50 border-y border-slate-100 relative z-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Users, label: "Students Placed", value: <AnimatedCounter from={100} to={350} suffix="+" /> },
              { icon: Building2, label: "Hiring Partners", value: <AnimatedCounter from={0} to={500} suffix="+" /> },
              { icon: TrendingUp, label: "Avg. Salary Hike", value: <AnimatedCounter from={0} to={150} suffix="%" /> },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="p-8 rounded-3xl bg-white border border-slate-100 text-center shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-14 h-14 mx-auto mb-6 rounded-2xl bg-brand-red/10 flex items-center justify-center text-brand-red">
                  <stat.icon size={28} />
                </div>
                <div className="text-4xl font-black text-slate-900 mb-2 tracking-tight">{stat.value}</div>
                <div className="text-slate-500 font-semibold uppercase tracking-wider text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Salary Insights */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900 tracking-tight">Unmatched Salary Outcomes</h2>
              <p className="text-lg text-slate-600 mb-10 leading-relaxed">
                Our curriculum is designed to make you a top-tier engineer, and the market rewards top-tier talent. We focus on product-based companies that offer the best compensation and growth.
              </p>
            </motion.div>
            
            <div className="space-y-6">
              {[
                { label: "Highest Package", value: "₹45 LPA", desc: "Domestic offer for SDE role" },
                { label: "Average Package", value: "₹12.5 LPA", desc: "Across all successful placements" },
                { label: "Average Hike", value: "150%", desc: "For working professionals" }
              ].map((stat, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-start gap-5 p-6 rounded-3xl bg-slate-50 border border-slate-100 hover:border-brand-red/30 transition-colors group"
                >
                  <div className="w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center text-brand-red shrink-0 group-hover:scale-110 transition-transform">
                    <TrendingUp size={28} />
                  </div>
                  <div>
                    <div className="text-3xl font-black text-slate-900 mb-1">{stat.value}</div>
                    <div className="font-bold text-slate-700 mb-1">{stat.label}</div>
                    <div className="text-sm text-slate-500">{stat.desc}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative lg:ml-auto"
          >
            <div className="absolute inset-0 bg-brand-red/10 rounded-[40px] blur-3xl transform rotate-3"></div>
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Students collaborating" 
              className="relative rounded-[40px] shadow-2xl border border-white/50 object-cover aspect-[4/5] w-full max-w-md mx-auto"
              referrerPolicy="no-referrer"
            />
            {/* Floating badge */}
            <motion.div 
              initial={{ opacity: 0, y: 20, x: -20 }}
              whileInView={{ opacity: 1, y: 0, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="absolute -bottom-6 -left-6 md:-left-12 bg-white p-6 rounded-3xl shadow-xl border border-slate-100 z-20"
            >
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-green-50 flex items-center justify-center text-green-600">
                  <Trophy size={28} />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Top 1%</div>
                  <div className="text-lg font-bold text-slate-900">Industry Ready</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Placement Process Timeline */}
      <section className="py-24 px-6 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:32px_32px]"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">How We Get You Placed</h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">A structured, proven approach to landing your dream job at top tech companies.</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8 relative">
            {/* Connecting Line */}
            <div className="hidden md:block absolute top-12 left-12 right-12 h-0.5 bg-gradient-to-r from-brand-red/0 via-brand-red to-brand-red/0 opacity-30 -z-10"></div>
            
            {[
              { icon: GraduationCap, title: "1. Skill Building", desc: "Master DSA, System Design, and Full Stack Dev with expert-led live classes." },
              { icon: Briefcase, title: "2. Portfolio Prep", desc: "Build industry-grade projects that make your resume stand out to recruiters." },
              { icon: Users, title: "3. Mock Interviews", desc: "Practice with actual engineers from top tech companies and get feedback." },
              { icon: Building2, title: "4. Referrals", desc: "Get direct referrals to our hiring partners and skip the resume screening." }
            ].map((step, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="text-center relative"
              >
                <div className="w-24 h-24 mx-auto bg-slate-800 border-4 border-slate-900 rounded-full shadow-xl flex items-center justify-center text-brand-red mb-8 relative z-10 group hover:scale-110 transition-transform duration-300">
                  <step.icon size={36} className="group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{step.title}</h3>
                <p className="text-slate-400 leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-24 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900 tracking-tight">Wall of Love</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">Don't just take our word for it. Hear from our alumni who have successfully transitioned their careers.</p>
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
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 rounded-3xl bg-white border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 group"
              >
                <div className="flex items-center gap-4 mb-6">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name}
                    className="w-14 h-14 rounded-full bg-slate-50 border-2 border-slate-100"
                  />
                  <div>
                    <div className="font-bold text-lg text-slate-900">{testimonial.name}</div>
                    <div className="text-sm font-medium text-slate-500">{testimonial.role}</div>
                  </div>
                </div>
                <div className="flex gap-1 mb-4 text-amber-400">
                  {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                </div>
                <p className="text-slate-600 mb-6 text-base leading-relaxed italic">
                  "{testimonial.message}"
                </p>
                <div className="flex items-center gap-2 text-sm font-bold text-brand-red bg-brand-red/5 w-fit px-4 py-2 rounded-full">
                  <Building2 size={16} />
                  Placed at {testimonial.company}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-brand-red text-white text-center relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white opacity-10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-black opacity-10 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4"></div>
        
        <div className="max-w-3xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">Ready to be our next success story?</h2>
            <p className="text-xl text-white/80 mb-10 leading-relaxed">Join the next cohort and take the first step towards your dream career in tech.</p>
            <button className="bg-white text-brand-red px-10 py-5 rounded-full font-bold text-lg hover:bg-slate-50 transition-all shadow-xl hover:shadow-2xl transform hover:-translate-y-1 flex items-center gap-2 mx-auto">
              Apply Now <ArrowRight size={20} />
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
