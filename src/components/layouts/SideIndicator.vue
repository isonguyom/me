<template>
    <!-- Side indicator -->
    <nav class="fixed top-1/2 right-2 transform -translate-y-1/2 flex flex-col gap-2 z-10 pointer-events-none">
        <button v-for="(section, index) in sectionsCount" :key="index" @click="handleGoTo(index)" :title="titles[index]"
            :aria-label="`Go to section ${index + 1}`" :class="[
                'w-3 h-3 border-2 hover:border-accent pointer-events-auto cursor-pointer transition-colors duration-300 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary',
                isCurrentSection(index) ? 'border-accent bg-accent animate-pulse' : darkBg ? 'bg-white/10 border-white/70' : 'bg-black/10 border-black/70'
            ]"></button>
    </nav>
</template>

<script setup>
const props = defineProps({
    sectionsCount: {
        type: Number,
        required: true
    },
    current: {
        type: Number,
        required: true
    },
    darkBg: {
        type: Boolean,
        default: false
    }
})

const emit = defineEmits(['goTo'])

const titles = ['Home', 'About Me', 'My Skills', 'My Projects', 'My Articles', 'Contact Me']

const isCurrentSection = (index) => props.current === index

const handleGoTo = (index) => {
    emit('goTo', index)
}
</script>

<style scoped></style>
