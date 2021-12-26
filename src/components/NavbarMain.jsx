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
// import logo from "./../assets/icons/11.png"
// import "./../assets/css/button3dstyle.css"
export default function NavbarMain() {
    return (<>
        <div className="OrangeBar"></div>
        <Navbar bg="light" expand="lg" sticky="top">
            <Container fluid>
                <Navbar.Brand href="#"><img className='logo' src={logo} /></Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll" className="justify-content-end">
                    <Nav
                        className="me-2 my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link href="#action1" >Home</Nav.Link>
                        <Nav.Link href="#action2">14 Gunsthan</Nav.Link>
                        <NavDropdown title="About Us" id="navbarScrollingDropdown">
                            <NavDropdown.Item href="#action3">Muni Pramansagar Ji</NavDropdown.Item>
                            <NavDropdown.Item href="#action3">Managing Comittee</NavDropdown.Item>
                            <NavDropdown.Item href="#action3">Core Members</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action5">
                                Something else here
                            </NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="#action3">Schemes</Nav.Link>
                        <Nav.Link href="#action4">Progress</Nav.Link>
                        {/* <Nav.Link href="#action2">Donation</Nav.Link> */}

                        {/* <Nav.Link href="#" disabled>
                            Link
                        </Nav.Link> */}
                    </Nav>
                    {/* <Form className="d-flex">
                        <FormControl
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                        />                        
                    </Form> */}
                    <Button variant="outline-success" className='threed '>
                        Donate
                    </Button>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </>
    )
}
