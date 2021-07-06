import React from 'react';
import '../../styles/Header.css';
import { Nav, Container, Navbar, Button } from 'react-bootstrap';


const Header = () => {
    return(
        <Navbar className='nav-header'>
          <Container>
            <Navbar.Brand href="/"> <img alt="logo" src="/logo-baby.png" width="100"/> </Navbar.Brand>
            <Nav className="justify-content-center">
              <Nav.Link href="/breakfast" className="link">Breakfast</Nav.Link>
              <span className="circle-orange">&bull;</span>
              <Nav.Link href="/brunch" className="link">Brunch</Nav.Link>
              <span className="circle-orange">&bull;</span>
              <Nav.Link href="/lunch" className="link">Lunch</Nav.Link>
              <span className="circle-orange">&bull;</span>
              <Nav.Link href="/dinner" className="link">Dinner</Nav.Link>
            </Nav>
            <span>
               <Button variant="outline-secondary" size="sm" href="/login">Login</Button>
               <span className="mr-2 ml-2 mt-1">or</span>
               <Button className="createAccountButton" size="sm" href="/register">Create Account</Button>
            </span>
          </Container>
        </Navbar>
    )
}

export default Header; 