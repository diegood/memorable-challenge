<template>
    <div class="flex flex-col place-items-center">
        <span class="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full" :class="color">
            {{valueData}}
        </span>
        <h5><slot></slot></h5>
    </div>
</template>

<script setup>
    import { computed } from 'vue';

    const props = defineProps({value: Number})
    const valueData = computed( () => props.value?.toFixed(2))
    const color =  computed(() => Math.floor(props.value) < 65 ? 'bg-red-500': 'bg-green-500')

</script>