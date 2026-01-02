import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const DataCenterSection = () => {
  const [count, setCount] = useState(0);
  const targetCount = 99.982;

  return (
    <section id="datacenter" className="py-32 relative overflow-hidden">
      {/* Background glow */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] opacity-20 blur-3xl pointer-events-none"
        style={{
          background: 'radial-gradient(circle, hsl(var(--primary)) 0%, transparent 60%)',
        }}
      />

      <div className="section-container relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
              <span className="gradient-text">Tier-III Certified</span>
              <br />
              Infrastructure.
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Built on industry-leading infrastructure with N+1 redundancy, 
              dual power feeds, and 72-hour backup power. Your applications 
              stay online, always.
            </p>

            <div className="grid grid-cols-2 gap-6">
              {[
                { label: 'Power Redundancy', value: 'N+1' },
                { label: 'Network Uptime', value: '99.99%' },
                { label: 'Backup Power', value: '72 Hours' },
                { label: 'Cooling Efficiency', value: 'PUE 1.2' },
              ].map((item) => (
                <div key={item.label} className="glass-panel rounded-xl p-4">
                  <div className="font-display text-2xl font-bold text-primary mb-1">
                    {item.value}
                  </div>
                  <div className="text-sm text-muted-foreground">{item.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: Visual */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="glass-panel rounded-3xl p-8 gradient-border">
              {/* Server Rack Visualization */}
              <div className="space-y-3">
                {Array.from({ length: 8 }).map((_, i) => (
                  <motion.div
                    key={i}
                    className="flex items-center gap-3 glass-panel rounded-lg p-3"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.1 * i }}
                  >
                    <div className="flex gap-1">
                      {Array.from({ length: 4 }).map((_, j) => (
                        <motion.div
                          key={j}
                          className="w-2 h-2 rounded-full bg-primary"
                          animate={{
                            opacity: [0.3, 1, 0.3],
                          }}
                          transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            delay: (i * 4 + j) * 0.1,
                          }}
                        />
                      ))}
                    </div>
                    <div className="flex-1 h-1 bg-secondary rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-primary/50 rounded-full"
                        initial={{ width: '0%' }}
                        whileInView={{ width: `${60 + Math.random() * 35}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.5 + i * 0.1 }}
                      />
                    </div>
                    <span className="text-xs text-muted-foreground font-mono">
                      {['SRV-01', 'SRV-02', 'SRV-03', 'NET-01', 'STR-01', 'STR-02', 'BAK-01', 'BAK-02'][i]}
                    </span>
                  </motion.div>
                ))}
              </div>

              {/* Uptime Counter */}
              <motion.div
                className="mt-8 text-center glass-panel rounded-xl p-6"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.8 }}
              >
                <div className="text-sm text-muted-foreground mb-2">Current Uptime</div>
                <motion.div
                  className="font-display text-4xl font-bold text-primary glow-text"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                >
                  99.982%
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DataCenterSection;
