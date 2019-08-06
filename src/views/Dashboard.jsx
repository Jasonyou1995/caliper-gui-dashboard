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

// Importing All Data
import {
  myData as data,
  barData,
  doughnutData,
  radarData,
  radarOptions,
  barOptions,
  lineOptions,
  doughnutOptions,
} from "../data/mockData";

// Utility functions for notifications
import NotificationAlert from "react-notification-alert";

// Dashboard overview and visualization components
import DashboardOverview from "./DashboardOverview";
import DashboardVisualization from "./DashboardVisualization";

class Dashboard extends React.Component {
  // chart.js data
  state = {
    data: data,
    barData: barData,
    doughnutData: doughnutData,
    radarData: radarData,
    radarOptions: radarOptions,
    barOptions: barOptions,
    lineOptions: lineOptions,
    doughnutOptions: doughnutOptions,
  }

  // Notification function for alert information
  notify() {
    // Dashboard notification
    this.refs.notificationAlert.notificationAlert({
      place: "br",
      message: (
          <div>
              <div>
                  Welcome to <b>Caliper GUI</b> - An Intuitive Visualization Tool for Hyperledger Caliper.
              </div>
          </div>
      ),
      type: "warning",
      icon: "now-ui-icons ui-1_bell-53",
      autoDismiss: 7
    });
  }
  
  // notifications for alert and debug
  componentDidMount() {
    this.notify();    // a notification tab
  }

  // select proper component to display
  selectComponent = () => {
    let currentPath = this.props.location.pathname.split("/");
    let currentComponent = currentPath[currentPath.length - 1];
    let name = "";
    let icon = null;

    switch(currentComponent) {
      case "dashboard":
        name = "Overview";
        break;
      case "tx-throughput":
        name = "Transaction Throughput";
        icon = <i className="nc-icon nc-delivery-fast text-warning" />;
        break;
      case "tx-latency":
        name = "Transaction Latency";
        icon = <i className="nc-icon nc-user-run text-warning" />;
        break;
      case "read-throughput":
        name = "Read Throughput";
        icon = <i className="nc-icon nc-money-coins text-warning" />;
        break;
      case "read-latency":
        name = "Read Latency";
        icon = <i className="nc-icon nc-spaceship text-warning" />;
        break;
      default:
        name = "";
    }

    // Determine the component to display based on name
    if (name === "Overview") {
      return (
        <DashboardOverview />
      )
    } else if (name !== "") {
      return (
        <DashboardVisualization
          name={name}
          icon={icon}
          lineData={data}
          lineOptions={lineOptions}
          lineHeight={100}
          barData={barData}
          barOptions={barOptions}
          barHeight={300}
        />
      );
    } else {
      return (
        <>
          <h1>404</h1>
        </>
      );
    }
  }

  render() {
    return (
      <>
        <div className="content">
          <NotificationAlert ref="notificationAlert" />
          {this.selectComponent()}
        </div>
      </>
    );
  }
}

export default Dashboard;
