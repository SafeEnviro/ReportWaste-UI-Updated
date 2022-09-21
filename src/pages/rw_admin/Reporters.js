import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios';
import { DataGrid } from '@mui/x-data-grid';
import NavCol from '../components/NavCol';
import { Card, Container } from "react-bootstrap";


function Reporters() {
      
    const columns = [
        {
            field: 'id',
            headerName: 'ID',
            width: 120,
            sortable: true,
        }, 
        {
            field: 'postal_code',
            headerName: 'Postal Code',
            width: 150,
            sortable: true,
        },
        {
          field: 'address',
          headerName: 'Address',
          width: 230,
          sortable: true,
        },
        {
          field: 'email',
          headerName: 'Email',
          width: 200,
          sortable: false,
        },
        {
          field: 'phone',
          headerName: 'Phone',
          width: 160,
          sortable: false,
        },
        {
          field: 'created_at',
          headerName: 'Joined On',
          width: 200,
          sortable: true,
        }
    ];

    const [complains, setcomplains] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3001/displaycomplain').then(
            (response) => {
                console.log(response);
                setcomplains( response.data);
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
        </div>
    );
}

export default Reporters;
