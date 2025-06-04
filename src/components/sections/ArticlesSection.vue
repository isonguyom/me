<template>
  <div ref="articlesSection" id="articles"
    class="h-full w-full flex justify-center items-center py-12 relative overflow-hidden bg-white text-text"
    aria-labelledby="articles-heading" role="region">

    <div class="relative z-10 w-full h-full px-4 md:px-6 xl:px-10 py-4">
      <p v-if="!articles?.length" class="text-center text-lg">No articles available.</p>

      <div ref="scrollContainer"
        class="w-full h-auto max-h-full overflow-y-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 custom-scrollbar">
        <div v-for="(article, index) in articles" :key="article.id" class="article-card-item">
          <ArticleCard :article="article" />
        </div>
      </div>
    </div>

  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, nextTick } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import { useArticlesStore } from '@/stores/articles'

import ArticleCard from '@/components/cards/ArticleCard.vue'

gsap.registerPlugin(ScrollTrigger)

// Props are not needed here since we are using a store
const articlesStore = useArticlesStore()
const articles = articlesStore.articles

// Refs for the scroll container and GSAP context
const articlesSection = ref(null)
const scrollContainer = ref(null)
let ctx // we'll declare it in the correct scope

// Handle wheel event to prevent default scrolling behavior
function handleWheel(e) {
  const el = scrollContainer.value
  if (!el) return

  const scrollTop = el.scrollTop
  const maxScroll = el.scrollHeight - el.clientHeight
  const delta = e.deltaY

  // Scroll up
  if (delta < 0 && scrollTop > 0) {
    e.stopPropagation()
  }

  // Scroll down
  else if (delta > 0 && scrollTop < maxScroll) {
    e.stopPropagation()
  }
}

onMounted(() => {
  const el = scrollContainer.value
  if (el) {
    el.addEventListener('wheel', handleWheel, { passive: false })
  }

  ctx = gsap.context(async () => {
    await nextTick()

    const cards = scrollContainer.value?.querySelectorAll('.article-card-item') || []

    cards.forEach((card, index) => {
      gsap.from(card, {
        scrollTrigger: {
          trigger: card,
          scroller: scrollContainer.value,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
        y: 40,
        opacity: 0,
        duration: 0.8,
        delay: index * 0.05,
        ease: 'power2.out',
      })
    })
  }, scrollContainer)
})

onBeforeUnmount(() => {
  const el = scrollContainer.value
  if (el) {
    el.removeEventListener('wheel', handleWheel)
  }
  // ctx?.revert()
  ScrollTrigger.kill() // ensure cleanup
})
</script>

<style scoped></style>
