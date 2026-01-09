import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink, Github, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';

const FeaturedProjects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const projects = [
    {
      title: 'Deep Learning Music Genre Classifier',
      subtitle: 'CNN-Based Audio Analysis',
      description: 'Convolutional Neural Network achieving 71.52% accuracy on GTZAN dataset. Processes Mel-spectrograms to classify 10 music genres. Features BatchNorm, Dropout, LeakyReLU activation, and Grad-CAM visualizations for model interpretability.',
      tech: ['Python', 'PyTorch', 'CNN', 'Grad-CAM', 'GTZAN'],
      gradient: 'from-purple-500 to-violet-600',
      icon: '🎵',
      links: {
        github: '#',
        pdf: '#',
      }
    },
    {
      title: 'RolnictwoToMy Agricultural Marketplace',
      subtitle: 'Full-Stack Web & Mobile Platform',
      description: 'Comprehensive two-sided marketplace platform connecting farmers with buyers. Built with React and Firebase, featuring real-time search, user authentication, product filtering, and integrated subscription model. Successfully deployed to production.',
      tech: ['React', 'Firebase', 'Firestore', 'Tailwind CSS', 'Capacitor'],
      gradient: 'from-yellow-500 to-orange-500',
      icon: '🌾',
      links: {
        demo: '#',
        github: '#',
      }
    },
    {
      title: 'Spotify Music Insights & Recommendation Engine',
      subtitle: 'AI-Powered Music Analysis',
      description: 'Python application leveraging Spotify Web API for personalized music analysis. Aggregates listening habits, genre distribution, and temporal patterns. Generates recommendations using collaborative filtering with AI-generated summaries.',
      tech: ['Python', 'Spotify API', 'OpenAI API', 'Pandas', 'Streamlit'],
      gradient: 'from-green-500 to-emerald-500',
      icon: '🎧',
      links: {
        github: '#',
        demo: '#',
      }
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="featured-projects" className="section-container bg-gray-900/20 backdrop-blur-sm">
      <div ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-baby-blue to-blue-500 mx-auto rounded-full mb-4" />
          <p className="text-text-secondary max-w-2xl mx-auto">
            A selection of my best work in data science, web development, and audio engineering
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="glass-card p-6 group relative overflow-hidden"
            >
              {/* Gradient Top Border */}
              <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${project.gradient}`} />

              {/* Icon and Gradient Header */}
              <div className={`w-full h-48 rounded-lg bg-gradient-to-br ${project.gradient} mb-6 flex flex-col items-center justify-center shadow-xl relative overflow-hidden group-hover:scale-105 transition-transform duration-500`}>
                <div className="absolute inset-0 bg-black/20" />
                <span className="relative z-10 text-6xl mb-2">{project.icon}</span>
                <span className="relative z-10 text-white font-bold text-center px-4">{project.title}</span>
              </div>

              {/* Content */}
              <div className="space-y-4">
                <div>
                  <h3 className="text-2xl font-bold text-text-primary mb-1 group-hover:text-baby-blue transition-colors">
                    {project.title}
                  </h3>
                  <p className={`text-sm font-semibold bg-gradient-to-r ${project.gradient} bg-clip-text text-transparent`}>
                    {project.subtitle}
                  </p>
                </div>

                <p className="text-text-secondary text-sm leading-relaxed line-clamp-6">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 text-xs font-medium bg-dark-bg/50 text-baby-blue rounded-full border border-baby-blue/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-3 pt-4">
                  {project.links.demo && (
                    <a
                      href={project.links.demo}
                      className="flex-1 flex items-center justify-center gap-2 py-2 px-4 bg-baby-blue/10 hover:bg-baby-blue/20 text-baby-blue rounded-lg transition-all duration-300 text-sm font-medium border border-baby-blue/20"
                      title="View Demo"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Demo
                    </a>
                  )}
                  {project.links.github && (
                    <a
                      href={project.links.github}
                      className="flex-1 flex items-center justify-center gap-2 py-2 px-4 bg-dark-bg/50 hover:bg-dark-bg text-text-secondary hover:text-baby-blue rounded-lg transition-all duration-300 text-sm font-medium border border-white/10"
                      title="View on GitHub"
                    >
                      <Github className="w-4 h-4" />
                      GitHub
                    </a>
                  )}
                  {project.links.pdf && (
                    <button
                      disabled
                      className="flex-1 flex items-center justify-center gap-2 py-2 px-4 bg-dark-bg/30 text-text-secondary/50 rounded-lg text-sm font-medium border border-white/5 cursor-not-allowed"
                      title="PDF available on request"
                    >
                      <FileText className="w-4 h-4" />
                      PDF
                    </button>
                  )}
                </div>
              </div>

              {/* Shimmer effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 pointer-events-none" />
            </motion.div>
          ))}
        </motion.div>

        {/* View All Projects Link */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="text-center"
        >
          <Link
            to="/it-projects"
            className="inline-flex items-center gap-2 btn-primary"
          >
            View All Projects
            <ExternalLink className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
