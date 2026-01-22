import { motion } from 'framer-motion';
import { Layout } from '@/components/layout/Layout';
import { PortfolioSection } from '@/components/sections/PortfolioSection';
import { CTASection } from '@/components/sections/CTASection';

const Portfolio = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-10 gradient-hero">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              Portfolio
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mt-4 mb-6">
              Project <span className="text-gradient">Kami</span>
            </h1>
            <p className="text-muted-foreground text-lg">
              Lihat berbagai project yang telah kami selesaikan untuk klien kami dengan kualitas premium
            </p>
          </motion.div>
        </div>
      </section>

      <PortfolioSection showAll />
      <CTASection />
    </Layout>
  );
};

export default Portfolio;
