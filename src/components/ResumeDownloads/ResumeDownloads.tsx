import React from "react";
import { motion } from "motion/react";
import { FileText, Download, CheckCircle2, ChevronRight, Star, Info, ExternalLink } from "lucide-react";
import { ATS_TIPS_DATA } from "../../data/interviewKitData";

const RESUME_TEMPLATES = [
  {
    id: "tech-minimal",
    name: "Tech Minimalist",
    description: "Perfect for software engineers. Clean, single-column, ATS-optimized.",
    preview: "https://picsum.photos/seed/resume1/400/600",
    rating: 4.9,
    downloads: "12k+"
  },
  {
    id: "modern-creative",
    name: "Modern Creative",
    description: "Great for designers and frontend devs. Subtle colors, elegant layout.",
    preview: "https://picsum.photos/seed/resume2/400/600",
    rating: 4.8,
    downloads: "8k+"
  },
  {
    id: "executive-pro",
    name: "Executive Professional",
    description: "Classic two-column layout for senior roles and management.",
    preview: "https://picsum.photos/seed/resume3/400/600",
    rating: 4.7,
    downloads: "5k+"
  }
];

export default function ResumeDownloads() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-10"
    >
      <header>
        <h1 className="text-3xl font-display font-bold text-slate-900 mb-2">Resume Kit</h1>
        <p className="text-slate-600 font-medium">Download ATS-optimized templates and master the art of resume building.</p>
      </header>

      {/* ATS Tips Section - Moved from Interview Kit */}
      <section className="space-y-6">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-xl bg-brand-red/10 flex items-center justify-center text-brand-red">
            <Info size={20} />
          </div>
          <h2 className="text-2xl font-display font-bold text-slate-900">ATS & Resume Tips</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {ATS_TIPS_DATA.map((tip, i) => (
            <motion.div 
              key={tip.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
              className="luxury-card p-8 group relative overflow-hidden bg-white"
            >
              <div className="absolute top-0 left-0 w-full h-1.5 bg-brand-red/20 group-hover:bg-brand-red transition-colors" />
              <h3 className="text-xl font-bold text-slate-900 mb-3">{tip.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-6">{tip.content}</p>
              <button className="text-brand-red font-bold text-sm flex items-center gap-2 hover:gap-3 transition-all">
                Read Full Guide <ChevronRight size={16} />
              </button>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Resume Templates Section */}
      <section className="space-y-6">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-xl bg-brand-red/10 flex items-center justify-center text-brand-red">
            <FileText size={20} />
          </div>
          <h2 className="text-xl md:text-2xl font-display font-bold text-slate-900">Premium Templates</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {RESUME_TEMPLATES.map((template, i) => (
            <motion.div 
              key={template.id}
              whileHover={{ y: -10 }}
              className="bg-white rounded-[32px] border border-slate-100 overflow-hidden shadow-sm hover:shadow-xl transition-all group"
            >
              <div className="aspect-[2/3] bg-slate-100 relative overflow-hidden">
                <img 
                  src={template.preview} 
                  alt={template.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[2px]">
                  <button className="px-6 py-3 bg-white text-slate-900 font-bold rounded-xl flex items-center gap-2 shadow-xl active:scale-95 transition-all text-sm">
                    <Download size={18} /> Download PDF
                  </button>
                </div>
              </div>
              <div className="p-5 md:p-6">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-bold text-slate-900 text-sm md:text-base">{template.name}</h4>
                  <div className="flex items-center gap-1 text-amber-500">
                    <Star size={14} fill="currentColor" />
                    <span className="text-xs font-bold">{template.rating}</span>
                  </div>
                </div>
                <p className="text-[11px] md:text-xs text-slate-500 mb-4 line-clamp-2">{template.description}</p>
                <div className="flex items-center justify-between pt-4 border-t border-slate-50">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{template.downloads} Downloads</span>
                  <button className="text-brand-red text-[10px] md:text-xs font-bold flex items-center gap-1 hover:underline">
                    Preview <ExternalLink size={12} />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Resume Checklist */}
      <section className="luxury-card p-6 md:p-10 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute -right-20 -top-20 w-64 h-64 bg-brand-red/20 rounded-full blur-3xl" />
        <div className="relative z-10">
          <h2 className="text-2xl md:text-3xl font-display font-bold mb-6">Resume Checklist</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              "Contact information is up-to-date",
              "Keywords match the job description",
              "Quantified achievements with numbers",
              "No spelling or grammatical errors",
              "Consistent formatting and fonts",
              "Saved as a PDF with a professional name",
              "LinkedIn profile is optimized",
              "Projects include GitHub links"
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-brand-red flex items-center justify-center shrink-0">
                  <CheckCircle2 size={12} />
                </div>
                <span className="text-slate-300 text-xs md:text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
}
