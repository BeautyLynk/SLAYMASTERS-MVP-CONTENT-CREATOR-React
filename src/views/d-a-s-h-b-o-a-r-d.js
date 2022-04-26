import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import Heading2 from '../components/heading2'
import AppComponent from '../components/component'
import './d-a-s-h-b-o-a-r-d.css'

const DASHBOARD = (props) => {
  return (
    <div className="d-a-s-h-b-o-a-r-d-container">
      <Helmet>
        <title>
          DASHBOARD - SLAYMASTERS DASHBOARD | Empowering community for YOUR
          beauty journey
        </title>
        <meta
          name="description"
          content="Share and Teach how to show up every day with photo-ready hair.\n#nobadhairdays"
        />
        <meta
          property="og:title"
          content="DASHBOARD - SLAYMASTERS DASHBOARD | Empowering community for YOUR beauty journey"
        />
        <meta
          property="og:description"
          content="Share and Teach how to show up every day with photo-ready hair.\n#nobadhairdays"
        />
      </Helmet>
      <div className="d-a-s-h-b-o-a-r-d-h-e-a-d-e-r section">
        <img
          alt="image"
          src="/playground_assets/pg-slay-masters-logo-final-stacked-_1_-1500h.jpg"
          className="d-a-s-h-b-o-a-r-d-logo"
        />
        <span className="d-a-s-h-b-o-a-r-d-a-l-p-h-a">ALPHA</span>
        <div className="d-a-s-h-b-o-a-r-d-container1">
          <Link to="/" className="d-a-s-h-b-o-a-r-d-navlink button">
            LOG OUT
          </Link>
        </div>
      </div>
      <div className="d-a-s-h-b-o-a-r-d-w-e-l-c-o-m-e section">
        <span className="d-a-s-h-b-o-a-r-d-text">WelCOME Paul!</span>
      </div>
      <div className="d-a-s-h-b-o-a-r-d-u-p-d-a-t-e-s section">
        <span className="heading1">UPDATES</span>
      </div>
      <div className="d-a-s-h-b-o-a-r-d-container2 section">
        <span className="d-a-s-h-b-o-a-r-d-text02">
          <span>
            ALL UPDATES WILL BE SHARED VIA VIDEO AND VIA EMAIL AS THINGS ARE
            HAPPENING. WE VALUE YOUR YOUR FEEDBACK !
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
            XO,
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <br></br>
          <span></span>
          <span>
            THE TEAM
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
        </span>
      </div>
      <div className="d-a-s-h-b-o-a-r-d-s-l-a-y-m-a-s-t-e-r-s-v-i-d-e-o section">
        <iframe
          src="https://player.gotolstoy.com/b8rw1dn163juj"
          allowFullScreen="true"
          className="d-a-s-h-b-o-a-r-d-iframe"
        ></iframe>
      </div>
      <Heading2></Heading2>
      <div className="d-a-s-h-b-o-a-r-d-c-a-l-e-n-d-a-r section">
        <iframe
          src="https://calendar.google.com/calendar/embed?src=c_sc33prns60tbqgd25suu5ejdrs%40group.calendar.google.com&amp;ctz=America%2FNew_York"
          className="d-a-s-h-b-o-a-r-d-iframe1"
        ></iframe>
      </div>
      <Heading2 heading="MAKE THE SLAY HAPPEN "></Heading2>
      <div className="d-a-s-h-b-o-a-r-d-container3 section">
        <span className="d-a-s-h-b-o-a-r-d-h3-u-p-c-o-m-i-n-g-a-s-s-i-g-n-e-n-t-s heading3">
          UPCOMING ASSIGNMENTS
        </span>
        <span className="d-a-s-h-b-o-a-r-d-h3-t-o-o-l-s heading3">
          TOOLS TO COMPLETE ASSIGNMENTS
        </span>
        <AppComponent></AppComponent>
        <a
          href="https://HTTP://WWW.VIMEO.COM"
          target="_blank"
          rel="noreferrer noopener"
          className="d-a-s-h-b-o-a-r-d-link"
        >
          <AppComponent
            button="UPLOAD TO VIMEO"
            link_button="VIMEO.COM"
            className="d-a-s-h-b-o-a-r-d-component1"
          ></AppComponent>
        </a>
        <AppComponent button="SCRIPTS"></AppComponent>
        <a
          href="https://tk8wnxtrmyu.typeform.com/to/jg8s2uvd"
          target="_blank"
          rel="noreferrer noopener"
          className="d-a-s-h-b-o-a-r-d-link1"
        >
          <AppComponent
            button="REFER A FRIEND TO BE SLAYMASTER "
            className="d-a-s-h-b-o-a-r-d-component3"
          ></AppComponent>
        </a>
        <AppComponent
          button="UPLOAD IMAGES"
          className="d-a-s-h-b-o-a-r-d-component4"
        ></AppComponent>
        <AppComponent button="CONSULTATION PROMPTS"></AppComponent>
        <a
          href="mailto:CONTENTCREATOR@BEAUTYLYNK.COM?subject=SLAYMASTER CONTENT CREATOR // HELP NEEDED"
          className="d-a-s-h-b-o-a-r-d-link2"
        >
          <AppComponent
            button="GET HELP"
            className="d-a-s-h-b-o-a-r-d-component6"
          ></AppComponent>
        </a>
        <AppComponent button="VIDEO GUIDELINES"></AppComponent>
      </div>
      <Heading2 heading="TRAINING VIDEOS"></Heading2>
      <div className="d-a-s-h-b-o-a-r-d-container4 section">
        <div className="d-a-s-h-b-o-a-r-d-consultations section">
          <video
            src="https://sduxzxrctlxqqbmtfsqr.supabase.co/storage/v1/object/sign/trainingvideos/My Lighting for YouTube Videos - CRISP CLEAR YOUTUBE videos (DAY &amp; NIGHT).mp4?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJ0cmFpbmluZ3ZpZGVvcy9NeSBMaWdodGluZyBmb3IgWW91VHViZSBWaWRlb3MgLSBDUklTUCBDTEVBUiBZT1VUVUJFIHZpZGVvcyAoREFZICYgTklHSFQpLm1wNCIsImlhdCI6MTY0OTgwNjUwMiwiZXhwIjoxOTY1MTY2NTAyfQ.t2PV_VP5pRMi-U2D9BfhU1QRZe7LnuxXT0nPuVDKer4"
            loop
            muted
            poster="/playground_assets/copy%20of%20knowledge%20base%20cards%20%20%5B1%5D-300h.png"
            controls
            className="video"
          ></video>
          <video
            src="https://sduxzxrctlxqqbmtfsqr.supabase.co/storage/v1/object/sign/trainingvideos/How to Make YouTube Videos on Your Phone (Beginners Tutorial).mp4?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJ0cmFpbmluZ3ZpZGVvcy9Ib3cgdG8gTWFrZSBZb3VUdWJlIFZpZGVvcyBvbiBZb3VyIFBob25lIChCZWdpbm5lcnMgVHV0b3JpYWwpLm1wNCIsImlhdCI6MTY0OTgwNjE2NiwiZXhwIjoxOTY1MTY2MTY2fQ.mswZ0w_nwi-969MYeXk8MmqjzaVay_orIv3wLoevgWQ"
            loop
            muted
            poster="/playground_assets/copy%20of%20knowledge%20base%20cards%20-300h.png"
            controls
            className="video"
          ></video>
          <video
            src="https://sduxzxrctlxqqbmtfsqr.supabase.co/storage/v1/object/sign/trainingvideos/TOP 12 Best Audio Tips for YouTube Videos.mp4?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJ0cmFpbmluZ3ZpZGVvcy9UT1AgMTIgQmVzdCBBdWRpbyBUaXBzIGZvciBZb3VUdWJlIFZpZGVvcy5tcDQiLCJpYXQiOjE2NDk4MDY4MjgsImV4cCI6MTk2NTE2NjgyOH0.-bMtI57IyuvyF9GuVqSv3fgP2R30VAXr5nm18hEJYuI"
            loop
            muted
            poster="/playground_assets/copy%20of%20knowledge%20base%20cards%20%20%5B2%5D-300h.png"
            controls
            className="video"
          ></video>
          <video
            src="https://sduxzxrctlxqqbmtfsqr.supabase.co/storage/v1/object/sign/trainingvideos/The Guide to Framing Your Video.mp4?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJ0cmFpbmluZ3ZpZGVvcy9UaGUgR3VpZGUgdG8gRnJhbWluZyBZb3VyIFZpZGVvLm1wNCIsImlhdCI6MTY0OTgwNzA2MCwiZXhwIjoxOTY1MTY3MDYwfQ.UDUXR-oos3toWCPUUBh1FiyESgkpPFGWWFEalgYwP0E"
            loop
            muted
            poster="/playground_assets/copy%20of%20knowledge%20base%20cards%20%20%5B3%5D-300h.png"
            controls
            className="video"
          ></video>
        </div>
      </div>
      <footer className="d-a-s-h-b-o-a-r-d-f-o-o-t-e-r section">
        <div className="d-a-s-h-b-o-a-r-d-container5">
          <img
            alt="logo"
            src="/playground_assets/pg-slay-masters-logo-final-stacked-_1_-1500h.jpg"
            className="d-a-s-h-b-o-a-r-d-image"
          />
        </div>
        <div className="d-a-s-h-b-o-a-r-d-separator"></div>
        <div className="d-a-s-h-b-o-a-r-d-container6">
          <span className="d-a-s-h-b-o-a-r-d-text10">
            © 2022 SLAYMASTERS, All Rights Reserved.
          </span>
          <div className="d-a-s-h-b-o-a-r-d-icon-group">
            <a
              href="https://slaymastercreators.tawk.help"
              className="d-a-s-h-b-o-a-r-d-f-a-q"
            >
              FAQ
            </a>
            <a
              href="https://TWITTER.COM/GOSLAYMASTERS"
              target="_blank"
              rel="noreferrer noopener"
              className="d-a-s-h-b-o-a-r-d-link3"
            >
              <svg
                viewBox="0 0 950.8571428571428 1024"
                className="d-a-s-h-b-o-a-r-d-icon"
              >
                <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
              </svg>
            </a>
            <a
              href="https://INSTAGRAM.COM/GOSLAYMASTERS"
              target="_blank"
              rel="noreferrer noopener"
              className="d-a-s-h-b-o-a-r-d-link4"
            >
              <svg
                viewBox="0 0 877.7142857142857 1024"
                className="d-a-s-h-b-o-a-r-d-icon2"
              >
                <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
              </svg>
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default DASHBOARD
