import React from 'react'
import NavBar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'

function Header() {
  return (
    <NavBar bg='light' expand='lg'>
      <Container>
        <NavBar.Brand href='/'>GoalSetter</NavBar.Brand>
        <NavBar.Toggle aria-controls='basic-navbar-nav' />
        <NavBar.Collapse id='basic-navbar-nav'>
          <Nav.Link href='/register'>Register</Nav.Link>
          <Nav.Link href='/login'>Login</Nav.Link>
        </NavBar.Collapse>
      </Container>
    </NavBar>
  )
}

export default Header