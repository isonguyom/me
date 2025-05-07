<template>
    <section ref="projectsSection" id="projects"
        class="h-screen w-full bg-gray-100 text-gray-900 px-6 py-16 flex flex-col justify-center items-center overflow-hidden relative">
        <SectionTitle title="Projects" subtitle="What I've Built" />
        <div ref="projectsContent"
            class="max-w-5xl w-full text-center space-y-10 h-full overflow-y-auto flex flex-col justify-center items-center">
            <div class="grid md:grid-cols-2 gap-6">
                <ProjectCard v-for="project in projects" :key="project.title" :project="project" />
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
    {
        title: 'Container Tracking Platform',
        description: 'Track containers and cargo vessels across global ports with geospatial APIs.',
        image: '',
        link: '#'
    }
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
</script>