import { motion } from 'framer-motion';
import { Code2, Database, Cpu, Terminal, Layers } from 'lucide-react';

export default function FloatingIcons() {
  const icons = [
    { Icon: Code2, color: 'text-purple-500', position: { top: '15%', left: '8%' }, delay: 0 },
    { Icon: Database, color: 'text-cyan-500', position: { top: '55%', left: '12%' }, delay: 1 },
    { Icon: Cpu, color: 'text-indigo-500', position: { top: '35%', right: '8%' }, delay: 0.5 },
    { Icon: Terminal, color: 'text-emerald-500', position: { top: '75%', right: '15%' }, delay: 1.5 },
    { Icon: Layers, color: 'text-purple-400', position: { top: '85%', left: '20%' }, delay: 2 }
  ];

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
      {icons.map((item, index) => (
        <motion.div
          key={index}
          className={`absolute ${item.color} opacity-[0.03] dark:opacity-[0.03]`}
          style={item.position}
          animate={{
            y: [0, -15, 0],
            rotate: [0, 8, -8, 0],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            delay: item.delay,
            ease: "easeInOut"
          }}
        >
          <item.Icon size={56} />
        </motion.div>
      ))}
    </div>
  );
}
