<template>
  <div ref="articlesSection" id="articles"
    class="h-full w-full bg-background flex justify-center items-center px-4 md:px-6 py-10 relative">


    <div class="w-full h-full px-2 overflow-y-auto flex flex-col justify-center items-center z-10">
      <h2 class="lg:hidden text-lg text-center md:text-xl lg:text-left font-semibold font-heading text-primary mb-4">My
        Articles
      </h2>

      <div class="custom-nav-buttons absolute top-1/2 left-0 right-0 flex justify-between px-4 z-10">
        <button
          class="custom-prev w-8 h-10 text-black/80 cursor-pointer text-xl font-bold flex items-center justify-center bg-black/10 enabled:hover:bg-black/50 enabled:hover:scale-[1.05] disabled:opacity-30 disabled:cursor-not-allowed px-4">⮜</button>
        <button
          class="custom-next w-8 h-10 text-black/80 cursor-pointer text-xl font-bold flex items-center justify-center bg-black/10 enabled:hover:bg-black/50 enabled:hover:scale-[1.05] disabled:opacity-30 disabled:cursor-not-allowed px-4">⮞</button>
      </div>
      <Swiper ref="articlesSwiper" :modules="[Navigation, Autoplay]" :slides-per-view="1" :space-between="50"
        :loop="true" :autoplay="{ delay: 5000, disableOnInteraction: false }" :breakpoints="{
          768: { slidesPerView: 1 },
          1024: { slidesPerView: 2 }
        }" :navigation="{ nextEl: '.custom-next', prevEl: '.custom-prev' }" class="w-full max-w-md lg:max-w-full">
        <SwiperSlide v-for="(article, index) in articles" :key="article.id">
          <ArticleCard :article="article" />
        </SwiperSlide>
      </Swiper>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'


import { useArticlesStore } from '@/stores/articles'

import ArticleCard from '@/components/cards/ArticleCard.vue'


gsap.registerPlugin(ScrollTrigger)

const articlesStore = useArticlesStore()
const articles = articlesStore.articles
const articlesSection = ref(null)
const articlesSwiper = ref(null)


// onMounted(() => {
//   gsap.fromTo(
//     articlesSection.value,
//     { xPercent: 100, opacity: 0 },
//     {
//       xPercent: 0,
//       opacity: 1,
//       duration: 1,
//       ease: 'power3.out',
//       scrollTrigger: {
//         trigger: articlesSection.value,
//         start: 'top center',
//       },
//     }
//   )
// })
</script>

<style scoped>
.custom-prev,
.custom-next {
  pointer-events: all;
  /* Enable clicking */
  transition: all 0.3s ease;
}
</style>