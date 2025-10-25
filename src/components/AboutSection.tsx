import { Users, BookOpen, Lightbulb } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="mb-16 text-center">
          <h2 className="mb-6 text-4xl font-bold md:text-5xl">
            About <span className="text-primary">Us</span>
          </h2>
          <p className="mx-auto max-w-3xl text-lg text-muted-foreground">
            Open Source Connect Global is a worldwide movement celebrating the power of open collaboration. We bring together developers, creators, and innovators to shape the future of technology through shared knowledge and collective innovation.
          </p>
        </div>

        {/* Mission Card */}
        <div className="mb-16 rounded-lg border-l-4 border-primary bg-card p-8">
          <h3 className="mb-4 text-2xl font-semibold">Our Mission</h3>
          <p className="text-muted-foreground">
            To create a global platform where open source enthusiasts can connect, collaborate, and contribute to projects that make a difference. We believe in the power of community-driven innovation and the democratization of technology through open collaboration.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="mb-16 grid gap-6 md:grid-cols-3">
          <div className="rounded-lg border border-border bg-card p-6">
            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
              <Users className="h-6 w-6 text-primary" />
            </div>
            <h3 className="mb-3 text-xl font-semibold">Community</h3>
            <p className="text-sm text-muted-foreground">
              Building bridges between developers, innovators, and open source enthusiasts worldwide
            </p>
          </div>

          <div className="rounded-lg border border-border bg-card p-6">
            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
              <BookOpen className="h-6 w-6 text-primary" />
            </div>
            <h3 className="mb-3 text-xl font-semibold">Learning</h3>
            <p className="text-sm text-muted-foreground">
              Empowering individuals through knowledge sharing, workshops, and collaborative experiences
            </p>
          </div>

          <div className="rounded-lg border border-border bg-card p-6">
            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
              <Lightbulb className="h-6 w-6 text-primary" />
            </div>
            <h3 className="mb-3 text-xl font-semibold">Innovation</h3>
            <p className="text-sm text-muted-foreground">
              Driving technological advancement through collaborative problem-solving and creative solutions
            </p>
          </div>
        </div>

        {/* Stats */}
        <div className="grid gap-8 text-center md:grid-cols-4">
          <div>
            <div className="mb-2 text-4xl font-bold text-primary">10,000+</div>
            <div className="text-sm text-muted-foreground">Participants</div>
          </div>
          <div>
            <div className="mb-2 text-4xl font-bold text-primary">60+</div>
            <div className="text-sm text-muted-foreground">Open Source Projects</div>
          </div>
          <div>
            <div className="mb-2 text-4xl font-bold text-primary">50+</div>
            <div className="text-sm text-muted-foreground">Expert Speakers</div>
          </div>
          <div>
            <div className="mb-2 text-4xl font-bold text-primary">100+</div>
            <div className="text-sm text-muted-foreground">Community Partners</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
