<template>
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
</script>