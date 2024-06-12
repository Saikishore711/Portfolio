import './App.css';
import AboutPage from './components/About';
import Home from './components/Home';
import NavBar from './components/NavBar';
import ProjectsPage from './components/Projects';
import Contactme from './components/Contactme';
import Sociallinks from './components/Sociallinks';
import Experience from './components/Experience';

function App() {
  return (
    <>
    <NavBar />
      <section id="home">
        <Home />
      </section>
      <section id="Experience">
        <AboutPage />
      </section>
      <section id="skills">
        <Experience />
      </section>
      <section id="projects">
        <ProjectsPage />
      </section>
      <section id="contact">
        <Contactme />
      </section>
      <Sociallinks />
    </>
  );
}

export default App;
