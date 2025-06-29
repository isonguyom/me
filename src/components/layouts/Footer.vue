<template>
    <footer v-show="hideEl" ref="footer" :class="[
        'bg-transparent p-4 md:px-6 z-40 fixed bottom-0 w-full pointer-events-none',
        darkBg ? 'text-white stroke-white' : 'text-black stroke-black'
    ]">
        <div class="w-full flex justify-between items-end">
            <!-- Left: Copyright -->
            <div>
                <small class="text-sm md:text-base font-medium block opacity-70">
                    &copy; {{ new Date().getFullYear() }} | All rights reserved.
                </small>
            </div>

            <!-- Right: Arrows or Section Number -->
            <div class="pr-3 flex items-center">
                <!-- Right arrow (go forward) -->
                <button v-if="index === 0" @click="handleGoTo(1)" aria-label="Go to next section" title="Next Page"
                    class="pointer-events-auto cursor-pointer hover:stroke-accent transition-colors duration-300 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-accent animate-shake-right animate-pulse">
                    <IconArrowRight />
                </button>

                <!-- Section number -->
                <span v-else-if="index < total - 1"
                    class="pointer-events-none text-4xl md:text-5 font-bold opacity-30 number bg-transparent">
                    {{ (index + 1).toString().padStart(2, '0') }}
                </span>

                <!-- Left arrow (go backward) -->
                <button v-else @click="handleGoTo(total - 2)" aria-label="Go to previous section" title="Previous Page"
                    class="pointer-events-auto cursor-pointer hover:stroke-accent transition-colors duration-300 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-accent animate-shake-left animate-pulse">
                    <IconArrowLeft />
                </button>
            </div>
        </div>
    </footer>
</template>

<script setup>
import { ref, watch } from 'vue'
import gsap from 'gsap'

import IconArrowRight from '@/components/icons/IconArrowRight.vue'
import IconArrowLeft from '@/components/icons/IconArrowLeft.vue'

const props = defineProps({
    index: {
        type: Number,
        required: true
    },
    total: {
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

const footer = ref(null)

const handleGoTo = (ind) => {
    emit('goTo', ind)
}

// watch for every true occurrence of hideEl prop to animate the footer
watch(() => props.hideEl, (newVal) => {
    if (newVal && footer.value) {
        gsap.from(footer.value, { y: 80, opacity: 0, duration: 1, ease: 'power3.out', delay: 0.6 })
    }
})
</script>

<style scoped>
.number {
    -webkit-text-stroke: 1px currentColor;
    /* text-stroke: 1px currentColor; */
}

@keyframes shake-left {

    0%,
    100% {
        transform: translateX(0);
    }

    25% {
        transform: translateX(-2px);
    }

    50% {
        transform: translateX(2px);
    }

    75% {
        transform: translateX(-2px);
    }
}

@keyframes shake-right {

    0%,
    100% {
        transform: translateX(0);
    }

    25% {
        transform: translateX(2px);
    }

    50% {
        transform: translateX(-2px);
    }

    75% {
        transform: translateX(2px);
    }
}

.animate-shake-left {
    animation: shake-left 1s infinite;
}

.animate-shake-right {
    animation: shake-right 1s infinite;
}
</style>
