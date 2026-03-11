import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Mail, MapPin, Phone, Send, Linkedin, Instagram, 
  Twitter, Clock, ChevronDown, MessageCircle, 
  CheckCircle2, Sparkles, Globe
} from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: ""
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `*New Contact Form Submission*%0A%0A*Name:* ${formData.firstName} ${formData.lastName}%0A*Email:* ${formData.email}%0A%0A*Message:*%0A${formData.message}`;
    window.open(`https://wa.me/918096923496?text=${text}`, '_blank');
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const faqs = [
    {
      q: "How long does it take to get a response?",
      a: "Our team typically responds within 2-4 business hours. For urgent placement queries, we recommend reaching out via WhatsApp."
    },
    {
      q: "Can I schedule a 1-on-1 counseling session?",
      a: "Yes! You can book a free 15-minute counseling session with our experts. Just mention 'Counseling' in your message."
    },
    {
      q: "Do you offer corporate training programs?",
      a: "We do offer customized training modules for colleges and corporate teams. Contact us at coademic.info@gmail.com for a proposal."
    },
    {
      q: "Where is the office located?",
      a: "Our main operations are based in Guntur, Andhra Pradesh, but we serve students globally through our online platform."
    }
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <div className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none">
          <div className="absolute top-20 left-10 animate-float"><Sparkles size={40} /></div>
          <div className="absolute bottom-20 right-10 animate-float" style={{ animationDelay: '2s' }}><Globe size={60} /></div>
        </div>
        
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block px-4 py-1 rounded-full bg-brand-red/10 text-brand-red text-xs font-bold tracking-widest mb-6"
          >
            CONTACT US
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-display font-bold mb-6 text-slate-900"
          >
            Let's Start a <span className="text-brand-red italic">Conversation</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-slate-600 max-w-2xl mx-auto"
          >
            Whether you're a student looking to crack interviews or a partner interested in collaboration, we're just a message away.
          </motion.p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 pb-32">
        <div className="grid lg:grid-cols-12 gap-16">
          {/* Left Column: Info */}
          <div className="lg:col-span-5 space-y-12">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="flex items-start gap-6 group">
                <div className="w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center text-brand-red group-hover:bg-brand-red group-hover:text-white transition-all duration-300 shadow-sm">
                  <Mail size={28} />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-lg mb-1">Email Support</h3>
                  <p className="text-slate-600">coademic.edu@gmail.com</p>
                  <p className="text-slate-400 text-sm">Response within 4 hours</p>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center text-brand-red group-hover:bg-brand-red group-hover:text-white transition-all duration-300 shadow-sm">
                  <MessageCircle size={28} />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-lg mb-1">WhatsApp Chat</h3>
                  <p className="text-slate-600">+91 80969 23496</p>
                  <p className="text-slate-400 text-sm">Available 10 AM - 8 PM IST</p>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center text-brand-red group-hover:bg-brand-red group-hover:text-white transition-all duration-300 shadow-sm">
                  <Clock size={28} />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-lg mb-1">Office Hours</h3>
                  <p className="text-slate-600">Mon - Sat: 9:00 AM - 9:00 PM</p>
                  <p className="text-slate-600">Sunday: Closed</p>
                </div>
              </div>
            </motion.div>

            {/* Social Links */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-8 rounded-[32px] bg-slate-950 text-white relative overflow-hidden"
            >
              <div className="relative z-10">
                <h3 className="font-bold text-xl mb-6">Follow our Journey</h3>
                <div className="flex gap-4">
                  {[
                    { icon: Linkedin, label: "LinkedIn", color: "hover:bg-blue-600" },
                    { icon: Instagram, label: "Instagram", color: "hover:bg-pink-600" },
                    { icon: Twitter, label: "Twitter", color: "hover:bg-sky-500" }
                  ].map((social, i) => (
                    <a 
                      key={i}
                      href="#" 
                      className={`w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center transition-all duration-300 ${social.color} hover:scale-110`}
                      aria-label={social.label}
                    >
                      <social.icon size={20} />
                    </a>
                  ))}
                </div>
              </div>
              <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-brand-red/20 rounded-full blur-3xl"></div>
            </motion.div>
          </div>

          {/* Right Column: Form */}
          <div className="lg:col-span-7">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="luxury-card relative"
            >
              <AnimatePresence>
                {isSubmitted && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 z-20 bg-white/90 backdrop-blur-sm rounded-[32px] flex flex-col items-center justify-center text-center p-8"
                  >
                    <div className="w-20 h-20 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mb-6">
                      <CheckCircle2 size={40} />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-2">Message Sent!</h3>
                    <p className="text-slate-600">We've redirected you to WhatsApp. Our team will get back to you shortly.</p>
                    <button 
                      onClick={() => setIsSubmitted(false)}
                      className="mt-8 text-brand-red font-bold hover:underline"
                    >
                      Send another message
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 uppercase tracking-wider">First Name</label>
                    <input 
                      type="text" 
                      required
                      value={formData.firstName}
                      onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                      className="w-full bg-slate-50 border-none rounded-2xl py-4 px-6 focus:outline-none focus:ring-2 focus:ring-brand-red/20 focus:bg-white transition-all duration-300" 
                      placeholder="John" 
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 uppercase tracking-wider">Last Name</label>
                    <input 
                      type="text" 
                      required
                      value={formData.lastName}
                      onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                      className="w-full bg-slate-50 border-none rounded-2xl py-4 px-6 focus:outline-none focus:ring-2 focus:ring-brand-red/20 focus:bg-white transition-all duration-300" 
                      placeholder="Doe" 
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 uppercase tracking-wider">Email Address</label>
                  <input 
                    type="email" 
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full bg-slate-50 border-none rounded-2xl py-4 px-6 focus:outline-none focus:ring-2 focus:ring-brand-red/20 focus:bg-white transition-all duration-300" 
                    placeholder="john@example.com" 
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 uppercase tracking-wider">Your Message</label>
                  <textarea 
                    rows={5} 
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="w-full bg-slate-50 border-none rounded-2xl py-4 px-6 focus:outline-none focus:ring-2 focus:ring-brand-red/20 focus:bg-white transition-all duration-300 resize-none" 
                    placeholder="Tell us how we can help you..."
                  ></textarea>
                </div>
                <button type="submit" className="btn-primary w-full flex items-center justify-center gap-3 py-5 text-lg">
                  Send via WhatsApp <Send size={20} />
                </button>
              </form>
            </motion.div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-40">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-slate-600">Quick answers to common inquiries.</p>
          </div>
          
          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, i) => (
              <div 
                key={i}
                className="border border-slate-100 rounded-2xl overflow-hidden transition-all duration-300 hover:border-brand-red/20"
              >
                <button 
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-6 text-left bg-white hover:bg-slate-50 transition-colors"
                >
                  <span className="font-bold text-slate-800">{faq.q}</span>
                  <ChevronDown className={`text-slate-400 transition-transform duration-300 ${openFaq === i ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {openFaq === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="p-6 pt-0 text-slate-600 bg-white">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
