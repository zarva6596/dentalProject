<script setup lang="ts">

</script>

<template>
    <div class="flex flex-col min-h-screen">
        <DHeader />

        <main class="flex-auto">
            <slot />
        </main>

        <DFooter />
    </div>
</template>