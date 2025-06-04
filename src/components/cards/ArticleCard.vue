<template>
  <div ref="card"
    class="w-full h-full flex flex-col justify-between items-start rounded-lg shadow-lg bg-white border border-black/10">
    <div>
      <!-- Image section -->
      <div class="w-full relative">
        <img :src="article.poster" :alt="`${article.title} poster`" :title="`${article.title} poster`"
          class="w-full h-70 object-cover" />
        <div class="absolute inset-0 bg-black/50 flex justify-end items-end p-3 sm:p-4">
          <div class="w-full flex gap-2 justify-between items-center">
            <span class="text-white/80 text-xs md:text-sm font-medium italic">
              {{ article.published_date }}
            </span>
            <BaseButton variant="secondary" size="sm" @click="goTo(article.platform.link)" role="link">
              {{ article.platform.name }}
            </BaseButton>
          </div>
        </div>
      </div>

      <!-- Text section -->
      <div class="p-3 sm:p-4 pb-6 md:pb-8 space-y-2">
        <h3>
          <a :href="article.link" target="_blank"
            class="text-lg md:text-xl font-bold line-clamp-1 uppercase text-primary hover:text-accent hover:underline">
            {{ article.title }}
          </a>
        </h3>
        <p class="text-sm md:text-base xl:text-lg opacity-90 line-clamp-3">
          {{ article.excerpt }}
        </p>

        <!-- <div class="w-full flex gap-2 justify-between items-center mt-6">
          <span class="text-black/80 text-xs md:text-sm font-medium italic">
            {{ article.published_date }}
          </span>
          <BaseButton variant="secondary" size="sm" @click="goTo(article.platform.link)" role="link">
            {{ article.platform.name }}
          </BaseButton>
        </div> -->
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import BaseButton from '@/components/utilities/BaseButton.vue'

gsap.registerPlugin(ScrollTrigger)

const props = defineProps({
  article: {
    type: Object,
    required: true
  }
})

const card = ref(null)

</script>
