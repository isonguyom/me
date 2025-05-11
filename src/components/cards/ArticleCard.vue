<template>
  <div
    class="w-full h-full flex flex-col justify-between items-start rounded-lg shadow-lg bg-white border border-black/10">
    <div>
      <div class="w-full relative">
        <img :src="article.poster" :alt="`${article.title} poster`" :title="`${article.title} poster`"
          class="w-full h-50 object-cover" />
        <div class="absolute inset-0 bg-cover bg-center bg-black/50 flex justify-end items-end p-3">
          <span class="text-white/80">{{ article.published_date }}</span>
        </div>
      </div>

      <div class="p-3 sm:p-4 space-y-2">
        <h3 class="text-lg sm:text-xl font-semibold line-clamp-2 uppercase">{{ article.title }}</h3>
        <p class="text-sm md:text-base opacity-90 line-clamp-3">{{ article.excerpt }}</p>
      </div>
    </div>
    <div class="p-3 sm:p-4 w-full flex gap-2 justify-between">

      <BaseButton variant="ghost" @click="goTo(article.link)" role="link">
        Read Article →
      </BaseButton>
      <a :href="article.platform.link" class="italic text-text/80 hover:text-accent border-b transition">{{
        article.platform.name
      }}</a>
    </div>

  </div>
</template>

<script setup>
import BaseButton from '@/components/utilities/BaseButton.vue'

defineProps({
  article: {
    type: Object,
    required: true,
  },
})

const goTo = (url) => window.open(url, '_blank')
</script>
