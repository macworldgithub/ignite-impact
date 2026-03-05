import { motion } from "framer-motion";

const steps = [
  { label: "Client App", sub: "Your Application" },
  { label: "Wube SDK", sub: "Chunking + Encryption" },
  { label: "Seal Protocol", sub: "Policy-Based Keys" },
  { label: "Walrus Storage", sub: "Decentralized Blobs" },
  { label: "Sui Blockchain", sub: "Ownership Registry" },
];

const ArchitectureSection = () => {
  return (
    <section id="architecture" className="relative py-32 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[1px] bg-gradient-to-r from-transparent via-accent/30 to-transparent" />

      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="font-mono text-sm text-accent tracking-widest uppercase">Architecture</span>
          <h2 className="text-4xl sm:text-5xl font-bold mt-4 mb-6">
            Simple by Design.<br />
            <span className="text-gradient-accent">Powerful by Default.</span>
          </h2>
        </motion.div>

        {/* Pipeline visualization */}
        <motion.div
          className="flex flex-col lg:flex-row items-center justify-center gap-4 lg:gap-0 mb-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {steps.map((step, i) => (
            <div key={step.label} className="flex items-center">
              <div className="relative flex flex-col items-center">
                <div className="w-40 py-5 px-4 rounded-xl border border-glow bg-card text-center hover:border-primary/40 transition-colors">
                  <div className="font-mono text-xs text-primary mb-1 tracking-wider">{String(i + 1).padStart(2, '0')}</div>
                  <div className="font-semibold text-sm">{step.label}</div>
                  <div className="text-xs text-muted-foreground mt-1">{step.sub}</div>
                </div>
              </div>
              {i < steps.length - 1 && (
                <div className="hidden lg:block w-8 h-[2px] bg-gradient-to-r from-primary/60 to-primary/20" />
              )}
              {i < steps.length - 1 && (
                <div className="block lg:hidden w-[2px] h-6 bg-gradient-to-b from-primary/60 to-primary/20 mx-auto" />
              )}
            </div>
          ))}
        </motion.div>

        {/* Stats */}
        <motion.div
          className="grid grid-cols-2 lg:grid-cols-4 gap-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {[
            { value: "≤5 min", label: "Max Duration" },
            { value: "8 GB", label: "Max File Size" },
            { value: "4K", label: "Max Resolution" },
            { value: "4", label: "Access Policies" },
          ].map((stat) => (
            <div key={stat.label} className="text-center p-6 rounded-xl border border-glow bg-card">
              <div className="text-3xl sm:text-4xl font-bold text-gradient-primary font-mono">{stat.value}</div>
              <div className="text-sm text-muted-foreground mt-2">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ArchitectureSection;
