import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Menu from "./components/Menu";
import Projects from "./components/Projects";
import Socials from "./components/Socials";

function App() {
  return (
    <div>
      <Menu />
      <Socials />
      <Home />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
