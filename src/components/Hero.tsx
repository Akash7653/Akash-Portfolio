import { motion } from 'framer-motion';
import { 
  ArrowDown, 
  Mail, 
  Github, 
  Linkedin, 
  Copy, 
  Check, 
  Sparkles, 
  Code2, 
  Briefcase, 
  Award, 
  FileDown, 
  ArrowRight,
  Terminal,
  Cpu
} from 'lucide-react';
import { useState, useEffect } from 'react';

const roles = [
  'Software Development Engineer',
  'Full Stack Developer (MERN)',
  'AI & Machine Learning Developer',
  'FastAPI & Distributed Systems'
];

export default function Hero() {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const currentRole = roles[currentRoleIndex];
    let timer: ReturnType<typeof setTimeout>;

    if (!isDeleting && displayText.length < currentRole.length) {
      timer = setTimeout(() => {
        setDisplayText(currentRole.substring(0, displayText.length + 1));
      }, 65);
    } else if (!isDeleting && displayText.length === currentRole.length) {
      timer = setTimeout(() => setIsDeleting(true), 2200);
    } else if (isDeleting && displayText.length > 0) {
      timer = setTimeout(() => {
        setDisplayText(currentRole.substring(0, displayText.length - 1));
      }, 35);
    } else if (isDeleting && displayText.length === 0) {
      setIsDeleting(false);
      setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
    }

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, currentRoleIndex]);

  const copyEmail = () => {
    navigator.clipboard.writeText('akashkoravena@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2400);
  };

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 px-4 sm:px-6 overflow-hidden">
      {/* Ambient Futuristic Lighting Gradients */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] bg-gradient-to-tr from-purple-700/15 via-indigo-600/15 to-cyan-500/10 rounded-full blur-[130px] -z-10" />
        <div className="absolute -top-20 -right-20 w-[400px] h-[400px] bg-purple-600/10 rounded-full blur-[100px] -z-10" />
        <div className="absolute bottom-10 -left-20 w-[450px] h-[450px] bg-cyan-600/10 rounded-full blur-[120px] -z-10" />
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff08_1px,transparent_1px)] [background-size:24px_24px] opacity-40 -z-10" />
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Text & Editorial Hierarchy */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 text-center lg:text-left flex flex-col items-center lg:items-start"
          >
            {/* Verified Status Pill */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 }}
              className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#131620] border border-white/[0.08] text-xs font-mono text-purple-300 mb-6 shadow-sm"
            >
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>Former SDE Intern @ BlueStock Fintech</span>
              <span className="text-gray-500 hidden sm:inline">&bull;</span>
              <span className="text-gray-400 hidden sm:inline">B.Tech AI/ML</span>
            </motion.div>

            {/* Editorial Name Heading */}
            <h1 className="font-display font-extrabold text-4xl sm:text-6xl lg:text-7xl tracking-tight text-white mb-4 leading-[1.1]">
              Akash <span className="bg-gradient-to-r from-purple-400 via-indigo-300 to-cyan-400 bg-clip-text text-transparent">Koravena</span>
            </h1>

            {/* Dynamic Typewriter Role */}
            <div className="h-10 sm:h-12 flex items-center mb-5">
              <span className="font-mono text-lg sm:text-2xl text-purple-300 font-semibold flex items-center gap-2">
                <Terminal size={20} className="text-purple-400 flex-shrink-0" />
                {displayText}
                <span className="inline-block w-2 h-5 sm:h-6 bg-cyan-400 animate-pulse ml-0.5"></span>
              </span>
            </div>

            {/* Concise Verified Bio */}
            <p className="text-base sm:text-lg text-gray-300 max-w-xl leading-relaxed mb-8 font-light">
              Building intelligent, high-performance digital products at the intersection of full-stack engineering and modern AI. Experienced in React, Node.js, FastAPI, REST architecture, and LLM integrations.
            </p>

            {/* Core Action CTAs */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3.5 mb-10 w-full sm:w-auto">
              {/* Primary CTA */}
              <button
                onClick={() => scrollToSection('projects')}
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-600 bg-[length:200%_auto] hover:bg-[position:right_center] text-white text-sm font-semibold shadow-lg shadow-purple-600/30 hover:shadow-purple-600/50 transition-all duration-300 hover:scale-[1.02] flex items-center justify-center gap-2 group"
              >
                <span>Explore Projects</span>
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>

              {/* Resume Download CTA */}
              <a
                href="/Akash-Koravena-Resume.pdf"
                download="Akash-Koravena-Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-5 py-3.5 rounded-xl bg-[#131620] hover:bg-[#1A1E2C] text-gray-200 hover:text-white text-sm font-medium border border-white/[0.08] hover:border-purple-500/40 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <FileDown size={16} className="text-purple-400" />
                <span>Resume (PDF)</span>
              </a>

              {/* Copy Email CTA */}
              <button
                onClick={copyEmail}
                className="w-full sm:w-auto px-5 py-3.5 rounded-xl bg-[#131620] hover:bg-[#1A1E2C] text-gray-200 hover:text-white text-sm font-medium border border-white/[0.08] hover:border-purple-500/40 transition-all duration-300 flex items-center justify-center gap-2"
                title="Copy email to clipboard"
              >
                {copied ? (
                  <>
                    <Check size={16} className="text-emerald-400" />
                    <span className="text-emerald-400">Email Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy size={16} className="text-gray-400" />
                    <span>Copy Email</span>
                  </>
                )}
              </button>
            </div>

            {/* Social Proof Channels */}
            <div className="flex items-center gap-4 text-gray-400">
              <span className="text-xs font-mono uppercase tracking-wider text-gray-500">Profiles:</span>
              <a
                href="https://github.com/Akash7653"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-[#131620] hover:bg-[#1A1E2C] border border-white/[0.08] hover:border-purple-500/40 text-gray-300 hover:text-white transition-all hover:scale-105"
                aria-label="Akash Koravena on GitHub"
              >
                <Github size={18} />
              </a>
              <a
                href="https://www.linkedin.com/in/akash-babu-koravena/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-[#131620] hover:bg-[#1A1E2C] border border-white/[0.08] hover:border-purple-500/40 text-gray-300 hover:text-white transition-all hover:scale-105"
                aria-label="Akash Koravena on LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="https://leetcode.com/u/akash_152"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-[#131620] hover:bg-[#1A1E2C] border border-white/[0.08] hover:border-purple-500/40 text-gray-300 hover:text-white transition-all hover:scale-105 font-mono text-xs font-bold"
                aria-label="Akash Koravena on LeetCode"
              >
                LC
              </a>
              <a
                href="mailto:akashkoravena@gmail.com"
                className="p-2.5 rounded-xl bg-[#131620] hover:bg-[#1A1E2C] border border-white/[0.08] hover:border-purple-500/40 text-gray-300 hover:text-white transition-all hover:scale-105"
                aria-label="Email Akash Koravena directly"
              >
                <Mail size={18} />
              </a>
            </div>
          </motion.div>

            {/* Right Column: Futuristic Profile Showcase Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-5 flex justify-center lg:justify-end w-full"
            >
              <div className="relative w-full max-w-[340px] sm:max-w-sm md:max-w-md">
                {/* Futuristic Card Wrapper with Glassmorphism */}
                <div className="relative rounded-3xl p-6 sm:p-8 bg-[#0E1017]/90 border border-white/[0.1] shadow-2xl backdrop-blur-xl overflow-hidden group">
                  {/* Ambient Electric Purple & Blue Lighting */}
                  <div className="absolute -top-24 -right-24 w-52 h-52 bg-purple-600/25 rounded-full blur-3xl pointer-events-none group-hover:bg-purple-600/45 transition-all duration-700" />
                  <div className="absolute -bottom-24 -left-24 w-52 h-52 bg-cyan-600/20 rounded-full blur-3xl pointer-events-none group-hover:bg-cyan-600/35 transition-all duration-700" />

                  {/* Profile Portrait Container with Subtle Animated Halo */}
                  <div className="relative mx-auto w-44 h-44 sm:w-52 sm:h-52 md:w-56 md:h-56 mb-6">
                    {/* Animated Halo Behind the Image */}
                    <motion.div
                      className="absolute -inset-2.5 rounded-full bg-gradient-to-tr from-purple-600 via-indigo-500 to-cyan-400 blur-xl opacity-70 group-hover:opacity-90 transition-opacity duration-700"
                      animate={{
                        rotate: [0, 360],
                        scale: [1, 1.05, 1],
                      }}
                      transition={{
                        rotate: { duration: 14, repeat: Infinity, ease: 'linear' },
                        scale: { duration: 5, repeat: Infinity, ease: 'easeInOut' }
                      }}
                    />

                    {/* Circular Portrait Frame with Restrained Border & Shadow */}
                    <div className="relative w-full h-full rounded-full p-[2.5px] bg-gradient-to-b from-white/30 via-purple-500/40 to-cyan-500/30 shadow-2xl shadow-purple-950/50">
                      <div className="w-full h-full rounded-full overflow-hidden bg-[#0E1017]">
                        <img
                          src="/assets/akash-portfolio-profile.png"
                          alt="Akash Koravena – Software Engineer and Full Stack Developer"
                          className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                          loading="eager"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Card Editorial Identity & Verified Stats */}
                  <div className="text-center">
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-950/60 border border-purple-800/60 text-[11px] font-mono text-purple-300 font-medium mb-3">
                      <Sparkles size={12} className="text-purple-400" />
                      <span>Full-Stack &amp; AI Engineer</span>
                    </div>

                    <h3 className="text-xl font-display font-bold text-white mb-1">
                      Koravena Akash Babu
                    </h3>
                    <p className="text-xs text-gray-400 font-mono mb-6">
                      Hyderabad, India &bull; MREC (2023–2027)
                    </p>

                    {/* Verified Stats Grid */}
                    <div className="grid grid-cols-2 gap-2.5 pt-4 border-t border-white/[0.08]">
                      <div className="p-2.5 rounded-xl bg-[#131620]/80 border border-white/[0.05] text-left">
                        <div className="flex items-center gap-1 text-[11px] text-gray-400 mb-0.5">
                          <Briefcase size={12} className="text-purple-400" />
                          <span>Internship</span>
                        </div>
                        <div className="font-display font-bold text-sm text-white">
                          BlueStock Fintech
                        </div>
                      </div>

                      <div className="p-2.5 rounded-xl bg-[#131620]/80 border border-white/[0.05] text-left">
                        <div className="flex items-center gap-1 text-[11px] text-gray-400 mb-0.5">
                          <Award size={12} className="text-cyan-400" />
                          <span>B.Tech CGPA</span>
                        </div>
                        <div className="font-display font-bold text-sm text-white">
                          8.55 / 10
                        </div>
                      </div>

                      <div className="p-2.5 rounded-xl bg-[#131620]/80 border border-white/[0.05] text-left">
                        <div className="flex items-center gap-1 text-[11px] text-gray-400 mb-0.5">
                          <Code2 size={12} className="text-emerald-400" />
                          <span>Public Repos</span>
                        </div>
                        <div className="font-display font-bold text-sm text-white">
                          40+ Repositories
                        </div>
                      </div>

                      <div className="p-2.5 rounded-xl bg-[#131620]/80 border border-white/[0.05] text-left">
                        <div className="flex items-center gap-1 text-[11px] text-gray-400 mb-0.5">
                          <Cpu size={12} className="text-indigo-400" />
                          <span>AI Accuracy</span>
                        </div>
                        <div className="font-display font-bold text-sm text-white">
                          85% (AgriSmart)
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
        </div>

        {/* Scroll Indicator */}
        <div className="mt-16 flex justify-center">
          <button
            onClick={() => scrollToSection('about')}
            className="flex flex-col items-center gap-2 text-xs font-mono text-gray-500 hover:text-purple-400 transition-colors group focus:outline-none"
            aria-label="Scroll down to About section"
          >
            <span className="tracking-widest uppercase">Explore Experience</span>
            <ArrowDown size={16} className="animate-bounce text-purple-400" />
          </button>
        </div>
      </div>
    </section>
  );
}
