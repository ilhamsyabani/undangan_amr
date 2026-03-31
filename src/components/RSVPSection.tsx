import { motion } from "motion/react";
import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Heart } from "lucide-react";

export function RSVPSection() {
  const [formData, setFormData] = useState({
    name: "",
    attendance: "",
    guests: "1",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", attendance: "", guests: "1", message: "" });
    }, 3000);
  };

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-white to-sage-50">
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <Heart className="w-8 h-8 mx-auto mb-4 text-sage-700" />
          <h2 className="text-4xl md:text-5xl font-serif text-gray-800 mb-4">
            Konfirmasi Kehadiran
          </h2>
          <p className="text-gray-600">
            Mohon konfirmasi kehadiran Anda melalui form di bawah ini
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl p-8 shadow-xl border-2 border-sage-100"
        >
          {submitted ? (
            <div className="text-center py-12">
              <Heart className="w-16 h-16 mx-auto mb-4 text-sage-700 fill-sage-700" />
              <h3 className="text-2xl font-serif text-gray-800 mb-2">
                Terima Kasih!
              </h3>
              <p className="text-gray-600">
                Konfirmasi Anda telah berhasil dikirim
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-gray-700 mb-2">
                  Nama Lengkap *
                </label>
                <Input
                  type="text"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  placeholder="Masukkan nama Anda"
                  required
                  className="w-full"
                />
              </div>

              <div>
                <label className="block text-gray-700 mb-2">
                  Konfirmasi Kehadiran *
                </label>
                <div className="grid grid-cols-2 gap-4">
                  <button
                    type="button"
                    onClick={() =>
                      setFormData({ ...formData, attendance: "hadir" })
                    }
                    className={`py-3 px-6 rounded-lg border-2 transition-all ${
                      formData.attendance === "hadir"
                        ? "bg-sage-600 text-white border-sage-600"
                        : "bg-white text-gray-700 border-gray-300 hover:border-sage-300"
                    }`}
                  >
                    Hadir
                  </button>
                  <button
                    type="button"
                    onClick={() =>
                      setFormData({ ...formData, attendance: "tidak" })
                    }
                    className={`py-3 px-6 rounded-lg border-2 transition-all ${
                      formData.attendance === "tidak"
                        ? "bg-sage-600 text-white border-sage-600"
                        : "bg-white text-gray-700 border-gray-300 hover:border-sage-300"
                    }`}
                  >
                    Tidak Hadir
                  </button>
                </div>
              </div>

              {formData.attendance === "hadir" && (
                <div>
                  <label className="block text-gray-700 mb-2">
                    Jumlah Tamu
                  </label>
                  <Input
                    type="number"
                    value={formData.guests}
                    onChange={(e) =>
                      setFormData({ ...formData, guests: e.target.value })
                    }
                    min="1"
                    max="5"
                    className="w-full"
                  />
                </div>
              )}

              <div>
                <label className="block text-gray-700 mb-2">
                  Ucapan & Doa
                </label>
                <Textarea
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  placeholder="Berikan ucapan dan doa untuk kami"
                  className="w-full min-h-[120px]"
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-sage-600 hover:bg-sage-700 text-white py-6 text-lg"
                disabled={!formData.name || !formData.attendance}
              >
                Kirim Konfirmasi
              </Button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}