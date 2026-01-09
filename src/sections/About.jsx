import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { GraduationCap, TrendingUp, Code, Award } from 'lucide-react';
import StatCard from '../components/StatCard';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const education = [
    {
      school: 'Polish-Japanese Academy of Information Technology',
      degree: 'Computer Science M.Sc (Data Science)',
      period: '2024-2025',
      icon: <GraduationCap className="w-6 h-6" />,
    },
    {
      school: 'Warsaw University of Technology',
      degree: 'Mechatronics B.Eng',
      period: '2020-2024',
      icon: <GraduationCap className="w-6 h-6" />,
    },
  ];

  return (
    <section id="about" className="section-container bg-transparent">
      <div ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-baby-blue to-blue-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Description */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="glass-card p-8">
              <h3 className="text-2xl font-bold mb-4 gradient-text">
                Passionate About Data & Technology
              </h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                With a background in mechatronics engineering and currently pursuing a Master's in Data Science,
                I bring a unique blend of mechanical understanding and computational expertise to solve complex problems.
              </p>
              <p className="text-text-secondary leading-relaxed">
                My passion lies in machine learning, audio processing, and full-stack development.
                I love creating innovative solutions that bridge the gap between theoretical knowledge
                and practical applications, whether it's building intelligent systems or crafting
                seamless user experiences.
              </p>
            </div>
          </motion.div>

          {/* Education Timeline */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold mb-6 gradient-text">Education</h3>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 * index }}
                  className="glass-card p-6 hover:shadow-lg hover:shadow-baby-blue/10 transition-all duration-300"
                >
                  <div className="flex items-start space-x-4">
                    <div className="p-3 rounded-lg bg-baby-blue/10 text-baby-blue flex-shrink-0">
                      {edu.icon}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-lg mb-1 text-text-primary">
                        {edu.school}
                      </h4>
                      <p className="text-baby-blue mb-1">{edu.degree}</p>
                      <p className="text-sm text-text-secondary">{edu.period}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Statistics with Animated Counters */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <StatCard
            end={10}
            label="Projects Completed"
            icon={<Code className="w-8 h-8" />}
            color="from-baby-blue to-blue-400"
          />
          <StatCard
            end={20}
            label="Technologies Mastered"
            icon={<TrendingUp className="w-8 h-8" />}
            color="from-blue-400 to-purple-400"
          />
          <StatCard
            end={3}
            label="Years of Experience"
            icon={<Award className="w-8 h-8" />}
            color="from-purple-400 to-pink-400"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
