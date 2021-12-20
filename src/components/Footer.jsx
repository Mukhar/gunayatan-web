import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import "./../assets/css/footer.css"
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
// import gun from './../assets/icons/Gunayatan_Black.png'
import gun from './../assets/icons/Gunayatan_Grey.svg'
import logo from "./../assets/images/gunayatan_logo.png"

export default function Footer() {
    return (<>
        <Row style={{ justifyContent: "center" }}>
            <img src={gun} style={{ maxWidth: "200px" }} ></img>
        </Row>
        <Container fluid className='footer py-2' >
            <Container>
                <Row className='py-2 row justify-content-between  border-bottom border-3 border-color-gold'>
                    <Col xs={4} ><img className="footer-logo" src={logo} alt='Logo' /></Col>
                    <Col xs={6} className='my-auto'><Form className="d-flex">
                        <FormControl
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                        />
                        <Button variant="outline-warning">Search</Button>
                    </Form>
                    </Col>
                </Row>
                <Row lg={5} xs={2} className='py-2'>
                    <Col lg={true}>
                        <Col >EXPLORE</Col>
                        <Col >Swagatam</Col>
                        <Col >Mandir</Col>
                        <Col >Abhishek Mandap</Col>
                    </Col>
                    <Col lg={true} >
                        <Col >VISIT</Col>
                        <Col >Timing</Col>
                        <Col >Facility</Col>
                        <Col >How To Reach</Col>
                        <Col >what To See</Col>
                        <Col >Tickets</Col>
                        <Col >Dress Code</Col>
                        <Col >Security</Col>
                    </Col>
                    <Col lg={true}>
                        <Col >NEWS</Col>
                        <Col >Swagatam</Col>
                        <Col >Mandir</Col>
                        <Col >Abhishek Mandap</Col>
                        <Col lg={true}>
                            <Col>DOWNLOADS</Col>
                            <Col>Visitor Guide</Col>
                            <Col>Photo Gallery</Col>

                        </Col>

                    </Col>
                    <Col lg={true}>
                        <Col >ABOUT US</Col>
                        <Col >Organisation</Col>
                        <Col >Inspirer</Col>
                        <Col >Timeline</Col>
                        <Col >Openions</Col>
                        <Col >Contact Us</Col>
                    </Col>
                    <Col lg={true}>
                        <Col >LINKS</Col>
                        <Col >Swagatam</Col>
                        <Col >Mandir</Col>
                        <Col >Abhishek Mandap</Col>
                    </Col>
                </Row>
                <Row className="justify-content-center"> @Copyright Gunaytan.org</Row>
            </Container>

        </Container>
    </>)
}
