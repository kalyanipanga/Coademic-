import { motion } from "motion/react";
import { 
  ArrowLeft, BookOpen, Code, FileText, 
  CheckCircle2, Play, Lock, Star
} from "lucide-react";

interface TechnologyTrackViewProps {
  techId: string;
  onBack: () => void;
  onSelectTopic: (topic: string) => void;
}

const JAVA_MODULES = [
  { id: 1, title: "Java Fundamentals" },
  { id: 2, title: "Variables & Input/Output" },
  { id: 3, title: "Operators & Loops" },
  { id: 4, title: "Methods & Arrays" },
  { id: 5, title: "OOP Concepts" },
  { id: 6, title: "Exception Handling" },
  { id: 7, title: "Collections & Threads" },
  { id: 8, title: "Advanced Java" },
];

const DSA_MODULES = [
  { id: 1, title: "Linear Search" },
  { id: 2, title: "Binary Search" },
  { id: 3, title: "Bubble Sort" },
  { id: 4, title: "Selection Sort" },
  { id: 5, title: "Insertion Sort" },
  { id: 6, title: "Two Pointer Technique" },
  { id: 7, title: "Sliding Window Technique" },
  { id: 8, title: "Merge Sort" },
  { id: 9, title: "Quick Sort" },
  { id: 10, title: "Recursion Basics" },
  { id: 11, title: "Backtracking" },
  { id: 12, title: "Matrix Traversal" },
  { id: 13, title: "Hashing" },
  { id: 14, title: "Prefix Sum" },
  { id: 15, title: "Binary Trees" },
  { id: 16, title: "BFS / DFS in Graphs" },
  { id: 17, title: "Topological Sorting" },
  { id: 18, title: "Union Find" },
  { id: 19, title: "Heap (Min/Max)" },
  { id: 20, title: "Dynamic Programming" },
  { id: 21, title: "Greedy Algorithms" },
  { id: 22, title: "Time & Space Complexity" },
  { id: 23, title: "Divide and Conquer" },
  { id: 24, title: "Pattern Matching" },
  { id: 25, title: "Subarray Techniques" },
  { id: 26, title: "Stack and Queue" },
];

const PROBLEM_TOPICS = [
  "ArrayList", "String", "Conditional Statements", "Loops", "Methods",
  "OOP Concepts", "Exceptions", "Collections", "Files"
];

const DSA_TOPICS = [
  "Arrays", "Linked Lists", "Stacks", "Queues", "Trees", "Graphs",
  "Hashing", "Heaps", "Recursion", "Backtracking", "DP", "Greedy"
];

export default function TechnologyTrackView({ techId, onBack, onSelectTopic }: TechnologyTrackViewProps) {
  // Select modules based on techId
  const modules = techId === 'dsa' ? DSA_MODULES : JAVA_MODULES; 
  const topics = techId === 'dsa' ? DSA_TOPICS : PROBLEM_TOPICS;

  const getTechName = (id: string) => {
    switch(id) {
      case 'dsa': return 'Data Structures & Algorithms';
      case 'python': return 'Python Programming';
      case 'c': return 'C Programming';
      case 'java': return 'Java Programming';
      default: return 'Programming';
    }
  };

  return (
    <div className="space-y-8">
      <div className="flex items-center gap-4">
        <button 
          onClick={onBack}
          className="p-2 rounded-xl hover:bg-slate-100 text-slate-500 transition-colors"
        >
          <ArrowLeft size={20} />
        </button>
        <div>
          <h2 className="text-2xl font-display font-bold text-slate-900">{getTechName(techId)} Track</h2>
          <p className="text-slate-500 text-sm">Master {getTechName(techId)} with structured modules and practice problems.</p>
        </div>
      </div>

      {/* Modules Section */}
      <section>
        <div className="flex items-center gap-2 mb-6">
          <BookOpen className="text-brand-red" size={20} />
          <h3 className="text-xl font-display font-bold text-slate-900">Learning Modules</h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {modules.map((module, index) => (
            <motion.div
              key={module.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md hover:border-brand-red/20 transition-all group cursor-pointer relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-brand-red/10 group-hover:bg-brand-red transition-colors" />
              <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Module {module.id}</p>
              <h4 className="font-bold text-slate-900 group-hover:text-brand-red transition-colors">{module.title}</h4>
              <div className="mt-4 flex items-center justify-end">
                <div className="w-6 h-6 rounded-full bg-slate-50 flex items-center justify-center text-slate-300 group-hover:bg-brand-red group-hover:text-white transition-all">
                  <CheckCircle2 size={14} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Problem Solving Section */}
      <section>
        <div className="flex items-center gap-2 mb-6">
          <Code className="text-brand-red" size={20} />
          <h3 className="text-xl font-display font-bold text-slate-900">Problem Solving Practice</h3>
        </div>

        <div className="bg-white rounded-[32px] border border-slate-100 p-8 relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-brand-red via-red-400 to-brand-red" />
          <div className="absolute -top-10 -right-10 w-32 h-32 bg-yellow-400/10 rounded-full blur-2xl" />
          <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-brand-red/5 rounded-full blur-2xl" />
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 relative z-10">
            {topics.map((topic, index) => (
              <motion.button
                key={topic}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 + (index * 0.05) }}
                onClick={() => onSelectTopic(topic)}
                className="bg-white border border-slate-200 p-4 rounded-xl font-bold text-slate-700 hover:border-brand-red hover:text-brand-red hover:shadow-lg hover:shadow-brand-red/10 transition-all text-center relative group"
              >
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-1 bg-brand-red/0 group-hover:bg-brand-red rounded-b-full transition-all" />
                {topic}
              </motion.button>
            ))}
          </div>

          {/* Floating Stars */}
          <Star className="absolute top-10 left-10 text-yellow-400/40 rotate-12" size={24} fill="currentColor" />
          <Star className="absolute bottom-10 right-20 text-yellow-400/40 -rotate-12" size={20} fill="currentColor" />
          <Star className="absolute top-20 right-1/3 text-yellow-400/20 rotate-45" size={16} fill="currentColor" />
        </div>
      </section>
    </div>
  );
}
