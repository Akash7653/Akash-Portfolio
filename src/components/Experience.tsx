import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  Calendar, 
  MapPin, 
  Briefcase, 
  CheckCheck 
} from 'lucide-react';

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const experiences = [
    {
      period: 'June 2025 – July 2025',
      title: 'Software Development Engineer Intern',
      company: 'BlueStock Fintech',
      location: 'Fintech / Pune, India (Assignment)',
      badge: 'Featured SDE Internship',
      badgeColor: 'border-purple-500/30 text-purple-300 bg-purple-950/40',
      description: 'Engineered an end-to-end IPO web application as an individual SDE internship assignment within BlueStock Fintech’s engineering program.',
      techStack: [
        'React.js',
        'Node.js',
        'Express.js',
        'MongoDB',
        'JWT Auth',
        'RESTful APIs',
        'Postman',
        'Git',
        'Agile'
      ],
      responsibilities: [
        'Architected and implemented secure JWT-based authentication and authorization mechanisms to manage user sessions and protect sensitive financial endpoints.',
        'Engineered modular RESTful APIs and full CRUD functionality in Express.js and MongoDB to handle real-time IPO listings, subscriber data, and application status workflows.',
        'Built a responsive, accessible client-side interface in React.js featuring clear data visualization and streamlined subscription user journeys.',
        'Conducted systematic API testing and schema validation using Postman while adhering to Agile sprint methodologies and Git version control standards.'
      ]
    },
    {
      period: '2023 – Present',
      title: 'Full Stack & AI Systems Engineer',
      company: 'Independent Engineering & Academic Focus',
      location: 'Hyderabad, Telangana, India',
      badge: 'Product Development',
      badgeColor: 'border-cyan-500/30 text-cyan-300 bg-cyan-950/40',
      description: 'Architecting scalable web applications, real-time multi-role platforms, and AI systems integrating cutting-edge LLMs and computer vision.',
      techStack: [
        'TypeScript',
        'Python',
        'FastAPI',
        'Groq API',
        'Claude API',
        'Hindsight SDK',
        'Socket.IO',
        'PostgreSQL',
        'MongoDB',
        'TensorFlow'
      ],
      responsibilities: [
        'Architected AgriConnect: a multi-role agricultural marketplace supporting Farmers, Buyers, Delivery Partners, and Admins with real-time Socket.IO synchronization and Razorpay payments.',
        'Engineered DealMemory: a persistent-memory CRM intelligence tool using FastAPI, Groq API, and Hindsight SDK for contextual meeting preparation and stakeholder history recall.',
        'Developed CareerShield AI: an intelligent career advisory platform utilizing Anthropic Claude API for in-depth resume optimization and job-offer scam verification.',
        'Trained and deployed deep learning computer vision models (AgriSmart) achieving 85% test accuracy in crop leaf disease diagnosis using TensorFlow and OpenCV.'
      ]
    }
  ];

  return (
    <section id="experience" className="py-24 sm:py-32 relative bg-[#08090D] overflow-hidden">
      {/* Ambient background light */}
      <div className="absolute top-1/3 -right-20 w-80 h-80 bg-purple-900/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 max-w-5xl relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.7 }}
        >
          {/* Section Header */}
          <div className="text-center sm:text-left mb-16 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-mono font-medium mb-4">
              <Briefcase size={14} />
              <span>03 // PROFESSIONAL EXPERIENCE</span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight mb-4">
              Engineering Track Record &amp; Internships
            </h2>
            <p className="text-gray-400 text-base sm:text-lg leading-relaxed font-light">
              Verified corporate software engineering experience and real product development.
            </p>
          </div>

          {/* Timeline Wrapper */}
          <div className="relative">
            {/* Vertical timeline line on desktop */}
            <div className="hidden md:block absolute left-8 top-6 bottom-6 w-[2px] bg-gradient-to-b from-purple-500 via-indigo-500 to-transparent opacity-30" />

            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className="relative md:pl-24"
                >
                  {/* Timeline Node Dot */}
                  <div className="hidden md:flex absolute left-4 top-6 -translate-x-1/2 w-8 h-8 rounded-full bg-[#08090D] border-2 border-purple-500 items-center justify-center text-purple-400 shadow-lg shadow-purple-500/20 z-10">
                    <div className="w-2.5 h-2.5 rounded-full bg-purple-400 animate-pulse" />
                  </div>

                  {/* Experience Card */}
                  <div className="rounded-3xl p-6 sm:p-8 bg-[#0E1017] border border-white/[0.08] hover:border-purple-500/30 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-950/20 group">
                    {/* Header info */}
                    <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                      <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-gray-400">
                        <span className="flex items-center gap-1.5 text-purple-300 font-semibold bg-purple-950/50 px-2.5 py-1 rounded-md border border-purple-800/40">
                          <Calendar size={13} />
                          {exp.period}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <MapPin size={13} className="text-gray-500" />
                          {exp.location}
                        </span>
                      </div>

                      <span className={`px-3 py-1 rounded-full text-xs font-mono font-medium border ${exp.badgeColor}`}>
                        {exp.badge}
                      </span>
                    </div>

                    {/* Role & Company */}
                    <h3 className="font-display font-bold text-xl sm:text-2xl text-white mb-1 group-hover:text-purple-300 transition-colors">
                      {exp.title}
                    </h3>
                    <div className="font-mono text-sm sm:text-base font-semibold text-purple-400 mb-4">
                      {exp.company}
                    </div>

                    <p className="text-gray-300 text-sm leading-relaxed mb-6 font-light">
                      {exp.description}
                    </p>

                    {/* Bullet Points */}
                    <div className="space-y-3 mb-6">
                      {exp.responsibilities.map((resp, rIdx) => (
                        <div key={rIdx} className="flex items-start gap-3 text-xs sm:text-sm text-gray-300 font-light leading-relaxed">
                          <CheckCheck size={16} className="text-emerald-400 flex-shrink-0 mt-0.5" />
                          <span>{resp}</span>
                        </div>
                      ))}
                    </div>

                    {/* Tech Badges */}
                    <div className="pt-5 border-t border-white/[0.06]">
                      <span className="text-[11px] font-mono uppercase tracking-wider text-gray-500 block mb-2.5">
                        Technologies &amp; Architecture:
                      </span>
                      <div className="flex flex-wrap gap-2">
                        {exp.techStack.map((tech, tIdx) => (
                          <span
                            key={tIdx}
                            className="px-2.5 py-1 rounded-lg bg-[#131620] border border-white/[0.06] text-xs font-mono text-gray-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
