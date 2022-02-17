<template>
  <div class="main_app">
      <hr>
      <div style="display: flex; align-items: center; justify-content: space-between">
          <div>Header Sticky</div>
          <el-switch v-model="headerSticky" active-color="#13ce66"/>
      </div><hr>
  </div>
</template>

<script>
export default {
  name: 'popup-view',
    data () {
    return {
        headerSticky: true,
    }
  }
}

</script>

<style>
.main_app {
    height: 300px;
    width: 350px;
    background: transparent;
}
</style>
