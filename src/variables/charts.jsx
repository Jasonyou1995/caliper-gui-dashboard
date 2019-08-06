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
var dateOptions = {
  year: 'numeric',
  month: 'short',
  day: 'numeric',
  hour: '2-digit',
  minute: '2-digit',
  second: '2-digit',
};

const dashboard24HoursPerformanceChart = {
  data: canvas => {
    return {
      labels: [
        new Date("2019-08-01T17:02:05").toLocaleDateString("en-US", dateOptions),
        new Date("2019-08-01T17:03:05").toLocaleDateString("en-US", dateOptions),
        new Date("2019-08-01T17:04:05").toLocaleDateString("en-US", dateOptions),
        new Date("2019-08-01T17:05:05").toLocaleDateString("en-US", dateOptions),
        new Date("2019-08-01T17:06:05").toLocaleDateString("en-US", dateOptions),
        new Date("2019-08-01T17:07:05").toLocaleDateString("en-US", dateOptions),
        new Date("2019-08-01T17:08:05").toLocaleDateString("en-US", dateOptions),
        new Date("2019-08-01T17:09:05").toLocaleDateString("en-US", dateOptions),
        new Date("2019-08-01T17:10:05").toLocaleDateString("en-US", dateOptions),
        new Date("2019-08-01T17:12:05").toLocaleDateString("en-US", dateOptions),
      ],
      datasets: [
        {
          borderColor: "#6bd098",
          backgroundColor: "#6bd098",
          pointRadius: 0,
          pointHoverRadius: 0,
          borderWidth: 3,
          data: [300, 310, 316, 322, 330, 326, 333, 345, 338, 354]
        },
        {
          borderColor: "#fcc468",
          backgroundColor: "#fcc468",
          pointRadius: 0,
          pointHoverRadius: 0,
          borderWidth: 3,
          data: [320, 340, 365, 360, 370, 385, 390, 384, 408, 420]
        },
        {
          borderColor: "#f17e5d",
          backgroundColor: "#f17e5d",
          pointRadius: 0,
          pointHoverRadius: 0,
          borderWidth: 3,
          data: [370, 394, 415, 409, 425, 445, 460, 450, 478, 484]
        }
      ]
    };
  },
  options: {
    legend: {
      display: false
    },

    tooltips: {
      enabled: false
    },

    scales: {
      yAxes: [
        {
          ticks: {
            fontColor: "#9f9f9f",
            beginAtZero: false,
            maxTicksLimit: 5
            //padding: 20
          },
          gridLines: {
            drawBorder: false,
            zeroLineColor: "#ccc",
            color: "rgba(255,255,255,0.05)"
          }
        }
      ],

      xAxes: [
        {
          barPercentage: 1.6,
          gridLines: {
            drawBorder: false,
            color: "rgba(255,255,255,0.1)",
            zeroLineColor: "transparent",
            display: false
          },
          ticks: {
            padding: 20,
            fontColor: "#9f9f9f"
          }
        }
      ]
    }
  }
};

const dashboardEmailStatisticsChart = {
  data: canvas => {
    return {
      labels: [1, 2, 3],
      datasets: [
        {
          label: "Emails",
          pointRadius: 0,
          pointHoverRadius: 0,
          backgroundColor: ["#e3e3e3", "#4acccd", "#fcc468", "#ef8157"],
          borderWidth: 0,
          data: [342, 480, 530, 120]
        }
      ]
    };
  },
  options: {
    legend: {
      display: false
    },

    pieceLabel: {
      render: "percentage",
      fontColor: ["white"],
      precision: 2
    },

    tooltips: {
      enabled: false
    },

    scales: {
      yAxes: [
        {
          ticks: {
            display: false
          },
          gridLines: {
            drawBorder: false,
            zeroLineColor: "transparent",
            color: "rgba(255,255,255,0.05)"
          }
        }
      ],

      xAxes: [
        {
          barPercentage: 1.6,
          gridLines: {
            drawBorder: false,
            color: "rgba(255,255,255,0.1)",
            zeroLineColor: "transparent"
          },
          ticks: {
            display: false
          }
        }
      ]
    }
  }
};

const dashboardNASDAQChart = {
  data: {
    labels: [
      "1h",
      "2h",
      "3h",
      "4h",
      "5h",
      "6h",
      "7h",
      "8h",
      "9h",
      "10h",
      "11h",
      "12h"
    ],
    datasets: [
      {
        data: [100, 109, 150, 200, 300, 400, 400, 500, 250, 300, 500, 700],
        fill: false,
        borderColor: "#fbc658",
        backgroundColor: "transparent",
        pointBorderColor: "#fbc658",
        pointRadius: 4,
        pointHoverRadius: 4,
        pointBorderWidth: 8
      },
      {
        data: [500, 200, 100, 200, 350, 400, 500, 560, 250, 400, 300, 800],
        fill: false,
        borderColor: "#51CACF",
        backgroundColor: "transparent",
        pointBorderColor: "#51CACF",
        pointRadius: 4,
        pointHoverRadius: 4,
        pointBorderWidth: 8
      }
    ]
  },
  options: {
    legend: {
      display: false,
      position: "top"
    }
  }
};

module.exports = {
  dashboard24HoursPerformanceChart,
  dashboardEmailStatisticsChart,
  dashboardNASDAQChart
};
