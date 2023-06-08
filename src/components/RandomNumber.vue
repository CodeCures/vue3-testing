<script setup lang="ts">
import { ref } from 'vue';

const props = defineProps({
    min: {
        type: Number,
        default: 1
    },
    max: {
        type: Number,
        default: 10
    }
})

const randomNumber = ref(0)

function generateRandomNumber() {
    randomNumber.value = Math.floor(
        Math.random() * (props.max - props.min + 1) + props.min
    )
}
</script>

<template>
    <div>{{ randomNumber }}</div>
    <button @click="generateRandomNumber">generate random number</button>
</template>


