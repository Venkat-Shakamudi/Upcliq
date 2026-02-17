import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden py-24 md:py-36 lg:py-44" style={{ background: 'linear-gradient(135deg, hsl(262, 80%, 45%) 0%, hsl(240, 70%, 40%) 30%, hsl(220, 80%, 50%) 60%, hsl(200, 85%, 55%) 100%)' }}>
      {/* Decorative orbs */}
      <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full bg-white/8 blur-3xl" aria-hidden="true" />
      <div className="absolute bottom-[-15%] left-[-10%] w-[600px] h-[600px] rounded-full bg-white/6 blur-3xl" aria-hidden="true" />
      <div className="absolute top-[30%] left-[50%] w-[400px] h-[400px] rounded-full bg-purple-400/10 blur-3xl" aria-hidden="true" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10 text-center">
        <p className="mb-4 text-sm md:text-base font-semibold uppercase tracking-widest text-white/70">
          Full-Service Digital Marketing Agency
        </p>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-tight mb-6 max-w-4xl mx-auto">
          Premium Digital Marketing<br />At Prices You'll Love
        </h1>
        <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-10 leading-relaxed">
          Get expert-level SEO, social media management, Google Ads, and high-converting web design — all at budget-friendly rates that deliver real ROI.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg" className="bg-white text-primary font-bold hover:bg-white/90 shadow-xl text-base px-8 py-6">
            <a href="#contact">
              Start Growing Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </Button>
          <Button asChild size="lg" variant="outline" className="border-white/30 text-accent hover:bg-white/10 font-semibold text-base px-8 py-6">
            <a href="#services">Explore Our Services</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
