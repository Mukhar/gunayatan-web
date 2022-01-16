import React from 'react'
import Col from 'react-bootstrap/esm/Col'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
export default function HowToReach() {
    const state = ['Girdih', 'Hazaribagh', 'Patna', 'Bokaro', 'Kolkata'];
    return (
        <Container id="howtoreach" >
            <Row style={{ color: "black" }}>
                <Col><h2>How To Reach Gunayatan</h2>
                    <div><b>Address:</b> गुणायतन,<br></br> कुन्दकुन्द मार्ग, मधुबन, झारखंड 825329</div>
                    <hr></hr>
                    <h3>Neaby Cities</h3>
                    <ul>{state.map((city) => <li>{city}</li>)}
                    </ul>
                </Col>
                <Col><iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3644.6616355432648!2d86.14736075079915!3d24.007722784737446!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f4069be17c3793%3A0x6d48a96779d71747!2sGunaytan!5e0!3m2!1sen!2sin!4v1641717143284!5m2!1sen!2sin"
                    width="600"
                    height="450"
                    title='Map to gunayatan'
                    style={{ border: 0 }}
                    allowfullscreen=""
                    loading="lazy">


                </iframe></Col>
            </Row>

        </Container>
    )
}
