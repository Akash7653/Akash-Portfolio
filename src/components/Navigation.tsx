import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Home, 
  User, 
  Code2, 
  Briefcase, 
  Mail, 
  Moon, 
  Sun, 
  Terminal, 
  Award, 
  GraduationCap, 
  Menu, 
  X, 
  FileDown, 
  Github, 
  Linkedin,
  ExternalLink,
  LucideIcon
} from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

interface NavItem {
  id: string;
  name: string;
  href: string;
  icon: LucideIcon;
}

const navItems: NavItem[] = [
  { id: 'about', name: 'About', href: '#about', icon: User },
  { id: 'skills', name: 'Skills', href: '#skills', icon: Code2 },
  { id: 'experience', name: 'Experience', href: '#experience', icon: Award },
  { id: 'projects', name: 'Projects', href: '#projects', icon: Briefcase },
  { id: 'github', name: 'Open Source', href: '#github', icon: Github },
  { id: 'education', name: 'Education', href: '#education', icon: GraduationCap },
  { id: 'contact', name: 'Contact', href: '#contact', icon: Mail }
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('home');
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const sectionIds = ['about', 'skills', 'experience', 'projects', 'github', 'education', 'contact'];
      const scrollPosition = window.scrollY + 240;

      if (window.scrollY < 300) {
        setActiveSection('home');
        return;
      }

      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    setIsOpen(false);
    if (href === '#') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <>
      {/* Top Header Navbar */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-[#08090D]/85 backdrop-blur-xl border-b border-white/[0.08] shadow-2xl py-3.5'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
          <div className="flex items-center justify-between">
            {/* Brand Logo */}
            <button
              onClick={() => scrollToSection('#')}
              className="flex items-center gap-3 group text-left focus:outline-none"
              aria-label="Back to top"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-600 via-indigo-600 to-cyan-500 p-[1px] shadow-lg group-hover:shadow-purple-500/25 transition-all duration-300">
                <div className="w-full h-full bg-[#0E1017] rounded-[11px] flex items-center justify-center text-purple-400 group-hover:text-white transition-colors">
                  <Terminal size={19} className="group-hover:scale-110 transition-transform duration-300" />
                </div>
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-2">
                  <span className="font-display font-bold text-lg text-white tracking-tight group-hover:text-purple-300 transition-colors">
                    Akash<span className="text-purple-400">.</span>dev
                  </span>
                  <span className="hidden xl:inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[11px] font-mono font-medium text-emerald-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                    Available for SDE Roles
                  </span>
                </div>
                <span className="text-[11px] text-gray-400 font-mono tracking-wider">
                  Software Engineer &bull; AI/ML
                </span>
              </div>
            </button>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-1 bg-[#131620]/90 border border-white/[0.08] px-3 py-1.5 rounded-full shadow-inner backdrop-blur-md">
              {navItems.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.href)}
                    className={`relative px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
                      isActive
                        ? 'text-white font-semibold'
                        : 'text-gray-400 hover:text-white hover:bg-white/[0.04]'
                    }`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="activePill"
                        className="absolute inset-0 bg-gradient-to-r from-purple-600/80 to-indigo-600/80 rounded-full -z-10 shadow-sm"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                    <span>{item.name}</span>
                  </button>
                );
              })}
            </nav>

            {/* Right Action Cluster */}
            <div className="flex items-center gap-3">
              {/* Resume Download Button */}
              <a
                href="/Akash-Koravena-Resume.pdf"
                download="Akash-Koravena-Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white text-xs font-semibold shadow-lg shadow-purple-600/20 hover:shadow-purple-600/40 transition-all duration-300 hover:scale-[1.02] border border-white/10"
              >
                <FileDown size={14} />
                <span>Resume</span>
              </a>

              {/* Theme Toggle (Dark/Light mode switch) */}
              <button
                onClick={toggleTheme}
                className="p-2.5 rounded-xl bg-[#131620] hover:bg-[#1A1E2C] border border-white/[0.08] text-gray-300 hover:text-white transition-all duration-200 focus:outline-none"
                aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
              >
                {theme === 'dark' ? (
                  <Sun size={17} className="text-amber-400 hover:rotate-45 transition-transform" />
                ) : (
                  <Moon size={17} className="text-purple-400 hover:-rotate-12 transition-transform" />
                )}
              </button>

              {/* Mobile Menu Toggle Button */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="lg:hidden p-2.5 rounded-xl bg-[#131620] border border-white/[0.08] text-gray-300 hover:text-white transition-colors"
                aria-label="Toggle navigation menu"
              >
                {isOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Menu Drawer */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25 }}
              className="lg:hidden bg-[#08090D]/95 backdrop-blur-2xl border-b border-white/[0.08] px-4 pt-4 pb-6 overflow-hidden"
            >
              <div className="flex flex-col gap-1.5 mb-5">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.href)}
                    className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                      activeSection === item.id
                        ? 'bg-purple-600/20 text-purple-300 border border-purple-500/30 font-semibold'
                        : 'text-gray-300 hover:bg-white/[0.05] hover:text-white'
                    }`}
                  >
                    <item.icon size={17} className="text-purple-400" />
                    <span>{item.name}</span>
                  </button>
                ))}
              </div>

              {/* Mobile Actions: Resume + Links */}
              <div className="pt-4 border-t border-white/[0.08] flex flex-col gap-3">
                <a
                  href="/Akash-Koravena-Resume.pdf"
                  download="Akash-Koravena-Resume.pdf"
                  className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 text-white text-sm font-semibold shadow-lg"
                >
                  <FileDown size={16} />
                  <span>Download Verified Resume PDF</span>
                </a>

                <div className="flex items-center justify-center gap-4 text-xs text-gray-400 pt-2">
                  <a
                    href="https://github.com/Akash7653"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 hover:text-white"
                  >
                    <Github size={15} /> GitHub <ExternalLink size={11} />
                  </a>
                  <span>&bull;</span>
                  <a
                    href="https://www.linkedin.com/in/akash-babu-koravena/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 hover:text-white"
                  >
                    <Linkedin size={15} /> LinkedIn <ExternalLink size={11} />
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Mobile Floating Bottom Navigation Bar for Single-Thumb Ergonomics */}
      <nav 
        aria-label="Mobile Bottom Navigation"
        className="lg:hidden fixed bottom-3 left-0 right-0 z-40 px-4 pointer-events-none"
      >
        <div className="pointer-events-auto max-w-sm mx-auto bg-[#0E1017]/90 backdrop-blur-2xl border border-white/[0.1] shadow-2xl rounded-2xl p-1.5 flex items-center justify-between">
          {[
            { id: 'home', name: 'Home', href: '#', icon: Home },
            { id: 'skills', name: 'Skills', href: '#skills', icon: Code2 },
            { id: 'projects', name: 'Projects', href: '#projects', icon: Briefcase },
            { id: 'experience', name: 'Work', href: '#experience', icon: Award },
            { id: 'contact', name: 'Contact', href: '#contact', icon: Mail }
          ].map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.href)}
                className={`relative flex flex-col items-center justify-center py-2 px-2.5 rounded-xl transition-all flex-1 ${
                  isActive
                    ? 'text-purple-300 font-bold'
                    : 'text-gray-400 hover:text-white'
                }`}
                aria-label={`Jump to ${item.name}`}
              >
                {isActive && (
                  <motion.div
                    layoutId="mobileBottomPill"
                    className="absolute inset-0 bg-purple-600/20 border border-purple-500/40 rounded-xl"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10 flex flex-col items-center gap-1">
                  <Icon size={16} className={isActive ? 'text-purple-400 stroke-[2.5px]' : 'stroke-2'} />
                  <span className="text-[10px] tracking-tight">{item.name}</span>
                </span>
              </button>
            );
          })}
        </div>
      </nav>
    </>
  );
}
