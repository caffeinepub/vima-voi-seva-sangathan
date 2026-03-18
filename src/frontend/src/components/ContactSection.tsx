import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Loader2, Mail, MapPin, Phone, Send } from "lucide-react";
import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useState } from "react";
import { useRef } from "react";
import { toast } from "sonner";
import { useSubmitMessage } from "../hooks/useQueries";

export default function ContactSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const { mutate, isPending } = useSubmitMessage();

  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!form.email.trim()) e.email = "Email is required";
    else if (!/^[^@]+@[^@]+\.[^@]+$/.test(form.email))
      e.email = "Invalid email";
    if (!form.message.trim()) e.message = "Message is required";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    mutate(
      { name: form.name, email: form.email, message: form.message },
      {
        onSuccess: () => {
          toast.success("Message sent! We'll get back to you soon.");
          setForm({ name: "", email: "", message: "" });
          setErrors({});
        },
        onError: () => {
          toast.error("Failed to send message. Please try again.");
        },
      },
    );
  };

  return (
    <section
      id="contact"
      className="py-20"
      style={{ backgroundColor: "var(--color-brown)" }}
    >
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="font-display font-bold text-4xl md:text-5xl uppercase text-white">
            Contact Us
          </h2>
          <p className="text-white/70 mt-3">
            Get in touch with Vima Voi Seva Sangathan
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Map placeholder */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="rounded-2xl overflow-hidden"
          >
            <iframe
              src="https://www.openstreetmap.org/export/embed.html?bbox=85.8,20.8,86.2,21.2&layer=mapnik"
              className="w-full h-full min-h-64 rounded-2xl"
              title="Location Map"
              loading="lazy"
            />
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <form
              onSubmit={handleSubmit}
              className="bg-white rounded-2xl p-6 shadow-card flex flex-col gap-4"
              data-ocid="contact.dialog"
            >
              <h3 className="font-display font-bold text-lg">Send a Message</h3>

              <div>
                <Label
                  htmlFor="name"
                  className="text-sm font-medium mb-1 block"
                >
                  Your Name
                </Label>
                <Input
                  id="name"
                  data-ocid="contact.name.input"
                  placeholder="Full name"
                  value={form.name}
                  onChange={(e) =>
                    setForm((p) => ({ ...p, name: e.target.value }))
                  }
                  className="rounded-xl"
                />
                {errors.name && (
                  <p
                    className="text-xs text-destructive mt-1"
                    data-ocid="contact.name.error_state"
                  >
                    {errors.name}
                  </p>
                )}
              </div>

              <div>
                <Label
                  htmlFor="email"
                  className="text-sm font-medium mb-1 block"
                >
                  Email Address
                </Label>
                <Input
                  id="email"
                  type="email"
                  data-ocid="contact.email.input"
                  placeholder="your@email.com"
                  value={form.email}
                  onChange={(e) =>
                    setForm((p) => ({ ...p, email: e.target.value }))
                  }
                  className="rounded-xl"
                />
                {errors.email && (
                  <p
                    className="text-xs text-destructive mt-1"
                    data-ocid="contact.email.error_state"
                  >
                    {errors.email}
                  </p>
                )}
              </div>

              <div>
                <Label
                  htmlFor="message"
                  className="text-sm font-medium mb-1 block"
                >
                  Message
                </Label>
                <Textarea
                  id="message"
                  data-ocid="contact.message.textarea"
                  placeholder="Write your message..."
                  value={form.message}
                  onChange={(e) =>
                    setForm((p) => ({ ...p, message: e.target.value }))
                  }
                  className="rounded-xl min-h-28"
                />
                {errors.message && (
                  <p
                    className="text-xs text-destructive mt-1"
                    data-ocid="contact.message.error_state"
                  >
                    {errors.message}
                  </p>
                )}
              </div>

              <Button
                type="submit"
                disabled={isPending}
                data-ocid="contact.submit_button"
                className="w-full rounded-xl font-semibold uppercase tracking-wide"
                style={{
                  backgroundColor: "var(--color-orange)",
                  color: "white",
                }}
              >
                {isPending ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" /> Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4 mr-2" /> Send Message
                  </>
                )}
              </Button>
            </form>
          </motion.div>

          {/* Office Details */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-white flex flex-col gap-5"
          >
            <div>
              <h3 className="font-display font-bold text-xl mb-4">
                Our Office
              </h3>
              <div className="flex gap-3">
                <MapPin
                  className="w-5 h-5 mt-0.5 flex-shrink-0"
                  style={{ color: "var(--color-orange)" }}
                />
                <div className="text-sm text-white/80 leading-relaxed">
                  <p className="font-semibold text-white">
                    Mahadev Temple Ground
                  </p>
                  <p>At/PO- Rekhideipur</p>
                  <p>Via- Jenapur, Block- Dharmasala</p>
                  <p>Dist- Jajpur, Odisha – India</p>
                </div>
              </div>
            </div>

            <div className="flex gap-3">
              <Phone
                className="w-5 h-5 flex-shrink-0"
                style={{ color: "var(--color-orange)" }}
              />
              <div className="text-sm text-white/80">
                <p className="font-semibold text-white">Phone</p>
                <p>+91 (Contact through form)</p>
              </div>
            </div>

            <div className="flex gap-3">
              <Mail
                className="w-5 h-5 flex-shrink-0"
                style={{ color: "var(--color-orange)" }}
              />
              <div className="text-sm text-white/80">
                <p className="font-semibold text-white">Email</p>
                <p>Use the contact form</p>
              </div>
            </div>

            <div className="mt-2">
              <p className="text-sm font-semibold mb-3">Block: Dharmasala</p>
              <p className="text-sm text-white/80">
                Dist: Jajpur, Odisha, India
              </p>
            </div>

            {/* Established badge */}
            <div
              className="mt-auto p-4 rounded-xl"
              style={{ backgroundColor: "rgba(255,255,255,0.1)" }}
            >
              <p className="text-xs text-white/60 uppercase tracking-wide mb-1">
                Established
              </p>
              <p
                className="font-display font-bold text-2xl"
                style={{ color: "var(--color-orange)" }}
              >
                2023
              </p>
              <p className="text-xs text-white/70">Serving rural Odisha</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
