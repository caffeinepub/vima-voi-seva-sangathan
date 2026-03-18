import { Button } from "@/components/ui/button";
import { motion } from "motion/react";

export default function Hero() {
  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('/assets/generated/hero-community.dim_1400x700.jpg')`,
        }}
      />
      {/* Dark gradient overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.65) 70%, rgba(0,0,0,0.8) 100%)",
        }}
      />

      {/* Decorative top lotus border */}
      <div
        className="absolute top-0 left-0 right-0 h-1"
        style={{ backgroundColor: "var(--color-orange)" }}
      />

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto pt-24">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Decorative Sanskrit-inspired element */}
          <div className="flex items-center justify-center gap-3 mb-4">
            <div
              className="h-px w-16 bg-orange opacity-80"
              style={{ backgroundColor: "var(--color-orange)" }}
            />
            <span className="text-white/80 text-sm tracking-widest uppercase">
              Est. 2023 · Odisha, India
            </span>
            <div
              className="h-px w-16 opacity-80"
              style={{ backgroundColor: "var(--color-orange)" }}
            />
          </div>

          <h1
            className="font-display font-bold uppercase leading-tight mb-2"
            style={{
              color: "var(--color-orange)",
              fontSize: "clamp(2.2rem, 6vw, 5rem)",
            }}
          >
            Vima Voi Seva
          </h1>
          <h1
            className="font-display font-bold uppercase leading-tight mb-6 text-white"
            style={{ fontSize: "clamp(2rem, 5vw, 4rem)" }}
          >
            Sangathan
          </h1>

          <p className="text-white/90 text-lg md:text-xl mb-8 font-body tracking-wide">
            Serving the Underserved &nbsp;|&nbsp; Empowering Rural Communities ·
            Odisha, India
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              data-ocid="hero.learn_more.button"
              onClick={() => scrollTo("#about")}
              className="rounded-full px-8 py-6 text-base font-semibold uppercase tracking-wide shadow-orange"
              style={{ backgroundColor: "var(--color-orange)", color: "white" }}
            >
              Learn Our Story
            </Button>
            <Button
              data-ocid="hero.join_mission.button"
              onClick={() => scrollTo("#contact")}
              variant="outline"
              className="rounded-full px-8 py-6 text-base font-semibold uppercase tracking-wide bg-transparent text-white border-white hover:bg-white/10"
            >
              Join Our Mission
            </Button>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center pt-2">
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
              className="w-1.5 h-1.5 bg-white/70 rounded-full"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
