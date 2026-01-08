import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const experiences = [
    {
      company: 'Freelance / Self-Employed',
      position: 'Data Scientist & Full-Stack Developer',
      period: 'July 2025 - Present',
      location: 'Warsaw, Poland',
      responsibilities: [
        'Developing custom web applications and data science solutions for clients',
        'Building full-stack platforms with React, Firebase, and modern technologies',
        'Machine learning consulting and model development',
        'Audio processing and DSP projects'
      ],
      color: 'from-green-400 to-emerald-500',
      current: true
    },
    {
      company: 'POLTAX',
      position: 'Junior Data Scientist',
      period: 'January 2024 - July 2025',
      location: 'Warsaw, Poland',
      responsibilities: [
        'Managing Computer Network and Information Systems',
        'SQL database optimization, backup, and recovery',
        'Business analysis and reporting with Power BI',
        'Network infrastructure maintenance and troubleshooting'
      ],
      color: 'from-baby-blue to-blue-500',
      current: false
    }
  ];

  return (
    <section id="experience" className="section-container bg-dark-card/30">
      <div ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-baby-blue to-blue-500 mx-auto rounded-full" />
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative"
            >
              {/* Timeline Line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-baby-blue to-transparent hidden md:block" />

              <div className="glass-card p-8 mb-8 md:ml-20 relative">
                {/* Timeline Dot */}
                <div className={`
                  absolute -left-12 top-8 w-6 h-6 rounded-full
                  bg-gradient-to-br ${exp.color}
                  border-4 border-dark-bg hidden md:block
                  ${exp.current ? 'animate-pulse shadow-lg shadow-green-400/50' : 'shadow-lg shadow-baby-blue/50'}
                `} />

                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <motion.h3
                        whileHover={{ x: 5 }}
                        className="text-2xl font-bold text-text-primary cursor-pointer inline-block"
                      >
                        {exp.company}
                      </motion.h3>
                      {exp.current && (
                        <span className="px-3 py-1 rounded-full bg-green-500/20 border border-green-400/30 text-green-400 text-sm font-medium">
                          Current
                        </span>
                      )}
                    </div>
                    <p className="text-lg text-baby-blue font-semibold mb-2">
                      {exp.position}
                    </p>
                    <div className="flex items-center gap-4 text-text-secondary text-sm">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-3 mt-4">
                  {exp.responsibilities.map((resp, respIndex) => (
                    <motion.div
                      key={respIndex}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.4, delay: 0.4 + respIndex * 0.1 }}
                      className="flex items-start gap-3 group"
                    >
                      <div className={`mt-1.5 w-2 h-2 rounded-full bg-gradient-to-r ${exp.color} flex-shrink-0 group-hover:scale-150 transition-transform duration-300`} />
                      <p className="text-text-secondary leading-relaxed group-hover:text-text-primary transition-colors duration-300">
                        {resp}
                      </p>
                    </motion.div>
                  ))}
                </div>

                {/* Hover Effect Border */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${exp.color} opacity-0 hover:opacity-10 transition-opacity duration-300 pointer-events-none`} />
              </div>
            </motion.div>
          ))}

          {/* Additional Info Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="glass-card p-8 text-center md:ml-20"
          >
            <Briefcase className="w-12 h-12 text-baby-blue mx-auto mb-4" />
            <h3 className="text-xl font-bold text-text-primary mb-2">
              Open to New Opportunities
            </h3>
            <p className="text-text-secondary">
              Looking for exciting challenges in Data Science, Machine Learning, and Full-Stack Development
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
