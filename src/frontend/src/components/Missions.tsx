import { Droplets, GraduationCap, HandHeart, Heart, Home } from "lucide-react";
import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";

const missions = [
  {
    icon: HandHeart,
    title: "Poverty Alleviation",
    description:
      "Decreasing poverty among rural and discriminated communities through skill development, livelihood programs, and economic empowerment initiatives.",
    color: "var(--color-orange)",
    bg: "oklch(0.97 0.04 65)",
  },
  {
    icon: GraduationCap,
    title: "Rural Education",
    description:
      "Empowering children and adults through quality education, literacy programs, and scholarship initiatives to break the cycle of poverty.",
    color: "var(--color-green)",
    bg: "oklch(0.95 0.04 155)",
  },
  {
    icon: Heart,
    title: "Healthcare Access",
    description:
      "Providing free and affordable healthcare services, mobile health camps, and medical assistance to underserved rural populations.",
    color: "var(--color-orange)",
    bg: "oklch(0.97 0.04 65)",
  },
  {
    icon: Home,
    title: "Orphan Ashram",
    description:
      "Serving children's homes and orphanages with food, clothing, education support, and emotional care for those who need it most.",
    color: "var(--color-green)",
    bg: "oklch(0.95 0.04 155)",
  },
  {
    icon: Droplets,
    title: "Water Kiosk Initiative",
    description:
      "Setting up free water stalls and kiosks on roadsides during scorching summer seasons, ensuring clean drinking water for all travelers.",
    color: "var(--color-orange)",
    bg: "oklch(0.97 0.04 65)",
  },
];

export default function Missions() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="missions" className="py-20 bg-background">
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
              What We Do
            </span>
            <div
              className="h-px w-12"
              style={{ backgroundColor: "var(--color-orange)" }}
            />
          </div>
          <h2 className="font-display font-bold text-4xl md:text-5xl uppercase">
            Our <span style={{ color: "var(--color-green)" }}>Missions</span>
          </h2>
          <p className="text-muted-foreground mt-3 max-w-xl mx-auto">
            Five pillars of service that define our commitment to rural Odisha
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {missions.map((mission, i) => (
            <motion.div
              key={mission.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-card rounded-2xl p-6 shadow-card hover:shadow-lg transition-shadow"
              data-ocid={`missions.item.${i + 1}`}
            >
              <div
                className="w-14 h-14 rounded-full flex items-center justify-center mb-4"
                style={{ backgroundColor: mission.bg }}
              >
                <mission.icon
                  className="w-7 h-7"
                  style={{ color: mission.color }}
                />
              </div>
              <h3 className="font-display font-bold text-lg mb-2">
                {mission.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {mission.description}
              </p>
              <div
                className="mt-4 h-0.5 w-8 rounded"
                style={{ backgroundColor: mission.color }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
