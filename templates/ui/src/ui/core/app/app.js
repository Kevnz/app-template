import React, { Fragment } from 'react'
import { Router } from '@reach/router'
import { NavBar, NavBarBrand, Section } from '@brightleaf/elements'
import { Loading } from 'ui/components/loading'
import { AuthProvider } from 'ui/core/context/auth'
import { AppProvider } from 'ui/core/context/app'
import './app.scss'
const About = React.lazy(() => import('ui/features/about'))
const Home = React.lazy(() => import('ui/features/home'))
const Contact = React.lazy(() => import('ui/features/contact'))

export default () => {
  return (
    <AuthProvider>
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
            </Router>
          </React.Suspense>
        </Section>
      </AppProvider>
    </AuthProvider>
  )
}
