import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import "./../assets/css/footer.css"
import gun from './../assets/icons/Gunayatan_Black.png'
export default function Footer() {
    return (<>
        <Row ClassName="justify-content-center">
            <img src={gun} style={{ maxWidth: "200px" }} ></img>
        </Row>
        <Container fluid className='footer'>
            <Container>
                <Row className=' row justify-content-between'>
                    <Col>GUNAYATAN LOGO</Col>
                    <Col>Search</Col></Row>
                <Row lg={5} xs={2}>
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
