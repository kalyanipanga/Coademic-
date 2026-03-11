import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "motion/react";
import { Mail, Lock, User as UserIcon, ArrowRight, Sparkles, X } from "lucide-react";
import React from "react";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      });
      const data = await res.json();
      if (data.success) {
        navigate("/login");
      } else {
        setError(data.error);
      }
    } catch (err) {
      setError("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-slate-50">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-full max-w-5xl bg-white rounded-[40px] shadow-2xl overflow-hidden flex flex-col md:flex-row relative border border-slate-100"
      >
        {/* Close Button */}
        <Link to="/" className="absolute top-6 right-6 z-30 p-2 rounded-full bg-slate-100 text-slate-400 hover:bg-slate-200 hover:text-slate-600 transition-colors">
          <X size={20} />
        </Link>

        {/* Left Side: Illustration Area */}
        <div className="md:w-1/2 bg-brand-red p-12 flex flex-col justify-center relative overflow-hidden">
          {/* Abstract Shapes */}
          <div className="absolute top-0 left-0 w-full h-full opacity-20">
            <motion.div 
              animate={{ rotate: -360 }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              className="absolute -bottom-20 -right-20 w-80 h-80 border-[40px] border-white rounded-full"
            />
            <motion.div 
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-10 left-10 w-16 h-16 bg-white rounded-full"
            />
            <div className="absolute top-1/2 right-0 w-32 h-1 bg-white rounded-full" />
          </div>

          <div className="relative z-10 text-white">
            <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center mb-8">
              <Sparkles size={32} className="text-white" />
            </div>
            <h2 className="text-4xl font-display font-bold mb-6 leading-tight">
              Join the <br />
              <span className="text-white/80">Future of Learning</span>
            </h2>
            <p className="text-white/70 text-lg max-w-sm">
              Start your career transformation today with industry-leading mentors.
            </p>
          </div>

          {/* Floating Illustration Elements */}
          <div className="mt-12 relative z-10">
            <div className="w-full h-64 bg-white/10 backdrop-blur-sm rounded-3xl border border-white/20 p-6 flex items-center justify-center">
              <div className="w-full grid grid-cols-2 gap-4">
                <div className="h-20 bg-white/20 rounded-2xl" />
                <div className="h-20 bg-white/20 rounded-2xl" />
                <div className="h-20 bg-white/20 rounded-2xl col-span-2" />
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Form Area */}
        <div className="md:w-1/2 p-12 md:p-16 flex flex-col justify-center">
          <div className="mb-10">
            <h1 className="text-4xl font-display font-bold text-slate-900 mb-3">Create account</h1>
            <p className="text-slate-500">Join 5,000+ students building their dreams.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            {error && (
              <motion.div 
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                className="bg-red-50 border border-red-100 text-red-600 p-4 rounded-2xl text-sm flex items-center gap-2"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-red-600" />
                {error}
              </motion.div>
            )}

            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">Full Name</label>
              <div className="relative group">
                <div className="absolute left-5 top-1/2 -translate-y-1/2 w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center text-slate-400 group-focus-within:text-brand-red transition-colors">
                  <UserIcon size={18} />
                </div>
                <input 
                  type="text" 
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-slate-50 border-none rounded-2xl py-5 pl-18 pr-6 focus:outline-none focus:ring-2 focus:ring-brand-red/20 focus:bg-white transition-all duration-300 text-slate-900 placeholder:text-slate-300"
                  placeholder="John Doe"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">Email address</label>
              <div className="relative group">
                <div className="absolute left-5 top-1/2 -translate-y-1/2 w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center text-slate-400 group-focus-within:text-brand-red transition-colors">
                  <Mail size={18} />
                </div>
                <input 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-slate-50 border-none rounded-2xl py-5 pl-18 pr-6 focus:outline-none focus:ring-2 focus:ring-brand-red/20 focus:bg-white transition-all duration-300 text-slate-900 placeholder:text-slate-300"
                  placeholder="Enter your email"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">Password</label>
              <div className="relative group">
                <div className="absolute left-5 top-1/2 -translate-y-1/2 w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center text-slate-400 group-focus-within:text-brand-red transition-colors">
                  <Lock size={18} />
                </div>
                <input 
                  type="password" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-slate-50 border-none rounded-2xl py-5 pl-18 pr-6 focus:outline-none focus:ring-2 focus:ring-brand-red/20 focus:bg-white transition-all duration-300 text-slate-900 placeholder:text-slate-300"
                  placeholder="••••••••"
                  required
                />
              </div>
            </div>

            <div className="pt-2">
              <button 
                type="submit" 
                className="w-full bg-brand-red text-white font-bold py-5 rounded-2xl shadow-xl shadow-brand-red/20 hover:bg-brand-red/90 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 flex items-center justify-center gap-2"
              >
                Create account <ArrowRight size={20} />
              </button>
            </div>
          </form>

          <div className="mt-10 pt-8 border-t border-slate-100">
            <p className="text-center text-slate-600">
              Already have an account?{" "}
              <Link to="/login" className="text-brand-red font-bold hover:underline">
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
