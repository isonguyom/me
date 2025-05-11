<template>
  <section id="skills"
    class="h-screen w-full px-4 md:px-6 flex flex-col justify-center items-center overflow-hidden relative">
    <SectionTitle title="Skills" subtitle="What I Can Do" />
    <h2 class="lg:hidden text-2xl text-center md:text-3xl lg:text-left font-semibold font-heading text-primary mb-4">My
      Skills & Knowledge Areas
    </h2>
    <Swiper :modules="[Navigation, Pagination, Autoplay]" :slides-per-view="1" :space-between="30" :loop="true"
      :autoplay="{ delay: 5000, disableOnInteraction: false }" navigation pagination :breakpoints="{
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
      }" class="w-full">
      <SwiperSlide v-for="(category, index) in skills" :key="index">
        <div class="bg-white border border-black/10 rounded-lg shadow-md p-6 h-full">
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
import { Autoplay, Navigation, Pagination } from 'swiper/modules'
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
