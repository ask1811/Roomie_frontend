import React from 'react';
import './App.css';
import { BrowserRouter,Route,Routes }  from 'react-router-dom';
import Home from './pages/Home/home'; 
import Signup from './pages/Signup/signup'; 
import Navbar from './components/Navbar/navbar';
import Login from './pages/Login/login'; 
import Discover from './pages/Discover/discover';
import Aim from './pages/Aim/aim';
import Landingpage from './pages/Landingpage/landingpage';
import Tlandingpage from './pages/Tlandingpage/tlandingpage'
import Ownadd from './pages/Ownadd/ownadd';
import Ownview from './pages/Ownview/ownview';
import Tview from './pages/Tview/tview'
import Trent from './pages/Trent/trent'
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
		<Route path='/landingpage' element={<Landingpage/>} />
		<Route path='/tlandingpage' element={<Tlandingpage/>} />
		<Route path='/Ownadd' element={<Ownadd/>} />
		<Route path='/ownview/:id' element={<Ownview/>} />
		<Route path='/tview/:id' element={<Tview/>} />
		<Route path='/trent/:id' element={<Trent/>} />

  	</Routes>
    </BrowserRouter>
  </div>
);
}

export default App;