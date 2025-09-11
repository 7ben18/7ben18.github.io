import React, { createContext, useContext, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Lock, X, Shield, AlertTriangle, Eye, EyeOff } from 'lucide-react';

interface AuthContextType {
  isAuthenticated: boolean;
  requestAuth: (onSuccess?: () => void) => void;
  openSecureDocument: (encryptedUrl: string) => void;
  downloadCV: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

interface AuthProviderProps {
  children: React.ReactNode;
}

const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [attempts, setAttempts] = useState(0);
  const [isLocked, setIsLocked] = useState(false);
  const [pendingAction, setPendingAction] = useState<(() => void) | null>(null);
  const [showSuccess, setShowSuccess] = useState(false);

  const MASTER_PASSWORD_HASH = '835f38340c098c754be745116f02d4c2c88a990221bc1cc9ab9a5d142ae1564f';
  const MAX_ATTEMPTS = 3;

  useEffect(() => {
    // Check if already authenticated in session
    const authenticated = sessionStorage.getItem('portfolio_auth') === '1';
    setIsAuthenticated(authenticated);
  }, []);

  const hashPassword = async (input: string): Promise<string> => {
    const encoder = new TextEncoder();
    const data = encoder.encode(input);
    const hashBuffer = await crypto.subtle.digest('SHA-256', data);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
  };

  const decryptUrl = (encrypted: string, key = 'portfolio2024'): string => {
    try {
      const decoded = atob(encrypted);
      let result = '';
      for (let i = 0; i < decoded.length; i++) {
        result += String.fromCharCode(decoded.charCodeAt(i) ^ key.charCodeAt(i % key.length));
      }
      return result;
    } catch (error) {
      console.error('Failed to decrypt URL:', error);
      return '';
    }
  };

  const authenticate = async () => {
    const hash = await hashPassword(password);
    if (hash === MASTER_PASSWORD_HASH) {
      setIsAuthenticated(true);
      sessionStorage.setItem('portfolio_auth', '1');
      setShowSuccess(true);
      setTimeout(() => {
        setShowModal(false);
        setShowSuccess(false);
        setPassword('');
        if (pendingAction) {
          pendingAction();
          setPendingAction(null);
        }
      }, 1500);
    } else {
      const newAttempts = attempts + 1;
      setAttempts(newAttempts);
      if (newAttempts >= MAX_ATTEMPTS) {
        setIsLocked(true);
      }
      setPassword('');
    }
  };

  const requestAuth = (onSuccess?: () => void) => {
    if (isAuthenticated && onSuccess) {
      onSuccess();
      return;
    }
    if (onSuccess) {
      setPendingAction(() => onSuccess);
    }
    setShowModal(true);
  };

  const openSecureDocument = (encryptedUrl: string) => {
    const action = () => {
      const decryptedUrl = decryptUrl(encryptedUrl);
      if (decryptedUrl) {
        window.open(decryptedUrl, '_blank');
      }
    };

    if (isAuthenticated) {
      action();
    } else {
      requestAuth(action);
    }
  };

  const downloadCV = () => {
    const action = () => {
      // Create a download link for the CV
      const link = document.createElement('a');
      link.href = '/docs/cv/Lebenslauf-SiBenTran.pdf';
      link.download = 'Lebenslauf-SiBenTran.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    };

    if (isAuthenticated) {
      action();
    } else {
      requestAuth(action);
    }
  };

  const closeModal = () => {
    setShowModal(false);
    setPassword('');
    setShowPassword(false);
    setPendingAction(null);
    setShowSuccess(false);
  };

  return (
    <AuthContext.Provider value={{
      isAuthenticated,
      requestAuth,
      openSecureDocument,
      downloadCV
    }}>
      {children}

      {/* Auth Modal */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className={`bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 ${showSuccess ? 'bg-gradient-to-br from-green-50 to-emerald-50' : ''}`}
              onClick={(e) => e.stopPropagation()}
            >
              {showSuccess ? (
                <motion.div
                  initial={{ scale: 0.8 }}
                  animate={{ scale: 1 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-green-800 mb-2">Zugang gewährt!</h3>
                  <p className="text-green-600">Willkommen in meinem Portfolio</p>
                </motion.div>
              ) : (
                <>
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 bg-accent-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Lock className="w-8 h-8 text-accent-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">Portfolio-Zugang</h3>
                    <p className="text-gray-600">Zugang zu CV und allen Zertifikaten</p>
                  </div>

                  <div className="space-y-4">
                    <div className="relative">
                      <input
                        type={showPassword ? "text" : "password"}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Master-Passwort eingeben..."
                        className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-transparent"
                        onKeyPress={(e) => e.key === 'Enter' && !isLocked && authenticate()}
                        disabled={isLocked}
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors duration-75"
                        disabled={isLocked}
                      >
                        {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                      </button>
                    </div>

                    {attempts > 0 && !isLocked && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex items-center space-x-2 text-red-600 text-sm"
                      >
                        <AlertTriangle size={16} />
                        <span>Falsches Passwort! Versuche übrig: {MAX_ATTEMPTS - attempts}</span>
                      </motion.div>
                    )}

                    {isLocked && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex items-center space-x-2 text-red-600 text-sm"
                      >
                        <AlertTriangle size={16} />
                        <span>Zu viele Fehlversuche. Bitte lade die Seite neu.</span>
                      </motion.div>
                    )}

                    <div className="flex space-x-3">
                      <motion.button
                        onClick={authenticate}
                        disabled={isLocked}
                        className="flex-1 btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
                        whileHover={{ scale: isLocked ? 1 : 1.02 }}
                        whileTap={{ scale: isLocked ? 1 : 0.98 }}
                      >
                        Zugang gewähren
                      </motion.button>
                      <motion.button
                        onClick={closeModal}
                        className="px-6 py-3 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <X size={20} />
                      </motion.button>
                    </div>
                  </div>
                </>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </AuthContext.Provider>
  );
};

export default AuthProvider;