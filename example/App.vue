<template>
  <div id="app">
    <vue-canvas-nest :config="config" :el="'#area'"></vue-canvas-nest>
    <div id="cn-router">
      <router-link to="/red"><span style="color: red"> Red </span></router-link>
      <router-link to="/green"><span> Green </span></router-link>
      <router-link to="/blue"><span style="color: blue"> Blue </span></router-link>
      <router-view></router-view>
    </div>
    <img src="./assets/logo.png">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <ul>
      <li><a href="https://vuejs.org" target="_blank">Core Docs</a></li>
      <li><a href="https://forum.vuejs.org" target="_blank">Forum</a></li>
      <li><a href="https://chat.vuejs.org" target="_blank">Community Chat</a></li>
      <li><a href="https://twitter.com/vuejs" target="_blank">Twitter</a></li>
    </ul>
    <h2>Ecosystem</h2>
    <ul>
      <li><a href="http://router.vuejs.org/" target="_blank">vue-router</a></li>
      <li><a href="http://vuex.vuejs.org/" target="_blank">vuex</a></li>
      <li><a href="http://vue-loader.vuejs.org/" target="_blank">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank">awesome-vue</a></li>
    </ul>
    <div id="area" style="width: 400px;height: 300px;position: absolute;right: 0;bottom: 0;border: dashed 1px;">
    </div>
  </div>
</template>
<script>
import vueCanvasNest from '../'
export default {
  name: 'app',
  components: { vueCanvasNest },
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
      config: {
        color: '0,0,0',
        count: 70,
      },
      el: '#area'
    }
  }
}

</script>
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 3em;
}

#cn-router {
  font-size: 2em;
}

h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

</style>
