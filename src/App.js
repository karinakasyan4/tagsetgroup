import React from 'react';
import './App.css';
import { 
  BrowserRouter as Router,
  Link, 
  Route,
  Routes 
} from 'react-router-dom';
import Home from './Home';
import Services from './Services';
import MyForm from './MyForm';
import image from './media/Brandmark.png';



function App() {
  return (
    <div className="App">
      <Router>
<nav>
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

  <script>
    AOS.init();
  </script>
export default App;
