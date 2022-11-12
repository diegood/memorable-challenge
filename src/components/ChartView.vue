<template>
    <LineChart :chart-data="data"  :options="options" />
</template>

<script setup>
    import { ref, onMounted } from 'vue'
    import { LineChart } from 'vue-chart-3';
    import { Chart, registerables } from "chart.js";
    import {optionsConfig, datasetConfig} from '@/config/char'

    Chart.register(...registerables);

    const data = ref([])
    const props = defineProps({
        values:{
            type: Array,
            required: true
        }
    })

    const emit = defineEmits(['timeSelected'])

    onMounted(()=>{
        data.value = {
            labels: props.values.map((_, i) => i),
            datasets: [
                {   
                    data: props.values,
                    ...datasetConfig
                },
            ],
        }
    })

    const options = {
        ...optionsConfig,
        onClick: charClicked
    }

    function charClicked(_, [item]) {
        item && emit('timeSelected', item.index)
    }


</script>
