<template>
    <div class="w-full">
        <label v-if="label" :for="id" class="block mb-1 text-sm lg:text-base text-left opacity-75">
            {{ label }}
        </label>
        <textarea :id="id" :value="modelValue" :rows="rows" :placeholder="placeholder" :class="[
            'w-full px-4 py-3 rounded-lg border bg-white/5',
            'border-black/10 hover:border-accent transition-all focus:outline-none focus:ring-2 focus:ring-primary',
            error ? 'border-red-500' : '',
            textareaClass
        ]" @input="$emit('update:modelValue', $event.target.value)"></textarea>
        <p v-if="error" class="mt-1 text-sm text-red-500">{{ error }}</p>
    </div>
</template>

<script setup>
defineProps({
    modelValue: String,
    label: String,
    placeholder: String,
    rows: {
        type: Number,
        default: 5,
    },
    error: String,
    id: String,
    textareaClass: {
        type: String,
        default: '',
    },
})

defineEmits(['update:modelValue'])
</script>