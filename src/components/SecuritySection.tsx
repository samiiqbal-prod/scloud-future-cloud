import { motion } from 'framer-motion';
import { Shield, Lock, Eye, Key, FileCheck, Server } from 'lucide-react';

const securityFeatures = [
  { icon: Lock, title: 'End-to-End Encryption', desc: 'AES-256 encryption at rest and TLS 1.3 in transit' },
  { icon: Eye, title: 'Real-time Monitoring', desc: '24/7 threat detection and automated response' },
  { icon: Key, title: 'Identity Management', desc: 'SSO, MFA, and granular access controls' },
  { icon: FileCheck, title: 'Compliance Ready', desc: 'SOC 2, ISO 27001, GDPR compliant' },
];

const SecuritySection = () => {
  return (
    <section id="security" className="py-32 relative overflow-hidden">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Shield Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative flex items-center justify-center order-2 lg:order-1"
          >
            <div className="relative w-64 h-64">
              {/* Outer ring */}
              <motion.div
                className="absolute inset-0 rounded-full border border-primary/20"
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              />
              
              {/* Middle ring */}
              <motion.div
                className="absolute inset-8 rounded-full border border-primary/30"
                animate={{ rotate: -360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              />

              {/* Inner ring */}
              <motion.div
                className="absolute inset-16 rounded-full border border-primary/40"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              />

              {/* Center shield */}
              <motion.div
                className="absolute inset-0 flex items-center justify-center"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="w-24 h-24 rounded-2xl bg-primary/10 flex items-center justify-center shadow-glow">
                  <Shield className="w-12 h-12 text-primary" />
                </div>
              </motion.div>

              {/* Orbiting nodes */}
              {[0, 60, 120, 180, 240, 300].map((angle, i) => (
                <motion.div
                  key={angle}
                  className="absolute w-3 h-3 rounded-full bg-primary shadow-glow-sm"
                  style={{
                    top: '50%',
                    left: '50%',
                    transform: `rotate(${angle}deg) translateX(120px) translateY(-50%)`,
                  }}
                  animate={{
                    opacity: [0.3, 1, 0.3],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.3,
                  }}
                />
              ))}
            </div>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-1 lg:order-2"
          >
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
              Security Built Into
              <br />
              <span className="gradient-text">Every Layer.</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-10 leading-relaxed">
              Enterprise-grade security with zero compromises. Your data is protected 
              by multiple layers of defense, from physical security to application-level 
              encryption.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {securityFeatures.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-start gap-4 glass-panel rounded-xl p-4"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground mb-1">{feature.title}</h4>
                    <p className="text-sm text-muted-foreground">{feature.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SecuritySection;
