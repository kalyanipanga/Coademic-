import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
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

  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
    setLoading(false);
  }, []);

  const handleLogin = (userData: User) => {
    setUser(userData);
    localStorage.setItem("user", JSON.stringify(userData));
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  if (loading) return null;

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
