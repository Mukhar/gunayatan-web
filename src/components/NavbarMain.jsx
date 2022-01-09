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
                        {/* onClick={() => setToggle(toggle => !toggle)} */}
                        {/* <Nav.Link to="/about" onClick={handleNavbarExpand}>Features</Nav.Link> */}
                        <Link to="/" onClick={handleNavbarExpand}><Nav.Item id="nav-home" active>Home</Nav.Item></Link>
                        <NavLink to="/about"> <Nav.Item data-bs-toggle="collapse" data-bs-target=".navbar-collapse">14 Gunsthan</Nav.Item></NavLink>
                        <NavDropdown title="About Us" >
                            <NavDropdown.Item href="#action3">Muni Pramansagar Ji</NavDropdown.Item>
                            <NavDropdown.Item href="#action3">Managing Comittee</NavDropdown.Item>
                            <NavDropdown.Item href="#action3">Core Members</NavDropdown.Item>
                            {/* <NavDropdown.Divider /> */}
                            <NavDropdown.Item href="#action5">
                                Something else here
                            </NavDropdown.Item>
                        </NavDropdown>
                        <NavLink to="/schemes"> <Nav.Item >Schemes</Nav.Item></NavLink>
                        <NavLink to="/progress"><Nav.Item>Progress</Nav.Item></NavLink>
                        <NavLink to="/donate"><Nav.Item >Donate</Nav.Item></NavLink>

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
