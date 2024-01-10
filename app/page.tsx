import AboutMe from "@/components/AboutMe";
import Intro from "@/components/Intro";
import MyProjects from "@/components/MyProjects";
import SectionDivider from "@/components/SectionDivider";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <Intro />
      <SectionDivider />
      <AboutMe />
      <SectionDivider />
      <MyProjects />
      <SectionDivider />
    </main>
  );
}
