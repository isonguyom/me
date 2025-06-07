<template>
  <div ref="projectsSection" id="projects"
    class="h-full w-full flex justify-center items-center relative overflow-hidden bg-text text-background">

    <!-- Background Image -->
    <div class="absolute inset-0 flex justify-center items-center pointer-events-none">
      <img src="/assets/projects-bg.png" alt="projects background" class="w-full h-full object-cover" />
    </div>

    <div class="absolute inset-0 bg-black/10 pointer-events-none"></div>

    <!-- Slider -->
    <div ref="sliderWrapper" class="relative z-10 w-full h-full overflow-hidden py-6">
      <div ref="slider" class="flex flex-col h-full transition-transform duration-500 ease-out"
        :style="{ transform: `translateY(-${currentIndex * 100}%)` }">
        <div v-for="(project, index) in projects" :key="project.id"
          class="w-full min-h-full flex items-center justify-center">
          <ProjectCard :project="project" :isEven="index % 2 === 1" :isActive="index === currentIndex" />
        </div>
      </div>

      <!-- Toggle Button -->
      <button @click="handleSliding"
        class="absolute z-20 left-1/2 bottom-4 transform -translate-x-1/2 stroke-white cursor-pointer hover:stroke-accent transition-colors duration-300 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-accent animate-pulse"
        :class="[slideCycle === 'next' ? 'animate-shake-down' : 'animate-shake-up']">
        <IconArrowDown v-if="slideCycle === 'next'" />
        <IconArrowUp v-else />
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

import { useProjectsStore } from '@/stores/projects'

import ProjectCard from '@/components/cards/ProjectCard.vue'
import IconArrowDown from '@/components/icons/IconArrowDown.vue'
import IconArrowUp from '@/components/icons/IconArrowUp.vue'

const emit = defineEmits(['slider-active'])

// Import the projects store
const projects = useProjectsStore().projects

// Refs for DOM elements
const projectsSection = ref(null)
const sliderWrapper = ref(null)
const slider = ref(null)

const currentIndex = ref(0)
const slideCycle = ref('next')
const isSliding = ref(false)

let startY = 0
let endY = 0

// Methods to handle sliding
function lockSliding() {
  isSliding.value = true
  setTimeout(() => (isSliding.value = false), 500)
}


// Handle sliding based on button click
function handleSliding() {
  if (isSliding.value) return
  lockSliding()

  if (slideCycle.value === 'next') {
    goNext()
  } else {
    goPrev()
  }
}


// Handle next slide logic
function goNext() {
  if (currentIndex.value < projects.length - 1) {
    currentIndex.value++
  }

  slideCycle.value = currentIndex.value === projects.length - 1 ? 'prev' : 'next'
}

// Handle previous slide logic
function goPrev() {
  if (currentIndex.value > 0) {
    currentIndex.value--
  }

  slideCycle.value = currentIndex.value === 0 ? 'next' : 'prev'
}


// MOUSE WHEEL + KEYBOARD + TOUCH EVENTS
// Mouse wheel scrolling
function handleWheel(e) {
  if (isSliding.value) return

  const isAtFirst = currentIndex.value === 0
  const isAtLast = currentIndex.value === projects.length - 1
  const direction = e.deltaY > 0 ? 'down' : 'up'

  // Edge case: First slide
  if (isAtFirst && direction === 'up') {
    emit('slider-active', false)
    return
  }

  // Edge case: Last slide
  if (isAtLast && direction === 'down') {
    emit('slider-active', false)
    return
  }

  // All other cases
  emit('slider-active', true)
  e.preventDefault()

  if (direction === 'down') {
    goNext()
  } else {
    goPrev()
  }

  lockSliding()
}

// Keyboard navigation
function handleKey(e) {
  if (isSliding.value) return

  if (e.key === 'ArrowDown') goNext()
  if (e.key === 'ArrowUp') goPrev()

  lockSliding()
}

// Touch events for mobile
function handleTouchStart(e) {
  startY = e.touches[0].clientY
}

// Touch end event
function handleTouchEnd(e) {
  endY = e.changedTouches[0].clientY
  const deltaY = endY - startY

  if (Math.abs(deltaY) > 50 && !isSliding.value) {
    if (deltaY < 0) {
      goNext()
    } else if (deltaY > 0) {
      goPrev()
    }

    lockSliding()
  }
}

// Lifecycle hooks
onMounted(() => {
  projectsSection.value.addEventListener('wheel', handleWheel, { passive: false })
  projectsSection.value.addEventListener('touchstart', handleTouchStart)
  projectsSection.value.addEventListener('touchend', handleTouchEnd)
  window.addEventListener('keydown', handleKey)
})

onBeforeUnmount(() => {
  projectsSection.value.removeEventListener('wheel', handleWheel)
  projectsSection.value.removeEventListener('touchstart', handleTouchStart)
  projectsSection.value.removeEventListener('touchend', handleTouchEnd)
  window.removeEventListener('keydown', handleKey)
})
</script>

<style scoped>
/* Optional: hide scrollbar */
::-webkit-scrollbar {
  display: none;
}

@keyframes shake-up {

  0%,
  100% {
    transform: translateY(0);
  }

  25% {
    transform: translateY(-2px);
  }

  50% {
    transform: translateY(2px);
  }

  75% {
    transform: translateY(-2px);
  }
}

@keyframes shake-down {

  0%,
  100% {
    transform: translateY(0);
  }

  25% {
    transform: translateY(2px);
  }

  50% {
    transform: translateY(-2px);
  }

  75% {
    transform: translateY(2px);
  }
}

.animate-shake-up {
  animation: shake-up 1s infinite;
}

.animate-shake-down {
  animation: shake-down 1s infinite;
}
</style>
