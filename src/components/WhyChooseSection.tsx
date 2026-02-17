import { TrendingUp, BarChart3, Eye, Zap } from "lucide-react";

const stats = [
  { value: "200+", label: "Projects Completed" },
  { value: "98%", label: "Client Satisfaction" },
  { value: "5x", label: "Average ROI" },
  { value: "24/7", label: "Dedicated Support" },
];

const differentiators = [
  { icon: TrendingUp, title: "Results-Driven", description: "Every strategy is backed by data and measurable KPIs that drive real business growth." },
  { icon: BarChart3, title: "Data-Backed Decisions", description: "We use advanced analytics and reporting to optimize campaigns and maximize your ROI." },
  { icon: Eye, title: "Transparent Reporting", description: "Real-time dashboards and monthly reports so you always know exactly where your investment goes." },
  { icon: Zap, title: "Fast Execution", description: "Agile processes mean faster launches, quicker iterations, and results you can see sooner." },
];

const WhyChooseSection = () => {
  return (
    <section id="why-upcliq" className="py-20 md:py-28 bg-secondary/50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16 scroll-reveal">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-3">Why Choose Us</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Why Businesses Trust Upcliq
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            We don't just promise results — we deliver them. Here's what sets us apart from other digital marketing agencies.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 scroll-reveal">
          {stats.map((stat, i) => (
            <div key={stat.label} className="text-center p-6 rounded-2xl bg-background border border-border scroll-reveal-child" style={{ transitionDelay: `${i * 100}ms` }}>
              <p className="text-3xl md:text-4xl font-black gradient-text mb-2">{stat.value}</p>
              <p className="text-sm text-muted-foreground font-medium">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Differentiators */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 scroll-reveal">
          {differentiators.map((item, i) => (
            <div key={item.title} className="flex gap-5 p-6 rounded-2xl bg-background border border-border scroll-reveal-child" style={{ transitionDelay: `${i * 100}ms` }}>
              <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center shrink-0 shadow-lg shadow-primary/20">
                <item.icon className="h-6 w-6 text-white" aria-hidden="true" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-foreground mb-1">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
