<script setup lang="ts">
import { computed, ref, watch } from 'vue';

const props = defineProps({
    temp: {
        type: String,
        default: '0'
    }
})


const type = ref('celsius');
const degrees = ref(0);

const celsius = computed(() => {
    if (type.value == 'celsius') {
        return degrees.value
    } else {
        let cel = (degrees.value - 32) * 0.556;
        return parseInt(cel.toString())
    }
})

const fahrenheit = computed(() => {
    if (type.value == 'fahrenheit') {
        return degrees.value
    } else {
        return (degrees.value * 1.8) + 32
    }
})

watch(() => props.temp, newTemp => {
    if(!newTemp) {
        degrees.value = 0;
        return;
    }

    console.log(newTemp);
    
    
    degrees.value = parseInt(newTemp)
    type.value = newTemp.endsWith('f') ? 'fahrenheit' : 'celsius'
})

</script>

<template>
    <div>
        <span>{{ celsius }} deg. Celsius</span><br>
        <span>{{ fahrenheit }} deg. fahrenheit</span>
    </div>
</template>

