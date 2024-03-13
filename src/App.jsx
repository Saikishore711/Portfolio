import './App.css';
import AboutPage from './components/About';
import Home from './components/Home';
import NavBar from './components/NavBar';
import { BrowserRouter as Router, Route, Routes  } from 'react-router-dom';

function App() {
  return (
    <Router>
      <NavBar />
      <Home/>
      <AboutPage/>
      <Routes >
        <Route path="/" exact component={Home} />
        <Route path="/about" exact component={AboutPage} />
      </Routes >
    </Router>
  );
}

export default App;
