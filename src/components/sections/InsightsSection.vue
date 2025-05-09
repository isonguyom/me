<!-- <template>
    <section ref="insightsSection" id="insights"
        class="h-screen w-full bg-white text-gray-900 px-6 py-16 flex flex-col justify-center items-center overflow-hidden relative">
        <SectionTitle title="Insights" subtitle="What I've Written" />
        
        <div ref="insightsContent" class="max-w-5xl w-full text-center space-y-10">
            <h2 class="text-4xl font-bold text-[#0c325b]">Insights</h2>
            <div class="grid md:grid-cols-2 gap-6">
                <InsightCard v-for="insight in insights" :key="insight.title" :insight="insight" />
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import SectionTitle from '@/components/SectionTitle.vue'
import InsightCard from '@/components/cards/InsightCard.vue'

gsap.registerPlugin(ScrollTrigger)

const insightsSection = ref(null)
const insightsContent = ref(null)

const insights = [
  {
    title: 'Maritime Digitalization in Africa',
    summary: 'How African maritime sectors can leverage digital technologies for growth.',
    image: '',
    link: '#'
  },
  {
    title: 'Big Data and Port Efficiency',
    summary: 'Using data analytics to streamline port operations and reduce congestion.',
    image: '',
    link: '#'
  }
]


onMounted(() => {
    gsap.fromTo(
        insightsContent.value,
        { xPercent: 100, opacity: 0 },
        {
            xPercent: 0,
            opacity: 1,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: insightsSection.value,
                start: 'top center',
            },
        }
    )
})
</script> -->

<template>
    <section class="w-full py-16 bg-background">
      <h2 class="text-3xl lg:text-5xl font-heading text-center text-secondary mb-12">Latest Insights</h2>
  
      <Swiper
        :modules="[Navigation, Pagination, Autoplay]"
        :slides-per-view="1"
        :space-between="30"
        :loop="true"
        :autoplay="{ delay: 5000, disableOnInteraction: false }"
        :breakpoints="{
          768: { slidesPerView: 1 },
          1024: { slidesPerView: 2 }
        }"
        navigation
        pagination
        class="w-full max-w-6xl mx-auto"
      >
        <SwiperSlide v-for="(article, index) in insights" :key="article.id">
          <InsightCard :insight="article" />
        </SwiperSlide>
      </Swiper>
    </section>
  </template>
  
  <script setup>
  import { Swiper, SwiperSlide } from 'swiper/vue'
  import { Navigation, Pagination, Autoplay } from 'swiper/modules'
  import 'swiper/css'
  import 'swiper/css/navigation'
  import 'swiper/css/pagination'
  
  import InsightCard from '@/components/cards/InsightCard.vue'
  
  const insights = [
    {
      id: 1,
      title: 'Driving Maritime Digitalization in Sub-Saharan Africa',
      summary: 'Exploring strategies to improve port infrastructure and data-driven operations in African maritime economies.',
      image: '/assets/insight1.png',
      link: 'https://example.com/insight-1',
      tags: ['Digitalization', 'Africa', 'Maritime'],
    },
    {
      id: 2,
      title: 'The Role of Big Data in Modern Ship Routing',
      summary: 'How predictive analytics and big data optimize shipping routes and reduce fuel consumption.',
      image: '/assets/insight2.png',
      link: 'https://example.com/insight-2',
      tags: ['Big Data', 'Shipping', 'AI'],
    },
    {
      id: 3,
      title: 'Innovations in Port Automation',
      summary: 'An overview of the latest technologies shaping automated port terminals.',
      image: '/assets/insight3.png',
      link: 'https://example.com/insight-3',
      tags: ['Automation', 'Ports', 'IoT'],
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
  