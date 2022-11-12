<template>
    <Chart
        :size="{ width: 500, height: 400 }"
        :data="data"
        :margin="margin"
        :direction="direction"
        :axis="axis"
    >
        <template #layers>
            <Area 
                :data-keys="['second', 'avg']"  
                type="monotone" 
                :area-style="{ fill: 'prurple' }"
            />
            <Line
                :data-keys="['second', 'avg']"
                type="monotone"
                :line-style="{stroke: '#9f7aea'}"
            />
        </template>
    </Chart>
</template>

<script setup>
    import { ref, defineProps, onMounted } from 'vue'
    import { Chart,  Area, Line } from 'vue3-charts'
    const data = ref([])
    const props = defineProps({
        values:{
            type: Array,
            required: true
        }
    })

    onMounted(()=>{
        data.value = props.values.map((avg, i) => ({ second: i, avg})) 
    })

    const direction = ref('horizontal')
    const margin = ref({
        left: 0,
        top: 20,
        right: 20,
        bottom: 0
    })

    const axis = ref({
      primary: {
        type: 'band'
      },
      secondary: {
        domain: ['dataMin', 'dataMax + 100'],
        type: 'linear',
        ticks: 8
      }
    })

</script>
