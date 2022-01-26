import React from 'react';
import Col from 'react-bootstrap/esm/Col';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Queries from '../Forms/Queries';
import SocialIconGroup from '../social/SocialIconGroup';
export default function ContactUs() {
    return <div id="ContactUs">
        <Container>
            <Row>
                <Col className='heading'>
                    <Row>Get In Touch</Row>
                    <Row>
                        <Container className=''>
                            <div className='d-flex justify-content-left fs-4'>Mobile : </div>
                            <div className='d-flex justify-content-left fs-5 px-2'>
                                <ul>
                                    <li>9586589854</li>
                                    <li>9586589854</li>
                                    <li>9586589854</li>
                                </ul>
                            </div>
                            <div className='d-flex justify-content-left fs-4'>Email : </div>
                            <div className='d-flex justify-content-left fs-5 px-2'>
                                info@gunayatan.com
                            </div>
                            <div className='d-flex justify-content-left fs-4'>Follow Us on Social Media </div>
                            <SocialIconGroup />
                        </Container>
                    </Row>
                </Col>
                <Col><Queries /></Col>
            </Row>
        </Container>
    </div>
}
