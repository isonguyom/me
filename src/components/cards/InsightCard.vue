<template>
  <div
    class="bg-gray-50 rounded-lg shadow-md hover:shadow-lg transition duration-300 border border-gray-200 overflow-hidden"
  >
    <img
      v-if="insight.image"
      :src="insight.image"
      :alt="insight.title"
      class="w-full h-40 object-cover"
    />
    <div class="p-4 space-y-2">
      <h3 class="text-xl font-bold text-[#0c325b]">{{ insight.title }}</h3>
      <p class="text-gray-700 text-sm">{{ insight.summary }}</p>
      <a
        v-if="insight.link"
        :href="insight.link"
        target="_blank"
        rel="noopener"
        class="inline-block mt-2 text-sm font-medium text-[#0c325b] hover:underline"
      >
        Read More →
      </a>
    </div>
  </div>
</template>

<script setup>
defineProps({
 insight: {Object}
})
</script>
