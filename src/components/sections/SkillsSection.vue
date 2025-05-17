<template>
  <section id="skills"
    class="h-screen w-full px-4 md:px-6 flex flex-col justify-center items-center overflow-hidden relative">

    <div class="absolute inset-0 bg-cover bg-center pointer-events-none -z-10"
      style="background-image: url('assets/skills-bg.png')"></div>
    <div class="absolute inset-0 bg-white/20"></div>

    <Navbar />
    <SectionTitle title="Skills" subtitle="What I Can Do" />

    <div class="w-full h-full px-2 overflow-y-auto flex flex-col justify-center items-center">
      <h2 class="lg:hidden text-lg text-center md:text-xl lg:text-left font-semibold font-heading text-primary mb-4">
        My Skills
      </h2>
      <Swiper :modules="[Navigation, Pagination, Autoplay]" :slides-per-view="1" :space-between="30" :loop="true"
        :autoplay="{ delay: 5000, disableOnInteraction: false }" navigation :pagination="{ clickable: true }"
        :breakpoints="{
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }" class="w-full">
        <SwiperSlide v-for="(category, index) in skills" :key="index">
          <div class="bg-black/10 border border-black/5 rounded-lg shadow p-6 h-full">
            <h3 class="text-xl font-bold text-primary mb-4 border-b-4 border-primary">{{ category.category }}</h3>
            <ul class="list-disc list-inside space-y-2 list-none">
              <li v-for="(skill, i) in category.skills" :key="i" class="text-text text-base flex items-center gap-2">
                <span class="inline-block w-4 h-4 rounded-full bg-primary"></span>
                {{ skill }}
              </li>
            </ul>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  </section>
</template>

<script setup>
import SectionTitle from '@/components/SectionTitle.vue'
import Navbar from '@/components/Navbar.vue'

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
</script>

<style scoped>
/* Pagination Bullets */
::v-deep(.swiper-pagination-bullet) {
  background-color: #bbb;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  opacity: 1;
  transition: background-color 0.3s ease;
}

::v-deep(.swiper-pagination-bullet-active) {
  background-color: var(--color-accent);
  /* Purple */
  transform: scale(1.2);
}

/* Navigation Buttons */
::v-deep(.swiper-button-next),
::v-deep(.swiper-button-prev) {
  color: var(--color-accent);
  background-color: rgba(255, 255, 255, 0.226);
  border-radius: 9999px;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s ease;
}

::v-deep(.swiper-button-next:hover),
::v-deep(.swiper-button-prev:hover) {
  background-color: rgba(255, 255, 255, 0.8);
  transform: scale(1.1);
}

::v-deep(.swiper-button-next::after),
::v-deep(.swiper-button-prev::after) {
  font-size: 18px;
  font-weight: bold;
}
</style>
