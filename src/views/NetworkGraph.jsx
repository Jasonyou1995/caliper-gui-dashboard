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
import { Graph } from 'react-d3-graph';  // blockchain graph visualization

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  Row,
  Col
} from "reactstrap";

// Graph Visualization
// graph payload (with minimalist structure)
const data = {
  nodes: [{ id: 'Orderer' }, { id: 'Peer1' }, { id: 'Peer2' }],
  links: [{ source: 'Orderer', target: 'Peer1' }, { source: 'Orderer', target: 'Peer2' }]
};

// the graph configuration, you only need to pass down properties
// that you want to override, otherwise default ones will be used
const myConfig = {
  nodeHighlightBehavior: true,
  node: {
      color: 'lightgreen',
      size: 120,
      highlightStrokeColor: 'blue'
  },
  link: {
      highlightColor: 'lightblue'
  }
};

// graph event callbacks
const onClickGraph = function() {
  window.alert(`Clicked the graph background`);
};

const onClickNode = function(nodeId) {
  window.alert(`Clicked node ${nodeId}`);
};

const onDoubleClickNode = function(nodeId) {
  window.alert(`Double clicked node ${nodeId}`);
};

const onRightClickNode = function(event, nodeId) {
  window.alert(`Right clicked node ${nodeId}`);
};

const onMouseOverNode = function(nodeId) {
  window.alert(`Mouse over node ${nodeId}`);
};

const onMouseOutNode = function(nodeId) {
  window.alert(`Mouse out node ${nodeId}`);
};

const onClickLink = function(source, target) {
  window.alert(`Clicked link between ${source} and ${target}`);
};

const onRightClickLink = function(event, source, target) {
  window.alert(`Right clicked link between ${source} and ${target}`);
};

const onMouseOverLink = function(source, target) {
  window.alert(`Mouse over in link between ${source} and ${target}`);
};

const onMouseOutLink = function(source, target) {
  window.alert(`Mouse out link between ${source} and ${target}`);
};

// Graph visualization config end here.-----

class NetworkGraph extends React.Component {
  render() {
    return (
      <>
        <div className="content">
          <Row>
            <Col md="4">
              <Card className="card-user">
                <div className="image">
                  <img
                    alt="..."
                    src={require("assets/img/hyperledger/fabric2.png")}
                  />
                </div>
                <CardBody>
                  <div>
                    <h5 className="title text-center text-primary">Fabric CCP</h5>
                  </div>
                  <p className="description text-info text-center">Maybe A Small <strong>Visualization</strong> In Here?</p>
                </CardBody>
                <CardFooter>
                  <hr />
                  <div className="button-container">
                    <Row>
                      <Col className="ml-auto" lg="4" md="6" xs="6">
                        <h5>
                          3 <br />
                          <small>Members  </small>
                        </h5>
                      </Col>
                      <Col className="ml-auto mr-auto" lg="4" md="6" xs="6">
                        <h5>
                          2 <br />
                          <small>Orderers</small>
                        </h5>
                      </Col>
                      <Col className="mr-auto" lg="4">
                        <h5>
                          24 <br />
                          <small>Peers</small>
                        </h5>
                      </Col>
                    </Row>
                  </div>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle tag="h5">Graph Operation Guide</CardTitle>
                </CardHeader>
                <CardBody>
                  <p>Shortcuts</p>

                  <p>Mouse Operations</p>

                  <p>Configurations Guide</p>
                </CardBody>
              </Card>
            </Col>
            <Col md="8">
              <Card>
                <CardHeader>
                  <CardTitle tag="h5">Fabric Blockchain Network Graph</CardTitle>
                </CardHeader>
                <CardBody>
                  <p className="description">Double Click to original scale</p>
                  <Graph
                    id="graph-id" // id is mandatory, if no id is defined rd3g will throw an error
                    data={data}
                    config={myConfig}
                    onDoubleClickNode={onDoubleClickNode}
                />
                </CardBody>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle tag="h5">Graph Configurations</CardTitle>
                </CardHeader>
                <CardBody>

                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      </>
    );
  }
}

export default NetworkGraph;
