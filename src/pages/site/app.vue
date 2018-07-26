<template>
  <div class="container">
    <site-header></site-header>
  </div>
</template>
<script type="text/javascript">
import SiteHeader from 'components/site/header'
export default {
  components: {
    SiteHeader
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

</style>
