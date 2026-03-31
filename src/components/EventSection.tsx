import { motion } from "motion/react";
import { Calendar, Clock, MapPin } from "lucide-react";
import { Button } from "./ui/button";

export function EventSection() {
  const openMap = () => {
    window.open("https://maps.app.goo.gl/ik97W9qTumGNtwbAA", "_blank");
  };

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif text-gray-800 mb-4">
            Waktu & Tempat
          </h2>
          <p className="text-gray-600">
            Merupakan suatu kehormatan bagi kami apabila Bapak/Ibu/Saudara/i
            berkenan hadir dalam acara syukuran pernikahan kami
          </p>
        </motion.div>

        <div className="max-w-2xl mx-auto">
          {/* Walimatul Urs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-sage-50 to-mint-50 rounded-2xl p-8 shadow-lg border-2 border-sage-100"
          >
            <h3 className="text-2xl font-serif text-gray-800 mb-6 text-center">
              Walimatul Urs
            </h3>

            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <Calendar className="w-6 h-6 text-sage-700 flex-shrink-0 mt-1" />
                <div>
                  <p className="text-gray-800">Sabtu, 11 April 2026</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Clock className="w-6 h-6 text-sage-700 flex-shrink-0 mt-1" />
                <div>
                  <p className="text-gray-800">10.00 WIB - 11.00 WIB</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-sage-700 flex-shrink-0 mt-1" />
                <div>
                  <p className="text-gray-800">
                    Halaman rumah Bpk Mujiharjo
                    <br />
                    Alamat lengkap: Pandean no 16A, gg Ampel RT04/RW56, Gandok,
                    Condongcatur, Depok, Sleman
                  </p>
                </div>
              </div>
            </div>

            <Button
              onClick={openMap}
              className="w-full mt-6 bg-sage-600 hover:bg-sage-700 text-white"
            >
              <MapPin className="w-4 h-4 mr-2" />
              Buka Maps
            </Button>
          </motion.div>

          {/* Additional Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center mt-8 bg-gradient-to-r from-sage-50 to-mint-50 rounded-xl p-6 border border-sage-200"
          >
            <p className="text-gray-600 italic">
              "Barangsiapa yang menghadiri walimah karena diundang, maka ia
              telah memenuhi hak saudaranya"
            </p>
            <p className="text-sm text-gray-500 mt-2">- HR. Bukhari Muslim -</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
