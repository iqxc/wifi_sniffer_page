<template>
  <div class="body-container col-right">
    <el-row>
      <el-date-picker v-model="dateRange" type="daterange" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期" :format="displayFormat" :value-format="valueFormat" :picker-options="pickerOptions">
      </el-date-picker>
      <el-button ref="btn" v-on:click="query" type="primary" :loading="loading">查询</el-button>
    </el-row>
    <div class="charts">
      <div class="row">
        <div class="col-md-6">
          <div class="panel">
            <div class="panel-header">
              <p>站点行人经过人次</p>
            </div>
            <div class="panel-body">
              <div class="panel-container">
                <line-chart class="chart" :data="lineSource"></line-chart>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="panel">
            <div class="panel-header">
              <p>人均经过次数</p>
            </div>
            <div class="panel-body">
              <div class="panel-container">
                <line-chart class="chart" :data="lineSource"></line-chart>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="panel">
            <div class="panel-header">
              <p>按停留时间统计</p>
            </div>
            <div class="panel-body">
              <div class="panel-container">
                <line-chart class="chart" :data="lineSource"></line-chart>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="panel">
            <div class="panel-header">
              <p>手机品牌统计</p>
            </div>
            <div class="panel-body">
              <div class="panel-container">
                <pie-chart class="chart" :data="lineSource"></pie-chart>
              </div>
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
    sites: {
      type: Array,
      default: () => { return []; }
    }
  },
  data() {
    return {
      loading: false,
      lineSource: {},
      valueFormat: 'yyyy-MM-dd',
      displayFormat: 'yyyy/MM/dd',
      pickerOptions: {
        shortcuts: [{
          text: '最近一周',
          onClick(picker) {
            const end = new Date();
            const start = new Date();
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
            picker.$emit('pick', [start, end]);
          }
        }, {
          text: '最近一个月',
          onClick(picker) {
            const end = new Date();
            const start = new Date();
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
            picker.$emit('pick', [start, end]);
          }
        }, {
          text: '最近三个月',
          onClick(picker) {
            const end = new Date();
            const start = new Date();
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
            picker.$emit('pick', [start, end]);
          }
        }]
      },
      dateRange: ''
    }
  },
  methods: {
    getRandomInt() {
      return Math.floor(Math.random() * (50 - 5 + 1)) + 5
    },
    query() {
      this.lineSource = this.test()

      this.loading = true
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
  watch: {
    dateRange(cur, old) {
      console.log(cur)
    },
    sites(cur, old) {
      console.log(cur)
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
}

.charts {
  position: absolute;
  top: 90px;
  left: 0;
  bottom: 0;
  right: 0;
  overflow-y: auto;
}

.col-right {
  float: left;
}

.el-date-editor {
  width: 500px !important;
}

.el-row {
  margin-top: 20px;
}

</style>
