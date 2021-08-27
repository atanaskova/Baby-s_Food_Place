import React, { useEffect, useState } from 'react';
import {useDispatch} from 'react-redux';
import {useHistory} from 'react-router-dom';
import decode from 'jwt-decode';
import '../../styles/Header.css';
import { Nav, Container, Navbar, Button, Row } from 'react-bootstrap';

const Header = () => {
    const [user,setUser]=useState(JSON.parse(localStorage.getItem('profile')));
    const dispatch=useDispatch();
    const history=useHistory();
    
    const logout=()=>{
      dispatch({type:'LOGOUT' });
      history.push('/');
      setUser(null);
    };

    useEffect(()=>{
      if(user && user.token){
      const token=user.token;

      if(token){
        const decodedToken=decode(token);

        if(decodedToken.exp *1000<new Date().getTime()) logout();
      }
      setUser((JSON.parse(localStorage.getItem('profile'))));
    }},[]);

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
            {user ? (
              <span>
                  {user.result.imageUrl? (
                    <Row className="user">
                      <img className="avatar" alt="avatar" src={user.result.imageUrl}/>
                      <div className="username">{user.result.name}</div>
                    </Row>
                  ):(
                    user.result.surname? (
                    <Row className="user">
                      <div className="avatar2">{user.result.name.charAt(0)}</div>
                      <div className="username">{user.result.name}  {user.result.surname}</div>
                    </Row>
                  ):(
                    <Row className="user">
                      <div className="avatar2">{user.result.name.charAt(0)}</div>
                      <div className="username">{user.result.name}</div>
                    </Row>
                    )
                  )}
                <Row className="actions">
                <Nav.Link className="myRecipesLink" href="/myrecipes">MY RECIPES</Nav.Link>
                <span className="circle-grey">&bull;</span>
                <Nav.Link className="myProfileLink" href="/myprofile">MY PROFILE</Nav.Link>
                <span className="circle-grey">&bull;</span>
                <Nav.Link className="logoutLink" onClick={logout}>LOG OUT</Nav.Link>
                </Row>
              </span>) : (
              <span>
               <Button className="loginButton" href="/login">LOG IN</Button>
               <span className="mr-2 ml-2 mt-1">or</span>
               <Button className="createAccountButton" href="/register">CREATE ACCOUNT</Button>
              </span>
              )}
          </Container>
        </Navbar>
    )
}

export default Header; 