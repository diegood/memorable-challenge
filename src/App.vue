
<template>
  <h1>Memorable challenge</h1>
  <video-player></video-player>
  <chart-view v-if="scores.scoreBySeconds" :values="scores.scoreBySeconds"></chart-view>
</template>

<script setup>
import {onMounted, ref} from 'vue'
import VideoPlayer from './components/VideoPlayer.vue';
import ChartView from './components/ChartView.vue';
import api from './services/techtest'

const scores = ref([])

onMounted(async () =>{
  const score = await api.getScores()
  scores.value = score[0]
})
</script>