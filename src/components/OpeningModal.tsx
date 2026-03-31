import { motion, AnimatePresence } from "motion/react";
import { Mail, X } from "lucide-react";
import { Button } from "./ui/button";

interface OpeningModalProps {
  isOpen: boolean;
  onClose: () => void;
  guestName: string;
}

export function OpeningModal({ isOpen, onClose, guestName }: OpeningModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-3xl p-8 md:p-12 max-w-md w-full relative overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Floral Decoration */}
            <div className="absolute top-0 right-0 w-32 h-32 opacity-10">
              <svg viewBox="0 0 100 100" className="text-sage-600">
                <circle cx="50" cy="50" r="8" fill="currentColor" />
                <circle cx="35" cy="35" r="6" fill="currentColor" />
                <circle cx="65" cy="35" r="6" fill="currentColor" />
                <circle cx="35" cy="65" r="6" fill="currentColor" />
                <circle cx="65" cy="65" r="6" fill="currentColor" />
                <circle cx="50" cy="30" r="5" fill="currentColor" />
                <circle cx="50" cy="70" r="5" fill="currentColor" />
                <circle cx="30" cy="50" r="5" fill="currentColor" />
                <circle cx="70" cy="50" r="5" fill="currentColor" />
              </svg>
            </div>

            <div className="text-center relative z-10">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring" }}
                className="w-16 h-16 bg-gradient-to-br from-sage-400 to-sage-600 rounded-full mx-auto mb-6 flex items-center justify-center"
              >
                <Mail className="w-8 h-8 text-white" />
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-sage-700 text-sm mb-2 tracking-widest uppercase"
              >
                Undangan Pernikahan
              </motion.p>

              <motion.h2
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-3xl md:text-4xl font-serif text-gray-800 mb-4"
              >
                Abiyyu & Miftah
              </motion.h2>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="mb-6"
              >
                <p className="text-gray-600 mb-2">Kepada Yth.</p>
                <p className="text-2xl font-serif text-sage-700 mb-1">
                  {guestName || "Bapak/Ibu/Saudara/i"}
                </p>
                <p className="text-sm text-gray-500">Di Tempat</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                <p className="text-gray-600 text-sm mb-6 italic">
                  Tanpa mengurangi rasa hormat, kami mengundang Anda untuk hadir
                  di acara walimatul urs kami
                </p>

                <Button
                  onClick={onClose}
                  className="bg-gradient-to-r from-sage-500 to-sage-600 hover:from-sage-600 hover:to-sage-700 text-white px-8 py-6 text-lg rounded-full shadow-lg"
                >
                  Buka Undangan
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
