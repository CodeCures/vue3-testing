<script setup lang="ts">
import { reactive, ref } from 'vue';

const basket = reactive([]);
const fruit = ref(null)

function addFruit() {
    basket.push(fruit.value)
    fruit.value = ''
}

</script>

<template>
    <div>
        <div>
            <input type="text" v-model="fruit"> <br>
            <button @click="addFruit">add Fruit</button>
        </div>

        <ul>
            <li v-for="fruit in basket" :key="fruit">
                {{ fruit }}
            </li>
        </ul>
    </div>
</template>

