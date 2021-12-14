import React from 'react'
import "./../assets/css/fullscreen_text_image.css"
import fsimage from "./../assets/images/img_kalash.jpg"
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
import Col from 'react-bootstrap/esm/Col'
export default function FullscreenTextImage() {
    return (
        <Container fluid>
            <Row >
                <Col className='px-0 bg-red' md={6}>
                    <div className='d-flex justify-content-center py-3 fti-leftblock'>
                        <h3>Welcome</h3>
                    </div>
                </Col>
                <Col className='px-0' md={6}>  <img src={fsimage} alt="This is location" style={{ width: "100%" }} /></Col>
            </Row>
        </Container >
    )
}
