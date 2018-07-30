<template>
  <div class="container">
    <site-header></site-header>
    <div class="row body">
      <site-menu></site-menu>
    </div>
  </div>
</template>
<script type="text/javascript">
import SiteHeader from 'components/site/header'
import SiteMenu from 'components/site/menu'

const api = require('modules/httpapi')

export default {
  components: {
    SiteHeader,
    SiteMenu
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
  /*background-image: linear-gradient(45deg, #020611, #051a2b, #012032);*/
}

.row.body {
  height: 100%;
  padding-top: 80px;
}

</style>
