import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import Navigation from '../components/navigation'
import './l-a-n-d-i-n-g-p-a-g-e.css'

const LANDINGPAGE = (props) => {
  return (
    <div className="l-a-n-d-i-n-g-p-a-g-e-container">
      <Helmet>
        <title>
          SLAYMASTERS DASHBOARD | Empowering community for YOUR beauty journey
        </title>
        <meta
          name="description"
          content="Share and Teach how to show up every day with photo-ready hair.\n#nobadhairdays"
        />
        <meta
          property="og:title"
          content="SLAYMASTERS DASHBOARD | Empowering community for YOUR beauty journey"
        />
        <meta
          property="og:description"
          content="Share and Teach how to show up every day with photo-ready hair.\n#nobadhairdays"
        />
      </Helmet>
      <Navigation rootClassName="navigation-root-class-name"></Navigation>
      <main className="l-a-n-d-i-n-g-p-a-g-e-main">
        <div className="l-a-n-d-i-n-g-p-a-g-e-hero section-container">
          <div className="l-a-n-d-i-n-g-p-a-g-e-max-width max-content-container">
            <div className="l-a-n-d-i-n-g-p-a-g-e-content-container">
              <Link
                to="/d-a-s-h-b-o-a-r-d"
                className="l-a-n-d-i-n-g-p-a-g-e-navlink"
              >
                <h1 className="l-a-n-d-i-n-g-p-a-g-e-text heading1">
                  <span>TIME to Slay!</span>
                  <span></span>
                </h1>
              </Link>
              <span className="l-a-n-d-i-n-g-p-a-g-e-text03">
                <span>
                  Our team appreacitaes your talent and effort in making
                  #everyoneBeauty more than a hashtag. Login to get all the
                  tools to teach the world to slay!
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <br></br>
                <span></span>
                <br></br>
                <span>
                  xo,
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <br></br>
                <span></span>
                <br></br>
                <span>
                  slaymaster team
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </span>
              <div className="l-a-n-d-i-n-g-p-a-g-e-btns-container">
                <Link
                  to="/s-i-g-n-i-n-p-a-g-e"
                  className="l-a-n-d-i-n-g-p-a-g-e-secondary button button-outline button-lg-border"
                >
                  <span>
                    <span>
                      SIGN IN
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </span>
                </Link>
              </div>
            </div>
            <video
              src="https://sduxzxrctlxqqbmtfsqr.supabase.co/storage/v1/object/sign/dashboardvid/slay masters.mp4?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkYXNoYm9hcmR2aWQvc2xheSBtYXN0ZXJzLm1wNCIsImlhdCI6MTY0OTAxNDA4NCwiZXhwIjoxOTY0Mzc0MDg0fQ.cUn9h_tfCxTfTuygMZ8N-LDKe4HV1LPbwbqdFDKOOes"
              muted="true"
              poster="https://play.teleporthq.io/static/svg/videoposter.svg"
              controls="true"
              className="l-a-n-d-i-n-g-p-a-g-e-video"
            ></video>
          </div>
        </div>
      </main>
      <footer className="l-a-n-d-i-n-g-p-a-g-e-footer">
        <div className="l-a-n-d-i-n-g-p-a-g-e-container1">
          <img
            alt="logo"
            src="/playground_assets/pg-slay-masters-logo-final-stacked-_1_-1500h.jpg"
            className="l-a-n-d-i-n-g-p-a-g-e-image"
          />
          <nav className="l-a-n-d-i-n-g-p-a-g-e-nav"></nav>
        </div>
        <div className="l-a-n-d-i-n-g-p-a-g-e-separator"></div>
        <div className="l-a-n-d-i-n-g-p-a-g-e-container2">
          <span className="l-a-n-d-i-n-g-p-a-g-e-text15">
            © 2022 SLAYMASTERS, All Rights Reserved.
          </span>
          <div className="l-a-n-d-i-n-g-p-a-g-e-icon-group">
            <svg
              viewBox="0 0 950.8571428571428 1024"
              className="l-a-n-d-i-n-g-p-a-g-e-icon"
            >
              <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
            </svg>
            <svg
              viewBox="0 0 877.7142857142857 1024"
              className="l-a-n-d-i-n-g-p-a-g-e-icon2"
            >
              <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
            </svg>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default LANDINGPAGE
