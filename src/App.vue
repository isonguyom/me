<!-- App.vue -->
<template>
  <div ref="container">
    <Navbar />
    <HeroSection />
    <AboutSection />
    <SkillsSection />
    <ProjectsSection />
    <InsightsSection />
    <ContactSection />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import Navbar from '@/components/Navbar.vue'
import HeroSection from '@/components/sections/HeroSection.vue'
import AboutSection from '@/components/sections/AboutSection.vue'
import SkillsSection from '@/components/sections/SkillsSection.vue'
import ProjectsSection from '@/components/sections/ProjectsSection.vue'
import InsightsSection from '@/components/sections/InsightsSection.vue'
import ContactSection from '@/components/sections/ContactSection.vue'

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
