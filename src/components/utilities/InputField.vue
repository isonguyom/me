<template>
    <div class="w-full">
        <label v-if="label" :for="id" class="block mb-1 text-sm lg:text-base text-left opacity-75">
            {{ label }}
        </label>
        <input :id="id" :type="type" :placeholder="placeholder" :value="modelValue" :class="[
            'w-full px-4 py-3 rounded-lg border bg-white/5',
            'border-black/10 hover:border-accent transition-all focus:outline-none focus:ring-2 focus:ring-primary',
            error ? 'border-red-500' : '',
            inputClass
        ]" @input="$emit('update:modelValue', $event.target.value)" :aria-invalid="!!error"
            :aria-describedby="error ? `${id}-error` : null" />
        <p v-if="error" class="mt-1 text-sm text-red-500">{{ error }}</p>
    </div>
</template>

<script setup>
defineProps({
    modelValue: String,
    label: String,
    type: {
        type: String,
        default: 'text',
    },
    placeholder: String,
    error: String,
    id: String,
    inputClass: {
        type: String,
        default: '',
    },
})

defineEmits(['update:modelValue'])
</script>