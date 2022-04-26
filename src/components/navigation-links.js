import React from 'react'

import PropTypes from 'prop-types'

import './navigation-links.css'

const NavigationLinks = (props) => {
  return <nav className={`navigation-links-nav ${props.rootClassName} `}></nav>
}

NavigationLinks.defaultProps = {
  rootClassName: '',
}

NavigationLinks.propTypes = {
  rootClassName: PropTypes.string,
}

export default NavigationLinks
