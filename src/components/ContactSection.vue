<template>
    <section
      ref="contactSection"
      class="h-screen w-full bg-[#0c325b] text-white px-6 py-16 flex flex-col justify-center items-center overflow-hidden"
    >
      <div ref="contactContent" class="max-w-3xl w-full text-center space-y-8">
        <h2 class="text-4xl font-bold">Contact Me</h2>
        <p class="text-lg">
          Interested in working together on a maritime-tech or web development project?
          Let’s build the future of the blue economy together.
        </p>
        <form class="grid gap-4 text-left">
          <input type="text" placeholder="Name" class="px-4 py-2 w-full rounded bg-white text-gray-900" />
          <input type="email" placeholder="Email" class="px-4 py-2 w-full rounded bg-white text-gray-900" />
          <textarea placeholder="Message" rows="4" class="px-4 py-2 w-full rounded bg-white text-gray-900"></textarea>
          <button
            type="submit"
            class="bg-white text-[#0c325b] px-6 py-2 font-semibold rounded hover:bg-gray-200 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue'
  import { gsap } from 'gsap'
  import { ScrollTrigger } from 'gsap/ScrollTrigger'
  
  gsap.registerPlugin(ScrollTrigger)
  
  const contactSection = ref(null)
  const contactContent = ref(null)
  
  onMounted(() => {
    gsap.fromTo(
      contactContent.value,
      { xPercent: -100, opacity: 0 },
      {
        xPercent: 0,
        opacity: 1,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: contactSection.value,
          start: 'top center',
        },
      }
    )
  })
  </script>
  