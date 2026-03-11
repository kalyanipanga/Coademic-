import { useState, FormEvent } from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { 
  Phone, Mail, Linkedin, Instagram, MessageCircle, 
  ArrowRight, MapPin, CheckCircle2 
} from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubscribe = (e: FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus("loading");
    // Simulate API call
    setTimeout(() => {
      setStatus("success");
      setEmail("");
      setTimeout(() => setStatus("idle"), 5000);
    }, 1500);
  };

  return (
    <footer className="bg-white text-slate-900 pt-20 pb-10 px-6 overflow-hidden relative border-t border-slate-100">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-brand-red/10" />
      <div className="absolute -top-24 -right-24 w-64 h-64 bg-brand-red/5 rounded-full blur-3xl" />
      <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-slate-100 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Column 1: Brand */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-2 text-2xl font-bold tracking-tight">
              <div className="w-10 h-10 rounded-xl bg-brand-red flex items-center justify-center text-white shadow-lg font-mono text-lg">
                &lt;/_
              </div>
              <span className="text-slate-900"><span className="text-brand-red">Co</span>ademic</span>
            </Link>
            <p className="text-slate-500 text-sm leading-relaxed max-w-xs">
              Empowering innovation through industry-driven education and career-accelerating technology solutions. Bridging the gap between classrooms and careers.
            </p>
            <div className="flex items-center gap-4 pt-2">
              <a href="#" className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-brand-red hover:text-white transition-all duration-300">
                <Linkedin size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-brand-red hover:text-white transition-all duration-300">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-brand-red hover:text-white transition-all duration-300">
                <MessageCircle size={20} />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-6">
            <h3 className="text-lg font-bold text-slate-900 relative inline-block">
              Quick Links
              <div className="absolute -bottom-2 left-0 w-12 h-1 bg-brand-red rounded-full" />
            </h3>
            <ul className="space-y-3">
              {[
                { name: "Home", path: "/" },
                { name: "About Us", path: "/about" },
                { name: "Our Story", path: "/story" },
                { name: "Services", path: "/services" },
                { name: "Courses", path: "/courses" },
                { name: "Placements", path: "/placements" },
                { name: "Contact Us", path: "/contact" },
                { name: "Workshops", path: "/workshops" }
              ].map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.path} 
                    className="text-slate-500 hover:text-brand-red hover:translate-x-1 transition-all duration-300 flex items-center gap-2 group text-sm"
                  >
                    <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity text-brand-red" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact Information */}
          <div className="space-y-6">
            <h3 className="text-lg font-bold text-slate-900 relative inline-block">
              Contact Information
              <div className="absolute -bottom-2 left-0 w-12 h-1 bg-brand-red rounded-full" />
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-slate-600">
                <div className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center shrink-0 text-brand-red">
                  <Phone size={16} />
                </div>
                <div className="space-y-1">
                  <p>+91 80969 23496</p>
                </div>
              </li>
              <li className="flex items-center gap-3 text-sm text-slate-600">
                <div className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center shrink-0 text-brand-red">
                  <Mail size={16} />
                </div>
                <div className="space-y-1">
                  <p>coademic.edu@gmail.com</p>
                  <p>coademic.info@gmail.com</p>
                </div>
              </li>
              <li className="flex items-start gap-3 text-sm text-slate-600">
                <div className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center shrink-0 text-brand-red">
                  <MapPin size={16} />
                </div>
                <p>Guntur, Andhra Pradesh, India</p>
              </li>
            </ul>
          </div>

          {/* Column 4: Connect With Us */}
          <div className="space-y-6">
            <h3 className="text-lg font-bold text-slate-900 relative inline-block">
              Connect With Us
              <div className="absolute -bottom-2 left-0 w-12 h-1 bg-brand-red rounded-full" />
            </h3>
            <p className="text-slate-500 text-sm">
              Stay updated with our latest workshops, courses, and industry news.
            </p>
            <div className="space-y-4">
              <button className="w-full py-3 bg-brand-red text-white font-bold rounded-xl hover:bg-brand-red/90 transition-all active:scale-95 shadow-lg shadow-brand-red/20">
                Join Our Community
              </button>
              <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
                <p className="text-[10px] uppercase tracking-widest font-bold text-slate-400 mb-2">Newsletter</p>
                {status === "success" ? (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-2 text-emerald-600 font-medium text-xs py-1"
                  >
                    <CheckCircle2 size={16} />
                    Subscribed successfully!
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubscribe} className="flex gap-2">
                    <input 
                      type="email" 
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Email Address" 
                      required
                      className="bg-transparent border-b border-slate-200 text-xs py-1 focus:outline-none focus:border-brand-red w-full placeholder:text-slate-400"
                    />
                    <button 
                      type="submit"
                      disabled={status === "loading"}
                      className="text-brand-red hover:scale-110 transition-transform disabled:opacity-50"
                    >
                      {status === "loading" ? (
                        <div className="w-4 h-4 border-2 border-brand-red border-t-transparent rounded-full animate-spin" />
                      ) : (
                        <ArrowRight size={18} />
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-10 border-t border-slate-100 flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-slate-400 font-medium">
          <p>© {currentYear} Coademic. All rights reserved.</p>
          <div className="flex items-center gap-8">
            <Link to="/privacy" className="hover:text-brand-red transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-brand-red transition-colors">Terms of Service</Link>
            <Link to="/cookies" className="hover:text-brand-red transition-colors">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
