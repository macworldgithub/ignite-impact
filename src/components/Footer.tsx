const Footer = () => {
  return (
    <footer className="border-t border-glow py-12">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded bg-primary/20 flex items-center justify-center">
              <span className="text-primary font-bold font-mono text-xs">W</span>
            </div>
            <span className="font-semibold text-sm">Wube</span>
            <span className="text-muted-foreground text-sm">· Decentralized Video Infrastructure</span>
          </div>
          <div className="text-sm text-muted-foreground font-mono">
            © 2026 Levuka Venture Labs FZCO
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
