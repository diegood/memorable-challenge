
<template>
  <h1>Memorable challenge</h1>
  <memorable-card :score="scores"/>
</template>

<script setup>
import {onMounted, ref} from 'vue'
import MemorableCard from './components/MemorableCard.vue';
import api from './services/techtest'

const scores = ref([])

onMounted(async () =>{
  const score = await api.getScores()
  scores.value = score[0]
})
</script>