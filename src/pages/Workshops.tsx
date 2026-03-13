import { motion } from "motion/react";
import { 
  Code, Terminal, Layout, Github, Database, Layers, CheckCircle2 
} from "lucide-react";
import { enquireNow } from "../utils/whatsapp";
import { WhatsAppIcon } from "../components/icons/WhatsAppIcon";

const workshops = [
  {
    title: "JavaScript Mastery",
    icon: Code,
    description: "Master the language of the web. From basics to advanced concepts like closures, async/await, and DOM manipulation.",
    features: ["ES6+ Features", "Asynchronous JS", "DOM Manipulation"]
  },
  {
    title: "Python Programming",
    icon: Terminal,
    description: "Learn Python for software development, automation, and data analysis. Build robust applications with clean code.",
    features: ["Core Syntax", "OOP Concepts", "File Handling"]
  },
  {
    title: "Frontend Development",
    icon: Layout,
    description: "Build responsive, interactive websites using HTML5, CSS3, and modern frameworks. Create stunning user interfaces.",
    features: ["Responsive Design", "CSS Flex/Grid", "Modern UI/UX"]
  },
  {
    title: "GitHub & Version Control",
    icon: Github,
    description: "Collaborate effectively with Git. Learn branching, merging, pull requests, and best practices for team workflows.",
    features: ["Git Basics", "Branching Strategy", "Collaboration"]
  },
  {
    title: "SQL Database Design",
    icon: Database,
    description: "Master relational databases. Learn schema design, complex queries, normalization, and stored procedures with MySQL/PostgreSQL.",
    features: ["Schema Design", "Complex Queries", "Performance Tuning"]
  },
  {
    title: "MongoDB NoSQL",
    icon: Layers,
    description: "Build scalable applications with MongoDB. Understand document-oriented storage, aggregation pipelines, and indexing.",
    features: ["Document Model", "Aggregation Framework", "Replication & Sharding"]
  }
];

export default function Workshops() {
  return (
    <div className="py-20 px-6 min-h-screen bg-white">
      <div className="max-w-[95%] mx-auto">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-brand-red/30 bg-brand-red/5 text-brand-red text-sm font-semibold mb-6"
          >
            OUR WORKSHOPS
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-6xl font-display font-bold mb-6 text-slate-900"
          >
            Industry-Aligned <span className="text-brand-red">Workshops</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-slate-600 max-w-2xl mx-auto"
          >
            Practical, hands-on training designed to get you job-ready.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {workshops.map((workshop, i) => (
            <motion.div
              key={workshop.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -10 }}
              className="luxury-card group"
            >
              <div className="w-14 h-14 rounded-2xl bg-brand-red/10 flex items-center justify-center mb-8 group-hover:bg-brand-red group-hover:text-white transition-all duration-300">
                <workshop.icon size={28} className="text-brand-red group-hover:text-white transition-colors" />
              </div>
              
              <h3 className="text-2xl font-display font-bold mb-4 text-slate-900 group-hover:text-brand-red transition-colors">
                {workshop.title}
              </h3>
              
              <p className="text-slate-600 mb-8 leading-relaxed">
                {workshop.description}
              </p>
              
              <ul className="space-y-3 mb-8">
                {workshop.features.map(feature => (
                  <li key={feature} className="flex items-center gap-3 text-sm text-slate-500">
                    <CheckCircle2 size={16} className="text-brand-red" />
                    {feature}
                  </li>
                ))}
              </ul>

              <button 
                onClick={() => enquireNow(workshop.title, 'workshop')}
                className="w-full btn-secondary py-3 text-sm flex items-center justify-center gap-2"
              >
                Enquire Now <WhatsAppIcon size={16} />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
