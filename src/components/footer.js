import React from 'react'

import PropTypes from 'prop-types'

import './footer.css'

const Footer = (props) => {
  return (
    <footer
      className={`footer-footer section-container ${props.rootClassName} `}
    >
      <div className="footer-max-width max-content-container">
        <div className="footer-banner">
          <h1 className="footer-text heading2">
            <span>Sign-up today to transform your hair journey.</span>
          </h1>
          <span className="footer-text02">
            <span>#NOMOREBADHAIRDAYS</span>
          </span>
          <div className="footer-btns-container">
            <button className="footer-register-now button-primary button-lg button">
              register NOW
            </button>
            <button className="footer-contact-us button button-outline button-lg-border">
              CONTACT US
            </button>
          </div>
        </div>
        <div className="footer-copyright">
          <span className="footer-text04">
            <span>
              <span>
                © All rights reserved
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span>
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </span>
            <a
              href="https://www.teleporthq.io"
              target="_blank"
              rel="noreferrer noopener"
            >
              <span className="footer-text08">@TeleportHQ.</span>
            </a>
            <span>
              <span>
                {' '}
                Powered by
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span>
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </span>
            <a
              href="https://www.vercel.com"
              target="_blank"
              rel="noreferrer noopener"
            >
              <span className="footer-text12">Vercel</span>
            </a>
            <span>
              <span>
                . Image source:
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span>
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </span>
            <a
              href="https://www.unsplash.com"
              target="_blank"
              rel="noreferrer noopener"
            >
              <span className="footer-text16">Unsplash</span>
            </a>
            <span>.</span>
          </span>
        </div>
      </div>
    </footer>
  )
}

Footer.defaultProps = {
  rootClassName: '',
  rootClassName1: '',
}

Footer.propTypes = {
  rootClassName: PropTypes.string,
  rootClassName1: PropTypes.string,
}

export default Footer
