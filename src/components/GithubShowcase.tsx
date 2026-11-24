import { useState, useEffect } from 'react';
import { 
  Github, 
  GitFork, 
  Star, 
  ExternalLink, 
  Terminal, 
  FolderGit2 
} from 'lucide-react';

interface RepoData {
  name: string;
  description: string;
  language: string;
  stars: number;
  forks: number;
  url: string;
  tags: string[];
}

const fallbackRepos: RepoData[] = [
  {
    name: 'AgriConnect',
    description: 'Multi-role agricultural marketplace supporting Farmer, Buyer, Delivery Partner, and Admin with WebSockets & Razorpay.',
    language: 'TypeScript',
    stars: 1,
    forks: 0,
    url: 'https://github.com/Akash7653/AgriConnect',
    tags: ['React', 'Node.js', 'Socket.IO', 'MongoDB']
  },
  {
    name: 'deal-memory',
    description: 'Persistent-memory application for retaining customer context and deal intelligence using FastAPI, Groq API, and Hindsight SDK.',
    language: 'Python',
    stars: 0,
    forks: 0,
    url: 'https://github.com/Akash7653/deal-memory',
    tags: ['FastAPI', 'Groq API', 'Hindsight', 'LLM']
  },
  {
    name: 'CareerShield_AI',
    description: 'AI-assisted career toolkit for resume optimization, cover-letter generation, and job-offer scam verification with Claude API.',
    language: 'JavaScript',
    stars: 0,
    forks: 0,
    url: 'https://github.com/Akash7653/CareerShield_AI',
    tags: ['React', 'Claude API', 'Express.js']
  },
  {
    name: 'Farms',
    description: 'AgriSmart: AI crop leaf disease diagnosis achieving 85% prediction accuracy with TensorFlow CNN & OpenCV vision pipeline.',
    language: 'TypeScript',
    stars: 1,
    forks: 0,
    url: 'https://github.com/Akash7653/Farms',
    tags: ['TensorFlow', 'OpenCV', 'React']
  },
  {
    name: 'School',
    description: 'School Management System with role-based authentication (Admin/Teacher/Student) and integrated payment gateway.',
    language: 'JavaScript',
    stars: 0,
    forks: 0,
    url: 'https://github.com/Akash7653/School',
    tags: ['MERN', 'RBAC', 'MongoDB']
  },
  {
    name: 'JobTrackr',
    description: 'Full-stack application tracking candidate recruitment pipeline stages and interview timelines.',
    language: 'TypeScript',
    stars: 0,
    forks: 0,
    url: 'https://github.com/Akash7653/JobTrackr',
    tags: ['TypeScript', 'React', 'Tailwind']
  }
];

export default function GithubShowcase() {
  const repos = fallbackRepos;
  const [profile, setProfile] = useState({
    publicRepos: 40,
    username: 'Akash7653',
    url: 'https://github.com/Akash7653'
  });

  useEffect(() => {
    // Attempt dynamic GitHub API fetch; fall back gracefully if rate-limited
    const fetchGitHubData = async () => {
      try {
        const userRes = await fetch('https://api.github.com/users/Akash7653');
        if (userRes.ok) {
          const userData = await userRes.json();
          setProfile({
            publicRepos: userData.public_repos || 40,
            username: userData.login || 'Akash7653',
            url: userData.html_url || 'https://github.com/Akash7653'
          });
        }
      } catch {
        // Fall back gracefully to verified state
      }
    };

    fetchGitHubData();
  }, []);

  return (
    <section id="github" className="py-24 sm:py-32 relative bg-slate-50 dark:bg-[#08090D] overflow-hidden transition-colors duration-300">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/3 w-96 h-96 bg-purple-900/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 max-w-6xl relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-600 dark:text-purple-400 text-xs font-mono font-medium mb-4">
              <Github size={14} />
              <span>07 // OPEN SOURCE &amp; REPOSITORIES</span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-slate-900 dark:text-white tracking-tight mb-3">
              GitHub Engineering Activity
            </h2>
            <p className="text-slate-600 dark:text-gray-400 text-base sm:text-lg leading-relaxed font-light">
              Verified public repositories, full-stack monorepos, and machine learning models.
            </p>
          </div>

          {/* GitHub Stats Badge */}
          <div className="flex items-center gap-4 bg-white dark:bg-[#0E1017] p-4 rounded-2xl border border-slate-200 dark:border-white/[0.08] shadow-lg self-start md:self-auto">
            <div className="w-12 h-12 rounded-xl bg-purple-600/10 border border-purple-500/20 flex items-center justify-center text-purple-600 dark:text-purple-400">
              <FolderGit2 size={24} />
            </div>
            <div>
              <div className="font-display font-extrabold text-2xl text-slate-900 dark:text-white">
                {profile.publicRepos}+
              </div>
              <div className="text-xs font-mono text-slate-500 dark:text-gray-400">
                Public Repositories
              </div>
            </div>
          </div>
        </div>

        {/* Selected Repositories Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {repos.map((repo, index) => (
            <a
              key={index}
              href={repo.url}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-2xl p-6 bg-white dark:bg-[#0E1017] border border-slate-200 dark:border-white/[0.08] hover:border-purple-500/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl flex flex-col justify-between group"
            >
              <div>
                {/* Header */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <div className="flex items-center gap-2 text-slate-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-300 transition-colors font-display font-bold text-base">
                    <Terminal size={16} className="text-purple-600 dark:text-purple-400 flex-shrink-0" />
                    <span className="truncate">{repo.name}</span>
                  </div>
                  <ExternalLink size={14} className="text-slate-400 dark:text-gray-500 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors flex-shrink-0" />
                </div>

                <p className="text-xs text-slate-600 dark:text-gray-400 font-light leading-relaxed mb-4 line-clamp-3">
                  {repo.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {repo.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2 py-0.5 rounded-md bg-slate-100 dark:bg-[#131620] border border-slate-200/60 dark:border-white/[0.04] text-[10px] font-mono text-slate-700 dark:text-gray-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Repo Meta Footer */}
              <div className="pt-3 border-t border-slate-100 dark:border-white/[0.06] flex items-center justify-between text-xs font-mono text-slate-500 dark:text-gray-400">
                <span className="flex items-center gap-1.5">
                  <span className={`w-2 h-2 rounded-full ${
                    repo.language === 'TypeScript' ? 'bg-blue-500' :
                    repo.language === 'Python' ? 'bg-amber-500' :
                    'bg-yellow-500'
                  }`} />
                  {repo.language}
                </span>

                <div className="flex items-center gap-3">
                  <span className="flex items-center gap-1 hover:text-slate-900 dark:hover:text-white">
                    <Star size={12} className="text-purple-500 dark:text-purple-400" />
                    <span>{repo.stars}</span>
                  </span>
                  <span className="flex items-center gap-1 hover:text-slate-900 dark:hover:text-white">
                    <GitFork size={12} />
                    <span>{repo.forks}</span>
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="text-center">
          <a
            href={profile.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white dark:bg-[#131620] hover:bg-slate-100 dark:hover:bg-[#1A1E2C] border border-slate-200 dark:border-white/[0.08] hover:border-purple-500/40 text-slate-800 dark:text-gray-200 hover:text-purple-600 dark:hover:text-white text-xs font-mono font-medium transition-all shadow-sm"
          >
            <Github size={16} />
            <span>View All Repositories on GitHub &rarr;</span>
          </a>
        </div>
      </div>
    </section>
  );
}
