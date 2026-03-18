import { Heart } from "lucide-react";

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Our Missions", href: "#missions" },
  { label: "Projects", href: "#projects" },
  { label: "Leadership", href: "#leadership" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  const year = new Date().getFullYear();
  const utmLink = `https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(window.location.hostname)}`;

  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer
      style={{ backgroundColor: "var(--color-footer)" }}
      className="text-white"
    >
      <div className="container mx-auto px-4 py-14">
        <div className="grid md:grid-cols-3 gap-10">
          {/* Logo & Description */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img
                src="/assets/generated/logo-tree-transparent.dim_120x120.png"
                alt="Logo"
                className="w-12 h-12 object-contain"
              />
              <div>
                <p
                  className="font-display font-bold text-lg leading-tight"
                  style={{ color: "var(--color-orange)" }}
                >
                  Vima Voi Seva
                </p>
                <p className="font-display font-bold text-sm leading-tight text-white/80">
                  Sangathan
                </p>
              </div>
            </div>
            <p className="text-white/60 text-sm leading-relaxed mb-4">
              A social working group dedicated to uplifting rural and
              marginalized communities in Dharmasala, Jajpur, Odisha since 2023.
            </p>
            <p className="text-white/50 text-xs">
              Mahadev Temple Ground, Rekhideipur,
              <br />
              Via Jenapur, Block Dharmasala,
              <br />
              Dist. Jajpur, Odisha – India
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4
              className="font-display font-bold uppercase tracking-wide mb-5"
              style={{ color: "var(--color-orange)" }}
            >
              Quick Links
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <button
                    type="button"
                    onClick={() => scrollTo(link.href)}
                    data-ocid={`footer.${link.label.toLowerCase().replace(" ", "_")}.link`}
                    className="text-white/60 hover:text-white text-sm transition-colors flex items-center gap-2"
                  >
                    <span style={{ color: "var(--color-orange)" }}>›</span>
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Mission Statement */}
          <div>
            <h4
              className="font-display font-bold uppercase tracking-wide mb-5"
              style={{ color: "var(--color-orange)" }}
            >
              Our Mission
            </h4>
            <ul className="space-y-2 text-sm text-white/60">
              {[
                "Poverty Alleviation",
                "Rural Education",
                "Healthcare Access",
                "Orphan Ashram",
                "Water Kiosk Initiative",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <span style={{ color: "var(--color-orange)" }}>✦</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 mt-10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-xs text-center">
            © 2023–{year} Vima Voi Seva Sangathan. All rights reserved. |
            Dharmasala, Jajpur, Odisha, India
          </p>
          <p className="text-white/40 text-xs text-center">
            Built with{" "}
            <Heart
              className="w-3 h-3 inline mx-1"
              style={{ color: "var(--color-orange)" }}
            />{" "}
            using{" "}
            <a
              href={utmLink}
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-white/70 transition-colors"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
