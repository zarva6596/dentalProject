<script setup lang="ts">
import { useMobileMenuStore } from '~/store/useMobileMenuStore'
import { useAuthStore } from '~/store/useAuthStore';
import { useHeader } from '#build/imports';

const { activeMobileMenu } = storeToRefs(useMobileMenuStore())
const { toggleMobileMenu } = useMobileMenuStore()
const { logged } = storeToRefs(useAuthStore())

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

        <div v-if="logged" class="hidden lg:flex items-center gap-x-5">
            <DUserDropdown />

            <DButton>Book Now</DButton>
        </div>

        <div v-else>
            <nuxt-link
                to="/login"
                class="text-b2 font-semibold mr-8 text-blue-dark"
            >
                Login
            </nuxt-link>

            <DButton to="/sign-up">Sign up</DButton>
        </div>

        <DMobileMenu v-model="activeMobileMenu" />
    </header>
</template>