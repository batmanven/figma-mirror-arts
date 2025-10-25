import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-sm">
      <div className="container mx-auto px-6">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10">
              <div className="h-6 w-6 rounded-full border-2 border-primary" />
            </div>
            <span className="text-lg font-semibold">
              Open Source Connect <span className="text-primary">Global</span>
            </span>
          </div>

          <div className="hidden items-center gap-8 lg:flex">
            <a href="#about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              About us
            </a>
            <a href="#projects" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Projects
            </a>
            <a href="#speakers" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Speakers
            </a>
            <a href="#leaderboard" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Leaderboard
            </a>
            <a href="#team" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Team
            </a>
            <a href="#timeline" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Timeline
            </a>
            <a href="#blog" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Blog
            </a>
          </div>

          <div className="flex items-center gap-4">
            <Button variant="outline" className="hidden lg:inline-flex">
              Sign In
            </Button>
            <Button variant="ghost" size="icon" className="lg:hidden">
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
