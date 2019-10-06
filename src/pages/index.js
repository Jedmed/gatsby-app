import React from 'react'
import { Link } from 'gatsby'

import SEO from 'components/seo'
import Image from 'components/image'
import Layout from 'components/layouts'

import { ImageWrapper } from './styles'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi Kim</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <ImageWrapper>
      <Image />
    </ImageWrapper>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
