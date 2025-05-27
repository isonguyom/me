<template>
  <div ref="projectsSection" id="projects"
    class="h-full w-full flex justify-center items-center px-4 md:px-6 py-10 relative scroll-snap-start snap-always text-white">

    <!-- Background Image container -->
    <div class="absolute inset-0 bg-cover bg-center pointer-events-none"
      style="background-image: url('./assets/projects-bg.png')"></div>
    <div class="absolute inset-0 bg-black/20"></div>

    <Navbar darkBg />
    <SectionTitle title="Projects" subtitle="What I've Built" />

    <div class="w-full h-full px-2 overflow-y-auto flex flex-col justify-center items-center z-10">

      <h2 class="lg:hidden text-lg text-center md:text-xl lg:text-left font-semibold font-heading text-secondary mb-4">
        My Projects
      </h2>

      <div
        class="custom-nav-buttons pointer-events-none absolute top-1/2 left-0 right-0 flex justify-between px-4 z-10">
        <button
          class="custom-prev text-white cursor-pointer text-2xl font-bold flex items-center justify-center bg-white/10 enabled:hover:bg-white/50 enabled:hover:scale-[1.05] disabled:opacity-30 disabled:cursor-not-allowed px-4">&larr;</button>
        <button
          class="custom-next text-white cursor-pointer text-2xl font-bold flex items-center justify-center bg-white/10 enabled:hover:bg-white/50 enabled:hover:scale-[1.05] disabled:opacity-30 disabled:cursor-not-allowed px-4">&rarr;</button>
      </div>

      <Swiper ref="projectsContent" :modules="[Navigation, Pagination]" :slides-per-view="1" :space-between="30"
        :navigation="{ nextEl: '.custom-next', prevEl: '.custom-prev' }" :pagination="{ clickable: true }"
        class="w-full">
        <SwiperSlide v-for="(project, index) in projects" :key="project.id">
          <ProjectCard :project="project" :isEven="index % 2 === 1" />
        </SwiperSlide>
      </Swiper>


    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import { useProjectsStore } from '@/stores/projects'

import ProjectCard from '@/components/cards/ProjectCard.vue'
import SectionTitle from '@/components/SectionTitle.vue'
import Navbar from '@/components/Navbar.vue'

gsap.registerPlugin(ScrollTrigger)

const projectsStore = useProjectsStore()
const projects = projectsStore.projects
const projectsSection = ref(null)
const projectsContent = ref(null)


// onMounted(() => {
//   gsap.fromTo(
//     projectsSection.value,
//     { opacity: 0 },
//     {
//       opacity: 1,
//       duration: 1,
//       ease: 'power3.out',
//       scrollTrigger: {
//         trigger: projectsSection.value,
//         start: 'top center',
//       },
//     }
//   )
// })
</script>

<style scoped>
/* Pagination Bullets */
::v-deep(.swiper-pagination-bullet) {
  background-color: #888;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  opacity: 0.6;
  margin: 0 5px;
  transition: all 0.3s ease;
}

::v-deep(.swiper-pagination-bullet-active) {
  background-color: var(--color-accent);
  opacity: 1;
  transform: scale(1.3);
}

.custom-prev,
.custom-next {
  pointer-events: all;
  /* Enable clicking */
  transition: all 0.3s ease;
}
</style>
