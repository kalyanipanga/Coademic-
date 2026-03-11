import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { Mail, ArrowRight, Sparkles, X, CheckCircle2 } from "lucide-react";
import React from "react";

export default function ResetPassword() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-slate-50">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-full max-w-md bg-white rounded-[40px] shadow-2xl p-10 relative border border-slate-100"
      >
        <Link to="/login" className="absolute top-6 right-6 p-2 rounded-full bg-slate-100 text-slate-400 hover:bg-slate-200 hover:text-slate-600 transition-colors">
          <X size={20} />
        </Link>

        <div className="text-center mb-10">
          <div className="w-16 h-16 rounded-2xl bg-brand-red/10 flex items-center justify-center mx-auto mb-6">
            <Sparkles size={32} className="text-brand-red" />
          </div>
          <h1 className="text-3xl font-display font-bold text-slate-900 mb-3">Reset Password</h1>
          <p className="text-slate-500">Enter your email to receive a reset link.</p>
        </div>

        {isSubmitted ? (
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-8"
          >
            <div className="w-20 h-20 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 size={40} />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">Check your email</h3>
            <p className="text-slate-600 mb-8">We've sent password reset instructions to your email address.</p>
            <Link to="/login" className="text-brand-red font-bold hover:underline">
              Back to login
            </Link>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
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

            <button 
              type="submit" 
              className="w-full bg-brand-red text-white font-bold py-5 rounded-2xl shadow-xl shadow-brand-red/20 hover:bg-brand-red/90 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 flex items-center justify-center gap-2"
            >
              Send Reset Link <ArrowRight size={20} />
            </button>
          </form>
        )}
      </motion.div>
    </div>
  );
}
