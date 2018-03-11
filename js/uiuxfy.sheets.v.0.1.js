

/*
      File: uiuxfy.sheets.v.0.1.js
      Author: Lucas Gatsas
      web: https://uiuxfy.io

      Tip:
      create a New Javascript file
      and but in your custome code!
*/

/* CashCharts V.0.1 | checkout the FREE Version UI-Kit Page! */

var chartData = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [{
    type: 'line',
    label: 'Dataset 1',
    borderColor: window.chartColors.blue,
    borderWidth: 2,
    fill: false,
    data: [
      randomScalingFactor(),
      randomScalingFactor(),
      randomScalingFactor(),
      randomScalingFactor(),
      randomScalingFactor(),
      randomScalingFactor(),
      randomScalingFactor()
    ]
  }, {
    type: 'bar',
    label: 'Dataset 2',
    backgroundColor: window.chartColors.grey,
    data: [
      randomScalingFactor(),
      randomScalingFactor(),
      randomScalingFactor(),
      randomScalingFactor(),
      randomScalingFactor(),
      randomScalingFactor(),
      randomScalingFactor()
    ],
    borderColor: 'white',
    borderWidth: 2
  }, {
    type: 'bar',
    label: 'Dataset 3',
    backgroundColor: window.chartColors.blue,
    data: [
      randomScalingFactor(),
      randomScalingFactor(),
      randomScalingFactor(),
      randomScalingFactor(),
      randomScalingFactor(),
      randomScalingFactor(),
      randomScalingFactor()
    ]
  }]

};
window.onload = function() {
  var ctx = document.getElementById('canvas').getContext('2d');
  window.myMixedChart = new Chart(ctx, {
    type: 'bar',
    data: chartData,
    options: {
      responsive: true,
      title: {
        display: true,
        text: 'Chart.js Combo Bar Line Chart'
      },
      tooltips: {
        mode: 'index',
        intersect: true
      }
    }
  });
};

document.getElementById('randomizeData').addEventListener('click', function() {
  chartData.datasets.forEach(function(dataset) {
    dataset.data = dataset.data.map(function() {
      return randomScalingFactor();
    });
  });
  window.myMixedChart.update();
});
