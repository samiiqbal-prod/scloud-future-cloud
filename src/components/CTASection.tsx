import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import GridBackground from './GridBackground';

const CTASection = () => {
  return (
    <section className="py-32 relative overflow-hidden">
      <GridBackground />
      
      {/* Glow bloom */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] opacity-30 blur-3xl pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse, hsl(var(--primary)) 0%, transparent 60%)',
        }}
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.2, 0.35, 0.2],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="font-display text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Build on Infrastructure
            <br />
            <span className="gradient-text">That Never Sleeps.</span>
          </h2>
          <p className="text-muted-foreground text-lg mb-12 max-w-xl mx-auto">
            Join thousands of enterprises already running on SCloud. 
            Start building in minutes, scale to millions.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="hero" size="xl" className="group">
              Get Started
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="heroOutline" size="xl">
              Explore
            </Button>
          </div>

          {/* Trust badges */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-16 pt-12 border-t border-border/50"
          >
            <p className="text-sm text-muted-foreground mb-6">Trusted by industry leaders</p>
            <div className="flex items-center justify-center gap-8 flex-wrap opacity-40">
              {['Enterprise', 'TechCorp', 'CloudFirst', 'DataPro', 'ScaleLabs'].map((company) => (
                <span key={company} className="font-display text-lg font-medium text-foreground">
                  {company}
                </span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
