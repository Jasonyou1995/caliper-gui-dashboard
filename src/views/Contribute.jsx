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

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Table,
  Row,
  Col
} from "reactstrap";

class Contribute extends React.Component {
  render() {
    return (
      <>
        <div className="content">
          <Row>
            <Col className="ml-auto mr-auto" md="8">
              <Card className="card-upgrade">
                <CardHeader className="text-center">
                  <CardTitle tag="h4">Caliper GUI Beta</CardTitle>
                  <p className="card-category">
                    Do you want to add more features to Caliper GUI? Please feel free to contribute to this project's Beta.
                  </p>
                </CardHeader>
                <CardBody>
                  <Table responsive>
                    <thead>
                      <tr>
                        <th />
                        <th className="text-center">Free</th>
                        <th className="text-center">PRO</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Components</td>
                        <td className="text-center">16</td>
                        <td className="text-center">160</td>
                      </tr>
                      <tr>
                        <td>Visualizations</td>
                        <td className="text-center">4</td>
                        <td className="text-center">13</td>
                      </tr>
                      <tr>
                        <td>Benchmark Statistics</td>
                        <td className="text-center">7</td>
                        <td className="text-center">27</td>
                      </tr>
                      <tr>
                        <td>Benchmark Data Cloud Storage</td>
                        <td className="text-center">
                          <i className="nc-icon nc-simple-remove text-danger" />
                        </td>
                        <td className="text-center">
                          <i className="nc-icon nc-check-2 text-success" />
                        </td>
                      </tr>
                      <tr>
                        <td>
                          Data Encryption
                        </td>
                        <td className="text-center">
                          <i className="nc-icon nc-simple-remove text-danger" />
                        </td>
                        <td className="text-center">
                          <i className="nc-icon nc-check-2 text-success" />
                        </td>
                      </tr>
                      <tr>
                        <td>More Functionalities</td>
                        <td className="text-center">
                          <i className="nc-icon nc-simple-remove text-danger" />
                        </td>
                        <td className="text-center">
                          <i className="nc-icon nc-check-2 text-success" />
                        </td>
                      </tr>
                      <tr>
                        <td>Premium Support</td>
                        <td className="text-center">
                          <i className="nc-icon nc-simple-remove text-danger" />
                        </td>
                        <td className="text-center">
                          <i className="nc-icon nc-check-2 text-success" />
                        </td>
                      </tr>
                      <tr>
                        <td />
                        <td className="text-center">Free</td>
                        <td className="text-center">Just $49</td>
                      </tr>
                      <tr>
                        <td className="text-center" />
                        <td className="text-center">
                          <Button
                            className="btn-round disabled"
                            color="default"
                            href="#pablo"
                            onClick={e => e.preventDefault()}
                          >
                            Current Version
                          </Button>
                        </td>
                        <td className="text-center">
                          <Button
                            className="btn-round"
                            color="primary"
                            href="https://www.creative-tim.com/product/paper-dashboard-2-pro?ref=pd-free-upgrade-live"
                            rel="noopener noreferrer"
                            target="_blank"
                          >
                            Upgrade to PRO
                          </Button>
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      </>
    );
  }
}

export default Contribute;
