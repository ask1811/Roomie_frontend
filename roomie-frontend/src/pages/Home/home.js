import React from 'react'
import Searchbar from '../../components/Searchbar/searchbar';
import Footer from '../../components/Footer/footer';
import './home.css';
const Home = () => {
  return (
    <><div>
      <div className='content'>
        <div className='bigimg'>
          <img src='https://www.flatmate.in/home-image.webp' alt='alternate' className='image' />
          <div className="right">Find a Room or Roommate Now</div>
          <Searchbar className="search" />
        </div>
        <p>Lorem ipsum dolor sitamet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </div>
    </div>
    <Footer /></>

  )
}

export default Home;
