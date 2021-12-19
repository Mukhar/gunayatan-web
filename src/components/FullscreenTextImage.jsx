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
                    <div className='d-flex justify-content-center py-3 fti-leftblock'>
                        <h1>Gunayatan Theme Park</h1>
                    </div>
                    <h5 className='px-2 text-center'>'गुणस्थान' जैन धर्म का एक वैशिष्ट शब्द है. जैन साधना पद्धति में आत्मा के क्रमिक विकास के सोपानों को गुणस्थान कहा जाता है। इन्हीं गुणस्थानों को साकार करने का अद्भुत प्रयास है- ‘गुणायतन’</h5>
                    <br />
                    <h5 className='px-2 text-center'>‘गुणायतन’ मुनिश्री के प्रौढ़ चिन्तन और परिपक्व परिकल्पना का जीवन्त प्रमाण है। जैन धर्मावलम्बियों के शिरोमणि तीर्थस्थल श्रीसम्मेद शिखर जी की तलहटी में निर्माणाधीन यह एक ऐसा उपक्रम है, जिसके माध्यम से पोथियों की बातों को पल में जाना जा सके</h5>

                </Col>
                <Col className='px-0' md={7}>
                    <img src={fsimage} alt="This is location" style={{ width: "100%" }} /></Col>
            </Row>
        </Container >
    )
}
