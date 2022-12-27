import React from 'react'

import PropTypes from 'prop-types'

import OutlineButton from '../Outlinebutton/outlinebutton'
import './placecard.css'

const PlaceCard = (props) => {
  console.log(props);
  return (
    
    <div className="place-card-container">
      <img
        alt={props.image_alt}
        src={props.image}
        className="place-card-image"
      />
      <div className="place-card-container1">
        <span className="place-card-text">{props.pname}</span>
        <span className="place-card-text1">{props.paddress}</span>
        <button onClick={()=>{if(localStorage.getItem('user')=='Tenant'){
        window.location.href = `/trent/${props.property_id}`}
        else if(localStorage.getItem('user')=='Owner'){
          window.location.href = `/ownview/${props.property_id}`
        }
        }}>View</button>
      </div>
    </div>
    
  )
}

// PlaceCard.defaultProps = {
//   image:
//     'https://img.freepik.com/premium-photo/white-wooden-little-toy-houses-gray-background-minimalist-scandinavian-decorative-design_136930-1076.jpg?w=1480',
//   image_alt: 'image',
//   pname: 'Available Slot',
//   paddress:
//     'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.',
// }

// PlaceCard.propTypes = {
//   image: PropTypes.string,
//   image_alt: PropTypes.string,
//   pname: PropTypes.string,
//   paddress: PropTypes.string,
// }

export default PlaceCard

