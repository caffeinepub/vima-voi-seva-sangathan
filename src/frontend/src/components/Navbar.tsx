import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Our Work", href: "#missions" },
  { label: "Projects", href: "#projects" },
  { label: "Leadership", href: "#leadership" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "shadow-md" : ""
      }`}
      style={{ backgroundColor: "oklch(0.96 0.025 85)" }}
    >
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <img
            src="/assets/generated/logo-tree-transparent.dim_120x120.png"
            alt="Vima Voi Seva Sangathan Logo"
            className="w-12 h-12 object-contain"
          />
          <div>
            <p className="text-xs font-semibold text-green leading-tight uppercase tracking-wide">
              Vima Voi
            </p>
            <p
              className="font-display font-bold text-sm leading-tight"
              style={{ color: "var(--color-orange)" }}
            >
              Seva Sangathan
            </p>
            <p className="text-xs text-muted-foreground leading-tight">
              Dharmasala, Jajpur, Odisha
            </p>
          </div>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <button
              type="button"
              key={link.label}
              onClick={() => handleNavClick(link.href)}
              data-ocid={`nav.${link.label.toLowerCase().replace(" ", "_")}.link`}
              className="text-sm font-medium text-foreground hover:text-orange transition-colors uppercase tracking-wide"
            >
              {link.label}
            </button>
          ))}
          <Button
            data-ocid="nav.join_us.button"
            onClick={() => handleNavClick("#contact")}
            className="bg-orange text-white hover:opacity-90 rounded-full px-6 uppercase tracking-wide text-sm font-semibold shadow-orange"
            style={{ backgroundColor: "var(--color-orange)" }}
          >
            Join Us
          </Button>
        </nav>

        {/* Mobile Toggle */}
        <button
          type="button"
          className="lg:hidden p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          data-ocid="nav.mobile_menu.toggle"
          aria-label="Toggle menu"
        >
          {mobileOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden overflow-hidden"
            style={{ backgroundColor: "oklch(0.96 0.025 85)" }}
          >
            <nav className="container mx-auto px-4 py-4 flex flex-col gap-3">
              {navLinks.map((link) => (
                <button
                  type="button"
                  key={link.label}
                  onClick={() => handleNavClick(link.href)}
                  className="text-left text-sm font-medium py-2 border-b border-border uppercase tracking-wide hover:text-orange transition-colors"
                >
                  {link.label}
                </button>
              ))}
              <Button
                onClick={() => handleNavClick("#contact")}
                className="mt-2 rounded-full uppercase tracking-wide text-sm font-semibold"
                style={{
                  backgroundColor: "var(--color-orange)",
                  color: "white",
                }}
              >
                Join Us
              </Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
