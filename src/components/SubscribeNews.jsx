import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import Form from 'react-bootstrap/Form'
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from 'react-bootstrap/Button'
import "./subscribeNews.css"
export default function SubscribeNews() {
    return (
        <Container id='latest news' fluid className='subscribeBackground  py-5' >
            <Container className=''>
                <h3>Enter your email to get the latest updates from us</h3>
                <Form>
                    <Row>
                        <Col xs={7}>
                            <Form.Control placeholder="Email" />
                        </Col>
                        <Col>
                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </Col>
                    </Row>
                </Form>
            </Container>
        </Container>
    )
}
