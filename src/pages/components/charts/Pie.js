import React, { useState, useEffect } from 'react';
import { Row, Col } from "react-bootstrap";
import { PieChart, Pie,  Cell } from 'recharts';
import axios from 'axios';




function PieN() {
    
    const [complaincount, setcomplaincount] = useState(0);
    const [resolvedcount, setresolvedcount] = useState(0);
    const [per1, setper1] = useState(0);
    const [per2, setper2] = useState(0);
      
    const COLORS = ['#0088fe', '#00c49f'];
      
    const RADIAN = Math.PI / 180;
    const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);
      
        return (
          <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
            {`${(percent * 100).toFixed(1)}%`}
          </text>
        );
    }
    

    useEffect(() => {
        axios.get("http://localhost:3001/CountComplain").then(
            (response) => {
                setcomplaincount(response.data.complains);
                setresolvedcount(response.data.resolvedcomplains);
            }
        ).catch(
            (err) => {
                console.log(err);
            }
        )
    });

    useEffect(() => {
        makeper();
    });
    
    const makeper = () => {
        console.log(complaincount , resolvedcount , 1);
        let per1 = ((complaincount-resolvedcount) / complaincount) * 100;
        let per2 = (resolvedcount / complaincount) * 100;
        console.log(per1 , per2 ,parseFloat(per1.toFixed(1)) , per2.toFixed(1));
        const intper1 = (parseFloat(per1.toFixed(1)));
        const intper2 = (parseFloat(per2.toFixed(1)));
        console.log(intper1 , intper2);
        setper1(intper1);
        setper2(intper2);
    }
    
    const data = [
        { name: 'Group A', value: per1 },
        { name: 'Group B', value: per2 }
    ];
    
    return (
      <Row>
        <Col>
            <div className='row justify-content-center align-items-center'>
                <div style={{width:'14px', height: '10px', backgroundColor: COLORS[0], margin:'0', padding: '0'}}></div><small style={{color: COLORS[0], width:'auto'}}>Unresolved</small>
                <div style={{width:'14px', height: '10px', backgroundColor: COLORS[1], margin:'0', padding: '0' }}></div><small style={{color: COLORS[1], width:'auto'}}>Resolved</small>
            </div>
            <PieChart width={400} height={400}>
                <Pie
                data={data}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={renderCustomizedLabel}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
                >
                {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
                </Pie>
            </PieChart>
        </Col>
        
      </Row>
    );
}

export default PieN;