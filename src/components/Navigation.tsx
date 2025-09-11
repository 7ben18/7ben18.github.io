import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Lock, CheckCircle } from 'lucide-react';
import { navItems } from '../data/portfolio';
import { useAuth } from './AuthProvider';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { isAuthenticated, requestAuth } = useAuth();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  const handleAuthClick = () => {
    if (!isAuthenticated) {
      requestAuth();
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/90 backdrop-blur-md shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-center py-4">

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <motion.button
                key={item.id}
                onClick={() => scrollToSection(item.href)}
                className={`font-medium transition-colors duration-75 ${
                  isScrolled ? 'text-gray-700 hover:text-accent-600' : 'text-white hover:text-accent-300'
                }`}
                whileHover={{ y: -2 }}
              >
                {item.label}
              </motion.button>
            ))}
            
            {/* Auth Button */}
            <motion.button
              onClick={handleAuthClick}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-all duration-75 ${
                isAuthenticated
                  ? 'bg-green-100 text-green-700 hover:bg-green-200'
                  : isScrolled
                    ? 'bg-accent-100 text-accent-700 hover:bg-accent-200'
                    : 'bg-white/10 text-white hover:bg-white/20'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {isAuthenticated ? (
                <>
                  <CheckCircle size={16} />
                  <span>Portfolio entsperrt</span>
                </>
              ) : (
                <>
                  <Lock size={16} />
                  <span>Portfolio entsperren</span>
                </>
              )}
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-lg ${
                isScrolled ? 'text-gray-700' : 'text-white'
              }`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={false}
          animate={{
            height: isOpen ? 'auto' : 0,
            opacity: isOpen ? 1 : 0
          }}
          className="md:hidden overflow-hidden bg-white/95 backdrop-blur-md rounded-lg mt-2"
        >
          <div className="py-4 px-4 space-y-2">
            {navItems.map((item) => (
              <motion.button
                key={item.id}
                onClick={() => scrollToSection(item.href)}
                className="block w-full text-left py-2 px-3 text-gray-700 hover:bg-accent-50 hover:text-accent-600 rounded-lg transition-colors duration-75"
                whileHover={{ x: 5 }}
              >
                {item.label}
              </motion.button>
            ))}
            
            <motion.button
              onClick={handleAuthClick}
              className={`flex items-center space-x-2 w-full px-3 py-2 rounded-lg font-medium transition-all duration-75 ${
                isAuthenticated
                  ? 'bg-green-100 text-green-700 hover:bg-green-200'
                  : 'bg-accent-100 text-accent-700 hover:bg-accent-200'
              }`}
              whileHover={{ x: 5 }}
            >
              {isAuthenticated ? (
                <>
                  <CheckCircle size={16} />
                  <span>Portfolio entsperrt</span>
                </>
              ) : (
                <>
                  <Lock size={16} />
                  <span>Portfolio entsperren</span>
                </>
              )}
            </motion.button>
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
};

export default Navigation;