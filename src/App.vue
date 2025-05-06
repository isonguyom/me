<!-- App.vue -->
<template>
  <div ref="container">
    <HeroSection />
    <AboutSection />
    <ProjectsSection />
    <InsightsSection />
    <ContactSection />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import HeroSection from './components/HeroSection.vue'
import AboutSection from './components/AboutSection.vue'
import ProjectsSection from './components/ProjectsSection.vue'
import InsightsSection from './components/InsightsSection.vue'
import ContactSection from './components/ContactSection.vue'

gsap.registerPlugin(ScrollTrigger)

const container = ref(null)

onMounted(() => {
  const sections = gsap.utils.toArray(container.value.children)

  gsap.to(sections, {
    yPercent: -100 * (sections.length - 1),
    ease: 'none',
    scrollTrigger: {
      trigger: container.value,
      pin: true,
      scrub: 1,
      snap: 1 / (sections.length - 1),
      end: () => "+=" + container.value.offsetHeight,
    },
  })
})
</script>
