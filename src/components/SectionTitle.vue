<template>
    <div
        class="hidden lg:block absolute top-0 left-0 bg-primary text-white p-4 space-y-1 rounded-e-full rounded-b-full shadow-md hover:scale-105 transition-transform duration-300 ease-in-out z-10">
        <h2 class="font-bold capitalize">{{ title }}</h2>
        <p v-if="subtitle" class="opacity-80 font-script text-sm">{{ subtitle }}</p>
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