import React from 'react';
import { motion } from 'framer-motion';
import AnimatedSection from './AnimatedSection';

const skills = {
  'Mobile Development': ['Flutter/Dart', 'React Native', 'Android'],
  'Frontend': ['React.js', 'HTML5/CSS3', 'JavaScript/TypeScript', 'Bootstrap', 'Tailwind CSS'],
  'Backend': ['Node.js/Express'],
  'Databases': ['MongoDB', 'MySQL'],
  'Tools & Others': ['Git', 'Docker', 'Firebase', 'Figma', 'Adobe Photoshop/Illustrator']
};

const SkillSection: React.FC = () => {
  return (
    <section className="py-20 bg-black/50 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <h2 className="text-3xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-gold-300 to-gold-500">
            Skills & Expertise
          </h2>
        </AnimatedSection>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(skills).map(([category, skillList], index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-zinc-900/50 backdrop-blur-sm p-6 rounded-lg border border-gold-500/20"
            >
              <h3 className="text-xl font-bold mb-4 text-gold-400">{category}</h3>
              <div className="space-y-4">
                {skillList.map((skill, skillIndex) => (
                  <motion.div
                    key={skill}
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    transition={{ duration: 0.8, delay: skillIndex * 0.1 }}
                  >
                    <div className="flex justify-between mb-1">
                      <span className="text-sm text-gray-300">{skill}</span>
                    </div>
                    <div className="w-full bg-zinc-800/50 rounded-full h-2 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${Math.random() * 30 + 70}%` }}
                        transition={{ duration: 1, delay: skillIndex * 0.1 }}
                        className="bg-gradient-to-r from-gold-600 to-gold-400 h-2 rounded-full"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillSection;