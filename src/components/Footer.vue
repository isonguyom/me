<template>
<footer class="bg-transparent text-white p-4 z-40 fixed bottom-0 w-full pointer-events-none">
    <div class="w-full flex justify-between items-end">
        <div>
            <p class="text-xs">&copy; {{ new Date().getFullYear() }} | All rights reserved.</p>
        </div>
        <div class="flex space-x-4 bg-primary rounded-lg p-4 flex items-center justify-center text-center">
            <button v-if="index === 0" @click="handleGoTo(1)" class="pointer-events-auto cursor-pointer">></button>
            <span v-else-if="index < total - 1">0{{index + 1}}</span>
            <button v-else @click="handleGoTo(total - 2)" class="pointer-events-auto cursor-pointer"><</button>
        </div>
    </div>
    </footer>
</template>

<script setup>
defineProps(
{
    index: {
        required: true
    },
    total: {
        type: Number,
        required: true
    }
}
)

const emit = defineEmits(['goTo'])

const handleGoTo = (ind) => {
   emit('goTo', ind)
}
</script>