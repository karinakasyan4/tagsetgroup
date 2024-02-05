import React from 'react';
import { useEffect } from 'react';
import { BrowserRouter as Router ,
  Link, 
  Route, 
  Routes 
} from 'react-router-dom';
import Home from './Home';
import Services from './Services';
import MyForm from './MyForm';
import image from './media/Brandmark.png';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './App.css';


function App() {

  useEffect(()=>{AOS.init();},[]);
  return (
    <div className="App">
      <Router>
      

  <nav data-aos="fade-zoom-in" data-aos-offset="400" data-aos-easing="ease-in-sine" data-aos-duration="1200"> 
    <Link className='link' to='/'><img className='logo' src={image} width='40px' alt='logo'/></Link>
    <Link className='link' to='/home'>Home</Link>
    <Link className='link' to='/services'>Services</Link>
    <Link className='link' to='/myForm'>Contact</Link>
  </nav>

<Routes>
  <Route path ='/' element={<Home/>} />
  <Route path ='/home' element={<Home/>} />
  <Route path ='/services' element={<Services/>} />
  <Route path ='/myForm' element={<MyForm/>}/>
</Routes>
    </Router>



    </div>

    
  );
}


export default App;
