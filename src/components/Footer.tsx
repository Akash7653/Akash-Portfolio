import { 
  Github, 
  Linkedin, 
  Mail, 
  Terminal, 
  ArrowUp, 
  FileDown, 
  ExternalLink 
} from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 dark:bg-[#050608] text-white pt-16 pb-12 border-t border-slate-800 dark:border-white/[0.08] relative transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
        <div className="grid md:grid-cols-12 gap-10 pb-12 border-b border-slate-800/80 dark:border-white/[0.06]">
          {/* Col 1: Identity & Bio */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-600 via-indigo-600 to-cyan-500 p-[1px] shadow-lg">
                <div className="w-full h-full bg-slate-900 dark:bg-[#0E1017] rounded-[11px] flex items-center justify-center text-purple-400">
                  <Terminal size={19} />
                </div>
              </div>
              <span className="font-display font-bold text-xl text-white tracking-tight">
                Akash<span className="text-purple-400">.</span>dev
              </span>
            </div>

            <p className="text-gray-400 text-xs sm:text-sm leading-relaxed font-light max-w-sm">
              Software Development Engineer &amp; Full Stack AI Developer. Former SDE Intern at BlueStock Fintech. Dedicated to high-reliability software, scalable distributed systems, and real-world applied AI.
            </p>

            <div className="pt-2">
              <a
                href="/Akash-Koravena-Resume.pdf"
                download="Akash-Koravena-Resume.pdf"
                className="inline-flex items-center gap-2 text-xs font-mono text-purple-400 hover:text-purple-300 font-medium"
              >
                <FileDown size={14} />
                <span>Download Verified Resume PDF (199 KB)</span>
              </a>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="md:col-span-4">
            <h4 className="text-xs font-mono uppercase tracking-wider text-purple-400 mb-4 font-semibold">
              Navigation
            </h4>
            <div className="grid grid-cols-2 gap-2 text-xs font-mono">
              {[
                { name: 'Home', href: '#' },
                { name: 'About', href: '#about' },
                { name: 'Skills', href: '#skills' },
                { name: 'Experience', href: '#experience' },
                { name: 'Projects', href: '#projects' },
                { name: 'Open Source', href: '#github' },
                { name: 'Education', href: '#education' },
                { name: 'Contact', href: '#contact' }
              ].map((link) => (
                <button
                  key={link.name}
                  onClick={() => {
                    if (link.href === '#') window.scrollTo({ top: 0, behavior: 'smooth' });
                    else document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="text-left text-gray-400 hover:text-white transition-colors py-1"
                >
                  {link.name}
                </button>
              ))}
            </div>
          </div>

          {/* Col 3: Verified Channels & Socials */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-wider text-purple-400 mb-4 font-semibold">
              Verified Profiles
            </h4>
            <div className="flex flex-col gap-2.5 text-xs font-mono">
              <a
                href="https://github.com/Akash7653"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
              >
                <Github size={15} />
                <span>github.com/Akash7653</span>
                <ExternalLink size={11} className="text-gray-600 ml-auto" />
              </a>
              <a
                href="https://www.linkedin.com/in/akash-babu-koravena/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
              >
                <Linkedin size={15} />
                <span>linkedin.com/in/akash-babu</span>
                <ExternalLink size={11} className="text-gray-600 ml-auto" />
              </a>
              <a
                href="https://leetcode.com/u/akash_152"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
              >
                <span className="font-bold text-amber-400">LC</span>
                <span>leetcode.com/u/akash_152</span>
                <ExternalLink size={11} className="text-gray-600 ml-auto" />
              </a>
              <a
                href="mailto:akashkoravena@gmail.com"
                className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
              >
                <Mail size={15} />
                <span>akashkoravena@gmail.com</span>
                <ExternalLink size={11} className="text-gray-600 ml-auto" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Credits & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-gray-500">
          <div>
            &copy; {currentYear} Akash Koravena (Koravena Akash Babu). All rights reserved.
          </div>

          <div className="flex items-center gap-4">
            <span>Hyderabad, Telangana, India</span>
            <span>&bull;</span>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 text-gray-400 hover:text-purple-400 transition-colors"
              aria-label="Back to top"
            >
              <span>Back to Top</span>
              <ArrowUp size={13} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
