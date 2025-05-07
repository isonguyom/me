<template>
    <div
        class="absolute top-0 left-0 bg-primary text-secondary py-4 px-6 rounded-e-full rounded-b-full shadow-md hover:scale-105 transition-transform duration-300 ease-in-out">
        <h2 class="font-bold text-lg">{{ title }}</h2>
        <p v-if="subtitle" class="opacity-80 font-script">{{ subtitle }}</p>
    </div>
</template>

<script setup>

const props = defineProps({
    title: {
        type: String,
        required: true,
    },
    subtitle: {
        type: String,
        default: null,
    },
})

</script>

<style scoped></style>