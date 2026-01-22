import { motion } from "framer-motion";
import { ArrowRight, MessageCircle, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroImage from "@/assets/mockup.png";

const WHATSAPP_LINK =
  "https://wa.me/6285861821370?text=Halo%20SEPROX,%20saya%20ingin%20konsultasi%20project%20aplikasi";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen gradient-hero overflow-hidden pt-20">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-20 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-7"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.15 }}
              className="inline-flex items-center gap-2 bg-card rounded-full px-4 py-2 shadow-card border border-border"
            >
              <Sparkles className="h-4 w-4 text-accent" />
              <span className="text-sm font-medium text-muted-foreground">
                Professional App Development Agency
              </span>
            </motion.div>

            {/* Heading */}
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Jasa Project <span className="text-gradient">Aplikasi</span>
              </h1>

              <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed">
                Website • Skripsi/Tugas Kuliah • Kasir • Inventori • Absensi •
                API & Backend
              </p>
            </div>

            {/* Description */}
            <p className="text-muted-foreground leading-relaxed">
              Kami membantu Anda mewujudkan aplikasi impian dengan berkualitas,
              harga terjangkau, dan support profesional.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                size="lg"
                className="bg-accent hover:bg-seprox-gold-hover text-accent-foreground font-semibold shadow-gold transition-all hover:scale-105 text-base px-8"
              >
                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Chat WhatsApp Sekarang
                </a>
              </Button>

              <Button
                asChild
                size="lg"
                variant="outline"
                className="font-semibold text-base px-8 border-primary/20 hover:bg-primary/5"
              >
                <Link to="/portfolio">
                  Lihat Portfolio
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>

            {/* Stats (mobile aman) */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 pt-2">
              <div>
                <div className="text-2xl md:text-3xl font-bold text-foreground">
                  Project Custom
                </div>
                <div className="text-sm text-muted-foreground">
                  Sesuai Kebutuhan Klien
                </div>
              </div>

              <div>
                <div className="text-2xl md:text-3xl font-bold text-foreground">
                  Fast Response
                </div>
                <div className="text-sm text-muted-foreground">
                  Respon cepat & jelas
                </div>
              </div>

              <div>
                <div className="text-2xl md:text-3xl font-bold text-foreground">
                  Full Support
                </div>
                <div className="text-sm text-muted-foreground">
                  Dari awal sampai selesai
                </div>
              </div>
            </div>

            {/* ✅ MOBILE IMAGE (banner) */}
            <div className="lg:hidden pt-6">
              <div className="relative rounded-2xl overflow-hidden shadow-card-hover border border-border bg-card">
                <img
                  src={heroImage}
                  alt="App Development"
                  className="w-full h-[240px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-seprox-blue-900/20 to-transparent" />

                <div className="absolute bottom-4 left-4 right-4 bg-card/90 backdrop-blur-xl rounded-xl p-3 border border-border shadow-card">
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-full bg-accent/20 flex items-center justify-center">
                      <Sparkles className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-foreground">
                        Premium Quality
                      </div>
                      <div className="text-xs text-muted-foreground">
                        Trusted
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* ✅ DESKTOP IMAGE (kanan) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="relative hidden lg:block"
          >
            <div className="relative">
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-card-hover">
                <img
                  src={heroImage}
                  alt="App Development"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-seprox-blue-900/20 to-transparent" />
              </div>

              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-6 -left-6 bg-card rounded-xl p-4 shadow-card-hover border border-border z-20"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
                    <Sparkles className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-foreground">
                      Premium Quality
                    </div>
                    <div className="text-xs text-muted-foreground">Trusted</div>
                  </div>
                </div>
              </motion.div>

              <div className="absolute -top-4 -right-4 w-full h-full bg-primary/10 rounded-2xl -z-10" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
