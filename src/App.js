import logo from './logo.svg';
import './App.scss';
import NavBar from './Components/NavBar';
import Home from './Components/Home';
import Projects from './Components/Projects';
import About from './Components/About';
import Contact from './Components/Contact';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/projects' element={<Projects />}/>
          <Route path='/about-me' element={<About />}/>
          <Route path='/contact' element={<Contact />}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
