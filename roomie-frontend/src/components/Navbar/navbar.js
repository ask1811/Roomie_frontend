import React from 'react';
import {Link} from 'react-router-dom';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu
} from './navbarelements';
const Navbar = ()=>{
  if(localStorage.getItem("token")==="xxx"){
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
    <a href="/login" id="searchtoggl"><i class="fa fa-search fa-lg"></i></a>
    <Link onClick={()=>{localStorage.removeItem("token"); localStorage.removeItem("userId"); window.location.href = "/";}} to="/">
      Logout
    </Link>
  </div>
  <div id="searchbar" class="clearfix">
  <form id="searchform" method="get" action="searchpage.php">
    <button type="submit" id="searchsubmit" class="fa fa-search fa-4x"></button>
    <input type="search" name="s" id="s" placeholder="Keywords..." autocomplete="off"></input>
    </form>
</div>
</div>
	);
}
else{
  return(
    <>
    <Nav>
      <Bars />

      <NavMenu>
      <NavLink to='/' activeStyle>
      ROOMIE
    </NavLink>
        <NavLink to='/login' activeStyle>
          Post Listing
        </NavLink>
        <NavLink to='/login' activeStyle>
        Find a room
        </NavLink>
        <NavLink to='/login' activeStyle>
        Sign In
        </NavLink>
      </NavMenu>
    </Nav>
  </>
    );
}
}

export default Navbar;