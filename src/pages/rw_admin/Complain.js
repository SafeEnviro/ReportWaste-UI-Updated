import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios';
import { DataGrid } from '@mui/x-data-grid';
import NavCol from '../components/NavCol';
import { Card, Container, OverlayTrigger, Tooltip, Button, Modal, Alert } from "react-bootstrap";
import swal from "sweetalert";


function Complain() {
    const [show, setShow] = useState(false);
    const [remarks, setremarks] = useState("");
    const [status, setstatus] = useState("");
    const [updateStatus, setupdateStatus] = useState("");
    const [variant, setvariant] = useState("");
    const [para, setpara] = useState();
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

   
    const columns = [
        {
            field: 'id',
            headerName: 'ID',
            width: 91,
            sortable: true,
        },
        {
            field: 'tracking_id',
            headerName: 'Tracking ID',
            width: 150,
            sortable: true,
        },
        {
          field: 'email',
          headerName: 'Email',
          width: 130,
          sortable: false,
        },
        {
          field: 'phone',
          headerName: 'Phone',
          width: 120,
          sortable: false,
        },
        {
          field: 'remarks',
          headerName: 'Remarks',
          width: 130,
          sortable: true,
        },
        {
          field: 'status',
          headerName: 'Status',
          width: 120,
          sortable: true,
        },
        {
          field: 'created_at',
          headerName: 'Created At',
          width: 180,
          sortable: true,
        },
        {
          field: 'updated_at',
          headerName: 'Updated At',
          width: 180,
          sortable: true,
        },
        {
          field: 'edit_id',
          headerName: ' ',
          width: 90,
          sortable: false,
          renderCell: (params) => {
              return (
                <OverlayTrigger
                    key='bottom-1'
                    placement='bottom'
                    overlay={
                    <Tooltip id='tooltip-connected'>
                        <strong>Edit</strong>.
                    </Tooltip>
                    }
                >
                    <Button variant="primary" onClick={() => {edit(params.value)}}>
                        <i className="fas fa-edit"></i>
                    </Button>
                </OverlayTrigger>
              )
          },
        },
    ];

    const edit = (para) => {
        console.log(para);
        handleShow();
        setpara(para);
        // eslint-disable-next-line array-callback-return
        complains.map((complain) => { 
            if(complain.id === para){
                setstatus(complain.status);
                if (complain.remarks === null){
                    setremarks("");
                }else{
                    setremarks(complain.remarks);
                }
            }
        });
    }
    
    const update = e => {
        e.preventDefault();
        console.log("updated")
        const data ={
            id : para,
            status : status,
            remarks : remarks
        }; 
        axios.post('http://localhost:3001/updatecom', data).then(
            (response) => {
                console.log(response);
                if(!response.err){
                    if(response.data.err){
                        setupdateStatus(response.data.err.sqlMessage);
                        setvariant("danger");
                    } else {
                        setupdateStatus(response.data.message);
                        setvariant("success");
                        swal("Success", "Status Updated", "success").then(() => {
                            window.location.reload();
                        });
                    }
                } else {
                    setupdateStatus(response.data.err);
                    setvariant("danger");
                }
            }
        ).catch(
            (err) => {
            console.log(err);
            }
        )
    }

    const [complains, setcomplains] = useState([]);
    

    useEffect(() => {
        axios.get('http://localhost:3001/displaycomplain').then(
            (response) => {
                console.log(response);
                const initiall_complains = response.data;
                const complains = initiall_complains.map((complain) => {
                    return {
                        id: complain.id,
                        tracking_id: complain.tracking_id,
                        email: complain.email,
                        phone: complain.phone,
                        remarks: complain.remarks,
                        status: complain.status,
                        created_at: complain.created_at,
                        updated_at: complain.updated_at,
                        edit_id: complain.id,
                    }
                });
                console.log(complains);
                setcomplains(complains);
            }
        ).catch(
            (err) => {
                console.log(err);
                // setshow(true);
                // setreviewStatus(err.message);
            }
        )
    },[])
      
    return (
        <div className="bg-light">
            <NavCol />
            <Container className="justify-content-center col-lg-10 col-md-10 col-sm-12 card-div">
                <Card className="w-100">
                    <DataGrid autoHeight 
                        rows={complains}
                        columns={columns}
                        pageSize={10}
                    />
                </Card>
            </Container>
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title>Edit Complaint No {para}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form id="complain-form" method="POST" onSubmit={update}>
                        <Alert variant={variant}>
                            {updateStatus}
                        </Alert>
                        <div className="form-group row">
                        <label htmlFor="recipient-name" className="
                                    col-sm-3 col-form-label
                                    form-heading
                                    text-md-right
                                ">Status</label>
                            <div className="col-sm-7">
                                <select type="text" name="status" list='listid' className="form-control" required
                                    onChange={e => {setstatus(e.target.value)}} value={status} >
                                    {/* <datalist id='listid'> */}
                                        <option label='pending' value='pending' />
                                        <option label='completed' value='completed' />
                                    {/* </datalist> */}
                                </select>
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
                        <div className="form-group row">
                            <label className="col-sm-3 col-form-label"></label>
                            <div className="col-sm-7 mb-5">
                                <button type="submit" className="btn btn-custom-green" id="complain-submit-btn">
                                    SUBMIT
                                </button>
                            </div>
                        </div>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    {/* <Button variant="primary" onClick={}>Update</Button> */}
                </Modal.Footer>
            </Modal> 
        </div>
    );
}

export default Complain;
