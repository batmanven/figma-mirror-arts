import { Button } from "@/components/ui/button";
import { Github, Star, GitFork, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "CloudNative Orchestrator",
    description: "A modern container orchestration platform built for scalability and performance",
    language: "Go",
    languageColor: "bg-cyan-500",
    stars: "12.5k",
    forks: "2.3k",
    borderColor: "border-t-blue-500"
  },
  {
    title: "DataFlow Pipeline",
    description: "Real-time data processing framework with distributed architecture",
    language: "Python",
    languageColor: "bg-blue-500",
    stars: "8.9k",
    forks: "1.6k",
    borderColor: "border-t-emerald-500"
  },
  {
    title: "ReactUI Components",
    description: "Comprehensive component library with accessibility-first design",
    language: "TypeScript",
    languageColor: "bg-blue-400",
    stars: "15.2k",
    forks: "3.1k",
    borderColor: "border-t-purple-500"
  },
  {
    title: "ML Vision Toolkit",
    description: "Computer vision library powered by cutting-edge machine learning models",
    language: "Python",
    languageColor: "bg-blue-500",
    stars: "9.8k",
    forks: "1.9k",
    borderColor: "border-t-orange-500"
  },
  {
    title: "SecureAuth Framework",
    description: "Enterprise-grade authentication and authorization solution",
    language: "Rust",
    languageColor: "bg-orange-600",
    stars: "7.2k",
    forks: "987",
    borderColor: "border-t-blue-400"
  },
  {
    title: "DevOps Automation",
    description: "Complete CI/CD automation suite for modern development workflows",
    language: "JavaScript",
    languageColor: "bg-yellow-500",
    stars: "11.3k",
    forks: "2.4k",
    borderColor: "border-t-amber-500"
  }
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-4xl font-bold md:text-5xl">
            Our <span className="text-primary">Projects</span>
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Discover innovative open source projects that are shaping the future of technology
          </p>
        </div>

        {/* Projects Grid */}
        <div className="mb-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`rounded-lg border-t-4 ${project.borderColor} border-x border-b border-border bg-card p-6 transition-transform hover:scale-105`}
            >
              <Github className="mb-4 h-8 w-8" />
              <h3 className="mb-2 text-xl font-semibold">{project.title}</h3>
              <p className="mb-4 text-sm text-muted-foreground">{project.description}</p>
              
              <div className="mb-4 flex items-center gap-4 text-sm">
                <div className="flex items-center gap-1">
                  <div className={`h-3 w-3 rounded-full ${project.languageColor}`} />
                  <span>{project.language}</span>
                </div>
              </div>

              <div className="mb-4 flex items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Star className="h-4 w-4" />
                  {project.stars}
                </div>
                <div className="flex items-center gap-1">
                  <GitFork className="h-4 w-4" />
                  {project.forks}
                </div>
              </div>

              <a href="#" className="inline-flex items-center gap-1 text-sm text-primary hover:underline">
                View Project
                <ExternalLink className="h-3 w-3" />
              </a>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <Button size="lg" className="bg-primary hover:bg-primary/90">
            Explore All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
