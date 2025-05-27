<template>
  <main ref="container" class="w-[100vw] h-screen overflow-hidden relative">
    <!-- Navbar -->
    <Navbar :section-title="sectionTitle" />

    <!-- Side indicator -->
    <nav class="side-indicator">
      <button v-for="(section, index) in sectionsCount" :key="index" :class="{ active: current === index }"
        @click="goToSection(index)" :aria-label="`Go to section ${index + 1}`"></button>
    </nav>

    <SideIndicator :sectionsCount="sectionsCount" :current="current" @go-to="goToSection" />

    <section class="hero" id="home">
      <div class="outer">
        <div class="inner">
          <div class="bg one">
            <HeroSection />
          </div>
        </div>
      </div>
    </section>

    <section class="about" id="about">
      <div class="outer">
        <div class="inner">
          <div class="bg">
            <AboutSection />
          </div>
        </div>
      </div>
    </section>

    <section class="skills" id="skills">
      <div class="outer">
        <div class="inner">
          <div class="bg">
            <SkillsSection />
          </div>
        </div>
      </div>
    </section>

    <section class="projects" id="projects">
      <div class="outer">
        <div class="inner">
          <div class="bg">
            <ProjectsSection />
          </div>
        </div>
      </div>
    </section>

    <section class="articles" id="articles">
      <div class="outer">
        <div class="inner">
          <div class="bg">
            <ArticlesSection />
          </div>
        </div>
      </div>
    </section>

    <section class="contact" id="contact">
      <div class="outer">
        <div class="inner">
          <div class="bg">
            <ContactSection />
          </div>
        </div>
      </div>
    </section>
    <Footer :index="current" :total="sectionsCount" @go-to="goToSection" />
  </main>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'
import { gsap } from 'gsap'

import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'
import SideIndicator from '@/components/SideIndicator.vue'
import HeroSection from '@/components/sections/HeroSection.vue'
import AboutSection from '@/components/sections/AboutSection.vue'
import SkillsSection from '@/components/sections/SkillsSection.vue'
import ProjectsSection from '@/components/sections/ProjectsSection.vue'
import ArticlesSection from '@/components/sections/ArticlesSection.vue'
import ContactSection from '@/components/sections/ContactSection.vue'

const container = ref(null)
const current = ref(undefined)
const next = ref(0)
const listening = ref(false)

const sectionsCount = 6 // total sections, adjust if needed
// Default section title, can be dynamic if needed

const sections = ref([])
const images = ref([])
const outerWrappers = ref([])
const innerWrappers = ref([])
const direction = ref('right') // Default direction for initial slide

const touch = {
  startX: 0,
  startY: 0,
  dx: 0,
  dy: 0,
  startTime: 0,
  dt: 0
}

const tlDefaults = {
  ease: 'slow.inOut',
  duration: 1.25
}

// Computed property to get the current section index
const sectionTitle = computed(() => {
  if (current.value === undefined) return 'Home'
  switch (current.value) {
    case 0: return 'Home'
    case 1: return 'About'
    case 2: return 'Skills'
    case 3: return 'Projects'
    case 4: return 'Articles'
    case 5: return 'Contact'
    default: return 'Home'
  }
})


function slideIn() {
  if (current.value !== undefined) gsap.set(sections.value[current.value], { zIndex: 0 })

  gsap.set(sections.value[next.value], { autoAlpha: 1, zIndex: 1 })
  gsap.set(images.value[next.value], { xPercent: 0 })

  const tl = gsap
    .timeline({
      paused: true,
      defaults: tlDefaults,
      onComplete: () => {
        listening.value = true
        current.value = next.value
      }
    })
    .to([outerWrappers.value[next.value], innerWrappers.value[next.value]], { xPercent: 0 }, 0)
    .from(images.value[next.value], { xPercent: 15 }, 0)

  if (current.value !== undefined) {
    tl.add(
      gsap.to(images.value[current.value], {
        xPercent: -15,
        ...tlDefaults
      }),
      0
    ).add(
      gsap
        .timeline()
        .set(outerWrappers.value[current.value], { xPercent: 100 })
        .set(innerWrappers.value[current.value], { xPercent: -100 })
        .set(images.value[current.value], { xPercent: 0 })
        .set(sections.value[current.value], { autoAlpha: 0 })
    )
  }

  tl.play(0)
}

