import { Hero } from "@/components/hero";
import About from "@/components/about";
import { Trajectory } from "@/components/trajectory";
import { Services } from "@/components/services";
import { Projects } from "@/components/projects";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Trajectory />
      <Services />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}
