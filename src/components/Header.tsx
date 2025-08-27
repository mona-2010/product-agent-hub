import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <div className="mr-4 flex">
          <a className="mr-6 flex items-center space-x-2" href="/">
            <div className="h-8 w-8 rounded-md bg-gradient-primary"></div>
            <span className="hidden font-bold sm:inline-block">
              MarketingAI
            </span>
          </a>
        </div>
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <nav className="flex items-center space-x-6">
            <a
              className="transition-colors hover:text-foreground/80 text-foreground/60"
              href="#features"
            >
              Features
            </a>
            <a
              className="transition-colors hover:text-foreground/80 text-foreground/60"
              href="#pricing"
            >
              Pricing
            </a>
            <a
              className="transition-colors hover:text-foreground/80 text-foreground/60"
              href="#about"
            >
              About
            </a>
          </nav>
          <div className="flex items-center space-x-2">
            <Button variant="ghost" size="sm">
              Sign In
            </Button>
            <Button size="sm">Get Started</Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;