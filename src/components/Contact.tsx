import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { 
  Mail, 
  Github, 
  Linkedin, 
  Send, 
  CheckCircle2, 
  AlertCircle, 
  MessageSquare, 
  Phone, 
  MapPin, 
  FileDown, 
  Copy, 
  Check, 
  Loader2 
} from 'lucide-react';

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    honeypot: '' // Spam protection honeypot
  });

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText('akashkoravena@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2400);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const applyTemplate = (templateSubject: string, templateMsg: string) => {
    setFormData((prev) => ({
      ...prev,
      subject: templateSubject,
      message: templateMsg
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Spam honeypot detection
    if (formData.honeypot) {
      setStatus('error');
      setErrorMessage('Spam detected.');
      return;
    }

    // Input validation
    if (!formData.name.trim() || formData.name.trim().length < 2) {
      setStatus('error');
      setErrorMessage('Please provide a valid name (at least 2 characters).');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email.trim())) {
      setStatus('error');
      setErrorMessage('Please provide a valid email address.');
      return;
    }

    if (!formData.message.trim() || formData.message.trim().length < 10) {
      setStatus('error');
      setErrorMessage('Please provide a message with at least 10 characters.');
      return;
    }

    setStatus('loading');
    setErrorMessage('');

    // Check if an external form endpoint is configured via environment variables
    const formEndpoint = import.meta.env.VITE_CONTACT_FORM_ENDPOINT;

    if (formEndpoint) {
      try {
        const response = await fetch(formEndpoint, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            subject: formData.subject || 'Portfolio Inquiry',
            message: formData.message
          })
        });

        if (response.ok) {
          setStatus('success');
          setFormData({ name: '', email: '', subject: '', message: '', honeypot: '' });
          return;
        } else {
          throw new Error('Form service returned an error.');
        }
      } catch {
        // Fall back to mailto formulation below
      }
    }

    // Direct, reliable client-side mailto transmission
    try {
      const subjectEncoded = encodeURIComponent(formData.subject || `Portfolio Message from ${formData.name}`);
      const bodyEncoded = encodeURIComponent(
        `Hi Akash,\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}\n`
      );
      
      // Launch user's default email client with guaranteed delivery
      window.location.href = `mailto:akashkoravena@gmail.com?subject=${subjectEncoded}&body=${bodyEncoded}`;
      
      setStatus('success');
      setTimeout(() => {
        setFormData({ name: '', email: '', subject: '', message: '', honeypot: '' });
      }, 1000);
    } catch {
      setStatus('error');
      setErrorMessage('Unable to dispatch email. Please email akashkoravena@gmail.com directly.');
    }
  };

  const quickTemplates = [
    {
      label: 'SDE Opportunity',
      subject: 'Interview Invitation: SDE / Full Stack Engineer Role',
      message: 'Hi Akash, we reviewed your portfolio and would like to discuss an SDE / Full-Stack opening with our engineering team.'
    },
    {
      label: 'AI & MERN Project',
      subject: 'Collaboration: Full Stack & AI Project Architecture',
      message: 'Hey Akash, I saw your AgriConnect and DealMemory projects and want to collaborate on a full-stack AI application.'
    },
    {
      label: 'Quick Coffee Chat',
      subject: 'Tech Connect: Developer Networking',
      message: 'Hi Akash, I came across your portfolio and would love to connect about software engineering and your AI projects.'
    }
  ];

  const contactChannels = [
    {
      icon: Mail,
      label: 'Email Direct',
      value: 'akashkoravena@gmail.com',
      href: 'mailto:akashkoravena@gmail.com'
    },
    {
      icon: Phone,
      label: 'Phone / WhatsApp',
      value: '+91 9398176430',
      href: 'tel:+919398176430'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn Profile',
      value: 'akash-babu-koravena',
      href: 'https://www.linkedin.com/in/akash-babu-koravena/'
    },
    {
      icon: Github,
      label: 'GitHub Repositories',
      value: 'Akash7653 (40+ repos)',
      href: 'https://github.com/Akash7653'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Hyderabad, Telangana, India',
      href: null
    }
  ];

  return (
    <section id="contact" className="py-24 sm:py-32 relative bg-[#08090D] overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-purple-900/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 max-w-6xl relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.7 }}
        >
          {/* Section Header */}
          <div className="text-center sm:text-left mb-16 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-mono font-medium mb-4">
              <Mail size={14} />
              <span>08 // GET IN TOUCH</span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight mb-4">
              Let's Build Impactful Systems Together.
            </h2>
            <p className="text-gray-400 text-base sm:text-lg leading-relaxed font-light">
              Available for full-time Software Development Engineer roles, full-stack development, and AI engineering opportunities.
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-12 items-start">
            {/* Left Column: Direct Channels & Resume Card */}
            <div className="lg:col-span-5 space-y-6">
              <div className="rounded-3xl p-6 sm:p-8 bg-[#0E1017] border border-white/[0.08] shadow-xl">
                <h3 className="font-display font-bold text-xl text-white mb-6">
                  Verified Contact Channels
                </h3>

                <div className="space-y-4">
                  {contactChannels.map((channel, index) => {
                    const Icon = channel.icon;
                    return (
                      <div
                        key={index}
                        className="flex items-center justify-between p-3.5 rounded-2xl bg-[#131620] border border-white/[0.05] hover:border-purple-500/30 transition-all group"
                      >
                        <div className="flex items-center gap-3.5">
                          <div className="w-10 h-10 rounded-xl bg-purple-600/10 border border-purple-500/20 flex items-center justify-center text-purple-400 group-hover:scale-110 transition-transform flex-shrink-0">
                            <Icon size={18} />
                          </div>
                          <div>
                            <span className="text-[11px] font-mono text-gray-500 block uppercase tracking-wider">
                              {channel.label}
                            </span>
                            {channel.href ? (
                              <a
                                href={channel.href}
                                target={channel.href.startsWith('http') ? '_blank' : undefined}
                                rel={channel.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                                className="text-xs sm:text-sm font-medium text-white hover:text-purple-300 transition-colors"
                              >
                                {channel.value}
                              </a>
                            ) : (
                              <span className="text-xs sm:text-sm font-medium text-white">
                                {channel.value}
                              </span>
                            )}
                          </div>
                        </div>

                        {channel.label === 'Email Direct' && (
                          <button
                            onClick={copyEmail}
                            className="p-2 rounded-lg bg-[#0E1017] hover:bg-white/[0.08] text-gray-400 hover:text-white transition-colors"
                            title="Copy email to clipboard"
                          >
                            {copied ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
                          </button>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Resume Card */}
              <div className="rounded-3xl p-6 sm:p-8 bg-gradient-to-br from-purple-950/40 via-[#0E1017] to-indigo-950/40 border border-purple-500/20 shadow-xl">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-purple-600/20 border border-purple-500/30 flex items-center justify-center text-purple-300">
                    <FileDown size={24} />
                  </div>
                  <span className="text-xs font-mono px-2.5 py-1 rounded-full bg-purple-900/50 text-purple-300 border border-purple-700/50">
                    PDF &bull; 199 KB
                  </span>
                </div>

                <h4 className="font-display font-bold text-lg text-white mb-2">
                  Official Engineering Resume
                </h4>
                <p className="text-xs text-gray-300 leading-relaxed font-light mb-5">
                  Verified candidate credentials, technical coursework, SDE internship assignment details, and project stack breakdown.
                </p>

                <a
                  href="/Akash-Koravena-Resume.pdf"
                  download="Akash-Koravena-Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white text-xs font-mono font-semibold shadow-lg shadow-purple-600/30 flex items-center justify-center gap-2 transition-all hover:scale-[1.02]"
                >
                  <FileDown size={15} />
                  <span>Download Verified Resume PDF</span>
                </a>
              </div>
            </div>

            {/* Right Column: Contact Form */}
            <div className="lg:col-span-7">
              <div className="rounded-3xl p-6 sm:p-9 bg-[#0E1017] border border-white/[0.08] shadow-2xl">
                {/* Presets Header */}
                <div className="mb-6">
                  <div className="flex items-center gap-1.5 text-xs font-mono text-purple-400 uppercase tracking-wider mb-2.5">
                    <MessageSquare size={14} />
                    <span>Quick Message Presets</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {quickTemplates.map((tpl, idx) => (
                      <button
                        key={idx}
                        type="button"
                        onClick={() => applyTemplate(tpl.subject, tpl.message)}
                        className="px-3 py-1.5 rounded-lg bg-[#131620] hover:bg-[#1A1E2C] text-gray-300 hover:text-white border border-white/[0.06] text-xs font-mono transition-colors text-left"
                      >
                        {tpl.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Form Elements */}
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Honeypot field hidden from users for bot spam protection */}
                  <div className="hidden" aria-hidden="true">
                    <label htmlFor="honeypot">Leave empty</label>
                    <input
                      type="text"
                      id="honeypot"
                      name="honeypot"
                      tabIndex={-1}
                      autoComplete="off"
                      value={formData.honeypot}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-xs font-mono text-gray-400 mb-1.5 uppercase tracking-wider">
                        Your Name <span className="text-purple-400">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Recruiter or Team Name"
                        className="w-full px-4 py-3 rounded-xl bg-[#131620] border border-white/[0.08] text-white text-sm placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-colors"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-xs font-mono text-gray-400 mb-1.5 uppercase tracking-wider">
                        Your Email <span className="text-purple-400">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="recruiter@company.com"
                        className="w-full px-4 py-3 rounded-xl bg-[#131620] border border-white/[0.08] text-white text-sm placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-xs font-mono text-gray-400 mb-1.5 uppercase tracking-wider">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="e.g. SDE Opportunity / Technical Collaboration"
                      className="w-full px-4 py-3 rounded-xl bg-[#131620] border border-white/[0.08] text-white text-sm placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-xs font-mono text-gray-400 mb-1.5 uppercase tracking-wider">
                      Message <span className="text-purple-400">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Write your note or select a quick preset above..."
                      className="w-full px-4 py-3 rounded-xl bg-[#131620] border border-white/[0.08] text-white text-sm placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-colors resize-none"
                    />
                  </div>

                  {/* Status Banner */}
                  {status === 'error' && (
                    <div className="p-3.5 rounded-xl bg-rose-950/40 border border-rose-800/40 text-rose-300 text-xs font-mono flex items-center gap-2">
                      <AlertCircle size={15} className="flex-shrink-0" />
                      <span>{errorMessage || 'Failed to submit form. Please email directly.'}</span>
                    </div>
                  )}

                  {status === 'success' && (
                    <div className="p-3.5 rounded-xl bg-emerald-950/40 border border-emerald-800/40 text-emerald-300 text-xs font-mono flex items-center gap-2">
                      <CheckCircle2 size={15} className="flex-shrink-0" />
                      <span>Message drafted! Email client opened for direct delivery.</span>
                    </div>
                  )}

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-600 bg-[length:200%_auto] hover:bg-[position:right_center] text-white text-sm font-semibold shadow-lg shadow-purple-600/30 hover:shadow-purple-600/50 transition-all duration-300 hover:scale-[1.01] flex items-center justify-center gap-2 disabled:opacity-60"
                  >
                    {status === 'loading' ? (
                      <>
                        <Loader2 size={16} className="animate-spin" />
                        <span>Sending message...</span>
                      </>
                    ) : (
                      <>
                        <Send size={16} />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
