import About from "@/components/About";
import Education from "@/components/Education";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Showcase from "@/components/Showcase";
import Skill from "@/components/Skill";

export default function Home() {
  return (
    <>
      <Navbar />
      <Header />
      <Showcase />
      <About />
      <Skill />
      <Education />
      <Footer />
    </>
  );
}
