import { motion } from "motion/react";
import { 
  ArrowRight, Code, Briefcase, Users, CheckCircle2, Terminal, 
  FileText, BookOpen, Share2, BarChart3, Video, GitBranch, Globe, Cpu 
} from "lucide-react";
import { Link } from "react-router-dom";
import { BackgroundLines } from "../components/ui/background-lines";
import { InfiniteMovingCards } from "../components/ui/infinite-moving-cards";
import { enquireNow } from "../utils/whatsapp";
import { WhatsAppIcon } from "../components/icons/WhatsAppIcon";

const testimonials = [
  {
    name: "Rahul S.",
    title: "B.Tech CSE Student",
    quote: "The live mock interviews completely changed my confidence level. I went from freezing up to clearing my first technical round with ease."
  },
  {
    name: "Priya M.",
    title: "Placed at Tech Startup",
    quote: "Coademic's structured DSA paths and the Monaco IDE made practicing feel exactly like the real coding assessments."
  },
  {
    name: "Amit K.",
    title: "Aspiring Software Developer",
    quote: "The resume kit and HR mock sessions helped me stand out. I finally started getting callbacks from top product companies."
  },
  {
    name: "Sneha R.",
    title: "Frontend Developer",
    quote: "I loved how the platform breaks down complex interview patterns into simple, actionable steps. Highly recommended!"
  },
  {
    name: "Vikram T.",
    title: "Placed at MNC",
    quote: "The real-time code execution and custom test cases in the IDE prepared me perfectly for the pressure of live coding rounds."
  },
  {
    name: "Anjali D.",
    title: "Final Year Student",
    quote: "From zero confidence to multiple offers. The structured learning paths gave me exactly what I needed to focus on."
  },
  {
    name: "Karan P.",
    title: "Backend Engineer",
    quote: "The technical question bank is incredibly accurate to what companies are actually asking right now."
  },
  {
    name: "Neha V.",
    title: "Placed at Product Firm",
    quote: "The AI feedback on my mock interviews pointed out exactly where I was going wrong with my communication."
  },
  {
    name: "Rohan B.",
    title: "Software Engineer Intern",
    quote: "Practicing in the same environment as the real interview took away so much of my anxiety. Thank you Coademic!"
  },
  {
    name: "Meera S.",
    title: "B.Tech IT Student",
    quote: "The LinkedIn optimization tips alone were worth it. My profile views skyrocketed after applying the strategies."
  },
  {
    name: "Arjun N.",
    title: "Full Stack Developer",
    quote: "I've tried many platforms, but the quality of the DSA practice questions here is unmatched. Very industry-relevant."
  },
  {
    name: "Pooja K.",
    title: "Placed at FinTech",
    quote: "The version control modules helped me answer the tricky Git questions that usually trip up freshers."
  },
  {
    name: "Siddharth M.",
    title: "Aspiring Data Scientist",
    quote: "The mock interviewers give genuine, constructive feedback that actually helps you improve, not just generic advice."
  },
  {
    name: "Kavya T.",
    title: "Pre-final Year Student",
    quote: "Starting early with Coademic was the best decision. I feel completely ready for the upcoming placement season."
  },
  {
    name: "Aditya R.",
    title: "Placed at Top Tier MNC",
    quote: "The comprehensive approach from resume to technical to HR means you don't need to go anywhere else to prepare."
  }
];

function BackgroundLinesDemo() {
  return (
    <BackgroundLines className="flex items-center justify-center w-full flex-col px-4">
    </BackgroundLines>
  );
}

