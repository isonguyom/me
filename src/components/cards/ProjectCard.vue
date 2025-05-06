<template>
  <div
    class="bg-white rounded-lg shadow-md hover:shadow-xl transition duration-300 overflow-hidden border border-gray-200"
  >
    <img
      :src="project.image"
      :alt="project.title"
      class="w-full h-48 object-cover"
    />
    <div class="p-4 space-y-2">
      <h3 class="text-xl font-bold text-[#0c325b]">{{ project.title }}</h3>
      <p class="text-gray-700 text-sm">{{ project.description }}</p>
      <a
        v-if="project.link"
        :href="project.link"
        target="_blank"
        rel="noopener"
        class="inline-block mt-2 text-sm font-medium text-[#0c325b] hover:underline"
      >
        View Project →
      </a>
    </div>
  </div>
</template>

<script setup>
defineProps({
 project: {Object}
})
</script>
