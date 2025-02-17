<script setup lang="ts">
withDefaults(defineProps<{ white: boolean }>(), {
    white: false
})
</script>

<template>
    <img
        src="~/assets/images/icons/arrorRightCircle.svg"
        alt="Arror right"
        :class="white && 'invert'"
    />
</template>