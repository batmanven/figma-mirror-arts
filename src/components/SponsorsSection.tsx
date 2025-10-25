const SponsorsSection = () => {
  return (
    <section className="py-20 bg-secondary/20">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold md:text-5xl">
            Our <span className="text-primary">Sponsors</span>
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Supported by industry leaders who believe in the power of open source innovation
          </p>
        </div>

        {/* Platinum Sponsors */}
        <div className="mb-16">
          <h3 className="mb-8 text-center text-xl font-semibold">Platinum Sponsors</h3>
          <div className="grid gap-6 md:grid-cols-2 max-w-3xl mx-auto">
            <div className="flex h-32 items-center justify-center rounded-lg border border-border bg-card">
              <span className="text-2xl font-bold text-muted-foreground">Google Logo Placeholder</span>
            </div>
            <div className="flex h-32 items-center justify-center rounded-lg border border-border bg-card">
              <span className="text-2xl font-bold text-muted-foreground">Azure Logo Placeholder</span>
            </div>
          </div>
        </div>

        {/* Gold Sponsors */}
        <div className="mb-20">
          <h3 className="mb-8 text-center text-xl font-semibold">Gold Sponsors</h3>
          <div className="grid gap-6 md:grid-cols-3 max-w-4xl mx-auto">
            <div className="flex h-24 items-center justify-center rounded-lg border border-border bg-card">
              <span className="text-lg font-semibold text-muted-foreground">AWS</span>
            </div>
            <div className="flex h-24 items-center justify-center rounded-lg border border-border bg-card">
              <span className="text-lg font-semibold text-muted-foreground">GitHub</span>
            </div>
            <div className="flex h-24 items-center justify-center rounded-lg border border-border bg-card">
              <span className="text-lg font-semibold text-muted-foreground">Docker</span>
            </div>
          </div>
        </div>

        {/* Hiring Partners */}
        <div className="mb-20">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-4xl font-bold">
              Hiring <span className="text-primary">Partners</span>
            </h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              Connect with top companies actively seeking talented open source developers
            </p>
          </div>
          <div className="grid gap-6 grid-cols-2 md:grid-cols-3 lg:grid-cols-6 max-w-5xl mx-auto">
            {["Stripe", "Vercel", "Shopify", "Meta", "Salesforce", "Adobe"].map((company, index) => (
              <div key={index} className="flex h-20 items-center justify-center rounded-lg border border-border bg-card">
                <span className="text-sm font-semibold text-muted-foreground">{company}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Community Partners */}
        <div>
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-4xl font-bold">
              Community <span className="text-primary">Partners</span>
            </h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              Collaborating with open source foundations and communities worldwide
            </p>
          </div>
          <div className="grid gap-6 grid-cols-2 md:grid-cols-4 max-w-5xl mx-auto">
            {[
              "Linux Foundation",
              "ASF",
              "Cloud Native Foundation",
              "Mozilla",
              "Python Foundation",
              "OpenJS Foundation",
              "Eclipse Foundation",
              "Free Software Foundation"
            ].map((partner, index) => (
              <div key={index} className="flex h-24 items-center justify-center rounded-lg border border-border bg-card">
                <span className="text-sm font-semibold text-muted-foreground text-center px-4">{partner}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SponsorsSection;
