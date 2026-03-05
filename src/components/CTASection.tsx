import { motion } from "framer-motion";
import { ArrowRight, Calendar, DollarSign } from "lucide-react";
import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="relative py-32 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[1px] bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      {/* Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-primary/3 blur-[150px]" />

      <div className="container mx-auto px-6 max-w-4xl relative z-10">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="font-mono text-sm text-primary tracking-widest uppercase">Grant Proposal</span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mt-4 mb-8">
            Let's Build the Future of<br />
            <span className="text-gradient-accent">Web3 Video Together.</span>
          </h2>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
            <div className="flex items-center gap-3 px-6 py-3 rounded-xl border border-glow bg-card">
              <DollarSign className="w-5 h-5 text-primary" />
              <div className="text-left">
                <div className="text-sm text-muted-foreground">Estimated Budget</div>
                <div className="font-semibold font-mono">$197.5K</div>
              </div>
            </div>
            <div className="flex items-center gap-3 px-6 py-3 rounded-xl border border-glow bg-card">
              <Calendar className="w-5 h-5 text-primary" />
              <div className="text-left">
                <div className="text-sm text-muted-foreground">Timeline</div>
                <div className="font-semibold font-mono">14–16 Weeks</div>
              </div>
            </div>
          </div>

          <p className="text-muted-foreground max-w-xl mx-auto mb-10 text-lg leading-relaxed">
            Wube is being developed by <strong className="text-foreground">Levuka Venture Labs FZCO</strong>. 
            We're seeking grant funding to bring production-ready, encrypted video infrastructure to the Sui ecosystem.
          </p>

          <Button size="lg" className="px-10 py-6 text-base font-semibold rounded-xl shadow-[var(--shadow-glow)]">
            Get In Touch
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
