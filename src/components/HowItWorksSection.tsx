import { Search, Lightbulb, Rocket } from "lucide-react";

const steps = [
  {
    icon: Search,
    number: "01",
    title: "Discover",
    description: "We analyze your business, competitors, and target audience to uncover growth opportunities and build a roadmap for success.",
  },
  {
    icon: Lightbulb,
    number: "02",
    title: "Strategize",
    description: "Our experts craft a custom digital marketing strategy combining SEO, social media, PPC, and content to hit your goals.",
  },
  {
    icon: Rocket,
    number: "03",
    title: "Grow",
    description: "We execute, optimize, and scale your campaigns — delivering measurable results and continuous improvement month over month.",
  },
];

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16 scroll-reveal">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-3">Our Process</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            How It Works
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            A simple, proven 3-step process to grow your business online.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative scroll-reveal">
          {/* Connector line (desktop) */}
          <div className="hidden md:block absolute top-24 left-[20%] right-[20%] h-0.5 gradient-primary opacity-30" aria-hidden="true" />

          {steps.map((step, i) => (
            <div key={step.number} className="relative text-center p-8 scroll-reveal-child" style={{ transitionDelay: `${i * 100}ms` }}>
              <div className="w-20 h-20 rounded-full gradient-primary flex items-center justify-center mx-auto mb-6 shadow-xl shadow-primary/25">
                <step.icon className="h-9 w-9 text-white" aria-hidden="true" />
              </div>
              <span className="text-xs font-bold uppercase tracking-widest text-primary mb-2 block">Step {step.number}</span>
              <h3 className="text-2xl font-bold text-foreground mb-3">{step.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
