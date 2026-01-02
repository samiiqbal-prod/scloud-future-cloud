import { motion } from 'framer-motion';

const locations = [
  { name: 'North America', x: 22, y: 35, latency: '8ms' },
  { name: 'Europe', x: 48, y: 30, latency: '12ms' },
  { name: 'Asia Pacific', x: 75, y: 40, latency: '15ms' },
  { name: 'South America', x: 28, y: 65, latency: '18ms' },
];

const PerformanceSection = () => {
  return (
    <section id="performance" className="py-32 relative overflow-hidden">
      {/* Background gradient */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          background: 'radial-gradient(ellipse at 50% 100%, hsl(var(--primary) / 0.15) 0%, transparent 50%)',
        }}
      />

      <div className="section-container relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
            Low Latency. High Availability.
            <br />
            <span className="gradient-text">Total Control.</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Global infrastructure with points of presence across 4 continents, 
            delivering sub-20ms latency to 95% of the world's internet users.
          </p>
        </motion.div>

        {/* World Map Visualization */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative glass-panel rounded-3xl p-8 md:p-12 gradient-border"
        >
          <div className="relative aspect-[2/1] min-h-[300px]">
            {/* Grid lines */}
            <div 
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage: `
                  linear-gradient(hsl(var(--primary)) 1px, transparent 1px),
                  linear-gradient(to right, hsl(var(--primary)) 1px, transparent 1px)
                `,
                backgroundSize: '40px 40px',
              }}
            />

            {/* Connection lines */}
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 50">
              {locations.map((loc, i) => 
                locations.slice(i + 1).map((loc2, j) => (
                  <motion.line
                    key={`${i}-${j}`}
                    x1={loc.x}
                    y1={loc.y}
                    x2={loc2.x}
                    y2={loc2.y}
                    stroke="hsl(var(--primary))"
                    strokeWidth="0.2"
                    strokeOpacity="0.3"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, delay: 0.5 + (i + j) * 0.2 }}
                  />
                ))
              )}
            </svg>

            {/* Data flow particles */}
            {locations.map((loc, i) => (
              <motion.div
                key={`particle-${i}`}
                className="absolute w-1.5 h-1.5 rounded-full bg-primary shadow-glow-sm"
                style={{ left: `${loc.x}%`, top: `${loc.y}%` }}
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.5,
                }}
              />
            ))}

            {/* Location nodes */}
            {locations.map((loc, index) => (
              <motion.div
                key={loc.name}
                className="absolute transform -translate-x-1/2 -translate-y-1/2"
                style={{ left: `${loc.x}%`, top: `${loc.y}%` }}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.15 }}
              >
                {/* Pulse ring */}
                <motion.div
                  className="absolute inset-0 w-12 h-12 -m-6 rounded-full border border-primary/30"
                  animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
                  transition={{ duration: 3, repeat: Infinity, delay: index * 0.5 }}
                />
                
                {/* Node */}
                <div className="relative">
                  <div className="w-4 h-4 rounded-full bg-primary shadow-glow flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-primary-foreground" />
                  </div>
                  
                  {/* Label */}
                  <div className="absolute top-6 left-1/2 -translate-x-1/2 whitespace-nowrap text-center">
                    <div className="text-xs font-medium text-foreground">{loc.name}</div>
                    <div className="text-xs text-primary font-mono">{loc.latency}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Stats bar */}
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: '4', label: 'Continents' },
              { value: '12', label: 'Data Centers' },
              { value: '<20ms', label: 'Avg Latency' },
              { value: '50+', label: 'Edge Locations' },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.6 + i * 0.1 }}
                className="text-center"
              >
                <div className="font-display text-3xl font-bold text-primary">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PerformanceSection;
