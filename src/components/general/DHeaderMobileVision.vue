<script setup lang="ts">
const emit = defineEmits<{
    clickToggle: []
}>()
</script>

<template>
    <div class="w-full flex items-center justify-between">
        <DLogo />

        <div
            class="lg:hidden bg-blue rounded-lg h-12 w-12 flex items-center justify-center"
            @click="emit('clickToggle')"
        >
            <img src="~/assets/images/icons/menu-toggle-icon.svg" alt="Menu toggle icon">
        </div>
    </div>
</template>