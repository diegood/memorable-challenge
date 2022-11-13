<template>
    <div v-if="score.scoreBySeconds" class="flex flex-col max-w-full md:max-w-fit rounded-xl shadow-md">
        <h5 class="-mb-8 z-10 w-full flex justify-center"><span class="bg-gray-100 px-3 rounded-full">{{score.name}}</span></h5>
        <div>
            <img :src="score.contenURL" class="max-w-full md:max-w-96">
        </div>
        <div class="grid grid-cols-2 gap-4 h-28 place-content-center justify-items-center">
            <info-dot :value="score.totalScore">total avg</info-dot>
            <info-dot :value="score.txtSal">text</info-dot>
        </div>
    </div>
</template>

<script setup>
    import InfoDot from '@/components/InfoDot.vue';
    import { Score } from '../entity/Score';

    const props = defineProps({score: Score})

    defineExpose({
        score: props.score,
    })
</script>