<template>
    <div>
        <video ref="video" src="https://tech-test-assets.s3.us-east-1.amazonaws.com/01FFRMDAHHCXC4CJG2DSST93S8.mp4"></video>
    </div>
</template>

<script setup>
import { watch, ref } from "vue";

const prop = defineProps({ goTo: Number })
const video = ref(null)

watch(() => prop.goTo, (newPosition)=>{
    video.value.currentTime=newPosition
})

</script>