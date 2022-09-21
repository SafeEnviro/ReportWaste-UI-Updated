import React from "react";
import '../App.css';
import { Row,Col } from "react-bootstrap";
import NewNav from "./components/RepNav";
import Footer from "./components/RepFooter";
import Cover from "../asset/img/Group 4743.png";
import img1 from "../asset/img/Component 84 – 2.png";
import img2 from "../asset/img/Component 86 – 2.png";
import img3 from "../asset/img/Component 83 – 2.png";
import img4 from "../asset/img/Component 85 – 2.png";
import img5 from "../asset/img/NoPath - Copy (36).png";
import img6 from "../asset/img/NoPath - Copy (37).png";
import img7 from "../asset/img/NoPath - Copy (38).png";
import img8 from "../asset/img/NoPath - Copy (40).png";
import img9 from "../asset/img/NoPath - Copy (41).png";
import img10 from "../asset/img/NoPath - Copy (42).png";
import img11 from "../asset/img/NoPath - Copy (43).png";
import img12 from "../asset/img/NoPath - Copy (44).png";

function WhatWeDo() {
  return (
    <>
    <div className="container">
        <Col className="content">
            <NewNav activepath="/whatwedo" />
            <Row style={{justifyContent:'center'}}>
              <div className="container">
                  <div className="row">
                      <div className="position-relative">
                          <img src={Cover} alt="" className="img-fluid" />
                          <h3 className="position-absolute image-centered-text">What we do</h3>
                      </div>
                  </div>
                  <section className="bg-light p-3 mb-5 mt-4">
                      <div className="row mt-5">

                          <div className="col-md-3">
                              <div className="card border-0 bg-transparent">
                                  <img className="card-img-top" src={img1} alt="Card 1" />
                                  <div className="card-body">
                                      <h6 className="card-title  text-center text-custom-green">Save The Lives</h6>
                                  </div>
                              </div>
                          </div>

                          <div className="col-md-3">
                              <div className="card border-0 bg-transparent">
                                  <img className="card-img-top" src={img2} alt="Card 2" />
                                  <div className="card-body">
                                      <h6 className="card-title  text-center text-custom-green">Save Plants</h6>
                                  </div>
                              </div>
                          </div>

                          <div className="col-md-3">
                              <div className="card border-0 bg-transparent">
                                  <img className="card-img-top" src={img3} alt="Card 3" />
                                  <div className="card-body">
                                      <h6 className="card-title  text-center text-custom-green">Save Water</h6>
                                  </div>
                              </div>
                          </div>

                          <div className="col-md-3">
                              <div className="card border-0 bg-transparent">
                                  <img className="card-img-top" src={img4} alt="Card 4" />
                                  <div className="card-body">
                                      <h6 className="card-title  text-center text-custom-green">Save The City</h6>
                                  </div>
                              </div>
                          </div>


                      </div>
                      <div className="mt-5"></div>


                    <div className="row">
                        
                            <div className="mt-5"></div>
                          <div className="row ">
                              <div className="col-md-12">
                                  <h5>What We Do?</h5>
                                  <p className="text-dark" style={{fontSize: '13px'}}>
                                      Our vision is for a clean and healthy environment that enhances the life of the present and future generations. We wish to do this by taking the initiative to get rid of all the illegal trash in the UK and making sure that people know how to dispose of their waste the right way. One of the best ways to have a healthy environment is to recycle whatever possible and reduce our waste generation. Let's all contribute so next generations will inherit a clean and sustainable planet.
                              
                                  </p>
                              </div>
                          </div>

                          <div className="mt-5"></div>
                          <div className="row ">
                              <div className="col-md-12">
                                  <h5>How does it work?</h5>
                                  <p className="text-dark" style={{fontSize: '13px'}}>
                                      If you come across an illegal dump, report it using our website by uploading a picture.
                                      Environmental organizations, municipalities and interested individuals who subscribed to receiving notifications will be notified via email. A cleaning event will be organized by Environmental organization, municipality or a local activist. You will be notified that the dump you've reported has been cleaned up after the event.
                                  
                                  </p>
                              </div>
                          </div>
                      </div>
                      <div className="mt-5"></div>
                      <h5 className="text-dark mt-5 mb-4"> Our Latest Works</h5>
                      <div className="row">

                          <div className="col-md-3  mb-5">
                              <div className="position-relative rounded overflow-hidden custom-trasparent-image-label-wrapper">
                                  <img src={img5} className="rounded img-fluid" alt="" />
                                  <div className="position-absolute text-center custom-trasparent-image-label text-white">
                                      <h6 style={{fontSize: '13px'}} className="p-0 m-0">Test</h6>
                                      <p className="text-white">In publishing and graphic design, Lorem ipsum </p>
                                  </div>
                              </div>
                          </div>

                          <div className="col-md-3  mb-5">
                              <div className="position-relative rounded overflow-hidden custom-trasparent-image-label-wrapper">
                                  <img src={img6} className="rounded img-fluid" alt="" />
                                  <div className="position-absolute text-center custom-trasparent-image-label text-white">
                                      <h6 style={{fontSize: '13px'}} className="p-0 m-0">Test</h6>
                                      <p className="text-white">In publishing and graphic design, Lorem ipsum </p>
                                  </div>
                              </div>
                          </div>


                          <div className="col-md-3  mb-5">
                              <div className="position-relative rounded overflow-hidden custom-trasparent-image-label-wrapper">
                                  <img src={img7} className="rounded img-fluid" alt="" />
                                  <div className="position-absolute text-center custom-trasparent-image-label text-white">
                                      <h6 style={{fontSize: '13px'}} className="p-0 m-0">Test</h6>
                                      <p className="text-white">In publishing and graphic design, Lorem ipsum </p>
                                  </div>
                              </div>
                          </div>


                          <div className="col-md-3 mb-5">
                              <div className="position-relative rounded overflow-hidden custom-trasparent-image-label-wrapper">
                                  <img src={img8} className="rounded img-fluid" alt="" />
                                  <div className="position-absolute text-center custom-trasparent-image-label text-white">
                                      <h6 style={{fontSize: '13px'}} className="p-0 m-0">Test</h6>
                                      <p className="text-white">In publishing and graphic design, Lorem ipsum </p>
                                  </div>
                              </div>
                          </div>

                          <div className="col-md-3  mb-5">
                              <div className="position-relative rounded overflow-hidden custom-trasparent-image-label-wrapper">
                                  <img src={img9} className="rounded img-fluid" alt="" />
                                  <div className="position-absolute text-center custom-trasparent-image-label text-white">
                                      <h6 style={{fontSize: '13px'}} className="p-0 m-0">Test</h6>
                                      <p className="text-white">In publishing and graphic design, Lorem ipsum </p>
                                  </div>
                              </div>
                          </div>

                          <div className="col-md-3  mb-5">
                              <div className="position-relative rounded overflow-hidden custom-trasparent-image-label-wrapper">
                                  <img src={img10} className="rounded img-fluid" alt="" />
                                  <div className="position-absolute text-center custom-trasparent-image-label text-white">
                                      <h6 style={{fontSize: '13px'}} className="p-0 m-0">Test</h6>
                                      <p className="text-white">In publishing and graphic design, Lorem ipsum </p>
                                  </div>
                              </div>
                          </div>

                          <div className="col-md-3  mb-5">
                              <div className="position-relative rounded overflow-hidden custom-trasparent-image-label-wrapper">
                                  <img src={img11} className="rounded img-fluid" alt="" />
                                  <div className="position-absolute text-center custom-trasparent-image-label text-white">
                                      <h6 style={{fontSize: '13px'}} className="p-0 m-0">Test</h6>
                                      <p className="text-white">In publishing and graphic design, Lorem ipsum </p>
                                  </div>
                              </div>
                          </div>
                      

                          <div className="col-md-3 mb-5">
                              <div className="position-relative rounded overflow-hidden custom-trasparent-image-label-wrapper">
                                  <img src={img12} className="rounded img-fluid" alt="" />
                                  <div className="position-absolute text-center custom-trasparent-image-label text-white">
                                      <h6 style={{fontSize: '13px'}} className="p-0 m-0">Test</h6>
                                      <p className="text-white">In publishing and graphic design, Lorem ipsum </p>
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

export default WhatWeDo;
