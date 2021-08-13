import React, { useEffect, useState } from 'react';
import {useDispatch} from 'react-redux';
import {useHistory} from 'react-router-dom';
import '../../styles/Header.css';
import { Nav, Container, Navbar, Button, Row } from 'react-bootstrap';

const Header = () => {
    // const [user,setUser]=useState(JSON.parse(localStorage.getItem('profile')));
    // const dispatch=useDispatch();
    // const history=useHistory();
    
    // const logout=()=>{
    //   dispatch({type:'LOGOUT' });
    //   history.push('/');
    //   setUser(null);
    // };

    // useEffect(()=>{
    //   let token='';
    //   user.token? token:user.token;
    //   setUser((JSON.parse(localStorage.getItem('profile'))));
    // },[])

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
            {/* {user ? (
              <span>
                <div className="user">
                  <img className="avatar" src={user.result.imageUrl}/>
                  {user.result.name}
                </div>
                <Row className="actions">
                <Nav.Link className="myRecipesLink" href="/myrecipes">MY RECIPES</Nav.Link>
                <span className="circle-grey">&bull;</span>
                <Nav.Link className="myProfileLink" href="/">MY PROFILE</Nav.Link>
                <span className="circle-grey">&bull;</span>
                <Nav.Link className="logoutLink" onClick={logout}>LOG OUT</Nav.Link>
                </Row>
              </span>) : ( */}
              <span>
               <Button className="loginButton" href="/login">LOG IN</Button>
               <span className="mr-2 ml-2 mt-1">or</span>
               <Button className="createAccountButton" href="/register">CREATE ACCOUNT</Button>
              </span>
              {/* )} */}
          </Container>
        </Navbar>
    )
}

export default Header; 