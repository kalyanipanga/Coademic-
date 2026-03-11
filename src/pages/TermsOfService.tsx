import { motion } from "motion/react";
import { FileText } from "lucide-react";

export default function TermsOfService() {
  return (
    <div className="py-24 px-6 max-w-4xl mx-auto bg-white min-h-screen">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-8"
      >
        <div className="flex items-center gap-4 mb-8">
          <div className="w-16 h-16 rounded-2xl bg-brand-red/10 flex items-center justify-center text-brand-red">
            <FileText size={32} />
          </div>
          <div>
            <h1 className="text-4xl font-display font-bold text-slate-900">Terms of <span className="text-brand-red">Service</span></h1>
            <p className="text-slate-500">Last updated: March 05, 2026</p>
          </div>
        </div>

        <section className="space-y-4">
          <h2 className="text-xl font-bold text-slate-900">1. Acceptance</h2>
          <p className="text-slate-600 leading-relaxed">
            By using Coademic, you agree to these terms. If you disagree, please do not use our services.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-bold text-slate-900">2. User Conduct</h2>
          <p className="text-slate-600 leading-relaxed">
            You agree to use our platform for lawful purposes only. Harassment or misuse of the service is strictly prohibited.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-bold text-slate-900">3. Accounts</h2>
          <p className="text-slate-600 leading-relaxed">
            You are responsible for maintaining the confidentiality of your account and password.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-bold text-slate-900">4. Liability</h2>
          <p className="text-slate-600 leading-relaxed">
            Coademic is provided "as is" without warranties. We are not liable for any damages arising from your use of the service.
          </p>
        </section>
      </motion.div>
    </div>
  );
}
