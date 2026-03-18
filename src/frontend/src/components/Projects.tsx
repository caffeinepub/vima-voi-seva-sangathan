import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";

const projects = [
  {
    title: "Rural Education Drive",
    subtitle: "Empowering 200+ children in Dharmasala Block",
    description:
      "Through our education initiative, we've established learning centers, distributed school supplies, and provided scholarships to underprivileged children in remote villages.",
    image: "/assets/generated/project-education.dim_600x400.jpg",
    tag: "Education",
    tagColor: "var(--color-green)",
  },
  {
    title: "Summer Water Stalls",
    subtitle: "Free drinking water on national highways",
    description:
      "Every summer, our volunteers set up water kiosks along key roadside locations, providing free, safe drinking water to thousands of travelers and daily laborers.",
    image: "/assets/generated/project-water.dim_600x400.jpg",
    tag: "Water Access",
    tagColor: "var(--color-orange)",
  },
  {
    title: "Mobile Health Camps",
    subtitle: "Healthcare reaching the unreachable",
    description:
      "Our mobile health camps bring doctors, medicines, and diagnostic services directly to remote villages where healthcare facilities are scarce or non-existent.",
    image: "/assets/generated/project-healthcare.dim_600x400.jpg",
    tag: "Healthcare",
    tagColor: "var(--color-green)",
  },
];

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="projects"
      className="py-20"
      style={{ backgroundColor: "oklch(0.945 0.04 85)" }}
    >
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
              Impact
            </span>
            <div
              className="h-px w-12"
              style={{ backgroundColor: "var(--color-orange)" }}
            />
          </div>
          <h2 className="font-display font-bold text-4xl md:text-5xl uppercase">
            Featured{" "}
            <span style={{ color: "var(--color-orange)" }}>Projects</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-lg transition-all hover:-translate-y-1 group"
              data-ocid={`projects.item.${i + 1}`}
            >
              <div className="relative overflow-hidden h-48">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-3 left-3">
                  <span
                    className="text-xs font-semibold uppercase tracking-wide px-3 py-1 rounded-full text-white"
                    style={{ backgroundColor: project.tagColor }}
                  >
                    {project.tag}
                  </span>
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-display font-bold text-lg mb-1">
                  {project.title}
                </h3>
                <p
                  className="text-xs font-medium mb-3"
                  style={{ color: "var(--color-orange)" }}
                >
                  {project.subtitle}
                </p>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {project.description}
                </p>
                <button
                  type="button"
                  className="flex items-center gap-1 text-sm font-semibold transition-colors"
                  style={{ color: "var(--color-green)" }}
                >
                  Read More <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
