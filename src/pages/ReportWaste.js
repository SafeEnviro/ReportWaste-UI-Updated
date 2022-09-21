import React, { useState, useEffect } from "react"; 
import { Row,Col } from "react-bootstrap";
import axios from "axios";
import Banner from '../asset/img/home-banner.jpg';
import gdump from '../asset/img/g-dump.png';
import MultiCarousel from "./MultiCarousel.js"; 
import NewNav from "./components/RepNav";
import Footer from "./components/RepFooter";
import { NavLink } from "react-router-dom";

function ReportWaste() {

    const [tweets, settweets] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3001/tweets').then(
            (response) => {
                settweets(response.data.result);
                console.log(response.data.result);
            
            }
        ).catch(
            (err) => {
                console.log(err);
                alert("Error in fetching data, "+err.message);
            }
        )
    },[]);
    

    return (
        <div className="container-fluid px-0 mx-0">
            <Col className="content">
                <NewNav activepath="/ReportWaste" />
                <Row className="m-0" style={{justifyContent:'center', width:'100%'}}>
                    <Col className="bg-light p-0" >
                        <Row className="m-0 p-0 relative align-items-center" style={{height: '50rem'}}>
                            <img id="home-banner" src={Banner} alt="Home Banner" />
                            <div className="overlay"></div>
                            <div className="d-block mx-auto mb-0 w-auto z-index3">
                                <p className="text-center banner-p">
                                    <NavLink to="/makec" id="issue"><span>Report an issue</span></NavLink> <br />
                                    <span className="font50 b-700">Report illegal dumping</span> <br />
                                    <span className="b-500">Dumping unwanted material on the footpath is an offence.</span>
                                </p>
                                <Col className="btn-div-rw">
                                    <NavLink to='/makec' style={{textDecoration:'none'}}>
                                        <button className="btn btn-lg green-out-btn">Make a Complaint</button>
                                    </NavLink>
                                    <NavLink to='/trackc' style={{textDecoration:'none'}}>
                                        <button className="btn btn-lg green-out-btn">Track Complaint</button>
                                    </NavLink>
                                </Col>
                            </div>
                            
                        </Row>
                        {/* <Row className="justify-content-center">
                            <Col lg={7} className="btn-div-rw">
                                <a href='/makec' style={{textDecoration:'none'}}>
                                    <button className="btn btn-lg green-out-btn">Make a Complaint</button>
                                </a>
                                <a href='/trackc' style={{textDecoration:'none'}}>
                                    <button className="btn btn-lg green-out-btn">Track Complaint</button>
                                </a>
                            </Col>
                        </Row> */}

                        <Row>
                            <h4 className="text-center dark-blue p-5">
                                When you need to do this
                            </h4>
                            <Row>
                                <Col lg={6} className="gdump">
                                    <img src={gdump} alt="When you need" />
                                </Col>
                                <Col lg={6} className="gdumptxt">
                                    <p><strong>Illegal dumping is an environmental, economic and social problem because it:</strong></p>
                                    <p>
                                        <i className="fas fa-hand-point-right" style={{color:'#008b4a'}}></i> &nbsp; pollutes our waterways through the stormwater system <br />
                                        <i className="fas fa-hand-point-right" style={{color:'#008b4a'}}></i> &nbsp; is a waste of resources because dumped items can often be recycled or reused <br />
                                        <i className="fas fa-hand-point-right" style={{color:'#008b4a'}}></i> &nbsp; attracts vermin such as rats and cockroaches <br />
                                        <i className="fas fa-hand-point-right" style={{color:'#008b4a'}}></i> &nbsp; looks unsightly and blocks access for pedestrians, bikes and vehicles <br />
                                        <i className="fas fa-hand-point-right" style={{color:'#008b4a'}}></i> &nbsp; is a financial burden to the Government and taxpayers. <br />
                                    </p>
                                    <p><strong>If you spot illegally dumped goods or if you see somebody dumping items, please report it to us.</strong></p>
                                </Col>
                            </Row>
                        </Row>

                        {/* <Row>
                            <h4 className="text-center dark-blue pt-5 pb-2">
                                Services
                            </h4>
                            <p className="text-center dark-blue">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin rutrum mattis malesuada.
                            </p>
                            
                                <MultiCarousel /> 
                                
                        </Row> */}
                        
                        <Row className="w-100 justify-content-center m-0">
                            <h4 className="text-center dark-blue p-5"><i className="fab fa-twitter "></i> &nbsp; Recent Post on Twitter</h4> 
                            <Row id="twt p-0">
                                {tweets.length > 0 &&
                                    tweets.map((row,i) => {
                                        return (
                                            <Col lg={4} key={"twt"+i} className="p-4" dangerouslySetInnerHTML={{__html: row.tweet}}>
                                               
                                            </Col>
                                        )
                                        
                                    })
                                }                             
                            </Row>
                            <Row className="p-5 justify-content-center">
                                <a id="seemore" target={"_blank"} href="https://twitter.com/SafeenviroL?ref_src=twsrc%5Etfw" rel="noreferrer">See More Tweets</a>
                            </Row>
                        </Row>
                    </Col>
                </Row>
                <Footer />
            </Col>
        </div>
    );
}

export default ReportWaste;
