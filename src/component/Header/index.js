// @flow

import React from 'react'
import { Navbar } from 'react-bootstrap'
import './styles.css'

type Props = {
  children?: typeof React.PropTypes.node
}

const Header = ({ children }: Props) =>
  <Navbar fixedTop>
    <Navbar.Header>
      <Navbar.Brand className="title">{children}</Navbar.Brand>
    </Navbar.Header>
  </Navbar>

export default Header
