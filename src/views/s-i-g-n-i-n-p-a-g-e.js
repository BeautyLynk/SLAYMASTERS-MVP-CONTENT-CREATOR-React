import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import Navigation from '../components/navigation'
import './s-i-g-n-i-n-p-a-g-e.css'

const SIGNINPAGE = (props) => {
  return (
    <div className="s-i-g-n-i-n-p-a-g-e-container">
      <Helmet>
        <title>
          SIGN IN PAGE - SLAYMASTERS DASHBOARD | Empowering community for YOUR
          beauty journey
        </title>
        <meta
          name="description"
          content="Share and Teach how to show up every day with photo-ready hair.\n#nobadhairdays"
        />
        <meta
          property="og:title"
          content="SIGN IN PAGE - SLAYMASTERS DASHBOARD | Empowering community for YOUR beauty journey"
        />
        <meta
          property="og:description"
          content="Share and Teach how to show up every day with photo-ready hair.\n#nobadhairdays"
        />
      </Helmet>
      <Navigation rootClassName="navigation-root-class-name2"></Navigation>
      <main className="s-i-g-n-i-n-p-a-g-e-main">
        <div className="s-i-g-n-i-n-p-a-g-e-hero section-container"></div>
        <h1 className="s-i-g-n-i-n-p-a-g-e-text">
          <span>
            sign-in
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
        </h1>
      </main>
      <div className="s-i-g-n-i-n-p-a-g-e-container1">
        <span>
          EMAIL
          <span
            dangerouslySetInnerHTML={{
              __html: ' ',
            }}
          />
        </span>
        <div className="s-i-g-n-i-n-p-a-g-e-container2">
          <input type="text" placeholder="placeholder" className="input" />
        </div>
      </div>
      <div className="s-i-g-n-i-n-p-a-g-e-container3"></div>
      <Link
        to="/d-a-s-h-b-o-a-r-d"
        className="s-i-g-n-i-n-p-a-g-e-navlink button"
      >
        SUBMIT
        <span
          dangerouslySetInnerHTML={{
            __html: ' ',
          }}
        />
      </Link>
      <footer className="s-i-g-n-i-n-p-a-g-e-footer">
        <div className="s-i-g-n-i-n-p-a-g-e-container4">
          <img
            alt="logo"
            src="/playground_assets/pg-slay-masters-logo-final-stacked-_1_-1500h.jpg"
            className="s-i-g-n-i-n-p-a-g-e-image"
          />
          <nav className="s-i-g-n-i-n-p-a-g-e-nav"></nav>
        </div>
        <div className="s-i-g-n-i-n-p-a-g-e-separator"></div>
        <div className="s-i-g-n-i-n-p-a-g-e-container5">
          <span className="s-i-g-n-i-n-p-a-g-e-text3">
            © 2022 SLAYMASTERS, All Rights Reserved.
          </span>
          <div className="s-i-g-n-i-n-p-a-g-e-icon-group">
            <svg
              viewBox="0 0 950.8571428571428 1024"
              className="s-i-g-n-i-n-p-a-g-e-icon"
            >
              <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
            </svg>
            <svg
              viewBox="0 0 877.7142857142857 1024"
              className="s-i-g-n-i-n-p-a-g-e-icon2"
            >
              <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
            </svg>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default SIGNINPAGE
