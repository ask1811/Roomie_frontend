import React from 'react';
import './App.css';
import { BrowserRouter,Route,Routes }  from 'react-router-dom';
import Home from './pages/Home/home'; 
import Signup from './pages/Signup/signup'; 
import Navbar from './components/Navbar/navbar';
import Login from './pages/Login/login'; 
import Discover from './pages/Discover/discover';
import Aim from './pages/Aim/aim';
import LandingPage from './pages/Landing-Page/landing-page';
import TlandingPage from './pages/Tlanding-Page/tlanding-page'
function App() {
return (
  <div className="App">
    <BrowserRouter>
  	<Navbar/>
  	<Routes>
  		<Route path='/' element={<Home/>} />
  		 <Route path='/login' element={<Login/>} />
  		 <Route path='/signup' element={<Signup/>} />
		<Route path='/discover' element={<Discover/>} />
		<Route path='/aim' element={<Aim/>} />
		<Route path='/landing-page' element={<LandingPage/>} />
		<Route path='/tlanding-page' element={<TlandingPage/>} />

  	</Routes>
    </BrowserRouter>
  </div>
);
}

export default App;