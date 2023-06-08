<script setup lang="ts">
import RandomNumber from '../components/RandomNumber.vue';
</script>

<template>
  <main>
    <h1>Hello Home</h1>
    <RandomNumber :min="200" :max="300"/>
  </main>
</template>
