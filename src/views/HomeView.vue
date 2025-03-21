
<template>
  <main class="container text-white">
    <div class="pt-4 mb-8 relative">
      <input @input="getSearchResults" v-model="searchQuery" type="text" placeholder="Search for city or state" class="py2
      px-1 w-full bg-transparent border-b focus:border-weather-secondary focus:outline-none
      focus:shadow-[0px_1px_0_0_#004E71]">
      <ul v-if="mapboxSearchResults" class="absolute bg-weather-secondary text-white w-full shadow-md py-2 px-1 top-[66px]">
        <p v-if="searchError"> Sorry Something went wrong plese try again</p>
        <p v-if="serverError && mapboxSearchResults === 0" >No results match your query</p> 
        <template v-else>
          <li  @click="previewCity(searchResult)" v-for="searchResult in mapboxSearchResults" :key="searchResult.id" class="py-2 cursor-pointer"> {{ searchResult.place_name }}</li>
        </template>
      </ul>
    </div>
  </main>
</template>
         


<script setup>
import { ref } from "vue";
import axios from "axios";
import { useRouter } from "vue-router";

const router = useRouter();
const previewCity = (searchResult) => {
  const [city, state] = searchResult.place_name.split(",");
  router.push({
    name: "cityView",
    params: { state: state.replaceAll(" ", ""), city: city }, 
    query: {
      lat: searchResult.geometry.coordinates[1],
      lng: searchResult.geometry.coordinates[0],
      preview: true,
    },
  });
};

const mapboxAPIKey =
  "pk.eyJ1Ijoiam9obmtvbWFybmlja2kiLCJhIjoiY2t5NjFzODZvMHJkaDJ1bWx6OGVieGxreSJ9.IpojdT3U3NENknF6_WhR2Q";
const searchQuery = ref("");
const queryTimeout = ref(null);
const mapboxSearchResults = ref(null);
const searchError = ref(null);

const getSearchResults = () => {
  clearTimeout(queryTimeout.value);
  queryTimeout.value = setTimeout(async () => {
    if (searchQuery.value !== "") {
      try {
        const result = await axios.get(
          `https://api.mapbox.com/geocoding/v5/mapbox.places/${searchQuery.value}.json?access_token=${mapboxAPIKey}&types=place`
        );
        mapboxSearchResults.value = result.data.features;
      } catch {
        searchError.value = true;
      }

      return;
    }
    mapboxSearchResults.value = null;
  }, 300);
};
</script>

<style lang="scss" scoped></style>








































































<!-- 
 <script setup>
import { ref } from "vue";
import axios from "axios";
import * as maptilerClient from '@maptiler/client'
import { useRouter } from "vue-router";

const router = useRouter();
const mapTilerAPIKey = "OxnQ6JFnSlE7UX6HrV0a";
const searchQuery = ref('')
const queryTimeout = ref(null);
const maptilerSearchResults = ref(null);

const searchError = ref(null)


const previewCity = (searchResult) => {
  console.log(searchResult.value);
  const [city, state] = searchResult.place_name.split(',');
  router.push({
    name: "cityView",
    params: {state: state.replaceAll(" ", ""), city: city},
    query : {
      lat : searchResult.geometry.coordinates[1],
      lon: searchResult.geometry.coordinates[0],
      preview: true,
    }
  })
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

</script> -->