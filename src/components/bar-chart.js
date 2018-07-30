/* eslint-disable */
import { Bar } from 'vue-chartjs'

export default {
  extends: Bar,
  props: ['data'],
  watch: {
    data(cur, old) {
      this.render()
    }
  },
  mounted() {
    this.render()
  },
  methods: {
    render: function() {
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
}
