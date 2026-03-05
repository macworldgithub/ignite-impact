import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Grid background */}
      <div className="absolute inset-0 bg-grid opacity-40" />
      
      {/* Gradient orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-primary/5 blur-[120px]" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 rounded-full bg-accent/5 blur-[120px]" />
      
      <div className="relative z-10 container mx-auto px-6 text-center max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-glow bg-secondary/50 mb-8">
            <span className="w-2 h-2 rounded-full bg-primary glow-dot" />
            <span className="text-sm font-mono text-muted-foreground">
              Built on Walrus · Sui · Seal
            </span>
          </div>
        </motion.div>

        <motion.h1
          className="text-5xl sm:text-6xl lg:text-8xl font-bold tracking-tight leading-[0.95] mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          <span className="text-foreground">Decentralized</span>
          <br />
          <span className="text-gradient-primary">Video Infrastructure</span>
        </motion.h1>

        <motion.p
          className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-4 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
        >
          Upload. Store. Encrypt. Stream. Short-form video with native 
          encryption and policy-based access control for the Web3 ecosystem.
        </motion.p>

        <motion.div
          className="flex items-center justify-center gap-3 font-mono text-sm text-muted-foreground mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <span className="px-3 py-1 rounded bg-secondary/60 border border-glow">≤ 5 min</span>
          <span className="text-primary">/</span>
          <span className="px-3 py-1 rounded bg-secondary/60 border border-glow">≤ 8 GB</span>
          <span className="text-primary">/</span>
          <span className="px-3 py-1 rounded bg-secondary/60 border border-glow">4K Ready</span>
        </motion.div>

        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
        >
          <Button size="lg" className="px-8 py-6 text-base font-semibold rounded-xl shadow-[var(--shadow-glow)]">
            Read the Proposal
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
          <Button variant="outline" size="lg" className="px-8 py-6 text-base font-semibold rounded-xl border-glow text-foreground hover:bg-secondary">
            View Architecture
          </Button>
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
