<template>
  <button :class="[
    'inline-flex items-center justify-center rounded-full font-semibold text-sm uppercase transition duration-300 ease-in-out',
    variantClass,
    customClass,
    disabled ? 'cursor-not-allowed opacity-50' : 'cursor-pointer',
    variant === 'ghost' ? 'p-0' : 'px-6 py-3',
  ]" :type="type" :disabled="disabled">
    <slot />
  </button>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  variant: {
    type: String,
    default: 'primary', // 'primary', 'outline', 'ghost'
  },
  type: {
    type: String,
    default: 'button',
  },
  disabled: Boolean,
  customClass: {
    type: String,
    default: '',
  },
})

const variantClass = computed(() => {
  if (props.disabled) {
    return 'bg-gray-300 text-white cursor-not-allowed'
  }

  switch (props.variant) {
    case 'primary':
      return 'bg-primary text-background hover:bg-accent hover:text-background'
    case 'secondary':
      return 'bg-secondary text-primary hover:bg-accent hover:text-background'
    case 'outline':
      return 'border-2 border-primary text-primary hover:border-accent hover:text-background hover:bg-accent'
    case 'ghost':
      return 'text-primary hover:text-accent hover:bg-transparent'
    default:
      return 'bg-primary text-white'
  }
})
</script>