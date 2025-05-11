<template>
  <section ref="articlesSection" id="articles"
    class="h-screen w-full bg-white text-gray-900 px-4 md:px-6 flex flex-col justify-center items-center overflow-hidden relative">
    <SectionTitle title="Articles" subtitle="What I've Written" />
    <h2 class="lg:hidden text-2xl text-center md:text-3xl lg:text-left font-semibold font-heading text-primary mb-4">My
      Articles
    </h2>
    <Swiper ref="articlesSwiper" :modules="[Navigation, Autoplay]" :slides-per-view="1" :space-between="30" :loop="true"
      :autoplay="{ delay: 5000, disableOnInteraction: false }" :breakpoints="{
        768: { slidesPerView: 1 },
        1024: { slidesPerView: 2 }
      }" navigation pagination class="w-full max-w-md lg:max-w-full">
      <SwiperSlide v-for="(article, index) in articles" :key="article.id">
        <ArticleCard :article="article" />
      </SwiperSlide>
    </Swiper>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'

import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import { useArticlesStore } from '@/stores/articles'

import ArticleCard from '@/components/cards/ArticleCard.vue'
import SectionTitle from '@/components/SectionTitle.vue'

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
.swiper-button-next,
.swiper-button-prev {
  color: rgba(255, 255, 255, 0.452);
}
</style>