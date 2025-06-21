import Navbar from "./components/NavBar/navbar";
import Intro from "./components/Intro/intro";
import Skills from "./components/Skills/skills";
import Projects from "./components/Projects/projects";
import Profiles from "./components/Profiles/profiles";
import Contact from "./components/Contact/contact"

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Intro></Intro>
      <Skills></Skills>
      <Projects></Projects>
      <Profiles></Profiles>
      <Contact></Contact>
    </div>
  );
}

export default App;
