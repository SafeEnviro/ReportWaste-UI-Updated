import React from "react";
import '../custom.css';
import '../App.css';
import { Row,Col } from "react-bootstrap";
import NewNav from "./components/RepNav";
import Footer from "./components/RepFooter";
import cover from "../asset/img/Group 4859.png";
import img1 from "../asset/img/NoPath - Copy (61).png" ;
import Card1 from "../asset/img/NoPath - Copy (62).png";
import Card2 from "../asset/img/NoPath - Copy (64).png" ;
import Card3 from "../asset/img/NoPath - Copy (65).png";
import Card4 from "../asset/img/NoPath - Copy (11).png";

function About() {
  return (
    <>
    <div className="container">
        <Col className="content">
            <NewNav activepath="/about" />
            <Row style={{justifyContent:'center'}}>
              <div className="container">
                  <div className="row">
                      <div className="position-relative">
                          <img src={cover} alt="About Us" className="img-fluid" />
                          <h3 className="position-absolute image-centered-text">About Us</h3>
                      </div>
                  </div>
                <section className="bg-light p-3 mb-5 mt-4">
                    <div className="row ">

                        <div className="col-md-5" style={{marginTop: '70px'}}>
                            <img className=" img-fluid" src={img1} alt="" />
                        </div>

                        <div className="col-md-7">
                            <div className="float-right text-dark ps-5 mt-3 ">
                                <h4 className="text-dark mt-5"> What is Report Waste?</h4>
                                <p className="text-dark para-line" style={{fontSize: '13px'}}>
                                Report waste has set up a system for the collection and transport of mixed and biodegradable municipal waste.
                                The principal objectives were to tackle the problem of illegal dumping in the area and to remove illegal dumping sites.
                                </p>

                                <h4 className="text-dark mt-5"> Why did we start Report waste?</h4>
                                <p className="text-dark para-line" style={{fontSize: '13px'}}>
                                Illegal dumping, also called fly dumping or fly tipping, is the dumping of waste illegally instead of using
                                an authorized method such as curbside collection or using an authorized rubbish dump. It is the illegal deposit
                                of any waste onto land, including waste dumped or tipped on a site with no license to accept waste. Dumps are 
                                often found in many places and usually it is difficult to report them, so getting rid of them is usually impossible. 
                                We decided to create a simple site that allows people to map, report and clean these dumps wherever they find them.
                                </p>

                                <h4 className="text-dark mt-5"> What is our vision?</h4>
                                <p className="text-dark para-line" style={{fontSize: '13px'}}>
                                Our vision is for a clean and healthy environment that enhances the life of the present and future generations. 
                                We wish to do this by taking the initiative to get rid of all the illegal trash in the UK and making sure that 
                                people know how to dispose of their waste the right way. One of the best ways to have a healthy environment is 
                                to recycle whatever possible and reduce our waste generation. Let's all contribute so next generations will 
                                inherit a clean and sustainable planet.
                                </p>

                                <h4 className="text-dark mt-5">How does it work?</h4>
                                <p className="text-dark para-line" style={{fontSize: '13px'}}>
                                If you come across an illegal dump, report it using our website by uploading a picture.
                                Environmental organizations, municipalities and interested individuals who subscribed to 
                                receiving notifications will be notified via email. A cleaning event will be organized by 
                                Environmental organization, municipality or a local activist. You will be notified that the 
                                dump you've reported has been cleaned up after the event.
                                </p>
                                
                            </div>
                        </div>
                    </div>
                    <div className="mt-5"></div>

                    <h4 className="text-dark mt-5"> Awards</h4>
                    <div className="row">
                        <div className="col-md-3">
                            <div className="card border-0">
                                <img className="card-img-top" src={Card1} alt="Card 1" />
                                <div className="card-body">
                                    <h5 className="card-title text-dark text-center">Innovation Of The Year</h5>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-3">
                            <div className="card border-0">
                                <img className="card-img-top" src={Card2} alt="Card 2" />
                                <div className="card-body">
                                    <h5 className="card-title text-dark text-center">Performer Of The Year</h5>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-3">
                            <div className="card border-0">
                                <img className="card-img-top" src={Card3} alt="Card 3" />
                                <div className="card-body">
                                    <h5 className="card-title text-dark text-center">Rising star of the year</h5>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-3">
                            <div className="card border-0">
                                <img className="card-img-top" src={Card4} alt="Card 4" />
                                <div className="card-body">
                                    <h5 className="card-title text-dark text-center">Golden Holder Of The Year</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
              </div>
            </Row>
        </Col>
    </div>
    <Footer />
    </>
  );
}

export default About;
