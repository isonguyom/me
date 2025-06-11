<template>
    <!-- Side indicator -->
    <nav v-show="hideEl" ref="sideIndicator"
        class="fixed top-1/2 right-2 transform -translate-y-1/2 flex flex-col gap-2 z-10 pointer-events-none">
        <button v-for="(section, index) in sectionsCount" :key="index" @click="handleGoTo(index)" :title="titles[index]"
            :aria-label="`Go to section ${index + 1}`" :class="[
                'w-3 h-3 border-2 hover:border-accent pointer-events-auto cursor-pointer transition-colors duration-300 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary',
                isCurrentSection(index) ? 'border-accent bg-accent animate-pulse' : darkBg ? 'bg-white/10 border-white/70' : 'bg-black/10 border-black/70'
            ]"></button>
    </nav>
</template>

<script setup>
import { ref, watch } from 'vue'
import gsap from 'gsap'

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
    },
    hideEl: {
        type: Boolean,
        default: false
    }
})

const emit = defineEmits(['goTo'])

const sideIndicator = ref(null)

const titles = ['Home', 'About Me', 'My Skills', 'My Projects', 'My Articles', 'Contact Me']

const isCurrentSection = (index) => props.current === index

const handleGoTo = (index) => {
    emit('goTo', index)
}


// watch for every true occurrence of hideEl prop to animate the side indicator
watch(() => props.hideEl, (newVal) => {
    if (newVal && sideIndicator.value) {
        gsap.from(sideIndicator.value, { x: 80, opacity: 0, duration: 1, ease: 'power3.out', delay: 0.8 })
    }
})
</script>

<style scoped></style>
