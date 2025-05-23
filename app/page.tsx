import About from "@/components/About";
import Education from "@/components/Education";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Showcase from "@/components/Showcase";
import Skill from "@/components/Skill";

export default function Home() {
  return (
    <main>
      <Navbar className="fixed" />
      <Header />
      <Skill />
      <Showcase />
      <Education />
      <About />
    </main>
  );
}
