import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import GithubShowcase from './components/GithubShowcase';
import Education from './components/Education';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingIcons from './components/FloatingIcons';
import ScrollProgress from './components/ScrollProgress';

function App() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#08090D] text-slate-900 dark:text-[#F8FAFC] selection:bg-purple-600/30 selection:text-white transition-colors duration-300 relative">
      <ScrollProgress />
      <FloatingIcons />
      <Navigation />
      <main className="relative z-10 pb-16 lg:pb-0">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <GithubShowcase />
        <Education />
        <Achievements />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
