/*
 * Pattern Keys:
    plus
    cross
    dash
    cross-dash
    dot
    dot-dash
    disc
    ring
    line
    line-vertical
    weave
    zigzag
    zigzag-vertical
    diagonal
    diagonal-right-left
    square
    box
    triangle
    triangle-inverted
    diamond
    diamond-box

    There are currently 21 pattern variants available. When using the
    generate method (bellow) patterns will be 'randomly' assigned.
*/
import * as pattern from 'patternomaly';    // For pattern generation

export const myData = {
    labels: ["2019-08-02T08:34:01", "2019-08-02T08:34:02", "2019-08-02T08:34:03", "2019-08-02T08:34:04", "2019-08-02T08:34:05", "2019-08-02T08:34:10", "2019-08-02T08:34:12", "2019-08-02T08:34:15", "2019-08-02T08:34:18", "2019-08-02T08:34:40", "2019-08-02T08:34:50", "2019-08-02T08:35:01"],
    datasets: [
        {
        data: [600, 400, 600, 550, 700, 500, 600, 700, 500, 550, 600, 700],
        label: 'Latency Data',
        fill: true,
        lineTension: 0,
        backgroundColor: 'rgba(75,192,192,0.1)',
        borderColor: 'rgba(75,192,192,1)',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: 'rgba(75,192,192,1)',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 2,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: 'rgba(75,192,192,1)',
        pointHoverBorderColor: 'rgba(220,220,220,1)',
        pointHoverBorderWidth: 1,
        pointRadius: 1,
        pointHitRadius: 10,
        }
    ]
};

// For pattern generation
function fillArray(value, len) {
    var arr = [];
    for (var i = 0; i < len; i++) {
      arr.push(value);
    }
    return arr;
  }

export const barData = {
    labels: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
    datasets: [
        {
            label: 'Fast',
            fill: false,
            lineTension: 0.5,
            backgroundColor: pattern.draw("dot", "rgba(107, 208, 152, 0.7)"),
            hoverBackgroundColor: pattern.draw("dot", "rgba(107, 208, 152, 1)"),
            borderColor: 'rgba(255, 255, 255, 1)',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: 'pink',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgba(75,192,192,1)',
            pointHoverBorderColor: 'rgba(220,220,220,1)',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: [500, 390, 670, 600, 780, 440, 600, 680, 550, 475, 700, 795]
            },
        {
            label: 'Normal',
            fill: false,
            lineTension: 0.5,
            backgroundColor: pattern.draw("triangle", "rgba(255, 206, 86, 0.7)"),
            hoverBackgroundColor: pattern.draw("triangle", "rgba(255, 206, 86, 1)"),
            borderColor: 'rgba(255, 255, 255, 1)',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: 'pink',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgba(75,192,192,1)',
            pointHoverBorderColor: 'rgba(220,220,220,1)',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: [500, 390, 670, 600, 780, 440, 600, 680, 550, 475, 700, 795]
        },
        {
            label: 'Slow',
            fill: false,
            lineTension: 0.5,
            backgroundColor: pattern.draw("cross", "rgba(255, 99, 132, 0.7)"),
            hoverBackgroundColor: pattern.draw("cross", "rgba(255, 99, 132, 1)"),
            borderColor: 'rgba(255, 255, 255, 1)',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: 'pink',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgba(75,192,192,1)',
            pointHoverBorderColor: 'rgba(220,220,220,1)',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: [500, 390, 670, 600, 780, 440, 600, 680, 550, 475, 700, 795]
            }
    ]
};


export const doughnutData = {
	labels: [
		'Fail',
		'Success',
		'Warning'
    ],
	datasets: [{
        data: [20, 500, 100],
		backgroundColor: [
            pattern.draw("cross", "rgba(255, 99, 132, 0.7)"),
            pattern.draw("dot", "rgba(107, 208, 152, 0.7)"),
            pattern.draw("triangle", "rgba(255, 206, 86, 0.7)"),
        ],      
		hoverBackgroundColor: [
            pattern.draw("cross", "rgba(255, 99, 132, 1)"),
            pattern.draw("dot", "rgba(107, 208, 152, 1)"),
            pattern.draw("triangle", "rgba(255, 206, 86, 1)"),
        ]
    }]
};

export const radarData = {
    labels: ['Read Latency', 'Read Throughput', 'Tx. Latency', 'Tx. Throughput', 'Success Rate'],
    datasets: [
      {
        label: 'My First dataset',
        backgroundColor: 'rgba(179,181,198,0.2)',
        borderColor: 'rgba(179,181,198,1)',
        pointBackgroundColor: 'rgba(179,181,198,1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(179,181,198,1)',
        data: [65, 59, 90, 81, 88]
      },
      {
        label: 'My Second dataset',
        backgroundColor: 'rgba(255,99,132,0.2)',
        borderColor: 'rgba(255,99,132,1)',
        pointBackgroundColor: 'rgba(255,99,132,1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(255,99,132,1)',
        data: [80, 96, 27, 100, 99]
      }
    ]
};

// All the options

export const radarOptions = {
    responsive: true,
    maintainAspectRatio: false,
    legend: {
        display: true,
        onClick: (e) => e.stopPropagation(),
        position: "bottom",
        labels: {
            usePointStyle: true,
        }
    },
    tooltips: {
        enabled: true,
    },
};

export const barOptions = {
    responsive: true,
    maintainAspectRatio:false,
    scales: {
        yAxes: [{
            ticks: {
                beginAtZero: true,
                display: true,
            },
            gridLines: {
                display: false,
            },
            stacked: true,
        }],
        xAxes: [{
            ticks: {
                display: true,
            },
            gridLines: {
                display: false,
            },
            stacked: true,
        }],
    },
    legend: {
        display: true,
        onClick: (e) => e.stopPropagation(),
        position: "bottom",
        labels: {
            usePointStyle: false,
        }
    },
    tooltips: {
        enabled: true,
    },
}

export const lineOptions = {
    fill: false,
    responsive: true,
    legend: {
        labels: {
            usePointStyle: false,
        },
    },
    scales: {
        xAxes: [{
            type: 'time',
            display: true,
            scaleLabel: {
                display: true,
                labelString: "Time",
            }
        }],
        yAxes: [{
            ticks: {
                beginAtZero: true,
            },
            display: true,
            scaleLabel: {
                display: true,
                labelString: "Latency (ms)",
            }
        }]
    }
}

export const doughnutOptions = {
    responsive: true,
    maintainAspectRatio:false,
    scales: {
        yAxes: [{
            display: false,
        }],
        xAxes: [{
            display: false,
        }],
    },
    tooltips: {
        enabled: true,
    },
    legend: {
        display: true,
        onClick: (e) => e.stopPropagation(),
        position: "left",
        labels: {
            usePointStyle: false,
        }
    },
}