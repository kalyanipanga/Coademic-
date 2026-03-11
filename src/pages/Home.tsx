import { motion } from "motion/react";
import { 
  ArrowRight, Code, Briefcase, Users, CheckCircle2, Terminal, 
  FileText, BookOpen, Share2, BarChart3, Video, GitBranch, Globe, Cpu,
  MessageSquare
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
      <section className="relative pt-10 pb-32 px-6 max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-brand-red/30 bg-brand-red/5 text-brand-red text-sm font-semibold mb-8">
            <span className="w-2 h-2 rounded-full bg-brand-red animate-pulse" />
            PREMIUM IT CAREER PLATFORM
          </div>
          
          <h1 className="text-6xl md:text-7xl font-display font-bold leading-[1.1] mb-6">
            Master <span className="text-brand-red">Interviews</span> That Actually Get You Hired
          </h1>
          
          <p className="text-xl text-text-secondary mb-10 max-w-xl leading-relaxed">
            Coademic is a next-generation EdTech platform focused on career outcomes, not just courses. Through industry workshops, structured training programs, realistic mock interviews, and integrated coding practice, we equip students with the skills and confidence required to succeed in real IT interviews.
          </p>
          
          <div className="flex items-center gap-8 mb-12">
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-slate-900">5,000+</span>
              <span className="text-sm text-slate-500">Students</span>
            </div>
            <div className="w-px h-10 bg-brand-red/20" />
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-slate-900">IT Track</span>
              <span className="text-sm text-slate-500">Specialized Mastery</span>
            </div>
            <div className="w-px h-10 bg-brand-red/20" />
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-slate-900">Live</span>
              <span className="text-sm text-slate-500">Mock Support</span>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-4 mb-12">
            <Link to="/dashboard" className="btn-primary flex items-center gap-2">
              Get Started <ArrowRight size={18} />
            </Link>
            <button className="btn-secondary">View Demo</button>
          </div>

          <div className="flex flex-wrap gap-3">
            {careerPaths.map((path, i) => (
              <motion.div
                key={path.name}
                initial={{ opacity: 0, scale: 0.9, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ delay: i * 0.03, duration: 0.4 }}
                whileHover={{ 
                  scale: 1.05, 
                  y: -2,
                  backgroundColor: "rgba(192, 0, 0, 0.05)"
                }}
                className="group rounded-full"
              >
                <Link
                  to={path.link}
                  className="flex items-center gap-2 px-4 py-2 bg-white rounded-full border border-brand-red/20 shadow-sm hover:border-brand-red hover:shadow-md transition-all duration-300"
                >
                  <div className="text-brand-red group-hover:scale-110 transition-transform duration-300">
                    <path.icon size={14} />
                  </div>
                  <span className="text-xs font-bold text-slate-700 group-hover:text-brand-red transition-colors">{path.name}</span>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <div className="relative h-[700px] w-full hidden lg:block perspective-1000">
          {/* Dashboard Preview Card (Inspired by Video 1) */}
          <motion.div
            initial={{ opacity: 0, y: 40, rotateX: 10, rotateY: -10 }}
            animate={{ opacity: 1, y: 0, rotateX: 0, rotateY: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="absolute top-[10%] left-[5%] w-[85%] h-[75%] bg-slate-950/80 backdrop-blur-2xl border border-white/10 rounded-[32px] shadow-2xl overflow-hidden z-0"
          >
            {/* Sidebar Mock */}
            <div className="absolute left-0 top-0 bottom-0 w-[20%] border-r border-white/5 p-6 space-y-8">
              <div className="w-10 h-10 rounded-xl bg-brand-red/20 flex items-center justify-center text-brand-red">
                <Code size={20} />
              </div>
              <div className="space-y-4">
                {[1, 2, 3, 4].map(i => (
                  <div key={i} className="w-full h-2 rounded-full bg-white/5" />
                ))}
              </div>
            </div>
            
            {/* Main Content Mock */}
            <div className="absolute left-[20%] right-0 top-0 bottom-0 p-10">
              <div className="flex justify-between items-center mb-12">
                <div className="w-48 h-4 rounded-full bg-white/10" />
                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-white/5" />
                  <div className="w-24 h-8 rounded-full bg-brand-red/20" />
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-8">
                <div className="h-40 rounded-2xl bg-gradient-to-br from-brand-red/20 to-transparent border border-white/5 p-6">
                  <div className="w-12 h-12 rounded-lg bg-white/5 mb-4" />
                  <div className="w-3/4 h-3 rounded-full bg-white/10 mb-2" />
                  <div className="w-1/2 h-2 rounded-full bg-white/5" />
                </div>
                <div className="h-40 rounded-2xl bg-white/5 border border-white/5 p-6">
                  <div className="w-12 h-12 rounded-lg bg-white/5 mb-4" />
                  <div className="w-3/4 h-3 rounded-full bg-white/10 mb-2" />
                  <div className="w-1/2 h-2 rounded-full bg-white/5" />
                </div>
              </div>
            </div>
            
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60" />
          </motion.div>

          {/* Floating Feature Cards (Inspired by Video 2) */}
          
          {/* Resume Kit */}
          <motion.div
            initial={{ opacity: 0, x: 50, y: -20 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            whileHover={{ y: -10, scale: 1.02 }}
            className="absolute top-[5%] right-[5%] w-[240px] p-6 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl shadow-2xl z-10 group cursor-pointer"
          >
            <div className="w-10 h-10 rounded-xl bg-brand-red/20 flex items-center justify-center text-brand-red mb-4 group-hover:bg-brand-red group-hover:text-white transition-all">
              <FileText size={20} />
            </div>
            <h4 className="text-white font-bold mb-1">Resume Kit</h4>
            <p className="text-white/50 text-xs">ATS-optimized templates</p>
            <div className="mt-4 w-full h-1 bg-white/5 rounded-full overflow-hidden">
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: "85%" }}
                transition={{ delay: 1, duration: 1.5 }}
                className="h-full bg-brand-red" 
              />
            </div>
          </motion.div>

          {/* Coding IDE */}
          <motion.div
            initial={{ opacity: 0, x: -50, y: 50 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            whileHover={{ y: -10, scale: 1.02 }}
            className="absolute bottom-[15%] left-[0%] w-[220px] p-6 bg-slate-900/90 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl z-20 group cursor-pointer"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="flex gap-1">
                <div className="w-2 h-2 rounded-full bg-red-500/50" />
                <div className="w-2 h-2 rounded-full bg-yellow-500/50" />
                <div className="w-2 h-2 rounded-full bg-green-500/50" />
              </div>
              <div className="w-20 h-2 rounded-full bg-white/5" />
            </div>
            <div className="space-y-2">
              <div className="w-full h-2 rounded-full bg-brand-red/40" />
              <div className="w-3/4 h-2 rounded-full bg-white/10" />
              <div className="w-1/2 h-2 rounded-full bg-white/10" />
            </div>
            <div className="mt-6 flex items-center justify-between">
              <span className="text-white font-bold text-sm">Coding IDE</span>
              <Cpu size={16} className="text-brand-red" />
            </div>
          </motion.div>

          {/* Live Mock */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            whileHover={{ y: -10, scale: 1.05 }}
            className="absolute top-[40%] right-[-5%] w-[200px] aspect-square bg-gradient-to-br from-brand-red to-brand-red/60 rounded-3xl shadow-2xl z-30 flex flex-col items-center justify-center p-6 text-white text-center group cursor-pointer"
          >
            <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Video size={32} />
            </div>
            <span className="font-bold text-lg">Live Mock</span>
            <span className="text-white/70 text-xs">Real-time Feedback</span>
          </motion.div>

          {/* HR Mock */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            whileHover={{ y: -10 }}
            className="absolute bottom-[5%] right-[15%] w-[260px] p-5 bg-white backdrop-blur-xl border border-slate-200 rounded-2xl shadow-xl z-10 flex items-center gap-4 group cursor-pointer"
          >
            <div className="w-12 h-12 rounded-full bg-brand-red/10 flex items-center justify-center text-brand-red">
              <Users size={24} />
            </div>
            <div>
              <h4 className="text-slate-900 font-bold text-sm">HR Mock Session</h4>
              <p className="text-slate-500 text-[10px]">Upcoming: Today at 4:00 PM</p>
            </div>
          </motion.div>

          {/* Glow Effects */}
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-brand-red/20 blur-[120px] -z-10 rounded-full animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-brand-red/10 blur-[150px] -z-10 rounded-full" />
        </div>
      </section>

      {/* Tracks Section */}
      <BackgroundLines className="py-24 px-6">
        <div className="max-w-7xl mx-auto relative z-10 w-full">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold mb-4 text-slate-900">Comprehensive IT Training</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Master the skills needed to crack interviews at top tech companies like Google, Amazon, and Microsoft.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <motion.div 
              whileHover={{ y: -10 }}
              className="bg-white rounded-[40px] p-12 border border-slate-200 shadow-2xl relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-brand-red/5 blur-[100px] rounded-full -z-10" />
              <span className="text-xs font-bold text-brand-red tracking-widest uppercase mb-4 block">Software Careers</span>
              <h3 className="text-4xl font-display font-bold mb-8 text-slate-900">Crack IT Interviews</h3>
              <ul className="grid md:grid-cols-2 gap-6 mb-12">
                {["DSA Preparation", "HR Questions", "Resume Templates", "Built-in Coding IDE", "Mock Interviews", "Version Controls"].map(item => (
                  <li key={item} className="flex items-center gap-4 text-slate-700 font-medium">
                    <div className="w-6 h-6 rounded-full bg-brand-red/10 flex items-center justify-center text-brand-red">
                      <CheckCircle2 size={14} />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
              <div className="flex flex-col md:flex-row items-center justify-between gap-8 pt-10 border-t border-slate-100">
                <div>
                  <span className="text-4xl font-bold text-brand-red">Free Access</span>
                  <p className="text-slate-500 text-sm mt-1">Limited time offer for students</p>
                </div>
                <div className="flex flex-wrap items-center gap-4">
                  <Link to="/login" className="btn-primary px-8 py-4 text-lg">Get Started Now</Link>
                  <button 
                    onClick={() => enquireNow('Crack IT Interviews', 'training')}
                    className="btn-secondary px-8 py-4 text-lg flex items-center gap-2"
                  >
                    Enquire Now <WhatsAppIcon size={20} />
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </BackgroundLines>

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
          
          <div className="relative flex items-center justify-center min-h-[700px]">
            {/* Layered Rotating Rings */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="absolute w-[400px] h-[400px] border border-dashed border-brand-red/20 rounded-full"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
                className="absolute w-[520px] h-[520px] border border-dashed border-slate-700/30 rounded-full"
              />
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
                className="absolute w-[650px] h-[650px] border border-dashed border-brand-red/10 rounded-full"
              />
            </div>

            {/* Floating Energy Particles */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
              {[...Array(18)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ 
                    x: Math.random() * 100 + "%", 
                    y: "110%", 
                    opacity: 0,
                    scale: Math.random() * 0.5 + 0.5 
                  }}
                  animate={{ 
                    y: "-10%", 
                    opacity: [0, 0.8, 0],
                    x: (Math.random() * 100 - 50) + "%"
                  }}
                  transition={{ 
                    duration: Math.random() * 5 + 5, 
                    repeat: Infinity, 
                    delay: Math.random() * 5,
                    ease: "easeInOut"
                  }}
                  className="absolute w-1.5 h-1.5 bg-brand-red rounded-full blur-[1px]"
                />
              ))}
            </div>

            {/* Orbiting Skill System */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              {[
                { icon: Code, color: "bg-blue-500", speed: 20, radius: 210 },
                { icon: Terminal, color: "bg-emerald-500", speed: 28, radius: 270 },
                { icon: Briefcase, color: "bg-amber-500", speed: 35, radius: 330 },
                { icon: MessageSquare, color: "bg-brand-red", speed: 42, radius: 390 },
              ].map((skill, i) => (
                <motion.div
                  key={i}
                  animate={{ rotate: 360 }}
                  transition={{ duration: skill.speed, repeat: Infinity, ease: "linear" }}
                  className="absolute"
                  style={{ width: skill.radius * 2, height: skill.radius * 2 }}
                >
                  <motion.div
                    animate={{ rotate: -360 }}
                    transition={{ duration: skill.speed, repeat: Infinity, ease: "linear" }}
                    className={`absolute top-0 left-1/2 -translate-x-1/2 w-10 h-10 rounded-xl ${skill.color} shadow-lg flex items-center justify-center text-white pointer-events-auto cursor-pointer hover:scale-110 transition-transform`}
                  >
                    <skill.icon size={20} />
                  </motion.div>
                </motion.div>
              ))}
            </div>

            {/* The IDE Card */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="luxury-card p-0 overflow-hidden border-slate-700 shadow-2xl shadow-slate-900/50 bg-slate-950 relative z-10 w-full max-w-lg"
            >
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
            </motion.div>
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
