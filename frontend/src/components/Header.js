import React from 'react'
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

const Header = () => {
  return (
  <Navbar className="nav-text p-2 mt-3" variant='dark' expand="lg">
    <Container className='px-3'>
      <LinkContainer to='/'>
        <Navbar.Brand className='nav-brand'>Blockchain & DeFi <br/> Resources</Navbar.Brand>
      </LinkContainer>

      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        
        <Nav className="ml-auto">
          <LinkContainer to='/blockchain'>
            <Nav.Link>Blockchain</Nav.Link>
          </LinkContainer>
          <LinkContainer to='/ethereum'>
            <Nav.Link>Ethereum</Nav.Link>
          </LinkContainer>

          <NavDropdown title="DeFi" id="basic-nav-dropdown">
            <LinkContainer to='/defi'>
              <NavDropdown.Item>DeFi</NavDropdown.Item>
            </LinkContainer>
            <LinkContainer to='/dapps'>
              <NavDropdown.Item>Dapps</NavDropdown.Item>
            </LinkContainer>
            <LinkContainer to='/nft'>
              <NavDropdown.Item>NFT</NavDropdown.Item>
            </LinkContainer>
            <LinkContainer to='/games'>
              <NavDropdown.Item>Games</NavDropdown.Item>
            </LinkContainer>
          </NavDropdown>

          <LinkContainer to='/exchanges'>
            <Nav.Link>Exchanges</Nav.Link>
          </LinkContainer>
          <LinkContainer to='/links'>
            <Nav.Link>Links</Nav.Link>
          </LinkContainer>
          <LinkContainer to='/literature'>
            <Nav.Link>Literature</Nav.Link>
          </LinkContainer>
          <LinkContainer to='/developer'>
            <Nav.Link href="#link">Developer</Nav.Link>
          </LinkContainer>
          <LinkContainer to='/wallets'>
            <Nav.Link>Wallets</Nav.Link>
          </LinkContainer>

        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default Header