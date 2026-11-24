import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  Trophy, 
  Award, 
  Code2, 
  ExternalLink, 
  CheckCircle2, 
  BrainCircuit 
} from 'lucide-react';

export default function Achievements() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const verifiedAchievements = [
    {
      icon: Award,
      title: 'SDE Internship Certificate',
      issuer: 'BlueStock Fintech',
      category: 'Corporate Certification',
      date: 'July 2025',
      badge: 'Verified Credential',
      description: 'Awarded completion certificate for Software Development Engineer internship after successfully developing an individual IPO web application using React.js, Express.js, and MongoDB.',
      stats: 'SDE Certified',
      gradient: 'from-purple-500 to-indigo-600',
      link: null
    },
    {
      icon: Code2,
      title: 'Algorithmic Problem Solving',
      issuer: 'LeetCode & HackerRank',
      category: 'DSA & Competitive Programming',
      date: 'Active',
      badge: 'Verified Profiles',
      description: 'Actively solving Data Structures and Algorithms problems in Python and C++, honing algorithmic intuition across trees, graphs, dynamic programming, and arrays.',
      stats: 'Active Solver',
      gradient: 'from-amber-500 to-orange-600',
      profiles: [
        { name: 'LeetCode Profile', url: 'https://leetcode.com/u/akash_152' },
        { name: 'HackerRank Profile', url: 'https://hackerrank.com/profile/akashkoravena' }
      ]
    },
    {
      icon: BrainCircuit,
      title: '85% Accuracy AI Vision Model',
      issuer: 'AgriSmart Project Milestone',
      category: 'Applied Machine Learning',
      date: 'Research & Engineering',
      badge: 'Computer Vision',
      description: 'Trained and tuned a Convolutional Neural Network (CNN) in TensorFlow achieving an 85% diagnostic prediction accuracy across plant crop leaf datasets with real-time inference.',
      stats: '85% Model Accuracy',
      gradient: 'from-emerald-500 to-teal-600',
      link: 'https://farms-gat6.vercel.app'
    },
    {
      icon: Trophy,
      title: 'Team Hackathons Participant',
      issuer: 'Engineering Competitions',
      category: 'Collaborative Problem Solving',
      date: 'College & Industry Sprints',
      badge: 'Team Innovation',
      description: 'Participated in intense team hackathons, gaining hands-on experience in rapid prototyping, cross-functional engineering, system integration, and presentation under pressure.',
      stats: 'Collaborative Dev',
      gradient: 'from-blue-500 to-cyan-600',
      link: null
    }
  ];

  const verifiedMetrics = [
    { label: 'SDE Corporate Internship', value: '1', note: 'BlueStock Fintech' },
    { label: 'B.Tech Academic CGPA', value: '8.55', note: 'MREC (AI & ML)' },
    { label: 'Intermediate Score', value: '989', note: 'Out of 1000 (98.9%)' },
    { label: 'Public GitHub Repos', value: '40+', note: '@Akash7653' }
  ];

  return (
    <section id="achievements" className="py-24 sm:py-32 relative bg-[#0E1017] overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-purple-900/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 max-w-6xl relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.7 }}
        >
          {/* Section Header */}
          <div className="text-center sm:text-left mb-16 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-mono font-medium mb-4">
              <Trophy size={14} />
              <span>06 // CREDENTIALS &amp; MILESTONES</span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight mb-4">
              Verified Certifications &amp; Achievements
            </h2>
            <p className="text-gray-400 text-base sm:text-lg leading-relaxed font-light">
              Only authentic credentials, verified certificates, algorithmic profiles, and engineering benchmarks.
            </p>
          </div>

          {/* Achievements Grid */}
          <div className="grid md:grid-cols-2 gap-6 mb-16">
            {verifiedAchievements.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="rounded-3xl p-6 sm:p-8 bg-[#131620] border border-white/[0.08] hover:border-purple-500/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl flex flex-col justify-between group"
                >
                  <div>
                    {/* Top Row */}
                    <div className="flex items-center justify-between gap-3 mb-5">
                      <div className="flex items-center gap-3">
                        <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${item.gradient} p-0.5 shadow-md flex items-center justify-center text-white`}>
                          <Icon size={22} />
                        </div>
                        <div>
                          <span className="text-[11px] font-mono text-purple-400 block">
                            {item.category}
                          </span>
                          <span className="text-xs text-gray-400 font-mono">
                            {item.date}
                          </span>
                        </div>
                      </div>

                      <span className="px-3 py-1 rounded-full text-[11px] font-mono font-medium bg-[#0E1017] border border-white/[0.08] text-gray-300">
                        {item.badge}
                      </span>
                    </div>

                    <h3 className="font-display font-bold text-xl text-white mb-1 group-hover:text-purple-300 transition-colors">
                      {item.title}
                    </h3>
                    <div className="text-xs font-mono font-semibold text-gray-400 mb-3">
                      Issued by: <span className="text-white">{item.issuer}</span>
                    </div>

                    <p className="text-gray-300 text-xs sm:text-sm leading-relaxed mb-6 font-light">
                      {item.description}
                    </p>
                  </div>

                  {/* Footer Action / Profiles */}
                  <div className="pt-4 border-t border-white/[0.06] flex flex-wrap items-center justify-between gap-3">
                    <span className={`text-xs font-mono font-bold bg-gradient-to-r ${item.gradient} bg-clip-text text-transparent`}>
                      {item.stats}
                    </span>

                    {item.profiles ? (
                      <div className="flex items-center gap-2">
                        {item.profiles.map((prof, pIdx) => (
                          <a
                            key={pIdx}
                            href={prof.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-[#0E1017] hover:bg-white/[0.08] text-[11px] font-mono text-gray-300 hover:text-white border border-white/[0.06] transition-colors"
                          >
                            <span>{prof.name}</span>
                            <ExternalLink size={11} />
                          </a>
                        ))}
                      </div>
                    ) : item.link ? (
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs font-mono text-purple-400 hover:text-purple-300"
                      >
                        <span>View Project</span>
                        <ExternalLink size={12} />
                      </a>
                    ) : (
                      <span className="text-[11px] font-mono text-emerald-400 flex items-center gap-1">
                        <CheckCircle2 size={12} /> Verified by Resume
                      </span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Verified Journey In Numbers Counter Matrix */}
          <div className="rounded-3xl p-8 sm:p-10 bg-gradient-to-r from-purple-950/40 via-[#131620] to-indigo-950/40 border border-white/[0.08] shadow-2xl">
            <h3 className="font-display font-bold text-xl sm:text-2xl text-white text-center mb-8">
              Verified Engineering Metrics
            </h3>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
              {verifiedMetrics.map((stat, index) => (
                <div
                  key={index}
                  className="rounded-2xl p-4 sm:p-5 bg-[#0E1017]/80 border border-white/[0.06] text-center"
                >
                  <div className="font-display font-extrabold text-3xl sm:text-4xl text-white mb-1 tracking-tight">
                    {stat.value}
                  </div>
                  <div className="text-xs sm:text-sm font-semibold text-purple-300 mb-0.5">
                    {stat.label}
                  </div>
                  <div className="text-[11px] font-mono text-gray-500">
                    {stat.note}
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
