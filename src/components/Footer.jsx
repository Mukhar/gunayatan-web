import React from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Row from "react-bootstrap/Row";
import { Link } from "react-router-dom";
import "./../assets/css/footer.css";
// import logo from "./../assets/icons/logo with tag line-red.png"
import logo from "./../assets/icons/logo with tag line-golden.png";
import Facebook from "./social/Facebook";
import Instagram from "./social/Instagram";
import Twitter from "./social/Twitter";
import { HashLink } from "react-router-hash-link";

export default function Footer() {
  return (
    <>
      <div className="sidebar">
        <Facebook />
        <Twitter />
        <Instagram />{" "}
      </div>

      <Container id="footer" fluid className="footer py-2">
        <Container>
          <Row className="py-2 row justify-content-between  border-bottom border-3 border-color-gold">
            <Col xs={4}>
              <img className="footer-logo" src={logo} alt="Logo" />
            </Col>
            {/* <Col xs={4} className='d-flex' style={{ justifyContent: "center" }}>
                        <Facebook />
                        <Twitter />
                        <Instagram />
                    </Col> */}
            <Col xs={4} className="my-auto">
              <Form className="d-flex">
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
          <Row lg={5} xs={2} className="py-2">
            <Col lg={true}>
              <Col>
                <Link to="explore">EXPLORE</Link>
              </Col>
              <Col>
                {" "}
                <Link to="/">Welcome</Link>
              </Col>
              <Col>
                {" "}
                <Link to="/">Gunayatan Gyan Mandir</Link>
              </Col>
              <Col>
                {" "}
                <Link to="/">Chaubisi Jinalay</Link>
              </Col>
              <Col>
                {" "}
                <Link to="/">Sahasrakoot Jinalay</Link>
              </Col>
              <Col>
                {" "}
                <Link to="/">Gunayatan Theme Park</Link>
              </Col>
            </Col>
            <Col lg={true}>
              <Col>
                <Link to="visit"> VISIT</Link>
              </Col>
              <Col>
                {" "}
                <Link to="visit#howtoreach">How to Reach</Link>
              </Col>
              <Col>
                {" "}
                <Link to="/">Facilities</Link>
              </Col>
              <Col>
                {" "}
                <Link to="/">Accomodation</Link>
              </Col>
              <Col>
                {" "}
                <Link to="/">What to See</Link>
              </Col>
              <Col>
                {" "}
                <Link to="/">Tickets</Link>
              </Col>
              <Col>
                {" "}
                <Link to="/">Security</Link>
              </Col>
            </Col>
            <Col lg={true}>
              <Col>WHATS NEW</Col>
              <Col>
                {" "}
                <Link to="/">Progress </Link>
              </Col>
              <Col>
                {" "}
                <Link to="/">Views and Comments</Link>
              </Col>

              <Col>
                {" "}
                <Link to="/">New Members</Link>
              </Col>
              <Col>
                {" "}
                <Link to="/">Updates</Link>
              </Col>
            </Col>
            <Col lg={true}>
              <Col>
                <Link to="aboutUs"> ABOUT US</Link>
              </Col>
              <Col>
                {" "}
                <Link to="aboutUs#blessings">Blessings and Inspirer</Link>
              </Col>
              <Col>
                {" "}
                <HashLink to="/aboutUs#Organisation">Organisation</HashLink>
              </Col>
              <Col>
                {" "}
                <HashLink to="/prabandh">Managing Comittee</HashLink>
              </Col>
              <Col>
                {" "}
                <Link to="/">Gunayatan Journey </Link>
              </Col>
              <Col>
                {" "}
                <HashLink to="/aboutUs#gunayatanParivar">
                  {" "}
                  Gunayatan Parivar
                </HashLink>
              </Col>
              <Col>
                {" "}
                <HashLink to="/aboutUs#MembersLogin">Members Login</HashLink>
              </Col>
              <Col>
                {" "}
                <HashLink to="/aboutUs#ContactUs">Contact Us</HashLink>
              </Col>
            </Col>
            <Col lg={true}>
              <Col>LINKS</Col>
              <Col>
                <a href="www.munipramansagar.net">Muni Pramansagar Ji</a>
              </Col>
              <Col>
                <a href="google.com">Jain Pathshala</a>
              </Col>
              <Col>
                <a href="www.google.co.in/search?&q=bhavna%20yog">Bhavna Yog</a>
              </Col>
              <Col>
                <a href="www.google.com">Sevayatan</a>
              </Col>
              <Col lg={true}>
                <Col>DOWNLOADS</Col>
                <Col>
                  {" "}
                  <Link to="/">Visitor Guide</Link>
                </Col>
                <Col>
                  {" "}
                  <Link to="/">Photo Gallery</Link>
                </Col>
              </Col>
            </Col>
          </Row>
          <Row className="justify-content-center"> © www.gunaytan.com</Row>
        </Container>
      </Container>
    </>
  );
}
