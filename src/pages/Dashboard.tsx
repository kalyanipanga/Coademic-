import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  BookOpen, Code, Video, FileText, 
  History, BarChart3, CheckCircle2,
  ChevronRight, Play, Calendar, Star,
  Trophy, ArrowLeft, ExternalLink, Briefcase,
  Award, Clock, Layout, Users
} from "lucide-react";
import { User, MockInterview, Course, UserProgress } from "../types";
import { useNavigate } from "react-router-dom";
import React, { Suspense, lazy } from "react";
import confetti from "canvas-confetti";
import InterviewKit from "../components/InterviewKit/InterviewKit";
import ResumeDownloads from "../components/ResumeDownloads/ResumeDownloads";
const MockInterviewPanel = lazy(() => import("../components/MockInterview/MockInterviewPanel"));
import CodingPracticePanel from "../components/CodingPractice/CodingPracticePanel";
const ProgressTracker = lazy(() => import("../components/ProgressTracker/ProgressTracker"));
import { COURSES, MOCK_INTERVIEWS } from "../data/dashboardData";

interface DashboardProps {
  user: User;
}

export default function Dashboard({ user }: DashboardProps) {
  const [activeTab, setActiveTab] = useState("My Course");
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  const [progress, setProgress] = useState<UserProgress[]>([]);
  const [showCelebration, setShowCelebration] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const savedProgress = localStorage.getItem(`progress_${user.id}`);
    if (savedProgress) {
      setProgress(JSON.parse(savedProgress));
    } else {
      const initialProgress = COURSES.map(c => ({ 
        courseId: c.id, 
        completed: false, 
        progress: 0,
        completedLessons: [] 
      }));
      setProgress(initialProgress);
    }
  }, [user.id]);

  const triggerConfetti = () => {
    const duration = 5 * 1000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

    const randomInRange = (min: number, max: number) => Math.random() * (max - min) + min;

    const interval: any = setInterval(function() {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      const particleCount = 50 * (timeLeft / duration);
      confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } });
      confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } });
    }, 250);
  };

  const saveProgress = (newProgress: UserProgress[]) => {
    setProgress(newProgress);
    localStorage.setItem(`progress_${user.id}`, JSON.stringify(newProgress));
  };

  const toggleLesson = (courseId: string, lessonIndex: number) => {
    const newProgress = progress.map(p => {
      if (p.courseId === courseId) {
        const currentCompletedLessons = p.completedLessons || [];
        const isLessonCompleted = currentCompletedLessons.includes(lessonIndex);
        let newCompletedLessons;
        
        if (isLessonCompleted) {
          newCompletedLessons = currentCompletedLessons.filter(l => l !== lessonIndex);
        } else {
          newCompletedLessons = [...currentCompletedLessons, lessonIndex];
        }
        
        const course = COURSES.find(c => c.id === courseId);
        const totalLessons = course ? course.lessons : 1;
        const newProgressPercentage = Math.round((newCompletedLessons.length / totalLessons) * 100);
        const isCourseCompleted = newCompletedLessons.length === totalLessons;

        if (isCourseCompleted && !p.completed) {
          setShowCelebration(true);
          triggerConfetti();
          setTimeout(() => setShowCelebration(false), 6000);
        }

        return { 
          ...p, 
          completedLessons: newCompletedLessons,
          progress: newProgressPercentage,
          completed: isCourseCompleted
        };
      }
      return p;
    });
    saveProgress(newProgress);
  };

  const toggleComplete = (courseId: string) => {
    const newProgress = progress.map(p => {
      if (p.courseId === courseId) {
        const isNowCompleted = !p.completed;
        const course = COURSES.find(c => c.id === courseId);
        const totalLessons = course ? course.lessons : 0;

        if (isNowCompleted) {
          setShowCelebration(true);
          triggerConfetti();
          setTimeout(() => setShowCelebration(false), 6000);
        }
        return { 
          ...p, 
          completed: isNowCompleted, 
          progress: isNowCompleted ? 100 : 0,
          completedLessons: isNowCompleted 
            ? Array.from({ length: totalLessons }, (_, i) => i + 1) 
            : []
        };
      }
      return p;
    });
    saveProgress(newProgress);
  };

  const getCourseProgress = (courseId: string) => {
    return progress.find(p => p.courseId === courseId);
  };

  const completedCount = progress.filter(p => p.completed).length;

  const sidebarItems = [
    { name: "My Course", icon: BookOpen },
    { name: "Coding Practice", icon: Code },
    { name: "Interview Kit", icon: Briefcase },
    { name: "Mock Interviews", icon: Video },
    { name: "Resume Downloads", icon: FileText },
    { name: "Progress Tracker", icon: BarChart3 },
  ];

  const getLessonTitle = (type: string, num: number) => {
    const titles = [
      "Introduction & Setup", "Core Concepts", "Advanced Techniques", "Best Practices", 
      "Project Setup", "Implementation Guide", "Testing Strategies", "Deployment",
      "Performance Optimization", "Security Fundamentals"
    ];
    return titles[(num - 1) % titles.length];
  };

  return (
    <div className="flex min-h-[calc(100vh-80px)] bg-slate-50/30">
      {/* Sidebar */}
      <aside className="w-72 border-r border-slate-100 bg-white p-8 hidden lg:block sticky top-20 h-[calc(100vh-80px)]">
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-brand-red flex items-center justify-center text-white shadow-lg shadow-brand-red/20">
              <Layout size={20} />
            </div>
            <div>
              <h2 className="text-lg font-bold text-slate-900 leading-none mb-1">Coademic</h2>
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Premium Portal</p>
            </div>
          </div>
        </div>

        <div className="space-y-1">
          {sidebarItems.map((item) => (
            <button
              key={item.name}
              onClick={() => setActiveTab(item.name)}
              className={`w-full flex items-center gap-3 px-5 py-4 rounded-2xl transition-all group ${
                activeTab === item.name 
                  ? "bg-slate-900 text-white shadow-xl shadow-slate-200" 
                  : "text-slate-500 hover:bg-slate-50 hover:text-slate-900"
              }`}
            >
              <item.icon size={18} className={activeTab === item.name ? "text-brand-red" : "group-hover:text-brand-red transition-colors"} />
              <span className="font-bold text-sm tracking-tight">{item.name}</span>
              {activeTab === item.name && (
                <motion.div layoutId="active-pill" className="ml-auto w-1.5 h-1.5 rounded-full bg-brand-red" />
              )}
            </button>
          ))}
        </div>

        <div className="absolute bottom-10 left-8 right-8">
          <div className="p-6 rounded-3xl bg-gradient-to-br from-brand-red to-brand-red/80 text-white relative overflow-hidden group">
            <div className="relative z-10">
              <p className="text-[10px] font-bold uppercase tracking-widest mb-2 opacity-80">Support</p>
              <h4 className="font-bold mb-4">Need help with your career?</h4>
              <button className="w-full py-2 bg-white/20 backdrop-blur-md rounded-xl text-xs font-bold hover:bg-white/30 transition-all">
                Contact Mentor
              </button>
            </div>
            <div className="absolute -right-4 -bottom-4 opacity-20 group-hover:scale-110 transition-transform">
              <Users size={80} />
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 md:p-12 relative overflow-hidden">
        {/* Background Glows */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-red/5 blur-[120px] -z-10 rounded-full" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-brand-red/5 blur-[100px] -z-10 rounded-full" />

        <div className="max-w-6xl mx-auto">
          {/* Mobile Tab Navigation */}
          <div className="md:hidden flex overflow-x-auto gap-2 pb-4 mb-6 no-scrollbar -mx-4 px-4 sticky top-20 bg-slate-50/95 backdrop-blur-sm z-20">
            {sidebarItems.map((item) => (
              <button
                key={item.name}
                onClick={() => setActiveTab(item.name)}
                className={`flex-shrink-0 flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                  activeTab === item.name 
                    ? "bg-brand-red text-white shadow-md shadow-brand-red/20" 
                    : "bg-white text-slate-600 border border-slate-100"
                }`}
              >
                <item.icon size={14} />
                {item.name}
              </button>
            ))}
          </div>

          {activeTab === "My Course" && !selectedCourse && (
            <header className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8 md:mb-10">
              <div>
                <h1 className="text-2xl md:text-4xl font-display font-bold mb-2 text-slate-900">Welcome back, {user.name.split(' ')[0]}! 👋</h1>
                <p className="text-slate-500 font-medium text-sm md:text-base">You have completed {completedCount} out of {COURSES.length} courses. Keep it up!</p>
              </div>
              <div className="flex items-center gap-3 bg-white p-2 rounded-2xl border border-slate-100 shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-brand-red/10 flex items-center justify-center text-brand-red">
                  <Award size={20} />
                </div>
                <div className="pr-4">
                  <p className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Current Streak</p>
                  <p className="text-sm font-bold text-slate-900">12 Days</p>
                </div>
              </div>
            </header>
          )}

          {activeTab === "My Course" && !selectedCourse && (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 mb-10">
              <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-2xl bg-brand-red/10 flex items-center justify-center text-brand-red mb-4">
                  <BookOpen size={24} />
                </div>
                <p className="text-slate-400 text-xs font-bold uppercase tracking-wider mb-1">Courses Completed</p>
                <p className="text-2xl md:text-3xl font-bold text-slate-900">{completedCount}/{COURSES.length}</p>
                <div className="mt-4 w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                  <div 
                    className="bg-brand-red h-full rounded-full transition-all duration-1000" 
                    style={{ width: `${(completedCount / COURSES.length) * 100}%` }}
                  />
                </div>
              </div>
              <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-2xl bg-brand-red/10 flex items-center justify-center text-brand-red mb-4">
                  <Code size={24} />
                </div>
                <p className="text-slate-400 text-xs font-bold uppercase tracking-wider mb-1">Coding Score</p>
                <p className="text-2xl md:text-3xl font-bold text-slate-900">{user.codingScore || 0}</p>
                <p className="mt-2 text-xs text-slate-500 font-medium flex items-center gap-1">
                  <BarChart3 size={12} className="text-brand-red" /> Top 15% of learners
                </p>
              </div>
              <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow sm:col-span-2 md:col-span-1">
                <div className="w-12 h-12 rounded-2xl bg-brand-red/10 flex items-center justify-center text-brand-red mb-4">
                  <Video size={24} />
                </div>
                <p className="text-slate-400 text-xs font-bold uppercase tracking-wider mb-1">Mock Interviews</p>
                <p className="text-2xl md:text-3xl font-bold text-slate-900">{MOCK_INTERVIEWS.length}</p>
                <p className="mt-2 text-xs text-slate-500 font-medium flex items-center gap-1">
                  <Clock size={12} className="text-brand-red" /> 4.5 hours practiced
                </p>
              </div>
            </div>
          )}

          {activeTab === "My Course" && !selectedCourse && (
            <div className="bg-white rounded-[32px] border border-slate-100 p-10 mb-10 relative overflow-hidden group shadow-sm hover:shadow-md transition-all">
              <div className="absolute -right-20 -top-20 w-64 h-64 bg-brand-red/5 rounded-full blur-3xl group-hover:bg-brand-red/10 transition-colors" />
              
              <div className="flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
                <div className="max-w-xl">
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-red/10 rounded-full text-brand-red text-[10px] font-bold uppercase tracking-widest mb-4">
                    <Star size={12} fill="currentColor" /> GET CERTIFIED
                  </div>
                  <h2 className="text-3xl font-display font-bold text-slate-900 mb-4">Skills Certification</h2>
                  <p className="text-slate-500 font-medium leading-relaxed mb-8">
                    Take our standardized skill tests and get a certificate to showcase on your profile and LinkedIn.
                  </p>
                  <button className="px-8 py-4 bg-brand-red text-white font-bold rounded-2xl hover:bg-brand-red/90 transition-all shadow-lg shadow-brand-red/20 active:scale-95">
                    Take Skill Test
                  </button>
                </div>
                
                <div className="relative">
                  <div className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-brand-red/10 flex items-center justify-center relative">
                    <div className="absolute inset-2 rounded-full border-2 border-brand-red/20 animate-pulse" />
                    <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-brand-red flex items-center justify-center text-white shadow-xl shadow-brand-red/30">
                      <CheckCircle2 size={32} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          <div className="relative">
            {/* Celebration Animation Overlay */}
            <AnimatePresence>
              {showCelebration && (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-900/40 backdrop-blur-sm p-6"
                >
                  <motion.div 
                    initial={{ scale: 0.8, y: 20 }}
                    animate={{ scale: 1, y: 0 }}
                    exit={{ scale: 0.8, opacity: 0 }}
                    className="bg-white p-10 rounded-[40px] shadow-2xl border-4 border-brand-red max-w-md w-full text-center relative overflow-hidden"
                  >
                    <div className="absolute -top-24 -left-24 w-48 h-48 bg-brand-red/10 rounded-full blur-3xl" />
                    <div className="absolute -bottom-24 -right-24 w-48 h-48 bg-brand-red/10 rounded-full blur-3xl" />
                    
                    <div className="relative z-10">
                      <div className="w-24 h-24 bg-brand-red rounded-3xl flex items-center justify-center text-white mx-auto mb-6 shadow-xl shadow-brand-red/30 animate-bounce">
                        <Trophy size={48} />
                      </div>
                      <h2 className="text-3xl font-display font-bold text-slate-900 mb-2">Congratulations!</h2>
                      <p className="text-lg font-bold text-brand-red mb-4">Course Mastered</p>
                      <p className="text-slate-500 mb-8 leading-relaxed">
                        You've successfully completed all modules. Your certificate is now available in your profile.
                      </p>
                      <button 
                        onClick={() => setShowCelebration(false)}
                        className="w-full py-4 bg-slate-900 text-white font-bold rounded-2xl hover:bg-slate-800 transition-all active:scale-95"
                      >
                        Awesome!
                      </button>
                    </div>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>

            <div className="">
              {activeTab === "My Course" && (
                <>
                  {selectedCourse ? (
                    <motion.div 
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="space-y-6"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <button 
                          onClick={() => setSelectedCourse(null)}
                          className="flex items-center gap-2 text-slate-500 hover:text-brand-red font-bold transition-colors"
                        >
                          <ArrowLeft size={18} /> Back to Dashboard
                        </button>
                        <div className="flex items-center gap-2 px-4 py-1.5 bg-brand-red/5 border border-brand-red/10 rounded-full text-brand-red text-xs font-bold uppercase tracking-wider">
                          <Layout size={14} /> {selectedCourse.type} Track
                        </div>
                      </div>
                      
                      <div className="bg-white rounded-[32px] border border-slate-100 shadow-xl shadow-slate-200/50 overflow-hidden">
                        <div className="aspect-video w-full bg-slate-950 relative group">
                          <iframe 
                            width="100%" 
                            height="100%" 
                            src={selectedCourse.videoUrl} 
                            title={selectedCourse.title}
                            frameBorder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                            allowFullScreen
                            className="relative z-10"
                          ></iframe>
                          <div className="absolute inset-0 flex items-center justify-center bg-slate-900/20 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                            <div className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white">
                              <Play size={32} fill="currentColor" />
                            </div>
                          </div>
                        </div>
                        
                        <div className="p-10">
                          <div className="flex flex-col lg:flex-row justify-between items-start gap-8 mb-10">
                            <div className="max-w-2xl">
                              <h2 className="text-4xl font-display font-bold text-slate-900 mb-4">{selectedCourse.title}</h2>
                              <p className="text-lg text-slate-500 leading-relaxed font-medium">{selectedCourse.description}</p>
                              
                              <a 
                                href={selectedCourse.videoUrl.replace("embed/", "watch?v=")} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 mt-6 px-6 py-3 bg-slate-900 text-white rounded-xl font-bold hover:bg-slate-800 transition-colors"
                              >
                                <ExternalLink size={18} /> Watch Full Course on YouTube
                              </a>
                            </div>
                            <div className="shrink-0 w-full lg:w-auto">
                              <button 
                                onClick={() => toggleComplete(selectedCourse.id)}
                                className={`w-full lg:w-auto px-8 py-4 rounded-2xl font-bold flex items-center justify-center gap-3 transition-all shadow-lg ${
                                  getCourseProgress(selectedCourse.id)?.completed
                                    ? "bg-brand-red text-white shadow-brand-red/20"
                                    : "bg-brand-red text-white hover:bg-brand-red/90 shadow-brand-red/20"
                                }`}
                              >
                                {getCourseProgress(selectedCourse.id)?.completed ? (
                                  <><CheckCircle2 size={24} /> Course Completed</>
                                ) : (
                                  <><Award size={24} /> Mark as Complete</>
                                )}
                              </button>
                            </div>
                          </div>
                          
                          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-6 bg-slate-50 rounded-3xl border border-slate-100 mb-10">
                            <div className="space-y-1">
                              <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Format</p>
                              <p className="text-sm font-bold text-slate-900 flex items-center gap-2">
                                <Video size={14} className="text-brand-red" /> Video Lessons
                              </p>
                            </div>
                            <div className="space-y-1">
                              <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Modules</p>
                              <p className="text-sm font-bold text-slate-900 flex items-center gap-2">
                                <BookOpen size={14} className="text-brand-red" /> {selectedCourse.lessons} Units
                              </p>
                            </div>
                            <div className="space-y-1">
                              <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Resources</p>
                              <p className="text-sm font-bold text-slate-900 flex items-center gap-2">
                                <FileText size={14} className="text-brand-red" /> 12 PDFs
                              </p>
                            </div>
                            <div className="space-y-1">
                              <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Level</p>
                              <p className="text-sm font-bold text-slate-900 flex items-center gap-2">
                                <Star size={14} className="text-brand-red" /> Intermediate
                              </p>
                            </div>
                          </div>

                          {/* Lesson List */}
                          <div className="space-y-6">
                            <div className="flex items-center justify-between">
                              <h3 className="text-2xl font-display font-bold text-slate-900">Curriculum</h3>
                              <div className="flex items-center gap-3">
                                <span className="text-sm font-bold text-slate-500">
                                  {getCourseProgress(selectedCourse.id)?.completedLessons?.length || 0} of {selectedCourse.lessons} completed
                                </span>
                                <div className="w-24 h-2 bg-slate-100 rounded-full overflow-hidden">
                                  <div 
                                    className="bg-brand-red h-full rounded-full transition-all duration-500"
                                    style={{ width: `${getCourseProgress(selectedCourse.id)?.progress || 0}%` }}
                                  />
                                </div>
                              </div>
                            </div>
                            
                            <div className="grid gap-3">
                              {Array.from({ length: selectedCourse.lessons }, (_, i) => i + 1).map((lessonNum) => {
                                const isCompleted = getCourseProgress(selectedCourse.id)?.completedLessons?.includes(lessonNum);
                                return (
                                  <button 
                                    key={lessonNum}
                                    onClick={() => toggleLesson(selectedCourse.id, lessonNum)}
                                    className={`w-full flex items-center justify-between p-5 rounded-2xl border-2 transition-all text-left group ${
                                      isCompleted 
                                        ? "bg-brand-red/5 border-brand-red/10" 
                                        : "bg-white border-slate-50 hover:border-brand-red/20 hover:shadow-md"
                                    }`}
                                  >
                                    <div className="flex items-center gap-5">
                                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center border-2 transition-all ${
                                        isCompleted 
                                          ? "bg-brand-red border-brand-red text-white" 
                                          : "bg-slate-50 border-slate-100 text-slate-300 group-hover:border-brand-red/20 group-hover:text-brand-red/40"
                                      }`}>
                                        {isCompleted ? <CheckCircle2 size={20} /> : <span className="text-sm font-bold">{lessonNum}</span>}
                                      </div>
                                      <div>
                                        <span className={`font-bold block text-lg ${isCompleted ? "text-brand-red" : "text-slate-800"}`}>
                                          {getLessonTitle(selectedCourse.type, lessonNum)}
                                        </span>
                                        <div className="flex items-center gap-3 mt-1">
                                          <span className="text-xs text-slate-400 font-bold flex items-center gap-1">
                                            <Clock size={12} /> 15:00
                                          </span>
                                          <span className="text-xs text-slate-400 font-bold flex items-center gap-1">
                                            <Video size={12} /> Video
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                    <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${
                                      isCompleted ? "bg-brand-red/10 text-brand-red" : "bg-slate-100 text-slate-400 group-hover:bg-brand-red group-hover:text-white"
                                    }`}>
                                      <Play size={16} fill="currentColor" />
                                    </div>
                                  </button>
                                );
                              })}
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ) : (
                    <>
                      <div className="flex items-center justify-between mb-8">
                        <h2 className="text-2xl font-display font-bold text-slate-900">Your Learning Path</h2>
                        <div className="flex gap-2">
                          <button className="px-4 py-2 bg-white border border-slate-100 rounded-xl text-xs font-bold text-slate-600 shadow-sm">All Courses</button>
                          <button className="px-4 py-2 bg-slate-900 rounded-xl text-xs font-bold text-white shadow-sm">In Progress</button>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        {COURSES.map((course) => (
                          <motion.div 
                            key={course.id} 
                            whileHover={{ y: -5 }}
                            className="bg-white rounded-[32px] border border-slate-100 p-8 group hover:border-brand-red/20 transition-all shadow-sm hover:shadow-xl hover:shadow-slate-200/50"
                          >
                            <div className="flex items-start justify-between mb-6">
                              <div className="w-16 h-16 rounded-2xl bg-slate-50 flex items-center justify-center relative group-hover:bg-brand-red/5 transition-colors">
                                <Code size={28} className="text-slate-400 group-hover:text-brand-red transition-colors" />
                                {getCourseProgress(course.id)?.completed && (
                                  <div className="absolute -top-2 -right-2 bg-brand-red text-white rounded-full p-1 border-4 border-white shadow-lg">
                                    <CheckCircle2 size={12} />
                                  </div>
                                )}
                              </div>
                              <div className="text-right">
                                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-1">Progress</span>
                                <span className="text-lg font-bold text-slate-900">{getCourseProgress(course.id)?.progress || 0}%</span>
                              </div>
                            </div>
                            
                            <h3 className="text-2xl font-display font-bold text-slate-900 mb-3 group-hover:text-brand-red transition-colors">{course.title}</h3>
                            <p className="text-slate-500 text-sm font-medium mb-8 line-clamp-2 leading-relaxed">{course.description}</p>
                            
                            <div className="space-y-6">
                              <div className="w-full bg-slate-100 h-2.5 rounded-full overflow-hidden">
                                <div 
                                  className="bg-brand-red h-full rounded-full transition-all duration-1000" 
                                  style={{ width: `${getCourseProgress(course.id)?.progress || 0}%` }}
                                />
                              </div>
                              
                              <div className="flex items-center justify-between">
                                <div className="flex items-center gap-4">
                                  <div className="flex items-center gap-1.5 text-xs font-bold text-slate-400">
                                    <BookOpen size={14} /> {course.lessons} Lessons
                                  </div>
                                  <div className="flex items-center gap-1.5 text-xs font-bold text-slate-400">
                                    <Clock size={14} /> 6h 30m
                                  </div>
                                </div>
                                <div className="flex items-center gap-2">
                                  <button 
                                    onClick={() => setSelectedCourse(course)}
                                    className={`px-6 py-3 rounded-xl font-bold text-sm transition-all flex items-center gap-2 ${
                                      getCourseProgress(course.id)?.completed
                                        ? "bg-brand-red/10 text-brand-red hover:bg-brand-red/20"
                                        : "bg-slate-900 text-white hover:bg-brand-red shadow-lg shadow-slate-200"
                                    }`}
                                  >
                                    {getCourseProgress(course.id)?.completed ? "Review Course" : "Continue Learning"}
                                    <ChevronRight size={16} />
                                  </button>
                                  {getCourseProgress(course.id)?.completed && (
                                    <button 
                                      onClick={(e) => {
                                        e.stopPropagation();
                                        setShowCelebration(true);
                                        triggerConfetti();
                                        setTimeout(() => setShowCelebration(false), 6000);
                                      }}
                                      className="p-3 bg-brand-red/10 text-brand-red rounded-xl hover:bg-brand-red/20 transition-all"
                                      title="Re-watch Celebration"
                                    >
                                      <Trophy size={18} />
                                    </button>
                                  )}
                                </div>
                              </div>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </>
                  )}
                </>
              )}

              {activeTab === "Coding Practice" && (
                <CodingPracticePanel />
              )}

              {activeTab === "Interview Kit" && (
                <InterviewKit />
              )}

              {activeTab === "Resume Downloads" && (
                <ResumeDownloads />
              )}

              {activeTab === "Mock Interviews" && (
                <Suspense fallback={<div className="p-8 text-center text-slate-500">Loading interview module...</div>}>
                  <MockInterviewPanel />
                </Suspense>
              )}

              {activeTab === "Progress Tracker" && (
                <Suspense fallback={<div className="p-8 text-center text-slate-500">Loading charts...</div>}>
                  <ProgressTracker user={user} />
                </Suspense>
              )}

              {activeTab !== "My Course" && activeTab !== "Mock Interviews" && activeTab !== "Coding Practice" && activeTab !== "Interview Kit" && activeTab !== "Progress Tracker" && (
                <div className="flex flex-col items-center justify-center py-20 text-center">
                  <div className="w-20 h-20 rounded-3xl bg-slate-50 flex items-center justify-center mb-6">
                    <History className="text-slate-300" size={40} />
                  </div>
                  <h3 className="text-2xl font-display font-bold mb-2 text-slate-900">Coming Soon</h3>
                  <p className="text-slate-500 max-w-xs font-medium">We are currently building the {activeTab} feature for you. Stay tuned!</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
