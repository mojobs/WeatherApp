
<template>
  <main class="container text-white">
    <div class="pt-4 mb-8 relative">
      <input @input="getSearchResults" v-model="searchQuery" type="text" placeholder="Search for city or state" class="py2
      px-1 w-full bg-transparent border-b focus:border-weather-secondary focus:outline-none
      focus:shadow-[0px_1px_0_0_#004E71]">
      <ul v-if="maptilerSearchResults" class="absolute bg-weather-secondary text-white w-full shadow-md py-2 px-1 top-[66px]">
        <p v-if="searchError"> Sorry Something went wrong plese try again</p>
        <p v-if="serverError && maptilerSearchResults === 0" >No results match your query</p> 
        <template v-else>
          <li  @click="previewCity" v-for="searchResult in maptilerSearchResults" :key="searchResult.id" class="py-2 cursor-pointer"> {{ searchResult.place_name }}</li>
        </template>
      </ul>
    </div>
  </main>
</template>
          

 <script setup>
import { ref } from "vue";
import axios from "axios";
import * as maptilerClient from '@maptiler/client'
const mapTilerAPIKey = "OxnQ6JFnSlE7UX6HrV0a";
const searchQuery = ref('')
const queryTimeout = ref(null);
const maptilerSearchResults = ref(null);

const searchError = ref(null)


const previewCity = (searchResult) => {
  console.log(searchResult)
} 

const getSearchResults = () => {
  clearTimeout(queryTimeout);
  queryTimeout.value = setTimeout(async () => {
    if (searchQuery.value !== ''){
      try {
        const result = await maptilerClient.geocoding.forward(`https://api.maptiler.com/geocoding/${searchQuery}.json?key=${mapTilerAPIKey}&types=place`);
        maptilerSearchResults.value = result.features;
        
      } catch{
        searchError.value = true;
      }
      
      console.log(maptilerSearchResults.value);
      
        return;
      }
    }, 300)
    maptilerSearchResults.value = null;
}

</script>