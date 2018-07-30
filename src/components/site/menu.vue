<template>
  <div class="menu-container col-left">
    <ul ref="menu" class="menu-list">
      <li v-for="item in menus">
        <div v-on:click="onClick(item.Id)" :class="{'menu-item': true, 'active': target==item.Id}">
          <a>
            <h4>{{item.StationName}}（{{item.SiteName}}）</h4>
            <h5>{{item.Region}}</h5>
          </a>
        </div>
      </li>
    </ul>
  </div>
</template>
<script type="text/javascript">
require('assets/css/style.css')
export default {
  data() {
    return {
      target: 0
    }
  },
  props: {
    menus: {
      type: Array,
      default: () => { return [] }
    }
  },
  methods: {
    onClick: function(e) {
      var oldId = this.target;
      this.target = e;
      if (e != oldId) {
        this.$emit('siteChanged', e, oldId);
      }
    }
  }
}

</script>
<style scoped>
.menu-container {
  height: 100%;
  overflow-y: auto;
  border-right: 1px solid #ccc;
}

.col-left {
  float: left;
  width: 360px;
}

.menu-container ul {
  list-style: none;
}

.menu-item {
  height: 50px;
  padding-right: 20px;
}

.menu-item a {
  color: #ccc;
  cursor: pointer;
  display: block;
  border-bottom: 1px dashed #ccc;
  text-decoration: none;
}

.menu-item.active h4,
.menu-item a:hover h4 {
  color: #000;
}

</style>
