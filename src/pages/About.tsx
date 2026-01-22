import { motion } from 'framer-motion';
import { Layout } from '@/components/layout/Layout';
import { Users, Target, Award, Rocket } from 'lucide-react';
import { CTASection } from '@/components/sections/CTASection';

const values = [
  {
    icon: Target,
    title: 'Fokus pada Kualitas',
    description: 'Kami selalu mengutamakan kualitas dalam setiap project yang kami kerjakan.',
  },
  {
    icon: Users,
    title: 'Tim Profesional',
    description: 'Developer berpengalaman yang siap membantu mewujudkan aplikasi impian Anda.',
  },
  {
    icon: Award,
    title: 'Komitmen Tinggi',
    description: 'Kami berkomitmen menyelesaikan setiap project tepat waktu dan sesuai requirement.',
  },
  {
    icon: Rocket,
    title: 'Inovasi Berkelanjutan',
    description: 'Selalu update dengan teknologi terbaru untuk memberikan solusi terbaik.',
  },
];

const About = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-20 gradient-hero">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              About Us
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mt-4 mb-6">
              Tentang <span className="text-gradient">SEPROX</span>
            </h1>
            <p className="text-muted-foreground text-lg">
              Agency pengembangan aplikasi profesional yang berdedikasi untuk membantu bisnis dan mahasiswa
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Cerita Kami
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed text-justify">
                <p>
                  SEPROX adalah agency pengembangan aplikasi yang didirikan dengan visi untuk 
                  membantu bisnis dan individu mewujudkan solusi digital dengan hasil yang profesional dan berkualitas.
                </p>
                <p>
                  Kami berfokus pada pembuatan website, aplikasi, dan sistem digital yang tidak hanya berfungsi dengan baik, 
                  tetapi juga terlihat modern, elegan, dan siap digunakan untuk meningkatkan kepercayaan pelanggan.
                </p>
                <p>
                  Selain melayani kebutuhan bisnis, SEPROX juga menerima jasa pembuatan tugas kuliah dan project skripsi, 
                  mulai dari pembuatan program, laporan, hingga dokumentasi dengan hasil yang rapi, terstruktur, dan mudah dipahami.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-2 gap-6"
            >
              <div className="bg-card rounded-2xl p-8 shadow-card border border-border text-center">
                <div className="text-4xl font-bold text-gradient mb-2">Project Custom</div>
                <div className="text-muted-foreground">Sesuai Kebutuhan Klien</div>
              </div>
              <div className="bg-card rounded-2xl p-8 shadow-card border border-border text-center">
                <div className="text-4xl font-bold text-gradient mb-2">Fast Delivery</div>
                <div className="text-muted-foreground">Pengerjaan Cepat & Terarah</div>
              </div>
              <div className="bg-card rounded-2xl p-8 shadow-card border border-border text-center">
                <div className="text-4xl font-bold text-gradient mb-2">Flexible Revision</div>
                <div className="text-muted-foreground">Revisi Fleksibel</div>
              </div>
              <div className="bg-card rounded-2xl p-8 shadow-card border border-border text-center">
                <div className="text-4xl font-bold text-gradient mb-2">24/7 Support</div>
                <div className="text-muted-foreground">Dukungan Selalu Tersedia</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-seprox-blue-50">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Nilai-Nilai Kami
            </h2>
            <p className="text-muted-foreground text-lg">
              Prinsip yang kami pegang dalam setiap project
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card rounded-2xl p-8 shadow-card border border-border text-center"
              >
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                  <value.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {value.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </Layout>
  );
};

export default About;
