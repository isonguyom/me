<!-- <template>
   <section class="min-h-screen bg-[#0c325b] text-white flex flex-col justify-center items-center text-center">
        <div class="text-center max-w-2xl">
            <h1 class="text-4xl md:text-6xl font-bold mb-6">
                Hi, I'm <span class="text-blue-500">Your Name</span>
            </h1>
            <p class="text-lg md:text-xl text-gray-300 mb-8">
                I'm a passionate <span class="text-blue-400">Web Developer</span> creating modern and responsive web applications.
            </p>
            <div class="flex justify-center space-x-4">
                <button
                    class="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded"
                >
                    View My Work
                </button>
                <button
                    class="bg-gray-800 hover:bg-gray-700 text-white font-semibold py-2 px-6 rounded"
                >
                    Contact Me
                </button>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref } from 'vue';
</script>

<style scoped>
</style> -->

<template>
    <section
      ref="heroSection"
      class="h-screen w-full bg-[#0c325b] text-white flex flex-col justify-center items-center text-center overflow-hidden"
    >
      <div ref="heroContent" class="max-w-3xl px-6">
        <h1 class="text-4xl md:text-6xl font-bold mb-6">
                Hi, I'm <span class="text-blue-500">Martin Isonguyo</span>
            </h1>
        <p class="text-lg md:text-xl text-gray-300 mb-8">
                I'm a passionate Web Developer creating modern and responsive web applications and Crafting digital experiences for Maritime.
            </p>

            <div class="flex justify-center space-x-4">
                <button
                    class="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded"
                >
                    View My Work
                </button>
                <button
                    class="bg-gray-800 hover:bg-gray-700 text-white font-semibold py-2 px-6 rounded"
                >
                    Contact Me
                </button>
            </div>
      </div>
    </section>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue'
  import { gsap } from 'gsap'
  import { ScrollTrigger } from 'gsap/ScrollTrigger'
  
  gsap.registerPlugin(ScrollTrigger)
  
  const heroSection = ref(null)
  const heroContent = ref(null)
  
  onMounted(() => {
    gsap.fromTo(
      heroContent.value,
      { xPercent: -100, opacity: 0 },
      {
        xPercent: 0,
        opacity: 1,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: heroSection.value,
          start: 'top center',
        },
      }
    )
  })
  </script>
  