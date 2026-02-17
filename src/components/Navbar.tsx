import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Why Upcliq", href: "#why-upcliq" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const linkRefs = useRef<(HTMLAnchorElement | null)[]>([]);
  const [indicatorStyle, setIndicatorStyle] = useState<React.CSSProperties>({});

  useEffect(() => {
    const sectionIds = navLinks.map((l) => l.href.replace("#", ""));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = sectionIds.indexOf(entry.target.id);
            if (idx !== -1) setActiveIndex(idx);
          }
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (activeIndex !== null && linkRefs.current[activeIndex]) {
      const el = linkRefs.current[activeIndex];
      if (el) {
        setIndicatorStyle({
          left: el.offsetLeft,
          width: el.offsetWidth,
          opacity: 1,
        });
      }
    } else {
      setIndicatorStyle({ opacity: 0 });
    }
  }, [activeIndex]);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-lg">
      <nav className="container mx-auto flex items-center justify-between px-4 lg:px-8 py-3" aria-label="Main navigation">
        <a href="#" className="flex items-center shrink-0 mr-5" aria-label="Upcliq home">
          <img
            src="/upcliq-logo.png"
            alt="Upcliq digital marketing agency logo"
            className="h-7 md:h-8 lg:h-9 w-auto shrink-0 object-contain [image-rendering:-webkit-optimize-contrast]"
          />
        </a>

        {/* Desktop nav */}
        <div className="hidden md:block relative">
          <ul className="flex items-center gap-8">
            {navLinks.map((link, i) => (
              <li key={link.href}>
                <a
                  ref={(el) => { linkRefs.current[i] = el; }}
                  href={link.href}
                  className={`text-sm font-medium transition-colors ${activeIndex === i ? "text-primary" : "text-muted-foreground hover:text-foreground"}`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          {/* Sliding indicator line */}
          <span
            className="absolute bottom-[-13px] h-[2px] bg-primary rounded-full transition-all duration-300 ease-out"
            style={indicatorStyle}
          />
        </div>

        <div className="hidden md:block">
          <Button asChild className="gradient-primary border-0 font-semibold shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-shadow">
            <a href="#contact">Get a Free Consultation</a>
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2 text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-border bg-background animate-in slide-in-from-top-2">
          <ul className="flex flex-col p-4 gap-3">
            {navLinks.map((link, i) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`block py-2 text-sm font-medium ${activeIndex === i ? "text-primary" : "text-muted-foreground hover:text-foreground"}`}
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <Button asChild className="w-full gradient-primary border-0 font-semibold mt-2">
                <a href="#contact" onClick={() => setMobileOpen(false)}>Get a Free Consultation</a>
              </Button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
