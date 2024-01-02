import logo from './logo.svg';
import './App.css';
import { Route,Routes } from 'react-router-dom';

import NotFound from './components/NotFound';
import About from './components/About';
import Rides from './components/Rides';
import Support from './components/Support';
//import Home from './components/Home';
import { NavLink } from 'react-router-dom';
import Mainheader from './components/Mainheader';
import Home from './components/Home';




function App() {
  return (
    <div className='App'>
      <nav className='flex'>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/rides">Rides</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/support">Support</NavLink>
          </li>
        </ul>
      </nav>
   <Routes>
     <Route path="/" element={<Mainheader/>}>
     <Route index element={<Home/>}/>
     <Route path="/support" element={<Support/>}/>
     <Route path="/about" element={<About/>}/>
     <Route path="/rides" element={<Rides/>}/>
     <Route path="/*" element={<NotFound/>}/>
    </Route>
    
    
    
   </Routes>
    </div>
  );
}

export default App;
