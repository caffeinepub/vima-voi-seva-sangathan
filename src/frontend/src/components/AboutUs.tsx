import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";

export default function AboutUs() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="about"
      className="py-20"
      style={{ backgroundColor: "oklch(0.945 0.04 85)" }}
    >
      <div className="container mx-auto px-4">
        <div ref={ref} className="max-w-5xl mx-auto">
          {/* Rounded content block */}
          <div className="bg-white rounded-3xl shadow-card overflow-hidden">
            <div className="grid md:grid-cols-2 gap-0">
              {/* Image side */}
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.7 }}
                className="relative"
              >
                <img
                  src="/assets/generated/hero-community.dim_1400x700.jpg"
                  alt="Our community"
                  className="w-full h-full object-cover min-h-64"
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(242,154,46,0.2), transparent)",
                  }}
                />
              </motion.div>

              {/* Text side */}
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.15 }}
                className="p-8 md:p-12 flex flex-col justify-center"
              >
                {/* Accent bar */}
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className="w-8 h-0.5"
                    style={{ backgroundColor: "var(--color-orange)" }}
                  />
                  <span
                    className="text-xs font-semibold uppercase tracking-widest"
                    style={{ color: "var(--color-orange)" }}
                  >
                    Our Story
                  </span>
                </div>

                <h2 className="font-display font-bold text-3xl md:text-4xl mb-4 leading-tight">
                  Building Hope in{" "}
                  <span style={{ color: "var(--color-green)" }}>
                    Rural Odisha
                  </span>
                </h2>

                <p className="text-muted-foreground leading-relaxed mb-4">
                  Founded in 2023, <strong>Vima Voi Seva Sangathan</strong> was
                  established with a heartfelt mission — to uplift the
                  marginalized, rural, and discriminated communities of
                  Dharmasala Block, Jajpur District, Odisha.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Born at the sacred grounds of <strong>Mahadev Temple</strong>{" "}
                  in Rekhideipur, this organization was founded by three
                  committed individuals who believe that change begins at the
                  grassroots level. Our work spans education, healthcare, clean
                  water access, and community empowerment.
                </p>

                <div className="grid grid-cols-2 gap-4">
                  <div
                    className="p-3 rounded-xl"
                    style={{ backgroundColor: "oklch(0.96 0.04 85)" }}
                  >
                    <p
                      className="font-bold text-2xl"
                      style={{ color: "var(--color-orange)" }}
                    >
                      2023
                    </p>
                    <p className="text-xs text-muted-foreground">
                      Year Founded
                    </p>
                  </div>
                  <div
                    className="p-3 rounded-xl"
                    style={{ backgroundColor: "oklch(0.96 0.04 85)" }}
                  >
                    <p
                      className="font-bold text-2xl"
                      style={{ color: "var(--color-green)" }}
                    >
                      5+
                    </p>
                    <p className="text-xs text-muted-foreground">
                      Active Programs
                    </p>
                  </div>
                  <div
                    className="p-3 rounded-xl"
                    style={{ backgroundColor: "oklch(0.96 0.04 85)" }}
                  >
                    <p
                      className="font-bold text-2xl"
                      style={{ color: "var(--color-orange)" }}
                    >
                      3
                    </p>
                    <p className="text-xs text-muted-foreground">
                      Founding Leaders
                    </p>
                  </div>
                  <div
                    className="p-3 rounded-xl"
                    style={{ backgroundColor: "oklch(0.96 0.04 85)" }}
                  >
                    <p
                      className="font-bold text-2xl"
                      style={{ color: "var(--color-green)" }}
                    >
                      100+
                    </p>
                    <p className="text-xs text-muted-foreground">
                      Lives Impacted
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
