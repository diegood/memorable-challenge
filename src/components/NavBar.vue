<template>
    <nav class="fixed top-0 left-0 w-full z-30 bg-green-500 md:flex-row md:flex-nowrap md:justify-start flex items-center p-4">
        <div class="w-full mx-autp items-center flex justify-between md:flex-nowrap flex-wrap md:px-10 px-4">
            <a class="text-white text-sm uppercase lg:text-center font-semibold" href="/"> Memorable challenge </a>
            <input v-debounce:600ms="search" type="text" placeholder="Search here..." class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm shadow outline-none focus:outline-none focus:ring w-full pl-10">
        </div>
    </nav>
</template>

<script setup>

const props = defineProps({scores: {type: Array, required: true}})
const emit = defineEmits(['onSeach'])
function search(criteria){
    const filteredList = props.scores.filter(s => s.name.includes(criteria))
    emit('onSeach', filteredList)
}
</script>
