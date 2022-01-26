import React from 'react';
import Col from 'react-bootstrap/esm/Col';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/esm/Button';
export default function MembersLogin(props) {
    return <div id="memberslogin">
        <Container className='members-login p-3 mb-3'>
            <div className='heading'>  {props.heading}</div>
            <Row>
                <Col>
                    <h3 className='d-flex justify-content-center'>Login To Your Gunayatan Parivar Account</h3>
                </Col>
                <Col> <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                        {/* <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text> */}
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group> */}
                    <Button variant="primary" type="submit">
                        Login
                    </Button>
                </Form> </Col>
            </Row>
        </Container>

    </div>;
}
