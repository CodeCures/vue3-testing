<script setup lang="ts">
import { ref } from 'vue';

    const user = ref(null);
    const username = ref('');
    const url = ref(null)

    function composeUrl (userName: string){
        return url.value = `https://api.github.com/users/${userName}`;
    }

    const getUser = async () => {
        const response = await fetch(url.value);
        user.value = response.json();
        
    }
    
</script>

<template>
    <div v-if="user">
        <img :src="user.avatar_url" :alt="user.name">
        <h1>{{ user.name }}</h1>
        <p>{{ user.bio }} -- {{ user.location }}</p>
    </div>
</template>