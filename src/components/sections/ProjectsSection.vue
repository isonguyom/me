<template>
  <section ref="projectsSection" id="projects"
    class="h-screen w-full bg-black text-background px-4 md:px-6 flex flex-col justify-center items-center overflow-hidden relative">
    <SectionTitle title="Projects" subtitle="What I've Built" />
    <h2 class="lg:hidden text-2xl text-center md:text-3xl lg:text-left font-semibold font-heading text-primary mb-4">My
      Projects
    </h2>
    <Swiper ref="projectsContent" :modules="[Navigation, Pagination]" :slides-per-view="1" :space-between="30"
      navigation pagination class="w-full">
      <SwiperSlide v-for="(project, index) in projects" :key="project.id">
        <ProjectCard :project="project" :isEven="index % 2 === 1" />
      </SwiperSlide>
    </Swiper>
  </section>
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
.swiper-button-next,
.swiper-button-prev {
  color: var(--color-accent);
}

.swiper-pagination-bullet-active {
  background: var(--color-primary);
}
</style>