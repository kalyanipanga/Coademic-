export interface User {
  id: number;
  email: string;
  name: string;
  is_paid: boolean;
  codingScore?: number;
}

export interface AuthState {
  user: User | null;
  loading: boolean;
}

export interface InterviewFeedback {
  id: string;
  interviewId: string;
  codingScore: number;
  communicationScore: number;
  overallScore: number;
  codingAnalysis: string;
  communicationAnalysis: string;
  strengths: string[];
  improvements: string[];
  date: string;
}

export interface MockInterview {
  id: string;
  title: string;
  date: string;
  status: 'completed' | 'scheduled' | 'cancelled';
  feedbackId?: string;
}

export interface Course {
  id: string;
  title: string;
  description: string;
  videoUrl: string;
  type: 'Software' | 'Hardware' | 'IT';
  lessons: number;
}

export interface UserProgress {
  courseId: string;
  completed: boolean;
  progress: number;
  completedLessons: number[];
}

export interface Assignment {
  id: string;
  title: string;
  description: string;
  completed: boolean;
}

export interface PracticeTrack {
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
