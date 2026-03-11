import { motion } from "motion/react";
import { CheckCircle2, Star, Shield, Zap } from "lucide-react";

export default function WhyUs() {
  return (
    <div className="py-24 px-6 min-h-screen bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-brand-red/30 bg-brand-red/5 text-brand-red text-sm font-semibold mb-6"
          >
            WHY CHOOSE US
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-6xl font-display font-bold mb-6 text-slate-900"
          >
            The Coademic <span className="text-brand-red">Advantage</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-slate-600 max-w-2xl mx-auto"
          >
            We don't just teach; we transform careers through our unique methodology.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {[
            {
              icon: Star,
              title: "Industry-Expert Mentors",
              description: "Learn directly from engineers who have cracked interviews at Google, Amazon, and Microsoft."
            },
            {
              icon: Shield,
              title: "Real-World Projects",
              description: "Build production-grade applications that you can proudly showcase in your portfolio."
            },
            {
              icon: Zap,
              title: "Mock Interviews",
              description: "Practice with realistic mock interviews and get detailed feedback to improve your performance."
            },
            {
              icon: CheckCircle2,
              title: "Placement Support",
              description: "Get dedicated support for resume building, LinkedIn optimization, and job referrals."
            }
          ].map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
              className="flex gap-6"
            >
              <div className="w-16 h-16 shrink-0 rounded-2xl bg-brand-red/10 flex items-center justify-center text-brand-red">
                <feature.icon size={32} />
              </div>
              <div>
                <h3 className="text-2xl font-display font-bold mb-3 text-slate-900">{feature.title}</h3>
                <p className="text-slate-600 leading-relaxed text-lg">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
