import React, { PureComponent } from 'react';
import { Row, Col } from "react-bootstrap";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const data = [
  {
    name: 'January',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'February',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'March',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'April',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'May',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'June',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'July',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  }, 
  {
    name: 'August',
    uv: 3420,
    pv: 4170,
    amt: 2000,
  },
  {
    name: 'September',
    uv: 3420,
    pv: 3800,
    amt: 2240,
  },
  {
    name: 'October',
    uv: 3300,
    pv: 4200,
    amt: 2290,
  },
  {
    name: 'November',
    uv: 3320,
    pv: 3820,
    amt: 2300,
  },
  {
    name: 'December',
    uv: 3390,
    pv: 4090,
    amt: 2120,
  },
];

export default class Line2 extends PureComponent {

  render() {
    return (
        <Row>
            <Col>
                <LineChart
                    width={600}
                    height={350}
                    data={data}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="pv" stroke="blue" activeDot={{ r: 8 }} />
                    <Line type="monotone" dataKey="uv" stroke="green" />
                </LineChart>
            </Col>
        </Row>
    );
  }
}