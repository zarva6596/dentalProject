<script setup lang="ts">
import { useMobileMenuStore } from '~/store/useMobileMenuStore'
import { useHeader } from '#build/imports';

const { activeMobileMenu } = storeToRefs(useMobileMenuStore())
const { toggleMobileMenu } = useMobileMenuStore()

const { isWhite } = useHeader()
</script>

<template>
    <header
        class="z-20 max-w-content w-full mx-auto px-5 lg:px-10 lg:py-4.5 rounded-lg my-10 flex atems-center justify-between transition-all duration-300"
        :class="isWhite ? 'lg:bg-white' : 'lg:bg-blue-light'"
    >
        <DLogo class="hidden lg:flex" />

        <DHeaderMobileVision
            class="lg:hidden"
            @click-toggle="toggleMobileMenu"
        />

        <DNavBar class="hidden lg:flex" />

        <div class="hidden lg:flex items-center gap-x-5">
            <DUserDropdown />

            <DButton>Book Now</DButton>
        </div>

        <DMobileMenu v-model="activeMobileMenu" />
    </header>
</template>