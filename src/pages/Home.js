import './style.css';
import { Row, Col } from "react-bootstrap";
import HomeNav from './components/HomeNav';
import HomeFooter from './components/HomeFooter';
// import img1 from '../asset/Mask Group 22.png';
import card1 from '../asset/asset-management.png';
import card2 from '../asset/decentralized.png';
import card3 from '../asset/shield.png';
import img_bg1 from '../asset/Ellipse 18.png';
import img_bg2 from '../asset/Ellipse 19.png';
import { NavLink } from 'react-router-dom';

function Home() {
  return (
  
      <div>
          <HomeNav/>
          <div className='container-fluid home-content'>
            <div className='container'>
              <Row className=''>
                <div style={{height:'112px'}}></div>
                <div className='col-lg-6 cover-div'>
                  <h1 id='main-head'>
                    <span style={{color:'#189e4b'}}>Blockchain Technology for Wastes Management Industry</span>
                    <br />
                    Report waste has been a catalyst in restructuring the waste management segment
                  </h1>
                  <p style={{letterSpacing:'2px'}}>
                    <a href="https://www.safeenviro.co.uk/">SafeEnviro</a>&nbsp;
                      UK is highly qualified in understanding the challenges faced in the wastes management industry around processes and worked with various companies in streamlining processes and blockchain based use cases to leverage customer base in a whole new way.
                  </p>
                  {/* <button id="btn-getstart" className='btn'>Get Start</button> */}
                </div>
              </Row>
            </div>
            <Row className='justify-content-center'>
              <Row className='button-div'>
                <Col md={6}>
                  <NavLink to='/makec' style={{textDecoration:'none'}}>
                    <button className="btn btn-complain btn-lg">
                      Make a Complaint
                    </button>
                  </NavLink>
                </Col>
                <Col md={6}>
                  <NavLink to='/trackc' style={{textDecoration:'none'}}>
                    <button className="btn btn-complain btn-lg">
                      Track Complaint
                    </button>
                  </NavLink>
                </Col>
              </Row>
            </Row>
          </div>
          <Row className='justify-content-center m-0 px-3 grd-div'>
            {/* <h3 className='b-700 mt-5 pt-5 pb-2 text-center'>Our Client Feedback</h3>
            <p className='text-center pb-5'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              <br />sed do eiusmod tempor incididunt
            </p> */}
            <Col md={4}>
              <div className="cards me-0" style={{width: '18rem'}}>
                <div className="cards-body">
                  <img className="cards-top" src={card1} alt="Card cap"></img>
                  <div className="cards-title">
                    <p className="text-center">Asset Management</p>
                  </div>
                  <hr />
                  <div className="cards-text" style={{marginTop:'2rem'}}>
                    <p className="text-center">Report Waste solve the problems of dispute resolution and improve the time it takes to solve discrepancies in data</p>
                  </div>
                </div>
              </div>
            </Col>
            <Col md={4}>
              <div className="cards" style={{width: '18rem'}}>       
                <div className="cards-body">
                  <img className="cards-top" src={card2} alt="Card cap"></img>
                  <div className="cards-title">
                    <p className="text-center">Decentralized</p>
                  </div>
                  <hr/>
                  <div className="cards-text" style={{marginTop:'3rem'}}>
                    <p className="text-center">Decentralized blockchains are immutable, which means that the data entered is irreversible.</p>
                  </div>
                </div>
            </div>
            </Col>
            <Col md={4}>
              <div className="cards ms-0" style={{width: '18rem'}}>
                <div className="cards-body">
                  <img className="cards-top" src={card3} alt="Card cap"></img>
                  <div className="cards-title">
                    <p className="text-center">Security</p>
                  </div>
                  <hr></hr>
                  <div className="cards-text">
                    <p className="text-center">We have provided a comprehensive risk management system for a blockchain network, using cybersecurity frameworks, assurance services and best practices to reduce risks against attacks and fraud.</p>
                  </div>
                </div>
            </div>
            </Col>
          </Row>
          <Row className="blue-bg white overflow m-0">
            <Col lg={6} md={6} sm={12}>
              <Row className='para-row'>
                <Col lg={8} md={8} sm={(12)} className='para-div'>
                  <h3 className='b-700 pb-4 pt-4 white'>Benefits of blockchain technology</h3>
                  <p>
                    Benefits of blockchain technology in the wastes management sector is often underestimated, so long has been driven with conservative, regulated policies to a more decentralized approach. The innovation and digitalization will be critical to capitalize the changing consumer behavior, which are becoming more aware on waste.
                  </p>
                  {/* <button className="readmore px-3 mt-3">Read more</button> */}
                </Col>
              </Row>
              <Row className='justify-content-center m-0'>
                <Col>
                  <img src={img_bg2} alt="Home" className="img-bg" />
                </Col>
              </Row>
            </Col>
            <Col lg={6} md={6} sm={12}>
              <Row className='justify-content-center m-0'>
                <Col>
                  <img src={img_bg1} alt="Home" className="img-bg" />
                </Col>
              </Row>
              <Row className='para-row1'>
                <Col lg={8} md={8} sm={(12)} className='para-div pt-0'>
                  <h3 className='b-700 pb-4 white'>What can blockchain technology do in wastes management?</h3>
                  <ul style={{fontFamily: 'Poppins, sans-serif',lineHeight: 2}}>
                    <li>Better wastes management</li>
                    <li>Identify household and industry wastes</li>
                    <li>Store industry data and analytics</li>
                    <li>Create awareness to public</li>
                    <li>Make industries more responsible</li>
                    <li>Greater shift towards circular economy</li>
                    <li>Develop an ecosystem for everyone to participate</li>
                    <li>A revolution in wastes management can be achieved</li>
                  </ul>
                  {/* <button className="readmore px-3 mt-3">Read more</button> */}
                </Col>
              </Row>
            </Col>
          </Row>
          {/* <Row className='client-feed-div justify-content-center pb-5'>
            <h3 className='b-700 pb-4 text-center'>Our Client Feedback</h3>
            <Col lg={4} md={4} sm={12}>
              <div className='customer-card'>
                <p>
                  Lorem ipsem dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <img className='customer-img' src={img1} alt="Customer Profile"></img>&emsp;&emsp;&emsp;
                <span className='customer-name'>Paul Nishanth</span>
              </div>
            </Col>
            <Col lg={4} md={4} sm={12}>
              <div className='customer-card'>
                <p>
                  Lorem ipsem dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <img className='customer-img' src={img1} alt="Customer Profile"></img>&emsp;&emsp;&emsp;
                <span className='customer-name'>Paul Nishanth</span>
              </div>
            </Col>
            <Col lg={4} md={4} sm={12}>
              <div className='customer-card'>
                <p>
                  Lorem ipsem dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <img className='customer-img' src={img1} alt="Customer Profile"></img>&emsp;&emsp;&emsp;
                <span className='customer-name'>Paul Nishanth</span>
              </div>
            </Col>
            <button id='review-btn' className='btn btn-sm'>Read more reviews on google</button>
          </Row> */}
          <HomeFooter />
      </div>
      
  );
}

export default Home;