<script setup lang="ts">

</script>

<template>
    <header class="max-w-header w-full mx-auto px-10 py-4.5 bg-blue-light rounded-lg my-10 flex atems-center justify-between">
        <nuxt-link to="/" class="flex items-center">
            <img src="~/assets/images/logos/logo.svg" alt="Logo image">
        </nuxt-link>

        <DNavBar />

        <div>
            <DUserDropdown />
        </div>
    </header>
</template>