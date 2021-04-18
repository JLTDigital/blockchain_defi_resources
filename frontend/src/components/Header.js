import React from 'react'
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap'

const Header = () => {
  return (
  <Navbar bg="danger" expand="lg">
    <Container>
      <Navbar.Brand href="#home">Blockchain & DeFi Resources</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link href="#home">Blockchain</Nav.Link>
          <Nav.Link href="#link">Ethereum</Nav.Link>
          <NavDropdown title="Dapps" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">DeFi</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">NFT</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Games</NavDropdown.Item>
          </NavDropdown>
            <Nav.Link href="#home">Exchanges</Nav.Link>
            <Nav.Link href="#link">Links</Nav.Link>
            <Nav.Link href="#link">Literature</Nav.Link>
            <Nav.Link href="#link">Developer</Nav.Link>
            <Nav.Link href="#link">Wallets</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default Header
