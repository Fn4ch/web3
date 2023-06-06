<template>
  <AppHeader class="appHeader"/>
</template>

<script lang="ts">  
import { defineComponent } from 'vue'
import AppHeader from './components/AppHeader.vue'
  export default defineComponent({
    components: { AppHeader },
})
</script>

<style>
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.appHeader{
  margin-top: 100px;
}
h2{
  margin-bottom: 48px;
  display: flex;
}
</style>
