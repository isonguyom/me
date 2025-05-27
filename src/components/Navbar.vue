<template>
    <header class="fixed top-0 right-0 w-full bg-transparent z-50 pointer-events-none">
        <div class="flex justify-between items-center w-full p-4">
            <!-- Logo or branding section -->
            <div class="flex items-center gap-2">
                <span class="logo font-script font-bold text-2xl md:text-3xl text-transparent underline">M</span>
                <h4 class="font-light text-xl text-black capitalize tracking-wider">{{ sectionTitle }}</h4>
            </div>

            <div class="relative border pointer-events-auto">
                <!-- Hamburger Icon -->
                <button @click="toggleMenu" class="cursor-pointer flex items-center justify-center"
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
                </button>

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
    sectionTitle: {
        type: String,
        default: 'Section'
    }
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


<style scoped>
.logo {
    -webkit-text-stroke: 2px var(--color-primary);
}
</style>