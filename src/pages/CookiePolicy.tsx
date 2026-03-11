import { motion } from "motion/react";
import { Cookie } from "lucide-react";

export default function CookiePolicy() {
  return (
    <div className="py-24 px-6 max-w-4xl mx-auto bg-white min-h-screen">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-8"
      >
        <div className="flex items-center gap-4 mb-8">
          <div className="w-16 h-16 rounded-2xl bg-brand-red/10 flex items-center justify-center text-brand-red">
            <Cookie size={32} />
          </div>
          <div>
            <h1 className="text-4xl font-display font-bold text-slate-900">Cookie <span className="text-brand-red">Policy</span></h1>
            <p className="text-slate-500">Last updated: March 05, 2026</p>
          </div>
        </div>

        <section className="space-y-4">
          <h2 className="text-xl font-bold text-slate-900">1. What are Cookies?</h2>
          <p className="text-slate-600 leading-relaxed">
            Cookies are small text files stored on your device to help us recognize you and improve your experience.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-bold text-slate-900">2. How We Use Cookies</h2>
          <p className="text-slate-600 leading-relaxed">
            We use cookies for authentication, analytics, and to remember your preferences.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-bold text-slate-900">3. Your Choices</h2>
          <p className="text-slate-600 leading-relaxed">
            You can manage or disable cookies through your browser settings. Note that some features may not work properly without cookies.
          </p>
        </section>
      </motion.div>
    </div>
  );
}
