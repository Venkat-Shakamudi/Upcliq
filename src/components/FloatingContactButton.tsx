import { useState, useEffect, useRef } from "react";
import { MousePointer2, Phone, X } from "lucide-react";

const FloatingContactButton = () => {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    if (open) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open]);

  return (
    <div ref={containerRef} className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {/* Sub buttons */}
      <a
        href="https://wa.me/919390289806?text=Hi%2C%20I%20saw%20your%20website%20and%20want%20to%20know%20more%20about%20your%20services."
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-3 rounded-full bg-[#25D366] px-5 py-3 text-white font-medium shadow-lg transition-all duration-300 hover:shadow-xl hover:shadow-[#25D366]/30 hover:-translate-y-0.5"
        style={{
          opacity: open ? 1 : 0,
          transform: open ? "scale(1) translateY(0)" : "scale(0.6) translateY(10px)",
          pointerEvents: open ? "auto" : "none",
          transitionDelay: open ? "120ms" : "0ms",
        }}
      >
        <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current shrink-0">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
          <path d="M12 0C5.373 0 0 5.373 0 12c0 2.118.55 4.108 1.513 5.837L.057 23.495a.5.5 0 00.612.612l5.658-1.456A11.948 11.948 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22a9.94 9.94 0 01-5.39-1.582l-.386-.232-3.364.866.882-3.327-.254-.404A9.935 9.935 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
        </svg>
        <span className="text-sm whitespace-nowrap">WhatsApp</span>
      </a>

      <a
        href="tel:+919390289806"
        className="flex items-center gap-3 rounded-full bg-accent px-5 py-3 text-accent-foreground font-medium shadow-lg transition-all duration-300 hover:shadow-xl hover:shadow-accent/30 hover:-translate-y-0.5"
        style={{
          opacity: open ? 1 : 0,
          transform: open ? "scale(1) translateY(0)" : "scale(0.6) translateY(10px)",
          pointerEvents: open ? "auto" : "none",
          transitionDelay: open ? "0ms" : "0ms",
        }}
      >
        <Phone className="h-5 w-5 shrink-0" />
        <span className="text-sm whitespace-nowrap">Call Us</span>
      </a>

      {/* Main FAB */}
      <button
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Close contact menu" : "Open contact menu"}
        className="h-14 w-14 rounded-full gradient-primary text-primary-foreground shadow-lg shadow-primary/30 flex items-center justify-center transition-all duration-300 hover:shadow-xl hover:shadow-primary/40 hover:-translate-y-0.5"
        style={{
          transform: open ? "rotate(45deg)" : "rotate(0deg)",
          transition: "transform 0.3s ease, box-shadow 0.3s ease",
        }}
      >
        {open ? <X className="h-6 w-6" /> : <MousePointer2 className="h-6 w-6" />}
      </button>
    </div>
  );
};

export default FloatingContactButton;
