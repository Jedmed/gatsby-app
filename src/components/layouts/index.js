/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'

import HeaderSection from './header'
import { Container } from './styles'

const Layout = ({ children }) => {
  const { title } = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <Fragment>
      <HeaderSection siteTitle={title} />
      <Container>
        <main>{children}</main>
        <footer>
          {`© ${new Date().getFullYear()} , Built with`}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </Container>
    </Fragment>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
