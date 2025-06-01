<template>
  <div ref="projectsSection" id="projects" class="relative w-full h-screen bg-black text-white overflow-hidden">
    <!-- Navigation Buttons -->
    <button @click="goPrev"
      class="absolute z-20 top-1/2 left-4 transform -translate-y-1/2 bg-white text-black px-3 py-2 rounded hover:bg-gray-200">
      Prev
    </button>
    <button @click="goNext"
      class="absolute z-20 top-1/2 right-4 transform -translate-y-1/2 bg-white text-black px-3 py-2 rounded hover:bg-gray-200">
      Next
    </button>

    <!-- Horizontal Scroll Area -->
    <div ref="sliderWrapper" class="w-full h-full overflow-hidden">
      <div
        ref="slider"
        class="flex h-full transition-transform duration-500 ease-out"
        :style="{ transform: `translateX(-${currentIndex * 100}%)` }"
      >
        <div
          v-for="(project, index) in projects"
          :key="project.id"
          class="min-w-full h-full flex items-center justify-center p-4"
        >
          <ProjectCard :project="project" :isEven="index % 2 === 1" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import ProjectCard from '@/components/cards/ProjectCard.vue'
import { useProjectsStore } from '@/stores/projects'

const projects = useProjectsStore().projects

const currentIndex = ref(0)

function goNext() {
  if (currentIndex.value < projects.length - 1) {
    currentIndex.value++
  }
}

function goPrev() {
  if (currentIndex.value > 0) {
    currentIndex.value--
  }
}
</script>

<style scoped>
/* Optional smoother scroll (no scrollbars needed here) */
::-webkit-scrollbar {
  display: none;
}
</style>
