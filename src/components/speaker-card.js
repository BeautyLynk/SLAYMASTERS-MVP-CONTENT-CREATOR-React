import React from 'react'

import PropTypes from 'prop-types'

import './speaker-card.css'

const SpeakerCard = (props) => {
  return (
    <div id="slaymasters" className="speaker-card-speaker-card">
      <div className="speaker-card-image-container">
        <img
          alt={props.image_alt}
          src={props.image_src}
          className="speaker-card-image"
        />
      </div>
      <span className="speaker-card-first-name">{props.firstName}</span>
      <span className="speaker-card-last-name">{props.lastName}</span>
      <span className="speaker-card-text">{props.role}</span>
    </div>
  )
}

SpeakerCard.defaultProps = {
  firstName: 'ELLY',
  lastName: 'TORRES',
  image_alt: 'image',
  role: 'PROFESSIONAL HAIRSTYLIST',
  image_src: '/playground_assets/eloina%20torres-300h.png',
}

SpeakerCard.propTypes = {
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  image_alt: PropTypes.string,
  role: PropTypes.string,
  image_src: PropTypes.string,
}

export default SpeakerCard
