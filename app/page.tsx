import AboutSection from "./components/homepage/about";
import ContactSection from "./components/homepage/contact";
import Education from "./components/homepage/education";
import Experience from "./components/homepage/experience";
import Publication from "./components/homepage/publications";
import HeroSection from "./components/homepage/hero-section";
import Projects from "./components/homepage/projects";
import Skills from "./components/homepage/skills";
import NewsSection from "./components/homepage/news";

export default async function Home(): Promise<JSX.Element> {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <NewsSection />
      <Publication />
      <Experience />
      <Skills />
      <Projects />
      <Education />
      <ContactSection />
    </>
  );
}