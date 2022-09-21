import React from "react";
import '../App.css';
import { Row } from "react-bootstrap";
import logo from '../replogo.png';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-router-dom";
import Container from "react-bootstrap/Container";

function NewNav(activepath) {
  return (
        <Navbar collapseOnSelect expand="lg" id="top-navbar" >
            <Container>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav" className="flex-column">
                    <Row id="top-nav1">
                        <Nav activeKey={activepath} className="m-auto" >
                            <Navbar.Brand className="me-5" href="/ReportWaste">
                                <img className="brand-logo" src={logo} alt="logo" id="logo" />
                            </Navbar.Brand>
                            <Nav.Link className="ms-5">
                                <form className="form-inline" id="search-form">
                                    <div className="input-group">
                                        <input type="text" className="form-control border-0 p-2" id="search-input" placeholder="Type in to search.." aria-label="search" aria-describedby="basic-addon1" />
                                        <div className="input-group-prepend">
                                            <span className="input-group-text border-0" id="basic-addon1">
                                            <i className="fas fa-search"></i>
                                            </span>
                                        </div>
                                    </div>
                                </form>
                            </Nav.Link>
                            <NavLink to="#" className="">
                                <button className="btn btn-sm donate-btn" href="#">
                                            Donate Now
                                </button>
                            </NavLink>
                        </Nav>
                    </Row>
                    <Row id="top-nav2">
                        <Nav activeKey={activepath} className="m-auto" >
                            
                            <NavLink className="reportwaste" to="/statistic"> Statistics</NavLink>
                            <NavLink className="reportwaste" to="/about"> About Us</NavLink>
                            <NavLink className="reportwaste" to="/rewards"> Rewards</NavLink>
                            <NavLink className="reportwaste" to="/whatwedo"> What We Do</NavLink>
                            <NavLink className="reportwaste" to="/privacyp"> Privacy Policy</NavLink>
                            <NavLink className="reportwaste" to="/blog"> Blog</NavLink>
                            <NavLink className="pb-0" to="/"> 
                                <button className="btn donate-btn mb-0">SE Dapp</button>
                            </NavLink>
                        </Nav>
                    </Row>
                </Navbar.Collapse>
            </Container>
        </Navbar>
  );
}

export default NewNav;