<template>
    <div class="flex justify-between">
        <div>
            <button class="bg-gray-200 px-4 rounded-l-full border-r-2 border-gray-400 hover:bg-slate-300" @click="changeType(SCORE_TYPE.VIDEO)">Videos</button>
            <button class="bg-gray-200 px-4 rounded-r-full border-gray-400 hover:bg-slate-300" @click="changeType(SCORE_TYPE.IMAGE)">Images</button>
        </div>
        <div class="flex gap-2"> 
            <label for="client">Selected Client</label>
            <select v-if="props.scores.length" v-model="selectedClient" name="client" class="border-gray-300 border-2 rounded-full px-4">
                <option v-for="client in clientList" :key="client" :value="client">{{client}}</option>
            </select>
        </div>
    </div>
    <div class="grid grid-cols-4 gap-4 mt-8">
        <div v-for="score in filteredScores" :key="score.ulid" class="card">
            <memorable-video-card v-if="selectedType == SCORE_TYPE.VIDEO"  :score="score"/>
            <memorable-image-card v-else :score="score" />
        </div>
    </div>
</template>

<script setup>
    import {ref, onMounted, computed} from 'vue'
    import SCORE_TYPE from '@/constants/SCORE_TYPE.js'
    import MemorableVideoCard from '@/components/MemorableVideoCard.vue';
    import MemorableImageCard from '@/components/MemorableImageCard.vue'
    const props = defineProps({scores: Array})
    const filteredScores = computed(() => props.scores.filter((s) => s.type == selectedType.value && selectedClient.value === s.client))
    const selectedType = ref(SCORE_TYPE.IMAGE)
    const selectedClient = ref(null)
    const clientList = ref([])

    onMounted(()=>{
        selectedType.value =SCORE_TYPE.IMAGE
        clientList.value = [...new Set(props.scores.map(s => s.client))]
        selectedClient.value= clientList.value [0]
    })
    

    function changeType(type){
        selectedType.value = type
    }
</script>