<template>
  <div class="vue-canvas-nest-element">
  </div>
</template>
<script>
import CanvasNest from 'canvas-nest.js';
export default {
  name: 'vueCanvasNest',
  props: {
    config: {
      type: Object,
      default () {
        return {
          color: '255,0,0',
          count: 88,
        }
      }
    }
  },
  data() {
    return {
      cn: ''
    }
  },
  mounted() {
    const el = document.querySelector('.vue-canvas-nest-element')
    this.cn = new CanvasNest(el, this.config)
  },
  beforeDestroy() {
    this.cn.destroy()
  }
}
// style="position: absolute;top: 0;left: 0;right: 0;bottom: 0;z-index: -1;"
</script>
<style scoped>
.vue-canvas-nest-element {
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  overflow: hidden;
  pointer-events: none;
  z-index: -2;
  opacity: 0.5;
}
</style>
