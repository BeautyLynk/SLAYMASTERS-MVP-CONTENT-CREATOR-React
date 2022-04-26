import React from 'react'

import PropTypes from 'prop-types'

import './slide.css'

const Slide = (props) => {
  return (
    <div
      data-type="slide"
      className={`slide-slide slide ${props.rootClassName} `}
    >
      <img
        alt={props.image_alt}
        src={props.image_src}
        className="slide-image"
      />
      <button className="slide-button button">{props.button}</button>
    </div>
  )
}

Slide.defaultProps = {
  image_src: 'https://play.teleporthq.io/static/svg/default-img.svg',
  image_alt: 'image',
  button: 'REGISTER',
  rootClassName: '',
}

Slide.propTypes = {
  image_src: PropTypes.string,
  image_alt: PropTypes.string,
  button: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default Slide
