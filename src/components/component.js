import React from 'react'

import PropTypes from 'prop-types'

import './component.css'

const AppComponent = (props) => {
  return (
    <div className="component-container">
      <a
        href={props.link_button}
        target="_blank"
        rel="noreferrer noopener"
        className="component-link button"
      >
        {props.button}
      </a>
    </div>
  )
}

AppComponent.defaultProps = {
  link_button: 'https://app.restream.io/',
  button: 'go live',
}

AppComponent.propTypes = {
  link_button: PropTypes.string,
  button: PropTypes.string,
}

export default AppComponent
