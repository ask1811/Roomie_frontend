import React from 'react';
import {Link,} from 'react-router-dom';
import '../../pages/Discover/discover';
import './navbar.css';
const Navbar = ()=>{
  if(localStorage.getItem("user")==="owner"){
	return(
	<div class="nav">
  	<div class="nav-header">
    	<div class="nav-title">
      	<a href="/" target="_self">ROOMIE</a>
    	</div>
 	 </div>
  	<div class="nav-btn">
    <label for="nav-check">
      <span></span>
      <span></span>
      <span></span>
    </label>
  	</div>
  <div class="nav-links">
    <a href="/landingpage" target="_self">Dashboard</a>
    <a href="/ownadd" target="_self">Add Property</a>
    <a href="/" target="_self">Logout</a>
    <Link onClick={()=>{localStorage.removeItem('token'); localStorage.removeItem('userId'); localStorage.removeItem('user');window.location.href='/';}}to="/">Logout</Link>
  </div>
</div>
	);
}
 else if(localStorage.getItem("user")==="tenant"){
	return(
	<div class="nav">
  	<div class="nav-header">
    	<div class="nav-title">
      	<a href="/" target="_self">ROOMIE</a>
    	</div>
 	 </div>
  	<div class="nav-btn">
    <label for="nav-check">
      <span></span>
      <span></span>
      <span></span>
    </label>
  	</div>
  <div class="nav-links">
    <a href="/landingpage" target="_self">Dashboard</a>
    <a href="/discover" target="_self">Discover</a>
    <a href="/" target="_self">Logout</a>
    <Link onClick={()=>{localStorage.removeItem('token'); localStorage.removeItem('userId'); localStorage.removeItem('user');window.location.href='/';}}to="/">Logout</Link>
  </div>
</div>
	);
}
else {
  return(
    <div class="nav">
      <div class="nav-header">
        <div class="nav-title">
        <a href="/" target="_self">ROOMIE</a>
        </div>
      </div>
      <div class="nav-btn">
      <label for="nav-check">
        <span></span>
        <span></span>
        <span></span>
      </label>
      </div>
    
    <div class="nav-links">
      <a href="/login" target="_self" className='btn1'>
      <span class="replies">Post</span>
      <span class="comments"></span>
     </a>
      <a href="/login" target="_self" className='btn2'>
      <span class="replies">Find</span>
      <span class="comments"></span>
      </a>
      <a href="/discover" target="_self" className='btn3'>
      <span class="replies">Discover</span>
      <span class="comments"></span>
      </a>
      <a href="/login" target="_self" className='btn4'>Login</a>
    </div>
  </div>
    );
}
}

export default Navbar;