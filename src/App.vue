<template>
  <div id="app">
    <MainWrapper/>
  </div>
</template>

<script>
import MainWrapper from './components/main-wrapper'
export default {
  name: 'app',
  components: {
    MainWrapper
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
