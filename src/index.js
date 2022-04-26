import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './style.css'
import DASHBOARDAbdou from './views/d-a-s-h-b-o-a-r-d-abdou'
import SIGNINPAGE from './views/s-i-g-n-i-n-p-a-g-e'
import LANDINGPAGE from './views/l-a-n-d-i-n-g-p-a-g-e'
import Uploadpage from './views/uploadpage'
import DASHBOARD from './views/d-a-s-h-b-o-a-r-d'
import DASHBOARDOld1 from './views/d-a-s-h-b-o-a-r-d-old1'

const App = () => {
  return (
    <Router>
      <div>
        <Route
          exact
          component={DASHBOARDAbdou}
          path="/d-a-s-h-b-o-a-r-d-abdou"
        />
        <Route exact component={SIGNINPAGE} path="/s-i-g-n-i-n-p-a-g-e" />
        <Route exact component={LANDINGPAGE} path="/" />
        <Route exact component={Uploadpage} path="/uploadpage" />
        <Route exact component={DASHBOARD} path="/d-a-s-h-b-o-a-r-d" />
        <Route exact component={DASHBOARDOld1} path="/d-a-s-h-b-o-a-r-d-old1" />
      </div>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
