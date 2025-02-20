<script setup lang="ts">
withDefaults(defineProps<{
    icon: 'email' | 'password' | 'user'
    type?: HTMLInputElement["type"],
    placeholder?: string
}>(), {
    type: 'text',
    placeholder: ''
})
</script>

<template>
    <div class="flex items-center p-5 gap-2 border border-gray-200 rounded-2lg bg-white">
        <img
            :src="`./icons/auth/${icon}.svg`"
            :alt="`${icon} icon`"
            class="shrink-0"
        >

        <input
            :type="type"
            :placeholder="placeholder"
            class="bg-white flex-auto text-b3 font-normal text-black/30
                placeholder:text-b3 placeholder:font-normal placeholder:text-black/30"
        >
    </div>
</template>