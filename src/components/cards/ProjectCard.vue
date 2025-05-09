<!-- <template>
  <div class="w-full lg:flex lg:justify-between lg:items-center gap-8">
    <div class="w-full md:w-2/3 lg:w-1/2 h-40 sm:h-50 lg:h-auto overflow-hidden rounded-full shadow-lg mx-auto">
      <img src="/assets/profile.png" :alt="project.title" class="w-full object-cover" />
    </div>
    <div class="p-4 space-y-2 lg:space-y-4 text-center w-full md:w-2/3 lg:w-1/2 lg:text-left mx-auto">
      <h3 class="text-xl md:text-2xl lg:text-5xl font-bold text-primary">{{ project.title }}</h3>
      <p class="text-sm md:text-base lg:text-xl mb-4 lg:mb-8 lg:pr-6">{{ project.description }}</p>
      <BaseButton v-if="project.link" variant="ghost" @click="goToProject(project.link)">
        View Project →
      </BaseButton>
    </div>
  </div>
</template>

<script setup>
import BaseButton from '@/components/utilities/BaseButton.vue'

defineProps({
  project: { Object }
})

const goToProject = (link) => {
  window.open(link, '_blank')
}
</script> -->

<template>
  <div :class="[
    'w-full flex flex-col lg:flex-row items-center gap-4 lg:gap-8',
    isEven ? 'lg:flex-row-reverse' : ''
  ]">
    <!-- Project Image -->
    <div class="w-full md:w-2/3 lg:w-1/2 h-40 sm:h-50 lg:h-auto overflow-hidden rounded-full shadow-lg mx-auto">
      <img :src="'assets/profile.png'" :alt="`Preview of ${project.title}`"
        class="w-full h-full object-cover object-center" loading="lazy" />
    </div>

    <!-- Project Content -->
    <div class="p-4 space-y-2 lg:space-y-4 text-center w-full md:w-2/3 lg:w-1/2 lg:text-left mx-auto">
      <h3 class="text-xl md:text-3xl lg:text-5xl font-bold text-primary">
        {{ project.title }}
      </h3>

      <p class="text-sm md:text-base lg:text-xl mb-4 lg:mb-8 lg:pr-6">
        {{ project.description }}
      </p>

      <!-- Badges -->
      <div v-if="project.tags?.length" class="flex flex-wrap justify-center lg:justify-start gap-2 mt-2">
        <span v-for="(tag, index) in project.tags" :key="index"
          class="bg-accent text-background text-xs font-medium px-3 py-1 rounded-full">
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
