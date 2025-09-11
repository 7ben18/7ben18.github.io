import { motion } from 'framer-motion';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Certificates from './components/Certificates';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AuthProvider from './components/AuthProvider';

function App() {
  return (
    <AuthProvider>
      <div className="min-h-screen gradient-bg relative">
        {/* Floating Bubbles for entire page */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-10">
          {[...Array(40)].map((_, i) => (
            <motion.div
              key={i}
              className={`absolute ${i % 3 === 0 ? 'w-3 h-3' : i % 3 === 1 ? 'w-2 h-2' : 'w-1 h-1'} bg-white/30 rounded-full`}
              initial={{
                x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1200),
                y: typeof window !== 'undefined' ? window.innerHeight + 10 : 800,
              }}
              animate={{
                y: -10,
                x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1200),
              }}
              transition={{
                duration: Math.random() * 15 + 15,
                repeat: Infinity,
                ease: 'linear',
                delay: Math.random() * 10,
              }}
            />
          ))}
        </div>

        <div className="relative z-20">
          <Navigation />
          
          <motion.main
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Hero />
            <About />
            <Portfolio />
            <Certificates />
            <Testimonials />
            <Contact />
          </motion.main>
          
          <Footer />
        </div>
      </div>
    </AuthProvider>
  );
}

export default App;
