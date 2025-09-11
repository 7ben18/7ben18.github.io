import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Shield, Calendar } from 'lucide-react';
import { projects } from '../data/portfolio';
import type { Project } from '../types';

const Portfolio: React.FC = () => {

  const ProjectCard: React.FC<{ project: Project; index: number }> = ({ project, index }) => (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="portfolio-card group"
      whileHover={{ y: -8, scale: 1.02 }}
    >
      <div className="relative overflow-hidden">
        {project.github ? (
          <a href={project.github} target="_blank" rel="noopener noreferrer">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover cursor-pointer"
            />
          </a>
        ) : (
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-48 object-cover"
          />
        )}
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-75 pointer-events-none">
          <div className="absolute bottom-4 left-4 right-4 pointer-events-auto">
            <div className="flex space-x-2">
              {project.github && (
                <motion.a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-accent-500 rounded-full flex items-center justify-center text-white hover:bg-accent-600 transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Github size={18} />
                </motion.a>
              )}
              {project.link && (
                <motion.a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-accent-500 rounded-full flex items-center justify-center text-white hover:bg-accent-600 transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <ExternalLink size={18} />
                </motion.a>
              )}
            </div>
          </div>
        </div>

        {/* Status Badge */}
        <div className="absolute top-4 right-4">
          <div className="flex items-center space-x-2">
            <div className="bg-gray-900/80 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-gray-200">
              <div className="flex items-center space-x-1">
                <Calendar size={12} />
                <span>{project.status}</span>
              </div>
            </div>
            {project.isNDA && (
              <div className="bg-red-600/80 backdrop-blur-sm px-2 py-1 rounded-full text-xs font-medium text-white">
                <div className="flex items-center space-x-1">
                  <Shield size={12} />
                  <span>NDA</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-xl font-semibold text-white group-hover:text-accent-400 transition-colors">
            {project.title}
          </h3>
        </div>
        
        <p className="text-gray-300 text-sm leading-relaxed">
          {project.description}
        </p>
      </div>
    </motion.div>
  );

  return (
    <section id="portfolio" className="section-padding bg-transparent">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Portfolio
          </h2>
          <p className="text-lg text-gray-300 max-w-4xl mx-auto">
            Während meines Bachelorstudiums in Data Science an der FHNW und in meiner 
            Berufstätigkeit als Risk Data Analyst/Engineer bei der Baloise Asset Management 
            habe ich an einer Vielzahl spannender Projekte gearbeitet. Diese Projekte erstrecken 
            sich von klassischen Datenanalysen bis hin zum Training von Deep Learning Modellen 
            sowie der Entwicklung produktiver ETL-Pipelines und Risk-Dashboards.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;