<template>
    <!-- Side indicator -->
    <nav class="side-indicator fixed">
        <button v-for="(section, index) in sectionsCount" :key="index" :class="{ active: isCurrentSection(index) }"
            @click="handleGoTo(index)" :aria-label="`Go to section ${index + 1}`"></button>
    </nav>
</template>

<script setup>
const props = defineProps({
    sectionsCount: {
        type: Number,
        required: true
    },
    current: {
        required: true
    }
})

const emit = defineEmits(['goTo'])

const isCurrentSection = (index) => {
    if (props.current === null || props.current === undefined) {
        return false
    }
    return index === props.current
}

const handleGoTo = (index) => {
    emit('goTo', index)
}

</script>

<style scoped>
/* Side Indicator */
.side-indicator {
    position: fixed;
    top: 50%;
    right: 2%;
    transform: translateY(-50%);
    display: flex;
    flex-direction: column;
    gap: 1rem;
    z-index: 10;
}

.side-indicator button {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    border: 2px solid #ccc;
    background: transparent;
    cursor: pointer;
    transition: background-color 0.3s, border-color 0.3s;
}

.side-indicator button.active {
    background-color: #0c325b;
    /* primary color */
    border-color: #0c325b;
}
</style>
