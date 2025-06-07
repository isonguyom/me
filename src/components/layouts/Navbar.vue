<template>
    <header ref="navbar" class="fixed top-0 right-0 w-full bg-transparent text-white z-50 pointer-events-none">
        <div
            :class="['flex justify-between items-center w-full p-4 md:px-6 z-50', darkBg ? 'text-white' : 'text-black']">
            <!-- Logo and Title -->
            <div class="flex items-center gap-2">
                <span ref="logo" class="logo font-script font-bold text-2xl md:text-3xl underline">M</span>
                <h1 ref="sectionTitleRef" id="site-title"
                    class="uppercase md:text-lg tracking-wider transition-all duration-500">{{ sectionTitle }}</h1>
            </div>

            <!-- Hamburger Button -->
            <div class="relative pointer-events-auto z-50">
                <button ref="menuButton" @click="toggleMenu"
                    :class="['menu-burger flex justify-center items-center bg-transparent w-[42px] h-[18px] cursor-pointer transition-colors duration-300 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-accent', darkBg ? 'light-burger' : '', isMenuOpen ? 'active' : '']"
                    aria-label="Toggle navigation menu" :aria-expanded="isMenuOpen.toString()" aria-controls="menu" />
            </div>
        </div>

        <!-- Expanding Circle Background -->
        <div ref="bgCircle"
            class="fixed top-0 right-0 w-[100px] h-[100px] max-w-[450px] max-h-screen bg-primary scale-0 z-10 pointer-events-none">
        </div>

        <!-- Accessible Navigation Menu -->
        <nav v-show="isMenuVisible" ref="menu" id="menu"
            class="navbar fixed top-0 right-0 h-screen w-full max-w-[450px] px-4 md:px-6 py-4 text-white flex-col justify-center gap-y-4 z-20"
            role="navigation" aria-labelledby="site-title">
            <div>
                <ul
                    class="space-y-4 text-3xl font-semibold overflow-y-auto pointer-events-auto h-auto max-h-2/3 w-full max-w-3xs py-6 mt-6 menu-items">
                    <li v-for="(item, index) in menuItems" :key="item">
                        <button @click="handleGoTo(index)" :class="[
                            'uppercase border-b-2 pr-5 cursor-pointer transition-colors duration-300 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-accent',
                            activeIndex === index ? 'text-secondary border-secondary' : 'text-white border-white/0 hover:text-secondary'
                        ]" role="button" tabindex="0" :aria-current="activeIndex === index ? 'page' : null">
                            {{ item }}
                        </button>
                    </li>

                </ul>

                <!-- Footer Content -->
                <div class="flex flex-col justify-between gap-3 sm:gap-4 w-full pointer-events-auto mt-10">
                    <address class="not-italic text-white space-y-1 text-sm sm:text-base font-light">
                        <p><span class="font-semibold">Phone:</span> <a href="tel:+2348022475918"
                                class="opacity-80 hover:text-secondary hover:opacity-100 transition-colors duration-300">+2348022475918</a>
                        </p>
                        <p><span class="font-semibold">Email:</span> <a href="mailto:isonguyombiz@gmail.com"
                                class="opacity-80 hover:text-secondary hover:opacity-100 transition-colors duration-300">isonguyombiz@gmail.com</a>
                        </p>
                    </address>

                    <ul class="flex space-x-2 font-bold text-lg socials">
                        <li v-for="social in socials" :key="social.label">
                            <a :href="social.href" target="_blank" rel="noopener noreferrer" :title="social.name"
                                class="font-heading uppercase p-1 text-white hover:text-secondary transition-colors duration-300 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-accent">{{
                                    social.label }}</a>
                        </li>
                    </ul>

                </div>
            </div>
        </nav>
    </header>
</template>

<script setup>
import { ref, nextTick, onMounted, onBeforeUnmount, computed, watch } from 'vue'
import gsap from 'gsap'

const props = defineProps({
    darkBg: Boolean,
    currentIndex: {
        type: Number,
        default: 0
    },
    isScrolling: Boolean
})
const emit = defineEmits(['goTo', 'toggle-nav'])

const isMenuOpen = ref(false)
const isMenuVisible = ref(false)
const isAnimating = ref(false)

const activeIndex = ref(0)

const logo = ref(null)
const menuButton = ref(null)
const menu = ref(null)
const navbar = ref(null)
const bgCircle = ref(null)
const sectionTitleRef = ref('')

const menuItems = ['Home', 'About Me', 'Skills', 'My Works', 'Articles', 'Contact Me']
const socials = [
    { label: 'GH.', name: 'Github', href: '#' },
    { label: 'LI.', name: 'LinkedIn', href: '#' },
    { label: 'TW.', name: 'Twitter', href: '#' },
    { label: 'BE.', name: 'Behance', href: '#' }
]

let openTimeline = null
let closeTimeline = null



const sectionTitle = computed(() => {
    if (activeIndex.value === 0) return ''
    return menuItems[activeIndex.value] ?? 'Home'
})



const getNavbarWidth = () => navbar.value?.offsetWidth || 300


function toggleMenu() {
    if (isAnimating.value) return

    isAnimating.value = true
    isMenuOpen.value ? closeMenu() : (isMenuVisible.value = true, nextTick(openMenu))
}

function handleKeydown(e) {
    if (e.key === 'Escape' && isMenuOpen.value) closeMenu()
}

