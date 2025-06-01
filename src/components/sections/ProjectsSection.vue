<template>
  <div ref="projectsSection" id="projects" class="relative w-full h-screen bg-black text-white overflow-hidden">
    <!-- Toggle Button -->
    <button @click="handleSliding"
      class="absolute z-20 left-1/2 bottom-4 transform -translate-x-1/2 stroke-white cursor-pointer hover:stroke-accent transition-colors duration-300 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-accent animate-pulse"
      :class="[slideCycle === 'next' ? 'animate-shake-down' : 'animate-shake-up']">
      <IconArrowDown v-if="slideCycle === 'next'" />
      <IconArrowUp v-else />
    </button>

    <!-- Slider -->
    <div ref="sliderWrapper" class="w-full h-full overflow-hidden">
      <div ref="slider" class="flex flex-col h-full transition-transform duration-500 ease-out"
        :style="{ transform: `translateY(-${currentIndex * 100}%)` }">
        <div v-for="(project, index) in projects" :key="project.id"
          class="w-full min-h-full flex items-center justify-center">
          <ProjectCard :project="project" :isEven="index % 2 === 1" :isActive="index === currentIndex" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, watch, nextTick, onMounted, onBeforeUnmount } from 'vue'
import { gsap } from 'gsap'
import { useProjectsStore } from '@/stores/projects'
import ProjectCard from '@/components/cards/ProjectCard.vue'
import IconArrowDown from '@/components/icons/IconArrowDown.vue'
import IconArrowUp from '@/components/icons/IconArrowUp.vue'

const emit = defineEmits(['slider-active'])

const projects = useProjectsStore().projects
const projectsSection = ref(null)
const slider = ref(null)

const currentIndex = ref(0)
const slideCycle = ref('next')
const isSliding = ref(false)

let startY = 0
let endY = 0

function lockSliding() {
  isSliding.value = true
  setTimeout(() => (isSliding.value = false), 500)
}

function handleSliding() {
  if (isSliding.value) return
  lockSliding()

  if (slideCycle.value === 'next') {
    goNext()
  } else {
    goPrev()
  }
}

function goNext() {
  if (currentIndex.value < projects.length - 1) {
    currentIndex.value++
  }

  slideCycle.value = currentIndex.value === projects.length - 1 ? 'prev' : 'next'
}

function goPrev() {
  if (currentIndex.value > 0) {
    currentIndex.value--
  }

  slideCycle.value = currentIndex.value === 0 ? 'next' : 'prev'
}


// MOUSE WHEEL + KEYBOARD + TOUCH EVENTS
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


function handleKey(e) {
  if (isSliding.value) return

  if (e.key === 'ArrowDown') goNext()
  if (e.key === 'ArrowUp') goPrev()

  lockSliding()
}

function handleTouchStart(e) {
  startY = e.touches[0].clientY
}

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

onMounted(() => {
  projectsSection.value.addEventListener('wheel', handleWheel, { passive: false })
  window.addEventListener('keydown', handleKey)
  projectsSection.value.addEventListener('touchstart', handleTouchStart)
  projectsSection.value.addEventListener('touchend', handleTouchEnd)
})

onBeforeUnmount(() => {
  projectsSection.value.removeEventListener('wheel', handleWheel)
  window.removeEventListener('keydown', handleKey)
  projectsSection.value.removeEventListener('touchstart', handleTouchStart)
  projectsSection.value.removeEventListener('touchend', handleTouchEnd)
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
