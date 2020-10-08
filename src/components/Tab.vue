<template>
  <div
      v-on:mousemove="moveHiglight($event)"
      v-on:mouseout="hideHiglight($event)"
      class="tab">
    <div :style="highlightStyle" class="highlight"></div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "Tab",
  data() {
    return {
      highlightStyle: {
        left: 0,
        opacity: 0
      }
    }
  },
  methods: {
    moveHiglight(e) {
      this.highlightStyle =  {
        opacity: 1,

        left: e.layerX - 150
      }
    },
    hideHiglight(e) {
      this.highlightStyle =  {
        left: e.layerX - 150,
        opacity: 0
      }
    }
  }
}
</script>

<style scoped>

</style>
