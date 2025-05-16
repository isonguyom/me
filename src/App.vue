<template>
  <div class="w-full h-screen overflow-y-scroll scroll-smooth snap-y snap-mandatory custom-scroll">
    <!-- <Navbar /> -->
    <section v-for="(Section, index) in sections" :key="index" class="snap-start h-screen">
      <transition name="fade-slide" @before-enter="beforeEnter" @enter="onEnter">
        <!-- Use v-if to ensure full re-rendering of the sections when they are in view -->
        <component v-if="inView[index]" :is="Section" />
      </transition>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

import Navbar from '@/components/Navbar.vue'
import HeroSection from '@/components/sections/HeroSection.vue'
import AboutSection from '@/components/sections/AboutSection.vue'
import SkillsSection from '@/components/sections/SkillsSection.vue'
import ProjectsSection from '@/components/sections/ProjectsSection.vue'
import ArticlesSection from '@/components/sections/ArticlesSection.vue'
import ContactSection from '@/components/sections/ContactSection.vue'

const sections = [HeroSection, AboutSection, SkillsSection, ProjectsSection, ArticlesSection, ContactSection]
const inView = ref(sections.map(() => false))

const beforeEnter = (el) => {
  el.style.opacity = 0
  el.style.transform = 'translateY(20px)'
}

const onEnter = (el, done) => {
  el.offsetHeight // trigger reflow
  el.style.transition = 'opacity 0.6s ease, transform 0.6s ease'
  el.style.opacity = 1
  el.style.transform = 'translateY(0)'

  // Add a staggered delay based on the index
  el.style.transitionDelay = `${el.dataset.index * 0.2}s`

  done()
}

onMounted(() => {
  const sectionEls = document.querySelectorAll('section')
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const index = Array.from(sectionEls).indexOf(entry.target)
        if (entry.isIntersecting) {
          inView.value[index] = true
        } else {
          inView.value[index] = false
        }
      })
    },
    { threshold: 0.5 }
  )

  sectionEls.forEach((el) => observer.observe(el))

  onBeforeUnmount(() => observer.disconnect())
})
</script>

<style scoped>
.custom-scroll::-webkit-scrollbar {
  width: 8px;
}

.custom-scroll::-webkit-scrollbar-track {
  background: transparent;
}

.custom-scroll::-webkit-scrollbar-thumb {
  background-color: var(--color-accent);
  border-radius: 6px;
}

/* Transition animation */
.fade-slide-enter-active {
  transition: opacity 0.6s ease, transform 0.6s ease;
}

.fade-slide-enter-from {
  opacity: 0;
  transform: translateY(20px);
}

.fade-slide-leave-active {
  transition: opacity 0.4s ease, transform 0.4s ease;
}

.fade-slide-leave-to {
  opacity: 0;
  transform: translateY(20px);
}

.section-content {
  opacity: 0;
  transform: translateY(20px);
}
</style>
