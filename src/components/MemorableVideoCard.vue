<template>
    <div v-if="score.scoreBySeconds" class="flex flex-col max-w-full md:max-w-fit rounded-xl shadow-md">
        <h5 class="-mb-8 z-10 w-full flex justify-center"><a :href="score.contenURL" target="_blank" class="bg-gray-100 px-3 rounded-full">{{score.name}}</a></h5>
        <div>
            <video-player :video="score.contenURL" :go-to="selectedSecond" class="max-w-full md:max-w-96"/>
            <chart-view :values="score.scoreBySeconds" class="h-32 w-full -mt-28"  @time-selected="timedSelectedHandler"/>
        </div>
        <div class="grid grid-cols-3 gap-4 h-24 place-content-center justify-items-center">
            <info-dot :value="score.totalScore">total</info-dot>
            <info-dot :value="score.scoreBySeconds[selectedSecond]">score</info-dot>
            <info-dot :value="score.txtSal">text</info-dot>
        </div>
    </div>
</template>

<script setup>
    import VideoPlayer from '@/components/VideoPlayer.vue';
    import ChartView from '@/components/ChartView.vue';
    import InfoDot from '@/components/InfoDot.vue';
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