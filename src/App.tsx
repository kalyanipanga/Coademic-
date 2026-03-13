import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { supabase } from "./supabase";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import BackgroundAnimation from "./components/BackgroundAnimation";
import CustomCursor from "./components/CustomCursor";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import IDE from "./pages/IDE";
import InterviewFeedback from "./pages/InterviewFeedback";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Workshops from "./pages/Workshops";
import Story from "./pages/Story";
import Services from "./pages/Services";
import Courses from "./pages/Courses";
import Placements from "./pages/Placements";
import WhyUs from "./pages/WhyUs";
import ResetPassword from "./pages/ResetPassword";
import SetPassword from "./pages/SetPassword";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import CookiePolicy from "./pages/CookiePolicy";
import { User } from "./types";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [supabaseError, setSupabaseError] = useState<string | null>(null);

  useEffect(() => {
    const initSession = async () => {
      try {
        const { data, error } = await supabase.auth.getSession();
        if (error) {
          console.error("Error getting session:", error);
          if (String(error).includes("fetch") || error?.message?.includes("fetch")) {
            setSupabaseError("Failed to connect to Supabase. Please check if your VITE_SUPABASE_URL is correct and the project is active.");
          }
          setLoading(false);
          return;
        }
        const session = data?.session;
        if (session?.user) {
          setUser({
            id: session.user.id,
            name: session.user.user_metadata?.name || session.user.email?.split('@')[0] || "User",
            email: session.user.email || "",
          });
        } else {
          setUser(null);
        }
      } catch (err: any) {
        console.error("Failed to fetch session:", err);
        if (String(err).includes("fetch") || err?.message?.includes("fetch")) {
          setSupabaseError("Failed to connect to Supabase. Please check if your VITE_SUPABASE_URL is correct and the project is active.");
        }
        setUser(null);
      } finally {
        setLoading(false);
      }
    };

    initSession();

    let subscription: any = null;
    try {
      const { data } = supabase.auth.onAuthStateChange((_event, session) => {
        if (session?.user) {
          setUser({
            id: session.user.id,
            name: session.user.user_metadata?.name || session.user.email?.split('@')[0] || "User",
            email: session.user.email || "",
          });
        } else {
          setUser(null);
        }
        setLoading(false);
      });
      subscription = data.subscription;
    } catch (err) {
      console.error("Failed to subscribe to auth state changes:", err);
      setLoading(false);
    }

    return () => {
      if (subscription) {
        subscription.unsubscribe();
      }
    };
  }, []);

  const handleLogin = (userData: User) => {
    setUser(userData);
  };

  const handleLogout = async () => {
    try {
      await supabase.auth.signOut();
      setUser(null);
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  if (loading) return null;

  if (supabaseError) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50 p-4">
        <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8 border border-red-100 text-center">
          <div className="w-16 h-16 bg-red-100 text-red-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Connection Error</h2>
          <p className="text-slate-600 mb-6">{supabaseError}</p>
          <div className="text-sm text-slate-500 bg-slate-50 p-4 rounded-xl text-left">
            <p className="font-semibold mb-2">How to fix:</p>
            <ol className="list-decimal pl-4 space-y-1">
              <li>Open the AI Studio Settings menu</li>
              <li>Go to the Secrets panel</li>
              <li>Add <code className="bg-slate-200 px-1 rounded">VITE_SUPABASE_URL</code></li>
              <li>Add <code className="bg-slate-200 px-1 rounded">VITE_SUPABASE_ANON_KEY</code></li>
              <li>Ensure your Supabase project is not paused</li>
            </ol>
          </div>
        </div>
      </div>
    );
  }

  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col text-slate-900 relative">
        <CustomCursor />
        <BackgroundAnimation />
        <Navbar user={user} onLogout={handleLogout} />
        <main className="relative z-10 flex-grow pt-20">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login onLogin={handleLogin} />} />
            <Route path="/register" element={<Register />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/workshops" element={<Workshops />} />
            <Route path="/story" element={<Story />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/placements" element={<Placements />} />
            <Route path="/why-us" element={<WhyUs />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<TermsOfService />} />
            <Route path="/cookies" element={<CookiePolicy />} />
            <Route path="/reset-password" element={<ResetPassword />} />
            <Route path="/set-password" element={<SetPassword />} />
            <Route 
              path="/dashboard" 
              element={user ? <Dashboard user={user} /> : <Navigate to="/login" />} 
            />
            <Route 
              path="/ide" 
              element={user ? <IDE /> : <Navigate to="/login" />} 
            />
            <Route 
              path="/feedback/:id" 
              element={user ? <InterviewFeedback /> : <Navigate to="/login" />} 
            />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
