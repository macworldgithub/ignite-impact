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
    <section id="architecture" className="relative py-16 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] md:w-[600px] h-[1px] bg-gradient-to-r from-transparent via-accent/30 to-transparent" />

      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        {/* Heading */}
        <motion.div
          className="text-center mb-14 md:mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="font-mono text-xs sm:text-sm text-accent tracking-widest uppercase">
            Architecture
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 mb-6 leading-tight">
            Simple by Design.
            <br />
            <span className="text-gradient-accent">Powerful by Default.</span>
          </h2>
        </motion.div>

        {/* Pipeline */}
        <motion.div
          className="flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-0 mb-16 md:mb-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {steps.map((step, i) => (
            <div
              key={step.label}
              className="flex flex-col lg:flex-row items-center"
            >
              <div className="relative flex flex-col items-center">
                <div className="w-56 sm:w-64 lg:w-40 py-5 px-4 rounded-xl border border-glow bg-card text-center hover:border-primary/40 transition-colors">
                  <div className="font-mono text-xs text-primary mb-1 tracking-wider">
                    {String(i + 1).padStart(2, "0")}
                  </div>

                  <div className="font-semibold text-sm sm:text-base">
                    {step.label}
                  </div>

                  <div className="text-xs sm:text-sm text-muted-foreground mt-1">
                    {step.sub}
                  </div>
                </div>
              </div>

              {/* Desktop Line */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block w-10 xl:w-14 h-[2px] bg-gradient-to-r from-primary/60 to-primary/20" />
              )}

              {/* Mobile Line */}
              {i < steps.length - 1 && (
                <div className="block lg:hidden w-[2px] h-8 bg-gradient-to-b from-primary/60 to-primary/20 my-2" />
              )}
            </div>
          ))}
        </motion.div>

        {/* Stats */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {[
            { value: "≤5min", label: "Max Duration" },
            { value: "8GB", label: "Max File Size" },
            { value: "4K", label: "Max Resolution" },
            { value: "4", label: "Access Policies" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="text-center p-5 sm:p-6 rounded-xl border border-glow bg-card"
            >
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gradient-primary font-mono">
                {stat.value}
              </div>

              <div className="text-xs sm:text-sm text-muted-foreground mt-2">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ArchitectureSection;
