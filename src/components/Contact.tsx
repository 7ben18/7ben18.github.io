import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, MessageSquare } from 'lucide-react';
import { personalInfo } from '../data/portfolio';

const Contact: React.FC = () => {
  const contactMethods = [
    {
      icon: Mail,
      label: 'E-Mail',
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`,
      color: 'from-red-400 to-red-600'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'linkedin.com/in/7ben18',
      href: personalInfo.linkedin,
      color: 'from-blue-400 to-blue-600'
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'github.com/7ben18',
      href: personalInfo.github,
      color: 'from-gray-400 to-gray-600'
    }
  ];

  return (
    <section id="contact" className="section-padding bg-transparent text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 20% 20%, #fff 2px, transparent 2px),
                           radial-gradient(circle at 80% 80%, #fff 1px, transparent 1px)`,
          backgroundSize: '80px 80px, 60px 60px'
        }} />
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-shadow">
            Kontakt
          </h2>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Vielen Dank für dein Interesse an meinem Portfolio! Ich freue mich über jede 
            Nachricht und bin gespannt auf neue berufliche Möglichkeiten und spannende Projekte.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="card-glass p-8">
              <h3 className="text-2xl font-bold mb-6 flex items-center">
                <MessageSquare className="w-8 h-8 mr-3 text-accent-300" />
                Lass uns vernetzen
              </h3>
              <p className="text-gray-200 mb-8 leading-relaxed">
                Gerne können wir uns auch über LinkedIn vernetzen und dort uns austauschen. 
                Ich bin immer offen für neue Kontakte und interessante Gespräche über 
                Data Science, Technology und Innovation.
              </p>

              <div className="space-y-6">
                {contactMethods.map((method) => {
                  const IconComponent = method.icon;
                  return (
                    <a
                      key={method.label}
                      href={method.href}
                      target={method.href.startsWith('mailto:') ? '_self' : '_blank'}
                      rel="noopener noreferrer"
                      className="flex items-center space-x-4 p-4 bg-white/5 backdrop-blur-sm rounded-xl hover:bg-white/10 transition-all duration-75 group"
                    >
                      <div className={`w-12 h-12 bg-gradient-to-r ${method.color} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-75`}>
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <div className="font-semibold text-white">
                          {method.label}
                        </div>
                        <div className="text-gray-300 text-sm">
                          {method.value}
                        </div>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Contact CTA */}
          <div className="text-center">
            <div className="card-glass p-8">
              <div className="w-32 h-32 bg-gradient-to-br from-accent-400 to-accent-600 rounded-full flex items-center justify-center mx-auto mb-8">
                <Mail className="w-16 h-16 text-white" />
              </div>

              <h3 className="text-3xl font-bold mb-4 text-shadow">
                Bereit für neue Projekte
              </h3>
              
              <p className="text-gray-200 mb-8 text-lg leading-relaxed">
                Ob spannende Datenanalyse-Projekte, innovative Machine Learning 
                Lösungen oder Data Science - ich bin bereit 
                für neue Herausforderungen.
              </p>

              <a
                href={`mailto:${personalInfo.email}`}
                className="inline-flex items-center space-x-3 bg-white text-gray-800 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-75 shadow-2xl"
              >
                <Mail className="w-6 h-6" />
                <span>E-Mail senden</span>
              </a>

              <div className="mt-6 text-accent-200">
                <span className="text-lg font-semibold">
                  📧 {personalInfo.email}
                </span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Contact;