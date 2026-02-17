import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Rajesh Sharma",
    company: "Sparsha Hospitals",
    text: "Upcliq transformed our online presence. Our organic traffic increased by 320% in just 6 months, and we're generating more patient inquiries than ever before.",
    rating: 5,
  },
  {
    name: "Priya Venkatesh",
    company: "NexGen IT Solutions",
    text: "The team at Upcliq is incredible. Their PPC campaigns cut our cost per lead in half while doubling our conversion rate. Truly data-driven marketing.",
    rating: 5,
  },
  {
    name: "Anil Deshmukh",
    company: "Kisan Fresh Organics",
    text: "Our new website designed by Upcliq is stunning, fast, and converts visitors into customers. Their SEO work has us ranking #1 for our key terms.",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-20 md:py-28 bg-secondary/50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16 scroll-reveal">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-3">Social Proof</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            What Our Clients Say
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Real results from real businesses. See why companies trust Upcliq for their digital growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 scroll-reveal">
          {testimonials.map((t, i) => (
            <article key={t.name} className="p-8 rounded-2xl bg-background border border-border shadow-sm scroll-reveal-child" style={{ transitionDelay: `${i * 100}ms` }}>
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-primary text-primary" aria-hidden="true" />
                ))}
              </div>
              <blockquote className="text-foreground mb-6 leading-relaxed italic">
                "{t.text}"
              </blockquote>
              <div>
                <p className="font-bold text-foreground">{t.name}</p>
                <p className="text-sm text-muted-foreground">{t.company}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
