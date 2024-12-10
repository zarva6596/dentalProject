<script setup lang="ts">

</script>

<template>
    <div class="default-layout flex flex-col min-h-screen max-w-max mx-auto px-4">
        <DHeader />

        <main class="flex-auto">
            <slot />
        </main>

        <DFooter />
    </div>
</template>

<style>
.default-layout {
    @apply text-blue-dark;
}
</style>