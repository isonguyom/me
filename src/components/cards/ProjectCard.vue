<template>
  <div :class="[
    'w-full h-full flex flex-col lg:flex-row justify-center items-center gap-4 lg:gap-8',
    isEven ? 'lg:flex-row-reverse' : ''
  ]">
    <!-- Project Image -->
    <div
      class="w-full md:w-2/3 lg:w-1/2 h-40 sm:h-50 lg:h-auto overflow-hidden rounded-full shadow-lg border border-white/10 mx-auto relative">
      <img :src="project.image" :alt="`Preview of ${project.title}`" class="w-full h-full object-cover object-center"
        loading="lazy" />
      <div class="absolute inset-0 bg-black/50"></div>
    </div>

    <!-- Project Content -->
    <div class="p-4 space-y-2 lg:space-y-4 text-center w-full md:w-2/3 lg:w-1/2 lg:text-left mx-auto">
      <h3 class="text-xl md:text-3xl lg:text-5xl font-bold text-primary capitalize">
        {{ project.title }}
      </h3>

      <p class="text-sm md:text-base lg:text-xl lg:pr-6 text-pretty">
        {{ project.description }}
      </p>

      <!-- Badges -->
      <div v-if="project.tags?.length" class="flex flex-wrap justify-center lg:justify-start gap-2">
        <span v-for="(tag, index) in project.tags" :key="index"
          class="bg-accent text-background text-xs font-medium px-3 py-1 rounded-full capitalize">
          {{ tag }}
        </span>
      </div>
      <BaseButton v-if="project.link" variant="ghost" class="mt-4" @click="goToProject(project.link)" role="link"
        aria-label="View project details">
        View Project →
      </BaseButton>

    </div>
  </div>
</template>

<script setup>
import BaseButton from '@/components/utilities/BaseButton.vue'

defineProps({
  project: {
    type: Object,
    required: true,
  },
  isEven: {
    type: Boolean,
    default: false,
  },
})

const goToProject = (link) => {
  window.open(link, '_blank')
}
</script>
