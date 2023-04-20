import logo from './Rob.png';
import './App.scss';
import NavBar from './Components/NavBar';
import Home from './Components/Home';
import Projects from './Components/Projects';
import About from './Components/About';
import Contact from './Components/Contact';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation()
  return (
      <div className="App">
        <div className='logo-parent'><img className='logo' src={logo}></img></div>
        <NavBar />
        <AnimatePresence>
          <Routes location={location} key={location.pathname}>
            <Route path='/' element={<Home />}/>
            <Route path='/projects' element={<Projects />}/>
            <Route path='/about-me' element={<About />}/>
            <Route path='/contact' element={<Contact />}/>
          </Routes>
        </AnimatePresence>
      </div>
  );
}

export default App;
