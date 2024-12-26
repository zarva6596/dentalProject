<script setup lang="ts">
withDefaults(defineProps<{ darkMode?: boolean, type?: 'prev' | 'next' }>(), {
    darkMode: false,
    type: 'next'
})
</script>

<template>
    <button
        class="rounded-0 border-none py-2.5 px-6"
        :class="darkMode ? 'bg-black' : 'bg-white'"
    >
        <img
            v-if="type === 'prev'"
            src="~/assets/images/icons/arrowLeft.svg"
            alt="Left arrow icon"
            :class="darkMode && 'invert'"
        />

        <img
            v-else
            src="~/assets/images/icons/arrowRight.svg"
            alt="Right arrow icon"
            :class="darkMode && 'invert'"
        />
    </button>
</template>