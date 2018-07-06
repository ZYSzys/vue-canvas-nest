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
  mounted() {
    this.createCanvasNest()
  },
  methods: {
    createCanvasNest() {
      const el = document.querySelector('.vue-canvas-nest-element')
      this.cn = new CanvasNest(el, this.config)
    }
  }
}

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
  opacity: 0.7;
}

</style>
