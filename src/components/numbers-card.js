import React from 'react'

import PropTypes from 'prop-types'

import './numbers-card.css'

const NumbersCard = (props) => {
  return (
    <div className="numbers-card-numbers-card">
      <span className="numbers-card-number">{props.number}</span>
      <span className="numbers-card-text">{props.text}</span>
    </div>
  )
}

NumbersCard.defaultProps = {
  text: 'TUTORIALS',
  number: '80+',
}

NumbersCard.propTypes = {
  text: PropTypes.string,
  number: PropTypes.string,
}

export default NumbersCard
