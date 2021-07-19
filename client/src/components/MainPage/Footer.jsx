import React from 'react';
import '../../styles/Footer.css';
import { Nav, Container, Navbar } from 'react-bootstrap';

const Footer = () => {
    return(
      <Navbar className='nav-footer' bg='dark' variant="dark">
        <Container>
            <Navbar.Brand href="/" className="ml-3"> <img alt="logo" src="/logo-white.png" width="100" id="footerimg"/> </Navbar.Brand>
            <Nav className="justify-content-center">
              <Nav.Link href="/breakfast" className="link"> BREAKFAST</Nav.Link>
              <span className="circle-white">&bull;</span>
              <Nav.Link href="/brunch" className="link">BRUNCH</Nav.Link>
              <span className="circle-white">&bull;</span>
              <Nav.Link href="/lunch" className="link">LUNCH</Nav.Link>
              <span className="circle-white">&bull;</span>
              <Nav.Link href="/dinner" className="link">DINNER</Nav.Link>
            </Nav>
              <span className="span-container">Baby's Food Place <br /> copyright &copy; 2021</span>
        </Container>
      </Navbar>
    )
}

export default Footer;