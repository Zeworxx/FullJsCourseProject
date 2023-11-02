<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HomePage from './components/HomePage.vue'
</script>

<template>
  <div class="h-full">
    <router-view></router-view>
  </div>
</template>

<style scoped>
#app {
  height: 100%;
}
</style>
