<template>
  <button :class="[
    'inline-flex items-center justify-center font-semibold text-sm uppercase transition-colors duration-300 ease-in-out relative focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-accent',
    variantClass,
    customClass,
    disabled ? 'cursor-not-allowed opacity-50' : 'cursor-pointer',
    variant.includes('ghost') ? '' : 'btn hover-slide-up hover:border-accent hover:text-white'
  ]" :type="type" :disabled="disabled">
    <span :class="[
      'flex gap-x-3 items-center relative inset-0 w-fit',
      variant.includes('ghost') ? 'p-1' : size === 'sm' ? 'px-2 py-1 text-xs' : 'px-6 py-3'
    ]">
      <slot />
    </span>
  </button>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  variant: {
    type: String,
    default: 'primary', // 'primary', 'secondary', 'outline', 'ghost'
  },
  type: {
    type: String,
    default: 'button',
  },
  size: {
    type: String,
    default: 'md', // 'sm', 'md', 'lg'
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
      return 'bg-primary text-white'
    case 'secondary':
      return 'bg-secondary text-primary'
    case 'outline':
      return 'border-2 border-primary text-primary'
    case 'ghost':
      return 'text-primary border-b hover:text-accent'
    case 'ghost-sec':
      return 'text-secondary border-b hover:text-accent'
    default:
      return 'bg-primary text-white'
  }
})
</script>

<style scoped>
.btn {
  position: relative;
  overflow: hidden;
}

.btn::before {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 0;
  background-color: var(--color-accent, #9333ea);
  /* fallback purple */
  content: "";
  transition: width 0.3s ease-out;
  z-index: 0;
}

.btn:hover::before {
  width: 100%;
}

.btn>span {
  position: relative;
  z-index: 1;
  transition: color 0.3s ease;
}

.btn.hover-slide-up:hover {
  color: white;
}
</style>
