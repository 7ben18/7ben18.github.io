import React from 'react';
import { motion } from 'framer-motion';
import { 
  Briefcase, 
  University, 
  GraduationCap, 
  Book, 
  FileText, 
  Trophy, 
  Heart, 
  Shield, 
  VideoIcon,
  FolderOpen
} from 'lucide-react';
import { certificates } from '../data/portfolio';
import { useAuth } from './AuthProvider';

const Certificates: React.FC = () => {
  const { openSecureDocument } = useAuth();

  const getIcon = (iconName: string) => {
    const iconMap = {
      briefcase: Briefcase,
      university: University,
      'graduation-cap': GraduationCap,
      book: Book,
      'file-text': FileText,
      certificate: Trophy,
      trophy: Trophy,
      heart: Heart,
      building: Briefcase,
      shield: Shield,
      folder: FolderOpen,
      'video-camera': VideoIcon,
    };
    const IconComponent = iconMap[iconName as keyof typeof iconMap] || FileText;
    return <IconComponent className="w-6 h-6" />;
  };


  return (
    <section id="degree" className="section-padding bg-transparent">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Abschlüsse & Zertifikate
          </h2>
          <p className="text-lg text-gray-300 max-w-4xl mx-auto">
            Hier findest du eine umfassende Liste meiner akademischen und beruflichen 
            Zertifikate und abgeschlossenen Kurse, die meine Bereitschaft zur kontinuierlichen 
            Weiterbildung und persönlichen Entwicklung zeigen.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {certificates.map((certificate, index) => (
            <motion.div
              key={certificate.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-800 border border-gray-700 rounded-xl hover:border-gray-600 transition-all duration-75"
            >
              {/* Header */}
              <div className="p-6 border-b border-gray-700">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gray-700 rounded-xl flex items-center justify-center">
                    <div className="text-accent-500">
                      {getIcon(certificate.icon)}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1">
                      {certificate.title}
                    </h3>
                  </div>
                </div>
              </div>

              {/* Documents */}
              <div className="p-6 space-y-3">
                {certificate.documents.map((doc, docIndex) => (
                  <motion.button
                    key={doc.id}
                    onClick={() => openSecureDocument(doc.encryptedUrl)}
                    className="w-full flex items-center justify-between p-4 bg-gray-700/50 hover:bg-gray-700 rounded-lg transition-all duration-75 group"
                    whileHover={{ x: 5, scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 + docIndex * 0.05 }}
                  >
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-gray-600 rounded-lg flex items-center justify-center text-gray-300">
                        {getIcon(doc.icon)}
                      </div>
                      <span className="font-medium text-gray-200 group-hover:text-white">
                        {doc.title}
                      </span>
                    </div>
                  </motion.button>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Certificates;