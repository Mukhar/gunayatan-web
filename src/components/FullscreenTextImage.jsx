import React from 'react'
import "./../assets/css/fullscreen_text_image.css"
import fsimage from "./../assets/images/audit-800x500.jpg"
// import halfCutMountain from "./../assets/images/halfCutMountain.jpg"

import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
import Col from 'react-bootstrap/esm/Col'
export default function FullscreenTextImage() {
    return (
        <Container fluid>
            <Row >
                <Col className='px-0 bg-red' md={5}>
                    <div className='d-flex justify-content py-3 fti-leftblock'>
                        <h1>Gunayatan Theme Park</h1>
                    </div>
                    <h5 className='px-2 text-justify' style={{ textAlign: "justify" }}>'Gunasthan' is a special word of Jainism. The stages of the gradual development of the soul in Jain spiritual practice are called Gunasthan. A wonderful effort to realize these Gunasthan is - 'Gunayatan'</h5>
                    <br />
                    <h5 className='px-2 text-justify' style={{ textAlign: "justify" }}> 'Gunayatan' is a living proof of Munishri's mature thinking and vision. Under construction, this is such an endeavor in the foothills of Shri Sammed Shikhar ji, the Shiromani shrine of Jains, through which the things of the books can be understood in a moment</h5>

                </Col>
                <Col className='px-0' md={7}>
                    <img src={fsimage} alt="This is location" style={{ width: "100%" }} /></Col>
            </Row>
        </Container >
    )
}
