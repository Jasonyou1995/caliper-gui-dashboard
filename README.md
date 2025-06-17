# Hyperledger Caliper GUI Dashboard

This is the Dashboard Client of Caliper GUI. This GUI is connected to Caliper-CLI and will update all bench marks in real time

## Table of Contents

* [Quick Start](#quick-start)
* [Caliper GUI Structure](#gui-structure)
* [Documentation](#documentation)
* [File Structure](#file-structure)
* [Browser Support](#browser-support)
* [Resources](#resources)
* [Licensing](#licensing)
* [Useful Links](#useful-links)


## Quick start

Quick start options:

- Clone the repo: `git clone https://github.com/creativetimofficial/paper-dashboard-react.git`.
- `npm i`
- `npm start`

## Caliper GUI Structure

GUI Application Structure (Single Page App)

### Front-end (React.js)
- [ ] Dash Board Tab (Overview)
    - [ ] Detailed visualization sub-tab
        - [ ] Overall Tx throughput
        - [ ] Overall Read throughput
        - [ ] Overall Tx Latency
        - [ ] Overall Read Latency
        - [ ] Network Time (blockchain network running time)
        - [ ] Storage Usage (The size of the blockchain config and dependencies)
        - [ ] The total size of the hard disk
        - [ ] Current CPU Usage by Blockchain network [Time series by storing in JSON mongoDB?]
        - [ ] Current Memory Usage by Blockchain network
        - [ ] Test success rate (success count + fail count)
        - [ ] Network volumn/speed for each node/ip:port address
        - [ ] The detailed consumption and connection status for each node (ip/container/etc.)
	        - [ ] Overall Tx throughput
	        - [ ] Overall Read throughput
	        - [ ] Overall Tx Latency
	        - [ ] Overall Read Latency
        - [ ] … 
- [ ] Notification Tab (Console error or warning from CLI?)
- [ ] Network Profile Tab (Blockchain network visualization)
    - [ ] Overview sub-tab
    - [ ] Peers node info (ip, function, channel and org. affiliation, etc.)
    - [ ] Orderer node info
    - [ ] Org/Member info
    - [ ] Channel info
    - [ ] Node connection (relationships)
    - [ ] Overall network visualization for all peers, orderer, members, and channels [Fabric CPP]
- [ ] Table List Tab (Historical Benchmark Data In Table Form: add JSON data downloadable functionality)
    - [ ] Overview
    - [ ] Date selection for detailed visualization
- [ ] [Bottom Tab] Configuration Tab
    - [ ] All the config form and submission functionality (JSON) to Caliper-CLI and MongoDB.

### Back-end (Express.js, Node.js, MongoDBliper, Caliper-LI)
- [ ] Express.js to handle configuration JSON transaction <-> Caliper-CLI and get response (success/fail/erros)
- [ ] MongoDB to locally store historical data JSON (date selection to retrieve data)
    - [ ] Saving all the historical configuration data?
    - [ ] Saving all the visualization data?
    - [ ] Adding cloud backup/upload service in the future?
- [ ] Submitting Config JSON to Caliper-CLI and get response when config finished. [HOW?]



## Documentation
The documentation for the Caliper GUI is hosted a [here]().


## File Structure

Directories and files:

```
├── CHANGELOG.md
├── ISSUE_TEMPLATE.md
├── LICENSE.md
├── README.md
├── docs
│   └── documentation.html
├── jsconfig.json
├── package.json
├── public
│   ├── favicon.ico
│   ├── index.html
│   └── manifest.json
└── src
    ├── index.js
    ├── logo-white.svg
    ├── routes.js
    ├── components
    │   ├── FixedPlugin
    │   │   └── FixedPlugin.jsx
    │   ├── Footer
    │   │   └── Footer.jsx
    │   ├── Navbars
    │   │   └── DemoNavbar.jsx
    │   └── Sidebar
    │       └── Sidebar.jsx
    ├── layouts
    │   └── Admin.jsx
    ├── variables
    │   ├── charts.jsx
    │   ├── general.jsx
    │   └── icons.jsx
    ├── views
    │   ├── Dashboard.jsx
    │   ├── Icons.jsx
    │   ├── Notifications.jsx
    │   ├── Tables.jsx
    │   ├── Typography.jsx
    │   ├── Contribute.jsx
    │   └── User.jsx
    └── assets
        ├── css
        │   ├── paper-dashboard.css
        │   ├── paper-dashboard.css.map
        │   └── paper-dashboard.min.css
        ├── demo
        ├── fonts
        ├── github
        ├── img
        │   └── faces
        └── scss
            ├── paper-dashboard
            │   ├── cards
            │   ├── mixins
            │   ├── plugins
            │   └── react
            │       ├── custom
            │       └── react-differences.scss
            └── paper-dashboard.scss
```

## Browser Support

At present, we officially aim to support the last two versions of the following browsers:

<img src="https://s3.amazonaws.com/creativetim_bucket/github/browser/chrome.png" width="64" height="64"> <img src="https://s3.amazonaws.com/creativetim_bucket/github/browser/firefox.png" width="64" height="64"> <img src="https://s3.amazonaws.com/creativetim_bucket/github/browser/edge.png" width="64" height="64"> <img src="https://s3.amazonaws.com/creativetim_bucket/github/browser/safari.png" width="64" height="64"> <img src="https://s3.amazonaws.com/creativetim_bucket/github/browser/opera.png" width="64" height="64">


## Resources
- Demo:
- Documentation: 
- License Agreement: 

## Reporting Issues


## Licensing

- Copyright 2019 Jason You
- Licensed under Apache 2.0
