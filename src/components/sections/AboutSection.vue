<template>
  <div ref="aboutSection" id="about"
    class="h-full w-full flex justify-center items-center py-12 relative overflow-hidden bg-white text-text">


    <!-- Background Image -->
    <div class="absolute inset-0 flex justify-center items-center pointer-events-none">
      <img src="/assets/about-bg.png" alt="about background" class="w-full h-full object-cover opacity-20" />
    </div>
    <div class="absolute inset-0 bg-black/10 pointer-events-none"></div>


    <div ref="aboutContent"
      class="relative z-10 w-full h-auto max-h-full overflow-y-auto px-4 md:px-6 xl:px-10 py-6 scroll-smooth max-w-4xl mx-auto">
      <article class="text-lg md:text-xl lg:text-2xl font-dm leading-relaxed text-pretty space-y-6 text-balance">
        <p class="text-justify">
          I'm <strong>Martin Isonguyo</strong>, a front-end developer with experience in building modern and
          responsive websites using frameworks like <strong>Vue.js</strong>, <strong>React</strong>, and
          <strong>Tailwind CSS</strong>.
          I love solving problems, learning new skills, and collaborating with others to bring ideas to life.
        </p>

        <p class="text-justify">
          With a background in marine engineering, I’m especially interested in driving <strong>digital
            transformation in the maritime industry</strong> using smart, efficient solutions to bridge
          the gap between industry and innovation.
        </p>

        <p class="text-justify">
          When I’m not coding, you’ll find me exploring nature and history, watching and analyzing football,
          or crafting new drink recipes for fun.
        </p>
      </article>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const aboutSection = ref(null)
const aboutContent = ref(null)

onMounted(() => {
  gsap.fromTo(
    aboutContent.value,
    { opacity: 0, y: 50 },
    {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: aboutSection.value,
        start: 'top 80%',
        toggleActions: 'play none none none',
      },
    }
  )
})
</script>
