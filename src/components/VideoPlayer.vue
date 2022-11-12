<template>
    <div class="px-4 mt-4">
        <video ref="video" :src="prop.video"></video>
    </div>
</template>

<script setup>
import { watch, ref } from "vue";

const prop = defineProps({ goTo: Number, video: {type: String, required: true} })
const video = ref(null)

watch(() => prop.goTo, (newPosition)=>{
    video.value.currentTime=newPosition
})

</script>