function slideOut() {
  gsap.set(sections.value[current.value], { zIndex: 1 })
  gsap.set(sections.value[next.value], { autoAlpha: 1, zIndex: 0 })
  gsap.set([outerWrappers.value[next.value], innerWrappers.value[next.value]], { xPercent: 0 })
  gsap.set(images.value[next.value], { xPercent: 0 })

  gsap
    .timeline({
      defaults: tlDefaults,
      onComplete: () => {
        listening.value = true
        current.value = next.value
      }
    })
    .to(outerWrappers.value[current.value], { xPercent: 100 }, 0)
    .to(innerWrappers.value[current.value], { xPercent: -100 }, 0)
    .to(images.value[current.value], { xPercent: 15 }, 0)
    .from(images.value[next.value], { xPercent: -15 }, 0)
    .set(images.value[current.value], { xPercent: 0 })
}

function handleDirection() {
  listening.value = false

  if (direction.value === 'right') {
    const nextIndex = current.value + 1
    if (nextIndex >= sections.value.length) {
      listening.value = true // reset listening since we don't slide
      return
    }
    next.value = nextIndex
    slideIn()
  } else if (direction.value === 'left') {
    const nextIndex = current.value - 1
    if (nextIndex < 0) {
      listening.value = true
      return
    }
    next.value = nextIndex
    slideOut()
  }
}


function goToSection(index) {
  if (!listening.value || index === current.value) return
  listening.value = false
  next.value = index
  // Determine direction for animation
  direction.value = next.value > current.value ? 'right' : 'left'
  if (direction.value === 'right') slideIn()
  else slideOut()
}

function handleWheel(e) {
  if (!listening.value) return
  e.preventDefault()
  direction.value = e.deltaY > 0 ? 'right' : 'left'
  handleDirection()
}

function handleTouchStart(e) {
  const t = e.changedTouches[0]
  touch.startX = t.pageX
  touch.startY = t.pageY
  touch.startTime = Date.now()
  touch.dx = 0
  touch.dy = 0
}

function handleTouchMove(e) {
  e.preventDefault()
  const t = e.changedTouches[0]
  touch.dx = t.pageX - touch.startX
  touch.dy = t.pageY - touch.startY
}

function handleTouchEnd() {
  if (!listening.value) return
  const { dx } = touch
  if (Math.abs(dx) < 50) return
  direction.value = dx < 0 ? 'right' : 'left'
  handleDirection()
}

function handleKeyDown(e) {
  if (!listening.value) return
  if (e.key === 'ArrowRight') {
    direction.value = 'right'
    handleDirection()
  } else if (e.key === 'ArrowLeft') {
    direction.value = 'left'
    handleDirection()
  }
}




onMounted(() => {
  sections.value = container.value.querySelectorAll('section')
  images.value = document.querySelectorAll('.bg')
  outerWrappers.value = gsap.utils.toArray('.outer')
  innerWrappers.value = gsap.utils.toArray('.inner')

  gsap.set(outerWrappers.value, { xPercent: 100 }) // Changed from yPercent to xPercent
  gsap.set(innerWrappers.value, { xPercent: -100 })

  document.addEventListener('wheel', handleWheel, { passive: false })
  document.addEventListener('touchstart', handleTouchStart, { passive: false })
  document.addEventListener('touchmove', handleTouchMove, { passive: false })
  document.addEventListener('touchend', handleTouchEnd)
  document.addEventListener('keydown', handleKeyDown)

  slideIn()
})
</script>

<style scoped>
section {
  height: 100%;
  width: 100%;
  top: 0;
  position: fixed;
  visibility: hidden;
  will-change: transform;
}

.outer,
.inner {
  width: 100%;
  height: 100%;
  overflow-y: hidden;
  will-change: transform;
}

.bg {
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  background-size: cover;
  background-position: center;
}
</style>
