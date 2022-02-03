import React from 'react';
import NavLink from './NavLink';
import { navLinks } from './navLinks';
import './Nav.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Navbar, Container, Nav, NavDropdown, } from 'react-bootstrap';
export default  function  Navs ()  {
	return (
		// <nav>
		// 	{navLinks.map(({ navLinkId, scrollToId }, idx) => (
		// 		<NavLink key={idx} navLinkId={navLinkId} scrollToId={scrollToId} />
		// 	))}
		// </nav>
		<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top" >
			
			<Navbar.Brand href="#home" style={{marginLeft:20}}>DIJINESS</Navbar.Brand>
			<Navbar.Toggle aria-controls="responsive-navbar-nav" />
			<Navbar.Collapse id="responsive-navbar-nav">
			<Nav style={{marginRight:'auto'}}></Nav>
					<Nav>
				{/* <Nav.Link href="#features">Features</Nav.Link>
				<Nav.Link href="#pricing">Pricing</Nav.Link> */}
				{navLinks.map(({ navLinkId, scrollToId }, idx) => (
		 		<NavLink key={idx} navLinkId={navLinkId} scrollToId={scrollToId} />
					))}
				</Nav>
				
				
				
			</Navbar.Collapse>
			
		</Navbar>
	);
};
