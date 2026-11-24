import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  Code2, 
  Cpu, 
  Database, 
  Sparkles, 
  CheckCircle2, 
  Terminal, 
  Zap 
} from 'lucide-react';

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const pillars = [
    {
      icon: Code2,
      title: 'Full-Stack Engineering',
      description: 'Developing responsive web apps and production platforms with React.js, Next.js, TypeScript, and Tailwind CSS.',
      badge: 'Frontend & UI'
    },
    {
      icon: Terminal,
      title: 'Backend & RESTful APIs',
      description: 'Architecting scalable server-side systems using Node.js, Express.js, and FastAPI with secure JWT authentication and role-based access.',
      badge: 'Node & Python'
    },
    {
      icon: Cpu,
      title: 'Applied AI & LLM Systems',
      description: 'Integrating Groq API, Claude API, Hindsight SDK, and machine learning models (TensorFlow & OpenCV) for context-aware workflows.',
      badge: 'LLMs & Vision'
    },
    {
      icon: Database,
      title: 'Data & Real-Time Sync',
      description: 'Designing schema models in MongoDB and PostgreSQL, coupled with real-time Socket.IO synchronization and event handling.',
      badge: 'SQL & NoSQL'
    }
  ];

  return (
    <section id="about" className="py-24 sm:py-32 relative bg-[#08090D] overflow-hidden">
      {/* Ambient background blur */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-purple-900/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-900/10 rounded-full blur-[120px] pointer-events-none" />

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
              <Sparkles size={14} />
              <span>01 // PROFESSIONAL BACKGROUND</span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight mb-4">
              Engineering with Purpose, Code with Precision.
            </h2>
            <p className="text-gray-400 text-base sm:text-lg leading-relaxed font-light">
              An engineering-first perspective focused on building scalable, verified software products that solve real-world operational and technical challenges.
            </p>
          </div>

          {/* Main Asymmetric Grid */}
          <div className="grid lg:grid-cols-12 gap-8 items-start mb-16">
            {/* Left Narrative Card */}
            <div className="lg:col-span-7 space-y-6">
              <div className="rounded-3xl p-7 sm:p-9 bg-[#0E1017] border border-white/[0.08] shadow-xl relative overflow-hidden">
                <div className="absolute -top-16 -right-16 w-32 h-32 bg-purple-600/10 rounded-full blur-2xl pointer-events-none" />
                
                <h3 className="font-display font-bold text-2xl text-white mb-4">
                  Software Engineer &amp; B.Tech AI/ML Specialist
                </h3>

                <div className="space-y-4 text-gray-300 text-sm sm:text-base leading-relaxed font-light">
                  <p>
                    I am a Computer Science &amp; Engineering student specializing in <strong className="text-white font-medium">Artificial Intelligence &amp; Machine Learning</strong> at Malla Reddy Engineering College, maintaining an academic record of <span className="text-purple-300 font-mono font-semibold">8.55 CGPA</span>.
                  </p>
                  <p>
                    During my tenure as a <strong className="text-white font-medium">Software Development Engineer Intern at BlueStock Fintech</strong>, I designed and developed an individual IPO web application using React.js, Express.js, and MongoDB. I implemented secure JWT authentication, modular RESTful APIs, and full CRUD pipelines tested with Postman and version-controlled via Git in an Agile workflow.
                  </p>
                  <p>
                    My technical focus bridges robust full-stack software development with intelligent machine learning capabilities. Whether architecting a 4-role agricultural marketplace (<span className="text-cyan-300 font-mono">AgriConnect</span>), implementing persistent-memory agentic workflows (<span className="text-purple-300 font-mono">DealMemory</span> with Groq &amp; Hindsight), or building high-precision computer vision models, my goal is always clean architecture, reliability, and measurable user impact.
                  </p>
                </div>

                {/* Quick Credentials Pills */}
                <div className="mt-8 pt-6 border-t border-white/[0.08] flex flex-wrap gap-2.5">
                  {[
                    'BlueStock Fintech SDE Intern',
                    'B.Tech CSE (AI & ML) • CGPA 8.55',
                    'Full Stack MERN & FastAPI',
                    'LLM & Memory Workflows',
                    'Socket.IO Real-Time Systems',
                    'DSA & Clean Code'
                  ].map((item, idx) => (
                    <span 
                      key={idx} 
                      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-[#131620] border border-white/[0.06] text-xs font-mono text-gray-300"
                    >
                      <CheckCircle2 size={13} className="text-emerald-400" />
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* Engineering Philosophy Banner */}
              <div className="rounded-2xl p-6 bg-gradient-to-r from-purple-950/40 via-[#0E1017] to-indigo-950/40 border border-purple-500/20 text-gray-300 text-sm">
                <div className="flex items-start gap-3">
                  <Zap size={20} className="text-purple-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-white font-display font-semibold mb-1">
                      Engineering Principle: Production-Grade Reliability
                    </h4>
                    <p className="text-xs sm:text-sm text-gray-400 leading-relaxed font-light">
                      I believe software should be built with rigorous data contracts, clear abstractions, testable API boundaries, and responsive interfaces that perform smoothly across all devices.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: 4 Technical Pillars */}
            <div className="lg:col-span-5 grid sm:grid-cols-2 lg:grid-cols-1 gap-4">
              {pillars.map((pillar, index) => {
                const Icon = pillar.icon;
                return (
                  <div
                    key={index}
                    className="p-6 rounded-2xl bg-[#0E1017] border border-white/[0.08] hover:border-purple-500/30 transition-all duration-300 hover:translate-x-1 group"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div className="w-10 h-10 rounded-xl bg-purple-600/10 border border-purple-500/20 flex items-center justify-center text-purple-400 group-hover:scale-110 group-hover:bg-purple-600 group-hover:text-white transition-all duration-300">
                        <Icon size={18} />
                      </div>
                      <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-[#131620] border border-white/[0.06] text-gray-400">
                        {pillar.badge}
                      </span>
                    </div>
                    <h4 className="font-display font-bold text-base text-white mb-2 group-hover:text-purple-300 transition-colors">
                      {pillar.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-gray-400 leading-relaxed font-light">
                      {pillar.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
