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

import Dashboard from "views/Dashboard.jsx";
// import Notifications from "views/Notifications.jsx";
import Icons from "views/Icons.jsx";
import Documentation from "views/Documentation.jsx";
import History from "views/History.jsx";
import NetworkGraph from "views/NetworkGraph.jsx";
import Configuration from "views/Configuration.jsx";

var routes = [
  { 
    path: "/dashboard",
    name: "Dashboard",
    icon: "nc-icon nc-chart-bar-32",
    component: Dashboard,
    layout: "/admin"
  },
  {
    path: "/network-graph",
    name: "Network Graph",
    icon: "nc-icon nc-vector",
    component: NetworkGraph,
    layout: "/admin"
  },
  // {
  //   path: "/notifications",
  //   name: "Notifications",
  //   icon: "nc-icon nc-bell-55",
  //   component: Notifications,
  //   layout: "/admin"
  // },
  {
    path: "/history",
    name: "History Benchmarks",
    icon: "nc-icon nc-cloud-upload-94",
    component: History,
    layout: "/admin"
  },
  {
    path: "/documentation",
    name: "Documentation",
    icon: "nc-icon nc-single-copy-04",
    component: Documentation,
    layout: "/admin"
  },
  {
    path: "/configuration",
    name: "Configuration",
    icon: "nc-icon nc-settings",
    component: Configuration,
    layout: "/admin"
  },
];
export default routes;


/*
Icon Tab Route Backup
  {
    path: "/icons",
    name: "Icons",
    icon: "nc-icon nc-diamond",
    component: Icons,
    layout: "/admin"
  }
*/