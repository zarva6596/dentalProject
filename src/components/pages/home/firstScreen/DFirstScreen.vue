<script setup lang="ts">
import DUserMessageCard from '~/components/universal/DUserMessageCard.vue';
import DPhoneBlock from './DPhoneBlock.vue';
import DPhotoSection from './DPhotoSection.vue';
</script>

<template>
    <DSection class="pt-7 flex flex-col lg:flex-row lg:items-end">
        <div class="lg:w-3/4">
            <h1 class="text-h2 lg:text-h1 mb-8">
                Get ready for your best ever 
                <span class="lg:hidden">Dental</span> <DMarkedWord class="lg:hidden">Experience!</DMarkedWord>
                <DMarkedWord class="hidden lg:inline-block">Dental Experience!</DMarkedWord>
            </h1>
        
            <p class="text-b1 text-text">
                We use only the best quality materials on the market in order to provide the best products to our patients, So don’t worry about anything and book yourself.
            </p>
        
            <div class="mt-8 mb-12 flex items-center gap-x-4">
                <DButton>Get Started</DButton>
            
                <DPhoneBlock title="Dental 24H Emergency" phone="0900-78601" />
            </div>
        
            <DUserMessageCard
                name="Thomas daniel"
                position="Sr Dental"
                photo="/user/user2.png"
                link="https://linkedin.com"
                message="Top Quailty dental treatment done by field experts, Highly recommended for everyone"
                icon="linkedIn"
                class="lg:w-94 lg:mb-20"
            />
        </div>

        <DPhotoSection class="mt-14" />
    </DSection>
</template>


hello world !!!!