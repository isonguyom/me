<template>
  <div
    ref="articlesSection"
    id="articles"
    class="h-screen w-full flex justify-center items-center py-10 bg-white text-black"
    aria-labelledby="articles-heading"
    role="region"
  >
    <div class="relative z-10 w-full h-full px-4 md:px-6 lg:px-10 py-8">
       <p v-if="!articles?.length" class="text-center text-lg">No articles available.</p>

      <div
        class="w-full h-auto max-h-full overflow-y-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 custom-scrollbar"
      >
        <ArticleCard v-for="(article, index) in articles" :key="article.id" :article="article" />
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

const articlesStore = useArticlesStore()
const articles = articlesStore.articles
const articlesSection = ref(null)

onMounted(async () => {
  await nextTick()
  if (!articlesSection.value) return

  gsap.fromTo(
    articlesSection.value.querySelector('.grid'),
    { opacity: 0, y: 50 },
    {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: articlesSection.value,
        start: 'top 80%',
        toggleActions: 'play none none reverse'
      }
    }
  )
})

onBeforeUnmount(() => {
  ScrollTrigger.getAll().forEach(trigger => trigger.kill())
})
</script>


<style scoped>
.custom-scrollbar {
  scrollbar-width: thin;
  scrollbar-color: rgba(0, 0, 0, 0.3) transparent;
}

.custom-scrollbar::-webkit-scrollbar {
  width: 6px;
}

.custom-scrollbar::-webkit-scrollbar-track {
  background: transparent;
}

.custom-scrollbar::-webkit-scrollbar-thumb {
  background-color: rgba(0, 0, 0, 0.3);
  border-radius: 10px;
}

</style>
