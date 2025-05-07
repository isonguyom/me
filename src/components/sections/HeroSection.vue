<template>
    <section ref="heroSection" id="home"
        class="h-screen w-full bg-secondary text-white flex flex-col justify-center items-center text-center overflow-y-auto relative">
        <!-- <div class="absolute inset-0 bg-cover bg-center opacity-30"
            style="background-image: url('https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fG1hcml0aW1lfGVufDB8fHx8MTY5MjQ3NTYyNw&ixlib=rb-4.0.3&q=80&w=1080');"></div> -->
        <svg class="absolute inset-0 w-full h-full z-[-1]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 10"
            preserveAspectRatio="xMidYMid slice">
            <defs>
                <pattern id="circle-pattern" patternUnits="userSpaceOnUse" width="10" height="10">
                    <circle cx="2" cy="2" r="2" fill="rgba(255, 255, 255, 0.2)" />
                </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#circle-pattern)" />
        </svg>

        <div class="absolute inset-0 bg-gradient-to-br from-secondary to-secondary/90 opacity-50"></div>

        <div ref="heroContent" class="max-w-4xl px-6 z-10">
            <h1 class="text-4xl md:text-6xl font-bold uppercase mb-6">
                Hi, I'm <span class="text-primary">Martin Isonguyo</span>
            </h1>
            <p class="text-lg md:text-xl text-background mb-8 max-w-3xl mx-auto">
                A proficient <span class="font-medium capitalize">Web Developer</span> building modern, responsive web
                applications and crafting efficient digital solutions for the maritime industry. </p>

            <div class="flex justify-center space-x-4">
                <button
                    class="bg-primary hover:bg-accent text-secondary hover:text-background uppercase text-sm font-semibold py-3 px-6 rounded-full cursor-pointer transition duration-300 ease-in-out">
                    View My Works
                </button>
                <button
                    class="bg-transparent border-2 hover:border-accent hover:bg-accent text-primary hover:text-background uppercase text-sm font-semibold py-3 px-6 rounded-full cursor-pointer transition duration-300 ease-in-out">
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
            duration: 1.5,
            ease: 'power4.out',
            scrollTrigger: {
                trigger: heroSection.value,
                start: 'top center+=100', // Slight delay for smoother reveal
                end: 'bottom center',
                scrub: true, // Sync animation with scroll
                markers: false,
            },
        }
    )

    // Optional exit animation when section scrolls out of view
    gsap.to(heroContent.value, {
        opacity: 0,
        duration: 1,
        ease: 'power3.in',
        scrollTrigger: {
            trigger: heroSection.value,
            start: 'bottom center',
            end: 'bottom top',
            scrub: true,
            markers: false,
        },
    })
})
</script>
