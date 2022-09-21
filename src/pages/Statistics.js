import React, { useState, useEffect } from "react";
import '../App.css';
import { Row,Col } from "react-bootstrap";
import NewNav from "./components/RepNav";
import Footer from "./components/RepFooter";
import svg1 from "../asset/img/card/received.svg";
import svg2 from "../asset/img/card/resolved.svg";
import svg3 from "../asset/img/card/time.svg";
import Line1 from "./components/charts/Line1";
import Line2 from "./components/charts/Line2";
import Line3 from "./components/charts/Line3";
import Bar1 from "./components/charts/Bar1";
import Bar2 from "./components/charts/Bar2";
import Pie1 from "./components/charts/Pie1";
import Pie2 from "./components/charts/Pie2";
import axios from "axios";
import PieN from "./components/charts/Pie";

function Statistics() {
    const [complaincount, setcomplaincount] = useState();
    const [resolvedcount, setresolvedcount] = useState();
    const [dates, setdates] = useState([]);
    const [resolvedtime, setresolvedtime] = useState();

    useEffect(() => {
        axios.get("http://localhost:3001/CountComplain").then(
            (response) => {
                setcomplaincount(response.data.complains);
                setresolvedcount(response.data.resolvedcomplains);
                setdates(response.data.dates);
            }
        ).catch(
            (err) => {
                console.log(err);
            }
        )
    },[]);

    useEffect(() => {
        const time = () => {
            let d_time = 0;
            for (let i = 0; i < dates.length; i++) {
                let created_at = new Date(dates[i].created_at);
                let updated_at = new Date(dates[i].updated_at);
                d_time += (updated_at - created_at);
            }
            // tosecond  * tominutes * tohours * todays
            d_time = d_time / (1000 * 60 * 60 * 24);
            setresolvedtime((d_time/dates.length).toFixed(0));
        }
        time();
    },[dates]);
    

  return (
    <>
    <div className="container">
        <Col className="content">
            <NewNav activepath="/statistic" />
            <Row style={{justifyContent:'center'}}>
              {/* Content */}
              <div className="mt-5"></div>
              <div className="row justify-content-center m-auto">
                  <div className="col-12 col-xm-12 col-sm-12 col-md-4 col-lg-4">
                      <a className="card stat-card" href="#0">
                          <img className="card-image" src={svg1} alt="" />
                          <p className="percentage" id="nbr1">{complaincount}</p>
                          <p className="text_para">Total Number of Complaints Received</p>
                      </a>
                  </div>
                  <div className="col-12 col-xm-12 col-sm-12 col-md-4 col-lg-4">
                      <a className="card stat-card" href="#0">
                          <img className="card-image" src={svg2} alt="" />
                          <p className="percentage" id="nbr2">{resolvedcount}</p>
                          <p className="text_para">Number of Complaints Resolved</p>
                      </a>
                  </div>
                  <div className="col-12 col-xm-12 col-sm-12 col-md-4 col-lg-4">
                      <a className="card stat-card" href="#0">
                          <img className="card-image" src={svg3} alt="" />
                          <p className="percentage" id="nbr3">{resolvedtime} Days</p>
                          <p className="text_para">Average Time Taken to Resolve Each Complaint</p>
                      </a>
                  </div>
              </div>

                <div className="row" style={{marginTop: '15px'}}>
                    <div className="col-12 " style={{marginTop: '15px'}}>
                        {/* @include('site.shared.charts.monthly-line-chart',['data'=>$monthlyWiseData]) */} 
                        <p className="text-center">TOTAL NUMBER OF COMPLAINTS Monthly</p>
                        <Line1 />
                    </div>
                    <div className="col-12 " style={{marginTop: '42px'}}>
                        {/* @include('site.shared.charts.visitors-chart',['data'=>$visitorsData]) */} 
                        <p className="text-center">NUMBER OF COMPLAINTS BASED ON GEO LOCATION Chart is here</p>
                    </div>
                </div>


                <div className="row justify-content-center m-auto" style={{marginTop: '18px'}}>
                    <div className="col-12 col-xm-12 col-sm-12 col-md-6 col-lg-6 " style={{marginTop: '28px'}}>
                        {/* @include('site.shared.charts.statistic-chart-5') */} 
                        <p className="text-center">HOUSEHOLD AND COMMERCIAL WASTE IN ENGLAND, 2018/19 AND 2019/20</p>
                        <Line2 />
                    </div>
                    <div className="col-12 col-xm-12 col-sm-12 col-md-6 col-lg-6 " style={{marginTop: '28px'}}>
                        {/* @include('site.shared.charts.statistic-chart-2') */} 
                        <p className="text-center">TYPES OF OTHER FLY-TIPPING IN ENGLAND, 2019/20, COMPARED TO 2018/19</p>
                        <Line3 />
                    </div>
                </div>

                <div className="row" style={{marginTop: '18px'}}>

                    <div className="col-12 col-xl-6 col-md-6 col-sm-12 col-xs-12" style={{marginTop: '28px', marginBottom: '25px'}}>
                        {/* @include('site.shared.charts.statistic-chart-3') */} 
                        <p className="text-center">FLY-TIPPING INCIDENTS IN ENGLAND, 2014/15 TO 2019/20</p>
                        <Bar1 />
                    </div>
                    <div className="col-12 col-xl-6 col-md-6 col-sm-12 col-xs-12" style={{marginTop: '28px', marginBottom: '25px'}}>
                        {/* @include('site.shared.charts.statistic-chart-4') */} 
                        <p className="text-center">FLY- TIPPING ENFORCEMENT ACTIONS IN ENGLAND, 2012/13 TO 2019/20</p>
                        <Bar2 />
                    </div>
                    <div className="col-12 col-xl-6 col-md-6 col-sm-12 col-xs-12" style={{marginTop: '28px', marginBottom: '25px'}}>
                        {/* @include('site.shared.charts.statistic-chart-1') */} 
                        <p className="text-center">FLY-TIPPING INCIDENTS PER 1000 PEOPLE IN ENGLAND BY REGION, 2019/20</p>
                        <Pie2 />
                    </div>

                    <div className="col-12 col-xl-6 col-md-6 col-sm-12 col-xs-12" style={{marginTop: '28px', marginBottom: '25px'}}>
                        <p className="text-center">COMPLAINTS RESOLVED FOR THE MONTH</p>
                        {/* <h6 ><b>COMPLAINTS RESOLVED FOR THE MONTH in Pie Chart is here</b></h6> */}
                        {/* <div className="row" style={{marginTop: '20px'}}>
                            <hr style={{width:'0%'}} />
                        </div>
                        <canvas id="pieChart"></canvas> */}
                        <PieN />
                    </div>
                </div>

            </Row>
        </Col>
    </div>
    <Footer />
    </>
  );
}

export default Statistics;
