import React from 'react';
import { motion } from 'framer-motion';
import { User, GraduationCap, Briefcase, Rocket, Heart, FileText, Download } from 'lucide-react';
import { personalInfo } from '../data/portfolio';
import { useAuth } from './AuthProvider';

const About: React.FC = () => {
  const { downloadCV } = useAuth();

  const cards = [
    {
      id: 'info',
      title: 'Auf einen Blick',
      icon: User,
      content: (
        <ul className="space-y-2 text-gray-300">
          <li>• Daten Jongleur</li>
          <li>• {personalInfo.age} Jahre alt</li>
          <li>• {personalInfo.currentPosition}</li>
          <li>• {personalInfo.education}</li>
        </ul>
      )
    },
    {
      id: 'education',
      title: 'Bildungsweg',
      icon: GraduationCap,
      content: (
        <p className="text-gray-300 leading-relaxed">
          Mein Bildungsweg begann mit einer soliden analytischen Grundlage als Chemielaborant EFZ 
          mit Schwerpunkt analytische Chemie. Nach erfolgreichen Erfahrungen bei Dr. H. Welti AG 
          und am Paul Scherrer entschied ich mich für den bewussten Wechsel zur digitalen Datenanalyse. 
          Der bewusste Wechsel von der Analyse chemischer Substanzen zur digitalen Datenanalyse 
          ermöglichte es mir, meine analytischen Fähigkeiten erfolgreich in ein modernes, digitales 
          Umfeld zu transferieren.
        </p>
      )
    },
    {
      id: 'career',
      title: 'Berufliche Laufbahn',
      icon: Briefcase,
      content: (
        <p className="text-gray-300 leading-relaxed">
          Seit September 2024 arbeite ich als Risk Data Analyst/Engineer bei der Baloise Asset 
          Management in Basel. In dieser Position entwickle ich komplexe ETL-Pipelines und erstelle 
          interne Risk-Dashboards für Liquidity Risk, einschliesslich Counterparty Risk und Client 
          Concentration Risk. Dabei implementiere ich sowohl Backend-Datenworkflows als auch 
          Frontend-Dashboard-Interfaces und entwickelte erfolgreich automatisierte Datenpipelines 
          für Bond Analytics und Management Information System Dashboards.
        </p>
      )
    },
    {
      id: 'future',
      title: 'Zukunftspläne',
      icon: Rocket,
      content: (
        <p className="text-gray-300 leading-relaxed">
          Da mein befristeter Vertrag bei der Baloise Asset Management Ende 2025 ausläuft, suche 
          ich aktiv nach neuen beruflichen Herausforderungen, die meinem Anspruch an kontinuierliche 
          Weiterentwicklung entsprechen. Langfristig plane ich auch einen Master zu absolvieren, 
          um meine Expertise weiter zu vertiefen und zukunftsorientierte Kompetenzen aufzubauen.
        </p>
      )
    },
    {
      id: 'personal',
      title: 'Persönliches',
      icon: Heart,
      content: (
        <p className="text-gray-300 leading-relaxed">
          In meiner Freizeit schätze ich die Balance zwischen sozialen Kontakten und persönlichen 
          Interessen. Ich geniesse Zeit mit Freunden, bin sportlich aktiv und snowboarde im Winter 
          gerne in den Bergen. Zur Entspannung widme ich mich dem Gaming und sammle Pokémonkarten.
        </p>
      )
    }
  ];

  return (
    <section id="about" className="section-padding bg-transparent">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Über mich
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <div className="relative">
              <div className="w-64 h-64 rounded-2xl overflow-hidden border border-gray-700">
                <img
                  src="/images/me/profilbild2.png"
                  alt="Ben Profile"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>

          {/* Info Cards Grid */}
          <div className="lg:col-span-2 grid gap-6">
            {cards.map((card, index) => {
              const IconComponent = card.icon;
              return (
                <motion.div
                  key={card.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gray-800 border border-gray-700 rounded-xl p-6 hover:border-gray-600 transition-all duration-75"
                >
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-10 h-10 bg-gray-700 rounded-lg flex items-center justify-center">
                      <IconComponent className="w-5 h-5 text-accent-500" />
                    </div>
                    <h3 className="text-lg font-semibold text-white">{card.title}</h3>
                  </div>
                  <div className="pl-13">
                    {card.content}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* CV Download Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gray-800 border border-gray-700 rounded-xl p-8 text-center"
        >
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 bg-gray-700 rounded-full flex items-center justify-center">
              <FileText className="w-8 h-8 text-accent-500" />
            </div>
          </div>
          <h3 className="text-2xl font-semibold text-white mb-4">
            Interessiert an meinen Details?
          </h3>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Lade meinen vollständigen Lebenslauf herunter und erfahre mehr über meine detaillierten 
            Qualifikationen, Projekterfahrungen und beruflichen Stationen. Für weitere Informationen 
            kontaktiere mich gerne unter: {personalInfo.email}
          </p>
          <motion.button
            onClick={downloadCV}
            className="inline-flex items-center space-x-3 bg-accent-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-accent-600 transition-colors duration-75"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <Download className="w-5 h-5" />
            <span>Lebenslauf herunterladen</span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default About;