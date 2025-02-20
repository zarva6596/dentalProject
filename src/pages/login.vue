<script setup lang="ts">
import DGoogleBtn from '~/components/pages/auth/DGoogleBtn.vue'
import DLoginForm from '~/components/pages/auth/DLoginForm.vue';

definePageMeta({
    layout: 'auth'
})
</script>

<template>
    <DSection class="h-screen flex flex-col justify-center bg-gradient-to-b from-blue-light to-white">
        <div class="max-w-[414px]">
            <div class="flex flex-col items-center lg:items-start">
                <DSectionHeading class="!mb-3 lg:!mb-2">
                    Welcome Back
                </DSectionHeading>

                <DDescriptionWrapper>
                    Discover a better way of spandings with Uifry.
                </DDescriptionWrapper>
            </div>

            <div>
                <DGoogleBtn />

                <DOr />

                <DLoginForm />
            </div>
        </div>
    </DSection>
</template>