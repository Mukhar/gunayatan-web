import React from 'react'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Row from 'react-bootstrap/Row'
import "./../assets/css/footer.css"
// import logo from "./../assets/icons/logo with tag line-red.png"
import bottom from "./../assets/icons/gunayatan_bottom.png"
import logo from "./../assets/icons/logo with tag line-golden.png"
import Facebook from './social/Facebook'
import Instagram from './social/Instagram'
import Twitter from './social/Twitter'




export default function Footer() {
    return (<>
        <Row style={{ justifyContent: "center" }} className='mountainbg'>
            <img src={bottom} alt='demo' ></img>
        </Row>
        <div className='sidebar'>
            <Facebook />
            <Twitter />
            <Instagram /> </div>

        <Container fluid className='footer py-2' >
            <Container>
                <Row className='py-2 row justify-content-between  border-bottom border-3 border-color-gold'>
                    <Col xs={4}  ><img className="footer-logo" src={logo} alt='Logo' /></Col>
                    {/* <Col xs={4} className='d-flex' style={{ justifyContent: "center" }}>
                        <Facebook />
                        <Twitter />
                        <Instagram />
                    </Col> */}
                    <Col xs={4} className='my-auto'><Form className="d-flex">
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
                        <Col >Welcome</Col>
                        <Col >Gunayatan Gyan Mandir</Col>
                        <Col >Chaubisi Jinalay</Col>
                        <Col >Sahasrakoot Jinalay</Col>
                        <Col >Gunayatan Theme Park</Col>
                        <Col lg={true}>
                            <Col>DOWNLOADS</Col>
                            <Col>Visitor Guide</Col>
                            <Col>Photo Gallery</Col>

                        </Col>
                    </Col>
                    <Col lg={true} >
                        <Col >VISIT</Col>
                        <Col >How to Reach</Col>
                        <Col >Facilities</Col>
                        <Col >Accomodation</Col>
                        <Col >What to See</Col>
                        <Col >Tickets</Col>
                        <Col >Security</Col>
                    </Col>
                    <Col lg={true}>
                        <Col >WHATS NEW</Col>
                        <Col >Progress </Col>
                        <Col >Views and Comments</Col>

                        <Col >New Members</Col>
                        <Col >Updates</Col>


                    </Col>
                    <Col lg={true}>
                        <Col >ABOUT US</Col>
                        <Col >Blessings and Inspirer</Col>
                        <Col >Organisation</Col>
                        <Col >Managing Comittee</Col>
                        <Col >Gunayatan Journey </Col>
                        <Col >Gunayatan Parivar</Col>
                        <Col >Members Login</Col>
                        <Col >Contact Us</Col>
                    </Col>
                    <Col lg={true}>
                        <Col >LINKS</Col>
                        <Col >Muni Pramansagar Ji</Col>
                        <Col >Jain Pathshala</Col>
                        <Col >Bhavna Yog</Col>
                        <Col >Sevayatan</Col>
                    </Col>
                </Row>
                <Row className="justify-content-center">  © www.gunaytan.com</Row>
            </Container>

        </Container>
    </>)
}
