// @flow

import React from 'react'
import { Navbar } from 'react-bootstrap'

import './styles.css'

type Props = {
  children?: typeof React.PropTypes.node
}

const Header = ({ children }: Props) =>
  <Navbar fixedTop className="nav">
    <Navbar.Header className="title">
      {children}
    </Navbar.Header>
  </Navbar>

export default Header
