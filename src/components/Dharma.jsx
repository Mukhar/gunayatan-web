import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import Col from 'react-bootstrap/esm/Col';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import img1 from "./../assets/images/quote/quote1.jpg"
import img2 from "./../assets/images/quote/quote2.jpeg"
import img3 from "./../assets/images/quote/quote3.jpg"
// import bg_section2 from './../assets/images/bg_section2.jpg'

import "./../assets/css/dharma.css";
export default function Dharma() {
    return (
        <div id='dharma' className='container-fluid '>
            <Container className='mt-3'>
                <Row className='p-2'>
                    <Col>
                        {/* <div>Heading</div> */}
                    </Col>
                    <Col>
                        <h3>Dharma</h3>
                        <Carousel variant='dark' prevIcon={false} nextIcon={false} className='dharma_carousel'>
                            <Carousel.Item interval={5000}>
                                <img src={img1}></img>
                                <p>My name is mukhar Jain</p>
                                {/* <Carousel.Caption>
                                    <h3>First slide label</h3>
                                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                </Carousel.Caption> */}
                            </Carousel.Item>
                            <Carousel.Item interval={5000}>
                                <img src={img2}></img>
                                <p>I am a devloper</p>
                                {/* <Carousel.Caption>
                                    <h3>Second slide label</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                </Carousel.Caption> */}
                            </Carousel.Item>
                            <Carousel.Item interval={5000} >
                                <img src={img3}></img>
                                <p>This is being developend by me </p>
                                {/* <Carousel.Caption>
                                    <h3>Third slide label</h3>
                                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                                </Carousel.Caption> */}
                            </Carousel.Item>
                        </Carousel>
                    </Col>
                </Row>
            </Container>


        </div >
    )
}
