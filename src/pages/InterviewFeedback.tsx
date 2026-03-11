import { motion } from "motion/react";
import { useParams, Link } from "react-router-dom";
import { 
  CheckCircle2, AlertCircle, Code, MessageSquare, 
  BarChart3, Calendar, ArrowLeft, Download
} from "lucide-react";
import { InterviewFeedback } from "../types";

// Mock data for demonstration
const MOCK_FEEDBACK: Record<string, InterviewFeedback> = {
  "fb-1": {
    id: "fb-1",
    interviewId: "int-1",
    codingScore: 85,
    communicationScore: 78,
    overallScore: 82,
    codingAnalysis: "Excellent problem-solving skills. The candidate demonstrated a strong understanding of time complexity and optimized the solution from O(N^2) to O(N). Code was clean and well-structured, though some variable naming could be more descriptive.",
    communicationAnalysis: "Good clarity in explaining the thought process. The candidate was proactive in asking clarifying questions before starting to code. However, there were some moments of silence during complex logic implementation that could have been narrated.",
    strengths: [
      "Strong algorithmic thinking",
      "Proactive clarification of requirements",
      "Clean code structure",
      "Efficient use of hash maps"
    ],
    improvements: [
      "Narrate thought process during intense coding phases",
      "Use more descriptive variable names (e.g., 'seen_indices' instead of 's')",
      "Consider edge cases like empty arrays more explicitly"
    ],
    date: "2026-02-20"
  }
};

export default function InterviewFeedbackPage() {
  const { id } = useParams<{ id: string }>();
  const feedback = id ? MOCK_FEEDBACK[id] : null;

  if (!feedback) {
    return (
      <div className="min-h-[calc(100vh-72px)] flex flex-col items-center justify-center p-6 bg-white">
        <AlertCircle size={48} className="text-brand-red mb-4" />
        <h1 className="text-2xl font-display font-bold mb-2 text-slate-900">Feedback Not Found</h1>
        <p className="text-slate-600 mb-8">The requested interview feedback could not be located.</p>
        <Link to="/dashboard" className="btn-primary">Return to Dashboard</Link>
      </div>
    );
  }

  return (
    <div className="py-12 px-6 max-w-5xl mx-auto bg-white">
      <Link to="/dashboard" className="flex items-center gap-2 text-slate-500 hover:text-brand-red transition-colors mb-8 group">
        <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
        Back to Dashboard
      </Link>

      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <span className="px-3 py-1 rounded-full bg-brand-red/10 text-brand-red text-xs font-bold uppercase tracking-wider">Mock Interview Feedback</span>
            <div className="flex items-center gap-1.5 text-slate-400 text-sm">
              <Calendar size={14} />
              {feedback.date}
            </div>
          </div>
          <h1 className="text-4xl font-display font-bold text-slate-900">Interview Performance Analysis</h1>
        </div>
        <button className="btn-secondary flex items-center gap-2">
          <Download size={18} /> Download PDF Report
        </button>
      </div>

      {/* Scores Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="luxury-card flex flex-col items-center text-center p-8"
        >
          <div className="w-20 h-20 rounded-full border-4 border-brand-red flex items-center justify-center mb-4">
            <span className="text-3xl font-bold text-slate-900">{feedback.overallScore}%</span>
          </div>
          <h3 className="font-bold text-lg mb-1 text-slate-900">Overall Score</h3>
          <p className="text-xs text-slate-400 uppercase tracking-widest">Weighted Average</p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="luxury-card p-8"
        >
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-600">
              <Code size={24} />
            </div>
            <span className="text-2xl font-bold text-blue-600">{feedback.codingScore}%</span>
          </div>
          <h3 className="font-bold text-lg mb-1 text-slate-900">Coding Skills</h3>
          <div className="w-full bg-blue-500/10 h-2 rounded-full mt-4 overflow-hidden">
            <div className="bg-blue-600 h-full rounded-full" style={{ width: `${feedback.codingScore}%` }} />
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="luxury-card p-8"
        >
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-600">
              <MessageSquare size={24} />
            </div>
            <span className="text-2xl font-bold text-emerald-600">{feedback.communicationScore}%</span>
          </div>
          <h3 className="font-bold text-lg mb-1 text-slate-900">Communication</h3>
          <div className="w-full bg-emerald-500/10 h-2 rounded-full mt-4 overflow-hidden">
            <div className="bg-emerald-600 h-full rounded-full" style={{ width: `${feedback.communicationScore}%` }} />
          </div>
        </motion.div>
      </div>

      <div className="grid lg:grid-cols-2 gap-8 mb-12">
        {/* Detailed Analysis */}
        <div className="space-y-8">
          <section>
            <div className="flex items-center gap-2 mb-4">
              <BarChart3 size={20} className="text-brand-red" />
              <h2 className="text-xl font-display font-bold text-slate-900">Coding Analysis</h2>
            </div>
            <div className="luxury-card">
              <p className="text-slate-600 leading-relaxed">
                {feedback.codingAnalysis}
              </p>
            </div>
          </section>

          <section>
            <div className="flex items-center gap-2 mb-4">
              <MessageSquare size={20} className="text-brand-red" />
              <h2 className="text-xl font-display font-bold text-slate-900">Communication Analysis</h2>
            </div>
            <div className="luxury-card">
              <p className="text-slate-600 leading-relaxed">
                {feedback.communicationAnalysis}
              </p>
            </div>
          </section>
        </div>

        {/* Strengths & Improvements */}
        <div className="space-y-8">
          <section>
            <div className="flex items-center gap-2 mb-4">
              <CheckCircle2 size={20} className="text-emerald-500" />
              <h2 className="text-xl font-display font-bold text-slate-900">Key Strengths</h2>
            </div>
            <div className="luxury-card space-y-3">
              {feedback.strengths.map((strength, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="mt-1 w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                  <span className="text-slate-600 text-sm">{strength}</span>
                </div>
              ))}
            </div>
          </section>

          <section>
            <div className="flex items-center gap-2 mb-4">
              <AlertCircle size={20} className="text-brand-red" />
              <h2 className="text-xl font-display font-bold text-slate-900">Areas for Improvement</h2>
            </div>
            <div className="luxury-card space-y-3">
              {feedback.improvements.map((improvement, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="mt-1 w-1.5 h-1.5 rounded-full bg-brand-red shrink-0" />
                  <span className="text-slate-600 text-sm">{improvement}</span>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>

      <div className="luxury-card bg-brand-red/5 border-brand-red/20 text-center p-10">
        <h2 className="text-2xl font-display font-bold mb-4 text-slate-900">Ready for your next mock?</h2>
        <p className="text-slate-600 mb-8 max-w-lg mx-auto">
          Consistent practice is the key to mastering interviews. Schedule your next session to work on the improvements suggested above.
        </p>
        <div className="flex justify-center gap-4">
          <Link to="/dashboard" className="btn-primary">Schedule New Mock</Link>
          <button className="btn-secondary">View Recommended Courses</button>
        </div>
      </div>
    </div>
  );
}
