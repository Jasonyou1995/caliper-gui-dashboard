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

// import configuration forms
import TestConfigurationForm from "../components/Forms/TestConfigurationForm";
import FabricConfigurationForm from "../components/Forms/FabricConfigurationForm";

class Configuration extends React.Component {
  render() {
    return (
      <>
        <div className="content">

          <Row>
            <Col className="ml-auto mr-auto" md="10">
              <Card>

                <CardHeader className="text-center">
                  <CardTitle tag="h4">Test Configuration</CardTitle>
                  <p className="card-category">
                    You can generate, save, and export configuration file in here.
                  </p>
                </CardHeader>

                <CardBody>
                  <div className="text-center">
                    <Button color="primary" style={{width:"300px"}}>Default Configuration</Button>
                    <Button color="danger" style={{width:"300px"}}>Clear Form</Button>
                  </div>

                  <TestConfigurationForm />

                  <div className="text-center">
                    <Button color="success" style={{width:"300px"}}>Generate</Button>
                  </div>
                </CardBody>

              </Card>
            </Col>
          </Row>

          <Row>
            <Col className="ml-auto mr-auto" md="10">
              <Card>
                <CardHeader className="text-center">
                  <CardTitle tag="h4">Fabric Configuration</CardTitle>
                  <p className="">
                    Using this form to generate Hyperledger Fabric Configuration File.
                  </p>
                </CardHeader>

                <CardBody>
                  <div className="text-center">
                    <Button color="primary" style={{width:"300px"}}>Default Configuration</Button>
                    <Button color="danger" style={{width:"300px"}}>Clear Form</Button>
                  </div>

                  <FabricConfigurationForm />

                  <div className="text-center">
                    <Button color="success" style={{width:"300px"}}>Generate</Button>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      </>
    );
  }
}

export default Configuration;
