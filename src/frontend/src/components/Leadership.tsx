import { Crown, Heart, Star } from "lucide-react";
import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";

const leaders = [
  {
    name: "Soumyaranjan Pani",
    title: "Pramukh",
    role: "President",
    description:
      "The visionary leader who initiated and established Vima Voi Seva Sangathan at the Mahadev Temple grounds in 2023, driven by a lifelong commitment to rural upliftment.",
    icon: Crown,
    color: "var(--color-orange)",
    bg: "oklch(0.97 0.04 65)",
    initials: "SP",
  },
  {
    name: "Bibekanand Nayak",
    title: "Mukhya",
    role: "Chief",
    description:
      "As the Chief of the organization, Bibekanand leads day-to-day operations and community outreach programs, ensuring every mission reaches those who need it most.",
    icon: Star,
    color: "var(--color-green)",
    bg: "oklch(0.95 0.04 155)",
    initials: "BN",
  },
  {
    name: "Chandan Rout",
    title: "Adhar",
    role: "Foundation & Support",
    description:
      "The foundational pillar of the organization, Chandan provides unwavering support and coordination across all programs, embodying the spirit of selfless service.",
    icon: Heart,
    color: "var(--color-orange)",
    bg: "oklch(0.97 0.04 65)",
    initials: "CR",
  },
];

export default function Leadership() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="leadership" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <div className="flex items-center justify-center gap-3 mb-3">
            <div
              className="h-px w-12"
              style={{ backgroundColor: "var(--color-orange)" }}
            />
            <span
              className="text-xs font-semibold uppercase tracking-widest"
              style={{ color: "var(--color-orange)" }}
            >
              Founding Members
            </span>
            <div
              className="h-px w-12"
              style={{ backgroundColor: "var(--color-orange)" }}
            />
          </div>
          <h2 className="font-display font-bold text-4xl md:text-5xl uppercase">
            Our <span style={{ color: "var(--color-green)" }}>Leadership</span>
          </h2>
          <p className="text-muted-foreground mt-3 max-w-xl mx-auto">
            Three pillars who founded the organization at Mahadev Temple Ground,
            Rekhideipur in 2023
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {leaders.map((leader, i) => (
            <motion.div
              key={leader.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="text-center bg-card rounded-2xl p-8 shadow-card hover:shadow-lg transition-shadow"
              data-ocid={`leadership.item.${i + 1}`}
            >
              {/* Avatar */}
              <div
                className="w-20 h-20 rounded-full mx-auto flex items-center justify-center mb-4 text-2xl font-display font-bold"
                style={{ backgroundColor: leader.bg, color: leader.color }}
              >
                {leader.initials}
              </div>

              {/* Role badge */}
              <div
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide mb-3 text-white"
                style={{ backgroundColor: leader.color }}
              >
                <leader.icon className="w-3 h-3" />
                {leader.title} — {leader.role}
              </div>

              <h3 className="font-display font-bold text-xl mb-3">
                {leader.name}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {leader.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Founding location */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <div
            className="inline-block px-6 py-3 rounded-2xl text-sm text-muted-foreground"
            style={{ backgroundColor: "oklch(0.945 0.04 85)" }}
          >
            📍 Founded at: <strong>Mahadev Temple Ground</strong>, At/PO-
            Rekhideipur, Via- Jenapur, Block- Dharmasala, Dist- Jajpur, Odisha
          </div>
        </motion.div>
      </div>
    </section>
  );
}
