import { motion } from "motion/react";
import { Heart } from "lucide-react";

export function FooterSection() {
  return (
    <footer className="py-12 px-4 bg-gradient-to-b from-sage-50 to-sage-100">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Heart className="w-12 h-12 mx-auto mb-4 text-sage-700 fill-sage-700" />
          
          <p className="text-gray-700 italic mb-6 text-lg">
            "Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan
            pasangan-pasangan untukmu dari jenismu sendiri, agar kamu cenderung
            dan merasa tenteram kepadanya, dan Dia menjadikan di antaramu rasa
            kasih dan sayang."
          </p>
          
          <p className="text-gray-600 mb-8">
            - QS. Ar-Rum: 21 -
          </p>

          <div className="w-24 h-px bg-sage-400 mx-auto mb-6"></div>

          <h3 className="text-2xl font-serif text-gray-800 mb-2">
            Abiyyu & Miftah
          </h3>
          
          <p className="text-gray-600 mb-8">
            Terima kasih atas doa dan kehadirannya
          </p>

          <p className="text-sm text-gray-500">
            © 2026 - Undangan Pernikahan Digital
          </p>
        </motion.div>
      </div>
    </footer>
  );
}