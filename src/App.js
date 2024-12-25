import Navbar from "./components/NavBar/navbar";
import Intro from "./components/Intro/intro";
import Skills from "./components/Skills/skills";
import Projects from "./components/Projects/projects";
import Profiles from "./components/Profiles/profiles";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Intro></Intro>
      <Skills></Skills>
      <Projects></Projects>
      <Profiles></Profiles>
    </div>
  );
}

export default App;
