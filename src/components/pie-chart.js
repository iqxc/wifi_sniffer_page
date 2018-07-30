import { Pie } from 'vue-chartjs'

export default {
  extends: Pie,
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
        legend: {
          position: 'left'
        }
      })
    }
  }
}
