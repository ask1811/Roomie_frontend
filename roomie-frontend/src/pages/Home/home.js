import React from 'react'
import Searchbar from '../../components/Searchbar/searchbar';
import Footer from '../../components/Footer/footer';
import './home.css';
const Home = () => {
  return (
    <>
    <div>
      <div className='content'>
        <div className='bigimg'>
          <img src='https://www.flatmate.in/home-image.webp' alt='alternate' className='image' />
          <div className="right">Find a Room or Roommate Now</div>
          <Searchbar className='search' />
        </div>
      </div>
    </div>
    <Footer />
    </>

  )
}

export default Home;
