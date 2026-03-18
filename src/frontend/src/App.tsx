import { Toaster } from "@/components/ui/sonner";
import AboutUs from "./components/AboutUs";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Leadership from "./components/Leadership";
import Missions from "./components/Missions";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";

export default function App() {
  return (
    <div className="min-h-screen font-body">
      <Toaster richColors position="top-right" />
      <Navbar />
      <main>
        <Hero />
        <AboutUs />
        <Missions />
        <Projects />
        <Leadership />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
