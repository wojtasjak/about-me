import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import FloatingParticles from '../components/FloatingParticles';

const Hero = () => {
  const scrollToProjects = () => {
    const element = document.getElementById('featured-projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0a] via-[#1a1a3a] to-[#0a0a0a] bg-200 animate-gradient-shift z-0" />

      {/* Floating Particles Background */}
      <FloatingParticles />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark-bg/50 via-transparent to-dark-bg z-10" />

      {/* Content */}
      <div className="relative z-20 text-center px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          {/* Profile Image Placeholder */}
          <div className="w-48 h-48 md:w-64 md:h-64 mx-auto rounded-full bg-gradient-to-br from-baby-blue via-blue-400 to-blue-600 flex items-center justify-center text-6xl md:text-8xl font-bold text-dark-bg shadow-2xl glow-effect mb-8">
            JW
          </div>
        </motion.div>

        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 text-shadow"
        >
          <span className="gradient-text">Jakub Wojtas</span>
        </motion.h1>

        {/* All roles visible at once with gradient animations */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="flex flex-col md:flex-row gap-4 md:gap-6 items-center justify-center text-lg md:text-xl mb-12"
        >
          <span className="px-6 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-400/30 text-blue-300 animate-pulse-slow hover:scale-105 transition-transform cursor-default">
            Data Scientist
          </span>

          <span className="hidden md:block text-gray-600">•</span>

          <span className="px-6 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-400/30 text-purple-300 animate-pulse-slow animation-delay-1000 hover:scale-105 transition-transform cursor-default">
            Full-Stack Developer
          </span>

          <span className="hidden md:block text-gray-600">•</span>

          <span className="px-6 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-400/30 text-cyan-300 animate-pulse-slow animation-delay-2000 hover:scale-105 transition-transform cursor-default">
            Audio Engineer
          </span>
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <button onClick={scrollToProjects} className="btn-primary">
            View Projects
          </button>
          <button onClick={scrollToContact} className="btn-secondary">
            Contact Me
          </button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="cursor-pointer"
          onClick={() => {
            const element = document.getElementById('about');
            if (element) {
              element.scrollIntoView({ behavior: 'smooth' });
            }
          }}
        >
          <ChevronDown className="w-8 h-8 text-baby-blue" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
