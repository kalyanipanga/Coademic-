import { motion } from "motion/react";
import { 
  ArrowLeft, Code, CheckCircle2, Lock, Play, Star
} from "lucide-react";

interface ProblemSolvingViewProps {
  topic: string;
  onBack: () => void;
}

const MOCK_QUESTIONS = [
  { id: 1, title: "Reverse a String", difficulty: "Easy", solved: true },
  { id: 2, title: "Check for Palindrome", difficulty: "Easy", solved: false },
  { id: 3, title: "Find Duplicate Characters", difficulty: "Medium", solved: false },
  { id: 4, title: "Count Vowels and Consonants", difficulty: "Easy", solved: true },
  { id: 5, title: "Check if Two Strings are Anagrams", difficulty: "Medium", solved: false },
  { id: 6, title: "Find First Non-Repeating Character", difficulty: "Medium", solved: false },
  { id: 7, title: "Longest Substring Without Repeating Characters", difficulty: "Hard", solved: false },
  { id: 8, title: "String Compression", difficulty: "Medium", solved: false },
];

export default function ProblemSolvingView({ topic, onBack }: ProblemSolvingViewProps) {
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
          <h2 className="text-2xl font-display font-bold text-slate-900">{topic} Problems</h2>
          <p className="text-slate-500 text-sm">Practice interview questions related to {topic}.</p>
        </div>
      </div>

      <div className="bg-white rounded-2xl border border-slate-100 overflow-hidden shadow-sm">
        <div className="p-6 border-b border-slate-100 bg-slate-50/50 flex justify-between items-center">
          <h3 className="font-bold text-slate-900">Problem List</h3>
          <div className="flex gap-2">
            <span className="px-3 py-1 bg-emerald-100 text-emerald-700 text-xs font-bold rounded-full">Easy</span>
            <span className="px-3 py-1 bg-yellow-100 text-yellow-700 text-xs font-bold rounded-full">Medium</span>
            <span className="px-3 py-1 bg-red-100 text-red-700 text-xs font-bold rounded-full">Hard</span>
          </div>
        </div>
        
        <div className="divide-y divide-slate-100">
          {MOCK_QUESTIONS.map((q, index) => (
            <motion.div 
              key={q.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.05 }}
              className="p-4 hover:bg-slate-50 transition-colors flex items-center justify-between group cursor-pointer"
            >
              <div className="flex items-center gap-4">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  q.solved ? "bg-emerald-100 text-emerald-600" : "bg-slate-100 text-slate-400"
                }`}>
                  <CheckCircle2 size={16} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 group-hover:text-brand-red transition-colors">{q.title}</h4>
                  <span className={`text-xs font-bold ${
                    q.difficulty === "Easy" ? "text-emerald-500" :
                    q.difficulty === "Medium" ? "text-yellow-500" : "text-red-500"
                  }`}>
                    {q.difficulty}
                  </span>
                </div>
              </div>
              <button className="px-4 py-2 bg-slate-900 text-white text-xs font-bold rounded-lg opacity-0 group-hover:opacity-100 transition-all transform translate-x-2 group-hover:translate-x-0">
                Solve Challenge
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
