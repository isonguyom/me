<template>
  <div id="skills" ref="skillsSection"
    class="h-full w-full flex justify-center items-center py-12 relative overflow-hidden text-text">

    <!-- Background Image -->
    <div class="absolute inset-0 flex justify-center items-center pointer-events-none z-0">
      <img src="/assets/skills-bg.png" alt="projects background" class="w-full h-full object-cover" />
    </div>

    <div class="absolute inset-0 bg-black/20 pointer-events-none backdrop-brightness-50"></div>

    <div ref="skillsContent" class="relative z-10 w-full h-full px-4 md:px-6 xl:px-10 max-w-4xl mx-auto">
      <!-- Tabs -->
      <div ref="tabsRef" class="flex flex-wrap gap-2 mb-4 py-2 w-full">
        <button ref="tabButtonRefs" v-for="(tab, index) in skills" :key="tab.category" @click="changeTab(index)"
          role="tab" :aria-selected="activeTab === index" :aria-controls="`panel-${index}`"
          class="px-4 py-2 font-medium transition duration-300 cursor-pointer min-w-max text-sm md:text-base"
          :class="activeTab === index ? 'bg-primary text-white' : 'bg-white text-primary hover:bg-accent hover:text-white'">
          {{ tab.category }}
        </button>
      </div>

      <!-- Skills List -->
      <div ref="skillsBox" class="bg-white text-text p-6 shadow-lg space-y-2 md:space-y-4">
        <!-- <h2 class="text-xl font-semibold mb-2">{{ skills[activeTab].category }}</h2> -->
        <ul class="list-disc list-inside space-y-1 text-lg md:text-xl" :id="`panel-${activeTab}`" role="tabpanel">
          <li v-for="(item, i) in skills[activeTab].skills" :key="item" :ref="el => skillItems[i] = el">
            {{ item }}
          </li>
        </ul>

      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, nextTick, watch } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const activeTab = ref(0)
const skillsSection = ref(null)
const skillsContent = ref(null)
const tabsRef = ref(null)
const tabButtonRefs = ref([])
const skillsBox = ref(null)
const skillItems = ref([])

const skills = [
  {
    category: 'Web Development',
    skills: [
      'HTML & CSS',
      'JavaScript, Python',
      'Vue.js, React',
      'Tailwind CSS, Bootstrap',
      'Django, Node.js, Expressjs',
      'Git & GitHub',
    ],
  },
  {
    category: 'Design',
    skills: ['Figma', 'Corel Draw', 'Inkscape', 'Logo Design'],
  },
  {
    category: 'Focus/Interests',
    skills: [
      'Maritime Digitalization',
      'Marine Engineering',
      'Big Data',
      'Data Visualization',
    ],
  },
  {
    category: 'Soft Skills',
    skills: ['Communication', 'Teamwork', 'Critical Thinking', 'Problem Solving'],
  },
]

const animateIn = () => {
  gsap.fromTo(
    skillItems.value,
    { opacity: 0, y: 20 },
    {
      opacity: 1,
      y: 0,
      duration: 0.6,
      stagger: 0.1,
      ease: 'power2.out',
    }
  )
}

const changeTab = async (index) => {
  // Animate out
  await gsap.to(skillItems.value, {
    opacity: 0,
    y: 10,
    duration: 0.3,
    stagger: 0.05,
    ease: 'power2.in',
  })

  activeTab.value = index
  skillItems.value = []
  await nextTick()

  // Animate in
  animateIn()
}



onMounted(async () => {
  await nextTick()

  tabButtonRefs.value = []

  // Animate tab buttons
  ScrollTrigger.batch(tabButtonRefs.value, {
    onEnter: (batch) =>
      gsap.from(batch, {
        opacity: 0,
        y: 20,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power2.out',
      }),
    start: 'top 90%',
    once: true,
  })



  // Animate container
  gsap.from(skillsBox.value, {
    opacity: 0,
    y: 30,
    duration: 0.8,
    scrollTrigger: {
      trigger: skillsBox.value,
      start: 'top 90%',
    },
  })

  animateIn()
})
</script>

<style scoped>
/* Optional enhancements */
</style>
