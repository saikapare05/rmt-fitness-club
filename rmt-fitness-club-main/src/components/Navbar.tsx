import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/rmt-logo.jpeg";

const navLinks = ["Home", "About", "Services", "Gallery", "Contact"];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = (link: string) => {
    setMobileOpen(false);
    const el = document.getElementById(link.toLowerCase());
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/90 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between py-4 px-4">
         <img 
  src={logo} 
  alt="RMT Fitness" 
  className="h-14 mb-2 rounded-lg shadow-md hover:scale-105 transition"
/>
        <ul className="hidden md:flex gap-8">
          {navLinks.map((link) => (
            <li key={link}>
              <button
                onClick={() => handleClick(link)}
                className="font-body text-sm font-semibold uppercase tracking-widest text-foreground/70 hover:text-foreground transition-colors"
              >
                {link}
              </button>
            </li>
          ))}
        </ul>

        <button
          className="md:hidden text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-md border-t border-border">
          <ul className="flex flex-col items-center gap-6 py-8">
            {navLinks.map((link) => (
              <li key={link}>
                <button
                  onClick={() => handleClick(link)}
                  className="font-body text-lg font-semibold uppercase tracking-widest text-foreground/80 hover:text-foreground transition-colors"
                >
                  {link}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
