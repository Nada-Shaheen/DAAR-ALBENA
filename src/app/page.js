import About from "../components/sections/About";
import Clients from "../components/sections/Clients";
import Landing from "../components/sections/Landing";
import Projects from "../components/sections/Projects";
import Services from "../components/sections/Services";

export default function Home() {
  return (
    <>
      <Landing />
      <About />
      <Services />
      <Projects />
      <Clients />
    </>
  );
}
