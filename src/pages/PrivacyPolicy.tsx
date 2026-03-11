import { motion } from "motion/react";
import { ShieldCheck } from "lucide-react";

export default function PrivacyPolicy() {
  return (
    <div className="py-24 px-6 max-w-4xl mx-auto bg-white min-h-screen">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-8"
      >
        <div className="flex items-center gap-4 mb-8">
          <div className="w-16 h-16 rounded-2xl bg-brand-red/10 flex items-center justify-center text-brand-red">
            <ShieldCheck size={32} />
          </div>
          <div>
            <h1 className="text-4xl font-display font-bold text-slate-900">Privacy <span className="text-brand-red">Policy</span></h1>
            <p className="text-slate-500">Last updated: March 05, 2026</p>
          </div>
        </div>

        <section className="space-y-4">
          <h2 className="text-xl font-bold text-slate-900">1. Data Collection</h2>
          <p className="text-slate-600 leading-relaxed">
            We collect basic information like your name, email, and usage data to provide and improve our educational services.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-bold text-slate-900">2. Usage</h2>
          <p className="text-slate-600 leading-relaxed">
            Your data is used to manage your account, provide mock interviews, and communicate important updates. We do not sell your personal data.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-bold text-slate-900">3. Security</h2>
          <p className="text-slate-600 leading-relaxed">
            We use industry-standard security measures to protect your information from unauthorized access.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-bold text-slate-900">4. Contact</h2>
          <p className="text-slate-600 leading-relaxed">
            Questions? Email us at coademic.edu@gmail.com
          </p>
        </section>
      </motion.div>
    </div>
  );
}
