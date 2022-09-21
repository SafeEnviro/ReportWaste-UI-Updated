import React, { PureComponent } from 'react';
import { Row, Col } from "react-bootstrap";
import { PieChart, Pie,  Cell } from 'recharts';
import axios from 'axios';


const data = [
  { name: 'Group A', value: 80 },
  { name: 'Group B', value: 20 },
];

const COLORS = ['blue', 'green'];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

export default class Pie1 extends PureComponent {
  constructor (props){
    super(props)

    this.state = {
      complaincount: 0,
      resolvedcount: 0,
    }
  }
  


  componentDidMount() {
    axios.get("http://localhost:3001/CountComplain").then(
        (response) => {
            let complaincount = response.data.complains;
            let resolvedcount = response.data.resolvedcomplains;
            let per1 = (complaincount / (complaincount + resolvedcount)) * 100;
            let per2 = (resolvedcount / (complaincount + resolvedcount)) * 100;
            this.setState({complaincount : per1.toFixed(1) , resolvedcount : per2.toFixed(1)});
        }
    ).catch(
        (err) => {
            console.log(err);
        }
    )
  }

  render() {
    return (
      <Row>
        {console.log(this.state.complaincount , this.state.resolvedcount , 1)}
        <Col>
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
}