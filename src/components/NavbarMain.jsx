import React, { useState } from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
// import Form from 'react-bootstrap/Form'
// import FormControl from 'react-bootstrap/FormControl'
// import Button from 'react-bootstrap/Button'
import "./../assets/css/navbar.css";
import logo from "./../assets/images/gunayatan_logo.png";
import { Link, NavLink } from 'react-router-dom'
// import logo from "./../assets/icons/11.png"
// import "./../assets/css/button3dstyle.css"
export default function NavbarMain() {
    function handleNavbarExpand(params) {
        console.log("navbar selected");
        setexpanded(!expanded);
    }
    var [expanded, setexpanded] = useState(false);

    return (<>
        <div id='navbar' className="OrangeBar"></div>
        <Navbar expanded={expanded} id="navbar" bg="light" expand="lg" sticky="top" onSelect={handleNavbarExpand} >
            <Container fluid className='hoverwhite'>
                <Navbar.Brand href="#"><img className='logo' src={logo} alt='logo' /></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" onClick={handleNavbarExpand} />
                <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end" >
                    <Nav
                        className="me-2 my-2 my-lg-0"
                        style={{ maxHeight: '100' }}
                        navbarScroll
                        onSelect={handleNavbarExpand}>
                        <Link to="/" onClick={handleNavbarExpand}><Nav.Item id="nav-home" active>Home</Nav.Item></Link>
                        <NavLink to="/explore" onClick={handleNavbarExpand} > <Nav.Item data-bs-toggle="collapse" data-bs-target=".navbar-collapse">14 Gunsthan</Nav.Item></NavLink>
                        <NavDropdown title="About Us" >
                            <Link to="aboutUs" onClick={handleNavbarExpand}><NavDropdown.Item >Muni Pramansagar Ji</NavDropdown.Item></Link>
                            <NavLink to="/aboutUs#Organisation" onClick={handleNavbarExpand}><NavDropdown.Item >Managing Comittee</NavDropdown.Item></NavLink>
                            <NavLink to="/prabandh" onClick={handleNavbarExpand}><NavDropdown.Item >Core Members</NavDropdown.Item></NavLink>
                            {/* <NavDropdown.Divider /> */}
                            <NavLink to="/prabandh" onClick={handleNavbarExpand}><NavDropdown.Item >Contact Us</NavDropdown.Item></NavLink>
                        </NavDropdown>
                        <NavLink to="/schemes" onClick={handleNavbarExpand}> <Nav.Item >Schemes</Nav.Item></NavLink>
                        <NavLink to="/progress" onClick={handleNavbarExpand}><Nav.Item>Progress</Nav.Item></NavLink>
                        <NavLink to="/donation" onClick={handleNavbarExpand}><Nav.Item >Donate</Nav.Item></NavLink>

                        {/* <Button variant="outline-success">Schemes</Button> */}
                        {/* <Button variant="outline-success">Progress</Button> */}
                        {/* <Nav.Item href="#action2">Donation</Nav.Item> */}
                    </Nav>
                    {/* <Form className="d-flex">
                        <FormControl
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                        />                        
                    </Form> */}
                    {/* <Button variant="outline-success" className='threed fs-6'>
                        Donate
                    </Button> */}
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </>
    )
}
