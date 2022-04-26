import React from 'react'

import PropTypes from 'prop-types'

import './heading2.css'

const Heading2 = (props) => {
  return (
    <div className="heading2-container section">
      <h1>{props.heading}</h1>
    </div>
  )
}

Heading2.defaultProps = {
  heading: 'SLAYMASTER CREATOR CALENDAR ',
}

Heading2.propTypes = {
  heading: PropTypes.string,
}

export default Heading2
