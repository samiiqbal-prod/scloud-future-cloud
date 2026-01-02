import { motion } from 'framer-motion';
import { Server, Globe, HardDrive, Cpu, Shield, Zap } from 'lucide-react';

const services = [
  {
    icon: Server,
    title: 'Infrastructure as a Service',
    description: 'Deploy virtual machines, containers, and serverless functions with enterprise-grade reliability.',
  },
  {
    icon: Globe,
    title: 'High-Availability Web Hosting',
    description: 'Lightning-fast hosting with automatic scaling, CDN, and DDoS protection included.',
  },
  {
    icon: HardDrive,
    title: 'Elastic Compute & Storage',
    description: 'Scale your resources on-demand with SSD-powered storage and high-performance compute.',
  },
  {
    icon: Cpu,
    title: 'Managed Kubernetes',
    description: 'Deploy containerized applications with our fully managed Kubernetes platform.',
  },
  {
    icon: Shield,
    title: 'Enterprise Security',
    description: 'Multi-layer security with encryption at rest and in transit, plus compliance certifications.',
  },
  {
    icon: Zap,
    title: 'Edge Computing',
    description: 'Deploy applications closer to your users with our global edge network.',
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-32 relative">
      <div className="section-container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
            Cloud Services, <span className="gradient-text">Engineered for Scale.</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Everything you need to build, deploy, and scale modern applications.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="group glass-panel rounded-2xl p-8 gradient-border hover:shadow-glow-sm transition-all duration-500"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                <service.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-display text-xl font-semibold mb-3 text-foreground">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
