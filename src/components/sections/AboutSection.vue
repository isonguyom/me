<template>
    <section ref="aboutSection" id="about"
        class="h-screen relative w-full bg-white text-gray-900 px-6 flex flex-col justify-center items-center overflow-hidden">

        <SectionTitle title="About Me" subtitle="Who I Am" />

        <div ref="aboutContent" class="max-w-4xl w-full mx-auto h-full items-center py-10">
            <article
                class="text-lg md:text-xl lg:text-2xl font-dm leading-relaxed text-pretty space-y-6 w-full h-full flex flex-col justify-center overflow-y-auto">
                <p class="text-justify text-pretty">
                    I'm <strong>Martin Isonguyo</strong>, a front-end developer with experience in building modern and
                    responsive websites using frameworks like <strong>Vue.js</strong>, <strong>React</strong>, and
                    <strong>Tailwind CSS</strong>.
                    I love solving problems, learning new skills, and collaborating with others to bring ideas to
                    life.
                </p>

                <p class="text-justify text-pretty">
                    With a background in marine engineering, I’m especially interested in driving <strong>digital
                        transformation in the maritime sector</strong> — using smart, efficient solutions to bridge the
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
    </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import SectionTitle from '@/components/SectionTitle.vue'

gsap.registerPlugin(ScrollTrigger)

const aboutSection = ref(null)
const aboutContent = ref(null)

onMounted(() => {
    gsap.fromTo(
        aboutContent.value,
        { xPercent: 100, opacity: 0 },
        {
            xPercent: 0,
            opacity: 1,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: aboutSection.value,
                start: 'top center',
            },
        }
    )
})
</script>