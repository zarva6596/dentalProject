<script setup lang="ts">
import DServiceCard from '~/components/pages/home/services/DServiceCard.vue';
import { useServiceStore } from '~/store/useServicesStore.js'

const { items } = storeToRefs(useServiceStore())
</script>

<template>
    <DSection class="pt-10 pb-25 relative">
        <div
            class="bg-gradient-to-b from-blue-light to-white absolute w-screen h-[120vh] bottom-0 left-1/2 -translate-x-1/2"
        />
        
        <div class="flex flex-col items-center relative">
            <DSectionHeading>
                <DMarkedWord>
                    Services
                </DMarkedWord>
            </DSectionHeading>

            <DDescriptionWrapper class="max-w-[526px] text-center">
                We use only the best quality materials on the market in order to provide the best products to our patients.
            </DDescriptionWrapper>
        </div>

        <div class="grid grid-cols-3 gap-x-14 gap-y-12 relative">
            <DServiceCard
                v-for="(item, i) in items"
                :key="i"
                :item="item"
            />
        </div>
    </DSection>
</template>