<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'app'
  }
  if (window.HTMLElement) {
    if (Object.getOwnPropertyNames(HTMLElement.prototype).indexOf('dataset') === -1) {
      Object.defineProperty(HTMLElement.prototype, 'dataset', {
        get: function () {
          var attributes = this.attributes
          var name = []
          var value = []
          var obj = {}
          for (var i = 0; i < attributes.length; i++) {
            if (attributes[i].nodeName.slice(0, 5) === 'data-') {
              name.push(attributes[i].nodeName.slice(5))
              value.push(attributes[i].nodeValue)
            }
          }
          for (var j = 0; j < name.length; j++) {
            obj[name[j]] = value[j]
          }
          return obj
        }
      })
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
    width: 100%;
    height: 100%;
  }

  html, body {
    width: 100%;
    height: 100%;
  }
</style>
