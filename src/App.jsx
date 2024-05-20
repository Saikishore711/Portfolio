import './App.css';
import AboutPage from './components/About';
import Home from './components/Home';
import NavBar from './components/NavBar';
import { BrowserRouter as Router, Route, Routes  } from 'react-router-dom';
import ProjectsPage from './components/Projects';
import Contactme from './components/Contactme';
import Sociallinks from './components/Sociallinks';
import Experience from './components/Experience';


function App() {
  return (
    <Router>
      <NavBar />
      <Home/>
      <AboutPage/>
      <Experience />
      <ProjectsPage/>
      <Contactme />
      <Sociallinks />
      <Routes >
        <Route path="/" exact component={Home} />
        <Route path="/about" exact component={AboutPage} />
      </Routes >
    </Router>
  );
}

export default App;
