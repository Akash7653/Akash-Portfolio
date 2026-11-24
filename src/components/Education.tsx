import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  GraduationCap, 
  Calendar, 
  MapPin, 
  CheckCircle2, 
  BookOpen 
} from 'lucide-react';

export default function Education() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const educationList = [
    {
      period: '2023 – 2027 (Expected)',
      degree: 'B.Tech — Computer Science & Engineering (AI & ML)',
      institution: 'Malla Reddy Engineering College',
      location: 'Hyderabad, Telangana, India',
      badge: 'CGPA: 8.55 / 10',
      badgeColor: 'border-purple-500/30 text-purple-300 bg-purple-950/40',
      description: 'Pursuing Bachelor of Technology with specialized curriculum in Artificial Intelligence, Machine Learning algorithms, and scalable computer science foundations.',
      highlights: [
        'Maintaining an academic performance of 8.55 / 10 CGPA throughout the degree program.',
        'Core computer science coursework: Data Structures & Algorithms, Object-Oriented Programming (OOP), Database Management Systems (DBMS), Operating Systems, and Computer Networks.',
        'Applied specialized machine learning algorithms, deep learning neural networks, and computer vision theory to practical engineering projects.',
        'Active participant in technical symposiums, hackathons, and software development challenges.'
      ],
      competencies: ['Data Structures', 'Algorithms', 'DBMS', 'Operating Systems', 'Computer Networks', 'Machine Learning', 'Python', 'C']
    },
    {
      period: '2021 – 2023',
      degree: 'Higher Secondary Education — Intermediate (MPC)',
      institution: 'Narayana Junior College',
      location: 'Telangana, India',
      badge: 'Score: 989 / 1000',
      badgeColor: 'border-cyan-500/30 text-cyan-300 bg-cyan-950/40',
      description: 'Completed senior secondary schooling concentrating on Mathematics, Physics, and Chemistry (MPC) with academic distinction.',
      highlights: [
        'Secured an academic score of 989 out of 1000 (98.9%).',
        'Built a strong foundation in differential calculus, linear algebra, analytical reasoning, and algorithmic logic.',
        'Developed computational problem-solving and rigorous quantitative aptitude.'
      ],
      competencies: ['Advanced Mathematics', 'Physics', 'Chemistry', 'Analytical Logic']
    },
    {
      period: '2020 – 2021',
      degree: 'Secondary School Certificate (SSC)',
      institution: 'Trinity Model Secondary School',
      location: 'Telangana, India',
      badge: '10.0 CGPA (Distinction)',
      badgeColor: 'border-emerald-500/30 text-emerald-300 bg-emerald-950/40',
      description: 'Graduated secondary schooling with the highest attainable academic grade point average.',
      highlights: [
        'Achieved a perfect 10.0 CGPA across all secondary subjects.',
        'Demonstrated early proficiency and passion for computing, mathematics, and science.'
      ],
      competencies: ['General Science', 'Mathematics', 'Computer Fundamentals']
    }
  ];

  return (
    <section id="education" className="py-24 sm:py-32 relative bg-[#08090D] overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 -left-20 w-80 h-80 bg-purple-900/10 rounded-full blur-[110px] pointer-events-none" />

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
              <GraduationCap size={14} />
              <span>05 // ACADEMIC FOUNDATIONS</span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight mb-4">
              Education &amp; Academic Qualifications
            </h2>
            <p className="text-gray-400 text-base sm:text-lg leading-relaxed font-light">
              Verified academic institutions, verified grade metrics, and core theoretical fundamentals.
            </p>
          </div>

          {/* Education Cards */}
          <div className="space-y-8">
            {educationList.map((edu, index) => (
              <div
                key={index}
                className="rounded-3xl p-6 sm:p-8 bg-[#0E1017] border border-white/[0.08] hover:border-purple-500/30 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-950/15 group"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-5">
                  <div className="flex items-start sm:items-center gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-purple-600/10 border border-purple-500/20 flex items-center justify-center text-purple-400 group-hover:bg-purple-600 group-hover:text-white transition-all flex-shrink-0">
                      <BookOpen size={22} />
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-xl sm:text-2xl text-white group-hover:text-purple-300 transition-colors">
                        {edu.institution}
                      </h3>
                      <p className="text-sm font-mono text-purple-400">
                        {edu.degree}
                      </p>
                    </div>
                  </div>

                  <span className={`self-start sm:self-center px-3.5 py-1.5 rounded-full text-xs font-mono font-semibold border ${edu.badgeColor}`}>
                    {edu.badge}
                  </span>
                </div>

                <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-gray-400 mb-5 pb-4 border-b border-white/[0.06]">
                  <span className="flex items-center gap-1.5 text-purple-300 font-medium">
                    <Calendar size={13} />
                    {edu.period}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <MapPin size={13} className="text-gray-500" />
                    {edu.location}
                  </span>
                </div>

                <p className="text-gray-300 text-xs sm:text-sm leading-relaxed mb-6 font-light">
                  {edu.description}
                </p>

                <div className="space-y-2.5 mb-6">
                  {edu.highlights.map((h, hIdx) => (
                    <div key={hIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-300 font-light leading-relaxed">
                      <CheckCircle2 size={15} className="text-emerald-400 flex-shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-4 border-t border-white/[0.06]">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-gray-500 block mb-2">
                    Key Coursework &amp; Competencies:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {edu.competencies.map((comp, cIdx) => (
                      <span
                        key={cIdx}
                        className="px-2.5 py-1 rounded-lg bg-[#131620] border border-white/[0.06] text-xs font-mono text-gray-300"
                      >
                        {comp}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
