<script setup lang="ts">
withDefaults(defineProps<{
    fullWidth?: boolean
    background?: boolean
}>(), {
    fullWidth: false,
    background: false
})
</script>

<template>
    <section
        class="px-5 max-w-content mx-auto"
        :class="fullWidth && 'relative'"
    >
        <div
            v-if="fullWidth"
            class="-z-10 pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-full w-screen"
            :class="background && 'bg-blue-light'"    
        />

        <slot />
    </section>
</template>