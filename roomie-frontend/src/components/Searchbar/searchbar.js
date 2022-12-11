

import React, {useState,useEffect} from 'react'


import './searchbar.css'

const SearchBar = () => {

//  const [searchInput, setSearchInput] = useState('');

 const countries = [

  { name: "Belgium", continent: "Europe" },
  { name: "India", continent: "Asia" },
  { name: "Bolivia", continent: "South America" },
  { name: "Ghana", continent: "Africa" },
  { name: "Japan", continent: "Asia" },
  { name: "Canada", continent: "North America" },
  { name: "New Zealand", continent: "Australasia" },
  { name: "Italy", continent: "Europe" },
  { name: "South Africa", continent: "Africa" },
  { name: "China", continent: "Asia" },
  { name: "Paraguay", continent: "South America" },
  { name: "Usa", continent: "North America" },
  { name: "France", continent: "Europe" },
  { name: "Botswana", continent: "Africa" },
  { name: "Spain", continent: "Europe" },
  { name: "Senegal", continent: "Africa" },
  { name: "Brazil", continent: "South America" },
  { name: "Denmark", continent: "Europe" },
  { name: "Mexico", continent: "South America" },
  { name: "Australia", continent: "Australasia" },
  { name: "Tanzania", continent: "Africa" },
  { name: "Bangladesh", continent: "Asia" },
  { name: "Portugal", continent: "Europe" },
  { name: "Pakistan", continent:"Asia" },

];

// const handleChange = (e) => {
//   e.preventDefault();
//   setSearchInput(e.target.value);
// };
// useEffect (() => {

// if (searchInput.length > 0) {
//     countries.filter((country) => {
//     return country.name.match(searchInput);
// });
// }

return (
  <><div className='bar'>
    <input
      type="search"
      placeholder="Search here"
      className='smallbar'
      />
  </div>
  <div>
    <table>
      <tr>
        <th></th>
        <th></th>
      </tr>

      {countries.map((country, index) => {

        <div>
          <tr>
            <td>{country.name}</td>
            <td>{country.continent}</td>
          </tr>
        </div>;

      })}
    </table>

    </div>
    </>

// ,[searchInput]
)}

export default SearchBar;