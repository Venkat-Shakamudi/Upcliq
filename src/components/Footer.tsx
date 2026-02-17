import digitalMarketingImg from "@/assets/digital-marketing.png";

const footerLinks = [
  { label: "Services", href: "#services" },
  { label: "Why Upcliq", href: "#why-upcliq" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

const Footer = () => {
  return (
    <footer className="gradient-primary py-16">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12 items-center">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img src="/upcliq-logo.png" alt="Upcliq logo" width={36} height={36} className="h-9 w-9 rounded-lg" />
              <span className="text-xl font-bold text-white">Upcliq</span>
            </div>
            <p className="text-white/70 max-w-xs leading-relaxed">
              We turn clicks into clients. Your full-service digital marketing partner for SEO, social media, web design, and lead generation.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-white/50 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-white/70 hover:text-white transition-colors text-sm">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Digital Marketing Image */}
          <div className="flex justify-center md:justify-end">
            <img
              src={digitalMarketingImg}
              alt="Digital marketing services illustration showing SEO, social media, and analytics"
              className="w-48 h-48 md:w-56 md:h-56 object-contain rounded-2xl opacity-90"
            />
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center">
          <p className="text-white/50 text-sm">
            © {new Date().getFullYear()} Upcliq. All rights reserved. | Digital Marketing Agency
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
