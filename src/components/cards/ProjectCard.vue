<template>
  <div ref="cardRef" :class="[
    'project-card w-full max-w-xl lg:max-w-full h-full flex flex-col lg:flex-row justify-center lg:justify-between lg:items-center lg:gap-8 px-4 md:px-6 lg:px-0 opacity-0',
    isEven && 'lg:flex-row-reverse'
  ]">

    <!-- Project Image -->
    <div ref="imageRef" :class="[
      'w-full lg:w-1/2 h-1/2 lg:h-2/3 overflow-hidden shadow-lg border-b-6 lg:border-0 border-white/60 relative',
      isEven ? 'lg:border-l-6' : 'lg:border-r-6'
    ]">
      <img :src="project.image" :alt="project.title || 'Project Preview'"
        class="w-full h-full object-cover object-center" loading="lazy" />
      <div class="absolute inset-0 bg-black/20 flex items-end pb-4 p-4 md:px-6">
      </div>
    </div>

    <!-- Project Content -->
    <div
      class="pt-4 lg:p-6 pb-6 xl:px-10 space-y-2 lg:space-y-6 w-full lg:w-1/2 max-h-[50vh] lg:max-h-full overflow-y-auto scroll-smooth">

      <div>
        <div ref="tagsRef" v-if="project.tags?.length" class="flex flex-wrap gap-2">
          <span v-for="(tag, index) in project.tags" :key="index"
            class="text-sm lg:text-base font-light capitalize text-white">
            #{{ tag }}
          </span>
        </div>
        <h3 ref="titleRef" class="text-xl md:text-3xl lg:text-5xl font-bold uppercase text-secondary lg:mt-2">
          {{ project.title }}
        </h3>
      </div>

      <p ref="descRef" class="text-sm md:text-base lg:text-xl lg:pr-6 text-pretty opacity-80 mb-2 lg:mb-6">
        {{ project.description }}
      </p>

      <BaseButton ref="buttonRef" v-if="project.link" variant="ghost-sec" @click="goToProject(project.link)">
        View Project →
      </BaseButton>
    </div>
  </div>
</template>

<script setup>
import { onMounted, onBeforeUnmount, ref, watch, nextTick } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import BaseButton from '@/components/utilities/BaseButton.vue'

gsap.registerPlugin(ScrollTrigger)

const props = defineProps({
  project: Object,
  isEven: Boolean,
  isActive: Boolean
})

// Refs for DOM elements
const cardRef = ref(null)
const imageRef = ref(null)
const titleRef = ref(null)
const descRef = ref(null)
const buttonRef = ref(null)
const tagsRef = ref(null)

// Local state to track animation status
let scrollTriggerInstance = null
let hasAnimated = false

// Function to animate the card in
function animateIn() {
  if (!cardRef.value || hasAnimated) return

  const tl = gsap.timeline({ defaults: { ease: 'power3.out', duration: 0.6 } })

  // Only animate if ref exists
  if (cardRef.value) tl.fromTo(cardRef.value, { opacity: 0, y: 50 }, { opacity: 1, y: 0 })
  if (imageRef.value) tl.from(imageRef.value, { opacity: 0, y: 30 }, '-=0.3')
  if (tagsRef.value) tl.from(tagsRef.value.children, {
    opacity: 0,
    y: 30,
    stagger: 0.1,
    ease: 'power3.out'
  }, '-=0.4')
  if (titleRef.value) tl.from(titleRef.value, { opacity: 0, y: 30 }, '-=0.4')
  if (descRef.value) tl.from(descRef.value, { opacity: 0, y: 30 }, '-=0.4')
  if (buttonRef.value) tl.from(buttonRef.value.$el || buttonRef.value, { opacity: 0, y: 30 }, '-=0.4')

  hasAnimated = true
}

// Function to animate the card out
function animateOut() {
  if (!cardRef.value) return

  gsap.to(cardRef.value, { opacity: 0, y: -50, duration: 0.6, ease: 'power3.in' })
}

// Function to handle project link click
const goToProject = (link) => {
  window.open(link, '_blank')
}


// Watch for isActive prop to trigger animation
watch(
  () => props.isActive,
  async (val) => {
    if (val) {
      hasAnimated = false // Reset to allow reanimation
      await nextTick()
      animateIn()
    } else {
      animateOut()
    }
  }
)

// Initialize ScrollTrigger when component is mounted
onMounted(async () => {
  await nextTick()
  scrollTriggerInstance = ScrollTrigger.create({
    trigger: cardRef.value,
    start: 'top 80%',
    onEnter: () => animateIn()
  })
})


onBeforeUnmount(() => {
  scrollTriggerInstance?.kill()
})
</script>
