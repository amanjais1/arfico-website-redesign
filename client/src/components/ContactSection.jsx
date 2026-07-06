import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, RefreshCw, MessageSquare } from 'lucide-react';
import axios from 'axios';

/**
 * ContactSection Component
 * 
 * Renders the corporate Contact Us section.
 * Left: Vector blueprint map and glassmorphic contact information cards.
 * Right: An interactive contact form that displays a submission success state.
 */
export default function ContactSection({ contactSubject }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Software Development',
    message: '',
    agree: false
  });

  // Keep form's subject value in sync with state selected from the Services section
  useEffect(() => {
    if (contactSubject) {
      setFormData(prev => ({ ...prev, subject: contactSubject }));
    }
  }, [contactSubject]);
  
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message || !formData.agree) return;
    
    setIsSubmitting(true);
    setErrorMsg(null);

    try {
      const response = await axios.post('/api/contact', {
        name: formData.name,
        email: formData.email,
        subject: formData.subject,
        message: formData.message
      });

      if (response.data && response.data.success) {
        setIsSubmitted(true);
      } else {
        setErrorMsg(response.data.message || 'Submission failed.');
      }
    } catch (err) {
      if (err.response && err.response.data) {
        const result = err.response.data;
        setErrorMsg(result.errors ? result.errors.join(' | ') : result.message);
      } else {
        setErrorMsg('Failed to connect to backend server. Please verify your connection.');
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setFormData({
      name: '',
      email: '',
      subject: 'Software Development',
      message: '',
      agree: false
    });
    setErrorMsg(null);
    setIsSubmitted(false);
  };

  return (
    <section id="contact" className="relative py-24 lg:py-32 w-full transition-colors duration-300">
      
      {/* Decorative Blur Orbs for Section Depth */}
      <div className="absolute top-[30%] -right-12 w-72 h-72 bg-brand-teal-500/5 dark:bg-brand-teal-500/10 rounded-full filter blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[20%] -left-12 w-80 h-80 bg-brand-purple-500/5 dark:bg-brand-purple-500/10 rounded-full filter blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-brand-teal-50 dark:bg-brand-teal-950/20 border border-brand-teal-100 dark:border-brand-teal-900/30 mb-4">
            <MessageSquare className="w-3.5 h-3.5 text-brand-teal-600 dark:text-brand-teal-400" />
            <span className="text-[10px] tracking-widest font-extrabold text-brand-teal-700 dark:text-brand-teal-400 uppercase">
              Get In Touch
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-4 leading-tight font-sans">
            Connect With Our <span className="bg-gradient-to-r from-brand-purple-600 to-brand-teal-500 bg-clip-text text-transparent">Global Office.</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-500 dark:text-zinc-400 font-semibold leading-relaxed">
            Have an inquiry or project concept? Reach out to our consultants. Let's discuss how we can scale your digital infrastructure, engineering designs, or marketing outreach.
          </p>
        </div>

        {/* 2-Column Main Contact Container */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 xl:gap-16 items-start">
          
          {/* LEFT COLUMN: Info Cards & Vector Blueprint Map */}
          <div className="flex flex-col space-y-8">
            
            {/* Info Cards Deck */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              
              {/* Mail Info Card */}
              <div className="glass-card rounded-2xl p-5 border border-slate-200/50 dark:border-zinc-800/40 hover:border-brand-purple-500/30 dark:hover:border-brand-purple-500/30 transition-all duration-300 flex flex-col items-start hover:-translate-y-1">
                <div className="p-2.5 rounded-xl bg-brand-purple-500 text-white mb-4">
                  <Mail className="w-5 h-5" />
                </div>
                <h3 className="text-sm font-extrabold text-slate-900 dark:text-white mb-1">Email Us</h3>
                <a href="mailto:contact@arfico.com" className="text-xs font-semibold text-slate-500 dark:text-zinc-400 hover:text-brand-purple-500 dark:hover:text-brand-purple-400 break-all">
                  contact@arfico.com
                </a>
              </div>

              {/* Phone Info Card */}
              <div className="glass-card rounded-2xl p-5 border border-slate-200/50 dark:border-zinc-800/40 hover:border-brand-teal-500/30 dark:hover:border-brand-teal-500/30 transition-all duration-300 flex flex-col items-start hover:-translate-y-1">
                <div className="p-2.5 rounded-xl bg-brand-teal-600 text-white mb-4">
                  <Phone className="w-5 h-5" />
                </div>
                <h3 className="text-sm font-extrabold text-slate-900 dark:text-white mb-1">Call Support</h3>
                <a href="tel:+919472852131" className="text-xs font-semibold text-slate-500 dark:text-zinc-400 hover:text-brand-teal-500 dark:hover:text-brand-teal-400">
                  +91 9472852131
                </a>
              </div>

              {/* Address Info Card */}
              <div className="glass-card rounded-2xl p-5 border border-slate-200/50 dark:border-zinc-800/40 hover:border-brand-rose-500/30 dark:hover:border-brand-rose-500/30 transition-all duration-300 flex flex-col items-start hover:-translate-y-1">
                <div className="p-2.5 rounded-xl bg-brand-rose-500 text-white mb-4">
                  <MapPin className="w-5 h-5" />
                </div>
                <h3 className="text-sm font-extrabold text-slate-900 dark:text-white mb-1">Head Office</h3>
                <span className="text-xs font-bold text-slate-800 dark:text-zinc-200">
                  Patna, Bihar
                </span>
                <span className="text-[10px] font-semibold text-slate-500 dark:text-zinc-400 mt-1">
                  Branches: Supaul, Patna, Delhi, Mumbai
                </span>
              </div>

            </div>

            {/* Custom SVG Blueprint Map Graphic */}
            <div className="w-full h-72 rounded-2xl glass-card border border-slate-200/50 dark:border-zinc-800/40 relative overflow-hidden shadow-md">
              
              {/* Map Title Tag */}
              <div className="absolute top-4 left-4 z-10 font-mono text-[9px] tracking-wider px-2 py-1 rounded bg-slate-950/70 text-slate-300 border border-slate-800">
                HQ LOC // 25.5941° N, 85.1376° E (Patna)
              </div>

              {/* Inline SVG Map Overlay */}
              <svg className="absolute inset-0 w-full h-full stroke-slate-300 dark:stroke-zinc-800/80 fill-none" viewBox="0 0 400 300">
                {/* Micro blueprint grid background */}
                <g strokeWidth="0.3" strokeDasharray="3 3">
                  <line x1="0" y1="50" x2="400" y2="50" />
                  <line x1="0" y1="100" x2="400" y2="100" />
                  <line x1="0" y1="150" x2="400" y2="150" />
                  <line x1="0" y1="200" x2="400" y2="200" />
                  <line x1="0" y1="250" x2="400" y2="250" />
                  <line x1="50" y1="0" x2="50" y2="300" />
                  <line x1="100" y1="0" x2="100" y2="300" />
                  <line x1="150" y1="0" x2="150" y2="300" />
                  <line x1="200" y1="0" x2="200" y2="300" />
                  <line x1="250" y1="0" x2="250" y2="300" />
                  <line x1="300" y1="0" x2="300" y2="300" />
                  <line x1="350" y1="0" x2="350" y2="300" />
                </g>

                {/* Abstract grid lines representing roads/highways */}
                <g strokeWidth="2.5">
                  {/* Highway 1 */}
                  <path d="M 0,90 Q 200,90 400,180" />
                  {/* Road 2 */}
                  <path d="M 120,0 L 120,300" />
                  {/* Ring road boundary */}
                  <circle cx="240" cy="140" r="85" strokeWidth="1" strokeDasharray="5 5" />
                  {/* Connecting lanes */}
                  <path d="M 0,220 L 400,220" strokeWidth="1.5" />
                  <path d="M 300,0 L 300,300" strokeWidth="1.5" />
                  <path d="M 60,0 L 240,140" strokeWidth="1" />
                </g>

                {/* Location indicator circle */}
                <g>
                  {/* Outer animated radar pulse ring */}
                  <circle cx="240" cy="140" r="16" className="stroke-brand-purple-500 fill-brand-purple-500/10" strokeWidth="1.5">
                    <animate attributeName="r" values="8;24;8" dur="3s" repeatCount="indefinite" />
                    <animate attributeName="opacity" values="0.8;0;0.8" dur="3s" repeatCount="indefinite" />
                  </circle>
                  
                  {/* Radar ping node */}
                  <circle cx="240" cy="140" r="6" className="fill-brand-purple-500 animate-ping" />
                  <circle cx="240" cy="140" r="4.5" className="fill-brand-purple-500" />
                </g>
                
                {/* Faint scale indicators */}
                <text x="350" y="290" className="fill-slate-400 dark:fill-zinc-600 font-mono text-[8px]" stroke="none">500 m</text>
                <line x1="320" y1="287" x2="380" y2="287" strokeWidth="1" className="stroke-slate-400 dark:stroke-zinc-600" />
              </svg>
              
              {/* Compass overlay bottom right */}
              <div className="absolute bottom-4 right-4 w-12 h-12 opacity-20 dark:opacity-30">
                <svg className="w-full h-full stroke-slate-500 dark:stroke-zinc-400 fill-none" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="10" strokeWidth="0.5" />
                  <line x1="12" y1="2" x2="12" y2="22" strokeWidth="0.5" />
                  <line x1="2" y1="12" x2="22" y2="12" strokeWidth="0.5" />
                  <polygon points="12,5 14,12 12,19 10,12" strokeWidth="0.5" />
                </svg>
              </div>

            </div>

            {/* Registered Address Block */}
            <div className="glass-card rounded-2xl p-5 border border-slate-200/50 dark:border-zinc-800/40 text-xs text-slate-500 dark:text-zinc-400 font-semibold leading-relaxed relative overflow-hidden">
              <span className="block font-bold text-slate-900 dark:text-zinc-200 mb-1">
                ARFICO Pvt. Ltd. (Registered Address)
              </span>
              C/O, Ward No :- 25, MD. SHAFIUR RAHMAN, Fahim Manzil Hussain Chowk, Supaul, Bihar 852131
            </div>


          </div>

          {/* RIGHT COLUMN: Interactive Form Container */}
          <div className="relative">
            <div className="glass-card rounded-3xl p-6 sm:p-8 xl:p-10 border border-slate-200/50 dark:border-zinc-800/40 relative overflow-hidden flex flex-col">
              
              {/* Submission Success State Screen */}
              {isSubmitted ? (
                <div className="text-center py-12 px-4 flex flex-col items-center justify-center h-full">
                  <div className="relative w-20 h-20 mb-6 flex items-center justify-center rounded-2xl bg-brand-teal-50 dark:bg-brand-teal-950/20 border border-brand-teal-200 dark:border-brand-teal-900/40">
                    <CheckCircle2 className="w-12 h-12 text-brand-teal-500 animate-pulse-glow" />
                  </div>
                  
                  <h3 className="text-2xl font-extrabold text-slate-900 dark:text-white mb-3">
                    Message Dispatched!
                  </h3>
                  
                  <p className="text-sm font-semibold text-slate-500 dark:text-zinc-400 max-w-sm mb-10 leading-relaxed text-center">
                    Thank you, <strong className="text-slate-900 dark:text-zinc-200">{formData.name}</strong>. Your inquiry has been logged successfully. An Arfico consultant will contact you at <strong className="text-slate-900 dark:text-zinc-200">{formData.email}</strong> within 24 hours.
                  </p>

                  <button
                    onClick={handleReset}
                    className="inline-flex items-center justify-center px-6 py-3 border border-slate-200 dark:border-zinc-800 rounded-xl text-sm font-bold text-slate-700 dark:text-zinc-200 bg-slate-100/50 dark:bg-zinc-900/35 hover:bg-slate-100 dark:hover:bg-zinc-900 transition-colors cursor-pointer"
                  >
                    <RefreshCw className="w-4 h-4 mr-2" />
                    <span>Send Another Inquiry</span>
                  </button>
                </div>
              ) : (
                /* Main Form View */
                <form onSubmit={handleSubmit} className="space-y-6">
                  
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="w-8 h-8 rounded-lg bg-brand-purple-500 flex items-center justify-center text-white">
                      <Send className="w-4.5 h-4.5" />
                    </div>
                    <span className="font-extrabold text-slate-900 dark:text-white font-sans text-lg">
                      Send a Message
                    </span>
                  </div>

                  {errorMsg && (
                    <div className="p-4 rounded-xl bg-brand-rose-500/10 border border-brand-rose-500/30 text-xs font-semibold text-brand-rose-600 dark:text-brand-rose-400">
                      {errorMsg}
                    </div>
                  )}

                  {/* Name Input */}
                  <div>
                    <label htmlFor="name" className="block text-xs font-bold text-slate-600 dark:text-zinc-400 mb-2 uppercase tracking-wider">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      placeholder="e.g. John Doe"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-zinc-800 bg-white/50 dark:bg-zinc-950/40 text-sm font-semibold text-slate-800 dark:text-zinc-100 focus:outline-none focus:border-brand-purple-500 focus:ring-2 focus:ring-brand-purple-500/20 user-invalid:border-brand-rose-500 user-invalid:focus:ring-brand-rose-500/20 transition-all placeholder:text-slate-400 dark:placeholder:text-zinc-600"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>

                  {/* Email Input */}
                  <div>
                    <label htmlFor="email" className="block text-xs font-bold text-slate-600 dark:text-zinc-400 mb-2 uppercase tracking-wider">
                      Work Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      placeholder="name@company.com"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-zinc-800 bg-white/50 dark:bg-zinc-950/40 text-sm font-semibold text-slate-800 dark:text-zinc-100 focus:outline-none focus:border-brand-purple-500 focus:ring-2 focus:ring-brand-purple-500/20 user-invalid:border-brand-rose-500 user-invalid:focus:ring-brand-rose-500/20 transition-all placeholder:text-slate-400 dark:placeholder:text-zinc-600"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>

                  {/* Subject Selector Dropdown */}
                  <div>
                    <label htmlFor="subject" className="block text-xs font-bold text-slate-600 dark:text-zinc-400 mb-2 uppercase tracking-wider">
                      Project Area
                    </label>
                    <div className="relative">
                      <select
                        id="subject"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-zinc-800 bg-white/50 dark:bg-zinc-950/40 text-sm font-semibold text-slate-800 dark:text-zinc-100 focus:outline-none focus:border-brand-purple-500 focus:ring-2 focus:ring-brand-purple-500/20 transition-all cursor-pointer appearance-none"
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      >
                        <option value="Software Development">Software Development</option>
                        <option value="Digital Marketing">Digital Marketing</option>
                        <option value="Civil Engineering">Civil Engineering</option>
                        <option value="Business Consulting">Business Consulting</option>
                      </select>
                      <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-slate-400 dark:text-zinc-600">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Message Input */}
                  <div>
                    <label htmlFor="message" className="block text-xs font-bold text-slate-600 dark:text-zinc-400 mb-2 uppercase tracking-wider">
                      Project Details
                    </label>
                    <textarea
                      id="message"
                      required
                      rows="4"
                      placeholder="Outline your project scope or questions..."
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-zinc-800 bg-white/50 dark:bg-zinc-950/40 text-sm font-semibold text-slate-800 dark:text-zinc-100 focus:outline-none focus:border-brand-purple-500 focus:ring-2 focus:ring-brand-purple-500/20 user-invalid:border-brand-rose-500 user-invalid:focus:ring-brand-rose-500/20 resize-none transition-all placeholder:text-slate-400 dark:placeholder:text-zinc-600"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    />
                  </div>

                  {/* Terms & Privacy Custom Checkbox */}
                  <div className="flex items-start">
                    <label className="flex items-start cursor-pointer select-none group">
                      <div className="relative flex items-center mt-0.5">
                        <input
                          type="checkbox"
                          required
                          className="sr-only peer"
                          checked={formData.agree}
                          onChange={(e) => setFormData({ ...formData, agree: e.target.checked })}
                        />
                        {/* Custom checkbox box */}
                        <div className={`w-5 h-5 rounded-md border flex items-center justify-center transition-all peer-focus-visible:ring-2 peer-focus-visible:ring-brand-purple-500/20 ${
                          formData.agree
                            ? 'bg-brand-purple-500 border-brand-purple-500 shadow-glow-purple'
                            : 'border-slate-300 dark:border-zinc-800 bg-white/50 dark:bg-zinc-950/40'
                        }`}>
                          {/* Checked mark icon */}
                          <svg className={`w-3.5 h-3.5 text-white transition-opacity ${
                            formData.agree ? 'opacity-100' : 'opacity-0'
                          }`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                        </div>

                      </div>
                      <span className="ml-3 text-xs font-semibold text-slate-500 dark:text-zinc-400 group-hover:text-slate-700 dark:group-hover:text-zinc-300 transition-colors leading-tight">
                        I consent to Arfico Private Limited securely storing my details to contact me about this inquiry.
                      </span>
                    </label>
                  </div>

                  {/* Send Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting || !formData.name || !formData.email || !formData.message || !formData.agree}
                    className="w-full py-4 rounded-xl text-base font-bold text-white bg-gradient-to-r from-brand-purple-600 to-brand-indigo-600 hover:from-brand-purple-500 hover:to-brand-indigo-500 disabled:from-slate-300 disabled:to-slate-400 dark:disabled:from-zinc-800 dark:disabled:to-zinc-800 disabled:text-slate-500 dark:disabled:text-zinc-600 disabled:cursor-not-allowed transition-all duration-300 flex items-center justify-center hover:shadow-glow-purple disabled:shadow-none hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin h-5 w-5 mr-3 text-white" viewBox="0 0 24 24" fill="none">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        <span>Transmitting...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4.5 h-4.5 mr-2" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
