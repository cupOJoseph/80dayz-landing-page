export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/95 backdrop-blur-sm">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-primary/10 rounded-md flex items-center justify-center">
            <span className="text-xl font-serif font-bold text-primary leading-none">&Omega;</span>
          </div>
          <div>
            <h1 className="font-serif text-xl font-bold tracking-tight text-foreground">
              80 Dayz Inc.
            </h1>
            <p className="text-[10px] text-muted-foreground font-mono tracking-wide uppercase">
              Applied Mathematics Research
            </p>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-6">
          <a 
            href="#research" 
            className="text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            Research
          </a>
          <a 
            href="#simulations" 
            className="text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            Simulations
          </a>
        </nav>
      </div>
    </header>
  );
}
