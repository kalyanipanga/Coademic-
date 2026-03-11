import { motion } from "motion/react";
import { 
  Code, GitBranch, Layout, Terminal, Cloud, Smartphone, Shield, 
  Cpu, Server, Monitor, Layers, BookOpen, Clock, Star, Users, 
  ArrowRight
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { enquireNow } from "../utils/whatsapp";
import { WhatsAppIcon } from "../components/icons/WhatsAppIcon";

const courses = [
  // Software Courses
  { 
    id: "c1", 
    title: "Data Structures & Algorithms", 
    description: "Master the foundations of computer science with our comprehensive DSA course.",
    type: "Software", 
    icon: Code,
    lessons: 24,
    duration: "40 Hours",
    rating: 4.9,
    students: "1.2k+"
  },
  { 
    id: "c2", 
    title: "Version Control Systems", 
    description: "Master Git and GitHub for effective collaboration and code management.",
    type: "Software", 
    icon: GitBranch,
    lessons: 18,
    duration: "30 Hours",
    rating: 4.8,
    students: "800+"
  },
  { 
    id: "c3", 
    title: "Full Stack Web Development", 
    description: "Build modern web applications from scratch using React, Node.js, and MongoDB.",
    type: "Software", 
    icon: Layout,
    lessons: 45,
    duration: "120 Hours",
    rating: 4.9,
    students: "3.1k+"
  },
  { 
    id: "c4", 
    title: "Python Programming", 
    description: "Learn Python from basics to advanced concepts for data science and web development.",
    type: "Software", 
    icon: Terminal,
    lessons: 30,
    duration: "60 Hours",
    rating: 4.8,
    students: "2.5k+"
  },
  { 
    id: "c5", 
    title: "Cloud Computing & AWS", 
    description: "Master cloud infrastructure, deployment, and AWS services.",
    type: "Software", 
    icon: Cloud,
    lessons: 35,
    duration: "80 Hours",
    rating: 4.7,
    students: "1.5k+"
  },
  { 
    id: "c6", 
    title: "Mobile App Development", 
    description: "Build cross-platform mobile applications using React Native and Flutter.",
    type: "Software", 
    icon: Smartphone,
    lessons: 40,
    duration: "90 Hours",
    rating: 4.8,
    students: "1.8k+"
  },
  { 
    id: "c7", 
    title: "Java Programming", 
    description: "Master object-oriented programming, enterprise applications, and Spring Boot.",
    type: "Software", 
    icon: Terminal,
    lessons: 35,
    duration: "75 Hours",
    rating: 4.9,
    students: "2.8k+"
  },
  { 
    id: "c8", 
    title: "C Programming", 
    description: "Learn the mother of all programming languages. Pointers, memory management, and more.",
    type: "Software", 
    icon: Code,
    lessons: 25,
    duration: "50 Hours",
    rating: 4.7,
    students: "1.5k+"
  },
  { 
    id: "c9", 
    title: "Cyber Security", 
    description: "Learn ethical hacking, network security, cryptography, and penetration testing.",
    type: "Software", 
    icon: Shield,
    lessons: 40,
    duration: "85 Hours",
    rating: 4.8,
    students: "1.2k+"
  },
  
  // Hardware Courses
  { 
    id: "h1", 
    title: "Embedded Systems Design", 
    description: "Learn microcontroller programming, RTOS, and hardware-software integration.",
    type: "Hardware", 
    icon: Cpu,
    lessons: 28,
    duration: "60 Hours",
    rating: 4.8,
    students: "950+"
  },
  { 
    id: "h2", 
    title: "Internet of Things (IoT)", 
    description: "Build connected devices, sensor networks, and IoT cloud platforms.",
    type: "Hardware", 
    icon: Server,
    lessons: 32,
    duration: "70 Hours",
    rating: 4.7,
    students: "1.1k+"
  },
  { 
    id: "h3", 
    title: "Computer Architecture", 
    description: "Understand CPU design, memory hierarchy, and instruction set architectures.",
    type: "Hardware", 
    icon: Monitor,
    lessons: 25,
    duration: "50 Hours",
    rating: 4.9,
    students: "850+"
  },
  { 
    id: "h4", 
    title: "VLSI Design", 
    description: "Master digital logic design, Verilog/VHDL, and FPGA programming.",
    type: "Hardware", 
    icon: Layers,
    lessons: 35,
    duration: "80 Hours",
    rating: 4.6,
    students: "600+"
  },
  { 
    id: "h5", 
    title: "Hardware Security", 
    description: "Learn about side-channel attacks, hardware trojans, and secure boot.",
    type: "Hardware", 
    icon: Shield,
    lessons: 20,
    duration: "45 Hours",
    rating: 4.8,
    students: "450+"
  },
  { 
    id: "h6", 
    title: "PCB Design", 
    description: "Design professional printed circuit boards using Altium Designer and KiCad.",
    type: "Hardware", 
    icon: Layers,
    lessons: 30,
    duration: "65 Hours",
    rating: 4.9,
    students: "800+"
  }
];

export default function Courses() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-slate-50 py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-red/5 text-brand-red text-sm font-bold mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-brand-red animate-pulse"/>
            OUR COURSES
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-display font-bold mb-6 text-slate-900"
          >
            Master Your <span className="text-brand-red">Future</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-slate-600"
          >
            Choose from our industry-leading courses designed to make you job-ready and confident.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 hover:border-brand-red/20 transition-all duration-300 flex flex-col group"
            >
              <div className="flex justify-between items-start mb-6">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-brand-red/5 text-brand-red group-hover:bg-brand-red group-hover:text-white transition-colors duration-300">
                  <course.icon size={24} />
                </div>
                <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-brand-red/5 text-brand-red">
                  {course.type}
                </span>
              </div>

              <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-brand-red transition-colors">
                {course.title}
              </h3>
              
              <p className="text-slate-500 text-sm leading-relaxed mb-6 flex-1">
                {course.description}
              </p>

              <div className="grid grid-cols-2 gap-y-3 gap-x-4 text-xs font-medium text-slate-500 mb-6 pt-6 border-t border-slate-100">
                <div className="flex items-center gap-2">
                  <BookOpen size={14} className="text-brand-red" />
                  {course.lessons} Lessons
                </div>
                <div className="flex items-center gap-2">
                  <Clock size={14} className="text-brand-red" />
                  {course.duration}
                </div>
                <div className="flex items-center gap-2">
                  <Star size={14} className="text-brand-red" />
                  {course.rating} Rating
                </div>
                <div className="flex items-center gap-2">
                  <Users size={14} className="text-brand-red" />
                  {course.students} Students
                </div>
              </div>

              <div className="flex items-center gap-3 mt-auto">
                <button 
                  onClick={() => navigate("/login")}
                  className="flex-1 bg-brand-red text-white py-2.5 rounded-xl text-sm font-bold hover:bg-red-700 transition-colors flex items-center justify-center gap-2 shadow-lg shadow-brand-red/20"
                >
                  Enroll Now <ArrowRight size={16} />
                </button>
                <button 
                  onClick={() => enquireNow(course.title, 'course')}
                  className="px-3 py-2.5 rounded-xl border border-slate-200 hover:border-brand-red hover:bg-brand-red/5 text-slate-400 hover:text-brand-red transition-colors"
                  title="Enquire on WhatsApp"
                >
                  <WhatsAppIcon size={20} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
