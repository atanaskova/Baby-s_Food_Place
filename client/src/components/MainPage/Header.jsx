import React from 'react';
import '../../styles/Header.css';
import { Nav, Container, Navbar, Button } from 'react-bootstrap';


const Header = () => {
    return(
        <Navbar className='nav-header'>
          <Container fluid>
            <Navbar.Brand href="/"> <img alt="logo" src="/logo-baby.png" width="120"/> </Navbar.Brand>
            <Nav className="justify-content-center header">
              <Nav.Link href="/breakfast" className="link">BREAKFAST</Nav.Link>
              <span className="circle-orange">&bull;</span>
              <Nav.Link href="/brunch" className="link">BRUNCH</Nav.Link>
              <span className="circle-orange">&bull;</span>
              <Nav.Link href="/lunch" className="link">LUNCH</Nav.Link>
              <span className="circle-orange">&bull;</span>
              <Nav.Link href="/dinner" className="link">DINNER</Nav.Link>
            </Nav>
            <span>
               <Button className="loginButton" href="/login">LOG IN</Button>
               <span className="mr-2 ml-2 mt-1">or</span>
               <Button className="createAccountButton" href="/register">CREATE ACCOUNT</Button>
            </span>
          </Container>
        </Navbar>
    )
}

export default Header; 