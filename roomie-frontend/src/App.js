import React from 'react';
import './App.css';
import { BrowserRouter,Route,Routes }  from 'react-router-dom';
import Home from './pages/Home/home'; 
import Signup from './pages/Signup/signup'; 
import Navbar from './components/Navbar/navbar';
import Login from './pages/Login/login'; 

function App() {
return (
  <div className="App">
    <BrowserRouter>
  	<Navbar/>
  	<Routes>
  		<Route path='/' element={<Home/>} />
  		 <Route path='/login' element={<Login/>} />
  		 <Route path='/signup' element={<Signup/>} />
  	</Routes>
    </BrowserRouter>
  </div>
);
}

export default App;