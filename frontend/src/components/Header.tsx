import React from 'react'
import NavBar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { logout, reset } from '../features/auth/authSlice'


function Header() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  // @ts-ignore
  const { user } = useSelector((state) => state.auth)

  const onLogout = () => {
    // @ts-ignore
    dispatch(logout())
    dispatch(reset())
    navigate('/')
  }

  return (
    <NavBar bg='light' expand='lg'>
      <Container>
        <NavBar.Brand href='/'>GoalSetter</NavBar.Brand>
        <NavBar.Toggle aria-controls='basic-navbar-nav' />
        <NavBar.Collapse id='basic-navbar-nav'>
          {
            user ? 
            (
              <>
                {/* <Nav.Link href='/logout'>Logout</Nav.Link> */}
                <Button onClick={onLogout}>Logout</Button>
              </>
            ) : (
              <>
                <Nav.Link href='/register'>Register</Nav.Link>
                <Nav.Link href='/login'>Login</Nav.Link>
              </>
            )
          }
        </NavBar.Collapse>
      </Container>
    </NavBar>
  )
}

export default Header