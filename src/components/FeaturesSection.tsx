import { motion } from "framer-motion";
import { Shield, Upload, Play, Lock, Zap, Code2 } from "lucide-react";

const features = [
  {
    icon: Upload,
    title: "Chunked Upload",
    description:
      "Resumable, parallel chunk uploads survive network interruptions. Client-side SDK handles files up to 8 GB seamlessly.",
  },
  {
    icon: Lock,
    title: "Seal Encryption",
    description:
      "Chunk-level encryption before Walrus storage. Policy-based access: public, owner-only, shared list, or NFT-gated.",
  },
  {
    icon: Play,
    title: "Instant Playback",
    description:
      "Browser-native MP4 delivery with byte-range seeking. Transparent decryption for authorized viewers—zero plugins.",
  },
  {
    icon: Shield,
    title: "On-Chain Ownership",
    description:
      "Every video registered as a Sui object. Transfer ownership, update access policies, or delete—all on-chain.",
  },
  {
    icon: Code2,
    title: "Developer-First SDK",
    description:
      "TypeScript SDK, REST API, webhooks on upload complete, and API key auth. Ship video features in hours, not weeks.",
  },
  {
    icon: Zap,
    title: "Walrus Storage",
    description:
      "Decentralized blob storage with erasure coding. No single point of failure. Data persists without centralized infrastructure.",
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const FeaturesSection = () => {
  return (
    <section id="features" className="relative py-16 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[1px] bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="font-mono text-sm text-primary tracking-widest uppercase">
            Core Capabilities
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold mt-4 mb-6">
            Everything You Need.
            <br />
            <span className="text-gradient-accent">Nothing You Don't.</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-lg">
            A deliberately constrained MVP that handles 80%+ of Web3 video use
            cases exceptionally well.
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              variants={item}
              className="group relative p-8 rounded-2xl border border-glow bg-[var(--gradient-card)] hover:border-primary/40 transition-colors duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:shadow-[var(--shadow-glow)] transition-shadow duration-300">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;
