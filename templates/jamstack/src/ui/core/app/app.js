import React, { Fragment } from 'react'
import { Router } from '@gatsbyjs/reach-router'
import { NavBar, NavBarBrand, Section } from '@brightleaf/elements'
import { IdentityContextProvider } from 'react-netlify-identity'
import { Loading } from 'components/loading'
import { AppProvider } from 'core/context/app'
import './app.scss'
const About = React.lazy(() => import('features/about'))
const Home = React.lazy(() => import('features/home'))
const Contact = React.lazy(() => import('features/contact'))
const Login = React.lazy(() => import('features/login'))
const Accept = React.lazy(() => import('features/accept'))
export default () => {
  const url = 'URL'
  return (
    <IdentityContextProvider url={url}>
      <AppProvider>
        <NavBar isPrimary isFixedTop className="is-radiusless">
          <NavBarBrand
            src="/favicon-32x32.png"
            href="/"
            target="navTarget"
            width="32"
            height="32"
          />
        </NavBar>
        <Section>
          <React.Suspense fallback={<Loading />}>
            <Router>
              <Home path="/" />
              <About path="/about" />
              <Contact path="/contact" />
              <Login path="/login" />
              <Accept path="/accept-invite" />
            </Router>
          </React.Suspense>
        </Section>
      </AppProvider>
    </IdentityContextProvider>
  )
}
