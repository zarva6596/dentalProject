<script setup lang="ts">
withDefaults(defineProps<{ darkMode?: boolean }>(), {
    darkMode: false
})

const emit = defineEmits<{
    prev: [],
    next: []
}>()
</script>

<template>
    <div class="flex items-center justify-center gap-2.5 mt-10">
        <DArrowBtn
            class="swiper-button-prev"
            type="prev"
            :dark-mode    
            @click="emit('prev')"
        />

        <DArrowBtn
            class="swiper-button-next"
            :dark-mode
            @click="emit('next')"
        />
    </div>
</template>