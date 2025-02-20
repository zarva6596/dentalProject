<script setup lang="ts">
import { useTransitionSections } from '#build/imports';

const { isReady } = useTransitionSections()
</script>

<template>
    <div
        :class="isReady ? 'opacity-100' : 'opacity-0'"
        class="default-layout flex flex-col min-h-screen max-w-max mx-auto lg:px-4 transition-all duration-500"
    >
        <DHeader class="fixed left-1/2 -translate-x-1/2" />

        <main class="flex-auto">
            <slot />
        </main>
    </div>
</template>