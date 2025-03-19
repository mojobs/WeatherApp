<template>
<header class="sticky top-0 bg-weather-primary shadow-lg">
    <nav class="container flex flex-col sm:flex-row items-center gap-4 text-white py-6">
        <RouterLink :to="{name: 'home'}">
            <div class="flex items-center gap-3">
                <i class="fa-solid fa-sun text-2xl"></i>
                <p class="text-2xl">The local Weather</p>
            </div>
        </RouterLink>

        <div class="flex gap-3 flex-1 justify-end">
            <i class="fa-solid fa-circle-info text-xl hover:text-weather-secondary duration-150 cursor-pointer" @click="toggleModal"></i>
            <i class="fa-solid fa-plus text-xl hover:text-weather-secondary duration-150 cursor-pointer"></i>

        </div>

        <BaseModal :modalActive="modalActive" @close-modal="toggleModal">
            <div class="text-black">
                <h1 class="text-2xl mb-1">About:</h1>
                <p class="mb-4">
                    The Local Weather allows you to track the current and future weather of 
                    cities of your choosing.
                </p>
                <h2 class="text-2xl">How it works:</h2>
                <ol class="list-decimal list-inside mb-4">
                    <li>Search for your city by entering the name into the Search Bar</li>
                </ol>
            </div>
        </BaseModal>

  
    </nav>

</header>
</template>

<script setup>

import { RouterLink } from 'vue-router';
import  BaseModal   from './BaseModal.vue'
import { ref } from 'vue';

const modalActive = ref(null);
const toggleModal = () => {
    modalActive.value = !modalActive.value;
}
</script>