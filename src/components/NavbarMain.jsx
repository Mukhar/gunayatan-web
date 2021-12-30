import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import "./../assets/css/navbar.css";
import logo from "./../assets/images/gunayatan_logo.png";
import { Link, NavLink } from 'react-router-dom'
// import logo from "./../assets/icons/11.png"
// import "./../assets/css/button3dstyle.css"
export default function NavbarMain() {
    return (<>
        <div className="OrangeBar"></div>
        <Navbar id="navbar" bg="light" expand="lg" sticky="top">
            <Container fluid className='hoverwhite'>
                <Navbar.Brand href="#"><img className='logo' src={logo} /></Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll" className="justify-content-end">
                    <Nav
                        className="me-2 my-2 my-lg-0"
                        style={{ maxHeight: '100' }}
                        navbarScroll
                    >
                        <Link to="/"><Nav.Item id="nav-home" active>Home</Nav.Item></Link>
                        <NavLink to="/about"> <Nav.Item >14 Gunsthan</Nav.Item></NavLink>
                        <NavDropdown title="About Us" >
                            <NavDropdown.Item href="#action3">Muni Pramansagar Ji</NavDropdown.Item>
                            <NavDropdown.Item href="#action3">Managing Comittee</NavDropdown.Item>
                            <NavDropdown.Item href="#action3">Core Members</NavDropdown.Item>
                            <NavDropdown.Divider />
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
