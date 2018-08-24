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
        color: '0,0,255',
        count: 150,
        opacity: 0.9,
        zIndex: 0,
      }
    }
  }
}

</script>
