<template>
  <transition-group name="toast-fade" tag="div" class="fixed top-4 right-4 space-y-2 z-50">
    <div v-for="(toast, index) in toasts" :key="toast.id" :class="[
      'px-4 py-3 rounded-md shadow-lg text-sm flex items-start space-x-2 max-w-xs w-full',
      toast.type === 'success' ? 'bg-green-100 text-green-800' :
        toast.type === 'error' ? 'bg-red-100 text-red-800' :
          toast.type === 'warning' ? 'bg-yellow-100 text-yellow-800' :
            'bg-blue-100 text-blue-800'
    ]">
      <span class="font-medium capitalize">{{ toast.type }}:</span>
      <span class="flex-1">{{ toast.message }}</span>
      <button @click="removeToast(index)" class="ml-2 text-xl leading-none">
        &times;
      </button>
    </div>
  </transition-group>
</template>

<script setup>
import { reactive } from 'vue'

const toasts = reactive([])

function addToast({ message, type = 'info', duration = 3000 }) {
  const id = Date.now()
  toasts.push({ id, message, type })

  setTimeout(() => {
    const index = toasts.findIndex(t => t.id === id)
    if (index !== -1) toasts.splice(index, 1)
  }, duration)
}

function removeToast(index) {
  toasts.splice(index, 1)
}

defineExpose({ addToast })
</script>

<style scoped>
.toast-fade-enter-active,
.toast-fade-leave-active {
  transition: all 0.3s ease;
}

.toast-fade-enter-from {
  opacity: 0;
  transform: translateY(-10px);
}

.toast-fade-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>