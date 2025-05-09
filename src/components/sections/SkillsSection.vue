<!-- <template>
  <section id="skills" class="h-screen flex items-center justify-center bg-background px-3 md:px-6 py-10 relative">
    <SectionTitle title="Skills" subtitle="What I Can Do" />
    <div class="w-full h-full py-10 max-w-5xl mx-auto">

      <div class="w-full h-full flex justify-between items-center overflow-y-auto px-2">

        <ul class="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          <li v-for="(skills, index) in skills" :key="index" class="mb-4">
            <h3 class="text-xl font-bold text-primary mb-2">{{ skills.category }}</h3>
            <ul class="list-disc pl-6">
              <li v-for="(skill, index) in skills.skills" :key="index" class="text-text text-lg">
                {{ skill }}
              </li>
            </ul>
          </li>
        </ul>

      </div>
    </div>
  </section>
</template>

<script setup>
import SectionTitle from '@/components/SectionTitle.vue';

const skills = [
  { category: 'Web Development', skills: ['HTML & CSS', 'JavaScript, Python', 'Vue.js, React', 'Tailwind CSS, Bootstrap,', 'Django, Node.js, Expressjs', 'Git & GitHub'] },
  { category: 'Design', skills: ['Figma', 'Corel Draw', 'Inkscape', 'Logo Design'] },
  { category: 'Domain Focus/Interests', skills: ['Maritime Digitalization', 'Marine Engineering', 'Big Data', 'Data Visualization'] },
  { category: 'Soft Skills', skills: ['Communication', 'Teamwork', 'Critical Thinking', 'Problem Solving',] },
]

</script>

<style scoped>
/* optional: add custom animation if you want */
</style> -->

<template>
  <section id="skills" class="py-20 bg-background px-4 md:px-8 relative">
    <SectionTitle title="Skills" subtitle="What I Can Do" />

    <Swiper
      :modules="[Navigation, Pagination]"
      :slides-per-view="1"
      :space-between="30"
      :loop="true"
      navigation
      pagination
      :breakpoints="{
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 3 }
      }"
      class="w-full max-w-6xl mx-auto mt-10"
    >
      <SwiperSlide v-for="(category, index) in skills" :key="index">
        <div class="bg-white border border-gray-200 rounded-lg shadow-md p-6 h-full">
          <h3 class="text-xl font-bold text-primary mb-4">{{ category.category }}</h3>
          <ul class="list-disc list-inside space-y-2">
            <li v-for="(skill, i) in category.skills" :key="i" class="text-text text-base">
              {{ skill }}
            </li>
          </ul>
        </div>
      </SwiperSlide>
    </Swiper>
  </section>
</template>

<script setup>
import SectionTitle from '@/components/SectionTitle.vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

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
    category: 'Domain Focus/Interests',
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
</script>

<style scoped>
.swiper-button-next,
.swiper-button-prev {
  color: var(--color-accent);
}
.swiper-pagination-bullet-active {
  background: var(--color-primary);
}
</style>
