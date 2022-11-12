
<template>
  <div class="flex flex-col gap-4 bg-gray-50">
    <NavBar :scores="scores" @on-seach="onSearchGandler"/>
    <section v-if="scores" class="pt-8 px-4 md:px-10 mx-auto w-full mt-20">
      <FilteredList :scores="filteredSCores" :clients="clients"/>
    </section>
  </div>
</template>

<script setup>
import {onMounted, ref} from 'vue'
import NavBar from './components/NavBar.vue';
import FilteredList from './components/FilteredList.vue'
import api from './services/techtest'

const scores = ref(null)
const filteredSCores = ref([])

function onSearchGandler(newScoreList){
  filteredSCores.value = newScoreList
}

onMounted(async () =>{
  scores.value = await api.getScores()
  filteredSCores.value = scores.value
})
</script>