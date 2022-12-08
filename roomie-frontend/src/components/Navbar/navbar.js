import React from 'react';
import {Link} from 'react-router-dom';
import './navbar.css';
const Navbar = ()=>{
  if(localStorage.getItem("token")=="xxx"){
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
    <a href="/" target="_self">Dashboard</a>
    <a href="/" target="_self">Logout</a>
    <Link onClick={()=>{localStorage.removeItem("token"); localStorage.removeItem("userId"); window. location.href = "/";}} to="/">
      Logout
    </Link>
  </div>
</div>
	);
}
else{
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
      <a href="/login" target="_self">Post Listing</a>
      <a href="/login" target="_self">Find a Room</a>
    </div>
  </div>
    );
}
}

export default Navbar;