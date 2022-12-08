import React, {useState} from 'react'
import Data from '../../MOCK_DATA.json'
import './searchbar.css'
 
const Searchbar = () => {
  const [query] = useState("")
  return (
    <div>
    {
      Data.filter(post => {
        if (query === '') {
          return post;
        } else if (post.title.toLowerCase().includes(query.toLowerCase())) {
          return post;
        }
      }).map((post, index) => (
        <div className="box" key={index}>
          <p>{post.title}</p>
          <p>{post.author}</p>
        </div>
      ))
    }
   
    </div>
  )
}

export default Searchbar
