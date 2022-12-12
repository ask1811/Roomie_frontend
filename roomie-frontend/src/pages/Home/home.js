import React from 'react'
import Searchbar from '../../components/Searchbar/searchbar';
import Footer from '../../components/Footer/footer';
import './home.css';
const Home = () => {
  return (
    <>
    <div className='whole'>
      <div className='content'>
        <div className='bigimg'>
          <img src='https://www.flatmate.in/home-image.webp' alt='alternate' className='image1' />
          <div className='dat1'>Find a Room or Roommate Now</div>
          <Searchbar className='search' />
        </div>
      </div>
      <div className='discover'>
      <img src='https://wmaproperty.com/blog/wp-content/uploads/2016/01/How-to-Find-Apartments-for-Rent.jpg' alt='alternate' className='image2' />
      <div className='dat2'>
      Discover new apartments to rent
      </div>
      <a href='/discover'>
      <button className='discoverbutton'>Discover</button>
      </a>
      </div>
    </div>
    <Footer/>
    </>

  )
}

export default Home;
