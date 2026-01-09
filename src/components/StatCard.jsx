import { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';

export default function StatCard({ end, label, icon, duration = 2000, color }) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    let startTime;
    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);

      // Easing function for smooth animation
      const easeOut = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(easeOut * end));

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    requestAnimationFrame(animate);
  }, [isVisible, end, duration]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      whileHover={{ scale: 1.05, y: -5 }}
      className="
        relative group
        bg-gradient-to-br from-white/[0.05] to-white/[0.01]
        backdrop-blur-xl
        border border-white/[0.08]
        rounded-3xl
        p-8
        text-center
        overflow-hidden
        transition-all duration-700
        hover:border-blue-400/30
        hover:shadow-[0_8px_32px_rgba(178,217,255,0.15)]
      "
    >
      {/* Gradient Background on hover */}
      <div className={`absolute inset-0 bg-gradient-to-br ${color || 'from-baby-blue to-blue-400'} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />

      {/* Shimmer effect */}
      <div className="
        absolute inset-0
        bg-gradient-to-r from-transparent via-white/5 to-transparent
        -translate-x-full
        group-hover:translate-x-full
        transition-transform duration-1000
      " />

      <div className="relative z-10">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-baby-blue/10 text-baby-blue mb-4 group-hover:scale-110 transition-transform duration-300">
          {icon}
        </div>
        <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">
          {count}+
        </div>
        <div className="text-gray-400 font-medium">{label}</div>
      </div>
    </motion.div>
  );
}
