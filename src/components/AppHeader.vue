<script setup lang="ts">
import { ref } from "vue";

const isLoggedIn = ref(false);

function login() {
    isLoggedIn.value = true;
}

</script>
<template>
    <button v-if="isLoggedIn" id="logout">Logout</button>
    <button @click="login" id="login" v-else>Login</button>
</template>

