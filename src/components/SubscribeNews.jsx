import React, { useState } from "react";
// import Container from 'react-bootstrap/esm/Container'
// import Form from 'react-bootstrap/Form'
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";
// import Button from 'react-bootstrap/Button'
import { Container, Form, Row, Col, Button } from "react-bootstrap";
import "./subscribeNews.css";
export default function SubscribeNews() {
  const [email, setEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const validateEmail = (email) => {
    // Regular expression for email validation
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateEmail(email)) {
      setErrorMessage("Please enter a valid email address.");
      return;
    }

    try {
      const response = await fetch("https://example.com/api/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });
      if (response.ok) {
        setSuccessMessage("Subscription successful!");
        setEmail("");
        setErrorMessage("");
      } else {
        throw new Error("Failed to subscribe. Please try again later.");
      }
    } catch (error) {
      setErrorMessage(error.message);
      setErrorMessage("Couldnt not subscribe, Please try later");
    }
  };
  return (
    <Container id="latest news" fluid className="subscribeBackground  py-5">
      <Container className="">
        <h3>Enter your email to get the latest updates from us</h3>
        <Form onSubmit={handleSubmit}>
          <Row>
            <Col xs={7}>
              <Form.Control
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </Col>
            <Col>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Col>
          </Row>
        </Form>
        {errorMessage && <p className="text-danger">{errorMessage}</p>}
        {successMessage && <p className="text-success">{successMessage}</p>}
      </Container>
    </Container>
  );
}
