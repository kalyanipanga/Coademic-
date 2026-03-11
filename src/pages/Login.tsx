import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "motion/react";
import { Mail, Lock, ArrowRight } from "lucide-react";
import React from "react";

interface LoginProps {
  onLogin: (user: any) => void;
}

export default function Login({ onLogin }: LoginProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      const data = await res.json();
      if (data.success) {
        onLogin(data.user);
        navigate("/dashboard");
      } else {
        setError(data.error);
      }
    } catch (err) {
      setError("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="min-h-[calc(100vh-80px)] flex items-center justify-center p-6">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md"
      >
        <div className="luxury-card">
          <div className="flex justify-center mb-6">
            <Link to="/" className="flex items-center">
              <img 
                src="/logo.png" 
                alt="Coademic Logo" 
                className="h-12 w-auto"
                referrerPolicy="no-referrer"
              />
            </Link>
          </div>
          <div className="text-center mb-10">
            <h1 className="text-3xl font-display font-bold mb-2 text-slate-900">Welcome Back</h1>
            <p className="text-slate-600">Login to continue your preparation</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {error && (
              <div className="bg-red-50 border border-red-100 text-red-600 p-3 rounded-lg text-sm">
                {error}
              </div>
            )}

            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-600 ml-1">Email Address</label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                <input 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-white border border-slate-200 rounded-xl py-3 pl-12 pr-4 focus:outline-none focus:border-brand-red focus:ring-4 focus:ring-brand-red/5 focus:shadow-red-glow transition-all duration-300"
                  placeholder="name@example.com"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-600 ml-1">Password</label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                <input 
                  type="password" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-white border border-slate-200 rounded-xl py-3 pl-12 pr-4 focus:outline-none focus:border-brand-red focus:ring-4 focus:ring-brand-red/5 focus:shadow-red-glow transition-all duration-300"
                  placeholder="••••••••"
                  required
                />
              </div>
            </div>

            <button type="submit" className="btn-primary w-full flex items-center justify-center gap-2">
              Login <ArrowRight size={18} />
            </button>
          </form>

          <p className="text-center mt-8 text-slate-600 text-sm">
            Don't have an account?{" "}
            <Link to="/register" className="text-brand-red font-semibold hover:underline">
              Register now
            </Link>
          </p>
        </div>
      </motion.div>
    </div>
  );
}
