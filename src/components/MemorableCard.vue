<template>
    <div v-if="score.scoreBySeconds">
        <video-player :goTo="selectedSecond"/>
        <chart-view :values="score.scoreBySeconds" @time-selected="timedSelectedHandler" />
    </div>
</template>

<script setup>
    import VideoPlayer from '@/components/VideoPlayer.vue';
    import ChartView from '@/components/ChartView.vue';
    import { Score } from '../entity/Score';
    import { ref } from 'vue';

    const props = defineProps({score: Score})
    const selectedSecond = ref(0)

    function timedSelectedHandler(seconds){
        selectedSecond.value = seconds
    }

    defineExpose({
        score: props.score,
        selectedSecond,
        timedSelectedHandler
    })
</script>