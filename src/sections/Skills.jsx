import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import {
  Brain,
  Code2,
  Music,
  Database,
  Languages,
  Users
} from 'lucide-react';

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skillCategories = [
    {
      title: 'DATA SCIENCE & ML',
      icon: <Brain className="w-8 h-8" />,
      color: 'from-baby-blue to-blue-500',
      skills: [
        'Python',
        'PyTorch',
        'TensorFlow',
        'NumPy',
        'Pandas',
        'Machine Learning',
        'Deep Learning',
        'CNN',
        'scikit-learn',
        'Grad-CAM',
        'GTZAN'
      ]
    },
    {
      title: 'WEB DEVELOPMENT',
      icon: <Code2 className="w-8 h-8" />,
      color: 'from-blue-500 to-purple-500',
      skills: [
        'React',
        'JavaScript',
        'Vite',
        'Tailwind CSS',
        'Firebase (Auth, Firestore, Hosting)',
        'HTML5',
        'CSS3',
        'Responsive Design'
      ]
    },
    {
      title: 'AUDIO ENGINEERING',
      icon: <Music className="w-8 h-8" />,
      color: 'from-purple-500 to-pink-500',
      skills: [
        'C++',
        'JUCE Framework',
        'VST3',
        'Digital Signal Processing (DSP)',
        'Real-time Audio Processing'
      ]
    },
    {
      title: 'DATABASES & TOOLS',
      icon: <Database className="w-8 h-8" />,
      color: 'from-pink-500 to-red-500',
      skills: [
        'SQL',
        'MongoDB',
        'Firestore',
        'Git',
        'GitHub',
        'Power BI',
        'Linux',
        'Apache Spark',
        'Hadoop'
      ]
    },
    {
      title: 'LANGUAGES',
      icon: <Languages className="w-8 h-8" />,
      color: 'from-red-500 to-orange-500',
      skills: [
        'Polish (Native)',
        'English (Full Professional)',
        'Technical Documentation'
      ]
    },
    {
      title: 'SOFT SKILLS',
      icon: <Users className="w-8 h-8" />,
      color: 'from-orange-500 to-yellow-500',
      skills: [
        'Problem Solving',
        'Fast Learner',
        'Team Collaboration',
        'Communication',
        'Project Management'
      ]
    }
  ];

  const [hoveredCard, setHoveredCard] = useState(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="skills" className="section-container bg-dark-card/30">
      <div ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Skills & <span className="gradient-text">Expertise</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-baby-blue to-blue-500 mx-auto rounded-full" />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              onHoverStart={() => setHoveredCard(index)}
              onHoverEnd={() => setHoveredCard(null)}
              whileHover={{
                scale: 1.03,
                rotateY: 5,
                rotateX: 5,
              }}
              className="glass-card p-6 relative overflow-hidden group perspective-1000"
              style={{
                transformStyle: 'preserve-3d',
              }}
            >
              {/* Gradient Background */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
              />

              {/* Border Glow */}
              <div
                className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500`}
              />

              <div className="relative z-10">
                {/* Icon */}
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br ${category.color} text-white mb-4 shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                  {category.icon}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold mb-4 text-text-primary group-hover:text-baby-blue transition-colors duration-300">
                  {category.title}
                </h3>

                {/* Skills List */}
                <div className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skillIndex}
                      initial={{ opacity: 0, x: -10 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{
                        duration: 0.3,
                        delay: hoveredCard === index ? skillIndex * 0.05 : 0
                      }}
                      className="flex items-center space-x-2"
                    >
                      <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${category.color}`} />
                      <span className="text-sm text-text-secondary group-hover:text-text-primary transition-colors duration-300">
                        {skill}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
