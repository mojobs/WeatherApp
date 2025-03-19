
<template>
  <main class="container text-white">
    <div class="pt-4 mb-8 relative">
      <input  v-model="searchQuery" type="text" placeholder="Search for city or state" class="py2
      px-1 w-full bg-transparent border-b focus:border-weather-secondary focus:outline-none
      focus:shadow-[0px_1px_0_0_#004E71]">
    </div>
  </main>
</template>

 <script setup>
import axios from "axios";
import { ref } from "vue";
import axios from "axios";
  const searchQuery = ref('')
  const queryTimeout = ref(null);
  const mapboxAPIKey = ;
  const getSearchResults = () => {
    queryTimeout.value = setTimeout(async () => {
      if (searchQuery.value !== ''){
        const result = await axios.get(`https://api.mapbox.xom/geocoding/v5/mapbox.places/${searchQuery.value}.json`)
      }
    }, 300)
  }
</script>