import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { 
  ExternalLink, 
  Github, 
  Search, 
  X, 
  Sparkles, 
  Layers, 
  CheckCircle2, 
  ArrowRight, 
  ShieldAlert, 
  Lock 
} from 'lucide-react';

interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: 'all' | 'fullstack' | 'aiml' | 'internship';
  categoryLabel: string;
  problem: string;
  solution: string;
  description: string;
  architectureHighlights: string[];
  tech: string[];
  github: string;
  live?: string;
  badge: string;
  gradient: string;
  accentBorder: string;
  image: string;
  isFeatured?: boolean;
}

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      id: 'agriconnect',
      title: 'AgriConnect — Multi-Role Agricultural Marketplace',
      subtitle: 'Real-time commerce & logistics platform connecting 4 distinct stakeholders',
      category: 'fullstack',
      categoryLabel: 'Full-Stack MERN & WebSockets',
      badge: 'Flagship Architecture',
      gradient: 'from-emerald-600 via-teal-600 to-cyan-700',
      accentBorder: 'hover:border-emerald-400 dark:hover:border-emerald-500/40',
      image: 'https://images.pexels.com/photos/2132227/pexels-photo-2132227.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Architected a multi-role agricultural commerce ecosystem supporting 4 tailored user portals: Farmer, Buyer, Delivery Partner, and System Administrator.',
      problem: 'Traditional agriculture marketplaces suffer from disconnected intermediaries, lack of transparent pricing, and zero real-time visibility into inventory and perishable delivery status.',
      solution: 'Engineered an end-to-end platform featuring role-based JWT authentication, real-time Socket.IO inventory updates and delivery tracking, paired with automated Razorpay checkout workflows.',
      architectureHighlights: [
        'Dedicated 4-Portal Role-Based Access Control (RBAC) in Express.js & MongoDB',
        'Real-time WebSocket event orchestration via Socket.IO for live inventory & delivery status updates',
        'Secure Razorpay payment gateway integration with automated order status reconciliation',
        'Modular React.js & TypeScript frontend with responsive mobile-friendly dashboard views'
      ],
      tech: ['React.js', 'TypeScript', 'Node.js', 'Express.js', 'MongoDB', 'Socket.IO', 'JWT', 'Razorpay'],
      github: 'https://github.com/Akash7653/AgriConnect',
      isFeatured: true
    },
    {
      id: 'dealmemory',
      title: 'DealMemory — Context-Aware Memory CRM',
      subtitle: 'Agentic memory platform retaining customer interactions and deal context',
      category: 'aiml',
      categoryLabel: 'AI & LLM Workflows',
      badge: 'Agentic AI Memory',
      gradient: 'from-purple-600 via-indigo-600 to-blue-700',
      accentBorder: 'hover:border-purple-400 dark:hover:border-purple-500/40',
      image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Engineered a persistent-memory CRM application for retaining and recalling complex customer interactions, stakeholder context, and deal records.',
      problem: 'B2B sales engineers and managers lose critical historical context and relationship nuances between meetings, leading to repetitive questions and slower deal cycles.',
      solution: 'Constructed an asynchronous FastAPI backend integrated with Hindsight memory SDK and Groq-powered fast LLM inference to automatically generate context-aware briefings and deal insights.',
      architectureHighlights: [
        'Persistent memory storage and semantic recall workflows using Hindsight SDK',
        'Sub-second LLM inference pipeline powered by Groq API (Llama 3 family)',
        'Asynchronous Python FastAPI service architecture ensuring low-latency retrieval',
        'Tailwind CSS and React client providing intuitive meeting preparation dossier views'
      ],
      tech: ['Python', 'FastAPI', 'Groq API', 'Hindsight SDK', 'React.js', 'Tailwind CSS', 'REST API'],
      github: 'https://github.com/Akash7653/deal-memory',
      isFeatured: true
    },
    {
      id: 'careershield-ai',
      title: 'CareerShield AI — Career Intelligence & Scam Detection',
      subtitle: 'AI-assisted resume optimizer, LinkedIn strategist, and employment scam validator',
      category: 'aiml',
      categoryLabel: 'AI & Claude LLM',
      badge: 'Claude AI Powered',
      gradient: 'from-blue-600 via-indigo-600 to-purple-700',
      accentBorder: 'hover:border-blue-400 dark:hover:border-blue-500/40',
      image: 'https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Comprehensive AI platform delivering deep resume analysis, personalized cover-letter drafting, LinkedIn profile optimization, and job-offer scam verification.',
      problem: 'Job seekers face overwhelming applicant rejection due to poor ATS formatting and increasingly fall victim to sophisticated fake job offers and identity theft scams.',
      solution: 'Built an integrated career security tool leveraging Anthropic’s Claude API for nuanced linguistic analysis and custom heuristic rules to identify fraudulent recruiter patterns.',
      architectureHighlights: [
        'Deep semantic resume parsing and ATS score optimization via Claude API',
        'Custom heuristic and prompt-engineered algorithm for job-offer scam risk scoring',
        'Automated personalized cover letter generation and LinkedIn headline enhancement',
        'Dynamic career roadmap generator mapping technical skill prerequisites to target roles'
      ],
      tech: ['React.js', 'Node.js', 'Express.js', 'Claude API', 'Tailwind CSS', 'RESTful API'],
      github: 'https://github.com/Akash7653/CareerShield_AI',
      isFeatured: true
    },
    {
      id: 'bluestock-ipo',
      title: 'IPO Web Application — BlueStock Fintech',
      subtitle: 'Production IPO subscription interface and financial data management system',
      category: 'internship',
      categoryLabel: 'Corporate SDE Project',
      badge: 'BlueStock Fintech Assignment',
      gradient: 'from-indigo-700 via-purple-700 to-slate-900',
      accentBorder: 'hover:border-indigo-400 dark:hover:border-indigo-500/40',
      image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Developed an IPO management and subscription web application as an individual SDE internship project at BlueStock Fintech.',
      problem: 'Handling financial IPO data requires strict authentication boundaries, atomic subscription record keeping, and rapid API response times for investor workflows.',
      solution: 'Built a modular full-stack application with JWT cookie authentication, robust Express.js REST APIs, MongoDB data pipelines, and responsive React data grids tested systematically in Postman.',
      architectureHighlights: [
        'JWT-based role authentication and authorization guarding secure administrative routes',
        'Complete CRUD data operations for upcoming, active, and past IPO issue timelines',
        'Responsive, modern UI designed with modular component hierarchy in React.js',
        'Postman integration testing for schema verification and Git Agile version control'
      ],
      tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'JWT Auth', 'Postman', 'Git', 'Agile'],
      github: 'https://github.com/Akash7653/ipo-web-app'
    },
    {
      id: 'agrismart',
      title: 'AgriSmart — AI Crop Leaf Disease Detection',
      subtitle: 'High-accuracy deep learning computer vision model for agricultural diagnostics',
      category: 'aiml',
      categoryLabel: 'AI & Computer Vision',
      badge: '85% Accuracy AI Model',
      gradient: 'from-emerald-700 via-teal-800 to-gray-900',
      accentBorder: 'hover:border-emerald-400 dark:hover:border-emerald-500/40',
      image: 'https://images.pexels.com/photos/1459534/pexels-photo-1459534.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Engineered an AI-powered agricultural diagnosis platform achieving 85% prediction accuracy on plant leaf disease detection.',
      problem: 'Smallholder farmers lose significant percentages of crop yield due to delayed plant disease diagnosis and limited access to local agricultural experts.',
      solution: 'Trained a Convolutional Neural Network (CNN) in TensorFlow with OpenCV image preprocessing, exposed via REST APIs to a lightweight, responsive React mobile dashboard.',
      architectureHighlights: [
        '85% prediction accuracy across multiple plant leaf disease categories',
        'Real-time image upload preprocessing pipeline utilizing OpenCV computer vision',
        'Convolutional Neural Network (CNN) model built and trained with TensorFlow',
        'Instant disease mitigation recommendations and localized treatment instructions'
      ],
      tech: ['React.js', 'Python', 'OpenCV', 'TensorFlow', 'Machine Learning', 'REST API'],
      github: 'https://github.com/Akash7653/Farms',
      live: 'https://farms-gat6.vercel.app'
    },
    {
      id: 'school-management',
      title: 'School Management Enterprise Platform',
      subtitle: 'Multi-tenant educational institution platform with role-based portals & payments',
      category: 'fullstack',
      categoryLabel: 'Full-Stack MERN',
      badge: 'Enterprise Architecture',
      gradient: 'from-cyan-700 via-blue-800 to-gray-900',
      accentBorder: 'hover:border-cyan-400 dark:hover:border-cyan-500/40',
      image: 'https://images.pexels.com/photos/256455/pexels-photo-256455.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Architected an educational administration platform managing students, teachers, administrative staff, attendance records, and online fee payments.',
      problem: 'Manual school administration is error-prone, fragmented across offline paperwork, and lacks unified tracking for student attendance and tuition fees.',
      solution: 'Unified institutional workflows into a single MERN application with role-based dashboards, automated attendance percentages, and integrated online payment gateway billing.',
      architectureHighlights: [
        'Multi-portal Role-Based Access Control (RBAC) for Admin, Teacher, and Student profiles',
        'Integrated payment gateway handling student tuition collection with automated receipts',
        'Real-time administrative monitoring dashboard with aggregate attendance reporting',
        'Scalable MongoDB database schema design handling relational student-class-exam data'
      ],
      tech: ['MERN Stack', 'React.js', 'Node.js', 'Express.js', 'MongoDB', 'Payment Gateway'],
      github: 'https://github.com/Akash7653/School',
      live: 'https://school-9eq7.vercel.app'
    },
    {
      id: 'emotion-detector',
      title: 'Real-Time Emotion Detection System',
      subtitle: 'Live webcam facial analysis and affective emotion classification via CNN',
      category: 'aiml',
      categoryLabel: 'AI & Computer Vision',
      badge: 'Real-Time Webcam CNN',
      gradient: 'from-rose-700 via-pink-800 to-gray-900',
      accentBorder: 'hover:border-pink-400 dark:hover:border-pink-500/40',
      image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Constructed an intelligent computer vision application performing live facial landmark detection and multi-class emotion classification in real time.',
      problem: 'Real-time facial expression analysis in web browsers suffers from computational latency and frame dropping without efficient neural network inference pipelines.',
      solution: 'Coupled lightweight OpenCV face extraction with a trained TensorFlow CNN model, rendering continuous emotion confidence graphs with instant webcam streaming.',
      architectureHighlights: [
        'Real-time OpenCV webcam frame ingestion and facial bounding-box localization',
        'Optimized Convolutional Neural Network (CNN) architecture trained on facial datasets',
        'Interactive React dashboard providing real-time expression breakdown analytics',
        'Exportable metrics and session logs for behavioral research and UI sentiment analysis'
      ],
      tech: ['Python', 'TensorFlow', 'OpenCV', 'React.js', 'Machine Learning', 'Computer Vision'],
      github: 'https://github.com/Akash7653/emotion-detector',
      live: 'https://emotion-detector-xi.vercel.app'
    }
  ];

  const filteredProjects = projects.filter((project) => {
    const matchesCategory = activeCategory === 'all' || project.category === activeCategory;
    const matchesSearch =
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.tech.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="projects" className="py-24 sm:py-32 relative bg-white dark:bg-[#0E1017] transition-colors duration-300 overflow-hidden">
      {/* Ambient background mesh */}
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-purple-500/10 dark:bg-purple-900/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 max-w-6xl relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.7 }}
        >
          {/* Section Header */}
          <div className="text-center sm:text-left mb-12 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-50 dark:bg-purple-500/10 border border-purple-200 dark:border-purple-500/20 text-purple-700 dark:text-purple-400 text-xs font-mono font-medium mb-4">
              <Sparkles size={14} />
              <span>04 // FEATURED ENGINEERING PROJECTS</span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-slate-900 dark:text-white tracking-tight mb-4">
              Production Architectures &amp; AI Products
            </h2>
            <p className="text-slate-600 dark:text-gray-400 text-base sm:text-lg leading-relaxed font-light">
              Real software systems engineered with verified repositories, measurable architectural trade-offs, and live deployments.
            </p>
          </div>

          {/* Search & Category Filter Controls */}
          <div className="mb-12 flex flex-col md:flex-row gap-4 items-stretch md:items-center justify-between pb-6 border-b border-slate-200 dark:border-white/[0.08]">
            {/* Filter Pills */}
            <div className="flex flex-wrap gap-2">
              {[
                { id: 'all', label: 'All Projects' },
                { id: 'aiml', label: 'AI, LLMs & Vision' },
                { id: 'fullstack', label: 'Full-Stack MERN' },
                { id: 'internship', label: 'SDE Internship' }
              ].map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-4 py-2 rounded-xl text-xs font-mono transition-all duration-200 ${
                    activeCategory === cat.id
                      ? 'bg-purple-600 text-white font-semibold shadow-md shadow-purple-600/30'
                      : 'bg-slate-100 dark:bg-[#131620] text-slate-700 dark:text-gray-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-[#1A1E2C]'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {/* Search Input */}
            <div className="relative w-full md:w-72">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 dark:text-gray-500" size={16} />
              <input
                type="text"
                placeholder="Search tech, title, features..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-8 py-2 rounded-xl bg-slate-100 dark:bg-[#131620] border border-slate-200 dark:border-white/[0.08] text-xs font-mono text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-colors"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-700 dark:hover:text-white"
                >
                  <X size={14} />
                </button>
              )}
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.35, delay: index * 0.05 }}
                  className="group relative cursor-pointer"
                  onClick={() => setSelectedProject(project)}
                >
                  <div className={`rounded-3xl bg-slate-50 dark:bg-[#131620] border border-slate-200 dark:border-white/[0.08] ${project.accentBorder} transition-all duration-300 hover:-translate-y-1.5 shadow-sm hover:shadow-xl dark:shadow-none dark:hover:shadow-2xl overflow-hidden flex flex-col h-full`}>
                    {/* Visual Card Image Banner */}
                    <div className="relative h-56 overflow-hidden">
                      <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-80 mix-blend-multiply`} />
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-60"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-50 dark:from-[#131620] via-transparent to-transparent" />

                      {/* Top Floating Badges */}
                      <div className="absolute top-4 left-4 right-4 flex items-center justify-between gap-2">
                        <span className="px-3 py-1 rounded-full text-[11px] font-mono font-medium bg-white/90 dark:bg-[#08090D]/80 backdrop-blur-md text-slate-800 dark:text-white border border-slate-200 dark:border-white/[0.1] shadow-md">
                          {project.badge}
                        </span>
                        <span className="px-2.5 py-1 rounded-full text-[10px] font-mono bg-purple-50 dark:bg-purple-950/80 backdrop-blur-md text-purple-700 dark:text-purple-300 border border-purple-200 dark:border-purple-800/40">
                          {project.categoryLabel}
                        </span>
                      </div>
                    </div>

                    {/* Card Content */}
                    <div className="p-6 sm:p-7 flex flex-col flex-grow justify-between">
                      <div>
                        <h3 className="font-display font-bold text-xl text-slate-900 dark:text-white mb-1.5 group-hover:text-purple-600 dark:group-hover:text-purple-300 transition-colors">
                          {project.title}
                        </h3>
                        <p className="text-xs text-purple-600 dark:text-purple-400 font-mono mb-3">
                          {project.subtitle}
                        </p>
                        <p className="text-slate-600 dark:text-gray-400 text-xs sm:text-sm leading-relaxed line-clamp-3 mb-5 font-light">
                          {project.description}
                        </p>

                        {/* Tech Badges */}
                        <div className="flex flex-wrap gap-1.5 mb-6">
                          {project.tech.map((t, idx) => (
                            <span
                              key={idx}
                              className="px-2.5 py-1 rounded-lg bg-white dark:bg-[#0E1017] border border-slate-200 dark:border-white/[0.05] text-[11px] font-mono text-slate-700 dark:text-gray-300"
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Card Action Footer */}
                      <div 
                        className="pt-4 border-t border-slate-200 dark:border-white/[0.06] flex items-center justify-between gap-3" 
                        onClick={(e) => e.stopPropagation()}
                      >
                        <div className="flex items-center gap-2">
                          {project.github && (
                            <a
                              href={project.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white dark:bg-[#0E1017] hover:bg-slate-100 dark:hover:bg-white/[0.08] text-slate-700 dark:text-gray-300 hover:text-slate-900 dark:hover:text-white text-xs font-mono border border-slate-200 dark:border-white/[0.06] shadow-xs transition-colors"
                              title="View GitHub Repository"
                            >
                              <Github size={14} />
                              <span>Code</span>
                            </a>
                          )}
                          {project.live && (
                            <a
                              href={project.live}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white text-xs font-mono font-medium shadow-sm transition-all"
                              title="Open Live Deployment"
                            >
                              <ExternalLink size={14} />
                              <span>Live Demo</span>
                            </a>
                          )}
                          {!project.live && project.category === 'internship' && (
                            <span className="inline-flex items-center gap-1 text-[11px] font-mono text-purple-700 dark:text-purple-300 bg-purple-50 dark:bg-purple-950/40 px-2.5 py-1 rounded-lg border border-purple-200 dark:border-purple-800/40">
                              <Lock size={12} /> Internal Assignment
                            </span>
                          )}
                        </div>

                        <button
                          onClick={() => setSelectedProject(project)}
                          className="text-xs font-mono text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 font-medium inline-flex items-center gap-1 transition-colors"
                        >
                          <span>Case Study</span>
                          <ArrowRight size={14} />
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-16 rounded-3xl bg-slate-50 dark:bg-[#131620] border border-slate-200 dark:border-white/[0.08]">
              <Layers className="w-10 h-10 text-slate-400 dark:text-gray-500 mx-auto mb-3 animate-pulse" />
              <h3 className="text-base font-display font-semibold text-slate-900 dark:text-white mb-1">
                No matching projects found
              </h3>
              <p className="text-xs text-slate-500 dark:text-gray-400 font-mono">
                Try clearing your search query or selecting a different category.
              </p>
            </div>
          )}

          {/* GitHub CTA Banner */}
          <div className="rounded-3xl p-8 bg-gradient-to-r from-purple-50 via-slate-50 to-indigo-50 dark:from-purple-950/40 dark:via-[#131620] dark:to-indigo-950/40 border border-slate-200 dark:border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left shadow-sm">
            <div>
              <h4 className="font-display font-bold text-xl text-slate-900 dark:text-white mb-1">
                Explore All 40+ Repositories on GitHub
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-gray-400 font-light">
                Inspect commit logs, full-stack monorepos, algorithms, and experiments directly on GitHub.
              </p>
            </div>
            <a
              href="https://github.com/Akash7653"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white dark:bg-white dark:text-[#08090D] dark:hover:bg-gray-100 font-display font-semibold text-sm shadow-md flex items-center gap-2 hover:scale-105 transition-all flex-shrink-0"
            >
              <Github size={18} />
              <span>Visit @Akash7653</span>
            </a>
          </div>
        </motion.div>
      </div>

      {/* Case Study Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div 
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white dark:bg-[#0E1017] rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto border border-slate-200 dark:border-white/[0.1] shadow-2xl relative"
            >
              {/* Modal Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-slate-100/90 dark:bg-[#08090D]/80 text-slate-700 dark:text-gray-300 hover:text-slate-900 dark:hover:text-white border border-slate-200 dark:border-white/[0.1] transition-colors"
                aria-label="Close project modal"
              >
                <X size={18} />
              </button>

              {/* Modal Banner */}
              <div className="relative h-64 overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-br ${selectedProject.gradient} opacity-75`} />
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover mix-blend-overlay"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-[#0E1017] via-transparent to-transparent" />

                <div className="absolute bottom-6 left-6 right-6">
                  <span className="px-3 py-1 rounded-full text-xs font-mono font-medium bg-purple-50/90 dark:bg-purple-950/80 border border-purple-200 dark:border-purple-800/40 text-purple-700 dark:text-purple-300 mb-2 inline-block shadow-sm">
                    {selectedProject.badge}
                  </span>
                  <h3 className="font-display font-bold text-2xl sm:text-3xl text-slate-900 dark:text-white">
                    {selectedProject.title}
                  </h3>
                </div>
              </div>

              {/* Modal Body */}
              <div className="p-6 sm:p-8 space-y-6">
                {/* Problem & Solution Case Study */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="p-4 rounded-2xl bg-slate-50 dark:bg-[#131620] border border-slate-200 dark:border-white/[0.06]">
                    <div className="flex items-center gap-2 text-xs font-mono text-rose-600 dark:text-rose-400 mb-2 font-semibold">
                      <ShieldAlert size={15} />
                      <span>The Engineering Problem</span>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-gray-300 leading-relaxed font-light">
                      {selectedProject.problem}
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-slate-50 dark:bg-[#131620] border border-slate-200 dark:border-white/[0.06]">
                    <div className="flex items-center gap-2 text-xs font-mono text-emerald-600 dark:text-emerald-400 mb-2 font-semibold">
                      <CheckCircle2 size={15} />
                      <span>The Architecture Solution</span>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-gray-300 leading-relaxed font-light">
                      {selectedProject.solution}
                    </p>
                  </div>
                </div>

                {/* Architectural Highlights */}
                <div>
                  <h4 className="text-xs font-mono uppercase tracking-wider text-purple-700 dark:text-purple-400 mb-3 font-semibold">
                    Core Architectural Specifications:
                  </h4>
                  <div className="space-y-2.5">
                    {selectedProject.architectureHighlights.map((highlight, hIdx) => (
                      <div key={hIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600 dark:text-gray-300 font-light leading-relaxed">
                        <CheckCircle2 size={16} className="text-purple-600 dark:text-purple-400 flex-shrink-0 mt-0.5" />
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technologies */}
                <div>
                  <h4 className="text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-gray-400 mb-2.5 font-semibold">
                    Technology Stack &amp; Libraries:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tech.map((t, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 rounded-lg bg-slate-100 dark:bg-[#131620] border border-slate-200 dark:border-white/[0.08] text-xs font-mono text-slate-700 dark:text-gray-200"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Modal Footer Links */}
                <div className="pt-6 border-t border-slate-200 dark:border-white/[0.08] flex flex-wrap gap-3">
                  {selectedProject.github && (
                    <a
                      href={selectedProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 py-3 px-4 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-[#131620] dark:hover:bg-[#1A1E2C] border border-slate-200 dark:border-white/[0.1] text-slate-900 dark:text-white text-xs font-mono font-medium flex items-center justify-center gap-2 transition-colors"
                    >
                      <Github size={16} />
                      <span>View GitHub Repository</span>
                    </a>
                  )}
                  {selectedProject.live && (
                    <a
                      href={selectedProject.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 py-3 px-4 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white text-xs font-mono font-medium shadow-md flex items-center justify-center gap-2 transition-all"
                    >
                      <ExternalLink size={16} />
                      <span>Launch Live Application</span>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
