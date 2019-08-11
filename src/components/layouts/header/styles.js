import { Link } from "gatsby"
import styled from "styled-components"

export const Header = styled.header`
  background: rebeccapurple;
  margin-bottom: 1.45rem;
`

export const Container = styled.div`
  max-width: 960px;
  margin: 0 auto;
  padding: 1.45rem 1.0875rem;
`

export const StyledLink = styled(Link)`
  color: ${props => props.color || "white"};
  text-decoration: none;
`
