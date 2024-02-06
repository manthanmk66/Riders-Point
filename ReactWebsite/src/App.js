import logo1 from './logo.svg';
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
import logo from "./Assets/homebanner.jpg"
import logofinal from"./Assets/logos.png"




function App() {
  return (
    <div className='relative'>
      {/* Image */}
      <a href='/'><img src={logo} alt="Background" className="w-full h-auto relative mt-[-160px]" /></a>
      
      {/* Navbar */}
      <nav className='absolute top-40 left-40 right-0 shadow text-lg font-semibold'>
        <div className='container mx-auto px-4'>
          <ul className='flex gap-4 items-center justify-end h-16 text-lg font-semibold'>
            <li>
             <img src={logofinal} className='pr-96 pt-24 w-4/5 h-42'></img>
            </li>
            <li>
              <NavLink to="/" className='text-black hover:text-gray-300 px-4 py-2'>Home</NavLink>
            </li>
            <li>
              <NavLink to="/rides" className='text-black hover:text-gray-300 px-4 py-2'>Rides</NavLink>
            </li>
            <li>
              <NavLink to="/about" className='text-black hover:text-gray-300 px-4 py-2'>About</NavLink>
            </li>
            <li>
              <NavLink to="/support" className='text-black hover:text-gray-300 px-4 py-2'>Support</NavLink>
            </li>
          </ul>
        </div>
      </nav>
      
      {/* Routes */}
      <Routes>
        <Route path="/" element={<Mainheader />}>
          <Route index element={<Home />}/>
          <Route path="/support" element={<Support />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/rides" element={<Rides />}/>
          <Route path="/*" element={<NotFound />}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
