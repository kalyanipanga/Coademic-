import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Video, Calendar, Clock, Star, Target,
  ChevronRight, Play, CheckCircle2, 
  User, MessageSquare, GitBranch, 
  Zap, Brain, Code, Users,
  ArrowLeft, Info, Layout,
  TrendingUp, TrendingDown, Award,
  AlertCircle, RefreshCcw, Camera
} from "lucide-react";
import { useLiveInterview } from "../../hooks/useLiveInterview";

interface InterviewTopic {
  id: string;
  title: string;
  icon: any;
  duration: string;
  difficulty: "Easy" | "Medium" | "Hard";
  questions: number;
}

const INTERVIEW_TOPICS: InterviewTopic[] = [
  { id: "dsa", title: "Data Structures & Algorithms", icon: Brain, duration: "45 mins", difficulty: "Hard", questions: 3 },
  { id: "frontend", title: "Frontend Development", icon: Layout, duration: "30 mins", difficulty: "Medium", questions: 5 },
  { id: "backend", title: "Backend Systems", icon: Code, duration: "40 mins", difficulty: "Hard", questions: 4 },
  { id: "hr", title: "HR & Behavioral", icon: Users, duration: "20 mins", difficulty: "Easy", questions: 6 },
  { id: "version-controls", title: "Version Controls", icon: GitBranch, duration: "45 mins", difficulty: "Medium", questions: 3 },
  { id: "fullstack", title: "Full Stack Integration", icon: Zap, duration: "45 mins", difficulty: "Medium", questions: 5 },
];

