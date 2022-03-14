
import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import Projects from './Components/Projects';
import NavBar from './Components/NavBar';
import Contact from './Components/Contact';
import TurnOn from './Components/TurnOn';
import Dog from './Components/Dog';
import Marvel from './Components/Marvel';
import Crypto from './Components/Crypto';



function App() {
  return (
    <BrowserRouter>
    
    <div className="App">
      <Routes>
      <Route path= "/*" element={<NavBar/>} />
      </Routes>
     <Routes>
    <Route path= "/" element={<Home/>} />
    <Route path= "/About" element={<About/>} />
    <Route path= "/Projects" element={<Projects/>} />
    <Route path= "/Contact" element={<Contact/>} />
    <Route path= "/TurnOn" element={<TurnOn/>} />
    <Route path= "/Dog" element={<Dog/>} />
    <Route path= "/Marvel" element={<Marvel/>} />
    <Route path= "/Crypto" element={<Crypto/>} />
    </Routes>
  
    </div>
  
    </BrowserRouter>
  );
}

export default App;
