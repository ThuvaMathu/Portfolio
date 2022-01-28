import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from 'react-bootstrap/Navbar';
import { Nav } from 'react-bootstrap';

export default function Navbars() {

  return (
   <>
      <Navbar collapseOnSelect expand="lg" id="myHeader" bg="primary" style={{margin:'0px',position:'fixed',top:'0px',textTransform:'uppercase',fontWeight:'bold',width:'100%',zIndex:1}} >
  <Navbar.Brand href="#home" style={{color:'white'}}> Diginess</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav style={{marginRight:'auto'}}></Nav>
    <Nav >
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#prices">Pricing</Nav.Link>
      <Nav.Link href="#features">Features</Nav.Link>
    
    </Nav>
   
      
  </Navbar.Collapse>

</Navbar>
    </>
  );
}
