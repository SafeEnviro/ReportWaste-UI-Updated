import React from "react";
import '../style.css';
import logo from '../../asset/RW 3 - Green.png';
// import faceB from '../../asset/Mask Group 26.png';
// import insta from '../../asset/Mask Group 25.png';
// import twitter from '../../asset/Mask Group 28.png';
// import Google from '../../asset/Mask Group 27.png';
import { Row, Col } from "react-bootstrap";
import {InputGroup, FormControl, Button} from 'react-bootstrap'
// import Nav from 'react-bootstrap/Nav'

function HomeFooter() {
  return (
    <footer id="homefooter">
        <Row>
            <Col lg={4} md={4} sm={12}>
                <img alt="ReportWaste" src={logo} width="150" className="RPlogo" />
                <p className="footer-p">
                    Report Waste is a product of SafeEnviro UK Pvt Ltd, using blockchain technology to trace the origins of the wastes generated.
                </p>
            </Col>
            <Col lg={4} md={4} sm={12}>
                <h5 className="footer-heading">Contact</h5>
                <ul className="footer-contact">
                    <li>
                        <a href="https://goo.gl/maps/Sf2tAfDf3wcfU7sA6" rel="noreferrer" target='_blank'>
                            <i className="fas fa-map-marker-alt"></i>&emsp;&emsp;23 Placido 34 Ryland Street, Birmingham B16 8DB
                        </a>

                    </li>
                    <li>
                        <a href="tel:01216797864">
                            <i className="fas fa-phone-alt"></i>&emsp;&emsp;01216797864
                        </a>
                    </li>
                    <li>
                        <a href="mailto:admin@reportwaste.co.uk">
                            <i className="fas fa-envelope"></i>&emsp;&emsp;admin@reportwaste.co.uk
                        </a>
                    </li>
                </ul>
            </Col>
            <Col lg={4} md={4} sm={12}>
                <h5 className="footer-heading">Sign Up</h5>
                <p>Sign up for Newsletters</p>
                <form method="POST">
                    <InputGroup className="mb-3">
                        <FormControl className="footer-input" name="email" placeholder="Enter Email Address"
                        aria-label="Enter Email Address"
                        aria-describedby="basic-addon2" required />
                        <Button className="footer-btn"  type="submit" name="submit" id="footer-btn">
                        Sign up
                        </Button>
                    </InputGroup>
                </form>
                {/* <Nav as="ul" className="icons">
                    <Nav.Item as="li">
                        <Nav.Link href="/home">
                            <img alt="footer" src={insta} className="SM" />
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item as="li">
                        <Nav.Link href="/home">
                            <img alt="footer" src={faceB} className="SM" />
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item as="li">
                        <Nav.Link href="/home">
                            <img alt="footer" src={twitter} className="SM" />
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item as="li">
                        <Nav.Link href="/home">
                            <img alt="footer" src={Google} className="SM" />
                        </Nav.Link>
                    </Nav.Item>
                </Nav> */}
            </Col>
        </Row>
    </footer>
  );
}

export default HomeFooter;