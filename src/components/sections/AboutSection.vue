<template>
    <div ref="aboutSection" id="about"
        class="h-full w-full flex justify-center items-center px-4 md:px-6 py-10 relative scroll-snap-start snap-always">

        <!-- Background Image container -->
        <!-- <div class="absolute inset-0 bg-cover bg-center pointer-events-none -z-10"
            style="background-image: url('assets/about-bg.png')"></div> -->

        <div class="absolute inset-0 bg-primary/20"></div>

        <Navbar />
        <SectionTitle title="About Me" subtitle="Who I Am" />

        <div ref="aboutContent"
            class="max-w-4xl w-full mx-auto h-full px-2 overflow-y-auto lg:flex justify-center items-center">
            <h2
                class="lg:hidden text-lg text-center md:text-xl lg:text-left font-semibold font-heading text-primary mb-4">
                About Me
            </h2>
            <article class="text-lg md:text-xl lg:text-2xl font-dm leading-relaxed text-pretty space-y-6 w-full">
                <p class="text-justify text-pretty">
                    I'm <strong>Martin Isonguyo</strong>, a front-end developer with experience in building modern and
                    responsive websites using frameworks like <strong>Vue.js</strong>, <strong>React</strong>, and
                    <strong>Tailwind CSS</strong>.
                    I love solving problems, learning new skills, and collaborating with others to bring ideas to
                    life.
                </p>

                <p class="text-justify text-pretty">
                    With a background in marine engineering, I’m especially interested in driving <strong>digital
                        transformation in the maritime industry</strong> — using smart, efficient solutions to bridge
                    the
                    gap
                    between industry and innovation.
                </p>

                <p class="text-justify text-pretty">
                    When I’m not coding, you’ll find me exploring nature and history, watching and analyzing football,
                    or crafting new drink recipes
                    for fun.
                </p>
            </article>

        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import SectionTitle from '@/components/SectionTitle.vue'
import Navbar from '@/components/layouts/Navbar.vue'

gsap.registerPlugin(ScrollTrigger)

const aboutSection = ref(null)
const aboutContent = ref(null)

//onMounted(() => {
//    gsap.fromTo(
//        aboutContent.value,
//        { xPercent: 100, opacity: 0 },
//        {
//            xPercent: 0,
//            opacity: 1,
//            duration: 1,
//            ease: 'power3.out',
//            scrollTrigger: {
//                trigger: aboutSection.value,
//                start: 'top center',
//            },
//        }
//    )
//})
</script>