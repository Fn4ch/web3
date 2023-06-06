<template>
  <div class="home">
    <DocPanel/>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from "vue"
import DocPanel from "../components/DocPanel.vue";
  

  export default defineComponent({
    name: "HomeView",
    components: {
    DocPanel
},
  })
</script>
