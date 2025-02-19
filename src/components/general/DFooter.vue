<script setup lang="ts">
import { useMobileMenuStore } from '~/store/useMobileMenuStore'

const { openMobileMenu } = useMobileMenuStore()
</script>

<template>
    <footer class="max-w-content w-full lg:pb-8 mx-auto relative">
        <div class="flex items-center justify-between pb-7 lg:pb-12 px-5 lg:px-0">
            <DLogo />

            <DFooterNavBar class="hidden lg:flex" />

            <div
                class="h-12 w-12 bg-blue-dark py-3 px-2 flex flex-col justify-between items-end lg:hidden"
                @click="openMobileMenu"
            >
                <div class="rounded-md bg-white h-[3px] w-[34px]" />

                <div class="rounded-md bg-white h-[3px] w-[27px]" />

                <div class="rounded-md bg-white h-[3px] w-[21px]" />
            </div>
        </div>

        <div class="mx-5 text-b1 font-medium lg:hidden mb-8 text-text">
            All our PRO level features at your fingertips.
        </div>

        <div class="lg:hidden mx-5 text-b1 font-semibold mb-2.5">Follow us on</div>

        <div
            class="border-t border-gray lg:border-blue-dark flex items-center justify-between pt-2.5 lg:pt-7 mx-5 lg:mx-0 w-fit lg:w-full"
        >
            <span class="text-b3 hidden lg:inline">All rights reserved ® uifry.com  | Terms and conditions apply!</span>

            <DSocialMediaList />
        </div>

        <div class="lg:hidden mt-14 bg-blue-dark flex items-center justify-center p-1">
            <span class="text-b3 font-medium text-white">Uifry by M.Aze, CopyRights are protected by Uifry</span>
        </div>
    </footer>
</template>