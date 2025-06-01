<template>
  <div
    ref="cardRef"
    :class="[
      'project-card w-full max-w-md lg:max-w-full h-full flex flex-col lg:flex-row justify-center lg:justify-between lg:items-center lg:gap-8 py-6 opacity-0',
      isEven && 'lg:flex-row-reverse'
    ]"
  >
    <!-- Project Image -->
    <div
      ref="imageRef"
      :class="[
        'w-full lg:w-1/2 h-1/2 lg:h-2/3 overflow-hidden shadow-lg border-b-2 lg:border-0 border-white/50 relative',
        isEven ? 'lg:border-l-4' : 'lg:border-r-4'
      ]"
    >
      <img
        :src="project.image"
        :alt="project.title || 'Project Preview'"
        class="w-full h-full object-cover object-center"
        loading="lazy"
      />
      <div class="absolute inset-0 bg-black/10 flex items-end pb-4 p-4 md:px-6">
        <div
          v-if="project.tags?.length"
          class="flex flex-wrap justify-center lg:justify-start gap-2"
        >
          <span
            v-for="(tag, index) in project.tags"
            :key="index"
            class="text-sm lg:text-base font-semibold capitalize"
          >
            #{{ tag }}
          </span>
        </div>
      </div>
    </div>

    <!-- Project Content -->
    <div
      class="p-4 lg:p-6 pb-6 lg:py-6 space-y-2 lg:space-y-4 w-full lg:w-1/2 max-h-[50vh] lg:max-h-[80vh] overflow-y-auto scroll-smooth"
    >
      <h3 ref="titleRef" class="text-xl md:text-3xl lg:text-5xl font-bold uppercase">
        {{ project.title }}
      </h3>

      <p ref="descRef" class="text-sm md:text-base lg:text-xl lg:pr-6 text-pretty opacity-80">
        {{ project.description }}
      </p>

      <BaseButton
        ref="buttonRef"
        v-if="project.link"
        variant="ghost"
        class="mt-4"
        @click="goToProject(project.link)"
      >
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

const cardRef = ref(null)
const imageRef = ref(null)
const titleRef = ref(null)
const descRef = ref(null)
const buttonRef = ref(null)

let scrollTriggerInstance = null
let hasAnimated = false

function animateIn() {
  if (!cardRef.value || hasAnimated) return

  const tl = gsap.timeline({ defaults: { ease: 'power3.out', duration: 0.6 } })

  // Only animate if ref exists
  if (cardRef.value) tl.fromTo(cardRef.value, { opacity: 0, y: 50 }, { opacity: 1, y: 0 })
  if (imageRef.value) tl.from(imageRef.value, { opacity: 0, y: 30 }, '-=0.3')
  if (titleRef.value) tl.from(titleRef.value, { opacity: 0, y: 30 }, '-=0.4')
  if (descRef.value) tl.from(descRef.value, { opacity: 0, y: 30 }, '-=0.4')
  if (buttonRef.value) tl.from(buttonRef.value.$el || buttonRef.value, { opacity: 0, y: 30 }, '-=0.4')

  hasAnimated = true
}



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

watch(
  () => props.isActive,
  async (val) => {
    if (val) {
      hasAnimated = false // Reset to allow reanimation
      await nextTick()
      animateIn()
    }
  }
)

const goToProject = (link) => {
  window.open(link, '_blank')
}
</script>
