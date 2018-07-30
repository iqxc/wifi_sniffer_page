<template>
  <div class="body-container col-right">
    <div></div>
    <div class="row">
      <div v-for="i in [1,2,3,4,5,6]" class="col-md-6">
        <div class="panel">
          <div class="panel-header">
            <p>区域实时人流量</p>
          </div>
          <div class="panel-body">
            <div class="panel-container">
              <line-chart class="chart" :data="lineSource"></line-chart>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script type="text/javascript">
import LineChart from 'components/line-chart.js'
import BarChart from 'components/bar-chart.js'
import PieChart from 'components/pie-chart.js'
export default {
  components: {
    LineChart,
    BarChart,
    PieChart
  },
  props: {
    site: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      lineSource: {}
    }
  },
  methods: {
    getRandomInt() {
      return Math.floor(Math.random() * (50 - 5 + 1)) + 5
    },
    test() {
      return {
        labels: [0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22],
        datasets: [{
          label: '预计人流量',
          borderWidth: 1,
          borderColor: 'yellow',
          backgroundColor: 'yellow',
          pointBackgroundColor: 'white',
          fill: false,
          data: [
            this.getRandomInt(), this.getRandomInt(), this.getRandomInt(),
            this.getRandomInt(), this.getRandomInt(), this.getRandomInt(),
            this.getRandomInt(), this.getRandomInt(), this.getRandomInt(),
            this.getRandomInt(), this.getRandomInt(), this.getRandomInt()
          ]
        }, {
          label: '实时人流量',
          borderWidth: 1,
          borderColor: 'red',
          backgroundColor: 'red',
          pointBackgroundColor: 'white',
          fill: false,
          data: [
            this.getRandomInt(), this.getRandomInt(), this.getRandomInt(),
            this.getRandomInt(), this.getRandomInt(), this.getRandomInt(),
            this.getRandomInt(), this.getRandomInt(), this.getRandomInt()
          ]
        }]
      }
    }
  },
  mounted() {
    this.lineSource = this.test()
    console.log(this.lineSource)
  },
  watch: {
    site(cur, old) {
      console.log(cur, old)
      this.lineSource = this.test()
    }
  }
}

</script>
<style scoped>
.body-container {
  position: absolute;
  top: 80px;
  left: 370px;
  bottom: 0;
  right: 0;
  overflow-y: auto;
}

.col-right {
  float: left;
}

</style>
