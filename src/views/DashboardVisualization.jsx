/*!

=========================================================
* Hyperledger Caliper GUI
=========================================================

* Author: Jason You
* GitHub: 
* Licensed under the Apache 2.0 - https://www.apache.org/licenses/LICENSE-2.0

Copyright (c) 2019 Jason You

*/

import React from "react";
// react plugin used to create charts [https://github.com/jerairrest/react-chartjs-2]
import { 
  Line,
  Bar, 
  Doughnut,
} from "react-chartjs-2";


// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  Row,
  Col
} from "reactstrap";

const DashboardVisualization = function(props) {
    return(
      <div id="tx-throughput-block">
        <Row>
          <Col md='12' className='text-center text-warning'>
            <h2><i className="fa fa-bolt" aria-hidden="true"></i>{props.name}</h2>
          </Col>
        </Row>

        <Row>
          <Col md='12'>
            <Card>
              <CardHeader>
                <CardTitle>{props.name} Since Running</CardTitle>
                <p className='card-category'>Description</p>
              </CardHeader>
              <CardBody>
                <Line
                  data={props.lineData}
                  options={props.lineOptions}
                  height={props.lineHeight}
                />
              </CardBody>
              <CardFooter>
                <hr />
                <div className='stats'>
                  <i className="fa fa-anchor" /> Anchor
                </div>
              </CardFooter>
            </Card>
          </Col>
        </Row>

        <Row>
          <Col md='6'>
            <Card>
              <CardHeader>
                <CardTitle>Success Rate</CardTitle>
                <p className='card-category'>Doughnut Chart for Success Rate Visualization with Patternse</p>
              </CardHeader>
              <CardBody>
                <Doughnut
                  data={props.doughnutData}
                  options={props.doughnutOptions}
                  height={props.doughnutHeight}
                />
              </CardBody>
              <CardFooter>
                <hr />
                <div className='stats'>
                  <i className="fa fa-anchor" /> Anchor
                </div>
              </CardFooter>
            </Card>
          </Col>
          <Col md='6'>
            <Card>
              <CardHeader>
                <CardTitle>Monthly Latency Tx. Counting (Slow, Normal, Fast)</CardTitle>
                <p className='card-category'>Stacked bar chart with slow as red, normal as yellow, and fast as green.</p>
              </CardHeader>
              <CardBody>
                <Bar
                  data={props.barData}
                  options={props.barOptions}
                  height={props.barHeight}
                />
              </CardBody>
              <CardFooter>
                <hr />
                <div className='stats'>
                  <i className="fa fa-anchor" /> Anchor
                </div>
              </CardFooter>
            </Card>
          </Col>
        </Row>
      </div>
    );
}



export default DashboardVisualization;