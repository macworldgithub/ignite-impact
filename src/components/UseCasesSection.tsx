import { motion } from "framer-motion";
import { Video, Users, Gem, Building2 } from "lucide-react";

const useCases = [
  {
    icon: Gem,
    title: "Token-Gated Content",
    description: "NFT holders unlock exclusive video content. Seal verifies on-chain ownership before decrypting—no middleware, no trust assumptions.",
  },
  {
    icon: Users,
    title: "Private DAO Communications",
    description: "Encrypted proposal walkthrough videos visible only to governance participants. Wallet-verified access, zero data leaks.",
  },
  {
    icon: Video,
    title: "Creator Premium Content",
    description: "Monetize short-form video with policy-based access. Subscription, one-time purchase, or time-limited unlocks.",
  },
  {
    icon: Building2,
    title: "Confidential Business Video",
    description: "Share investor updates, product demos, or team communications with specific wallet addresses. Enterprise-grade privacy, Web3-native.",
  },
];

const UseCasesSection = () => {
  return (
    <section id="use-cases" className="relative py-32 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[1px] bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="font-mono text-sm text-primary tracking-widest uppercase">Use Cases</span>
          <h2 className="text-4xl sm:text-5xl font-bold mt-4 mb-6">
            Premium Web3 Video,<br />
            <span className="text-gradient-primary">Unlocked.</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {useCases.map((uc, i) => (
            <motion.div
              key={uc.title}
              className="relative p-8 rounded-2xl border border-glow bg-card overflow-hidden group"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              {/* Subtle gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <uc.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{uc.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{uc.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCasesSection;
