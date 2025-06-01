<template>
  <div id="skills" ref="skillsSection" class="h-full w-full bg-secondary flex justify-center items-center py-10">
    <div
      ref="skillsContent"
      class="relative z-10 w-full h-full overflow-y-auto px-4 md:px-6 lg:px-10 py-6 scroll-smooth max-w-5xl mx-auto"
    >
      <!-- Tabs -->
      <div ref="tabsRef" class="flex flex-wrap gap-3 mb-6">
        <button
          v-for="(tab, index) in skills"
          :key="tab.category"
          @click="changeTab(index)"
          class="px-4 py-2 rounded-full font-medium transition duration-300"
          :class="activeTab === index ? 'bg-primary text-white' : 'bg-white text-primary hover:bg-primary hover:text-white'"
        >
          {{ tab.category }}
        </button>
      </div>

      <!-- Skills List -->
      <div ref="skillsBox" class="bg-white text-primary p-6 rounded-lg shadow-md space-y-2">
        <h2 class="text-xl font-semibold mb-2">{{ skills[activeTab].category }}</h2>
        <ul class="list-disc list-inside space-y-1">
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
  activeTab.value = index
  await nextTick()
  animateIn()
}

onMounted(() => {
  // Animate tab buttons
  gsap.from(tabsRef.value.children, {
    opacity: 0,
    y: 30,
    duration: 0.5,
    stagger: 0.1,
    scrollTrigger: {
      trigger: skillsSection.value,
      start: 'top 85%',
    },
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
