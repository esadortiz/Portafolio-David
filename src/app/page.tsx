import dynamic from "next/dynamic";
import { Hero } from "@/components/hero";
import About from "@/components/about";
import { Footer } from "@/components/footer";

const Trajectory = dynamic(
  () => import("@/components/trajectory").then((m) => m.Trajectory),
  { ssr: true }
);
const Services = dynamic(
  () => import("@/components/services").then((m) => m.Services),
  { ssr: true }
);
const Projects = dynamic(
  () => import("@/components/projects").then((m) => m.Projects),
  { ssr: true }
);
const Contact = dynamic(
  () => import("@/components/contact").then((m) => m.Contact),
  { ssr: true }
);
const Faq = dynamic(
  () => import("@/components/faq").then((m) => m.Faq),
  { ssr: true }
);

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Trajectory />
      <Services />
      <Projects />
      <Contact />
      <Faq />
      <Footer />
    </>
  );
}
