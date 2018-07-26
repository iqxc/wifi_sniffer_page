/* eslint-disable */
import { Bar } from 'vue-chartjs'

export default {
  extends: Bar,
  props: ['data'],
  mounted() {
    this.renderChart(this.data, {
      responsive: true,
      maintainAspectRatio: false,
      hover: {
        mode: 'nearest',
        intersect: true
      },
      tooltips: {
        mode: 'index',
        intersect: false
      },
      scales: {
        yAxes: [{
          display: true,
          ticks: {
            beginAtZero: true
          }
        }]
      },
      legend: {
        labels: {
          usePointStyle: false,
          boxWidth: 14
        }
      }
    })
  }
}