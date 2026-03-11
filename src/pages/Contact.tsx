import React, { useState } from "react";
import { motion } from "motion/react";
import { Mail, MapPin, Phone, Send } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `*New Contact Form Submission*%0A%0A*Name:* ${formData.firstName} ${formData.lastName}%0A*Email:* ${formData.email}%0A%0A*Message:*%0A${formData.message}`;
    window.open(`https://wa.me/918096923496?text=${text}`, '_blank');
  };

  return (
    <div className="py-24 px-6 max-w-7xl mx-auto bg-white min-h-screen">
      <div className="grid lg:grid-cols-2 gap-16">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <h1 className="text-5xl font-display font-bold mb-6 text-slate-900">Get in <span className="text-brand-red">Touch</span></h1>
          <p className="text-xl text-slate-600 mb-12">
            Have questions about our plans or need technical support? Our team is here to help you on your journey.
          </p>
          
          <div className="space-y-8">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-brand-red/10 flex items-center justify-center text-brand-red">
                <Mail size={24} />
              </div>
              <div>
                <h3 className="font-bold text-slate-900">Email Us</h3>
                <p className="text-slate-600">coademic.edu@gmail.com</p>
                <p className="text-slate-600">coademic.info@gmail.com</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-brand-red/10 flex items-center justify-center text-brand-red">
                <Phone size={24} />
              </div>
              <div>
                <h3 className="font-bold text-slate-900">Call Us</h3>
                <p className="text-slate-600">+91 80969 23496</p>
                <p className="text-slate-600">+91 97005 24789</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-brand-red/10 flex items-center justify-center text-brand-red">
                <MapPin size={24} />
              </div>
              <div>
                <h3 className="font-bold text-slate-900">Visit Us</h3>
                <p className="text-slate-600">Guntur, Andhra Pradesh, India</p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="luxury-card"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-600">First Name</label>
                <input 
                  type="text" 
                  required
                  value={formData.firstName}
                  onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                  className="w-full bg-white border border-slate-200 rounded-xl py-3 px-4 focus:outline-none focus:border-brand-red focus:ring-4 focus:ring-brand-red/5 focus:shadow-red-glow transition-all duration-300" 
                  placeholder="John" 
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-600">Last Name</label>
                <input 
                  type="text" 
                  required
                  value={formData.lastName}
                  onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                  className="w-full bg-white border border-slate-200 rounded-xl py-3 px-4 focus:outline-none focus:border-brand-red focus:ring-4 focus:ring-brand-red/5 focus:shadow-red-glow transition-all duration-300" 
                  placeholder="Doe" 
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-600">Email Address</label>
              <input 
                type="email" 
                required
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                className="w-full bg-white border border-slate-200 rounded-xl py-3 px-4 focus:outline-none focus:border-brand-red focus:ring-4 focus:ring-brand-red/5 focus:shadow-red-glow transition-all duration-300" 
                placeholder="john@example.com" 
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-600">Message</label>
              <textarea 
                rows={4} 
                required
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                className="w-full bg-white border border-slate-200 rounded-xl py-3 px-4 focus:outline-none focus:border-brand-red focus:ring-4 focus:ring-brand-red/5 focus:shadow-red-glow transition-all duration-300" 
                placeholder="How can we help you?"
              ></textarea>
            </div>
            <button type="submit" className="btn-primary w-full flex items-center justify-center gap-2">
              Send Message <Send size={18} />
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
}
