import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Lightbulb, Users, GraduationCap, Trophy, User } from 'lucide-react';
import { testimonials } from '../data/portfolio';

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const getIcon = (iconName: string) => {
    const iconMap = {
      lightbulb: Lightbulb,
      users: Users,
      'graduation-cap': GraduationCap,
      trophy: Trophy,
      group: Users,
    };
    const IconComponent = iconMap[iconName as keyof typeof iconMap] || User;
    return <IconComponent className="w-8 h-8" />;
  };


  const current = testimonials[currentIndex];

  return (
    <section id="testimonials" className="section-padding bg-transparent">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Referenzen
          </h2>
        </motion.div>

        {/* Main Testimonial Card */}
        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 300 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -300 }}
              transition={{ duration: 0.5, type: "spring", bounce: 0.2 }}
              className="testimonial-card relative"
              onHoverStart={() => setIsAutoPlaying(false)}
              onHoverEnd={() => setIsAutoPlaying(true)}
            >
              {/* Category Header */}
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center text-gray-400">
                  {getIcon(current.icon)}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">
                    {current.category}
                  </h3>
                </div>
              </div>

              {/* Quote */}
              <div className="relative mb-8">
                <p className="text-lg md:text-xl text-white leading-relaxed italic">
                  {current.quote}
                </p>
              </div>

              {/* Author */}
              <div className="flex items-center space-x-4">
                <div className="relative">
                  <img
                    src={current.image}
                    alt={current.name}
                    className="w-16 h-16 rounded-full object-cover shadow-lg"
                  />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white">
                    {current.name}
                  </h4>
                  <p className="text-gray-300">
                    {current.role}
                    {current.company && (
                      <>
                        <br />
                        <span className="text-sm text-accent-400 font-medium">
                          @ {current.company}
                        </span>
                      </>
                    )}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex items-center justify-between mt-8">
            <motion.button
              onClick={prevTestimonial}
              className="w-12 h-12 bg-gray-800 hover:bg-gray-700 rounded-full flex items-center justify-center text-gray-300 hover:text-white transition-all duration-75 border border-gray-700"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronLeft className="w-6 h-6" />
            </motion.button>

            {/* Dots Indicator */}
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-75 ${
                    index === currentIndex 
                      ? 'bg-accent-500 scale-125' 
                      : 'bg-gray-600 hover:bg-gray-500'
                  }`}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.8 }}
                />
              ))}
            </div>

            <motion.button
              onClick={nextTestimonial}
              className="w-12 h-12 bg-gray-800 hover:bg-gray-700 rounded-full flex items-center justify-center text-gray-300 hover:text-white transition-all duration-75 border border-gray-700"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronRight className="w-6 h-6" />
            </motion.button>
          </div>
        </div>


        {/* Progress Bar */}
        <div className="mt-8 max-w-md mx-auto">
          <div className="w-full bg-gray-700 rounded-full h-2">
            <motion.div
              className="bg-accent-500 h-2 rounded-full"
              initial={{ width: '0%' }}
              animate={{ width: `${((currentIndex + 1) / testimonials.length) * 100}%` }}
              transition={{ duration: 0.5 }}
            />
          </div>
          <div className="text-center mt-2 text-sm text-gray-300">
            {currentIndex + 1} von {testimonials.length}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;