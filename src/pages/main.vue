<template>
  <div class="container">
    <div class="pHeader">
      <div class="header-item"></div>
      <div class="header-item"></div>
      <div class="header-item"></div>
    </div>
    <div class="pBody"></div>
  </div>
</template>
<style type="text/css" scoped>
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
  border: 1px solid #bbb;
  padding: 0;
  margin: 20px;
}

.header-item {
  width: 33.33333%;
  height: 100%;
  /*margin-left: 10px;*/
  /*margin-right: 10px;*/
  background-color: red;
  display: inline-block;
}

</style>
