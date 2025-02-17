<script setup lang="ts">
defineProps<{ active?: boolean }>()
</script>

<template>
    <div
        :class="!active  && 'opacity-0 invisible'"
        class="absolute left-0 top-0 w-full h-full backdrop-blur-sm transition-all duration-300"
    >
        <div
            class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-8 w-8"
        >
            <div
                class="h-full w-full rounded-full border-4 border-t-blue border-r-blue border-b-white border-l-white
                    animate-spin"
            />
        </div>
    </div>
</template>