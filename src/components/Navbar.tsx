import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { 
  Info, BookOpen, Briefcase, GraduationCap, 
  Trophy, Star, Phone, Menu, X, LogOut, Users 
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { User } from "../types";

interface NavbarProps {
  user: User | null;
  onLogout: () => void;
}

export default function Navbar({ user, onLogout }: NavbarProps) {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", path: "/about", icon: Info },
    { name: "Our Story", path: "/story", icon: BookOpen },
    { name: "Our Services", path: "/services", icon: Briefcase },
    { name: "Courses", path: "/courses", icon: GraduationCap },
    { name: "Workshops", path: "/workshops", icon: Users },
    { name: "Placements", path: "/placements", icon: Trophy },
    { name: "Why Us", path: "/why-us", icon: Star },
    { name: "Contact", path: "/contact", icon: Phone },
  ];

  const handleNavClick = (path: string) => {
    navigate(path);
    setIsMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm' : 'bg-white'} border-b border-slate-100`}>
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group shrink-0">
            <div className="w-10 h-10 rounded-xl bg-[#C00000] text-white flex items-center justify-center font-mono text-sm font-bold shadow-lg shadow-red-900/20 group-hover:scale-105 transition-transform">
              &lt;/_
            </div>
            <span className="text-2xl font-sans font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-[#D00000] via-[#8B0000] to-black">
              Coademic
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden xl:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link 
                key={link.path} 
                to={link.path} 
                className="flex items-center gap-2 text-sm font-bold text-slate-600 hover:text-brand-red transition-colors whitespace-nowrap"
              >
                <link.icon size={16} />
                {link.name}
              </Link>
            ))}
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-6 shrink-0">
            {user ? (
              <>
                <button 
                  onClick={onLogout}
                  className="hidden sm:block text-sm font-bold text-slate-500 hover:text-slate-900 transition-colors"
                >
                  Logout
                </button>
                <button 
                  onClick={() => navigate("/dashboard")}
                  className="bg-brand-red text-white px-6 py-2.5 rounded-full text-sm font-bold hover:bg-brand-red/90 transition-all shadow-lg shadow-brand-red/20"
                >
                  Dashboard
                </button>
              </>
            ) : (
              <>
                <Link to="/login" className="hidden sm:block text-sm font-bold text-slate-600 hover:text-slate-900">
                  Login
                </Link>
                <Link 
                  to="/register" 
                  className="bg-slate-900 text-white px-6 py-2.5 rounded-full text-sm font-bold hover:bg-slate-800 transition-all shadow-lg shadow-slate-900/20"
                >
                  Get Started
                </Link>
              </>
            )}

            {/* Mobile Toggle */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="xl:hidden p-2 text-slate-600 hover:text-slate-900"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="xl:hidden bg-white border-t border-slate-100 overflow-hidden shadow-xl"
          >
            <div className="p-4 space-y-2">
              {navLinks.map((link) => (
                <button
                  key={link.path}
                  onClick={() => handleNavClick(link.path)}
                  className="w-full flex items-center gap-3 p-3 rounded-xl hover:bg-slate-50 text-slate-600 font-bold text-sm transition-colors"
                >
                  <link.icon size={18} />
                  {link.name}
                </button>
              ))}
              <div className="h-px bg-slate-100 my-2" />
              {user ? (
                <button 
                  onClick={() => {
                    onLogout();
                    setIsMenuOpen(false);
                  }}
                  className="w-full flex items-center gap-3 p-3 rounded-xl hover:bg-red-50 text-slate-500 hover:text-red-600 font-bold text-sm transition-colors"
                >
                  <LogOut size={18} />
                  Logout
                </button>
              ) : (
                <div className="flex flex-col gap-2 pt-2">
                  <button 
                    onClick={() => {
                      navigate("/login");
                      setIsMenuOpen(false);
                    }}
                    className="w-full p-3 rounded-xl hover:bg-slate-50 text-slate-600 font-bold text-sm transition-colors text-left"
                  >
                    Login
                  </button>
                  <button 
                    onClick={() => {
                      navigate("/register");
                      setIsMenuOpen(false);
                    }}
                    className="w-full p-3 rounded-xl bg-slate-900 text-white font-bold text-sm transition-colors text-center"
                  >
                    Get Started
                  </button>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
