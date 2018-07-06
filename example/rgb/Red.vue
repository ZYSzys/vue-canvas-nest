<template>
  <div>
    <vue-canvas-nest :config="config"></vue-canvas-nest>
  </div>
</template>
<script>
import vueCanvasNest from '../../'
export default {
  components: { vueCanvasNest },
  data() {
    return {
      config: {
        color: '255,0,0',
        count: 100,
      }
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
