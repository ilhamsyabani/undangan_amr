import { motion } from "motion/react";
import { Heart } from "lucide-react";

export function CoupleSection() {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-white to-sage-50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Heart className="w-8 h-8 mx-auto mb-4 text-sage-600" />
          <h2 className="text-4xl md:text-5xl font-serif text-gray-800 mb-4">
            Mempelai
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Dengan memohon rahmat dan ridho Allah SWT, kami bermaksud mengadakan
            syukuran pernikahan putra-putri kami
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 md:gap-8 items-center max-w-4xl mx-auto">
          {/* Groom */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="w-48 h-48 mx-auto mb-6 rounded-full bg-gradient-to-br from-sage-100 to-sage-200 border-4 border-sage-300 shadow-xl flex items-center justify-center">
              <div className="text-6xl font-serif text-sage-700">A</div>
            </div>
            <h3 className="text-3xl font-serif text-gray-800 mb-2">
              Abiyyu Ammar Shiddiq Ismail
            </h3>
            <p className="text-gray-600 mb-1">Putra dari</p>
            <p className="text-gray-800">
              Bapak Mujiharjo & Ibu Ani Dwi Mulyati
            </p>
          </motion.div>

          {/* Heart Divider */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-16 h-16 bg-sage-600 rounded-full items-center justify-center shadow-lg"
          >
            <Heart className="w-8 h-8 text-white fill-white" />
          </motion.div>

          {/* Bride */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="w-48 h-48 mx-auto mb-6 rounded-full bg-gradient-to-br from-mint-100 to-mint-200 border-4 border-sage-300 shadow-xl flex items-center justify-center">
              <div className="text-6xl font-serif text-sage-700">M</div>
            </div>
            <h3 className="text-3xl font-serif text-gray-800 mb-2">
              Miftahus Sa'adah Maulidiyah
            </h3>
            <p className="text-gray-600 mb-1">Putri dari</p>
            <p className="text-gray-800">
              Bapak Kholifus Sholeh & Ibu Khidrotul Khusnul Aini
            </p>
          </motion.div>
        </div>

        {/* Akad Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12 bg-white rounded-2xl p-8 max-w-2xl mx-auto shadow-lg border-2 border-sage-100"
        >
          <p className="text-gray-600 mb-2">
            Telah melangsungkan akad nikah pada
          </p>
          <p className="text-2xl font-serif text-sage-700 mb-1">
            Jumat, 6 Februari 2026
          </p>
          <p className="text-gray-500 text-sm">
            Masjid Baitul Muttaqien, Ambulu, Jember
          </p>
        </motion.div>
      </div>
    </section>
  );
}
