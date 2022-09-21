import React from "react";
import '../App.css';
import '../custom.css';
import { Row,Col } from "react-bootstrap";
import Cover from "../asset/img/Group 4859.png";
import card1 from "../asset/img/NoPath - Copy (46).png";
import card2 from "../asset/img/NoPath - Copy (51).png";
import card3 from "../asset/img/NoPath - Copy (48).png";
import card4 from "../asset/img/NoPath - Copy (49).png";
import card5 from "../asset/img/NoPath - Copy (52).png";
import card6 from "../asset/img/NoPath - Copy (53).png";
import NewNav from "./components/RepNav";
import Footer from "./components/RepFooter";
import { NavLink } from "react-router-dom";

function Blog() {
  return (
    <>
    <div className="container">
        <Col className="content">
            <NewNav activepath="/blog" />
            <Row style={{justifyContent:'center'}}>
              {/* Content */}
              <div className="container">
                  <div className="row">
                      <div className="position-relative">
                          <img src={Cover} alt="" className="img-fluid" />
                          <h3 className="position-absolute image-centered-text">Our Blog</h3>
                      </div>
                  </div>
                  <section className="bg-light pt-3 mb-2 mt-4">
                      <div className="row mt-5" style={{justifyContent:'center'}}>

                          <div className="col-md-4 mb-5">
                              <div className="card center" style={{ width:'18rem'}}>
                                  <img className="card-img-top" src={card1} alt="Card 1" />
                                  <div className="card-body">
                                      <h6 className="card-title text-center">Significance of the Waste Management Sector</h6>
                                      <p style={{fontSize: '12px' }} className="card-text text-center text-dark">An advanced efficient waste management sector is profoundly important to the resolution of many...</p>
                                      <nav aria-label="breadcrumb">
                                          <ol className="breadcrumb">
                                            <li className="breadcrumb-item" style={{marginLeft: '30px'}}><NavLink to="/blog1">View More Details</NavLink></li>
                                          </ol>
                                        </nav>
                                  </div>
                              </div>
                          </div>

                          <div className="col-md-4 mb-5">
                              <div className="card center" style={{width: '18rem' }}>
                                  <img className="card-img-top" src={card2} alt="Card 2" />
                                  <div className="card-body">
                                      <h6 className="card-title text-center">How Can You Enhance Your Food Waste Management?</h6>
                                      <p style={{fontSize: '12px' }} className="card-text text-center text-dark">Generally, food waste is recycled using one of two methods, composting and anaerobic digestion...</p>
                                      <nav aria-label="breadcrumb">
                                          <ol className="breadcrumb">
                                            <li className="breadcrumb-item" style={{marginLeft: '30px'}}><NavLink to="/blog1">View More Details</NavLink></li>
                                          </ol>
                                        </nav>
                                  </div>
                              </div>
                          </div>

                          <div className="col-md-4 mb-5">
                              <div className="card center" style={{width: '18rem' }}>
                                  <img className="card-img-top" src={card3} alt="Card 3" />
                                  <div className="card-body">
                                      <h6 className="card-title text-center">How to Make Your Rubbish Removal Cheaper </h6>
                                      <p style={{fontSize: '12px' }} className="card-text text-center text-dark">Many people are searching for cheap rubbish removal as they are pressurized financially on households and...</p>
                                      <nav aria-label="breadcrumb">
                                          <ol className="breadcrumb">
                                            <li className="breadcrumb-item" style={{marginLeft: '30px'}}><NavLink to="/blog1">View More Details</NavLink></li>
                                          </ol>
                                        </nav>
                                  </div>
                              </div>
                          </div>

                          <div className="col-md-4 mb-5">
                              <div className="card center" style={{width: '18rem' }}>
                                  <img className="card-img-top" src={card4} alt="Card 4" />
                                  <div className="card-body">
                                      <h6 className="card-title text-center">Everything you need to know about the  British Spring Clean</h6>
                                      <p style={{fontSize: '12px' }} className="card-text text-center text-dark">Handling of sometimes hazardous waste carelessly poses tremendous harm for the health of humans and the...</p>
                                      <nav aria-label="breadcrumb">
                                          <ol className="breadcrumb">
                                            <li className="breadcrumb-item" style={{marginLeft: '30px'}}><NavLink to="/blog1">View More Details</NavLink></li>
                                          </ol>
                                        </nav>
                                  </div>
                              </div>
                          </div>

                          <div className="col-md-4 mb-5">
                              <div className="card center" style={{width: '18rem' }}>
                                  <img className="card-img-top" src={card5} alt="Card 5" />
                                  <div className="card-body">
                                      <h6 className="card-title text-center">Hessle Woman fined when someone fly-tipped her waste </h6>
                                      <p style={{fontSize: '12px' }} className="card-text text-center text-dark">In spite of the fact that methane pollution makes up only 20% of all greenhouse gas emissions thankfully...</p>
                                      <nav aria-label="breadcrumb">
                                          <ol className="breadcrumb">
                                            <li className="breadcrumb-item" style={{marginLeft: '30px'}}><NavLink to="/blog1">View More Details</NavLink></li>
                                          </ol>
                                        </nav>
                                  </div>
                              </div>
                          </div>

                          <div className="col-md-4 mb-5">
                              <div className="card center" style={{width: '18rem' }}>
                                  <img className="card-img-top" src={card6} alt="Card 6" />
                                  <div className="card-body">
                                      <h6 className="card-title text-center">Everything you need to know about electronic waste</h6>
                                      <p style={{fontSize: '12px'}} className="card-text text-center text-dark">Arguably the most serious challenge currently affected by humans as a species is climate change. After all...</p>
                                      <nav aria-label="breadcrumb">
                                          <ol className="breadcrumb">
                                            <li className="breadcrumb-item" style={{marginLeft: '30px'}}><NavLink to="/blog1">View More Details</NavLink></li>
                                          </ol>
                                        </nav>
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

export default Blog;
