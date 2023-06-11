<script setup lang="ts">
import { computed, getCurrentInstance, h, ref } from 'vue';
import RandomNumber from '../components/RandomNumber.vue';
import Temperature from '../components/Temperature.vue';
import FruitBasket from '../components/FruitBasket.vue';

const temp = ref('');

</script>

<template>
  <main>
    <h1>Hello Home</h1>
    <RandomNumber :min="200" :max="300"/> <br> <br>

    <input type="text" v-model="temp"> <br><br>

    <Temperature :temp="temp"/> <br>

    <FruitBasket />

  </main>
</template>
