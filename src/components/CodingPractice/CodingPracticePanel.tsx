import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { 
  Code, Brain, Database, Terminal, 
  ChevronRight, Star, Clock, Trophy,
  BookOpen, Zap, Target, BarChart3,
  CheckCircle2, Lock, Play, X, FileText,
  Coffee
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import CodeMirror from "@uiw/react-codemirror";
import { python } from "@codemirror/lang-python";
import { java } from "@codemirror/lang-java";
import { cpp } from "@codemirror/lang-cpp";
import { vscodeDark } from "@uiw/codemirror-theme-vscode";
import { formatCode } from "../../utils/codeFormatter";
import { PRACTICE_TRACKS } from "../../data/dashboardData";
import TechnologyTrackView from "./TechnologyTrackView";
import ProblemSolvingView from "./ProblemSolvingView";

interface Assignment {
  id: string;
  title: string;
  description: string;
  completed: boolean;
}

interface PracticeTrack {
  id: string;
  title: string;
  description: string;
  icon: any;
  problems: number;
  completed: number;
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  color: string;
  assignments?: Assignment[];
}

const MUST_COMPLETE_TRACKS = [
  { id: "dsa", title: "DSA", icon: Brain, color: "purple" },
  { id: "python", title: "Python", icon: Terminal, color: "yellow" },
  { id: "c", title: "C", icon: Code, color: "blue" },
  { id: "java", title: "Java", icon: Coffee, color: "orange" },
];

const PREP_KITS = [
  {
    id: "1-week",
    title: "1-Week Preparation Kit",
    description: "A curated 7-day plan for quick interview prep.",
    duration: "7 Days",
    challenges: 21,
    status: "In Progress"
  },
  {
    id: "1-month",
    title: "1-Month Preparation Kit",
    description: "Comprehensive 30-day plan covering all essentials.",
    duration: "30 Days",
    challenges: 85,
    status: "Locked"
  },
  {
    id: "interview-prep",
    title: "Interview Preparation Kit",
    description: "The ultimate kit for top-tier tech companies.",
    duration: "Flexible",
    challenges: 120,
    status: "Unlocked"
  }
];

export default function CodingPracticePanel() {
  const navigate = useNavigate();
  const [activeFilter, setActiveFilter] = useState("All");
  const [tracks, setTracks] = useState(PRACTICE_TRACKS);
  const [selectedTrack, setSelectedTrack] = useState<PracticeTrack | null>(null);
  const [submittingAssignmentId, setSubmittingAssignmentId] = useState<string | null>(null);
  const [submissionText, setSubmissionText] = useState("");
  const [submissionLanguage, setSubmissionLanguage] = useState<"python" | "java" | "cpp">("python");
  const [submissionFile, setSubmissionFile] = useState<File | null>(null);
  const [isFormatting, setIsFormatting] = useState(false);
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [pendingSubmission, setPendingSubmission] = useState<{trackId: string, assignmentId: string} | null>(null);
  
  // New state for Must Complete Tracks navigation
  const [selectedTech, setSelectedTech] = useState<string | null>(null);
  const [selectedTopic, setSelectedTopic] = useState<string | null>(null);

  const handleFormat = async () => {
    setIsFormatting(true);
    try {
      const formatted = await formatCode(submissionText, submissionLanguage);
      setSubmissionText(formatted);
    } catch (error) {
      console.error("Formatting failed:", error);
    } finally {
      setIsFormatting(false);
    }
  };

  useEffect(() => {
    const savedTracksStr = localStorage.getItem("coding_practice_tracks");
    if (savedTracksStr) {
      const savedTracks = JSON.parse(savedTracksStr);
      const mergedTracks = PRACTICE_TRACKS.map(track => {
        const savedTrack = savedTracks.find((t: any) => t.id === track.id);
        if (savedTrack) {
          return {
            ...track,
            completed: savedTrack.completed,
            assignments: track.assignments?.map(a => {
                const savedAssignment = savedTrack.assignments?.find((sa: any) => sa.id === a.id);
                return savedAssignment ? { ...a, completed: savedAssignment.completed } : a;
            })
          };
        }
        return track;
      });
      setTracks(mergedTracks);
    }
  }, []);

  const updateTrackProgress = (trackId: string) => {
    const updatedTracks = tracks.map(track => {
      if (track.id === trackId) {
        const newCompleted = Math.min(track.completed + 1, track.problems);
        return { ...track, completed: newCompleted };
      }
      return track;
    });
    setTracks(updatedTracks);
    localStorage.setItem("coding_practice_tracks", JSON.stringify(updatedTracks));
  };

  const handleSubmission = (trackId: string, assignmentId: string) => {
    setPendingSubmission({ trackId, assignmentId });
    setShowConfirmModal(true);
  };

  const confirmSubmission = () => {
    if (pendingSubmission) {
      const { trackId, assignmentId } = pendingSubmission;
      // In a real app, we would upload the file and text to a server here
      console.log("Submitting:", { trackId, assignmentId, text: submissionText, language: submissionLanguage, file: submissionFile });
      
      submitAssignment(trackId, assignmentId);
      setSubmittingAssignmentId(null);
      setSubmissionText("");
      setSubmissionLanguage("python");
      setSubmissionFile(null);
      setShowConfirmModal(false);
      setPendingSubmission(null);
    }
  };

  const submitAssignment = (trackId: string, assignmentId: string) => {
    const updatedTracks = tracks.map(track => {
      if (track.id === trackId && track.assignments) {
        const updatedAssignments = track.assignments.map(assignment => {
          if (assignment.id === assignmentId) {
            return { ...assignment, completed: true };
          }
          return assignment;
        });
        
        // Only increment if the assignment wasn't already completed
        const wasCompleted = track.assignments.find(a => a.id === assignmentId)?.completed;
        let newCompletedCount = track.completed;
        if (!wasCompleted) {
             newCompletedCount = Math.min(track.completed + 1, track.problems);
        }

        return { ...track, assignments: updatedAssignments, completed: newCompletedCount };
      }
      return track;
    });
    setTracks(updatedTracks);
    localStorage.setItem("coding_practice_tracks", JSON.stringify(updatedTracks));
    
    // Update selected track to reflect changes in the modal immediately
    const updatedTrack = updatedTracks.find(t => t.id === trackId);
    if (updatedTrack) {
        setSelectedTrack(updatedTrack);
    }
  };

  // Render Logic based on selection
  if (selectedTopic) {
    return (
      <ProblemSolvingView 
        topic={selectedTopic} 
        onBack={() => setSelectedTopic(null)} 
      />
    );
  }

  if (selectedTech) {
    return (
      <TechnologyTrackView 
        techId={selectedTech} 
        onBack={() => setSelectedTech(null)} 
        onSelectTopic={setSelectedTopic} 
      />
    );
  }

  return (
    <div className="space-y-10">
      {/* Header Section */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
        <div>
          <h2 className="text-xl md:text-2xl font-display font-bold text-slate-900 mb-2">Coding Practice Hub</h2>
          <p className="text-slate-600 text-sm md:text-base">Master your skills with structured tracks and preparation kits.</p>
        </div>
        <div className="flex gap-3 w-full sm:w-auto">
          <button className="flex-1 sm:flex-none luxury-card px-4 py-2 flex items-center justify-center gap-2 text-sm font-bold text-slate-600 hover:text-brand-red transition-all">
            <BarChart3 size={16} /> My Stats
          </button>
          <button 
            onClick={() => navigate("/ide")}
            className="flex-1 sm:flex-none btn-primary px-6 py-2 flex items-center justify-center gap-2 text-sm"
          >
            Open IDE <Terminal size={16} />
          </button>
        </div>
      </div>

      {/* Must Complete Tracks Section */}
      <section>
        <div className="flex items-center gap-2 mb-6">
          <Target className="text-brand-red" size={20} />
          <h3 className="text-xl font-display font-bold text-slate-900">Must Complete Tracks</h3>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {MUST_COMPLETE_TRACKS.map((track) => (
            <motion.button
              key={track.id}
              whileHover={{ y: -5 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedTech(track.id)}
              className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-lg hover:border-brand-red/20 transition-all flex flex-col items-center justify-center gap-4 group"
            >
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center bg-${track.color}-500/10 text-${track.color}-500 group-hover:bg-${track.color}-500 group-hover:text-white transition-all`}>
                <track.icon size={28} />
              </div>
              <span className="font-bold text-slate-900 group-hover:text-brand-red transition-colors">{track.title}</span>
            </motion.button>
          ))}
        </div>
      </section>

      {/* Skills Tracks */}
      <section>
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <BookOpen className="text-brand-red" size={20} />
            <h3 className="text-xl font-display font-bold text-slate-900">Skills Tracks</h3>
          </div>
          <div className="flex gap-2">
            {["All", "Beginner", "Intermediate", "Advanced"].map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-3 py-1 rounded-full text-xs font-bold transition-all ${
                  activeFilter === filter 
                    ? "bg-brand-red text-white" 
                    : "bg-white text-slate-500 hover:bg-slate-200"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {tracks.filter(t => activeFilter === "All" || t.difficulty === activeFilter).map((track) => (
            <div key={track.id} className="luxury-card p-6 flex items-center gap-6 group hover:border-brand-red/30 transition-all">
              <div className={`w-16 h-16 rounded-2xl flex items-center justify-center shrink-0 transition-transform group-hover:scale-110 bg-${track.color}-500/10 text-${track.color}-500`}>
                <track.icon size={32} />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex justify-between items-start mb-1">
                  <h4 className="text-lg font-bold text-slate-900 truncate">{track.title}</h4>
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wider ${
                    track.difficulty === "Beginner" ? "bg-emerald-100 text-emerald-600" :
                    track.difficulty === "Intermediate" ? "bg-blue-100 text-blue-600" :
                    "bg-red-100 text-red-600"
                  }`}>
                    {track.difficulty}
                  </span>
                </div>
                <p className="text-sm text-slate-500 mb-4 line-clamp-1">{track.description}</p>
                <div className="space-y-2">
                  <div className="flex justify-between text-[10px] font-bold text-slate-400 uppercase">
                    <span>Progress</span>
                    <span>{Math.round((track.completed / track.problems) * 100)}%</span>
                  </div>
                  <div className="w-full h-1.5 bg-white rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-brand-red transition-all duration-500"
                      style={{ width: `${(track.completed / track.problems) * 100}%` }}
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <motion.button 
                  whileTap={{ scale: 0.9 }}
                  onClick={() => updateTrackProgress(track.id)}
                  className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-slate-400 hover:bg-brand-red hover:text-white transition-all"
                  title="Mark one problem as completed"
                >
                  <CheckCircle2 size={18} />
                </motion.button>
                {track.assignments && track.assignments.length > 0 && (
                  <motion.button 
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setSelectedTrack(track)}
                    className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-slate-400 hover:bg-brand-red hover:text-white transition-all"
                    title="View Assignments"
                  >
                    <FileText size={18} />
                  </motion.button>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Assignments Modal */}
      {selectedTrack && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-2xl w-full max-w-2xl max-h-[80vh] overflow-hidden flex flex-col shadow-2xl"
          >
            <div className="p-6 border-b border-slate-100 flex justify-between items-center bg-slate-50">
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center bg-${selectedTrack.color}-500/10 text-${selectedTrack.color}-500`}>
                  <selectedTrack.icon size={20} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900">{selectedTrack.title} Assignments</h3>
                  <p className="text-sm text-slate-500">Complete tasks to increase your score</p>
                </div>
              </div>
              <button 
                onClick={() => setSelectedTrack(null)}
                className="w-8 h-8 rounded-full bg-white hover:bg-slate-100 flex items-center justify-center text-slate-400 transition-all"
              >
                <X size={20} />
              </button>
            </div>
            
            <div className="p-6 overflow-y-auto">
              <div className="space-y-4">
                {selectedTrack.assignments?.map((assignment) => (
                  <div key={assignment.id} className="border border-slate-200 rounded-xl p-4 hover:border-brand-red/30 transition-all">
                    <div className="flex justify-between items-start gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h4 className="font-bold text-slate-900">{assignment.title}</h4>
                          {assignment.completed && (
                            <span className="px-2 py-0.5 bg-emerald-100 text-emerald-600 text-[10px] font-bold uppercase rounded-full">
                              Completed
                            </span>
                          )}
                        </div>
                        <p className="text-sm text-slate-500 mb-4">{assignment.description}</p>
                        
                        {submittingAssignmentId === assignment.id && (
                          <motion.div 
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            className="bg-slate-50 rounded-xl p-4 border border-slate-200 mt-4"
                          >
                            <h5 className="text-sm font-bold text-slate-900 mb-3">Submit Your Work</h5>
                            
                            <div className="space-y-4">
                              <div>
                                <div className="flex justify-between items-center mb-2">
                                  <label className="text-xs font-bold text-slate-500 uppercase">Code Solution</label>
                                  <div className="flex items-center gap-2">
                                    <button
                                      onClick={handleFormat}
                                      disabled={isFormatting || !submissionText}
                                      className="text-[10px] font-bold px-2 py-1 rounded bg-slate-100 text-slate-600 hover:bg-slate-200 disabled:opacity-50 transition-colors flex items-center gap-1"
                                    >
                                      {isFormatting ? (
                                        <div className="w-3 h-3 border-2 border-slate-400 border-t-transparent rounded-full animate-spin" />
                                      ) : (
                                        <Zap size={12} />
                                      )}
                                      Format Code
                                    </button>
                                    <select 
                                      value={submissionLanguage}
                                      onChange={(e) => setSubmissionLanguage(e.target.value as any)}
                                      className="text-xs border border-slate-200 rounded px-2 py-1 bg-white focus:outline-none focus:border-brand-red"
                                    >
                                      <option value="python">Python</option>
                                      <option value="java">Java</option>
                                      <option value="cpp">C++</option>
                                    </select>
                                  </div>
                                </div>
                                <div className="border border-slate-200 rounded-lg overflow-hidden">
                                  <CodeMirror
                                    value={submissionText}
                                    height="200px"
                                    theme={vscodeDark}
                                    extensions={[
                                      submissionLanguage === "python" ? python() :
                                      submissionLanguage === "java" ? java() : cpp()
                                    ]}
                                    onChange={(value) => setSubmissionText(value)}
                                    className="text-sm"
                                  />
                                </div>
                              </div>
                              
                              <div>
                                <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Upload File (PDF/ZIP)</label>
                                <div className="border-2 border-dashed border-slate-300 rounded-lg p-4 text-center hover:bg-slate-100 transition-colors cursor-pointer relative">
                                  <input 
                                    type="file" 
                                    className="absolute inset-0 opacity-0 cursor-pointer"
                                    onChange={(e) => setSubmissionFile(e.target.files?.[0] || null)}
                                    accept=".pdf,.zip,.rar,.7z,.doc,.docx"
                                  />
                                  {submissionFile ? (
                                    <div className="flex items-center justify-center gap-2 text-brand-red font-bold text-sm">
                                      <FileText size={16} />
                                      {submissionFile.name}
                                    </div>
                                  ) : (
                                    <div className="text-slate-400 text-sm">
                                      <span className="text-brand-red font-bold">Click to upload</span> or drag and drop
                                    </div>
                                  )}
                                </div>
                              </div>

                              <div className="flex gap-2 justify-end">
                                <button 
                                  onClick={() => {
                                    setSubmittingAssignmentId(null);
                                    setSubmissionText("");
                                    setSubmissionFile(null);
                                  }}
                                  className="px-4 py-2 rounded-lg text-sm font-bold text-slate-500 hover:bg-slate-200 transition-all"
                                >
                                  Cancel
                                </button>
                                <button 
                                  onClick={() => handleSubmission(selectedTrack.id, assignment.id)}
                                  disabled={!submissionText && !submissionFile}
                                  className="px-4 py-2 rounded-lg text-sm font-bold bg-brand-red text-white hover:bg-brand-red/90 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                  Submit Assignment
                                </button>
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </div>
                      
                      {!assignment.completed && submittingAssignmentId !== assignment.id && (
                        <button
                          onClick={() => setSubmittingAssignmentId(assignment.id)}
                          className="px-4 py-2 rounded-lg text-sm font-bold bg-brand-red text-white hover:bg-brand-red/90 transition-all flex items-center gap-2"
                        >
                          Submit Task <ChevronRight size={16} />
                        </button>
                      )}
                      
                      {assignment.completed && (
                        <button
                          disabled
                          className="px-4 py-2 rounded-lg text-sm font-bold bg-slate-100 text-slate-400 cursor-not-allowed flex items-center gap-2"
                        >
                          Submitted <CheckCircle2 size={16} />
                        </button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      )}

      {/* Confirmation Modal */}
      {showConfirmModal && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-[60] p-4 backdrop-blur-sm">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-2xl w-full max-w-2xl shadow-2xl overflow-hidden"
          >
            <div className="p-6 border-b border-slate-100 flex justify-between items-center bg-slate-50">
              <h3 className="text-xl font-bold text-slate-900">Review Your Submission</h3>
              <button onClick={() => setShowConfirmModal(false)} className="text-slate-400 hover:text-slate-600">
                <X size={20} />
              </button>
            </div>
            <div className="p-6 space-y-6 max-h-[60vh] overflow-y-auto">
              <div>
                <h4 className="text-sm font-bold text-slate-500 uppercase mb-2">Code Solution ({submissionLanguage})</h4>
                {submissionText ? (
                  <div className="bg-slate-900 rounded-xl p-4 font-mono text-xs text-slate-300 overflow-x-auto whitespace-pre">
                    {submissionText}
                  </div>
                ) : (
                  <p className="text-sm text-slate-400 italic">No code provided</p>
                )}
              </div>
              
              {submissionFile && (
                <div>
                  <h4 className="text-sm font-bold text-slate-500 uppercase mb-2">Attached File</h4>
                  <div className="flex items-center gap-2 text-brand-red font-bold p-3 bg-brand-red/5 rounded-xl border border-brand-red/10">
                    <FileText size={18} />
                    <span>{submissionFile.name}</span>
                  </div>
                </div>
              )}

              <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 flex gap-3">
                <Brain className="text-amber-600 shrink-0" size={20} />
                <p className="text-sm text-amber-800">
                  Please ensure your code is correct and all required files are attached. You cannot edit your submission once it's processed.
                </p>
              </div>
            </div>
            <div className="p-6 bg-slate-50 border-t border-slate-100 flex justify-end gap-3">
              <button 
                onClick={() => setShowConfirmModal(false)}
                className="px-6 py-2 rounded-xl font-bold text-slate-600 hover:bg-slate-200 transition-all"
              >
                Back to Edit
              </button>
              <button 
                onClick={confirmSubmission}
                className="btn-primary px-8 py-2"
              >
                Confirm & Submit
              </button>
            </div>
          </motion.div>
        </div>
      )}

      {/* Certification Section */}
      <div className="luxury-card p-8 bg-gradient-to-br from-slate-900 to-slate-800 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-brand-red/20 blur-[100px] -z-10" />
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
          <div className="max-w-md text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-red/20 text-brand-red text-[10px] font-bold uppercase tracking-widest mb-4">
              <Star size={12} /> Get Certified
            </div>
            <h3 className="text-2xl font-display font-bold mb-4">Skills Certification</h3>
            <p className="text-slate-400 mb-6">Take our standardized skill tests and get a certificate to showcase on your profile and LinkedIn.</p>
            <button className="btn-primary px-8 py-3">Take Skill Test</button>
          </div>
          <div className="hidden md:block">
            <div className="w-40 h-40 rounded-full border-4 border-brand-red/20 flex items-center justify-center relative">
              <div className="absolute inset-0 border-t-4 border-brand-red rounded-full animate-spin-slow" />
              <CheckCircle2 size={64} className="text-brand-red" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
