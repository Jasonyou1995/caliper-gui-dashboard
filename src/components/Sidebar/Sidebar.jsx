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
import { NavLink, Link } from "react-router-dom";
import { Collapse, Button, Nav, NavItem } from "reactstrap";
// javascript plugin used to create scrollbars on windows
import PerfectScrollbar from "perfect-scrollbar";

import logo from "caliper-logo.png";
import { copyFileSync } from "fs";
import { isWhiteSpaceLike } from "typescript";

var ps;

class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    this.activeRoute.bind(this);
    this.sidebar = React.createRef();
    this.state = {
      collapse: true,
      connected: false,
      pathSlice: [],
    };
  }

  toggle = () => {
    this.setState(state => ({ collapse: !state.collapse }));
  }

  noCollapse = () => {
    this.setState(state => ({ collapse: false }));
  }
  
  toggleConnection = () => {
    this.setState(state => ({ connected: !state.connected }));
  }

  // verifies if routeName is the one active (in browser input)
  activeRoute(routeName) {
    return this.props.location.pathname.indexOf(routeName) > -1 ? "active" : "";
  }
  componentDidMount() {
    if (navigator.platform.indexOf("Win") > -1) {
      ps = new PerfectScrollbar(this.sidebar.current, {
        suppressScrollX: true,
        suppressScrollY: false
      });
    }
  }
  componentWillUnmount() {
    if (navigator.platform.indexOf("Win") > -1) {
      ps.destroy();
    }
  }
  render() {
    return (
      <div
        className="sidebar"
        data-color={this.props.bgColor}
        data-active-color={this.props.activeColor}
      >
        <div className="logo">
          <Link
            to="/"
            className="simple-text logo-mini"
          >
            <div className="logo-img">
              <img src={logo} alt="react-logo" />
            </div>
          </Link>
          <Link
            to="/"
            className="simple-text logo-normal"
          >
            Caliper GUI
          </Link>

          <div>
            {!this.state.connected ?
              <Button
                block
                color="primary"
                size="sm"
                onClick={this.toggleConnection}
              >
                <i className="nc-icon nc-button-power" />
                &nbsp;
                Connect
              </Button> :
              <Button
                block
                color="danger"
                size="sm"
                onClick={this.toggleConnection}
              >
                <i className="nc-icon nc-button-power" />
                &nbsp;
                Disconnect
              </Button>
            }
          </div>
        </div>

        <div className="sidebar-wrapper" ref={this.sidebar}>
          <Nav>
            {this.props.routes.map((prop, key) => {
              return (
                <NavItem
                  className={
                    this.activeRoute(prop.path) +
                    (prop.bottom ? " active-pro" : "")
                  }
                  key={key}
                >
                  <NavLink
                    to={prop.layout + prop.path}
                    className="nav-link"
                    activeClassName="active"
                    onClick={
                      prop.path === "/dashboard" ?
                      this.toggle :
                      this.noCollapse
                    }
                  >
                    <i className={prop.icon} />
                    <p>{prop.name}</p>
                  </NavLink>

                  {
                    prop.path === "/dashboard" ?
                    <Collapse
                      isOpen={this.state.collapse}
                      style={{backgroundColor: "rgba(236, 249, 249, 0.05)"}}
                    >
                      <NavItem
                        className={this.activeRoute(prop.path + "/tx-throughput")}
                        key="tx-throughput"
                      >
                        <NavLink
                          to={prop.layout + prop.path + "/tx-throughput"}
                          className="nav-link"
                          activeClassName="active"
                        >
                          Transaction Throughput
                        </NavLink>
                      </NavItem>
                      <NavItem
                        className={this.activeRoute(prop.path + "/tx-latency")}
                        key="tx-latency"
                      >
                        <NavLink
                          to={prop.layout + prop.path + "/tx-latency"}
                          className="nav-link"
                          activeClassName="active"
                        >
                          Transaction Latency
                        </NavLink>
                      </NavItem>
                      <NavItem
                        className={this.activeRoute(prop.path + "/read-throughput")}
                        key="read-throughput"
                      >
                        <NavLink
                          to={prop.layout + prop.path + "/read-throughput"}
                          className="nav-link"
                          activeClassName="active"
                        >
                          Read Throughput
                        </NavLink>
                      </NavItem>
                      <NavItem
                        className={this.activeRoute(prop.path + "/read-latency")}
                        key="read-latency"
                      >
                        <NavLink
                          to={prop.layout + prop.path + "/read-latency"}
                          className="nav-link"
                          activeClassName="active"
                        >
                          Read Latency
                        </NavLink>
                      </NavItem>
                    </Collapse> :
                    null
                  }
                </NavItem>
              );
            })}
          </Nav>
        </div>
      </div>
    );
  }
}

export default Sidebar;
