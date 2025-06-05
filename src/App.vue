<template>
  <main id="mainWrapper" ref="container" tabindex="0" class="w-[100vw] h-screen overflow-hidden relative">
    <Navbar :currentIndex="current" @go-to="goToSection" @toggle-nav="isNavActive = $event" :darkBg="isDarkBg" />
    <SideIndicator :sections-count="sectionsCount" :current="current" @go-to="goToSection" :darkBg="isDarkBg" />

    <template v-for="(Component, index) in sectionsList" :key="index">
      <section :class="['section', Component.class, current === index ? 'active' : '']" :id="Component.id"
        aria-labelledby="`${Component.id}-heading`" :aria-hidden="current !== index ? 'true' : 'false'"
        :tabindex="current === index ? 0 : -1">
        <h2 :id="`${Component.id}-heading`" class="sr-only">{{ Component.id }}</h2>
        <div class="outer">
          <div class="inner">
            <div class="bg">
              <component :is="Component.component" :key="Component.id" @go-to="goToSection" @slider-active="isSliderActive = $event" />
            </div>
          </div>
        </div>
      </section>
    </template>


    <Footer :index="current" :total="sectionsCount" @go-to="goToSection" :darkBg="isDarkBg" />
  </main>
</template>

<script setup>
import { ref, onMounted, onUnmounted, watch, watchEffect, computed } from 'vue'
import { gsap } from 'gsap'

import Navbar from '@/components/layouts/Navbar.vue'
import Footer from '@/components/layouts/Footer.vue'
import SideIndicator from '@/components/layouts/SideIndicator.vue'

import HeroSection from '@/components/sections/HeroSection.vue'
import AboutSection from '@/components/sections/AboutSection.vue'
import SkillsSection from '@/components/sections/SkillsSection.vue'
import ProjectsSection from '@/components/sections/ProjectsSection.vue'
import ArticlesSection from '@/components/sections/ArticlesSection.vue'
import ContactSection from '@/components/sections/ContactSection.vue'

const container = ref(null)
const current = ref(0)
const next = ref(0)
const direction = ref('right')
const listening = ref(false)
const initialLoad = ref(true)
const isNavActive = ref(false)
const isSliderActive = ref(false)

const sections = ref([])
const images = ref([])
const outerWrappers = ref([])
const innerWrappers = ref([])


const sectionsList = [
  { id: 'home', class: 'hero', component: HeroSection },
  { id: 'aboutMe', class: 'about', component: AboutSection },
  { id: 'mySkills', class: 'skills', component: SkillsSection },
  { id: 'myProjects', class: 'projects', component: ProjectsSection },
  { id: 'myArticles', class: 'articles', component: ArticlesSection },
  { id: 'contactMe', class: 'contact', component: ContactSection },
]

const sectionsCount = sectionsList.length
const tlDefaults = { ease: 'slow.inOut', duration: 1.25 }

// Compute isDarkBg based on the current section
const isDarkBg = computed(() => {
  const currentSection = sectionsList[current.value]
   const darkSections = ['skills', 'projects', 'contact']
  return darkSections.includes(currentSection.class);
})


let isTransitioning = false // ✅ (2) Navigation lock

function lockTransition(duration = 1300) {
  isTransitioning = true
  setTimeout(() => { isTransitioning = false }, duration)
}

// ✅ (3) Utility function to reset GSAP styles
function resetSectionStyles(index) {
  const outerX = index === next.value ? 0 : index === current.value ? 100 : 100
  const innerX = index === next.value ? 0 : index === current.value ? -100 : -100

  gsap.set(outerWrappers.value[index], { xPercent: outerX })
  gsap.set(innerWrappers.value[index], { xPercent: innerX })

  gsap.set(images.value[index], { xPercent: 0 })
}

