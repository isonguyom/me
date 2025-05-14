<template>
    <header class="fixed top-0 right-0 w-full bg-transparent z-50">
        <div class="flex justify-end items-center w-full mx-auto">
            <!-- Logo or branding section -->
            <!-- <div class="text-white text-xl font-bold">YourLogo</div> -->

            <!-- Hamburger Icon -->
            <div class="relative">
                <div @click="toggleMenu"
                    class="cursor-pointer flex items-center justify-center z-50 w-12 h-12 lg:w-16 lg:h-16 rounded-full rounded-t-none"
                    :class="{ 'bg-accent': isMenuOpen, 'bg-transparent': !isMenuOpen }">
                    <svg v-if="!isMenuOpen" xmlns="http://www.w3.org/2000/svg"
                        :class="['h-6 w-6', darkBg ? 'text-secondary' : 'text-primary']" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                    <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="none"
                        viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </div>

                <!-- Navigation Links -->
                <nav :class="{ 'block': isMenuOpen, 'hidden': !isMenuOpen }"
                    class="bg-primary space-x-6 text-white -z-30 fixed right-0 top-0 flex flex-col h-screen w-full max-w-xs rounded-l-full shadow-lg p-6">
                    <button @click="navigateTo('#home')" class="hover:text-accent cursor-pointer">Home</button>
                    <button @click="navigateTo('#about')" class="hover:text-accent cursor-pointer">About</button>
                    <button @click="navigateTo('#skills')" class="hover:text-accent cursor-pointer">Skills</button>
                    <button @click="navigateTo('#projects')" class="hover:text-accent cursor-pointer">Projects</button>
                    <button @click="navigateTo('#contact')" class="hover:text-accent cursor-pointer">Contact</button>
                </nav>
            </div>
        </div>
    </header>
</template>

<script setup>
import { ref } from 'vue'

defineProps({
    darkBg: {
        type: Boolean,
        default: false,
    },
})

const isMenuOpen = ref(false)

function toggleMenu() {
    isMenuOpen.value = !isMenuOpen.value
}

const navigateTo = (section) => {
    const targetSection = document.querySelector(section)
    if (targetSection) {
        window.scrollTo({
            top: targetSection.offsetTop,
            behavior: 'smooth',
        })
    }
}
</script>


<style scoped></style>