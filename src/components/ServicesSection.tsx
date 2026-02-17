import { Layout, Target, Instagram, TrendingUp } from "lucide-react";

const services = [
  {
    icon: Layout,
    title: "Landing Pages",
    description: "High-converting, mobile-first landing pages designed to capture leads and drive measurable business results from every campaign.",
  },
  {
    icon: Target,
    title: "Google Ads",
    description: "Precision-targeted Google Ads campaigns that maximize ROI, lower cost-per-click, and put your business in front of ready-to-buy customers.",
  },
  {
    icon: Instagram,
    title: "Instagram Marketing",
    description: "Grow your brand with scroll-stopping content, strategic hashtags, and data-driven Instagram campaigns that turn followers into customers.",
  },
  {
    icon: TrendingUp,
    title: "Conversion Optimization",
    description: "Boost your conversion rates with A/B testing, funnel analysis, and UX improvements that turn more visitors into paying clients.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16 scroll-reveal">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-3">What We Do</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Digital Marketing Services
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Comprehensive digital marketing solutions tailored to grow your business online and generate more leads.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 scroll-reveal">
          {services.map((service, i) => (
            <article
              key={service.title}
              className="group p-8 rounded-2xl border border-border bg-card hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 hover:-translate-y-1 scroll-reveal-child"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="w-14 h-14 rounded-xl gradient-primary flex items-center justify-center mb-6 shadow-lg shadow-primary/20 group-hover:scale-110 transition-transform">
                <service.icon className="h-7 w-7 text-white" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{service.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
