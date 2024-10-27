import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { motion } from 'framer-motion';

interface ProjectCardProps {
  title: string;
  description: string;
  techStack: string[];
  image: string;
  demoLink: string;
  githubLink: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  techStack,
  image,
  demoLink,
  githubLink,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
      className="bg-zinc-900/50 backdrop-blur-sm rounded-lg overflow-hidden border border-gold-500/20 w-full" // Added w-full for full width
    >
      <div className="flex flex-col md:flex-row w-full"> {/* Ensure flex container is full width */}
        <motion.div
          className="relative flex-shrink-0 md:w-1/2 overflow-hidden" // Added flex-shrink-0 to maintain size
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          <img src={image} alt={title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
        </motion.div>
        <div className="p-6 md:w-1/2 w-full"> {/* Added w-full to the text section */}
          <h3 className="text-xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-gold-300 to-gold-500">
            {title}
          </h3>
          <p className="text-gray-400 mb-4">{description}</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {techStack.map((tech) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.1 }}
                className="px-3 py-1 text-sm bg-gold-500/10 rounded-full text-gold-400 border border-gold-500/20"
              >
                {tech}
              </motion.span>
            ))}
          </div>
          <div className="flex gap-4">
            <motion.a
              href={demoLink}
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-2 text-gold-400 hover:text-gold-300"
            >
              <ExternalLink size={16} />
              Demo
            </motion.a>
            <motion.a
              href={githubLink}
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-2 text-gold-400 hover:text-gold-300"
            >
              <Github size={16} />
              Code
            </motion.a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