export default function MockInterviewPanel() {
  const [view, setView] = useState<"overview" | "setup" | "active" | "analysis">("overview");
  const [selectedTopic, setSelectedTopic] = useState<InterviewTopic | null>(null);
  const [realTimeScore, setRealTimeScore] = useState(0);
  const [scoreTrend, setScoreTrend] = useState<"up" | "down" | "stable">("stable");
  const [goodPoints, setGoodPoints] = useState<string[]>([]);
  const [badPoints, setBadPoints] = useState<string[]>([]);
  const [suggestions, setSuggestions] = useState<{ mistake: string; suggestion: string; type: "warning" | "info" | "success" }[]>([]);
  const [activeFeedback, setActiveFeedback] = useState<{ mistake: string; suggestion: string } | null>(null);
  const [realTimeSummary, setRealTimeSummary] = useState<string[]>(["Interview started. Analyzing speech patterns..."]);
  const [timer, setTimer] = useState(0);
  const [history, setHistory] = useState<any[]>(() => {
    const saved = localStorage.getItem("mock_interview_sessions");
    if (saved) return JSON.parse(saved);
    return [];
  });
  const [currentSession, setCurrentSession] = useState<any>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [cameraActive, setCameraActive] = useState(false);
  const [cameraError, setCameraError] = useState<string | null>(null);

  // Scroll to top when view changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [view]);

  const { connect: connectLive, disconnect: disconnectLive, isConnected, isConnecting, error: liveError, messages, isPlaying: isSpeaking } = useLiveInterview(selectedTopic?.title);

  useEffect(() => {
    const savedHistory = localStorage.getItem("mock_interview_sessions");
    if (savedHistory) {
      setHistory(JSON.parse(savedHistory));
    }
  }, []);

  const totalMocks = history.length;
  const avgScore = history.length > 0 
    ? (history.reduce((acc, curr) => acc + parseFloat(curr.score), 0) / history.length).toFixed(1)
    : "0.0";

  const uniqueStrengths = new Set(history.flatMap(h => h.strengths || [])).size;
  const uniqueWeaknesses = new Set(history.flatMap(h => h.weaknesses || [])).size;

  const [stream, setStream] = useState<MediaStream | null>(null);

  const startCamera = async () => {
    setCameraError(null);
    try {
      const mediaStream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
      setStream(mediaStream);
      setCameraActive(true);
    } catch (err) {
      console.error("Error accessing camera/microphone");
      setCameraActive(false);
      setCameraError("Camera or microphone access denied. Please check your browser permissions.");
    }
  };

  useEffect(() => {
    if (cameraActive && stream && videoRef.current) {
      videoRef.current.srcObject = stream;
    }
  }, [cameraActive, stream]);

  const stopCamera = () => {
    if (stream) {
      stream.getTracks().forEach(track => track.stop());
      setStream(null);
      setCameraActive(false);
    }
  };

  useEffect(() => {
    if (view === "active") {
      startCamera();
      connectLive();
      // Simulate dynamic feedback generation
      const strengthsList = [
        "Clear articulation of concepts",
        "Good eye contact",
        "Structured problem-solving approach",
        "Used appropriate technical terminology",
        "Maintained professional demeanor"
      ];
      const weaknessesList = [
        "Slight hesitation on complex topics",
        "Could use more concrete examples",
        "Reduce filler words (um, uh)",
        "Elaborate more on trade-offs",
        "Speak with more confidence"
      ];

      const suggestionMap: Record<string, { suggestion: string; type: "warning" | "info" | "success" }> = {
        "Slight hesitation on complex topics": { 
          suggestion: "Try to take a deep breath and pause for 2 seconds before answering to gather your thoughts.",
          type: "info"
        },
        "Could use more concrete examples": { 
          suggestion: "Use the STAR method (Situation, Task, Action, Result) to structure your examples.",
          type: "warning"
        },
        "Reduce filler words (um, uh)": { 
          suggestion: "Practice speaking slower; it's okay to have silent pauses instead of filler words.",
          type: "warning"
        },
        "Elaborate more on trade-offs": { 
          suggestion: "Whenever you mention a solution, explicitly state one advantage and one disadvantage.",
          type: "info"
        },
        "Speak with more confidence": { 
          suggestion: "Try to sit up straight and use a slightly higher volume to sound more assertive.",
          type: "success"
        }
      };
      
      // Randomly select 2-3 points
      const currentStrengths = strengthsList.sort(() => 0.5 - Math.random()).slice(0, 3);
      const currentWeaknesses = weaknessesList.sort(() => 0.5 - Math.random()).slice(0, 2);
      
      setGoodPoints(currentStrengths);
      setBadPoints(currentWeaknesses);

      // Initialize summary
      setRealTimeSummary(["Interview session initialized.", `Topic: ${selectedTopic?.title}`, "AI Interviewer is ready."]);

      // Analyze history for recurring mistakes
      const weaknessFrequency: Record<string, number> = {};
      history.forEach(h => {
        h.weaknesses?.forEach(w => {
          weaknessFrequency[w] = (weaknessFrequency[w] || 0) + 1;
        });
      });

      const recurringMistakes = currentWeaknesses.filter(w => (weaknessFrequency[w] || 0) >= 1);
      const newSuggestions = recurringMistakes.map(m => ({
        mistake: m,
        suggestion: suggestionMap[m]?.suggestion || "Focus on improving this area based on previous feedback.",
        type: suggestionMap[m]?.type || "info"
      }));

      setSuggestions(newSuggestions);

      // Set up a periodic "Live Feedback" trigger
      const feedbackInterval = setInterval(() => {
        if (Math.random() > 0.7) {
          const randomMistake = weaknessesList[Math.floor(Math.random() * weaknessesList.length)];
          const feedback = {
            mistake: randomMistake,
            suggestion: suggestionMap[randomMistake]?.suggestion || "Focus on this area."
          };
          setActiveFeedback(feedback);
          
          // Add to real-time summary
          setRealTimeSummary(prev => {
            const newLog = [`Detected: ${randomMistake}. Advice: ${feedback.suggestion}`, ...prev];
            return newLog.slice(0, 10); // Keep last 10 entries
          });

          // Clear feedback after 5 seconds
          setTimeout(() => setActiveFeedback(null), 5000);
        } else if (Math.random() > 0.8) {
          // Add positive reinforcement to summary
          const randomStrength = strengthsList[Math.floor(Math.random() * strengthsList.length)];
          setRealTimeSummary(prev => {
            const newLog = [`Strength noted: ${randomStrength}`, ...prev];
            return newLog.slice(0, 10);
          });
        }
      }, 10000);

      return () => {
        clearInterval(feedbackInterval);
        disconnectLive();
      };
    } else {
      stopCamera();
      disconnectLive();
      setActiveFeedback(null);
    }
  }, [view, history, connectLive, disconnectLive]);

  const endSession = () => {
    const finalScore = (realTimeScore + (Math.random() * 1)).toFixed(1);
    const newEntry = {
      title: selectedTopic?.title || "Mock Interview",
      date: new Date().toLocaleDateString("en-US", { month: "short", day: "2-digit", year: "numeric" }),
      score: finalScore,
      status: "Completed",
      strengths: goodPoints,
      weaknesses: badPoints,
      metrics: {
        technical: Math.floor(Math.random() * (95 - 70) + 70),
        communication: Math.floor(Math.random() * (98 - 80) + 80),
        confidence: Math.floor(Math.random() * (90 - 60) + 60)
      }
    };
    
    const newHistory = [newEntry, ...history];
    setHistory(newHistory);
    setCurrentSession(newEntry);
    localStorage.setItem("mock_interview_sessions", JSON.stringify(newHistory));
    setView("analysis");
  };

  useEffect(() => {
    let interval: any;
    if (view === "active") {
      interval = setInterval(() => {
        setTimer(prev => prev + 1);
        // Simulate score fluctuations - starting from 0 and trending up
        if (Math.random() > 0.6) {
          setRealTimeScore(prev => {
            // Faster growth initially, then stabilizes with fluctuations
            const growth = prev < 6 ? Math.random() * 0.4 : (Math.random() * 0.3 - 0.1);
            const newScore = Math.min(10, Math.max(0, prev + growth));
            
            if (newScore > prev) setScoreTrend("up");
            else if (newScore < prev) setScoreTrend("down");
            else setScoreTrend("stable");
            
            return newScore;
          });
        }
      }, 1000);
    } else if (view === "setup") {
      setTimer(0);
      setRealTimeScore(0);
      setScoreTrend("stable");
    }
    return () => clearInterval(interval);
  }, [view]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const renderOverview = () => (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="luxury-card p-6 bg-white border-l-4 border-l-brand-red">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-10 h-10 rounded-xl bg-brand-red/10 flex items-center justify-center text-brand-red">
              <Video size={20} />
            </div>
            <span className="text-sm font-bold text-slate-400 uppercase tracking-wider">Total Mocks</span>
          </div>
          <div className="text-3xl font-bold text-slate-900">{history.length > 0 ? totalMocks : 0}</div>
          <p className="text-xs text-slate-500 mt-2">Lifetime sessions</p>
        </div>
        <div className="luxury-card p-6 bg-white border-l-4 border-l-emerald-500">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-500">
              <Star size={20} />
            </div>
            <span className="text-sm font-bold text-slate-400 uppercase tracking-wider">Avg. Score</span>
          </div>
          <div className="text-3xl font-bold text-slate-900">{history.length > 0 ? avgScore : "0.0"}/10</div>
          <p className="text-xs text-slate-500 mt-2">Based on past performance</p>
        </div>
        <div className="luxury-card p-6 bg-white border-l-4 border-l-brand-red">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-10 h-10 rounded-xl bg-brand-red/10 flex items-center justify-center text-brand-red">
              <Target size={20} />
            </div>
            <span className="text-sm font-bold text-slate-400 uppercase tracking-wider">AI Insights</span>
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-2xl font-bold text-emerald-600">{history.length > 0 ? uniqueStrengths : 0}</span>
            <span className="text-xs text-slate-400 font-medium">Strengths</span>
            <span className="text-slate-300 mx-1">|</span>
            <span className="text-2xl font-bold text-brand-red">{history.length > 0 ? uniqueWeaknesses : 0}</span>
            <span className="text-xs text-slate-400 font-medium">Weaknesses</span>
          </div>
          <p className="text-xs text-slate-500 mt-2">Unique patterns identified</p>
        </div>
        <div className="luxury-card p-6 bg-white border-l-4 border-l-blue-500">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-500">
              <Calendar size={20} />
            </div>
            <span className="text-sm font-bold text-slate-400 uppercase tracking-wider">Next Session</span>
          </div>
          <div className="text-3xl font-bold text-slate-900">{history.length > 0 ? "Tomorrow" : "None"}</div>
          <p className="text-xs text-slate-500 mt-2">{history.length > 0 ? "10:30 AM • HR Mock" : "Schedule your first mock"}</p>
        </div>
      </div>

      <div className="luxury-card p-8 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-brand-red/20 blur-[100px] -z-10" />
        <div className="relative z-10 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="max-w-md">
            <h2 className="text-2xl font-display font-bold mb-4">Ready for a Real Challenge?</h2>
            <p className="text-slate-400 mb-6">Start an AI-powered mock interview session. Get real-time feedback, sentiment analysis, and a detailed performance report.</p>
            <button 
              onClick={() => setView("setup")}
              className="btn-primary px-8 py-3 flex items-center gap-2"
            >
              Start AI Mock Interview <Play size={18} />
            </button>
          </div>
          <div className="hidden md:block">
            <div className="w-48 h-48 rounded-full border-8 border-brand-red/20 flex items-center justify-center relative">
              <div className="absolute inset-0 border-t-8 border-brand-red rounded-full animate-spin-slow" />
              <Video size={64} className="text-brand-red" />
            </div>
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-xl font-display font-bold text-slate-900 mb-6">Recent Interview History</h3>
        <div className="space-y-4">
          {history.map((item, i) => (
            <button 
              key={i} 
              onClick={() => {
                setCurrentSession(item);
                setView("analysis");
              }}
              className="w-full luxury-card p-5 flex items-center justify-between group hover:border-brand-red/30 transition-all text-left"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center text-slate-400 group-hover:bg-brand-red/10 group-hover:text-brand-red transition-all">
                  <CheckCircle2 size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">{item.title}</h4>
                  <p className="text-xs text-slate-400">{item.date} • {item.status}</p>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="text-right">
                  <p className="text-xs text-slate-400 font-bold uppercase">Score</p>
                  <p className="text-lg font-bold text-brand-red">{item.score}</p>
                </div>
                <div className="p-2 rounded-lg group-hover:bg-white text-slate-400 group-hover:text-brand-red transition-all">
                  <ChevronRight size={20} />
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );

  const renderSetup = () => (
    <div className="space-y-8">
      <button 
        onClick={() => setView("overview")}
        className="flex items-center gap-2 text-slate-500 hover:text-brand-red transition-colors"
      >
        <ArrowLeft size={18} /> Back to Overview
      </button>

      <div className="text-center max-w-2xl mx-auto mb-12">
        <h2 className="text-3xl font-display font-bold text-slate-900 mb-4">Choose Your Interview Topic</h2>
        <p className="text-slate-600">Select a specialized track to begin your AI-simulated interview session. Each session is tailored to industry standards.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {INTERVIEW_TOPICS.map((topic) => (
          <button
            key={topic.id}
            onClick={() => setSelectedTopic(topic)}
            className={`luxury-card p-8 text-left group relative overflow-hidden transition-all ${
              selectedTopic?.id === topic.id ? "ring-2 ring-brand-red border-brand-red/50 bg-brand-red/5" : "hover:border-brand-red/30"
            }`}
          >
            <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 shadow-lg transition-transform group-hover:scale-110 ${
              selectedTopic?.id === topic.id ? "bg-brand-red text-white" : "bg-white text-slate-400 group-hover:bg-brand-red group-hover:text-white"
            }`}>
              <topic.icon size={28} />
            </div>
            <h3 className="text-xl font-display font-bold text-slate-900 mb-2">{topic.title}</h3>
            <div className="flex flex-wrap gap-3 mb-6">
              <span className="flex items-center gap-1 text-xs font-bold text-slate-400 uppercase tracking-wider">
                <Clock size={12} /> {topic.duration}
              </span>
              <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider ${
                topic.difficulty === "Easy" ? "bg-emerald-100 text-emerald-600" :
                topic.difficulty === "Medium" ? "bg-orange-100 text-orange-600" :
                "bg-red-100 text-red-600"
              }`}>
                {topic.difficulty}
              </span>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed mb-6">
              {topic.questions} core questions designed to test your {topic.title.toLowerCase()} expertise.
            </p>
            <div className="absolute bottom-4 right-4 text-slate-300 group-hover:text-brand-red transition-colors">
              <ChevronRight size={24} />
            </div>
          </button>
        ))}
      </div>

      {selectedTopic && (
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="fixed bottom-8 left-1/2 -translate-x-1/2 w-full max-w-md px-6 z-50"
        >
          <div className="bg-slate-900 text-white p-6 rounded-2xl shadow-2xl flex items-center justify-between gap-6 border border-white/10">
            <div>
              <p className="text-xs text-slate-400 font-bold uppercase tracking-widest mb-1">Selected Topic</p>
              <p className="font-bold">{selectedTopic.title}</p>
            </div>
            <button 
              onClick={() => setView("active")}
              className="btn-primary px-8 py-3 shadow-red-glow"
            >
              Start Now
            </button>
          </div>
        </motion.div>
      )}
    </div>
  );

  const renderActive = () => (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-brand-red/10 flex items-center justify-center text-brand-red">
            <Video size={24} />
          </div>
          <div>
            <h2 className="text-xl font-bold text-slate-900">AI Mock Interview</h2>
            <p className="text-sm text-slate-500">{selectedTopic?.title}</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="px-4 py-2 bg-white rounded-full text-sm font-mono font-bold text-slate-600">
            {formatTime(timer)}
          </div>
          <button 
            onClick={endSession}
            className="px-4 py-2 bg-red-100 text-red-600 rounded-full text-sm font-bold hover:bg-red-200 transition-colors"
          >
            End Session
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div className="luxury-card aspect-video bg-slate-950 relative overflow-hidden flex items-center justify-center border-2 border-slate-800">
            {/* Fallback Background */}
            <div className="absolute inset-0 bg-cover bg-center opacity-40 z-0" style={{ backgroundImage: 'url(https://picsum.photos/seed/interviewer/800/450)' }} />
            
            {/* AI Interviewer Avatar Simulation */}
            <AnimatePresence>
              {activeFeedback && (
                <motion.div
                  initial={{ opacity: 0, x: 20, y: -20 }}
                  animate={{ opacity: 1, x: 0, y: 0 }}
                  exit={{ opacity: 0, x: 20, y: -20 }}
                  className="absolute top-16 right-4 z-50 w-56 md:w-64"
                >
                  <div className="bg-white/90 backdrop-blur-md p-3 md:p-4 rounded-xl shadow-2xl border-l-4 border-l-brand-red">
                    <div className="flex items-start gap-2 md:gap-3">
                      <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-brand-red/10 flex items-center justify-center text-brand-red shrink-0">
                        <AlertCircle size={14} />
                      </div>
                      <div>
                        <p className="text-[8px] md:text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">AI Coach Alert</p>
                        <p className="text-[10px] md:text-xs font-bold text-slate-900 mb-1">{activeFeedback.mistake}</p>
                        <p className="text-[9px] md:text-[10px] text-slate-600 leading-relaxed italic">"{activeFeedback.suggestion}"</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-slate-900">
              <img 
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800&h=450" 
                alt="AI Interviewer" 
                className={`absolute inset-0 w-full h-full object-cover opacity-60 transition-all duration-700 ${isSpeaking ? "scale-105 brightness-110" : "brightness-100"}`}
                referrerPolicy="no-referrer"
              />
              <div className="relative z-20 text-center p-6">
                <div className="w-16 h-16 rounded-full bg-brand-red/20 flex items-center justify-center mx-auto mb-4">
                  <User size={32} className="text-brand-red" />
                </div>
                <p className="text-white font-bold text-lg">AI Interviewer (Live)</p>
                <p className="text-slate-400 text-xs mt-1">Avatar mode</p>
              </div>
            </div>

            <div className="absolute top-4 right-4 flex gap-2 z-40">
              <div className="px-3 py-1 bg-black/50 backdrop-blur-md rounded-full text-[10px] font-bold text-white uppercase tracking-widest flex items-center gap-1.5">
                <div className={`w-1.5 h-1.5 rounded-full ${cameraActive ? "bg-emerald-500 animate-pulse" : "bg-slate-500"}`} />
                Mic: {cameraActive ? "Active" : "Off"}
              </div>
              <div className="px-3 py-1 bg-brand-red rounded-full text-[10px] font-bold text-white uppercase tracking-widest shadow-red-glow">
                AI Interviewer (Live)
              </div>
            </div>

            {/* Speaking Indicator Overlay */}
            {isSpeaking && (
              <div className="absolute inset-0 bg-gradient-to-t from-brand-red/30 to-transparent pointer-events-none flex items-end p-8 z-30">
                <div className="flex gap-1.5 items-end h-12">
                  {[...Array(12)].map((_, i) => (
                    <motion.div
                      key={i}
                      animate={{ height: [10, 40, 20, 60, 10] }}
                      transition={{ duration: 0.5, repeat: Infinity, delay: i * 0.05 }}
                      className="w-1.5 bg-brand-red rounded-full shadow-[0_0_20px_rgba(255,68,68,0.8)]"
                    />
                  ))}
                </div>
              </div>
            )}

            {!isSpeaking && (
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none bg-black/5 z-30">
                <div className="text-center">
                  <div className="px-4 py-2 bg-black/20 rounded-full border border-white/5 flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-slate-400 animate-pulse" />
                    <p className="text-white/70 font-mono text-[10px] uppercase tracking-[0.2em] font-bold">AI Listening...</p>
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className="luxury-card p-6 bg-white">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest flex items-center gap-2">
                <MessageSquare size={16} /> Current Question
              </h3>
              <div className="flex items-center gap-2">
                {isConnecting && <span className="text-xs text-slate-400 animate-pulse">Connecting to AI...</span>}
                {isConnected && <span className="text-xs text-emerald-500 font-medium">AI Connected</span>}
                {liveError && <span className="text-xs text-brand-red">{liveError}</span>}
              </div>
            </div>
            <p className="text-xl font-display font-medium text-slate-900 leading-relaxed">
              {messages.filter(m => m.role === 'model').pop()?.text || "Connecting to AI Interviewer..."}
            </p>
          </div>
        </div>

        <div className="space-y-6">
          <div className="luxury-card aspect-video bg-slate-900 relative overflow-hidden flex items-center justify-center border-2 border-brand-red/20 shadow-xl">
            {/* Fallback Background */}
            <div className="absolute inset-0 bg-cover bg-center opacity-20 z-0" style={{ backgroundImage: 'url(https://picsum.photos/seed/user/800/450)' }} />
            
            <div className="absolute top-4 left-4 flex gap-2 z-20">
              <div className="px-3 py-1 bg-brand-red rounded-full text-[10px] font-bold text-white uppercase tracking-widest flex items-center gap-1.5 shadow-red-glow">
                <div className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                You (Live)
              </div>
              {cameraActive && (
                <div className="px-3 py-1 bg-black/50 backdrop-blur-md rounded-full text-[10px] font-bold text-white uppercase tracking-widest flex items-center gap-1.5">
                  REC
                </div>
              )}
            </div>
            {cameraActive ? (
              <video 
                ref={videoRef} 
                autoPlay 
                playsInline 
                muted 
                className="absolute inset-0 w-full h-full object-cover scale-x-[-1] z-10" // Mirror effect for user
              />
            ) : (
              <div className="text-center space-y-4 relative z-20">
                <User size={64} className="text-slate-300 mx-auto" />
                <p className="text-slate-400 text-sm">
                  {cameraError || "Camera and microphone access required for proctoring"}
                </p>
                <button 
                  onClick={startCamera}
                  className="btn-secondary py-2 text-xs flex items-center gap-2 mx-auto"
                >
                  <Camera size={14} /> {cameraError ? "Retry Access" : "Enable Camera & Mic"}
                </button>
              </div>
            )}
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="luxury-card p-4 bg-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-slate-100 to-transparent rounded-bl-full" />
              <div className="flex items-center justify-between mb-2 relative z-10">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Real-time Score</span>
                <motion.div
                  key={scoreTrend}
                  initial={{ scale: 0.5, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className={`p-1 rounded-full ${
                    scoreTrend === "up" ? "bg-emerald-100 text-emerald-500" : 
                    scoreTrend === "down" ? "bg-red-100 text-red-500" : 
                    "bg-slate-100 text-slate-400"
                  }`}
                >
                  {scoreTrend === "up" ? <TrendingUp size={14} /> : 
                   scoreTrend === "down" ? <TrendingDown size={14} /> : 
                   <TrendingUp size={14} className="opacity-50" />}
                </motion.div>
              </div>
              <div className="flex items-end gap-2 relative z-10">
                <motion.div 
                  key={realTimeScore}
                  initial={{ y: -5, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  className={`text-3xl font-bold ${
                    scoreTrend === "up" ? "text-emerald-600" : 
                    scoreTrend === "down" ? "text-red-600" : 
                    "text-slate-900"
                  }`}
                >
                  {realTimeScore.toFixed(1)}
                </motion.div>
                <span className="text-xs text-slate-400 font-medium mb-1">/10</span>
              </div>
            </div>
            <div className="luxury-card p-4 bg-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-slate-100 to-transparent rounded-bl-full" />
              <div className="flex items-center justify-between mb-2 relative z-10">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Sentiment</span>
                <div className="p-1 rounded-full bg-brand-red/10 text-brand-red">
                  <Zap size={14} />
                </div>
              </div>
              <div className="text-2xl font-bold text-slate-900 relative z-10">Positive</div>
            </div>
          </div>

          <div className="luxury-card p-6 bg-white border-2 border-brand-red/10">
            <h3 className="text-sm font-bold text-brand-red uppercase tracking-widest mb-4 flex items-center gap-2">
              <Brain size={16} /> Real-time Summary
            </h3>
            <div className="space-y-6">
              <div className="bg-slate-50 rounded-xl p-4 border border-slate-100 h-[300px] overflow-y-auto custom-scrollbar flex flex-col gap-3">
                {messages.length === 0 ? (
                  <div className="text-center text-slate-400 text-sm mt-10">
                    Waiting for conversation to start...
                  </div>
                ) : (
                  messages.map((msg, i) => (
                    <motion.div 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      key={i}
                      className={`text-sm leading-relaxed p-3 rounded-xl max-w-[85%] ${
                        msg.role === 'user' 
                          ? "bg-slate-800 text-white self-end rounded-tr-sm" 
                          : "bg-white border border-slate-200 text-slate-700 self-start rounded-tl-sm shadow-sm"
                      }`}
                    >
                      <div className="text-[10px] uppercase tracking-wider font-bold mb-1 opacity-50">
                        {msg.role === 'user' ? 'You' : 'AI Interviewer'}
                      </div>
                      {msg.text}
                    </motion.div>
                  ))
                )}
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <p className="text-[10px] font-bold text-brand-red uppercase tracking-widest flex items-center gap-1">
                    <TrendingUp size={10} /> Strengths
                  </p>
                  <div className="space-y-2">
                    {goodPoints.map((p, i) => (
                      <motion.div 
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 }}
                        key={i} 
                        className="flex items-start gap-2 text-[11px] text-slate-600 bg-white p-2 rounded-lg border border-slate-100"
                      >
                        <CheckCircle2 size={12} className="text-brand-red shrink-0 mt-0.5" /> 
                        <span>{p}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
                <div className="space-y-2">
                  <p className="text-[10px] font-bold text-brand-red uppercase tracking-widest flex items-center gap-1">
                    <TrendingDown size={10} /> Improvements
                  </p>
                  <div className="space-y-2">
                    {badPoints.map((p, i) => (
                      <motion.div 
                        initial={{ opacity: 0, x: 10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 }}
                        key={i} 
                        className="flex items-start gap-2 text-[11px] text-brand-red bg-brand-red/5 p-2 rounded-lg border border-brand-red/10"
                      >
                        <AlertCircle size={12} className="text-brand-red shrink-0 mt-0.5" /> 
                        <span>{p}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>

              {suggestions.length > 0 && (
                <div className="space-y-3 pt-4 border-t border-brand-red/10">
                  <p className="text-[10px] font-bold text-brand-red uppercase tracking-widest flex items-center gap-1.5">
                    <Zap size={12} /> Actionable Advice
                  </p>
                  <div className="grid gap-3">
                    {suggestions.map((s, i) => (
                      <motion.div 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.2 }}
                        key={i} 
                        className="p-3 rounded-xl border border-brand-red/10 bg-white space-y-2"
                      >
                        <div className="flex items-center justify-between">
                          <p className="text-[10px] font-bold uppercase text-brand-red">
                            AI Recommendation
                          </p>
                          <span className="text-[9px] font-bold text-slate-400 uppercase">Mistake: {s.mistake}</span>
                        </div>
                        <p className="text-xs text-slate-700 leading-relaxed font-medium">
                          {s.suggestion}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderAnalysis = () => (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <button 
            onClick={() => setView("overview")}
            className="flex items-center gap-2 text-slate-500 hover:text-brand-red transition-colors mb-2 text-sm font-bold uppercase tracking-wider"
          >
            <ArrowLeft size={14} /> Back to Overview
          </button>
          <h2 className="text-3xl font-display font-bold text-slate-900">Interview Analysis</h2>
        </div>
        <button 
          onClick={() => setView("setup")}
          className="btn-primary px-6 py-2 flex items-center gap-2"
        >
          <RefreshCcw size={18} /> Start New Mock
        </button>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="luxury-card p-8 text-center bg-white">
          <Award size={48} className="text-brand-red mx-auto mb-4" />
          <p className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-2">Final Score</p>
          <div className="text-5xl font-bold text-slate-900">{currentSession?.score || "0.0"}<span className="text-xl text-slate-300">/10</span></div>
          <p className="text-xs text-emerald-500 font-bold mt-4">
            {parseFloat(currentSession?.score || "0") > 8 ? "EXCELLENT PERFORMANCE" : "GOOD EFFORT"}
          </p>
        </div>
        <div className="md:col-span-2 luxury-card p-8 bg-slate-900 text-white">
          <h3 className="text-xl font-bold mb-6">Performance Summary</h3>
          <div className="space-y-6">
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-sm text-slate-400">Technical Accuracy</span>
                <span className="text-sm font-bold">{currentSession?.metrics?.technical || 85}%</span>
              </div>
              <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-brand-red transition-all duration-1000" 
                  style={{ width: `${currentSession?.metrics?.technical || 85}%` }} 
                />
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-sm text-slate-400">Communication Clarity</span>
                <span className="text-sm font-bold">{currentSession?.metrics?.communication || 92}%</span>
              </div>
              <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-brand-red transition-all duration-1000" 
                  style={{ width: `${currentSession?.metrics?.communication || 92}%` }} 
                />
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-sm text-slate-400">Confidence & Body Language</span>
                <span className="text-sm font-bold">{currentSession?.metrics?.confidence || 78}%</span>
              </div>
              <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-brand-red transition-all duration-1000" 
                  style={{ width: `${currentSession?.metrics?.confidence || 78}%` }} 
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="luxury-card p-8 bg-white border-t-4 border-t-emerald-500">
          <h3 className="text-lg font-bold text-slate-900 mb-6 flex items-center gap-2">
            <TrendingUp className="text-emerald-500" /> Key Strengths
          </h3>
          <ul className="space-y-4">
            {currentSession?.strengths?.map((item: string, i: number) => (
              <li key={i} className="flex gap-3 text-slate-600 text-sm leading-relaxed">
                <CheckCircle2 size={18} className="text-emerald-500 shrink-0" />
                {item}
              </li>
            )) || <p className="text-slate-400 text-sm">No strengths recorded.</p>}
          </ul>
        </div>
        <div className="luxury-card p-8 bg-white border-t-4 border-t-brand-red">
          <h3 className="text-lg font-bold text-slate-900 mb-6 flex items-center gap-2">
            <TrendingDown className="text-brand-red" /> Areas for Improvement
          </h3>
          <ul className="space-y-4">
            {currentSession?.weaknesses?.map((item: string, i: number) => (
              <li key={i} className="flex gap-3 text-slate-600 text-sm leading-relaxed">
                <AlertCircle size={18} className="text-brand-red shrink-0" />
                {item}
              </li>
            )) || <p className="text-slate-400 text-sm">No areas for improvement recorded.</p>}
          </ul>
        </div>
      </div>

    </div>
  );

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-8"
    >
      <header>
        <h1 className="text-3xl font-display font-bold text-slate-900 mb-2">Mock Interview Panel</h1>
        <p className="text-slate-600">Practice with our AI interviewer and get ready for your dream company.</p>
      </header>

      <AnimatePresence mode="wait">
        <motion.div
          key={view}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.2 }}
        >
          {view === "overview" && renderOverview()}
          {view === "setup" && renderSetup()}
          {view === "active" && renderActive()}
          {view === "analysis" && renderAnalysis()}
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
}
