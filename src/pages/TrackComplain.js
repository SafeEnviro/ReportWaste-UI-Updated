import React, { useState, useEffect } from "react";
import '../App.css';
import { Row , Col, Alert } from "react-bootstrap";
import NewNav from "./components/RepNav";
import Footer from "./components/RepFooter";
import axios from "axios";

function TrackComplain() {
  const [ trackingid, settrackingid ] = useState("");
  const [ tracking_id, settracking_id ] = useState("");
  const [ complaintStatus, setcomplaintStatus ] = useState("");
  const [ showDanger, setshowDanger ] = useState(false);
  const [ showSuccess, setshowSuccess ] = useState(false);
  
  useEffect(() => {
    const formdata = window.localStorage.getItem('Track-data');
    const savedValues = (JSON.parse(formdata));
    if(savedValues){
      settrackingid(savedValues.trackingid);
    }
  }, []);

  useEffect(() => {
      const formValues = {trackingid}
      window.localStorage.setItem('Track-data', JSON.stringify(formValues));
  });

  const formReset = e =>{
    settrackingid("");
  }

  const track = e => {
      e.preventDefault();
      const data = {
        trackingid:trackingid
      };
      console.log(data);
      axios.post('http://localhost:3001/trackscomplaints', data).then(
          (response) => {
              console.log(response);
              if(!response.err){
                  if(response.data.err){
                      setcomplaintStatus(response.data.err.sqlMessage);
                      setshowSuccess(false);
                      setshowDanger(true);
                  } else {
                    if (response.data.length === 0) {
                      setcomplaintStatus("No Complaint Found with this Tracking ID");
                      setshowSuccess(false);
                      setshowDanger(true);
                    }else{
                      localStorage.clear();
                      formReset();
                      settracking_id(response.data[0].tracking_id);
                      setcomplaintStatus(response.data[0].status);
                      console.log(response.data[0].status);
                      setshowSuccess(true);
                      setshowDanger(false);
                    }
                  }
              } else {
                  setcomplaintStatus(response.data.err); 
                      setshowSuccess(false);
                      setshowDanger(true);

              }
          }
      ).catch(
          (err) => {
            console.log(err);
          }
      )
  }

  return (
    <>
      <div className="container">
          <Col className="content">
              <NewNav activepath="/trackc" />
              <Row style={{justifyContent:'center'}}>
                <h5 className="p-3 mt-5 text-center">
                    Track Your complaint
                </h5>
                {/* Content */}
                <div className="col-sm-12 p-5 text-center">
                  {showDanger && 
                    <Alert variant="danger" className="alert-div">
                      {complaintStatus}
                    </Alert>
                  }
                  {showSuccess && 
                    <Alert variant="success" className="alert-div">
                      The Complaint with the Traking number of {tracking_id} is {complaintStatus}
                    </Alert>
                  }
                  {/* form */}
                  <form className="" id="tracking-form" onSubmit={track}>
                    <div className="form-group">
                      <input required type="text" className="form-control" id="trackingid" name="trackingid" placeholder="Tracking Id" 
                        onChange={e => {settrackingid(e.target.value)}} value={trackingid} />
                    </div>
                    <button type="submit" className="btn btn-custom-green text-center px-4 m-4">Find</button>
                  </form> 
                </div>
              </Row>
          </Col>
      </div>
      <Footer />
    </>
  );
}

export default TrackComplain;
