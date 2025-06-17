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
import {
    Row,
    Col,
    Card,
    CardBody,
    CardHeader,
    CardTitle,
    CardFooter,
} from "reactstrap";

import { 
    Line,
  } from "react-chartjs-2";

  import {
    dashboard24HoursPerformanceChart,
    dashboardNASDAQChart
  } from "variables/charts.jsx";

const DashboardOverview = function() {
    return (
      <div id="overview-block">
          <Row>
            <Col lg="3" md="6" sm="6">
              <a
                href="/admin/dashboard/tx-throughput"
                target="_self"
                style={{"textDecoration": "none"}}
              >
                <Card className="card-stats">
                  <CardBody>
                    <Row>
                      <Col md="4" xs="5">
                        <div className="icon-big text-center icon-warning">
                          <i className="nc-icon nc-delivery-fast text-warning" />
                        </div>
                      </Col>
                      <Col md="8" xs="7">
                        <div className="numbers">
                          <p className="card-category">Tx TPS</p>
                          <CardTitle tag="p">150</CardTitle>
                          <p />
                        </div>
                      </Col>
                    </Row>
                  </CardBody>
                  <CardFooter>
                    <hr />
                    <div className="stats">
                          <i className="fas fa-sync-alt" /> See Details
                    </div>
                  </CardFooter>
                </Card>
              </a>
            </Col>
            <Col lg="3" md="6" sm="6">
              <a
                href="/admin/dashboard/tx-latency"
                target="_self"
                style={{"textDecoration": "none"}}
              >
                <Card className="card-stats">
                  <CardBody>
                    <Row>
                      <Col md="4" xs="5">
                        <div className="icon-big text-center icon-warning">
                          <i className="nc-icon nc-user-run text-warning" />
                        </div>
                      </Col>
                      <Col md="8" xs="7">
                        <div className="numbers">
                          <p className="card-category">Tx Latency</p>
                          <CardTitle tag="p">1345 ms</CardTitle>
                          <p />
                        </div>
                      </Col>
                    </Row>
                  </CardBody>
                  <CardFooter>
                    <hr />
                    <div className="stats">
                      <i className="fas fa-sync-alt" /> See Details
                    </div>
                  </CardFooter>
                </Card>
              </a>
            </Col>
            <Col lg="3" md="6" sm="6">
              <a
                href="/admin/dashboard/read-throughput"
                target="_self"
                style={{"textDecoration": "none"}}
              >
                <Card className="card-stats">
                  <CardBody>
                    <Row>
                      <Col md="4" xs="5">
                        <div className="icon-big text-center icon-warning">
                          <i className="nc-icon nc-money-coins text-warning" />
                        </div>
                      </Col>
                      <Col md="8" xs="7">
                        <div className="numbers">
                          <p className="card-category">Read TPS</p>
                          <CardTitle tag="p">63</CardTitle>
                          <p />
                        </div>
                      </Col>
                    </Row>
                  </CardBody>
                  <CardFooter>
                    <hr />
                    <div className="stats">
                      <i className="fas fa-sync-alt" /> See Details
                    </div>
                  </CardFooter>
                </Card>
              </a>
            </Col>
            <Col lg="3" md="6" sm="6">
              <a
                href="/admin/dashboard/read-latency"
                target="_self"
                style={{"textDecoration": "none"}}
              >
                <Card className="card-stats">
                  <CardBody>
                    <Row>
                      <Col md="4" xs="5">
                        <div className="icon-big text-center icon-warning">
                          <i className="nc-icon nc-spaceship text-warning" />
                        </div>
                      </Col>
                      <Col md="8" xs="7">
                        <div className="numbers">
                          <p className="card-category">Read Latency</p>
                          <CardTitle tag="p">450 ms</CardTitle>
                          <p />
                        </div>
                      </Col>
                    </Row>
                  </CardBody>
                  <CardFooter>
                    <hr />
                    <div className="stats">
                      <i className="fas fa-sync-alt" /> See Details
                    </div>
                  </CardFooter>
                </Card>
              </a>
            </Col>
          </Row>
          <Row>
            <Col md="12">
              <Card className="card-chart">
                <CardHeader>
                  <CardTitle tag="h5">Throughput Overview</CardTitle>
                  <p className="card-category">Line Chart with Points</p>
                </CardHeader>
                <CardBody>
                  <Line
                    data={dashboardNASDAQChart.data}
                    options={dashboardNASDAQChart.options}
                    width={400}
                    height={100}
                  />
                </CardBody>
                <CardFooter>
                  <div className="chart-legend">
                    <i className="fa fa-circle text-info" /> Tx Throughput{" "}
                    <i className="fa fa-circle text-warning" /> Read Throughput
                  </div>
                  <hr />
                  <div className="card-stats">
                    <a
                      href="/admin/dashboard"
                      style={{
                        cursor:"pointer",
                        textDecoration:"none",
                        color: "#A9A9A9"
                      }}
                    >
                      <i className="fa fa-history" /> Updated 3 minutes ago
                    </a>
                  </div>
                </CardFooter>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col md="12">
              <Card>
                <CardHeader>
                  <CardTitle tag="h5">Latency Overview</CardTitle>
                  <p className="card-category">[Fast] Green, [Medium] Yellow, [Slow] Red</p>
                </CardHeader>
                <CardBody>
                  <Line
                    data={dashboard24HoursPerformanceChart.data}
                    options={dashboard24HoursPerformanceChart.options}
                    width={400}
                    height={100}
                  />
                </CardBody>
                <CardFooter>
                  <hr />
                  <div className="card-stats">
                    <a
                      href="/admin/dashboard"
                      style={{
                        cursor:"pointer",
                        textDecoration:"none",
                        color: "#A9A9A9"
                      }}
                    >
                      <i className="fa fa-history" /> Updated 3 minutes ago
                    </a>
                  </div>
                </CardFooter>
              </Card>
            </Col>
          </Row>
        </div>
    );
  }

  export default DashboardOverview;