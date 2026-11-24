import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { 
  Code2, 
  Server, 
  BrainCircuit, 
  Database, 
  Wrench, 
  BookOpen, 
  Sparkles, 
  Layers,
  LucideIcon
} from 'lucide-react';

interface SkillCategory {
  id: string;
  title: string;
  subtitle: string;
  icon: LucideIcon;
  accentColor: string;
  borderGlow: string;
  skills: { name: string; tag?: string }[];
}

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories: SkillCategory[] = [
    {
      id: 'languages',
      title: 'Programming Languages',
      subtitle: 'Core algorithmic and systems engineering languages',
      icon: Code2,
      accentColor: 'from-purple-500 to-indigo-600',
      borderGlow: 'hover:border-purple-500/40',
      skills: [
        { name: 'Python', tag: 'Primary / AI' },
        { name: 'TypeScript', tag: 'Type-Safe' },
        { name: 'JavaScript (ES6+)', tag: 'Modern Web' },
        { name: 'C', tag: 'Systems Core' },
        { name: 'SQL', tag: 'Relational' }
      ]
    },
    {
      id: 'frontend',
      title: 'Frontend Engineering',
      subtitle: 'Modern component architectures and responsive client UI',
      icon: Layers,
      accentColor: 'from-blue-500 to-cyan-500',
      borderGlow: 'hover:border-cyan-500/40',
      skills: [
        { name: 'React.js', tag: 'Hooks / Context' },
        { name: 'Next.js', tag: 'SSR / App Router' },
        { name: 'Tailwind CSS', tag: 'Design Tokens' },
        { name: 'HTML5 & CSS3', tag: 'Semantic' },
        { name: 'Responsive UI Design', tag: 'Mobile-First' },
        { name: 'Framer Motion', tag: 'Animation' }
      ]
    },
    {
      id: 'backend',
      title: 'Backend & APIs',
      subtitle: 'Robust distributed services, authentication, and protocols',
      icon: Server,
      accentColor: 'from-emerald-500 to-teal-600',
      borderGlow: 'hover:border-emerald-500/40',
      skills: [
        { name: 'Node.js', tag: 'Runtime' },
        { name: 'Express.js', tag: 'Microservices' },
        { name: 'FastAPI', tag: 'Python Async' },
        { name: 'RESTful APIs', tag: 'Architecture' },
        { name: 'JWT Authentication', tag: 'Security / RBAC' },
        { name: 'Socket.IO', tag: 'Real-Time WebSockets' }
      ]
    },
    {
      id: 'aiml',
      title: 'AI, ML & LLMs',
      subtitle: 'Intelligent inference, agent memory, and vision models',
      icon: BrainCircuit,
      accentColor: 'from-violet-500 to-purple-600',
      borderGlow: 'hover:border-purple-500/40',
      skills: [
        { name: 'LLM API Integration', tag: 'Prompting' },
        { name: 'Groq API', tag: 'Fast Inference' },
        { name: 'Claude API', tag: 'Reasoning' },
        { name: 'Hindsight SDK', tag: 'Memory Workflows' },
        { name: 'Machine Learning', tag: 'Supervised' },
        { name: 'TensorFlow', tag: 'CNN / Neural Nets' },
        { name: 'OpenCV', tag: 'Computer Vision' }
      ]
    },
    {
      id: 'databases',
      title: 'Databases & Storage',
      subtitle: 'Schema design, data modeling, and query optimization',
      icon: Database,
      accentColor: 'from-amber-500 to-orange-600',
      borderGlow: 'hover:border-amber-500/40',
      skills: [
        { name: 'MongoDB', tag: 'Document Store' },
        { name: 'PostgreSQL', tag: 'ACID Relational' },
        { name: 'SQL', tag: 'Complex Queries' },
        { name: 'Mongoose ODM', tag: 'Data Modeling' }
      ]
    },
    {
      id: 'devops',
      title: 'Developer Tools & Platforms',
      subtitle: 'Version control, containerization, and CI/CD workflows',
      icon: Wrench,
      accentColor: 'from-pink-500 to-rose-600',
      borderGlow: 'hover:border-pink-500/40',
      skills: [
        { name: 'Git', tag: 'Branching Workflows' },
        { name: 'GitHub', tag: 'Collaboration' },
        { name: 'Docker', tag: 'Containerization' },
        { name: 'Postman', tag: 'API Testing' },
        { name: 'Vercel', tag: 'Cloud Deployment' },
        { name: 'Agile & Scrum', tag: 'Sprints' }
      ]
    },
    {
      id: 'cs',
      title: 'Computer Science Core',
      subtitle: 'Foundational theory, system design, and algorithms',
      icon: BookOpen,
      accentColor: 'from-indigo-500 to-blue-600',
      borderGlow: 'hover:border-indigo-500/40',
      skills: [
        { name: 'Data Structures & Algorithms', tag: 'LeetCode / HackerRank' },
        { name: 'Object-Oriented Programming (OOP)', tag: 'Design Patterns' },
        { name: 'Database Management Systems (DBMS)', tag: 'Normalization' },
        { name: 'Operating Systems', tag: 'Concurrency' },
        { name: 'Computer Networks', tag: 'TCP/IP, HTTP' }
      ]
    }
  ];

  const filteredCategories = selectedCategory === 'all'
    ? categories
    : categories.filter(c => c.id === selectedCategory);

  return (
    <section id="skills" className="py-24 sm:py-32 relative bg-[#0E1017] overflow-hidden">
      {/* Background Subtle Mesh */}
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff04_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 max-w-6xl relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.7 }}
        >
          {/* Section Header */}
          <div className="text-center sm:text-left mb-12 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono font-medium mb-4">
              <Sparkles size={14} />
              <span>02 // TECHNICAL COMPETENCIES</span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight mb-4">
              Verified Technical Stack &amp; Tooling
            </h2>
            <p className="text-gray-400 text-base sm:text-lg leading-relaxed font-light">
              Technologies and frameworks backed by real-world project code, academic rigor, and production internship experience.
            </p>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap gap-2 mb-10 pb-2 border-b border-white/[0.08]">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-4 py-2 rounded-xl text-xs font-mono transition-all duration-200 ${
                selectedCategory === 'all'
                  ? 'bg-purple-600 text-white font-semibold shadow-md shadow-purple-600/30'
                  : 'bg-[#131620] text-gray-400 hover:text-white hover:bg-[#1A1E2C]'
              }`}
            >
              All Categories ({categories.length})
            </button>
            {categories.map((c) => (
              <button
                key={c.id}
                onClick={() => setSelectedCategory(c.id)}
                className={`px-3.5 py-2 rounded-xl text-xs font-mono transition-all duration-200 ${
                  selectedCategory === c.id
                    ? 'bg-purple-600 text-white font-semibold shadow-md shadow-purple-600/30'
                    : 'bg-[#131620] text-gray-400 hover:text-white hover:bg-[#1A1E2C]'
                }`}
              >
                {c.title}
              </button>
            ))}
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCategories.map((cat) => {
              const Icon = cat.icon;
              return (
                <div
                  key={cat.id}
                  className={`rounded-2xl p-6 bg-[#131620] border border-white/[0.08] ${cat.borderGlow} transition-all duration-300 hover:-translate-y-1 hover:shadow-xl flex flex-col justify-between group`}
                >
                  <div>
                    {/* Category Header */}
                    <div className="flex items-start justify-between gap-3 mb-4">
                      <div className="flex items-center gap-3">
                        <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${cat.accentColor} p-0.5 shadow-md flex items-center justify-center text-white`}>
                          <Icon size={18} />
                        </div>
                        <div>
                          <h3 className="font-display font-bold text-base text-white group-hover:text-purple-300 transition-colors">
                            {cat.title}
                          </h3>
                        </div>
                      </div>
                    </div>

                    <p className="text-xs text-gray-400 font-light mb-5">
                      {cat.subtitle}
                    </p>

                    {/* Skill Badges */}
                    <div className="flex flex-wrap gap-2">
                      {cat.skills.map((skill, sIdx) => (
                        <div
                          key={sIdx}
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#0E1017] border border-white/[0.06] hover:border-purple-500/30 transition-colors"
                        >
                          <span className="text-xs font-medium text-gray-200">
                            {skill.name}
                          </span>
                          {skill.tag && (
                            <span className="text-[10px] font-mono text-purple-400/80 bg-purple-950/40 px-1.5 py-0.5 rounded">
                              {skill.tag}
                            </span>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-white/[0.05] flex items-center justify-between text-[11px] font-mono text-gray-500">
                    <span>{cat.skills.length} verified technologies</span>
                    <span className="text-emerald-400/80">&bull; Production Tested</span>
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
