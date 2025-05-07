<template>
    <header class="fixed top-0 right-0 w-full bg-transparent p-4 z-50">
        <div class="flex justify-end items-center w-full mx-auto px-2">
            <!-- Logo or branding section -->
            <!-- <div class="text-white text-xl font-bold">YourLogo</div> -->

            <!-- Hamburger Icon -->
            <div class="relative">
                <div @click="toggleMenu" class="cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </div>

                <!-- Navigation Links -->
                <nav :class="{ 'block': isMenuOpen, 'hidden': !isMenuOpen }"
                    class="bg-primary space-x-6 text-white absolute right-0 flex flex-col">
                    <a href="#home" class="hover:text-accent">Home</a>
                    <a href="#about" class="hover:text-accent">About</a>
                    <a href="#skills" class="hover:text-accent">Skills</a>
                    <a href="#projects" class="hover:text-accent">Projects</a>
                    <a href="#contact" class="hover:text-accent">Contact</a>
                </nav>
            </div>
        </div>
    </header>
</template>

<script setup>
import { ref } from 'vue'

const isMenuOpen = ref(false)

function toggleMenu() {
    isMenuOpen.value = !isMenuOpen.value
}
</script>

<style scoped></style>