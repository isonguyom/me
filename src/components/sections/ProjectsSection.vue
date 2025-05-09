<!-- <template>
    <section ref="projectsSection" id="projects"
        class="h-screen w-full bg-black text-background px-4 md:px-6 flex flex-col justify-center items-center overflow-hidden relative">
        <SectionTitle title="Projects" subtitle="What I've Built" />
        <div ref="projectsContent" class="w-full h-full overflow-hidden flex flex-col justify-center items-center">
            <div class="w-full">
                <ProjectCard v-for="(project, index) in projects" :key="project.title" :project="project"
                    :isEven="index % 2 === 1" />
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import SectionTitle from '@/components/SectionTitle.vue'
import ProjectCard from '@/components/cards/ProjectCard.vue'

gsap.registerPlugin(ScrollTrigger)

const projectsSection = ref(null)
const projectsContent = ref(null)

const projects = [
    {
        title: 'Marine Traffic Dashboard',
        description: 'Real-time data visualization of vessel traffic using Vue and D3.js.',
        image: '',
        link: '#'
    },
    // {
    //     title: 'Container Tracking Platform',
    //     description: 'Track containers and cargo vessels across global ports with geospatial APIs.',
    //     image: '',
    //     link: '#'
    // }
]


onMounted(() => {
    gsap.fromTo(
        projectsContent.value,
        { xPercent: -100, opacity: 0 },
        {
            xPercent: 0,
            opacity: 1,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: projectsSection.value,
                start: 'top center',
            },
        }
    )
})
</script> -->

<template>
    <section ref="projectsSection" id="projects"
        class="h-screen w-full bg-black text-background px-4 md:px-6 flex flex-col justify-center items-center overflow-hidden relative">
        <SectionTitle title="Projects" subtitle="What I've Built" />
        
      <Swiper
        :modules="[Navigation, Pagination, Autoplay]"
        :slides-per-view="1"
        :space-between="30"
        :loop="true"
        :autoplay="{ delay: 4500, disableOnInteraction: false }"
        navigation
        pagination
        class="w-full max-w-6xl mx-auto"
      >
        <SwiperSlide v-for="(project, index) in projects" :key="project.id">
          <ProjectCard :project="project" :isEven="index % 2 === 1" />
        </SwiperSlide>
      </Swiper>
    </section>
  </template>
  
  <script setup>
  import {ref} from 'vue'
  import { Swiper, SwiperSlide } from 'swiper/vue'
  import { Navigation, Pagination, Autoplay } from 'swiper/modules'
  
  import 'swiper/css'
  import 'swiper/css/navigation'
  import 'swiper/css/pagination'
  
  import ProjectCard from '@/components/cards/ProjectCard.vue'
  import SectionTitle from '@/components/SectionTitle.vue'

  const projectsSection = ref(null)
const projectsContent = ref(null)
  
  const projects = [
    {
      id: 1,
      title: 'Cargo Tracker',
      description: 'A real-time dashboard for monitoring maritime shipments.',
      image: '/assets/project-cargo.png',
      link: 'https://example.com/cargo-tracker',
      tags: ['Vue.js', 'Leaflet', 'TailwindCSS'],
    },
    {
      id: 2,
      title: 'Marine Analytics',
      description: 'Big data platform providing insight into vessel operations.',
      image: '/assets/project-analytics.png',
      link: 'https://example.com/marine-analytics',
      tags: ['D3.js', 'Node.js', 'MongoDB'],
    },
    {
      id: 3,
      title: 'Port Automation UI',
      description: 'Interface for managing port container operations.',
      image: '/assets/project-port.png',
      link: 'https://example.com/port-automation',
      tags: ['Vue 3', 'Vite', 'GSAP'],
    },
  ]
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
  