export default function Home() {
  const careerPaths = [
    { name: "Resume Kit", icon: FileText, link: "/dashboard" },
    { name: "HR Mock", icon: Users, link: "/dashboard" },
    { name: "Technical Questions", icon: Code, link: "/dashboard" },
    { name: "Practice Questions", icon: BookOpen, link: "/dashboard" },
    { name: "LinkedIn Optimization", icon: Share2, link: "/dashboard" },
    { name: "DSA Practice", icon: Terminal, link: "/dashboard" },
    { name: "Live Mock", icon: Video, link: "/dashboard" },
    { name: "Version Controls", icon: GitBranch, link: "/dashboard" },
    { name: "Coding IDE", icon: Cpu, link: "/ide" },
    { name: "Internships", icon: Briefcase, link: "/services#internships" },
  ];

  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative pt-16 pb-32 px-6 max-w-7xl mx-auto min-h-[90vh] flex flex-col justify-center">
        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative z-10"
          >
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-brand-red/20 bg-white text-brand-red text-[10px] font-bold tracking-[0.2em] uppercase mb-12 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-brand-red animate-pulse" />
              Premium IT Career Platform
            </div>
            
            <h1 className="mb-8 slam-in text-[4rem] md:text-[6rem] leading-[1.1] tracking-tight font-sans font-bold text-slate-900 normal-case">
              Master <span className="text-brand-red">Interviews</span> <br />
              That Actually Get<br />You Hired
            </h1>
            
            <p className="text-xl text-slate-500 mb-12 max-w-xl leading-relaxed">
              Advanced IT preparation. Real mock interviews. Built-in coding practice. Everything in one premium platform.
            </p>
            
            <div className="grid grid-cols-3 gap-8 border-t border-slate-100 pt-12 mb-16">
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-slate-900">5,000+</span>
                <span className="text-sm text-slate-500">Students</span>
              </div>
              <div className="flex flex-col border-l border-slate-200 pl-8">
                <span className="text-3xl font-bold text-slate-900">IT Track</span>
                <span className="text-sm text-slate-500">Specialized Mastery</span>
              </div>
              <div className="flex flex-col border-l border-slate-200 pl-8">
                <span className="text-3xl font-bold text-slate-900">Live</span>
                <span className="text-sm text-slate-500">Mock Support</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-6">
              <Link to="/dashboard" className="bg-brand-red text-white px-8 py-4 rounded-full font-bold transition-all duration-300 hover:bg-brand-red/90 flex items-center gap-2">
                Get Started <ArrowRight size={18} />
              </Link>
              <button className="border border-brand-red text-brand-red px-8 py-4 rounded-full font-bold transition-all duration-300 hover:bg-brand-red/5">
                View Demo
              </button>
            </div>
          </motion.div>

          <div className="relative h-[600px] hidden lg:block perspective-1000">
            {/* Main Dashboard Preview */}
            <motion.div
              initial={{ opacity: 0, rotateY: -20, x: 100 }}
              animate={{ opacity: 1, rotateY: -10, x: 0 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="absolute inset-0 bg-white border-2 border-slate-900 rounded-[40px] shadow-[40px_40px_0_rgba(192,0,0,0.1)] overflow-hidden"
            >
              <div className="h-12 border-b-2 border-slate-900 bg-slate-900 flex items-center px-6 gap-2">
                <div className="w-3 h-3 rounded-full bg-brand-red" />
                <div className="w-3 h-3 rounded-full bg-white/20" />
                <div className="w-3 h-3 rounded-full bg-white/20" />
                <div className="ml-4 h-2 w-32 rounded-full bg-white/10" />
              </div>
              <div className="p-8 space-y-6">
                <div className="flex justify-between items-center">
                  <div className="w-40 h-8 bg-brand-red/10 rounded-lg" />
                  <div className="w-12 h-12 rounded-full bg-slate-100" />
                </div>
                <div className="grid grid-cols-2 gap-6">
                  <div className="h-32 bg-slate-50 rounded-2xl border-2 border-slate-100" />
                  <div className="h-32 bg-brand-red/5 rounded-2xl border-2 border-brand-red/10" />
                </div>
                <div className="h-48 bg-slate-900 rounded-2xl p-6">
                  <div className="w-full h-2 bg-brand-red/40 rounded-full mb-4" />
                  <div className="w-3/4 h-2 bg-white/10 rounded-full mb-4" />
                  <div className="w-1/2 h-2 bg-white/10 rounded-full" />
                </div>
              </div>
            </motion.div>

            {/* Floating Elements */}
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-10 -right-10 w-48 h-48 bg-brand-red rounded-3xl shadow-2xl flex flex-col items-center justify-center text-white p-6 text-center"
            >
              <Video size={40} className="mb-4" />
              <span className="font-display text-xl leading-none">LIVE MOCK</span>
              <span className="text-[10px] uppercase tracking-widest opacity-70 mt-2">Real-time</span>
            </motion.div>

            <motion.div
              animate={{ y: [0, 20, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-10 -left-10 w-56 p-6 bg-white border-2 border-slate-900 rounded-3xl shadow-2xl"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 rounded-full bg-brand-red/10 flex items-center justify-center text-brand-red">
                  <Users size={20} />
                </div>
                <span className="font-bold text-sm">HR MOCK</span>
              </div>
              <div className="w-full h-2 bg-slate-100 rounded-full" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Tracks Section */}
      <section className="py-32 px-6 bg-white border-y border-slate-100">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-24 items-end mb-24">
            <div>
              <span className="label-tag mb-6 inline-block">Our Programs</span>
              <h2 className="text-slate-900">Comprehensive <br /> <span className="text-brand-red">IT Training</span></h2>
            </div>
            <p className="text-xl text-slate-500 font-serif italic leading-relaxed">
              Master the skills needed to crack interviews at top tech companies like Google, Amazon, and Microsoft.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {careerPaths.slice(0, 6).map((path, i) => (
              <motion.div
                key={path.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="luxury-card group"
              >
                <div className="w-16 h-16 rounded-2xl bg-brand-red/5 flex items-center justify-center text-brand-red mb-8 group-hover:bg-brand-red group-hover:text-white transition-all duration-500">
                  <path.icon size={32} />
                </div>
                <h3 className="text-2xl font-display mb-4 text-slate-900">{path.name}</h3>
                <p className="text-slate-500 text-sm mb-8">
                  Structured preparation module designed by industry experts to ensure you're ready for any challenge.
                </p>
                <Link to={path.link} className="inline-flex items-center gap-2 text-brand-red font-bold text-xs uppercase tracking-widest hover:gap-4 transition-all">
                  Learn More <ArrowRight size={16} />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* IDE Preview Section */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-display font-bold mb-6 text-slate-900">Practice Like It's Real Interview</h2>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Full browser-based IDE powered by Monaco engine (same engine used in Visual Studio Code). Master DSA and coding challenges in an environment that mimics top tech interviews.
            </p>
            <div className="space-y-4">
              {[
                "Python, Java, C++ Support",
                "Real-time Code Execution",
                "Custom Test Cases",
                "Timed Interview Mode"
              ].map(feature => (
                <div key={feature} className="flex items-center gap-3 text-slate-900 font-medium">
                  <div className="w-8 h-8 rounded-lg bg-brand-red/10 flex items-center justify-center">
                    <Terminal size={16} className="text-brand-red" />
                  </div>
                  {feature}
                </div>
              ))}
            </div>
          </div>
          
          <div className="luxury-card p-0 overflow-hidden border-slate-700 shadow-2xl shadow-slate-900/50 bg-slate-950">
            <div className="bg-slate-900 px-4 py-2 border-b border-slate-800 flex items-center gap-2">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500/50" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                <div className="w-3 h-3 rounded-full bg-green-500/50" />
              </div>
              <span className="text-xs text-slate-400 font-mono ml-4">interview_challenge.py</span>
            </div>
            <div className="p-6 font-mono text-sm bg-slate-950">
              <pre className="text-blue-400">def <span className="text-yellow-400">solve_problem</span>(nums, target):</pre>
              <pre className="text-slate-500 ml-4 italic"># Find two numbers that sum to target</pre>
              <pre className="text-white ml-4">seen = {}</pre>
              <pre className="text-white ml-4">for i, num in enumerate(nums):</pre>
              <pre className="text-white ml-8">diff = target - num</pre>
              <pre className="text-white ml-8">if diff in seen:</pre>
              <pre className="text-brand-red ml-12 font-bold">return [seen[diff], i]</pre>
              <pre className="text-white ml-8">seen[num] = i</pre>
              <pre className="text-white ml-4">return []</pre>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 px-6 bg-white text-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-brand-red/5 via-transparent to-transparent opacity-50"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 text-slate-900">What Students Say About <span className="text-brand-red">Coademic</span></h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-lg">
              Real stories from our learners who cracked their dream interviews and built their careers with us.
            </p>
          </div>

          <div className="mb-16">
            <InfiniteMovingCards
              items={testimonials}
              direction="right"
              speed="slow"
            />
          </div>

          <div className="text-center pt-8 border-t border-slate-100">
            <p className="text-slate-500 font-medium">
              Thousands of students are building their careers with Coademic. <span className="text-slate-900 font-bold">Your journey can start today.</span>
            </p>
          </div>
        </div>
      </section>

      <BackgroundLinesDemo />
    </div>
  );
}
