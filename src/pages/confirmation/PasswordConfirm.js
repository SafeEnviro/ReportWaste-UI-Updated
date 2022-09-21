import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import img from '../img.png'
import '../App.css';
import NavCol from '../components/NavCol';


function PasswordConfirm() {
  return (
    <div className="bg-light">
      <NavCol />
      <Container className="justify-content-center card-div">
        <Card className="home-card">
            <Card.Body>
                <Card.Title align="center">
                    <img alt="Complete" src={img} width="60" className="pb-3" /> <br />
                    Confirmation Email has been sent!
                </Card.Title>
                <Card.Subtitle align="center" className="mb-2 text-muted size-12">Please check your email inbox and click on "Reset Password".</Card.Subtitle>
                <Form>
                    <Row>
                        <Col>
                          <Link to="/login">
                            <button className="btn-backtosignin" type="submit">BACK TO SIGN IN PAGE</button>
                          </Link>
                        </Col>
                    </Row>
                </Form>
            </Card.Body>
        </Card>
      </Container>
    </div>
  );
}

export default PasswordConfirm;
