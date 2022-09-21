import React, { useState, useEffect } from "react";
import '../App.css';
import { Row,Col } from "react-bootstrap";
import axios from "axios";
import NewNav from "./components/RepNav";
import Footer from "./components/RepFooter";

function Home() {

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
        <div className="container">
            <Col className="content">
                <NewNav activepath="/" />
                <Row style={{justifyContent:'center'}}>
                    <Col className="bg-light p-0" >
                        <section className="top_bar">
                            <div className="content" style={{alignItems: 'center'}} >
                                <a style={{color:'#fff'}} className="nav-link" href="/makec" >
                                    <u>Report an issue</u>
                                </a>
                                <h1 style={{color:'#fff'}}>Report illegal dumping</h1>
                                <h6 style={{color:'#fff'}}>Dumping unwanted material on the footpath is an offence.</h6>
                            </div>
                        </section>
                        <div className="box_container" style={{marginBottom: '-254px'}}>
                            <h1>
                                <a href="3" style={{color:'#fff', marginLeft: '44px'}}><i className="fab fa-leanpub"></i> When you need to do this</a>
                            </h1>
                            <p style={{color:'#fff', marginLeft: '44px'}}>
                                Illegal dumping is an environmental, economic and social problem because it:
                            </p>

                            <p style={{color:'#fff', marginLeft: '44px'}}>
                                <i className="fas fa-hand-point-right"></i> pollutes our waterways through the stormwater system <br />
                                <i className="fas fa-hand-point-right"></i> is a waste of resources because dumped items can often be recycled or reused <br />
                                <i className="fas fa-hand-point-right"></i> attracts vermin such as rats and cockroaches <br />
                                <i className="fas fa-hand-point-right"></i> looks unsightly and blocks access for pedestrians, bikes and vehicles <br />
                                <i className="fas fa-hand-point-right"></i> is a financial burden to the Government and taxpayers. <br />
                            </p>

                            <p style={{color:'#fff', marginLeft: '44px'}}>
                                If you spot illegally dumped goods or if you see somebody dumping items, please report it to us.
                            </p>
                        </div>

                        <div className="col-md-12">
                            <h3 className="ps-3"> <i className="fab fa-twitter"></i>Recent Post on Twitter</h3> 
                            <Row id="twt">
                                {
                                    tweets.map(row => {
                                        return (
                                            <Col lg={4} className="p-4" dangerouslySetInnerHTML={{__html: row.tweet}}>
                                               
                                            </Col>
                                        )
                                        
                                    })
                                }
                            </Row>
                        </div>
                    </Col>
                
                    <Footer />
        
                </Row>
            </Col>
        </div>
    );
}

export default Home;
