import React from 'react'

import PropTypes from 'prop-types'

import './solidbutton.css'

const SolidButton = (props) => {
  return (
    <div className="solid-button-container">
      <button className="solid-button-button button Button" onClick = {props.click}>
        {props.button} 
      </button>
    </div>
  )
}

SolidButton.defaultProps = {
  button: 'Button',

}

SolidButton.propTypes = {
  button: PropTypes.string,
}

export default SolidButton
