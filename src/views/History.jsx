/*!

=========================================================
* Hyperledger Caliper GUI
=========================================================

* Author: Jason You
* GitHub: 
* Licensed under the Apache 2.0 - https://www.apache.org/licenses/LICENSE-2.0

Copyright (c) 2019 Jason You

*/
/*!

- Caliper GUI includes codes from Creative Time, which is licensed
- under the MIT license:
=========================================================
* Bootstrap Theme Copyright (Paper Dashboard React - v1.1.0)
=========================================================
* Product Page: https://www.creative-tim.com/product/paper-dashboard-react
* Paper Dashboard React - v1.1.0 Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/paper-dashboard-react/blob/master/LICENSE.md)
* Coded by Creative Tim
=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/

import React from "react";
import { Radar } from "react-chartjs-2";

// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Table,
  Row,
  Col
} from "reactstrap";


var dateOptions = {
  year: 'numeric',
  month: 'short',
  day: 'numeric',
  hour: '2-digit',
  minute: '2-digit',
  second: '2-digit',
};

// Temp radar data
var radarData = {
  labels: ['Read Latency', 'Read Throughput', 'Tx. Latency', 'Tx. Throughput', 'Success Rate'],
  datasets: [
    {
      label: new Date("2019-08-03T17:23:05").toLocaleDateString("en-US", dateOptions),
      backgroundColor: 'rgba(179,181,198,0.2)',
      borderColor: 'rgba(179,181,198,1)',
      pointBackgroundColor: 'rgba(179,181,198,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(179,181,198,1)',
      data: [65, 59, 90, 81, 88]
    },
    {
      label: new Date().toLocaleDateString("en-US", dateOptions),
      backgroundColor: 'rgba(255,99,132,0.2)',
      borderColor: 'rgba(255,99,132,1)',
      pointBackgroundColor: 'rgba(255,99,132,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(255,99,132,1)',
      data: [100, 96, 207, 90, 99]
    }
  ]
};
var radarOptions = {
    responsive: true,
    maintainAspectRatio: false,
    legend: {
        display: true,
        // onClick: (e) => e.stopPropagation(),
        position: "bottom",
        labels: {
            usePointStyle: true,
        }
    },
    tooltips: {
        enabled: true,
    },
};


class History extends React.Component {
  render() {
    return (
      <>
        <div className="content">
          <Row>
            <Col md="12">
              <Card>
                <CardHeader>
                  <CardTitle tag="h4">Benchmark Histories</CardTitle>
                </CardHeader>
                <CardBody>
                  <Table responsive>
                    <thead className="text-primary">
                      <tr>
                        <th>Date</th>
                        <th>Ave. Read Latency</th>
                        <th>Ave. Read Throughput</th>
                        <th>Ave. Tx. Latency</th>
                        <th className="text-right">Ave. Tx. Throughput</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>{new Date("2019-08-03T17:23:05").toLocaleDateString("en-US", dateOptions)}</td>
                        <td>30 ms</td>
                        <td>1000</td>
                        <td>50 ms</td>
                        <td className="text-right">800</td>
                      </tr>
                      <tr>
                        <td>{new Date().toLocaleDateString("en-US", dateOptions)}</td>
                        <td>45 ms</td>
                        <td>1049</td>
                        <td>53 ms</td>
                        <td className="text-right">1200</td>
                      </tr>
                    </tbody>
                  </Table>
                  <hr />
                  <p className="description">I will add clickable links to detailed JSON data (MongoDB?)</p>
                </CardBody>
              </Card>
            </Col>
            <Col md="12">
              <Card className="card-plain">
                <CardHeader>
                  <CardTitle tag="h4">Average Performance Benchmark</CardTitle>
                  <p className="card-category">
                    The average benchmark based on all previous performance on this blockchain. (ID? KEY?)
                  </p>
                </CardHeader>
                <CardBody>
                  <Radar
                    data={radarData}
                    options={radarOptions}
                    height={500}
                  />
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      </>
    );
  }
}

export default History;