function animateSlideIn() {
  if (initialLoad.value) {
    // Directly show the initial section without animation
    gsap.set(sections.value[next.value], {
      autoAlpha: 1,
      zIndex: 1,
      pointerEvents: 'auto',
    })

    gsap.set([outerWrappers.value[next.value], innerWrappers.value[next.value]], {
      xPercent: 0,
    })

    gsap.set(images.value[next.value], {
      xPercent: 0,
    })

    current.value = next.value
    updateHash(current.value)
    listening.value = true
    initialLoad.value = false
    return
  }

  // Animated transition for subsequent slides
  gsap.set(sections.value[current.value], {
    zIndex: 0,
    pointerEvents: 'none',
  })

  gsap.set(sections.value[next.value], {
    autoAlpha: 1,
    zIndex: 1,
    pointerEvents: 'auto',
  })

  gsap.set(images.value[next.value], { xPercent: 0 })

  const tl = gsap.timeline({
    paused: true,
    defaults: tlDefaults,
    onComplete: () => {
      current.value = next.value
      updateHash(current.value)
      listening.value = true
      initialLoad.value = false
    },
  })

  tl.to([outerWrappers.value[next.value], innerWrappers.value[next.value]], { xPercent: 0 }, 0)
    .from(images.value[next.value], { xPercent: 15 }, 0)

  tl.to(images.value[current.value], { xPercent: -15 }, 0)
    .set(outerWrappers.value[current.value], { xPercent: 100 })
    .set(innerWrappers.value[current.value], { xPercent: -100 })
    .set(images.value[current.value], { xPercent: 0 })
    .set(sections.value[current.value], {
      autoAlpha: 0,
      pointerEvents: 'none',
    })

  tl.play(0)
}



function animateSlideOut() {
  gsap.set(sections.value[current.value], {
    zIndex: 1,
    pointerEvents: 'none',
  })

  gsap.set(sections.value[next.value], {
    autoAlpha: 1,
    zIndex: 0,
    pointerEvents: 'auto',
  })

  gsap.set([outerWrappers.value[next.value], innerWrappers.value[next.value]], { xPercent: 0 })
  gsap.set(images.value[next.value], { xPercent: 0 })

  gsap.timeline({
    defaults: tlDefaults,
    onComplete: () => {
      current.value = next.value
      updateHash(current.value) // ✅ Add this
      listening.value = true
    },
  })
    .to(outerWrappers.value[current.value], { xPercent: 100 }, 0)
    .to(innerWrappers.value[current.value], { xPercent: -100 }, 0)
    .to(images.value[current.value], { xPercent: 15 }, 0)
    .from(images.value[next.value], { xPercent: -15 }, 0)
    .set(images.value[current.value], { xPercent: 0 })
    .set(sections.value[current.value], {
      autoAlpha: 0,
      pointerEvents: 'none',
    })
}

function updateHash(index) {
  const sectionId = sectionsList[index].id
  history.pushState(null, '', `#${sectionId}`)
}




// ✅ (2) Debounced and locked transition
function goToSection(index) {
  if (!listening.value || isNavActive.value || index === current.value || isTransitioning || index < 0 || index >= sectionsCount) return
  lockTransition()
  listening.value = false
  next.value = index
  direction.value = next.value > current.value ? 'right' : 'left'
  direction.value === 'right' ? animateSlideIn() : animateSlideOut()
}


function handleDirection() {
  if (isNavActive.value) {
    listening.value = true
    return
  }
  listening.value = false
  const delta = direction.value === 'right' ? 1 : -1
  const target = current.value + delta

  if (target < 0 || target >= sections.value.length) {
    listening.value = true
    return
  }

  next.value = target
  direction.value === 'right' ? animateSlideIn() : animateSlideOut()
}

let scrollDebounce
function handleWheel(e) {
  if (!listening.value || scrollDebounce || isNavActive.value || isSliderActive.value) return
  e.preventDefault()

  direction.value = e.deltaY > 0 ? 'right' : 'left'
  handleDirection()

  scrollDebounce = setTimeout(() => {
    scrollDebounce = null
  }, 800)
}

const touch = { startX: 0, dx: 0, startY: 0, dy: 0 }

