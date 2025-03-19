<template>
    <div class="flex flex-col min-h-screen font-roboto bg-weather-primary">
        <SiteNavigation />
        <RouterView></RouterView>
    </div>
</template>



<script setup>
import SiteNavigation from './components/SiteNavigation.vue';
import { RouterView } from 'vue-router';

</script>
