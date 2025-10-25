import { Button } from "@/components/ui/button";
import { Award, ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen pt-16 pb-20 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-secondary/20" />
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, hsl(var(--primary) / 0.15) 1px, transparent 0)`,
          backgroundSize: '50px 50px'
        }} />
      </div>

      <div className="container relative mx-auto px-6 pt-24">
        <div className="flex flex-col items-center text-center">
          {/* Badge */}
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-4 py-2 text-sm text-primary">
            <Award className="h-4 w-4" />
            Global Edition • 2026
          </div>

          {/* Main heading */}
          <h1 className="mb-6 max-w-5xl text-5xl font-bold leading-tight md:text-6xl lg:text-7xl">
            Connecting the World <br />
            Through <span className="text-primary">Open Source</span>
          </h1>

          {/* Description */}
          <p className="mb-12 max-w-3xl text-lg text-muted-foreground md:text-xl">
            Join thousands of developers, innovators, and open source enthusiasts celebrating global collaboration and technological excellence
          </p>

          {/* CTA Buttons */}
          <div className="mb-20 flex flex-wrap items-center justify-center gap-4">
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              Register Now
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline">
              Explore Projects
            </Button>
          </div>

          {/* Stats */}
          <div className="grid w-full max-w-5xl grid-cols-2 gap-8 lg:grid-cols-4">
            <div className="flex flex-col items-center">
              <div className="mb-2 text-4xl font-bold text-primary md:text-5xl">25,000+</div>
              <div className="text-sm text-muted-foreground">Participants</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="mb-2 text-4xl font-bold text-primary md:text-5xl">60+</div>
              <div className="text-sm text-muted-foreground">Speakers</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="mb-2 text-4xl font-bold text-primary md:text-5xl">100+</div>
              <div className="text-sm text-muted-foreground">Projects</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="mb-2 text-4xl font-bold text-primary md:text-5xl">Global</div>
              <div className="text-sm text-muted-foreground">Community</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
