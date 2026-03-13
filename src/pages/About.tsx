import { motion } from "motion/react";
import { CheckCircle2, Target, Eye, Rocket, Crosshair } from "lucide-react";

import { BackgroundLines } from "../components/ui/background-lines";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
  }
};

export default function About() {
  return (
    <BackgroundLines className="min-h-screen">
      <div className="relative z-10 pt-12 pb-24 px-6 max-w-[95%] mx-auto w-full">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-24"
        >
          {/* About Coademic Section */}
          <div className="space-y-8">
            <div className="text-center space-y-6">
              <motion.h1 variants={itemVariants} className="text-5xl md:text-6xl font-display font-bold tracking-tight text-slate-900">
                About <span className="text-brand-red">Coademic</span>
              </motion.h1>
            </div>

            <motion.div variants={itemVariants} className="prose prose-lg max-w-none text-slate-600 leading-relaxed space-y-6">
              <p>
                Coademic is a next-generation career preparation platform built to help students transition confidently from academics to the professional IT world.
              </p>
              <p>
                We recognize that academic knowledge alone is not enough to crack competitive interviews. Success in today's technology landscape requires practical skills, structured preparation, and real-world exposure. That's why Coademic delivers a comprehensive, industry-aligned preparation ecosystem designed to simulate real technical interviews and workplace challenges.
              </p>
              <p>
                Our platform integrates advanced technology - including a built-in Monaco-powered IDE - enabling learners to practice coding in a realistic environment without any external setup. Combined with curated interview-focused problem sets, structured learning pathways, and performance analytics, we ensure preparation is focused, measurable, and outcome-driven.
              </p>
              <p className="text-xl font-medium text-slate-900 border-l-4 border-brand-red pl-6 italic">
                At Coademic, we don't just prepare students - we enable them to perform with confidence.
              </p>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Vision Section */}
            <motion.div variants={itemVariants} className="p-10 bg-slate-50 rounded-[32px] border border-slate-100 space-y-6">
              <div className="w-14 h-14 rounded-2xl bg-brand-red/10 flex items-center justify-center text-brand-red mb-6">
                <Eye size={28} />
              </div>
              <h2 className="text-3xl font-bold text-slate-900">Vision</h2>
              <div className="space-y-4 text-slate-600 leading-relaxed">
                <p>
                  To become the world's most trusted and outcome-driven career preparation platform, empowering students to confidently transition from academic learning to successful professional careers in the global IT industry.
                </p>
                <p>
                  We envision a future where every aspiring professional, regardless of background, has access to structured guidance, practical training environments, and the tools required to compete and succeed at the highest level.
                </p>
              </div>
            </motion.div>

            {/* Mission Section */}
            <motion.div variants={itemVariants} className="p-10 bg-white border border-slate-100 shadow-xl shadow-slate-200/20 rounded-[32px] space-y-6 relative overflow-hidden">
              <div className="absolute -right-10 -top-10 w-40 h-40 bg-brand-red/10 rounded-full blur-3xl" />
              <div className="w-14 h-14 rounded-2xl bg-brand-red flex items-center justify-center text-white mb-6 shadow-lg shadow-brand-red/20 relative z-10">
                <Target size={28} />
              </div>
              <h2 className="text-3xl font-bold text-slate-900 relative z-10">Mission</h2>
              <div className="space-y-6 text-slate-600 leading-relaxed relative z-10">
                <p>
                  Our mission is to bridge the gap between academic education and industry expectations by delivering a structured, technology-enabled, and performance-focused preparation ecosystem.
                </p>
                <div>
                  <p className="font-semibold text-slate-900 mb-4">We are committed to:</p>
                  <ul className="space-y-3">
                    {[
                      "Providing realistic interview simulation experiences",
                      "Offering structured, industry-aligned learning pathways",
                      "Equipping students with strong practical problem-solving skills",
                      "Enabling measurable performance improvement through analytics and feedback",
                      "Building confidence through continuous practice and real-world exposure"
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle2 size={20} className="text-brand-red shrink-0 mt-0.5" />
                        <span className="text-slate-600">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <p className="pt-4 border-t border-slate-100">
                  Through innovation, quality content, and a results-driven approach, we transform students into confident, industry-ready professionals.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Core Focus Section */}
          <motion.div variants={itemVariants} className="space-y-10">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto rounded-2xl bg-brand-red/10 flex items-center justify-center text-brand-red mb-6">
                <Crosshair size={32} />
              </div>
              <h2 className="text-3xl font-bold text-slate-900">Our Core Focus</h2>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                "Practical problem-solving mastery",
                "Real interview simulation experience",
                "Continuous performance tracking and improvement",
                "Industry-relevant and up-to-date preparation",
                "Confidence building through repetition, feedback, and refinement"
              ].map((focus, i) => (
                <div key={i} className="p-6 rounded-2xl border border-slate-100 bg-white shadow-sm flex items-start gap-4 hover:border-brand-red/30 transition-colors">
                  <div className="w-8 h-8 rounded-full bg-brand-red/10 flex items-center justify-center text-brand-red shrink-0 mt-1">
                    <span className="font-bold text-sm">{i + 1}</span>
                  </div>
                  <p className="text-slate-700 font-medium">{focus}</p>
                </div>
              ))}
            </div>

            <div className="text-center pt-8">
              <p className="text-2xl md:text-3xl font-display font-bold text-slate-900">
                We don't just help students prepare. <br className="hidden md:block" />
                <span className="text-brand-red">We help them perform.</span>
              </p>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </BackgroundLines>
  );
}
