<script setup lang="ts">
import { reactive } from 'vue';

const payload = reactive({
    name: ''
});

let emit = defineEmits(['submit']);

const submit = () => emit('submit', payload)
</script>

<template>
    <form @submit.prevent="submit">
        <input type="text" v-model="payload.name"> <br>
        <input type="submit" value="submit">
    </form>
</template>


