<script setup lang="ts">
import DServiceCard from '~/components/pages/home/services/DServiceCard.vue';
import { useServiceStore } from '~/store/useServicesStore.js'

const { items } = storeToRefs(useServiceStore())
</script>

<template>
    <DSection
        class="pt-10 pb-25 relative"
        firs-gradient-section
    >
        <div
            ref="servicesSection"
            class="flex flex-col lg:items-center relative"
        >
            <DSectionHeading class="lg:!text-h1">
                <DMarkedWord>
                    Services
                </DMarkedWord>
            </DSectionHeading>

            <DDescriptionWrapper class="max-w-[526px] lg:text-center mb-12 lg:mb-20">
                We use only the best quality materials on the market in order to provide the best products to our patients.
            </DDescriptionWrapper>
        </div>

        <div class="grid lg:grid-cols-3 gap-x-14 gap-y-8 lg:gap-y-12 relative">
            <DServiceCard
                v-for="(item, i) in items"
                :key="i"
                :item="item"
            />
        </div>
    </DSection>
</template>