function handleTouchStart(e) {
  const t = e.changedTouches[0]
  touch.startX = t.pageX
  touch.startY = t.pageY
  touch.dx = 0
}

function handleTouchMove(e) {
  const t = e.changedTouches[0]
  touch.dx = t.pageX - touch.startX
  touch.dy = t.pageY - touch.startY

  if (Math.abs(touch.dx) > Math.abs(touch.dy)) {
    if (e.cancelable) e.preventDefault()
  }
}


function handleTouchEnd() {
  if (!listening.value || Math.abs(touch.dx) < 50 || isNavActive.value) return
  direction.value = touch.dx < 0 ? 'right' : 'left'
  handleDirection()
}

function handleKeyDown(e) {
  if (!listening.value || isNavActive.value) return
  if (e.key === 'ArrowRight') direction.value = 'right'
  else if (e.key === 'ArrowLeft') direction.value = 'left'
  else return
  handleDirection()
}

watch(
  () => isNavActive.value,
  (newValue) => {
    if (newValue) {
      for (let i = 0; i < sections.value.length; i++) {
        gsap.set(sections.value[i], { pointerEvents: 'none' })
      }
      listening.value = false
    } else {
      for (let i = 0; i < sections.value.length; i++) {
        gsap.set(sections.value[i], { pointerEvents: 'auto' })
      }
      listening.value = true
    }
  }
)

watchEffect(() => {
  if (!initialLoad.value) {
    updateHash(current.value)
  }
})




// ✅ (6) Animate transition on browser back/forward
window.addEventListener('popstate', () => {
  const hash = window.location.hash.slice(1)
  const index = sectionsList.findIndex(s => s.id === hash)
  if (index !== -1) goToSection(index)
})

onMounted(() => {
  container.value.focus()
  sections.value = container.value.querySelectorAll('section')
  images.value = gsap.utils.toArray(container.value.querySelectorAll('.bg'))
  outerWrappers.value = gsap.utils.toArray(container.value.querySelectorAll('.outer'))
  innerWrappers.value = gsap.utils.toArray(container.value.querySelectorAll('.inner'))

  gsap.set(outerWrappers.value, { xPercent: 100 })
  gsap.set(innerWrappers.value, { xPercent: -100 })

  // ✅ Handle hash or default to first section
  const hash = window.location.hash.slice(1)
  const indexFromHash = sectionsList.findIndex(s => s.id === hash)
  const initialIndex = indexFromHash !== -1 ? indexFromHash : 0

  current.value = initialIndex
  next.value = initialIndex

  // ✅ Immediately set the initial section visible with no animation
  gsap.set(sections.value[initialIndex], {
    autoAlpha: 1,
    zIndex: 1,
    pointerEvents: 'auto',
    visibility: 'visible',
  })
  gsap.set(outerWrappers.value[initialIndex], { xPercent: 0 })
  gsap.set(innerWrappers.value[initialIndex], { xPercent: 0 })
  gsap.set(images.value[initialIndex], { xPercent: 0 })

  initialLoad.value = false
  updateHash(initialIndex)
  listening.value = true

  document.addEventListener('wheel', handleWheel, { passive: false })
  document.addEventListener('touchstart', handleTouchStart, { passive: false })
  document.addEventListener('touchmove', handleTouchMove, { passive: false })
  document.addEventListener('touchend', handleTouchEnd)
  document.addEventListener('keydown', handleKeyDown)
})


onUnmounted(() => {
  document.removeEventListener('wheel', handleWheel)
  document.removeEventListener('touchstart', handleTouchStart)
  document.removeEventListener('touchmove', handleTouchMove)
  document.removeEventListener('touchend', handleTouchEnd)
  document.removeEventListener('keydown', handleKeyDown)
})

</script>


<style scoped>
section {
  height: 100%;
  width: 100%;
  top: 0;
  position: fixed;
  visibility: hidden;
  will-change: auto;
}

section.active {
  visibility: visible;
}


.outer,
.inner {
  width: 100%;
  height: 100%;
  overflow-y: hidden;
  will-change: auto;
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
