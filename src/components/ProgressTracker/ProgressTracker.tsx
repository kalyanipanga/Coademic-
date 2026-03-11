import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  PieChart, Pie, Cell, Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis
} from "recharts";
import { 
  Trophy, Target, Zap, TrendingUp, 
  CheckCircle2, Clock, Award, Star,
  BookOpen, Code, Briefcase, Video,
  History
} from "lucide-react";
import { User, UserProgress } from "../../types";
import { COURSES, MOCK_INTERVIEWS, PRACTICE_TRACKS } from "../../data/dashboardData";
import { DSA_QUESTIONS } from "../../data/dsaQuestions";

interface ProgressTrackerProps {
  user: User;
}

export default function ProgressTracker({ user }: ProgressTrackerProps) {
  const [courseProgress, setCourseProgress] = useState<UserProgress[]>([]);
  const [dsaProgress, setDsaProgress] = useState<string[]>([]);
  const [interviewKitProgress, setInterviewKitProgress] = useState<string[]>([]);
  const [codingTracksProgress, setCodingTracksProgress] = useState<any[]>(PRACTICE_TRACKS);
  const [isClient, setIsClient] = useState(false);
  const [activeStudents, setActiveStudents] = useState(1248);

  useEffect(() => {
    setIsClient(true);
    // Load all progress data
    const savedCourse = localStorage.getItem(`progress_${user.id}`);
    if (savedCourse) setCourseProgress(JSON.parse(savedCourse));

    const savedDsa = localStorage.getItem("ide_completed_questions");
    if (savedDsa) setDsaProgress(JSON.parse(savedDsa));

    const savedInterview = localStorage.getItem("interview_kit_progress");
    if (savedInterview) setInterviewKitProgress(JSON.parse(savedInterview));

    const savedTracks = localStorage.getItem("coding_practice_tracks");
    if (savedTracks) setCodingTracksProgress(JSON.parse(savedTracks));

    // Update active students based on current hour
    const updateStudents = () => {
      const now = new Date();
      // Base number around 1000
      const base = 1000;
      // Peak at midday (12-14), lower at night
      const hourVariation = Math.sin((now.getHours() - 6) * Math.PI / 12) * 800; 
      // Add some pseudo-randomness based on the current hour so it's stable within the hour
      const pseudoRandom = (now.getHours() * 137 + now.getDate() * 73) % 300;
      
      setActiveStudents(Math.max(200, Math.floor(base + hourVariation + pseudoRandom)));
    };

    updateStudents();
    
    // Check every minute if the hour has changed
    const interval = setInterval(updateStudents, 60000);
    return () => clearInterval(interval);
  }, [user.id]);

  // Calculations
  const totalLessons = COURSES.reduce((acc, c) => acc + c.lessons, 0);
  const completedLessons = courseProgress.reduce((acc, p) => acc + (p.completedLessons?.length || 0), 0);
  const courseCompletionRate = Math.round((completedLessons / totalLessons) * 100) || 0;

  const dsaCompletionRate = Math.round((dsaProgress.length / DSA_QUESTIONS.length) * 100) || 0;
  
  const totalTrackProblems = codingTracksProgress.reduce((acc, t) => acc + t.problems, 0);
  const completedTrackProblems = codingTracksProgress.reduce((acc, t) => acc + t.completed, 0);
  const trackCompletionRate = Math.round((completedTrackProblems / totalTrackProblems) * 100) || 0;

  // Radar Chart Data (Skills)
  const skillData = [
    { subject: 'DSA', A: dsaCompletionRate, fullMark: 100 },
    { subject: 'Development', A: courseCompletionRate, fullMark: 100 },
    { subject: 'Interview Prep', A: Math.min(100, interviewKitProgress.length * 5), fullMark: 100 },
    { subject: 'Practice', A: trackCompletionRate, fullMark: 100 },
    { subject: 'Mock Score', A: user.codingScore ? (user.codingScore / 10) : 0, fullMark: 100 },
  ];

  // Bar Chart Data (Weekly Activity - Mocked for now as we don't track daily activity yet)
  const activityData = [
    { name: 'Mon', hours: 2.5 },
    { name: 'Tue', hours: 4 },
    { name: 'Wed', hours: 3.5 },
    { name: 'Thu', hours: 5 },
    { name: 'Fri', hours: 2 },
    { name: 'Sat', hours: 6 },
    { name: 'Sun', hours: 4.5 },
  ];

  const COLORS = ['#E11D48', '#10B981', '#3B82F6', '#F59E0B', '#8B5CF6'];

  if (!isClient) return null;

  return (
    <div className="space-y-10">
      <header>
        <h1 className="text-3xl font-display font-bold text-slate-900 mb-2">Progress Tracker</h1>
        <p className="text-slate-600">Visualize your learning journey and career readiness.</p>
      </header>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        <div className="luxury-card p-4 md:p-6 bg-gradient-to-br from-white to-slate-50">
          <div className="flex items-center gap-2 md:gap-3 mb-4">
            <div className="w-8 h-8 md:w-10 md:h-10 rounded-xl bg-brand-red/10 flex items-center justify-center text-brand-red">
              <Trophy size={16} />
            </div>
            <span className="text-[10px] md:text-xs font-bold text-slate-400 uppercase tracking-wider">Rank</span>
          </div>
          <div className="flex items-baseline gap-1 md:gap-2">
            <span className="text-xl md:text-3xl font-bold text-slate-900">Top 5%</span>
          </div>
        </div>

        <div className="luxury-card p-4 md:p-6 bg-gradient-to-br from-white to-slate-50">
          <div className="flex items-center gap-2 md:gap-3 mb-4">
            <div className="w-8 h-8 md:w-10 md:h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-500">
              <Target size={16} />
            </div>
            <span className="text-[10px] md:text-xs font-bold text-slate-400 uppercase tracking-wider">Score</span>
          </div>
          <div className="flex items-baseline gap-1 md:gap-2">
            <span className="text-xl md:text-3xl font-bold text-slate-900">{user.codingScore || 0}</span>
          </div>
        </div>

        <div className="luxury-card p-4 md:p-6 bg-gradient-to-br from-white to-slate-50">
          <div className="flex items-center gap-2 md:gap-3 mb-4">
            <div className="w-8 h-8 md:w-10 md:h-10 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-500">
              <Zap size={16} />
            </div>
            <span className="text-[10px] md:text-xs font-bold text-slate-400 uppercase tracking-wider">Streak</span>
          </div>
          <div className="flex items-baseline gap-1 md:gap-2">
            <span className="text-xl md:text-3xl font-bold text-slate-900">12D</span>
          </div>
        </div>

        <div className="luxury-card p-4 md:p-6 bg-gradient-to-br from-white to-slate-50">
          <div className="flex items-center gap-2 md:gap-3 mb-4">
            <div className="w-8 h-8 md:w-10 md:h-10 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-500">
              <Award size={16} />
            </div>
            <span className="text-[10px] md:text-xs font-bold text-slate-400 uppercase tracking-wider">Certs</span>
          </div>
          <div className="flex items-baseline gap-1 md:gap-2">
            <span className="text-xl md:text-3xl font-bold text-slate-900">3</span>
          </div>
        </div>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Skill Radar */}
        <div className="luxury-card p-8">
          <h3 className="text-xl font-display font-bold text-slate-900 mb-8 flex items-center gap-2">
            <Star className="text-brand-red" size={20} /> Skill Proficiency
          </h3>
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart cx="50%" cy="50%" outerRadius="80%" data={skillData}>
                <PolarGrid stroke="#e2e8f0" />
                <PolarAngleAxis dataKey="subject" tick={{ fill: '#64748b', fontSize: 12 }} />
                <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
                <Radar
                  name="Skills"
                  dataKey="A"
                  stroke="#E11D48"
                  fill="#E11D48"
                  fillOpacity={0.5}
                />
                <Tooltip />
              </RadarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Weekly Activity */}
        <div className="luxury-card p-8">
          <div className="flex justify-between items-center mb-8">
            <h3 className="text-xl font-display font-bold text-slate-900 flex items-center gap-2">
              <Clock className="text-brand-red" size={20} /> Learning Hours
            </h3>
            <div className="flex items-center gap-2 text-sm text-slate-500 bg-slate-50 px-3 py-1.5 rounded-full border border-slate-100">
              <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="font-medium text-slate-700">{activeStudents.toLocaleString()}</span> students learning now
            </div>
          </div>
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={activityData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#94a3b8', fontSize: 12 }} />
                <YAxis axisLine={false} tickLine={false} tick={{ fill: '#94a3b8', fontSize: 12 }} />
                <Tooltip 
                  cursor={{ fill: '#f8fafc' }}
                  contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }}
                />
                <Bar dataKey="hours" fill="#E11D48" radius={[4, 4, 0, 0]} barSize={30} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Detailed Progress */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Course Progress */}
        <div className="luxury-card p-8">
          <h3 className="text-lg font-bold text-slate-900 mb-6 flex items-center gap-2">
            <BookOpen className="text-brand-red" size={18} /> Course Progress
          </h3>
          <div className="space-y-6">
            {COURSES.map(course => {
              const p = courseProgress.find(cp => cp.courseId === course.id);
              const percent = p?.progress || 0;
              return (
                <div key={course.id}>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium text-slate-700">{course.title}</span>
                    <span className="text-xs font-bold text-slate-500">{percent}%</span>
                  </div>
                  <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: `${percent}%` }}
                      className="h-full bg-brand-red"
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Practice Tracks */}
        <div className="luxury-card p-8">
          <h3 className="text-lg font-bold text-slate-900 mb-6 flex items-center gap-2">
            <Code className="text-brand-red" size={18} /> Practice Tracks
          </h3>
          <div className="space-y-6">
            {codingTracksProgress.slice(0, 3).map(track => {
              const percent = Math.round((track.completed / track.problems) * 100);
              return (
                <div key={track.id}>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium text-slate-700">{track.title}</span>
                    <span className="text-xs font-bold text-slate-500">{track.completed}/{track.problems}</span>
                  </div>
                  <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: `${percent}%` }}
                      className="h-full bg-emerald-500"
                    />
                  </div>
                </div>
              );
            })}
            {codingTracksProgress.length === 0 && (
              <p className="text-sm text-slate-400 italic">No practice data available yet.</p>
            )}
          </div>
        </div>
      </div>

      {/* Recent Activity Timeline */}
      <div className="luxury-card p-8">
        <h3 className="text-lg font-bold text-slate-900 mb-8 flex items-center gap-2">
          <History className="text-brand-red" size={18} /> Recent Activity
        </h3>
        <div className="space-y-8 relative before:absolute before:left-[17px] before:top-2 before:bottom-2 before:w-0.5 before:bg-slate-100">
          <div className="relative pl-12">
            <div className="absolute left-0 top-1 w-9 h-9 rounded-full bg-emerald-100 border-4 border-white flex items-center justify-center text-emerald-600 z-10 shadow-sm">
              <CheckCircle2 size={16} />
            </div>
            <div>
              <p className="text-sm font-bold text-slate-900">Completed "Two Sum" Problem</p>
              <p className="text-xs text-slate-500">2 hours ago • DSA Track</p>
            </div>
          </div>
          <div className="relative pl-12">
            <div className="absolute left-0 top-1 w-9 h-9 rounded-full bg-blue-100 border-4 border-white flex items-center justify-center text-blue-600 z-10 shadow-sm">
              <Video size={16} />
            </div>
            <div>
              <p className="text-sm font-bold text-slate-900">Watched "Advanced React Hooks"</p>
              <p className="text-xs text-slate-500">Yesterday • Full Stack Course</p>
            </div>
          </div>
          <div className="relative pl-12">
            <div className="absolute left-0 top-1 w-9 h-9 rounded-full bg-purple-100 border-4 border-white flex items-center justify-center text-purple-600 z-10 shadow-sm">
              <Briefcase size={16} />
            </div>
            <div>
              <p className="text-sm font-bold text-slate-900">Completed Amazon Interview Prep</p>
              <p className="text-xs text-slate-500">2 days ago • Interview Kit</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
