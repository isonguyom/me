<template>
    <div ref="heroSection" id="home"
        class="h-full w-full bg-secondary flex justify-center items-center px-4 md:px-6 py-10 relative scroll-snap-start snap-always">

        <!-- Background Image container -->
        <div class="absolute inset-0 bg-cover bg-center opacity-3 pointer-events-none"
            style="background-image: url('assets/hero-bg.svg')">
        </div>

        <!-- Subtle Transparent Pattern Background -->
        <div class="absolute inset-0 z-0 pointer-events-none">
            <svg class="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 10"
                preserveAspectRatio="xMidYMid slice">
                <defs>
                    <pattern id="circle-pattern" patternUnits="userSpaceOnUse" width="10" height="10">
                        <circle cx="2" cy="2" r="2" fill="rgba(255, 255, 255, 0.2)" />
                    </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#circle-pattern)" />
            </svg>
        </div>

        <div class="absolute inset-0 bg-black/10"></div>

        <div ref="heroContent" class="relative z-10 w-full">
            <h1 class="font-bold uppercase md:text-xl lg:2xl">
                Hi, I'm <br /> <span class="text-primary text-5xl md:text-7xl lg:text-8xl xl:text-9xl">Martin
                    Isonguyo</span>
            </h1>
            <p class="md:text-xl lg:text-2xl mb-6 max-w-xl lg:max-w-3xl">
                A proficient <span class="font-semibold capitalize">Frontend Developer</span> building modern,
                responsive web
                applications and crafting efficient digital solutions for the maritime industry. </p>

            <div class="flex flex-wrap gap-4">
                <BaseButton variant="primary" @click="handleGoTo(3)">
                    View My Works
                </BaseButton>

                <BaseButton variant="outline" @click="handleGoTo(5)">Contact Me</BaseButton>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import BaseButton from '@/components/utilities/BaseButton.vue'

gsap.registerPlugin(ScrollTrigger)

const heroSection = ref(null)
const heroContent = ref(null)


const emit = defineEmits(['goTo'])

const handleGoTo = (ind) => {
   emit('goTo', ind)
}

// onMounted(() => {
//     gsap.fromTo(
//         heroContent.value,
//         { xPercent: -100, opacity: 0 },
//         {
//             xPercent: 0,
//             opacity: 1,
//             duration: 1.5,
//             ease: 'power4.out',
//             scrollTrigger: {
//                 trigger: heroSection.value,
//                 start: 'top center+=100', // Slight delay for smoother reveal
//                 end: 'bottom center',
//                 scrub: true, // Sync animation with scroll
//                 markers: false,
//             },
//         }
//     )

//     // Optional exit animation when section scrolls out of view
//     gsap.to(heroContent.value, {
//         opacity: 0,
//         duration: 1,
//         ease: 'power3.in',
//         scrollTrigger: {
//             trigger: heroSection.value,
//             start: 'bottom center',
//             end: 'bottom top',
//             scrub: true,
//             markers: false,
//         },
//     })
// })
</script>

<style scoped></style>