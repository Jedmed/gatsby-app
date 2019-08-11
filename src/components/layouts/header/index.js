import React from "react"
import PropTypes from "prop-types"

import { Heading } from "generic"

import { Header, Container, StyledLink } from "./styles"

const HeaderSection = ({ siteTitle }) => (
  <Header>
    <Container>
      <Heading>
        <StyledLink to="/">{siteTitle}</StyledLink>
      </Heading>
      <img src="/public/icons/logo.jpg" />
    </Container>
  </Header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default HeaderSection
