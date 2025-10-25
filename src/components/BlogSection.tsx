import { Button } from "@/components/ui/button";
import { Calendar, Clock, ArrowRight, User } from "lucide-react";

const articles = [
  {
    category: "Trends",
    image: "Image Placeholder",
    date: "March 18, 2025",
    readTime: "5 min read",
    title: "The Future of Open Source: Trends to Watch in 2025",
    description: "Explore the emerging trends shaping the open source landscape, from AI-powered development tools to decentralized...",
    author: "Sarah Chen"
  },
  {
    category: "Development",
    image: "Image Placeholder",
    date: "March 12, 2025",
    readTime: "8 min read",
    title: "Building Scalable Cloud-Native Applications",
    description: "Learn best practices for architecting and deploying cloud-native applications using containerization and microservices",
    author: "Marcus Rodriguez"
  },
  {
    category: "Community",
    image: "Image Placeholder",
    date: "March 10, 2025",
    readTime: "6 min read",
    title: "Community-Driven Innovation: Success Stories",
    description: "Discover how open source communities are solving real-world problems through collaborative development and shared",
    author: "Priya Sharma"
  }
];

const BlogSection = () => {
  return (
    <section id="blog" className="py-20">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-4xl font-bold md:text-5xl">
            Latest <span className="text-primary">Insights</span>
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Stay updated with the latest news, tutorials, and insights from the open source community
          </p>
        </div>

        {/* Articles Grid */}
        <div className="mb-12 grid gap-6 md:grid-cols-3">
          {articles.map((article, index) => (
            <div key={index} className="overflow-hidden rounded-lg border border-border bg-card transition-transform hover:scale-105">
              <div className="relative h-48 bg-muted flex items-center justify-center">
                <span className="text-muted-foreground">{article.image}</span>
                <div className="absolute left-4 top-4 rounded-full bg-background px-3 py-1 text-xs font-medium">
                  {article.category}
                </div>
              </div>
              <div className="p-6">
                <div className="mb-3 flex items-center gap-4 text-xs text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    {article.date}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    {article.readTime}
                  </div>
                </div>
                <h3 className="mb-2 text-lg font-semibold">{article.title}</h3>
                <p className="mb-4 text-sm text-muted-foreground">{article.description}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <User className="h-4 w-4" />
                    {article.author}
                  </div>
                  <Button variant="link" className="h-auto p-0 text-primary">
                    Read
                    <ArrowRight className="ml-1 h-3 w-3" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <Button size="lg" className="bg-primary hover:bg-primary/90">
            View All Articles
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
