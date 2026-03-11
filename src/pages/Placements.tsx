import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "motion/react";
import { Trophy, Building2, Users, TrendingUp } from "lucide-react";

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
      <div className="max-w-7xl mx-auto">
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

        <div className="grid md:grid-cols-3 gap-8 mb-20">
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
              className="p-8 rounded-2xl bg-slate-50 border border-slate-100 text-center"
            >
              <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-brand-red/10 flex items-center justify-center text-brand-red">
                <stat.icon size={24} />
              </div>
              <div className="text-3xl font-bold text-slate-900 mb-2">{stat.value}</div>
              <div className="text-slate-500 font-medium">{stat.label}</div>
            </motion.div>
          ))}
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
      </div>
    </div>
  );
}
