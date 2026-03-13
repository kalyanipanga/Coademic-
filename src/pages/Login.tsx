import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "motion/react";
import { Mail, Lock, ArrowRight, Sparkles, X } from "lucide-react";
import React from "react";
import { supabase } from "../supabase";

interface LoginProps {
  onLogin: (user: any) => void;
}

export default function Login({ onLogin }: LoginProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isGoogleLoading, setIsGoogleLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);
    try {
      const { data, error: signInError } = await supabase.auth.signInWithPassword({
        email,
        password,
      });
      
      if (signInError) throw signInError;
      
      if (data.user) {
        onLogin({ 
          id: data.user.id, 
          name: data.user.user_metadata?.name || data.user.email?.split('@')[0] || "User", 
          email: data.user.email 
        });
        navigate("/dashboard");
      }
    } catch (err: any) {
      if (String(err).includes("fetch") || err?.message?.includes("fetch")) {
        setError("Failed to connect to the server. Please check your internet connection or ensure the Supabase project is active.");
      } else {
        setError(err.message || "Failed to sign in. Please check your credentials.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    setIsGoogleLoading(true);
    setError("");
    try {
      const { error: googleError } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
          redirectTo: `${window.location.origin}/dashboard`
        }
      });
      
      if (googleError) throw googleError;
      // Note: OAuth redirects, so code below might not execute immediately
    } catch (err: any) {
      if (String(err).includes("fetch") || err?.message?.includes("fetch")) {
        setError("Failed to connect to the server. Please check your internet connection or ensure the Supabase project is active.");
      } else {
        setError(err.message || "Failed to sign in with Google.");
      }
      setIsGoogleLoading(false);
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
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute -top-20 -left-20 w-80 h-80 border-[40px] border-white rounded-full"
            />
            <motion.div 
              animate={{ y: [0, 20, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-1/4 right-10 w-20 h-20 bg-white rounded-full"
            />
            <div className="absolute bottom-10 left-10 w-40 h-1 bg-white rounded-full" />
            <div className="absolute bottom-16 left-10 w-20 h-1 bg-white rounded-full opacity-50" />
          </div>

          <div className="relative z-10 text-white">
            <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center mb-8">
              <Sparkles size={32} className="text-white" />
            </div>
            <h2 className="text-4xl font-display font-bold mb-6 leading-tight">
              Master Your <br />
              <span className="text-white/80">Coding Journey</span>
            </h2>
            <p className="text-white/70 text-lg max-w-sm">
              Access 300+ hours of courses, tutorials and live mock interviews.
            </p>
          </div>

          {/* Floating Illustration Elements */}
          <div className="mt-12 relative z-10">
            <div className="w-full h-64 bg-white/10 backdrop-blur-sm rounded-3xl border border-white/20 p-6 flex items-center justify-center">
              <div className="w-full space-y-4">
                <div className="h-4 bg-white/20 rounded-full w-3/4" />
                <div className="h-4 bg-white/20 rounded-full w-1/2" />
                <div className="h-24 bg-white/20 rounded-2xl w-full" />
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Form Area */}
        <div className="md:w-1/2 p-12 md:p-16 flex flex-col justify-center">
          <div className="mb-10">
            <h1 className="text-4xl font-display font-bold text-slate-900 mb-3">Sign in</h1>
            <p className="text-slate-500">Welcome back! Please enter your details.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
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

            <div className="flex flex-col gap-3 text-sm">
              <div className="flex items-center justify-between">
                <label className="flex items-center gap-2 text-slate-600 cursor-pointer">
                  <input type="checkbox" className="w-4 h-4 rounded border-slate-300 text-brand-red focus:ring-brand-red" />
                  Remember me
                </label>
                <div className="flex items-center gap-1">
                  <span className="text-slate-500">Forgot password?</span>
                  <Link to="/reset-password" title="Reset your password" id="reset-password-link" className="text-brand-red font-bold hover:underline">
                    Reset password
                  </Link>
                </div>
              </div>
              <div className="flex items-center gap-1">
                <span className="text-slate-500">Don't have a password yet?</span>
                <Link to="/set-password" title="Set your password" id="set-password-link" className="text-brand-red font-bold hover:underline">
                  Set password
                </Link>
              </div>
            </div>

            <button 
              type="submit" 
              disabled={isLoading || isGoogleLoading}
              className="w-full bg-brand-red text-white font-bold py-5 rounded-2xl shadow-xl shadow-brand-red/20 hover:bg-brand-red/90 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-70 disabled:hover:scale-100"
            >
              {isLoading ? (
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              ) : (
                <>Sign in <ArrowRight size={20} /></>
              )}
            </button>

            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-slate-200"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-white text-slate-500">or</span>
              </div>
            </div>

            <button 
              type="button" 
              onClick={handleGoogleLogin}
              disabled={isLoading || isGoogleLoading}
              className="w-full bg-white border border-slate-200 text-slate-700 font-bold py-4 rounded-2xl hover:bg-slate-50 hover:border-slate-300 transition-all duration-300 flex items-center justify-center gap-3 disabled:opacity-70 disabled:hover:scale-100"
            >
              {isGoogleLoading ? (
                <div className="w-5 h-5 border-2 border-slate-300 border-t-brand-red rounded-full animate-spin" />
              ) : (
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                </svg>
              )}
              Continue with Google
            </button>
          </form>

          <div className="mt-12 pt-8 border-t border-slate-100">
            <p className="text-center text-slate-600">
              Don't have an account?{" "}
              <Link to="/register" className="text-brand-red font-bold hover:underline">
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
