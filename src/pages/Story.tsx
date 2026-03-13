import { motion } from "motion/react";
import { useNavigate } from "react-router-dom";
import { ArrowRight, Sparkles, Rocket, Calendar, Target, Cpu, TrendingUp } from "lucide-react";

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

const floatingVariants = {
  animate: {
    y: [0, -10, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

export default function Story() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white">
      <div className="relative z-10 pt-12 pb-12 px-6 max-w-5xl mx-auto w-full">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-16"
        >
          {/* Section 2: Heading */}
          <div className="text-left space-y-8 max-w-3xl">
            <div className="space-y-6">
              <motion.h1 
                variants={itemVariants} 
                className="text-3xl md:text-5xl font-sans font-bold tracking-tight text-slate-900 leading-tight"
              >
                The Story Behind{" "}
                <span className="bg-gradient-to-r from-brand-red to-slate-900 bg-clip-text text-transparent">
                  Coademic
                </span>
              </motion.h1>
            </div>
          </div>

          {/* Section 3: Story Content */}
          <motion.div 
            variants={itemVariants}
            className="space-y-12 pt-8"
          >
            <div className="max-w-4xl space-y-8 text-lg text-slate-600 leading-relaxed">
              <motion.p variants={itemVariants}>
                Coademic was founded in 2025 with a bold conviction - that education must do more than grant degrees; it must build careers. We witnessed a harsh reality: talented students were graduating every year armed with knowledge, yet unprepared for the practical demands of the industry. The problem was never capability - it was the disconnect between classrooms and careers. We refused to let that disconnect define a generation.
              </motion.p>
              
              <motion.p variants={itemVariants}>
                Instead of accepting the gap, we chose to bridge it. Our founders stepped away from secure professional paths to pursue a larger purpose - building an ecosystem where learning is practical, immersive, and deeply aligned with real industry expectations. Coademic was never created to be just another training institute; it was built as a movement - a mission to redefine how students transition from academics to achievement.
              </motion.p>
              
              <motion.p variants={itemVariants}>
                What began as a focused training initiative evolved into a dynamic, career-accelerating platform. Today, Coademic delivers industry-driven programs across emerging technology domains, integrating real-world hands-on projects, live problem-solving aligned with industry standards, mentorship from experienced professionals, career-first skill development, and meaningful industry exposure. We don’t just teach subjects - we simulate the real world. We don’t just provide courses - we create transformation.
              </motion.p>

              <motion.p variants={itemVariants}>
                At Coademic, students actively build, experiment, collaborate, and grow into confident professionals prepared to meet global standards. As industries evolve and technology advances, we continuously innovate our curriculum, refine our methodologies, and raise our benchmarks to ensure our learners stay ahead - not behind. Today, Coademic stands as a rising force in the EdTech ecosystem, empowering ambition, shaping future-ready professionals, and redefining what career-focused education truly means. Our commitment remains unwavering: to close the gap, unlock potential, and ensure that academics don’t just educate - they elevate.
              </motion.p>
            </div>

            <div className="flex justify-center pt-8">
              <motion.div 
                variants={floatingVariants}
                animate="animate"
                className="relative max-w-2xl p-10 bg-white/40 backdrop-blur-xl border border-white/60 rounded-[32px] shadow-[0_20px_50px_rgba(0,0,0,0.05)] overflow-hidden group text-center"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-red via-brand-red/60 to-brand-red/30" />
                <p className="text-2xl font-medium text-slate-800 italic leading-relaxed relative z-10">
                  "Coademic is more than an education platform it’s a passion, a sacrifice, and a commitment to every student’s career success."
                </p>
                <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-brand-red/10 rounded-full blur-2xl group-hover:bg-brand-red/20 transition-colors duration-700" />
              </motion.div>
            </div>
          </motion.div>

          {/* Section 4: Stats */}
          <motion.div variants={itemVariants} className="pt-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { 
                  label: "Founded", 
                  icon: Calendar,
                  content: [
                    "Founded in 2025 to bridge the gap between traditional academics and the fast-paced demands of the modern tech industry.",
                    "We recognized that talented students were graduating with theoretical knowledge but lacked the hands-on experience required to succeed.",
                    "Our goal was to create a platform that transforms education into a direct pathway to meaningful, high-growth careers."
                  ]
                },
                { 
                  label: "Mission", 
                  icon: Target,
                  content: [
                    "To empower every student with the practical skills, confidence, and industry connections needed to thrive in a competitive job market.",
                    "We are dedicated to delivering career-focused training that turns ambitious learners into highly skilled, job-ready professionals.",
                    "By aligning our curriculum with real-world expectations, we ensure our students are not just employable, but truly indispensable."
                  ]
                },
                { 
                  label: "Focus", 
                  icon: Cpu,
                  content: [
                    "We specialize in immersive technology training, intensive coding practice, and project-based learning that mirrors real industry workflows.",
                    "Our programs provide comprehensive career guidance, mentorship from industry experts, and a deep dive into the latest tech stacks.",
                    "Every module is designed to build technical proficiency while fostering the critical thinking and problem-solving skills employers demand."
                  ]
                },
                { 
                  label: "Impact", 
                  icon: TrendingUp,
                  content: [
                    "We have helped countless students master complex technologies, ace technical interviews, and secure roles at top-tier organizations.",
                    "By bridging the gap between classroom theory and professional practice, we accelerate the transition from student to successful professional.",
                    "Our graduates leave with the portfolio, experience, and network required to launch and sustain a rewarding, long-term career."
                  ]
                }
              ].map((stat, i) => (
                <motion.div 
                  key={stat.label}
                  variants={itemVariants}
                  whileHover={{ y: -8 }}
                  className="relative group bg-white p-8 rounded-3xl border border-slate-200 shadow-sm transition-all duration-500 hover:shadow-2xl hover:border-brand-red/30 overflow-hidden"
                >
                  {/* Spotlight Effect */}
                  <div className="absolute -inset-0.5 bg-gradient-to-br from-brand-red/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />
                  
                  <div className="relative z-10">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="p-3 bg-brand-red/10 text-brand-red rounded-2xl group-hover:bg-brand-red group-hover:text-white transition-colors duration-300">
                        <stat.icon size={28} />
                      </div>
                      <div className="text-sm font-bold text-slate-900 uppercase tracking-widest">{stat.label}</div>
                    </div>
                    <div className="space-y-3">
                      {stat.content.map((line, idx) => (
                        <p key={idx} className="text-sm text-slate-600 leading-relaxed group-hover:text-slate-700 transition-colors duration-300">{line}</p>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Section 5: CTA */}
          <motion.div 
            variants={itemVariants}
            className="pt-24"
          >
            <div className="relative overflow-hidden bg-white border border-slate-100 rounded-[40px] p-12 md:p-20 text-center space-y-8 shadow-2xl shadow-slate-200/50">
              {/* Subtle Grid Pattern */}
              <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
                   style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
              
              {/* Decorative background for CTA */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-brand-red/5 rounded-full blur-3xl -mr-32 -mt-32" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-red/5 rounded-full blur-3xl -ml-32 -mb-32" />
              
              <div className="relative z-10 space-y-8">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-red/5 text-brand-red rounded-full text-xs font-bold uppercase tracking-widest mb-4">
                  <Sparkles size={14} /> Start Your Journey
                </div>

                <motion.h2 
                  variants={itemVariants}
                  className="text-4xl md:text-6xl font-bold text-slate-900 tracking-tight"
                >
                  Ready to start your own <br className="hidden md:block" /> success story?
                </motion.h2>
                
                <motion.p 
                  variants={itemVariants}
                  className="text-slate-500 text-lg md:text-xl max-w-2xl mx-auto"
                >
                  Join Coademic today and bridge the gap between your education and your dream career.
                </motion.p>
                
                <motion.div 
                  variants={itemVariants}
                  className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-4"
                >
                  <button 
                    onClick={() => navigate("/register")}
                    className="group px-6 py-3 bg-slate-900 text-white font-medium rounded-lg transition-all hover:bg-slate-800 hover:shadow-md active:scale-[0.98] w-full sm:w-auto flex items-center justify-center gap-2"
                  >
                    Get Started Now <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                  <button 
                    onClick={() => navigate("/courses")}
                    className="group px-6 py-3 bg-white text-slate-700 font-medium rounded-lg transition-all hover:bg-slate-50 hover:text-slate-900 border border-slate-200 shadow-sm w-full sm:w-auto flex items-center justify-center gap-2"
                  >
                    <Rocket size={18} className="group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" /> Explore Courses
                  </button>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
