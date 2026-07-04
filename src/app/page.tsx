import { Navigation } from "@/components/ui/Navigation";
import { ScrollIndicator } from "@/components/ui/ScrollIndicator";
import { Footer } from "@/components/ui/Footer";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { ExperienceTimeline } from "@/components/sections/ExperienceTimeline";
import { Skills } from "@/components/sections/Skills";
import { Projects } from "@/components/sections/Projects";
import { Research } from "@/components/sections/Research";
import { GithubDashboard } from "@/components/sections/GithubDashboard";
import { Certifications } from "@/components/sections/Certifications";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Navigation />
      <ScrollIndicator />
      <main className="flex-1 w-full overflow-hidden">
        <Hero />
        <About />
        <ExperienceTimeline />
        <Skills />
        <Projects />
        <Research />
        <GithubDashboard />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
