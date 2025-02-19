<script setup lang="ts">
withDefaults(defineProps<{
    type?: HTMLInputElement["type"],
    label?: string
    placeholder?: string
}>(), {
    type: 'text',
    placeholder: ''
})
</script>

<template>
    <div class="flex flex-col gap-2.5">
        <label
            v-if="label"
            class="text-text text-b1 font-medium"
        >
            {{ label }}
        </label>

        <textarea
            v-if="type === 'textarea'"
            :placeholder="placeholder"
            class="flex-auto py-3.5 px-4 rounded-2lg bg-white text-text border border-border
                text-b3 font-normal placeholder:text-placeholder min-h-[160px]"
        />

        <input
            v-else
            :type="type"
            :placeholder="placeholder"
            class="py-3.5 px-4 rounded-2lg bg-white text-text border border-border text-b3 font-normal placeholder:text-placeholder"
        >
    </div>
</template>