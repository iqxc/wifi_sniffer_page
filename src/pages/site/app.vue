<template>
  <div class="container">
    <site-header></site-header>
    <div class="row body">
      <site-menu :menus="menus" @siteChanged="siteChanged"></site-menu>
      <site-body :site="site"></site-body>
    </div>
  </div>
</template>
<script type="text/javascript">
import SiteHeader from 'components/site/header'
import SiteMenu from 'components/site/menu'
import SiteBody from './body.vue'

const api = require('modules/httpapi')

export default {
  components: {
    SiteHeader,
    SiteMenu,
    SiteBody
  },
  data() {
    return {
      menus: [{ SiteName: 'lw123', StationName: '重庆南路建国中路', Region: '黄浦区', Id: 1 }],
      site: 0
    }
  },
  mounted() {
    var sites = [];
    api.querySite({
      PageSize: 1000
    }, (res) => {
      // this.menus = res.Site.filter((site) => { return site.SiteName != '' })
    })
  },
  methods: {
    siteChanged(id, oldId) {
      this.site = id;
    }
  }
}

</script>
<style type="text/css" scoped>
.container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.row.body {
  height: 100%;
  padding-top: 80px;
}

</style>