function openMenu() {
    if (closeTimeline) closeTimeline.kill()
    isMenuOpen.value = true
    emit('toggle-nav', true)

    const rect = logo.value?.getBoundingClientRect()
    if (!rect) return

    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2

    gsap.set(bgCircle.value, {
        top: centerY,
        left: centerX,
        xPercent: -50,
        yPercent: -50,
        width: 100,
        height: 100,
        scale: 0.2
    })

    openTimeline = gsap.timeline({ defaults: { ease: 'expo.inOut' } })

    openTimeline.to(bgCircle.value, {
        scale: 1,
        width: getNavbarWidth(),
        height: '100vh',
        top: 0,
        left: '100vw',
        xPercent: -100,
        yPercent: 0,
        ease: 'expo.inOut',
        duration: 1.25
    })

    const menuItemsEl = menu.value?.querySelectorAll('.menu-items li') || []
    const footerText = menu.value?.querySelectorAll('p') || []
    const socialsEl = menu.value?.querySelectorAll('.socials li') || []
    const itemsWrapper = menu.value?.querySelector('.menu-items')

    openTimeline.fromTo(menuItemsEl, { y: 20, opacity: 0 }, { y: 0, opacity: 1, stagger: 0.08 }, '-=1')
    openTimeline.fromTo(footerText, { y: 20, opacity: 0 }, { y: 0, opacity: 1, stagger: 0.08 }, '-=0.8')
    openTimeline.fromTo(socialsEl, { y: 20, opacity: 0 }, { y: 0, opacity: 1, stagger: 0.08 }, '-=0.6')
    if (itemsWrapper) {
        openTimeline.fromTo(itemsWrapper, { opacity: 0 }, { opacity: 1 }, '-=1')
    }

    openTimeline.eventCallback("onComplete", () => {
        isAnimating.value = false
    })

}

function closeMenu() {
    return new Promise((resolve) => {
        if (openTimeline) openTimeline.kill()
        isMenuOpen.value = false

        const rect = menuButton.value?.getBoundingClientRect()
        if (!rect) {
            emit('toggle-nav', false)
            return resolve()
        }

        const centerX = rect.left + rect.width / 2
        const centerY = rect.top + rect.height / 2

        closeTimeline = gsap.timeline({ defaults: { ease: 'expo.inOut' } })

        const menuItemsEl = menu.value?.querySelectorAll('li') || []
        const footerText = menu.value?.querySelectorAll('p') || []
        const socialsEl = menu.value?.querySelectorAll('.socials li') || []
        const itemsWrapper = menu.value?.querySelector('.menu-items')

        closeTimeline.to(socialsEl, { y: 20, opacity: 0, stagger: -0.08 }, '-=0.2')
        closeTimeline.to(footerText, { y: 20, opacity: 0, stagger: -0.08 }, '-=0.2')
        closeTimeline.to(menuItemsEl, { y: 20, opacity: 0, stagger: -0.08 })
        if (itemsWrapper) {
            closeTimeline.to(itemsWrapper, { opacity: 0 }, '-=0.1')
        }

        closeTimeline.to(
            bgCircle.value,
            {
                scale: 0,
                width: 100,
                height: 100,
                top: centerY,
                left: centerX,
                xPercent: -50,
                yPercent: -50,
                ease: 'expo.inOut',
                duration: 1,
            },
            '-=0.5'
        )

        closeTimeline.eventCallback("onComplete", () => {
            isAnimating.value = false
            isMenuVisible.value = false
            emit('toggle-nav', false)
            resolve()
        })
    })
}



async function handleGoTo(index) {
    await closeMenu()
    emit('goTo', index)
}


const debounce = (fn, delay = 200) => {
    let timer
    return (...args) => {
        clearTimeout(timer)
        timer = setTimeout(() => fn(...args), delay)
    }
}

const handleResize = debounce(() => {
    if (isMenuOpen.value && bgCircle.value) {
        gsap.to(bgCircle.value, {
            scale: 1,
            width: getNavbarWidth(),
            height: '100vh',
            duration: 1,
            ease: 'expo.inOut'
        })
    }
})

onMounted(() => {
    if (navbar.value) {
        gsap.from(navbar.value, { y: -80, opacity: 0, duration: 1, ease: 'power3.out', delay: 0.5 })
    }
    window.addEventListener('resize', handleResize)
    window.addEventListener('keydown', handleKeydown)
})

onBeforeUnmount(() => {
    window.removeEventListener('resize', handleResize)
    window.removeEventListener('keydown', handleKeydown)
    openTimeline?.kill()
    closeTimeline?.kill()
    openTimeline = null
    closeTimeline = null
})

watch(() => props.currentIndex, (newVal) => {
    activeIndex.value = newVal
})

</script>

<style scoped>
/*.logo {
     -webkit-text-stroke: 2px white; 
}*/

.menu-burger {
    transition: all 250ms ease-out;
    position: relative;
}

.menu-burger:before,
.menu-burger:after {
    content: '';
    width: 40px;
    height: 2px;
    position: absolute;
    /* Set background color base on darkBg */
    background-color: black;
    transition: all 250ms ease-out;
}

.menu-burger:before {
    transform: translateY(-3px);
}

.menu-burger:after {
    transform: translateY(8px);
}

.light-burger.menu-burger:before,
.light-burger.menu-burger:after {
    background-color: white;
}

.active.menu-burger:after,
.active.menu-burger:before {
    background-color: white;
}

.menu-burger:hover:before,
.menu-burger:hover:after {
    background-color: var(--color-accent);
}

.active.menu-burger:before {
    transform: translateY(0) rotate(45deg);
}

.active.menu-burger:after {
    transform: translateY(0) rotate(-45deg);
}

.menu-items {
    overflow-y: auto;
    scrollbar-width: thin;
    scrollbar-color: rgba(255, 255, 255, 0.5) transparent;
}

.menu-items::-webkit-scrollbar {
    width: 6px;
}

.menu-items::-webkit-scrollbar-track {
    background: transparent;
}

.menu-items::-webkit-scrollbar-thumb {
    background-color: rgba(255, 255, 255, 0.5);
    border-radius: 3px;
}
</style>
