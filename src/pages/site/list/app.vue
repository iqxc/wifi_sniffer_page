<template>
  <div class="container">
    <div class="pHeader row">
      <div class="header-item col-md-4">
        <a>
            <i class="fa fa-group"/>
            <span>
              <p>当前累计人流量</p>
              <h1>45768</h1>
            </span>
        </a>
      </div>
      <div class="header-item col-md-4">
        <a>
            <i class="fa fa-hourglass-end"/>
            <span>
              <p>实时停留人数</p>
              <h1>4567</h1>
            </span>
        </a>
      </div>
      <div class="header-item col-md-4">
        <a>
            <i class="fa fa-eye"/>
            <span>
              <p>站点最高人数</p>
              <h1>1920</h1>
            </span>
        </a>
      </div>
    </div>
    <div class="pBody">
      <div class="row">
        <div class="col-md-4">
          <div class="row body-item">
            <div class="panel">
              <div class="panel-header">
                <p>人流量点位TOP5</p>
              </div>
              <div class="panel-body">
                <div class="panel-container">
                  <ul>
                    <li v-for="(item, i) in topList">
                      <div class="list-item">
                        <span class="item-icon">{{i+1}}</span>
                        <span class="item-address">{{item.address}}</span>
                        <span class="item-unit">人</span>
                        <span class="item-cnt">{{item.count}}</span>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div class="row body-item">
            <div class="panel">
              <div class="panel-header">
                <p>区域手机品牌统计图</p>
              </div>
              <div class="panel-body">
                <div class="panel-container">
                  <pie-chart class="chart" :data="chart.pieSource"></pie-chart>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="row body-item">
            <div class="panel">
              <div class="panel-header">
                <p>区域实时人流量</p>
              </div>
              <div class="panel-body">
                <div class="panel-container">
                  <line-chart class="chart" :data="chart.lineSource"></line-chart>
                </div>
              </div>
            </div>
          </div>
          <div class="row body-item">
            <div class="panel">
              <div class="panel-header">
                <p>历史人流量数据</p>
              </div>
              <div class="panel-body">
                <div class="panel-container">
                  <bar-chart class="chart" :data="chart.barSource"></bar-chart>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="row body-item bigger">
            <div class="panel">
              <div class="panel-header">
                <p>区域内各站点状态</p>
              </div>
              <div class="panel-body">
                <div class="panel-container">
                </div>
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
require('assets/css/style.css')
export default {
  components: {
    LineChart,
    BarChart,
    PieChart
  },
  data() {
    return {
      topList: [
        { address: "汶水路原平路1", count: "654" },
        { address: "汶水路原平路2", count: "543" },
        { address: "汶水路原平路3", count: "432" },
        { address: "汶水路原平路4", count: "321" },
        { address: "汶水路原平路5", count: "210" }
      ],
      chart: {
        lineSource: {
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
        },
        barSource: {
          labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
          datasets: [{
            label: '历史人流量',
            borderWidth: 1,
            borderColor: '#00cef8',
            backgroundColor: '#00cef8',
            pointBackgroundColor: 'white',
            fill: false,
            data: [
              this.getRandomInt(), this.getRandomInt(), this.getRandomInt(),
              this.getRandomInt(), this.getRandomInt(), this.getRandomInt(),
              this.getRandomInt(), this.getRandomInt(), this.getRandomInt()
            ]
          }]
        },
        pieSource: {
          labels: ['Apple', 'Huawei', 'Xiaomi', 'Samsung'],
          datasets: [{
            backgroundColor: ['#41B883', '#fdcb06', '#00D8FF', '#d6722b'],
            data: [34, 53, 34, 34]
          }]
        }
      }
    }
  },
  methods: {
    getRandomInt() {
      return Math.floor(Math.random() * (50 - 5 + 1)) + 5
    }
  }
}

</script>
<style type="text/css" scoped>
.pBody>.row {
  height: 100%;
}

.pBody>.row>.col-md-4 {
  height: 100%;
  min-height: 10px;
}

.panel-header p {
  text-align: left;
  display: block;
  font-size: 1.2222em;
  color: #fff;
  padding: 4px;
  background-image: linear-gradient(90deg, #03465d, #051a2b);
}

.chart {
  height: 100%;
}

.pBody .body-item {
  height: 50%;
  min-height: 10px;
  padding-right: 15px;
  padding-bottom: 15px;
}

.pBody .body-item.bigger {
  height: 100%;
  padding-right: 0px;
}

.body-item .panel {
  height: 100%;
  width: 100%;
  border: 1px solid #fff;
  background-color: inherit !important;
  border-radius: 0;
}

.panel-body {
  position: relative;
  height: 100%;
  margin-top: -40px !important;
  padding-top: 40px !important;
  color: #fff;
}

.panel-container {
  overflow-y: auto;
  height: 100%;
}

.panel-body .list-item {
  font-size: 22px;
  text-align: left;
  padding-top: 8px;
  padding-bottom: 8px;
  border-bottom: 1px dashed #fff;
}

.list-item .item-icon {
  background-color: #1bd2f6;
  border-radius: 4px;
  display: inline-block;
  line-height: 27px;
  text-align: center;
  width: 27px;
  height: 27px;
}

.list-item .item-cnt,
.list-item .item-unit {
  float: right;
}

.panel-body li {
  list-style: none;
}

.panel-body ul {
  padding-left: 10px;
}

.container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: linear-gradient(45deg, #020611, #051a2b, #012032);
}

.pHeader {
  height: 20%;
  border: 1px solid #bbb;
  padding: 0;
  margin: 20px;
}

.pBody {
  height: 70%;
  /*border: 1px solid #bbb;*/
  padding: 0 15px;
  margin: 20px;
}

.header-item {
  height: 100%;
  vertical-align: middle;
  text-align: center;
  display: flex;
}

.header-item a {
  line-height: 100%;
  margin: auto;
  cursor: pointer;
  color: #fff;
}

.header-item i {
  color: #59dde9;
}

.header-item h1 {
  color: #00e6ff;
}

.header-item span {
  display: inline-block;
  margin-left: 20px;
}

.header-item p,
.header-item h1 {
  margin: 0;
  padding: 0;
}

.header-item h1 {
  font-size: 4em;
}

.header-item .fa {
  font-size: 5em;
  line-height: 100%;
  height: 100%;
}

</style>
