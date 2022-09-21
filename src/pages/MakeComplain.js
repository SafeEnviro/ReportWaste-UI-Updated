import React, { useState , useEffect } from "react";
import '../App.css';
import { Row , Col , Alert } from "react-bootstrap";
import axios from "axios";
import NewNav from "./components/RepNav";
import Footer from "./components/RepFooter";

function MakeComplain() {
    const [postal_code, setpostal_code] = useState("");
    const [address, setaddress] = useState("");
    const [email, setemail] = useState("");
    const [phone, setphone] = useState("");
    const [remarks, setremarks] = useState("");
    const [complaintStatus, setcomplaintStatus] = useState("");
    const [variant, setvariant] = useState("");
    const [show, setshow] = useState(false);
    useEffect(() => {
        const formdata = window.localStorage.getItem('complaint-data');
        const savedValues = (JSON.parse(formdata));
        if(savedValues){
            setemail(savedValues.email);
            setphone(savedValues.phone);
            setpostal_code(savedValues.postal_code);
            setaddress(savedValues.address);
            setremarks(savedValues.remarks); 
        }
    }, []);

    useEffect(() => {
        const formValues = {email, phone, postal_code, address, remarks}
        window.localStorage.setItem('complaint-data', JSON.stringify(formValues));
    });

    const formReset = e =>{
        setemail("");
        setphone("");
        setpostal_code("");
        setaddress("");
        setremarks("");
    }

    const complaints = e => {
        e.preventDefault(); ;
        const data ={
            email : email,
            phone : phone,
            postal_code : postal_code,
            address : address,
            remarks : remarks
        }; 
        axios.post('http://localhost:3001/makecomplaints', data).then(
            (response) => {
                console.log(response);
                if(!response.err){
                    if(response.data.err){
                        setcomplaintStatus(response.data.err.sqlMessage);
                        setvariant("danger");
                    } else {
                        MultipleUpload(e); 
                    }
                } else {
                    setcomplaintStatus(response.data.err);
                    setvariant("danger");
                }
            }
        ).catch(
            (err) => {
            console.log(err);
            }
        )
    }

    const [files, setFiles] = useState([]);
    const handleFiles = (e) => setFiles(e.target.files ? Array.from(e.target.files) : []);
    const MultipleUpload = (e) => {
        e.preventDefault();
        if (files.length > 0) {
        const formData = new FormData();
        files.forEach(file => formData.append('multipleImages', file));
        axios.post('http://localhost:3001/multiple', formData).then(
            (response) => {
                console.log(response);
                if(!response.err){
                    if(response.data.err){
                        setcomplaintStatus(response.data.err.sqlMessage);
                        setvariant("danger");
                    } else {
                        localStorage.clear();
                        formReset();
                        setcomplaintStatus(response.data.message);
                        setvariant("success");
                    }
                } else {
                    setcomplaintStatus(response.data.err);
                    setvariant("danger");
                }
            }).catch(
                (err) => {
                console.log(err);
                }
            )
        }
    }  

    const getaddress = e => {
        e.preventDefault();
        if (postal_code === ""){ 
            setshow(true);    
            return; 
        }
        setshow(false);
        const data ={
            postal_code : postal_code,
        };
        console.log(data);
        axios.post('http://localhost:3001/getaddress', data).then(
            (response) => {
                console.log(response);
                if(!response.err){
                    if(response.data.err){
                        // setcomplaintStatus(response.data.err.sqlMessage);
                        console.log(response.data.err.sqlMessage);
                        setshow(false);
                        setvariant("danger");
                    } else {
                        if (response.data.length === 0){ 
                            setshow(true);
                            setaddress("");
                            return;
                        }
                        const region = response.data[0].Region;
                        const postcode = response.data[0].Postcode;
                        const country = 'UK';
                        let Address = region + ' ' + postcode + ' ' + country;
                        setaddress(Address);
                        // setcomplaintStatus(response.data.message);
                        // console.log(response.data);
                        // setvariant("success");
                    }
                } else {
                    setshow(false);
                    // setcomplaintStatus(response.data.err);
                    console.log(response.data.err);
                    setvariant("danger");
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
                <NewNav activepath="/makec" />
                <Row style={{justifyContent:'center'}}>
                {/* Content */}
                <Col className="text-center">
                    <h5 className="p-3 mt-5">
                        Make Your complaint
                    </h5>
                    <form id="complain-form" method="POST" onSubmit={complaints} encType="multipart/form-data">
                        {/* @csrf */}
                        <Alert variant={variant}>
                            {complaintStatus}
                        </Alert>
                        <div className="form-group row">
                        <label htmlFor="recipient-name" className="
                                    col-sm-3 col-form-label
                                    form-heading
                                    text-md-right
                                ">Your Email</label>
                            <div className="col-sm-7">
                                <input type="email" name="email" className="form-control" required
                                    onChange={e => {setemail(e.target.value)}} value={email} />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="recipient-name" className="
                                        col-sm-3 col-form-label
                                        form-heading
                                        text-md-right
                                    ">Your Phone</label>
                            <Col sm={7}>
                                <div className="input-group">
                                    <div className="input-group-prepend">
                                        <div className="input-group-text">+44</div>
                                    </div>
                                    <input type="text" name="phone" className="form-control"   
                                        onChange={e => {setphone(e.target.value)}} value={phone} />

                                </div>
                            </Col>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="recipient-name" className="
                                        col-sm-3 col-form-label
                                        form-heading
                                        text-md-right
                                    ">Postal Code</label>
                            <div className="col-sm-4">
                                <input type="text" name="postal_code" className="form-control" id="postal_code" 
                                    onChange={e => {setpostal_code(e.target.value)}} value={postal_code} />
                                { show &&
                                    <small style={{color:'red'}}>Please enter an appropriate postal code, to find the Address</small>
                                }
                                </div>
                            <div className="col-md-3 text-md-right mt-2 mt-md-0">
                                <button type="button" className="btn btn-custom-green" id="find-current-location" onClick={getaddress}>
                                    Find Address
                                </button>
                            </div>
                        </div>

                        <div className="form-group row">
                            <label htmlFor="recipient-name" className="
                                        col-sm-3 col-form-label
                                        form-heading
                                        text-md-right
                                    ">Address
                            </label>
                            <div className="col-sm-7">
                                <input className="form-control" name="address" id="address" required
                                    onChange={e => {setaddress(e.target.value)}} value={address} />
                                
                            </div>
                        </div>

                        <div className="form-group row">
                            <label htmlFor="img_upload" className=" col-sm-3 col-form-label form-heading text-md-right ">Photo</label>
                            <div className="col-sm-7">
                                <input className="form-control" type="file" name="image[]" id="img_upload" multiple required
                                    onChange={handleFiles} />
                            </div>
                        </div>

                        <div className="form-group row">
                            <label htmlFor="message-text" className="
                                        col-sm-3 col-form-label
                                        form-heading
                                        text-md-right
                                    ">Remarks</label>
                            <div className="col-sm-7">
                                <textarea className="form-control" name="remarks" id="message-text"
                                    onChange={e => {setremarks(e.target.value)}} value={remarks} >
                                </textarea>
                            </div>
                        </div>
                        {/* <div className="card" id="address-card"  style={{display: 'none'}}>
                            <div className="card-body">
                                <h5 className="card-title">Report Address</h5>
                                <p className="card-text" id="card-address">
                                    Not selected
                                </p>
                            </div>
                        </div>
                        <br />
                        <div className="col-sm-12" id="complain-form-preloader">
                            <div className="spinner-border text-success" role="status"  style={{display: 'none'}}>
                                <span className="sr-only">Loading...</span>
                            </div>
                        </div> */}
                        <div className="form-group row">
                            <label className="col-sm-3 col-form-label"></label>
                            <div className="col-sm-7 mb-5">
                                <button type="submit" className="btn btn-custom-green" id="complain-submit-btn">
                                    SUBMIT
                                </button>
                            </div>
                        </div>
                    </form>
                    </Col>
                </Row>
            </Col>
        </div>
        <Footer />
        </>
    );
}

export default MakeComplain;
