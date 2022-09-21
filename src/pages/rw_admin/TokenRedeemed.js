import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios';
import { DataGrid } from '@mui/x-data-grid';
import NavCol from '../components/NavCol';
import { Card, Container } from "react-bootstrap";


function TokenRedeemed() {
    
    const columns = [
        {
            field: 'id',
            headerName: 'Id',
            width: 200,
            unique: true,
            sortable: true,
        }, {
            field: 'email',
            headerName: 'Email',
            width: 200,
            unique: true,
            sortable: true,
        },
        {
            field: 'redeemed_tokens',
            headerName: 'Redeemed Tokens',
            width: 200,
            sortable: true,
        },
        {
            field: 'last_redeemed_date',
            headerName: 'Last Redeemed Date',
            width: 200,
            sortable: true,
        }
    ];
    
    
    const [redeemed, setredeemed] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3001/displayredeemed').then(
            (response) => {
                console.log(response);
                setredeemed(response.data);
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
                        rows={redeemed}
                        columns={columns}
                        pageSize={10}
                    />
                </Card>
            </Container>
        </div>
    );
}

export default TokenRedeemed;
