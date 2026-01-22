import { motion } from 'framer-motion';
import { Check, Zap, Users, Clock, Headphones, DollarSign } from 'lucide-react';

const features = [
  {
    icon: Check,
    title: 'Profesional & Tepat Waktu',
    description: 'Pengerjaan project dengan standar profesional dan sesuai timeline yang disepakati.',
  },
  {
    icon: Zap,
    title: 'Request Fitur Custom',
    description: 'Fleksibel untuk request fitur sesuai kebutuhan spesifik bisnis Anda.',
  },
  {
    icon: Users,
    title: 'Support Revisi & Maintenance',
    description: 'Garansi revisi dan layanan maintenance berkelanjutan setelah project selesai.',
  },
  {
    icon: DollarSign,
    title: 'Harga Fleksibel',
    description: 'Penawaran harga yang kompetitif dan dapat disesuaikan dengan budget Anda.',
  },
  {
    icon: Headphones,
    title: 'Konsultasi Gratis',
    description: 'Konsultasi awal gratis untuk memahami kebutuhan dan memberikan solusi terbaik.',
  },
  {
    icon: Clock,
    title: 'Response Cepat',
    description: 'Tim support yang responsif dan siap membantu kapan saja Anda butuhkan.',
  },
];

export const WhyChooseSection = () => {
  return (
    <section className="py-20 lg:py-32 bg-seprox-blue-50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              Why Choose Us
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-6">
              Mengapa Memilih <span className="text-gradient">SEPROX</span>?
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Kami berkomitmen memberikan layanan terbaik dengan kualitas premium 
              untuk setiap project yang kami kerjakan.
            </p>

            {/* Features Grid */}
            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex gap-4"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative bg-card rounded-3xl p-8 lg:p-12 shadow-card-hover border border-border">
              {/* Stats */}
              <div className="space-y-8">
                <div className="text-center">
                  <div className="text-6xl font-bold text-gradient mb-2">100+</div>
                  <div className="text-muted-foreground">Project Diselesaikan</div>
                </div>
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center p-4 bg-secondary rounded-xl">
                    <div className="text-3xl font-bold text-foreground mb-1">98%</div>
                    <div className="text-sm text-muted-foreground">Klien Puas</div>
                  </div>
                  <div className="text-center p-4 bg-secondary rounded-xl">
                    <div className="text-3xl font-bold text-foreground mb-1">24/7</div>
                    <div className="text-sm text-muted-foreground">Support</div>
                  </div>
                </div>
                <div className="flex items-center justify-center gap-4">
                  <div className="flex -space-x-3">
                    {[1, 2, 3, 4].map((i) => (
                      <div
                        key={i}
                        className="w-10 h-10 rounded-full bg-primary/20 border-2 border-card flex items-center justify-center"
                      >
                        <span className="text-xs font-semibold text-primary">
                          {String.fromCharCode(64 + i)}
                        </span>
                      </div>
                    ))}
                  </div>
                  <span className="text-sm text-muted-foreground">
                    Bergabung dengan 50+ klien
                  </span>
                </div>
              </div>
            </div>

            {/* Decorations */}
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-accent/20 rounded-full blur-2xl" />
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary/10 rounded-full blur-2xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
