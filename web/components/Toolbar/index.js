import React from 'react'
import styled from 'react-emotion'

import {font} from '../../core/style'

const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 3.02rem;

  color: white;
  font-family: ${font};
  font-weight: 300;
  background: ${props => props.color || 'rgb(61, 63, 77)'};
  box-shadow: 0 2px 5px 0 rgba(0,0,0,0.16), 0 2px 10px 0 rgba(0,0,0,0.12);
  transition: 0.4s cubic-bezier(0.22, 0.61, 0.36, 1) all;
`

const Name = styled.div`
  display: flex;
  align-items: center;

  padding-left: 0.6em;
  font-size: 1.15em;
`

const Left = styled.div`
  display: flex;
  margin-left: 1.4em;
`

const Section = styled.div`
  display: flex;
`

const Toolbar = ({title, color, left, right, children}) => (
  <Nav color={color}>
    <Left>
      {left}
      {title && <Name>{title}</Name>}
    </Left>
    {children}
    <Section>
      {right}
    </Section>
  </Nav>
)

export {IconLink, IconButton} from './IconButton'

export default Toolbar
