<template>
  <vue-canvas-nest :config="config"/>
</template>
<script>
import vueCanvasNest from '../../'
export default {
  components: { vueCanvasNest },
  data() {
    return {
      config: {
        color: '0,255,0',
        count: 200,
        opacity: 1
      }
    }
  }
}

</script>
