import React, { Component, Fragment } from 'react'
import { Router } from '@reach/router'
import { NavBar, NavBarBrand } from '@brightleaf/elements'
import { Loading } from '../components/loading'
import './app.scss'
const About = React.lazy(() => import('../features/about'))
const Home = React.lazy(() => import('../features/home'))
const Contact = React.lazy(() => import('../features/contact'))

export default class App extends Component {
  render() {
    return (
      <Fragment>
        <NavBar isPrimary isFixedTop>
          <NavBarBrand
            src="/favicon-32x32.png"
            href="/"
            target="navTarget"
            width="32"
            height="32"
          />
        </NavBar>
        <h1>App</h1>
        <React.Suspense fallback={<Loading />}>
          <Router>
            <Home path="/" />
            <About path="/about" />
            <Contact path="/contact" />
          </Router>
        </React.Suspense>
      </Fragment>
    )
  }
}
