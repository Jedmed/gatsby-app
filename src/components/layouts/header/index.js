import React from 'react'
import PropTypes from 'prop-types'

import { Heading } from 'components/common/generic'

import { Header, Container, StyledLink } from './styles'

const HeaderSection = ({ siteTitle }) => (
  <Header>
    <Container>
      <Heading>
        <StyledLink to="/">{siteTitle}</StyledLink>
      </Heading>
      <img src="/public/icons/logo.jpg" alt="logo" />
    </Container>
  </Header>
)

HeaderSection.propTypes = {
  siteTitle: PropTypes.string,
}

HeaderSection.defaultProps = {
  siteTitle: ``,
}

export default HeaderSection
