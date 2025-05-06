<!-- <template>
    <section id="about" class="bg-gray-100 py-12">
        <div class="container mx-auto px-6">
            <h2 class="text-3xl font-bold text-center text-gray-800 mb-6">About Me</h2>
            <div class="flex flex-col md:flex-row items-center">
                <div class="md:w-1/2 mb-6 md:mb-0">
                    <img
                        src="/assets/profile.png"
                        alt="Profile Picture"
                        class="rounded-full w-48 h-48 mx-auto md:mx-0"
                    />
                </div>
                <div class="md:w-1/2 md:pl-8">
                    <p class="text-gray-700 text-lg leading-relaxed">
                        Hi, I'm [Your Name], a passionate web developer with experience in
                        building modern and responsive websites. I specialize in Vue.js,
                        Tailwind CSS, and other cutting-edge technologies to create
                        user-friendly and visually appealing web applications.
                    </p>
                    <p class="text-gray-700 text-lg leading-relaxed mt-4">
                        I love solving problems, learning new skills, and collaborating
                        with others to bring ideas to life. When I'm not coding, you can
                        find me exploring new places, reading books, or experimenting with
                        new recipes in the kitchen.
                    </p>
                </div>
            </div>
        </div>
    </section>
</template> -->

<template>
    <section ref="aboutSection"
        class="h-screen w-full bg-white text-gray-900 px-6 py-16 flex flex-col justify-center items-center overflow-hidden">
        <div ref="aboutContent" class="max-w-4xl w-full text-center space-y-8">
            <h2 class="text-4xl font-bold text-[#0c325b]">About Me</h2>
            <p class="text-lg leading-relaxed">
                I'm <span class="font-semibold text-[#0c325b]">Martin Isonguyo</span>, a frontend developer with
                experience in building modern and responsive websites using modern frontend frameworks like Vue.js,
                React, and Tailwind CSS. I love solving problems, learning new skills, and collaborating
                with others to bring ideas to life. I am also a marine engineering graduate with a keen interest in providing efficient solutions and digital transformation in the maritime sector.
                When I'm not coding, you can
                find me exploring nature, football, or experimenting with
                new drinks recipes.
            </p>

            <div class="grid gap-6 md:grid-cols-2 text-left">
                <div>
                    <h3 class="text-xl font-semibold text-[#0c325b] mb-2">Skills</h3>
                    <ul class="list-disc list-inside space-y-1">
                        <li>Frontend Architecture</li>
                        <li>SPA Development</li>
                        <li>Data-driven Interfaces</li>
                        <li>API Integration</li>
                        <li>Maritime-Tech UI Design</li>
                    </ul>
                </div>

                <div>
                    <h3 class="text-xl font-semibold text-[#0c325b] mb-2">Tools & Technologies</h3>
                    <ul class="list-disc list-inside space-y-1">
                        <li>Vue.js (Composition API)</li>
                        <li>Tailwind CSS</li>
                        <li>GSAP & ScrollTrigger</li>
                        <li>D3.js, Chart.js</li>
                        <li>REST APIs, Git, Vite</li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
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