import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 border-b border-glow bg-background/80 backdrop-blur-xl"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-6 h-16 flex items-center justify-between max-w-6xl">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center">
            <span className="text-primary font-bold font-mono text-sm">W</span>
          </div>
          <span className="font-bold text-lg tracking-tight">Wube</span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Features</a>
          <a href="#architecture" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Architecture</a>
          <a href="#use-cases" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Use Cases</a>
        </div>

        <div className="flex items-center gap-2">
          <span className="hidden sm:inline-block font-mono text-xs text-muted-foreground px-3 py-1 rounded-full border border-glow">
            MVP Proposal
          </span>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
