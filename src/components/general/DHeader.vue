<script setup lang="ts">

</script>

<template>
    <header class="max-w-content w-full mx-auto px-5 lg:px-10 ld:py-4.5 lg:bg-blue-light rounded-lg my-10 flex atems-center justify-between">
        <DLogo />

        <DNavBar class="hidden lg:flex" />

        <div class="hidden lg:flex items-center gap-x-5">
            <DUserDropdown />

            <DButton>Book Now</DButton>
        </div>

        <div class="lg:hidden bg-blue rounded-lg h-12 w-12 flex items-center justify-center">
            <img src="~/assets/images/icons/menu-toggle-icon.svg" alt="Menu toggle icon">
        </div>
    </header>
</template>